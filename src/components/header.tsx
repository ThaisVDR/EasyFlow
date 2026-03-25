import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <View style={styles.logoIcon}>
          <Ionicons name="leaf" size={20} color="#4CAF50" />
        </View>
        <Text style={styles.logoText}>Easy Flow</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Ionicons name="notifications" size={24} color="#5D5FEF" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 40,
    marginBottom: 50,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    backgroundColor: "#E8F5E9",
    padding: 6,
    borderRadius: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D5FEF",
  },
  notificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -4,
    top: -4,
    backgroundColor: "#EB5757",
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
