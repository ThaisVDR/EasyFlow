import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type importProps = {
  onPress: () => void;
};

export default function importButtonDoc({ onPress }: importProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialCommunityIcons
        name="file-import-outline"
        size={20}
        color="#1E293B"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F1F5F9",
    padding: 15,
    borderRadius: 8,
  },
});
