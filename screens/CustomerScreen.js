import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";
import { colorGreen, styles } from "../styles";
import {
  createCustomer,
  deleteCustomer,
  editCustomer,
  emptyCustomersTable,
  getCustomers,
} from "../utils/database";
export const CustomerScreen = () => {
  const [textInput, onChangeTextInput] = useState("");
  const [customers, setCustomers] = useState([]);
  const [dialog, setDialog] = useState({
    customer: {},
    isVisible: false,
  });

  useEffect(() => {
    //resetDatabase();
    getCustomers(setCustomers);
  }, []);

  const handleAddCustomer = async () => {
    try {
      await createCustomer(textInput);
      getCustomers(setCustomers);
      onChangeTextInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearList = async () => {
    try {
      await emptyCustomersTable();
      getCustomers(setCustomers);
    } catch (err) {
      console.error(err);
    }
  };

  const showDialog = (customer) =>
    setDialog({
      isVisible: true,
      customer,
    });

  const hideDialog = (updatedCustomer) => {
    setDialog({
      isVisible: false,
      customer: {},
    });
    editCustomer(updatedCustomer, setCustomers);
  };

  return (
    <View style={styles.formContainer}>
      <Text>Customer Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="add customer name"
        autoCapitalize="words"
        autoCorrect={false}
        value={textInput}
        onChangeText={onChangeTextInput}
        onBlur={Keyboard.dismiss}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!textInput}
        onPress={handleAddCustomer}
      >
        <Text style={styles.buttonText}>Save Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutlined} onPress={handleClearList}>
        <Text style={styles.buttonOutlinedText}>Clear List</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        {customers.length > 0 && (
          <Text style={styles.listTitle}>Customers:</Text>
        )}
        <FlatList
          data={customers}
          renderItem={({ item }) => (
            <Item
              customer={item}
              setCustomers={setCustomers}
              showDialog={showDialog}
            />
          )}
          keyExtractor={(item) => item.uid}
        />
      </View>
      <Portal>
        <Dialog
          visible={dialog.isVisible}
          onDismiss={hideDialog}
          style={{ backgroundColor: colorGreen }}
        >
          <Dialog.Title style={styles.dialogTitle}>
            Edit Customer name
          </Dialog.Title>
          <Dialog.Content>
            <TextInput
              value={dialog.customer.name}
              onChangeText={(text) =>
                setDialog((prev) => ({
                  ...prev,
                  customer: {
                    ...prev.customer,
                    name: text,
                  },
                }))
              }
              underlineColorAndroid="transparent"
              style={styles.dialogInputStyle}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              style={styles.dialogBtn}
              onPress={() => hideDialog(dialog.customer)}
            >
              Done
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const Item = ({ customer, setCustomers, showDialog }) => {
  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.itemText}>{customer.name}</Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => showDialog(customer)}>
          <Ionicons
            name="create"
            size={32}
            color="#495f59"
            style={{ paddingRight: 8 }}
          />
        </Pressable>
        <Pressable onPress={() => deleteCustomer(customer, setCustomers)}>
          <Ionicons name="trash" size={32} color="#495f59" />
        </Pressable>
      </View>
    </View>
  );
};

/*    <Portal>
        <Dialog visible={dialog.isVisible} onDismiss={hideDialog}>
          <Dialog.Title>Edit Customer name</Dialog.Title>
          <Dialog.Content>
            <TextInput
              value={dialog.customer.name}
              onChangeText={(text) =>
                setDialog((prev) => ({
                  ...prev,
                  customer: {
                    ...prev.customer,
                    name: text,
                  },
                }))
              }
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(dialog.customer)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */
