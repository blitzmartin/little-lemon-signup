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
      style={[styles.button, isDisabled && styles.buttonDisabled]}
      onPress={() => !isDisabled && navigation.navigate(navigateTo)}
      disabled={isDisabled}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </Pressable>
  );
};
