import InitialLayout from "@/components/InitialLayout";
import { COLORS } from "@/constants/theme";
import ClerkAndConvexProviders from "@/providers/ClerkAndConvexProviders";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <ClerkAndConvexProviders>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
          <StatusBar barStyle="default" />
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProviders>
  );
}
