const {
  getChats,
  getMessage,
  getMessages,
  getMessagesSince,
  sendMessage,
} = require("../../dao/chat.dao");

const chatResolvers = {
  Query: {
    chats: (parent, args, context, info) => {
      //   return getCoachById((userId = args.userId));
      return getChats((userId = args.userId));
    },

    message: (parent, args, context, info) => {
      return getMessage((messageId = args.messageId));
    },

    messages: (parent, args, context, info) => {
      return getMessages((chatId = args.chatId));
    },

    messagesSince: (parent, args, context, info) => {
      return getMessagesSince(args.chatId, args.authorId, args.epoch);
    },
  },
  Mutation: {
    sendMessage: (parent, args, context, info) => {
      return sendMessage(args.chatId, args.authorId, args.message);
    },
  },
};

module.exports = { chatResolvers };
