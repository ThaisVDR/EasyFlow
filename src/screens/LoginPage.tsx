import { View, Text, StyleSheet, Pressable, TextInput, Linking} from "react-native";

export default function LoginPage(){
    return(
        <View style={styles.Container}> 
            <View style={styles.ContainerLogo}>
                <Text>Logo aqui!!!</Text>
                <Text style={styles.Tittle}>Bem-vindo ao EasyFlow</Text>
                <Text style={styles.SubTittle}>Faça login ou cadastre-se para continuar</Text> 
            </View> 
            <View style={styles.ItensAtributs}> 
                <Text style={styles.InfoFormat}>Email</Text>
                <TextInput placeholder="Digite seu email" style={styles.Inputs}/>
                <Text style={styles.InfoFormat}>Senha</Text>
                <TextInput placeholder="Digite sua senha" style={styles.Inputs}/>

                <Pressable style={styles.SubmitButton}>
                    <Text style={styles.ButtonText}>Entrar</Text>
                </Pressable>
            </View>
            <Text>Não tem uma conta? <Text style={styles.Link} onPress = {() => Linking.openURL("https://www.google.com")}>Cadastre-se</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F9FF',
    },
    InfoFormat: {
        fontSize: 18,
        marginTop: 16,
        fontWeight: 'bold',
    },
    ContainerLogo: {
        width: '80%',
        flex: 1,
        maxHeight: 332,
        alignItems: 'center',
        flexShrink: 0,
        justifyContent: 'flex-end',
    },
    Tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6366F1',

    },
    SubTittle: {
        fontSize: 14,
    },
    ItensAtributs: {
        width: '100%',
        marginVertical: 32,
        maxWidth: 334,
    },
    Inputs: {
        backgroundColor: '#F8FAFC',
        width: '100%',
        maxHeight: 44,
        borderWidth: 1,
        borderColor: '#64748B',
        borderRadius: 8,
        alignSelf: 'center',
    },
    SubmitButton: {
        marginTop: 32,
        padding: 10,
        borderRadius: 12,
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#4F46E5',
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16, 
    },
    Link: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold',
    }
})