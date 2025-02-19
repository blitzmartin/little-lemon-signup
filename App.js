import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { RootNavigator } from "./navigators/RootNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
