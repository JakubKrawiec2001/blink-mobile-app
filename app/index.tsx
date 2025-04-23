import { useTheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <Text style={[styles.text, { color: theme.text }]}>Home</Text>
      <Link href="/contact" style={styles.button}>
        View details
      </Link>
    </View>
  );
}

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
