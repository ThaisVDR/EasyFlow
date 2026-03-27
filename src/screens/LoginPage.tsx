import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Linking,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import InputTexto from "../components/InputTexto";
import ButtonProp from "../components/button";
import AddLink from "../components/addLink";
import FlashCardPage from "./FlashCardPage";
import AuthLink from "../components/authComponents/authLink";
import { AuthStyles } from "../components/authComponents/authStyles";

export default function LoginPage({ navigation }: any) {
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerLogo}>
        <FontAwesome6 name="leaf" size={64} color="#10b981" />
        <Text style={styles.Tittle}>Bem-vindo ao EasyFlow</Text>
        <Text style={styles.SubTittle}>
          Faça login ou cadastre-se para continuar
        </Text>
      </View>
      <View style={styles.ItensAtributs}>
        <Text style={styles.InfoFormat}>Email</Text>
        <InputTexto placeholder="meuemail@gmail.com" />
        <Text style={styles.InfoFormat}>Senha</Text>
        <InputTexto placeholder="Digite sua senha" secureTextEntry={true} />

        <ButtonProp
          txt="Enviar"
          onPress={() => navigation.navigate("FlashCards")}
        />
      </View>
      <View style={AuthStyles.footer}>
        <Text style={styles.SubTittle}>Não tem uma conta? </Text>
        <AuthLink text="Cadastre-se" onPress={()=> navigation.navigate("Cadastro")}/>
      </View>
      <View style={AuthStyles.footer}>
        <Text style={AuthStyles.linkSubtitle}>Esqueci minha senha</Text>
        <AuthLink 
          text="recuperar" 
          onPress={() => navigation.navigate("ForgotPassword")}      
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F9FF",
    gap: 24,
  },
  InfoFormat: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "bold",
  },
  ContainerLogo: {
    width: "80%",
    maxHeight: 332,
    alignItems: "center",
    flexShrink: 0,
    justifyContent: "flex-end",
  },
  Tittle: {
    fontFamily: "Inter",
    fontSize: 28,
    fontWeight: "bold",
    color: "#6366F1",
  },
  SubTittle: {
    marginVertical: 0,
    fontFamily: "Inter",
    fontSize: 15,
    color: "#64748B",
  },
  ItensAtributs: {
    width: "100%",
    marginVertical: 16,
    maxWidth: 334,
  },
});
