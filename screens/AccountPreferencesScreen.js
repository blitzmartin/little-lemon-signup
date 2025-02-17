import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { colorDisabled, colorGreen, colorLight, colorYellow } from "../styles";

export const AccountPreferencesScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [latestNews, setLatestNews] = useState(true);

  return (
    <View style={accountStyles.container}>
      <Text style={accountStyles.boldText}>Account Preferences</Text>

      <View style={accountStyles.optionRow}>
        <Text>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={setPushNotifications}
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={pushNotifications ? colorYellow : colorLight}
        />
      </View>

      <View style={accountStyles.optionRow}>
        <Text>Marketing Emails</Text>
        <Switch
          value={marketingEmails}
          onValueChange={setMarketingEmails}
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={marketingEmails ? colorYellow : colorLight}
        />
      </View>

      <View style={accountStyles.optionRow}>
        <Text>Latest News</Text>
        <Switch
          value={latestNews}
          onValueChange={setLatestNews}
          trackColor={{ false: colorDisabled, true: colorGreen }}
          thumbColor={latestNews ? colorYellow : colorLight}
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
