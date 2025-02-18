import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../styles";
import {
  addCustomer,
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
      await addCustomer(textInput);
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
        autoCapitalize="none"
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
      {customers.length > 0 && <Text>Customers:</Text>}
      <FlatList
        data={customers}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
