import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type docProps = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

export default function importDoc({ title, active, onPress }: docProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.containerActive]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <FontAwesome5
        name="file-pdf"
        size={18}
        color={active ? "#FFF" : "#6366F1"}
      />
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    gap: 12,
    marginBottom: 8,
    backgroundColor: "#FFF",
  },
  containerActive: {
    backgroundColor: "#6366F1",
  },
  text: {
    fontSize: 15,
    color: "#64748B",
    fontWeight: "500",
  },
  textActive: {
    color: "#FFF",
    fontWeight: "600",
  },
});
