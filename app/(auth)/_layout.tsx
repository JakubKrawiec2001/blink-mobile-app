import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/hooks/useTheme";

export default function AuthLayout() {
  const theme = useTheme();
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.statusBarBackground,
          },
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="register" options={{ title: "Register" }} />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({});
