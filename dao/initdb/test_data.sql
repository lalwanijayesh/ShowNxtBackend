-- CREATE TYPE division_type AS ENUM('1','2','3');
-- CREATE TABLE school (
--     school_id SERIAL PRIMARY KEY,
--     school_name VARCHAR(64) NOT NULL,
--     school_location VARCHAR(64) NOT NULL,
--     division division_type NOT NULL,
--     min_gpa NUMERIC(3,2),
--     min_act INT,
--     min_sat INT
-- );

INSERT INTO school (school_name, school_location, division, min_gpa, min_act, min_sat)
VALUES ('Northeastern University', 'Boston, MA', '1', 2.0, 20, 1000),
       ('Harvard University', 'Cambridge, MA', '1', 2.0, 20, 1000),
       ('Boston University', 'Boston, MA', '1', 2.0, 20, 1000),
       ('Massachusetts Institute of Technology', 'Cambridge, MA', '3', 2.0, 20, 1000);

-- CREATE TYPE gender_type AS ENUM('MALE', 'FEMALE', 'NONBINARY', 'OTHER');
-- CREATE TABLE sport (
--     sport_id SERIAL PRIMARY KEY,
--     sport_name VARCHAR(64) NOT NULL,
--     gender gender_type NOT NULL
-- );

INSERT INTO sport (sport_name, gender)
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
--              REFERENCES sport (sport_id)
--              ON DELETE RESTRICT
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
--             REFERENCES school (school_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT offering_fk_sport_id
--         FOREIGN KEY (sport_id)
--             REFERENCES sport (sport_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO sport_offering (school_id, sport_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
       (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3),
       (4, 1), (4, 2);

-- CREATE TABLE measurable_master (
--     measurable_id SERIAL PRIMARY KEY,
--     measurable_name VARCHAR(64) NOT NULL,
--     format VARCHAR(64) NOT NULL,
--     value VARCHAR(64) NOT NULL
-- );

INSERT INTO measurable_master (measurable_name, format, value)
VALUES ('The 40', 'seconds', '7'), ('Vertical Jump', 'inches', '44'),
       ('20-Yard Shuttle Run', 'seconds', '4.20'), ('Bench Press', 'reps', '50');


-- CREATE TABLE position_measurable (
--     position_id INT NOT NULL,
--     measurable_id INT NOT NULL,
--
--     PRIMARY KEY (position_id, measurable_id),
--     CONSTRAINT position_measurable_fk_position
--         FOREIGN KEY (position_id)
--             REFERENCES position_master (position_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT position_measurable_fk_measurable
--         FOREIGN KEY (measurable_id)
--             REFERENCES measurable_master (measurable_id)
--             ON DELETE RESTRICT
-- );

INSERT INTO position_measurable (position_id, measurable_id)
VALUES (1, 1), (1, 2), (2, 2), (2, 3), (3, 1), (3, 4);

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
--     user_id INT PRIMARY KEY,
--     first_name VARCHAR(64) NOT NULL,
--     last_name VARCHAR(64) NOT NULL,
--     gender gender_type NOT NULL,
--     gpa NUMERIC(3,2),
--     sat INT ,
--     act INT,
--     height INT,
--     weight INT,
--
--     CONSTRAINT athlete_fk_user
--         FOREIGN KEY (user_id)
--             REFERENCES users (id)
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
--     CONSTRAINT coach_fk_user
--         FOREIGN KEY (user_id)
--             REFERENCES users ( id )
--             ON DELETE RESTRICT,
--     CONSTRAINT coach_fk_school
--         FOREIGN KEY (school_id)
--             REFERENCES school (school_id)
--             ON DELETE RESTRICT,
--     CONSTRAINT coach_fk_sport
--         FOREIGN KEY (sport_id)
--             REFERENCES sport (sport_id)
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
