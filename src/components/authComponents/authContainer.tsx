import { View } from "react-native";
import { AuthStyles } from "../../styles/authStyles";

export default function AuthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View style={AuthStyles.container}>
      <View style={AuthStyles.card}>{children}</View>
    </View>
  );
}
