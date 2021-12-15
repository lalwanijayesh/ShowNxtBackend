const { db } = require("./database");
const Position = require("../model/PositionMeasurable");

const getPositionMeasurablesByPositionId = async (positionId) => {
    const res = await db.query("SELECT * FROM position_measurable WHERE position_id = $1", [
        positionId,
    ]);
    return res.rows.map(row => new Position(row.position_id, row.measurable_id));
};

const getPositionMeasurablesByMeasurableId = async (measurableId) => {
    const res = await db.query("SELECT * FROM position_measurable WHERE measurable_id = $1", [
        measurableId
    ]);
    return res.rows.map(row => new Position(row.position_id, row.measurable_id));
}

const getPositionMeasurable = async (positionId, measurableId) =>{
    const res = await db.query("SELECT * FROM position_measurable WHERE position_id = $1 AND measurable_id = $2", [
        positionId, measurableId
    ]);
    return new Position(res.rows[0].position_id,
                        res.rows[0].measurable_id);
}

const getPositionMeasurables = async () => {
    const res = await db.query("SELECT * FROM position_measurable");
    return res.rows.map(row => new Position(row.position_id, row.measurable_id));
};

module.exports = {
    getPositionMeasurable,
    getPositionMeasurablesByPositionId,
    getPositionMeasurablesByMeasurableId,
    getPositionMeasurables
};
