import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import InputTexto from '../components/InputTexto';
import ButtonProp from '../components/button';
import AuthLink from '../components/authComponents/authLink';
import { AuthStyles } from "../components/authComponents/authStyles";

export default function CadastroPage({ navigation }: any){
    return(
        <View style={styles.Page}>
            <View style={styles.ContainerLogo}>
                <FontAwesome6 name="leaf" size={64} color="#10b981" />
                <Text style={styles.Tittle}>Bem-vindo ao EasyFlow</Text>
                <Text style={styles.SubTittle}>
                    Faça login ou cadastre-se para continuar
                </Text>
                <View style={styles.RegisterArea}>
                    <Text style={styles.RegisterTittles}>Nome completo</Text>
                    <InputTexto placeholder='Seu nome'/>
                    <Text style={styles.RegisterTittles}>Email</Text>
                    <InputTexto placeholder='seu@email.com'/>
                    <Text style={styles.RegisterTittles}>Senha</Text>
                    <InputTexto placeholder='******' secureTextEntry={true}/>
                </View>
                <View style={styles.SubmitButtonArea}>
                    <ButtonProp txt='Cadastre-se'/>
                </View>
                <View style={styles.HaveAcount}>
                    <Text style={styles.linkArea}>Já tem uma conta? </Text>
                    <AuthLink text='Faça login' onPress={()=> navigation.navigate("Login")}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Page: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#F0F9FF",
    },
    ContainerLogo: {
        width: "80%",
        maxHeight: 332,
        alignItems: "center",
        flexShrink: 0,
        justifyContent: "center",
    },
    Tittle: {
        fontFamily: "Inter",
        fontSize: 28,
        fontWeight: "bold",
        color: "#6366F1",
    },
    SubTittle: {
        fontFamily: "Inter",
        fontSize: 15,
        color: "#64748B",
    },
    RegisterArea: {
        width: "100%",
        marginVertical: 16,
        maxWidth: 334,
    },
    RegisterTittles: {
        marginTop: 24,
        fontSize: 18,
        fontWeight: 'bold',
    },
    SubmitButtonArea: {
        width: '95%',
        margin: 0,
    },
    linkArea: {
        fontSize: 14,
        color: '#64748B',
        textAlign: 'center'
    },
    HaveAcount: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems:'center',
    }
    
})