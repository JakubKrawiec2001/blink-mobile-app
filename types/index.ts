export type ChatType = {
  id: number;
  chatId: string;
  participants: ParticipantType[];
  lastMessage: {
    text: string;
    senderId: string;
    sentAt: string;
  };
  readBy: string[];
};

type ParticipantType = {
  $id: string;
  name: string;
  avatarUrl: string;
};
