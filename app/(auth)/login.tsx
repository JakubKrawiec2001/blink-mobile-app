import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

const login = () => {
  const theme = useTheme();

  const handleSubmit = () => {
    console.log("Login button pressed");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Login</Text>
      <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default login;

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
