import {Text, StyleSheet, Linking} from 'react-native';

type linkProps ={
    text: string,
    url: string,
}

export default function AddLink({text, url}: linkProps){
    return(
        <Text 
            onPress={()=>Linking.openURL(url)}
            style={styles.Link}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    Link: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold',
    }
})