import { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationButton } from "../shared/NavigationButton";
import { styles } from "../styles";

export const SubscribeScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
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
          <NavigationButton
            btnText={"Subscribe"}
            navigation={navigation}
            navigateTo={"Welcome"}
            isDisabled={email === ""}
          />
        </View>
        <View></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Thank you for subscribing, stay tuned! OK
