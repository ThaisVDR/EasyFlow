import { TextInput, StyleSheet } from "react-native";

type inputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function InputTexto({
  placeholder,
  secureTextEntry,
}: inputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "Inter",
    backgroundColor: "#F8FAFC",
    width: "100%",
    height: 44,
    borderWidth: 0.5,
    borderColor: "#64748B",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});
