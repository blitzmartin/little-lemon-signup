import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  AccountPreferencesScreen,
  SubscribeScreen,
  WelcomeScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      <Stack.Screen
        name="AccountPreferences"
        component={AccountPreferencesScreen}
      />
    </Stack.Navigator>
  );
};
