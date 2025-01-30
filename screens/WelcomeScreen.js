import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View></View>
      <Image
        style={styles.mainLogo}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.boldText}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};
