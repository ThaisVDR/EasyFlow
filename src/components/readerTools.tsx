import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function readerTools() {
  return (
    <View style={styles.header}>
      <View style={styles.leftTools}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="fountain-pen-tip"
            size={22}
            color="#F59E0B"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={22}
            color="#94A3B8"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Ionicons name="search-outline" size={22} color="#94A3B8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    marginBottom: 16,
  },
  leftTools: {
    flexDirection: "row",
    gap: 20,
  },
});
