const {newDb} = require('pg-mem');
const Pool = require('pg').Pool;
require('dotenv').config();

const env = process.env.ENV_TYPE;

let db;
if (env === 'DEV') {
    db = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });
} else {
    const pgmem = newDb();
    // TODO import database scripts file and run it here inside mock database
    pgmem.public.many("CREATE TABLE users " +
        "(id SERIAL PRIMARY KEY, " +
        "email varchar(100) UNIQUE NOT NULL," +
        "type varchar(10) NOT NULL);")

    db = {
        query: (query, args) => {
            // let parsedQuery = query.replace(/$\d+/, "${}").format(args);
            if (args !== undefined) {
                console.log(query)
                console.log(args.toString())
                for (let i = 0; i < args.length; i++) {
                    // insert type check
                    query = query.replace('$' + (i + 1), "'" + args[i].toString() + "'");
                }
                console.log(query)

            }
            let result
            if (query.trim().toUpperCase().startsWith("SELECT")) {
                result = pgmem.public.many(query)
                return {
                    rows: result
                }
            } else {
                result = pgmem.public.none(query)
                return result
            }
        }
    }
}

module.exports = {db};