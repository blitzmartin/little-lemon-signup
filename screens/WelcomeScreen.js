import { Image, Text, View } from "react-native";
import { NavigationButton } from "../shared";
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
      <NavigationButton
        btnText={"Newsletter"}
        navigation={navigation}
        navigateTo={"Subscribe"}
      />
    </View>
  );
};
