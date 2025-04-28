import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ChatType } from "@/types";
import { currentUser } from "@/data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { formatDateDayMonth } from "@/utils";

const ChatPreview = ({ data }: { data: ChatType }) => {
  const { participants, lastMessage, readBy } = data;

  const secondParticipant = participants.find((p) => p.$id !== currentUser.$id);
  const isRead = readBy.includes(currentUser.$id);
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <FontAwesome name="user" size={34} color="black" />
      </View>
      <View style={styles.content}>
        <View style={{ gap: 5, flex: 0.8 }}>
          <Text style={styles.name}>{secondParticipant?.name}</Text>
          <Text
            style={[
              styles.text,
              !isRead && { fontWeight: "bold", color: "white" },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {lastMessage.text}
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>
            {formatDateDayMonth(data.lastMessage.sentAt)}
          </Text>
          {!isRead && <View style={styles.notification} />}
        </View>
      </View>
    </View>
  );
};

export default ChatPreview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: "100%",
    backgroundColor: "gray",
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: "gray",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  notification: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#23C552",
  },
});
