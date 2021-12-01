const { gql } = require("apollo-server");

/**
 * Defines the Chat and ChatMessage type definitions.
 */
const Chat = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    chats(userId: ID!): [Chat!]

    chatMessages(chatId: ID!): [ChatMessage!]
    chatMessage(messageId: ID!): ChatMessage
  }

  extend type Mutation {
    sendChatMessage(chatId: ID!, authorId: ID!, message: String!): ChatMessage
  }

  type Chat {
    chatId: ID!
    participant1: ID!
    participant2: ID!
  }

  type ChatMessage {
    messageId: ID!
    chatId: ID!
    authorId: ID!
    message: String!
    timestamp: String!
  }
`;

module.exports = { Chat };
