import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const { startSSOFlow } = useSSO();

  const router = useRouter();

  const handleSignIn = async (authStrategy: "google" | "apple") => {
    try {
      const strategy =
        authStrategy === "google" ? "oauth_google" : "oauth_apple";

      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("OAuth error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="people-circle" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Kinfolk</Text>
        <Text style={styles.tagline}>It takes a village. This is yours.</Text>
      </View>

      <View style={styles.illustrationContainer}>
        <Image
          style={styles.illustration}
          source={require("../../assets/images/friends1.png")}
          resizeMode="cover"
        />
      </View>

      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.authButton}
          activeOpacity={0.4}
          onPress={() => handleSignIn("google")}
        >
          <View style={styles.authIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.authButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.authButton}
          activeOpacity={0.4}
          onPress={() => handleSignIn("apple")}
        >
          <View style={styles.authIconContainer}>
            <Ionicons name="logo-apple" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.authButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy policy
        </Text>
      </View>
    </View>
  );
}
