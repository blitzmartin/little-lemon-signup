import { StyleSheet } from "react-native";

const colorDark = "#333333";
const colorLight = "#EDEFEE";
const colorDisabled = "#999999";
export const colorGreen = "#495f59";
export const colorYellow = "#f2cf31";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorDark,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colorDark,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    width: "95%",
    height: 40,
    padding: 10,
    backgroundColor: colorGreen,
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: colorDisabled,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colorDark,
    width: "95%",
    height: 40,
    padding: 10,
  },
});
