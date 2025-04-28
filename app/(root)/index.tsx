import ChatPreview from "@/components/ChatPreview";
import { chats, currentUser } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const theme = useTheme();
  const myChats = chats.filter((chat) =>
    chat.participants.some((p) => p.$id === currentUser.$id)
  );
  return (
    <FlatList
      data={myChats}
      style={[styles.container, { backgroundColor: theme.background }]}
      renderItem={({ item }) => <ChatPreview data={item} />}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 150, height: 150, resizeMode: "cover" }}
      />
      <Text style={[styles.text, { color: theme.text }]}>Home</Text>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  text: {
    color: "red",
    fontSize: 20,
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
    marginTop: 30,
  },
});
