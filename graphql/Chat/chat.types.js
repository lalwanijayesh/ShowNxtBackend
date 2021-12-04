const { gql } = require("apollo-server");

/**
 * Defines the Chat and ChatMessage type definitions.
 */
const Chat = gql`
  # Extends the top-level root Query object with specific queries
  extend type Query {
    chats(userId: ID!): [Chat!]

    messages(chatId: ID!): [ChatMessage!]
    message(messageId: ID!): ChatMessage

    messagesSince(chatId: ID!, authorId: ID!, timestamp: Int!): [ChatMessage!]
  }

  extend type Mutation {
    sendMessage(chatId: ID!, authorId: ID!, message: String!): ChatMessage
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
