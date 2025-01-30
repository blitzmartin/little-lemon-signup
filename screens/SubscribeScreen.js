import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../styles";

export const SubscribeScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");

  const handlePress = () => {
    Alert.alert(
      "Thank you!",
      "Thank you for subscribing, stay tuned!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Welcome"),
          style: "default",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.formContainer}>
        <Image
          style={styles.altLogo}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.regularText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <View style={{ width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholder="Type your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={onChangeEmail}
            onBlur={Keyboard.dismiss}
          />
          <Pressable
            style={[styles.button, email === "" && styles.buttonDisabled]}
            onPress={() => email !== "" && handlePress()}
            disabled={email === ""}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
        <View></View>
      </View>
    </TouchableWithoutFeedback>
  );
};
