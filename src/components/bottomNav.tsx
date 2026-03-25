import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomNav() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const tabs = [
    { name: "Resumo", icon: "home-outline", screen: "" },
    { name: "Calendário", icon: "calendar-outline", screen: "" },
    { name: "Leitura", icon: "book-outline", screen: "Leitura" },
    { name: "Revisão", icon: "copy-outline", screen: "FlashCards" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = route.name === tab.screen;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={isActive ? "#6366F1" : "#94A3B8"}
            />
            <Text style={[styles.tabText, isActive && styles.activeText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingBottom: 25,
  },
  tab: { alignItems: "center", gap: 4 },
  tabText: { fontSize: 10, color: "#94A3B8" },
  activeText: { color: "#6366F1", fontWeight: "bold" },
});
