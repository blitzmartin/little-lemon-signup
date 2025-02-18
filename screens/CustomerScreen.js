import { useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "../styles";

export const CustomerScreen = () => {
  const [name, onChangeName] = useState("");
  const handleAddCustomer = () => {
    Alert.alert(
      "Added!",
      `Customer ${name} was added to list`,
      [
        {
          text: "OK",
          style: "default",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.formContainer}>
      <Text>Customer Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="add customer name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={onChangeName}
        onBlur={Keyboard.dismiss}
      />
      <Pressable style={styles.button} onPress={handleAddCustomer}>
        <Text style={styles.buttonText}>Save Customer</Text>
      </Pressable>
    </View>
  );
};
