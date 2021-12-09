const { db } = require("./database");
const Measurable = require("../model/Measurable");

const getMeasurableById = async (measurableId) => {
    const res = await db.query("SELECT * FROM measurable_master WHERE measurable_id = $1", [
        measurableId,
    ]);
    return new Measurable(res.rows[0].measurable_id,
                          res.rows[0].measurable_name,
                          res.rows[0].format,
                          res.rows[0].value);
};

const getMeasurables = async () => {
    const res = await db.query("SELECT * FROM measurable_master");
    return res.rows.map(row => new Measurable(row.measurable_id,
                                              row.measurable_name,
                                              row.format,
                                              row.value));
};

module.exports = {
    getMeasurableById,
    getMeasurables
};
