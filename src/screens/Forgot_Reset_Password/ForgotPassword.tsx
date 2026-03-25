import React from "react";
import { View, Text } from "react-native";
import { AuthStyles } from "../../components/authComponents/authStyles";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";

import ButtonProp from "../../components/button";
import AuthHeader from "../../components/authComponents/authHeader";
import InputCustom from "../../components/authComponents/imputCustom";
import AuthContainer from "../../components/authComponents/authContainer";
import SuccessCard from "../../components/authComponents/sucessCard";
import AuthLink from "../../components/authComponents/authLink";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState<"formulario" | "enviado">(
    "formulario",
  );
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <AuthContainer>
      {email === "formulario" ? (
        <>
          <AuthHeader
            title="Recuperar Acesso"
            subtitle="Digite seu e-mail e enviaremos um código de recuperação."
          />
          <View style={AuthStyles.inputGap}>
            <InputCustom
              label="E-mail"
              placeholder="Digite seu e-mail cadastrado"
            />
            <ButtonProp
              txt="Enviar Link"
              onPress={() => {
                setEmail("enviado");
              }}
            />
          </View>

          <View style={AuthStyles.footer}>
            <Text>Voltar ao</Text>
            <AuthLink text="Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </>
      ) : (
        <SuccessCard
          title="Link Enviado"
          message="Verifique sua caixa de entrada para o link de recuperação."
          buttonText="Fechar"
/*           onAction={() => setEmail("formulario")} */
          onAction={() => navigation.navigate("ResetPassword")}
        />
      )}
    </AuthContainer>
  );
}
