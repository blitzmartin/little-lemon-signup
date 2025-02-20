import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const usePreferences = () => {
  const [preferences, setPreferences] = useState({
    pushNotifications: false,
    marketingEmails: false,
    latestNews: false,
    // Add more preferences here
  });

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const savedPreferences = await AsyncStorage.getItem("preferences");
        if (savedPreferences) {
          setPreferences(JSON.parse(savedPreferences));
        }
      } catch (err) {
        console.error("Failed to load preferences", err);
      }
    };

    loadPreferences();
  }, []);

  useEffect(() => {
    const savePreferences = async () => {
      try {
        await AsyncStorage.setItem("preferences", JSON.stringify(preferences));
      } catch (err) {
        console.error("Failed to save preferences", err);
      }
    };

    savePreferences();
  }, [preferences]);

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { preferences, updatePreference };
};
