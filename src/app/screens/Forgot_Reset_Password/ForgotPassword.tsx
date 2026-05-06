import React from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { AuthStyles } from "../../../styles/authStyles";
import ButtonProp from "../../../components/button";
import AuthHeader from "../../../components/authComponents/authHeader";
import InputCustom from "../../../components/authComponents/imputCustom";
import AuthContainer from "../../../components/authComponents/authContainer";
import SuccessCard from "../../../components/authComponents/sucessCard";
import AuthLink from "../../../components/authComponents/authLink";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState<"formulario" | "enviado">(
    "formulario",
  );
  const router = useRouter();

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
            <AuthLink
              text="Login"
              onPress={() => router.push("/screens/LoginPage")}
            />
          </View>
        </>
      ) : (
        <SuccessCard
          title="Link Enviado"
          message="Verifique sua caixa de entrada para o link de recuperação."
          buttonText="Fechar"
          onAction={() =>
            router.push("screens/Forgot_Reset_Password/ResetPasswordPage")
          }
        />
      )}
    </AuthContainer>
  );
}
