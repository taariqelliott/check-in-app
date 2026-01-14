import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

export default function Profile() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.primary }}>Profile</Text>
      <Text style={{ color: COLORS.primary }}>
        Welcome <Text className="font-bold">@</Text>
        <Text className="font-bold text-lime-500">
          {user?.emailAddresses[0].emailAddress.split("@")[0]}
        </Text>
      </Text>
    </View>
  );
}
