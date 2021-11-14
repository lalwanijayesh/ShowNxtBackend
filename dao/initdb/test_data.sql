-- CREATE TYPE division_type AS ENUM('1','2','3');
-- CREATE TABLE school(
--     school_id SERIAL PRIMARY KEY,
--     school_name VARCHAR(64) NOT NULL,
--     school_location VARCHAR(64) NOT NULL,
--     division division_type NOT NULL
-- );

INSERT INTO school (school_name, school_location, division)
VALUES ('Northeastern University', 'Boston, MA', '1'),
       ('Harvard University', 'Cambridge, MA', '1'),
       ('Boston University', 'Boston, MA', '1'),
       ('Massachusetts Institute of Technology', 'Cambridge, MA', '3');

-- CREATE TYPE gender_type AS ENUM('MALE', 'FEMALE', 'NONBINARY', 'OTHER');
-- CREATE TABLE sport(
--     sport_id SERIAL PRIMARY KEY,
--     sport_name VARCHAR(64) NOT NULL,
--     type gender_type NOT NULL
-- );

INSERT INTO sport (sport_name, type)
VALUES ('Men''s Soccer', 'MALE'),
       ('Women''s Soccer', 'FEMALE'),
       ('Football', 'MALE'),
       ('Basketball', 'MALE'),
       ('Basketball', 'FEMALE'),
       ('Lacrosse', 'MALE'),
       ('Lacrosse', 'FEMALE');

