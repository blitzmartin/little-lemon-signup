import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { usePreferences } from "../hooks/usePreferences";
import { colorDisabled, colorGreen, colorLight, colorYellow } from "../styles";
export const AccountPreferencesScreen = () => {
  const { preferences, updatePreference } = usePreferences();

  return (
    <View style={accountStyles.container}>
      <Text style={accountStyles.boldText}>Account Preferences</Text>

      <View style={accountStyles.optionRow}>
        <Text>Push Notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={(value) =>
            updatePreference("pushNotifications", value)
          }
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={preferences.pushNotifications ? colorYellow : colorLight}
        />
      </View>

      <View style={accountStyles.optionRow}>
        <Text>Marketing Emails</Text>
        <Switch
          value={preferences.marketingEmails}
          onValueChange={(value) => updatePreference("marketingEmails", value)}
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={preferences.marketingEmails ? colorYellow : colorLight}
        />
      </View>

      <View style={accountStyles.optionRow}>
        <Text>Latest News</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={(value) => updatePreference("latestNews", value)}
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={preferences.latestNews ? colorYellow : colorLight}
        />
      </View>
    </View>
  );
};

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  boldText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
