import React from "react";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";

import Header from "../../components/header";
import BottomNav from "../../components/bottomNav";
import ImportDoc from "../../components/importDoc";
import ReaderTools from "../../components/readerTools";
import ImportButton from "../../components/importButtonDoc";

export default function LeituraPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />

        <View style={styles.titleSection}>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>Leitura</Text>
              <Text style={styles.subtitle}>Biblioteca pessoal.</Text>
            </View>
            <ImportButton onPress={() => console.log("Importar PDF")} />
          </View>
        </View>

        <View style={styles.sectionCard}>
          <Text style={styles.label}>Documentos</Text>
          <ImportDoc title="Cap 4. Neuro" active />
          <ImportDoc title="Artigo de ML" />
        </View>

        <View style={styles.viewerCard}>
          <ReaderTools />
          <View style={styles.textContent}>
            <Text style={styles.textTitle}>Neurociência Cognitiva</Text>
            <Text style={styles.textBody}>
              O estudo do cérebro avança rapidamente.{"\n\n"}A neuroplasticidade
              é a capacidade do cérebro de se reorganizar.
            </Text>
          </View>
        </View>
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
    paddingBottom: 100,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  sectionCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 16,
  },
  viewerCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    minHeight: 300,
  },
  textContent: {
    backgroundColor: "#F8F9FE",
    borderRadius: 15,
    padding: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },
  textBody: {
    fontSize: 16,
    color: "#334155",
    lineHeight: 24,
  },
});