-- CREATE TABLE position_master (
--     position_id SERIAL PRIMARY KEY,
--     sport_id INT NOT NULL,
--     position_name VARCHAR(64) NOT NULL,
--
--     CONSTRAINT position_fk_sport
--         FOREIGN KEY (sport_id)
--             REFERENCES sport(sport_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO position_master (sport_id, position_name)
VALUES (1, 'Goalkeeper'), (1, 'Fullback'), (1, 'Center Back'),
       (1, 'Defender'), (1, 'Midfielder'), (1, 'Center Forward'),
       (2, 'Goalkeeper'), (2, 'Fullback'), (2, 'Center Back'),
       (2, 'Defender'), (2, 'Midfielder'), (2, 'Center Forward'),
       (3, 'Quarterback'), (3, 'Center'), (3, 'Running back'),
       (3, 'Fullback'), (3, 'Left Guard'), (3, 'Right Guard'),
       (3, 'Left Tackle'), (3, 'Right Tackle'), (3, 'Defensive End'),
       (3, 'Cornerback'), (3, 'Linebacker');


-- CREATE TABLE sport_offering (
--     offering_id SERIAL PRIMARY KEY,
--     school_id INT NOT NULL,
--     sport_id INT NOT NULL,
--
--     CONSTRAINT offering_fk_school
--         FOREIGN KEY (school_id)
--             REFERENCES school(school_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT offering_fk_sport_id
--         FOREIGN KEY (sport_id)
--             REFERENCES sport(sport_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO sport_offering (school_id, sport_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
       (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3),
       (4, 1), (4, 2);

-- CREATE TABLE measurable_master (
--     measurable_id SERIAL PRIMARY KEY,
--     sport_id INT NOT NULL,
--     position_id INT NOT NULL,
--     measurable_name VARCHAR(64) NOT NULL,
--     format VARCHAR(64) NOT NULL,
--     value VARCHAR(64) NOT NULL,
--
--     CONSTRAINT measurable_fk_sport
--         FOREIGN KEY (sport_id)
--             REFERENCES sport(sport_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT measurable_fk_position
--         FOREIGN KEY (sport_id)
--             REFERENCES position_master (position_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO measurable_master (sport_id, position_id, measurable_name, format, value)
VALUES (1, 1, 'GPA', 'points', '3.0'), (1, 1, 'Height', 'centimeters', '180'), (1, 1, 'Weight', 'pounds', '155'),
       (1, 2, 'GPA', 'points', '3.0'), (1, 2, 'Height', 'feet', '6'), (1, 2, 'Weight', 'pounds', '160'),
       (2, 7, 'GPA', 'points', '3.2'), (2, 7, 'Height', 'inches', '70'), (2, 7, 'Weight', 'pounds', '155'),
       (2, 8, 'GPA', 'points', '3.0'), (2, 8, 'Height', 'centimeters', '180'), (2, 8, 'Weight', 'pounds', '190'),
       (1, 3, 'GPA', 'points', '3.0'), (1, 4, 'GPA', 'points', '3.0'), (1, 5, 'GPA', 'points', '3.0'),
       (1, 6, 'GPA', 'points', '3.0'), (2, 9, 'GPA', 'points', '3.0'), (2, 10, 'GPA', 'points', '3.0'),
       (2, 11, 'GPA', 'points', '3.0'), (2, 12, 'GPA', 'points', '3.0'), (3, 13, 'GPA', 'points', '3.0'),
       (3, 14, 'GPA', 'points', '3.0'), (3, 15, 'GPA', 'points', '3.0'), (3, 16, 'GPA', 'points', '3.0'),
       (3, 17, 'GPA', 'points', '3.0'), (3, 18, 'GPA', 'points', '3.0');

-- CREATE TYPE user_type AS ENUM('COACH', 'ATHLETE');
--
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     email varchar(100) UNIQUE NOT NULL,
--     type user_type NOT NULL
-- );

INSERT INTO users (email, type)
VALUES ('michael.scott@example.edu', 'COACH'), ('sheldon.cooper@mit.edu', 'COACH'),
       ('ted.mosby@test.edu', 'COACH'), ('monica.geller@gmail.com', 'ATHLETE'),
       ('rachel.greene@bu.edu', 'COACH'), ('jane.doe@example.com', 'ATHLETE'),
       ('bruce.wayne@harvard.edu', 'COACH'), ('clark.kent@outlook.com', 'COACH'),
       ('peterswebb@northeastern.edu', 'ATHLETE'), ('barney.stinson@gmail.com', 'ATHLETE'),
       ('fred.flintstone@gmail.com', 'COACH'), ('annalise.keating@mit.edu', 'COACH'),
       ('sarah.connor@northeastern.edu', 'COACH');

-- CREATE TABLE athlete (
--      user_id INT PRIMARY KEY,
--      first_name VARCHAR(64) NOT NULL,
--      last_name VARCHAR(64) NOT NULL,
--      gender gender_type NOT NULL,
--      gpa DEC(3, 2),
--      sat INT ,
--      act INT,
--      height INT,
--      weight INT,
--
--      CONSTRAINT athlete_fk_user
--         FOREIGN KEY ( user_id )
--         REFERENCES users ( id )
--             ON DELETE RESTRICT
-- );

INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight)
VALUES (4, 'Monica', 'Geller', 'FEMALE', 3.8, 1300, 25, 170, 170),
       (6, 'Jane', 'Doe', 'FEMALE', 3.5, 1150, 180, 27, 190),
       (9, 'Peter', 'Parker', 'MALE', 3.0, 1350, 175, 26, 185),
       (10, 'Barney', 'Stinson', 'MALE', 3.2, 1500, 28, 185, 200);

-- CREATE TABLE coach (
--     user_id INT PRIMARY KEY,
--     school_id INT NOT NULL,
--     sport_id INT NOT NULL,
--     first_name VARCHAR(64),
--     last_name VARCHAR(64),
--
--     CONSTRAINT coach_fk_school
--         FOREIGN KEY(school_id)
--             REFERENCES school(school_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT coach_fk_sport
--         FOREIGN KEY(sport_id)
--             REFERENCES sport(sport_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO COACH (user_id, school_id, sport_id, first_name, last_name)
VALUES (2, 4, 1, 'Sheldon', 'Cooper'),
       (12, 4, 2, 'Annalise', 'Keating'),
       (5, 3, 2, 'Rachel', 'Greene'),
       (1, 3, 1, 'Michael', 'Scott'),
       (7, 2, 1, 'Bruce', 'Wayne'),
       (3, 1, 1, 'Ted', 'Mosby'),
       (8, 1, 3, 'Clark', 'Kent'),
       (11, 1, 4, 'Fred', 'Flintstone'),
       (13, 1, 2, 'Sarah', 'Connor');
