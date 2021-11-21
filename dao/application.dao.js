const { db } = require('./database'); 

/**
 * 
 */
const createApplication = async (profile, school, sport, position) => {
    await db.query("INSERT INTO application (profile, school, sport, position) VALUES ($1, $2, $3, $4)", [profile, school, sport, position]);
    // should applications be identified by all 4 aspects? probably only need profile, school, position
    return "dummy value" 
}

const getApplicationById = async (id) => {
    var res = await db.query("SELECT * FROM application WHERE id = $1", [id]);
    return res.rows[0]; 
}

// TODO: need to implement "get open position in coach model object"
const getApplicationsByCoach = async (coach, positionFilter, num) => {
    var res = await db.query("SELECT TOP $1 * FROM application WHERE school = $2 AND sport = $3 AND position IN $4", 
                        [num, coach.schoolId, coach.sportId, coach.getOpenPositions(positionFilter)]);
    return res; 
}

const getApplicationByProfile = async (profile) => {
    var res = await db.query("SELECT * FROM application WHERE profile = $1", [profile]); 
    return res; 
}

// need help writing a join command 
const getApplicationsByAthlete = async (athlete) => {

}