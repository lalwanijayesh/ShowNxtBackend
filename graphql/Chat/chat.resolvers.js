const {
  getChats,
  getChatMessages,
  sendChatMessage,
} = require("../../dao/chat.dao");

const chatResolvers = {
  Query: {
    chats: (parent, args, context, info) => {
      //   return getCoachById((userId = args.userId));
      return getChats((userId = args.userId));
    },

    chatMessages: (parent, args, context, info) => {
      return getChatMessages((chatId = args.chatId));
    },

    chatMessage: (parent, args, context, info) => {
      return getChatMessages((messageId = args.messageId));
    },
  },
  Mutation: {
    sendChatMessage: (parent, args, context, info) => {
      return sendChatMessage(args.chatId, args.authorId, args.message);
    },
  },
};

module.exports = { chatResolvers };
