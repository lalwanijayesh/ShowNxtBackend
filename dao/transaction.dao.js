const { db } = require("./database");

const startTransaction = async () => {
    await db.query("BEGIN TRANSACTION;");
};

const endTransaction = async () => {
    await db.query("COMMIT;");
}

module.exports = {
    startTransaction,
    endTransaction
}