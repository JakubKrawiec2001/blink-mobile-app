import { Link, Tabs, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { colors } from "@/constants/colors";

export default function RootLayout() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            borderColor: theme.lightBackground,
            backgroundColor: theme.lightBackground,
            height: 90,
            paddingTop: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
            marginBottom: 10,
          },
          headerStyle: {
            backgroundColor: theme.lightBackground,
            height: 120,
          },
          headerTintColor: theme.text,
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitleAlign: "left",
          headerRight: () => (
            <Link href="/new-chat" push asChild>
              <Ionicons
                name="add"
                size={24}
                color={colors.primary}
                style={{ paddingRight: 10 }}
              />
            </Link>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Chats",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={
                  focused
                    ? "chatbubble-ellipses"
                    : "chatbubble-ellipses-outline"
                }
                size={24}
                color={focused ? colors.primary : "white"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Octicons
                name={focused ? "person-fill" : "person"}
                size={24}
                color={focused ? colors.primary : "white"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
                color={focused ? colors.primary : "white"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({});
