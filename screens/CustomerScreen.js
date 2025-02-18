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
import { styles } from "../styles";
import {
  createCustomer,
  emptyCustomersTable,
  getCustomers,
} from "../utils/database";

export const CustomerScreen = () => {
  const [textInput, onChangeTextInput] = useState("");
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
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
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const Item = ({ item }) => {
  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => console.log("Edit")}>
          <Ionicons
            name="create"
            size={32}
            color="#495f59"
            style={{ paddingRight: 8 }}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Delete")}>
          <Ionicons name="trash" size={32} color="#495f59" />
        </Pressable>
      </View>
    </View>
  );
};
