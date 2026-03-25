import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "./src/screens/LoginPage";
import FlashCardPage from "./src/screens/FlashCardPage";
import LeituraPage from "./src/screens/LeituraPage";
import ForgotPasswordPage from "./src/screens/Forgot_Reset_Password/ForgotPassword";
import ResetPasswordPage from "./src/screens/Forgot_Reset_Password/ResetPasswordPage";
import CadastroPage from "./src/screens/CadastroPage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Inter: require("./src/fonts/Inter-VariableFont_opsz,wght.ttf"),
        });
      } catch (e) {
        console.warn("Erro ao carregar fontes", e);
      } finally {
        setLoaded(true);
      }
    }
    loadFonts();
  }, []);

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Cadastro" component={CadastroPage}/>
        <Stack.Screen name="FlashCards" component={FlashCardPage} />
        <Stack.Screen name="Leitura" component={LeituraPage} /> 
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} /> 
        <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
