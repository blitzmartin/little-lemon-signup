import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Go to Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};
