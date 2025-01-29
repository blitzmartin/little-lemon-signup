import { Text, View } from "react-native";
import { NavigationButton } from "../shared";
import { styles } from "../styles";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <NavigationButton
        btnText={"Newsletter"}
        navigation={navigation}
        navigateTo={"Subscribe"}
      />
    </View>
  );
};
