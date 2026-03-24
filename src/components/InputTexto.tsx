import { TextInput, StyleSheet } from "react-native";

type inputProps = {
    placeholder: string,
}

export default function InputTexto({placeholder}: inputProps){
    return(
        <TextInput
            placeholder={placeholder}
            style = {styles.input}
        />
    );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F8FAFC",
    width: "100%",
    height: 44,
    borderWidth: 0.5,
    borderColor: "#64748B",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});