import { Pressable, Text, StyleSheet } from "react-native";

type buttonProps = {
  onPress?: () => void;
  txt: string;
};

export default function ButtonProp({ onPress, txt }: buttonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.Button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.ButtonText}>{txt}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Button: {
    marginTop: 32,
    padding: 10,
    borderRadius: 12,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#4F46E5",
  },

  ButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
});
