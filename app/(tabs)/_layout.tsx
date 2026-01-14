import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 50,
          paddingBottom: 10,
          bottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          tabBarLabel: "Resources",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart-half-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mystatus"
        options={{
          tabBarLabel: "Status",
          tabBarIcon: ({ size }) => (
            <Ionicons name="add-circle" size={size} color={COLORS.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <Ionicons
              name="notifications-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
