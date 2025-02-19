import { Alert } from "react-native";

export const asyncAlert = ({
  title,
  message,
  cancelText = "Cancel",
  okText = "OK",
  onPress,
}) => {
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          style: "cancel",
          text: cancelText,
          onPress: () => {
            resolve(false);
          },
        },
        {
          text: okText,
          onPress: () => {
            onPress?.();
            resolve(true);
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => resolve(false),
      }
    );
  });
};
