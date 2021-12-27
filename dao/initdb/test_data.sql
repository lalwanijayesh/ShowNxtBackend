INSERT INTO school (school_name, school_location, division, min_gpa, min_act, min_sat)
VALUES ('Northeastern University', 'Boston, MA', '1', 2.0, 20, 1000),
       ('Harvard University', 'Cambridge, MA', '1', 2.0, 20, 1000),
       ('Boston University', 'Boston, MA', '1', 2.0, 20, 1000),
       ('Massachusetts Institute of Technology', 'Cambridge, MA', '3', 2.0, 20, 1000);

INSERT INTO sport (sport_name, gender)
VALUES ('Men''s Soccer', 'MALE'),
       ('Women''s Soccer', 'FEMALE'),
       ('Football', 'MALE'),
       ('Basketball', 'MALE'),
       ('Basketball', 'FEMALE'),
       ('Lacrosse', 'MALE'),
       ('Lacrosse', 'FEMALE');

INSERT INTO position_master (sport_id, position_name)
VALUES (1, 'Goalkeeper'), (1, 'Fullback'), (1, 'Center Back'),
       (1, 'Defender'), (1, 'Midfielder'), (1, 'Center Forward'),
       (2, 'Goalkeeper'), (2, 'Fullback'), (2, 'Center Back'),
       (2, 'Defender'), (2, 'Midfielder'), (2, 'Center Forward'),
       (3, 'Quarterback'), (3, 'Center'), (3, 'Running back'),
       (3, 'Fullback'), (3, 'Left Guard'), (3, 'Right Guard'),
       (3, 'Left Tackle'), (3, 'Right Tackle'), (3, 'Defensive End'),
       (3, 'Cornerback'), (3, 'Linebacker');

INSERT INTO sport_offering (school_id, sport_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
       (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3),
       (4, 1), (4, 2);

INSERT INTO measurable_master (measurable_name, format, value)
VALUES ('The 40', 'seconds', '7'), ('Vertical Jump', 'inches', '44'),
       ('20-Yard Shuttle Run', 'seconds', '4.20'), ('Bench Press', 'reps', '50');

INSERT INTO position_measurable (position_id, measurable_id)
VALUES (1, 1), (1, 2), (2, 2), (2, 3), (3, 1), (3, 4);

INSERT INTO users (email, type)
VALUES ('michael.scott@example.edu', 'COACH'), ('sheldon.cooper@mit.edu', 'COACH'),
       ('ted.mosby@test.edu', 'COACH'), ('monica.geller@gmail.com', 'ATHLETE'),
       ('rachel.greene@bu.edu', 'COACH'), ('jane.doe@example.com', 'ATHLETE'),
       ('bruce.wayne@harvard.edu', 'COACH'), ('clark.kent@outlook.com', 'COACH'),
       ('peterswebb@northeastern.edu', 'ATHLETE'), ('barney.stinson@gmail.com', 'ATHLETE'),
       ('fred.flintstone@gmail.com', 'COACH'), ('annalise.keating@mit.edu', 'COACH'),
       ('sarah.connor@northeastern.edu', 'COACH');

INSERT INTO athlete (user_id, first_name, last_name, gender, gpa, sat, act, height, weight)
VALUES (4, 'Monica', 'Geller', 'FEMALE', 3.8, 1300, 25, 170, 170),
       (6, 'Jane', 'Doe', 'FEMALE', 3.5, 1150, 180, 27, 190),
       (9, 'Peter', 'Parker', 'MALE', 3.0, 1350, 175, 26, 185),
       (10, 'Barney', 'Stinson', 'MALE', 3.2, 1500, 28, 185, 200);

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

INSERT INTO coach_opening (coach_id, position_id, opening_count)
VALUES (2, 1, 3),
       (2, 2, 2),
       (2, 3, 1),
       (5, 1, 6),
       (5, 4, 5),
       (5, 2, 2),
       (1, 15, 7),
       (1, 16, 3),
       (7, 8, 1),
       (7, 9, 3),
       (3, 4, 5),
       (3, 5, 2),
       (3, 6, 1),
       (8, 8, 4),
       (8, 9, 3),
       (11, 4, 3),
       (11, 2, 2),
       (13, 23, 4),
       (13, 22, 1);

INSERT INTO profile (user_id, position_id)
VALUES (4, 7),
	   (9, 15),
	   (9, 17),
	   (10, 1),
	   (4, 3);

insert into application (profile_id, school_id, position_id)
values
(1, 1, 7),
(1, 2, 7),
(2, 1, 15),
(2, 2, 15),
(2, 3, 15),
(2, 4, 15),
(4, 1, 1),
(4, 2, 1),
(4, 3, 1),
(4, 4, 1),
(5, 1, 3),
(5, 2, 3),
(5, 3, 3),
(5, 4, 3);

insert into evaluation (application_id, coach_id, status)
values
(5, 1, 'ACCEPT'),
(9, 1, 'ACCEPT'),
(13, 1, 'DISMISS'),
(6, 2, 'DISMISS'),
(10, 2, 'DISMISS'),
(14, 2, 'ACCEPT'),
(7, 3, 'ACCEPT'),
(11, 3, 'DISMISS'),
(4, 7, 'DISMISS'),
(8, 7, 'DISMISS'),
(12, 7, 'ACCEPT'),
(3, 8, 'DISMISS'),
(1, 13, 'ACCEPT');