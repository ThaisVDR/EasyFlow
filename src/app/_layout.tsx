import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { View } from "react-native";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Inter: require("../src/fonts/Inter-VariableFont_opsz,wght.ttf"),
        });
      } catch (e) {
        console.warn("Erro ao carregar fontes", e);
      } finally {
        setLoaded(true);
      }
    }
    loadFonts();
  }, []);

  if (!loaded) return <View />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="screens/LoginPage" options={{ title: "Login" }} />
      <Stack.Screen
        name="screens/CadastroPage"
        options={{ title: "Cadastro" }}
      />
      <Stack.Screen
        name="screens/FlashCardPage"
        options={{ title: "FlashCards" }}
      />
      <Stack.Screen name="screens/LeituraPage" options={{ title: "Leitura" }} />
      <Stack.Screen
        name="screens/Forgot_Reset_Password/ForgotPassword"
        options={{ title: "Forgot Password" }}
      />
      <Stack.Screen
        name="screens/Forgot_Reset_Password/ResetPasswordPage"
        options={{ title: "Reset Password" }}
      />
    </Stack>
  );
}
