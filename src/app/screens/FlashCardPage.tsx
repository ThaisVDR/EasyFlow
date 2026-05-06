import React from "react";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import Header from "../../components/header";
import CategorySelector from "../../components/categorySelector";
import Flashcard from "../../components/flashcard";
import BottomNav from "../../components/bottomNav";
import Button from "../../components/button";

export default function FlashCardPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <View style={styles.titleSection}>
          <Text style={styles.title}>Flashcards</Text>
          <Text style={styles.subtitle}>Revisão ativa.</Text>
          <Button txt="Adicionar" />
        </View>

        <CategorySelector label="Estruturas (85% Erros)" />
        <Flashcard
          question="Qual a complexidade de busca em uma BST desbalanceada?"
          hint="Pense no pior caso de inserção sequencial."
        />
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FE",
  },
  scrollContent: {
    paddingBottom: 20,
  },

  titleSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 4,
  },
});
