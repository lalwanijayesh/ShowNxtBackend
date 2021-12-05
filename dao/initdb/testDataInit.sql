START TRANSACTION ;

INSERT INTO sport (sport_name, gender) VALUES ('Soccer', 'FEMALE');
INSERT INTO sport (sport_name, gender) VALUES ('Soccer', 'MALE');
INSERT INTO sport (sport_name, gender) VALUES ('Basketball', 'FEMALE');
INSERT INTO sport (sport_name, gender) VALUES ('Basketball', 'MALE');

INSERT INTO position_master (sport_id, position_name) VALUES (1, 'Goalkeeper');
INSERT INTO position_master (sport_id, position_name) VALUES (1, 'Defender');
INSERT INTO position_master (sport_id, position_name) VALUES (1, 'Midfielder');
INSERT INTO position_master (sport_id, position_name) VALUES (1, 'Forward');

INSERT INTO position_master (sport_id, position_name) VALUES (2, 'Goalkeeper');
INSERT INTO position_master (sport_id, position_name) VALUES (2, 'Defender');
INSERT INTO position_master (sport_id, position_name) VALUES (2, 'Midfielder');
INSERT INTO position_master (sport_id, position_name) VALUES (2, 'Forward');

INSERT INTO position_master (sport_id, position_name) VALUES (3, 'Center');
INSERT INTO position_master (sport_id, position_name) VALUES (3, 'Power Forward');
INSERT INTO position_master (sport_id, position_name) VALUES (3, 'Small Forward');
INSERT INTO position_master (sport_id, position_name) VALUES (3, 'Point Guard');
INSERT INTO position_master (sport_id, position_name) VALUES (3, 'Shooting Guard');

INSERT INTO position_master (sport_id, position_name) VALUES (4, 'Center');
INSERT INTO position_master (sport_id, position_name) VALUES (4, 'Power Forward');
INSERT INTO position_master (sport_id, position_name) VALUES (4, 'Small Forward');
INSERT INTO position_master (sport_id, position_name) VALUES (4, 'Point Guard');
INSERT INTO position_master (sport_id, position_name) VALUES (4, 'Shooting Guard');

INSERT INTO school (school_name, school_location, division) VALUES ('Northeastern', 'Boston, MA', '3');
INSERT INTO school (school_name, school_location, division) VALUES ('Harvard', 'Cambridge, MA', '1');

INSERT INTO users (email, type) VALUES ('johnAthlete@email.com', 'ATHLETE');
INSERT INTO users (email, type) VALUES ('janeAthlete@email.com', 'ATHLETE');
INSERT INTO users (email, type) VALUES ('johnCoach@email.com', 'COACH');
INSERT INTO users (email, type) VALUES ('janeCoach@email.com', 'COACH');

INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight) VALUES (1, 'John', 'Doe', 'MALE', 3.0, 1500, 30, 67, 170);
INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight) VALUES (2, 'Jane', 'Doe', 'FEMALE', 4.0, 1550, 33, 60, 120);

