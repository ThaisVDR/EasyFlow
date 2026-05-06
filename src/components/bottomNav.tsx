import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router"; // Mudança aqui

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Resumo", icon: "home-outline", screen: "" },
    {
      name: "Calendário",
      icon: "calendar-outline",
      screen: "",
    },
    { name: "Leitura", icon: "book-outline", screen: "/screens/LeituraPage" },
    { name: "Revisão", icon: "copy-outline", screen: "/screens/FlashCardPage" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.screen;

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => {
              if (tab.screen) router.push(tab.screen as any);
            }}
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
