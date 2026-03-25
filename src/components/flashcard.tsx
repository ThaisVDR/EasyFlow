import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type flashcardProps = {
  question: string;
  hint: string;
};

export default function Flashcard({ question, hint }: flashcardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>FRENTE</Text>
      <View style={styles.content}>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.hint}>{hint}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="refresh-outline" size={18} color="#333" />
        <Text style={styles.buttonText}>Virar Cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    height: 420,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  label: {
    alignSelf: "flex-start",
    color: "#BDBDBD",
    fontWeight: "bold",
    fontSize: 12,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1A1A2E",
    marginBottom: 12,
  },
  hint: {
    fontSize: 16,
    color: "#828282",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    fontWeight: "600",
    color: "#333",
  },
});
