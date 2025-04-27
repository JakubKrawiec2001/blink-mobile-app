import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useTheme } from "@/hooks/useTheme";

const register = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Register</Text>
      <Link href="/" style={styles.button}>
        Back home
      </Link>
    </View>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    paddingBottom: 20,
    fontSize: 60,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    width: 200,
    color: "white",
    fontSize: 20,
  },
});
