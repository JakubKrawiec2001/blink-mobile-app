export const currentUser = {
  $id: "user-1",
  name: "Alicja Kowalska",
};

export const users = [
  {
    $id: "user-1",
    name: "Alicja Kowalska",
    avatarUrl: "",
  },
  {
    $id: "user-2",
    name: "Bartek Nowak",
    avatarUrl: "",
  },
  {
    $id: "user-3",
    name: "Celina Wiśniewska",
    avatarUrl: "",
  },
  {
    $id: "user-4",
    name: "Marek Nowakowski",
    avatarUrl: "",
  },
];

export const chats = [
  {
    id: 1,
    chatId: "chat-1",
    participants: [
      { $id: "user-1", name: "Alicja Kowalska", avatarUrl: "" },
      { $id: "user-2", name: "Bartek Nowak", avatarUrl: "" },
    ],
    lastMessage: {
      text: "Cześć, jak leci?",
      senderId: "user-2",
      sentAt: "2025-04-27T14:10:00Z",
    },
    readBy: ["user-1", "user-2"],
  },
  {
    id: 2,
    chatId: "chat-2",
    participants: [
      { $id: "user-1", name: "Alicja Kowalska", avatarUrl: "" },
      { $id: "user-3", name: "Celina Wiśniewska", avatarUrl: "" },
    ],
    lastMessage: {
      text: "Widziałeś ten nowy film? Jest świetny! Musisz go zobaczyć. Widziałem, że jest dostępny na Netflixie.",
      senderId: "user-3",
      sentAt: "2025-04-27T14:10:00Z",
    },
    readBy: ["user-3, user-1"],
  },
  {
    id: 3,
    chatId: "chat-3",
    participants: [
      { $id: "user-1", name: "Alicja Kowalska", avatarUrl: "" },
      { $id: "user-4", name: "Marek Nowakowski", avatarUrl: "" },
    ],
    lastMessage: {
      text: "Spotkajmy się jutro.",
      senderId: "user-1",
      sentAt: "2025-04-27T14:10:00Z",
    },
    readBy: ["user-4", "user-1"],
  },
  {
    id: 4,
    chatId: "chat-4",
    participants: [
      { $id: "user-2", name: "Bartek Nowak", avatarUrl: "" },
      { $id: "user-4", name: "Marek Nowakowski", avatarUrl: "" },
    ],
    lastMessage: {
      text: "Cześć Marek, co słychać?",
      senderId: "user-2",
      sentAt: "2025-04-27T14:10:00Z",
    },
    readBy: ["user-4"],
  },
];
