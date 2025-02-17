import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.accountIconContainer}
          onPress={() => navigation.navigate("AccountPreferences")}
        >
          <Ionicons name="person-circle-outline" size={32} color="#495f59" />
        </Pressable>
      </View>
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
