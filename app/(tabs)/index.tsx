import { COLORS } from "@/constants/theme";
import { useAuth } from "@clerk/clerk-expo";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>Home Feed</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text
          style={{
            color: COLORS.black,
            marginTop: 3,
            borderRadius: 3,
            backgroundColor: COLORS.primary,
            width: 70,
            paddingHorizontal: 4,
            paddingVertical: 4,
            textAlign: "center",
            marginHorizontal: 3,
          }}
        >
          Signout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
