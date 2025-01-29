import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { NavigationButton } from "../shared/NavigationButton";
import { styles } from "../styles";

export const SubscribeScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={onChangeEmail}
      />
      <NavigationButton
        btnText={"Subscribe"}
        navigation={navigation}
        navigateTo={"Welcome"}
        isDisabled={email === ""}
      />
    </View>
  );
};
