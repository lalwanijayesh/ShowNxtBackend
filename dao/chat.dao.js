const { db } = require("./database");

const getChats = async (userId) => {
  const res = await db.query(
    `SELECT chat_id as "chatId", 
      participant1, participant2 FROM chat WHERE participant1 = $1 or participant2 = $1`,
    [userId]
  );
  return res.rows;
};

const getMessages = async (chatId) => {
  const res = await db.query(
    `SELECT message_id as "messageId", 
      chat_id as "chatId", 
      author_id as "authorId", 
      chat_message as "message", 
      floor(extract(epoch from message_time)) as "epoch"
      FROM chat_message where chat_id = $1`,
    [chatId]
  );

  return res.rows;
};

const getMessage = async (messageId) => {
  const res = await db.query(
    `SELECT message_id as "messageId", 
      chat_id as "chatId", 
      author_id as "authorId", 
      chat_message as "message", 
      floor(extract(epoch from message_time)) as "epoch"
      FROM chat_message where message_id = $1`,
    [messageId]
  );

  return res.rows[0];
};

const sendMessage = async (chatId, authorId, message) => {
  const res = await db.query(
    `INSERT INTO chat_message (chat_id, author_id, chat_message) 
      VALUES ($1, $2, $3) RETURNING message_id`,
    [chatId, authorId, message]
  );

  return getMessage(res.rows[0].message_id);
};

const getMessagesSince = async (chatId, authorId, epoch) => {
  const res = await db.query(
    `SELECT message_id as "messageId", 
      chat_id as "chatId", 
      author_id as "authorId", 
      chat_message as "message", 
      floor(extract(epoch from message_time)) as "epoch"
      FROM chat_message where 
      chat_id = $1
      and author_id = $2
      and floor(extract(epoch from message_time)) > $3`,
    [chatId, authorId, epoch]
  );

  return res.rows;
};

module.exports = {
  getChats,
  getMessage,
  getMessages,
  getMessagesSince,
  sendMessage,
};
