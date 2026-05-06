import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { AuthStyles } from "../../../styles/authStyles";
import ButtonProp from "../../../components/button";
import AuthHeader from "../../../components/authComponents/authHeader";
import ImputCustom from "../../../components/authComponents/imputCustom";
import AuthContainer from "../../../components/authComponents/authContainer";
import SuccessCard from "../../../components/authComponents/sucessCard";
import AuthLink from "../../../components/authComponents/authLink";

export default function ResetPasswordPage() {
  const [reset, setReset] = React.useState<"reset" | "successReset">("reset");
  const router = useRouter();

  return (
    <AuthContainer>
      {reset === "reset" ? (
        <>
          <AuthHeader
            title="Criar Nova Senha"
            subtitle="Sua nova senha deve ser diferente das senhas usadas anteriormente."
          />
          <View style={AuthStyles.inputGap}>
            <ImputCustom
              label="Nova Senha"
              placeholder="Digite sua nova senha"
              secure={true}
            />
            <ImputCustom
              label="Confirmar Senha"
              placeholder="Confirme sua nova senha"
              secure={true}
            />
            <ButtonProp
              txt="Redefinir Senha"
              onPress={() => {
                setReset("successReset");
              }}
            />
          </View>

          <View style={AuthStyles.footer}>
            <AuthLink
              text="Voltar para o Login"
              onPress={() => router.push("/screens/LoginPage")}
            />
          </View>
        </>
      ) : (
        <SuccessCard
          title="Senha Redefinida"
          message="Sua senha foi redefinida com sucesso. Agora você pode fazer login com sua nova senha."
          buttonText="Fazer Login"
          onAction={() => router.push("/screens/LoginPage")}
        />
      )}
    </AuthContainer>
  );
}
