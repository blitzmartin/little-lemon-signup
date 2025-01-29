import { Pressable, Text } from "react-native";
import { styles } from "../styles";

export const NavigationButton = ({
  btnText,
  isDisabled,
  navigation,
  navigateTo,
}) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(navigateTo)}
      isDisabled={isDisabled}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </Pressable>
  );
};
