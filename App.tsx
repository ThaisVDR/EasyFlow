import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/screens/LoginPage';
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function App() {
    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Inter: require("./src/fonts/Inter-VariableFont_opsz,wght.ttf"),
      });
      setLoaded(true);
    }

    loadFonts();
  }, []);

  if (!loaded) {
    return null;
  }
  return <LoginPage/>;
}

