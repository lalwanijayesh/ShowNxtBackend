CREATE TYPE user_type AS ENUM('COACH', 'ATHLETE');
CREATE TYPE gender_type AS ENUM('MALE', 'FEMALE', 'NONBINARY', 'OTHER');
CREATE TYPE division_type AS ENUM('1','2','3');
CREATE TYPE evaluation_status AS ENUM('DISMISS', 'ACCEPT');

CREATE TABLE users (
	id SERIAL PRIMARY KEY, 
	email varchar(100) UNIQUE NOT NULL, 
	type user_type NOT NULL
);

CREATE TABLE athlete (
	user_id INT PRIMARY KEY,
  	first_name VARCHAR(64) NOT NULL,
  	last_name VARCHAR(64) NOT NULL,
	gender gender_type NOT NULL,
    gpa NUMERIC(3,2),
    sat INT ,
    act INT,
    height INT,
    weight INT,
	
	CONSTRAINT athlete_fk_user 
    	FOREIGN KEY (user_id)
		REFERENCES users (id)
		ON DELETE RESTRICT
);

CREATE TABLE school (
	school_id SERIAL PRIMARY KEY,
  	school_name VARCHAR(64) NOT NULL,
  	school_location VARCHAR(64) NOT NULL,
	division division_type NOT NULL,
	min_gpa NUMERIC(3,2),
	min_act INT,
	min_sat INT
);

CREATE TABLE sport (
	sport_id SERIAL PRIMARY KEY,
  	sport_name VARCHAR(64) NOT NULL, 
	gender gender_type NOT NULL
);

CREATE TABLE coach (
	user_id INT PRIMARY KEY,
	school_id INT NOT NULL,
	sport_id INT NOT NULL,
  	first_name VARCHAR(64), 
  	last_name VARCHAR(64),

    CONSTRAINT coach_fk_user
        FOREIGN KEY (user_id)
            REFERENCES users ( id )
            ON DELETE RESTRICT,
	CONSTRAINT coach_fk_school 
    	FOREIGN KEY (school_id)
		REFERENCES school (school_id)
		ON DELETE RESTRICT,
	CONSTRAINT coach_fk_sport
   		FOREIGN KEY (sport_id)
		REFERENCES sport (sport_id)
		ON DELETE RESTRICT
);

CREATE TABLE position_master (
	position_id SERIAL PRIMARY KEY,
	sport_id INT NOT NULL,
	position_name VARCHAR(64) NOT NULL,
	
	CONSTRAINT position_fk_sport
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT
);

CREATE TABLE measurable_master (
	measurable_id SERIAL PRIMARY KEY,
	measurable_name VARCHAR(64) NOT NULL,
	format VARCHAR(64) NOT NULL,
	value VARCHAR(64) NOT NULL
);

CREATE TABLE position_measurable (
    position_id INT NOT NULL,
    measurable_id INT NOT NULL,

    PRIMARY KEY (position_id, measurable_id),
    CONSTRAINT position_measurable_fk_position
        FOREIGN KEY (position_id)
            REFERENCES position_master (position_id)
            ON DELETE RESTRICT,
    CONSTRAINT position_measurable_fk_measurable
        FOREIGN KEY (measurable_id)
            REFERENCES measurable_master (measurable_id)
            ON DELETE RESTRICT
);

CREATE TABLE profile (
	profile_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	position_id INT NOT NULL,
	
	CONSTRAINT profile_fk_user
		FOREIGN KEY (user_id)
		REFERENCES athlete (user_id)
		ON DELETE RESTRICT,
	CONSTRAINT profile_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master (position_id)
		ON DELETE RESTRICT
);

CREATE TABLE profile_measurable (
	profile_id INT NOT NULL,
	measurable_id INT NOT NULL,
	value VARCHAR(64) NOT NULL,

	PRIMARY KEY (profile_id, measurable_id),
	CONSTRAINT profile_measurable_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (profile_id)
		ON DELETE RESTRICT,
	CONSTRAINT profile_measurable_fk_measurable
		FOREIGN KEY (measurable_id)
		REFERENCES measurable_master (measurable_id)
		ON DELETE RESTRICT
);
	
CREATE TABLE profile_videos (
	video_id SERIAL PRIMARY KEY,
    profile_id INT NOT NULL,
	file_path VARCHAR(64) UNIQUE NOT NULL,
	description VARCHAR(64),
	upload_date TIMESTAMP NOT NULL,

	CONSTRAINT profile_videos_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (profile_id)
		ON DELETE RESTRICT
);

CREATE TABLE profile_calendar (
	profile_calendar_id SERIAL PRIMARY KEY,
    profile_id INT NOT NULL,
	game_time TIMESTAMP NOT NULL,
	player_team VARCHAR(64) NOT NULL,
	against_team VARCHAR(64) NOT NULL, 
	description VARCHAR(64) NOT NULL,

	CONSTRAINT profile_measurable_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (profile_id)
		ON DELETE RESTRICT
);

CREATE TABLE coach_opening (
	coach_id INT NOT NULL,
	position_id INT NOT NULL,
	opening_count INT NOT NULL,

	PRIMARY KEY (coach_id, position_id),
	CONSTRAINT opening_fk_coach
		FOREIGN KEY (coach_id)
		REFERENCES coach (user_id)
		ON DELETE RESTRICT,
	CONSTRAINT opening_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master (position_id)
		ON DELETE RESTRICT
);

CREATE TABLE sport_offering (
	school_id INT NOT NULL,
	sport_id INT NOT NULL,

	PRIMARY KEY (school_id, sport_id),
	CONSTRAINT offering_fk_school
		FOREIGN KEY (school_id)
		REFERENCES school (school_id)
		ON DELETE RESTRICT,
	CONSTRAINT offering_fk_sport_id
		FOREIGN KEY (sport_id)
		REFERENCES sport (sport_id)
		ON DELETE RESTRICT
);

CREATE TABLE application (
	application_id SERIAL PRIMARY KEY,
	profile_id INT NOT NULL,
	school_id INT NOT NULL,
	position_id INT NOT NULL,
	
	CONSTRAINT application_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile (profile_id)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_school
		FOREIGN KEY (school_id)
		REFERENCES school(school_id)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master (position_id)
		ON DELETE RESTRICT
);

CREATE TABLE evaluation (
	application_id INT NOT NULL,
	coach_id INT NOT NULL, 
	status evaluation_status NOT NULL,

	PRIMARY KEY (application_id, coach_id),
    CONSTRAINT evaluation_fk_application
        FOREIGN KEY (application_id)
            REFERENCES application (application_id)
            ON DELETE RESTRICT,
	CONSTRAINT evaluation_fk_coach
		FOREIGN KEY (coach_id)
		REFERENCES coach (user_id)
		ON DELETE RESTRICT
);

CREATE TABLE chat (
	chat_id SERIAL PRIMARY KEY,
    participant1 INT NOT NULL,
    participant2 INT NOT NULL,
	
	CONSTRAINT chat_fk_user1
		FOREIGN KEY (participant1)
		REFERENCES users (id)
		ON DELETE RESTRICT,
	CONSTRAINT chat_fk_user2
		FOREIGN KEY (participant2)
		REFERENCES users (id)
		ON DELETE RESTRICT
);

CREATE TABLE chat_message (
	message_id SERIAL PRIMARY KEY,
	chat_id INT NOT NULL,
	chat_message VARCHAR NOT NULL,
	message_time TIMESTAMP NOT NULL,
	
	CONSTRAINT message_fk_chat
		FOREIGN KEY (chat_id)
		REFERENCES chat (chat_id)
		ON DELETE RESTRICT
);

