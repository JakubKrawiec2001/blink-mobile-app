import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

const newChat = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text style={{ color: theme.text }}>new-chat</Text>
    </View>
  );
};

export default newChat;

const styles = StyleSheet.create({});
