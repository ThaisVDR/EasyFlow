import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { AuthStyles } from "../../styles/authStyles";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View style={AuthStyles.logoContainer}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <FontAwesome6 name="leaf" size={50} color="#10b981" />
      </View>
      <Text style={AuthStyles.title}>{title}</Text>
      <Text style={AuthStyles.subtitle}>{subtitle}</Text>
    </View>
  );
}
