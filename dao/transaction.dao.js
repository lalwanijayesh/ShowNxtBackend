const { db } = require("./database");

const startTransaction = async () => {
    await db.query("BEGIN TRANSACTION;");
};

const endTransaction = async () => {
    await db.query("COMMIT;");
    console.log("end transaction");
}

module.exports = {
    startTransaction,
    endTransaction
}