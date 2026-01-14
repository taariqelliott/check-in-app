import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { Text, View } from "react-native";

export default function Resources() {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.primary }}>Resources</Text>
    </View>
  );
}
