CREATE TYPE user_type AS ENUM('COACH', 'ATHLETE');
CREATE TYPE gender_type AS ENUM('MALE', 'FEMALE', 'NONBINARY', 'OTHER');
CREATE TYPE division_type AS ENUM('1','2','3'); 

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
    gpa DEC(3, 2),
    sat INT ,
    act INT,
    height INT,
    weight INT,
	
	CONSTRAINT athlete_fk_user 
    	FOREIGN KEY ( user_id )
		REFERENCES users ( id )
		ON DELETE RESTRICT
);

CREATE TABLE school(
	school_id SERIAL PRIMARY KEY,
  	school_name VARCHAR(64) NOT NULL, 
  	school_location VARCHAR(64) NOT NULL,
	division division_type NOT NULL
);

CREATE TABLE sport(
	sport_id SERIAL PRIMARY KEY,
  	sport_name VARCHAR(64) NOT NULL, 
	type gender_type NOT NULL
);

CREATE TABLE coach(
	user_id INT PRIMARY KEY,
	school_id INT NOT NULL,
	sport_id INT NOT NULL,
  	first_name VARCHAR(64), 
  	last_name VARCHAR(64),

	CONSTRAINT coach_fk_school 
    	FOREIGN KEY(school_id)
		REFERENCES school(school_id)
		ON DELETE RESTRICT,
	CONSTRAINT coach_fk_sport
   		FOREIGN KEY(sport_id)
		REFERENCES sport(sport_id)
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
	sport_id INT NOT NULL,
	position_id INT NOT NULL,
	measureable_name VARCHAR(64) NOT NULL,
	format VARCHAR(64) NOT NULL,
	value VARCHAR(64) NOT NULL,
	
	CONSTRAINT measurable_fk_sport
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT,
	CONSTRAINT measurable_fk_position
		FOREIGN KEY (sport_id)
		REFERENCES position_master(position_id)
		ON DELETE RESTRICT
);

CREATE TABLE profile (
	profile_id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	sport_id INT NOT NULL,
	position_id INT NOT NULL,
	
	CONSTRAINT profile_fk_user
		FOREIGN KEY (user_id)
		REFERENCES users (id)
		ON DELETE RESTRICT,
	CONSTRAINT profile_fk_sport
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT,
	CONSTRAINT profile_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master(position_id)
		ON DELETE RESTRICT
);

CREATE TABLE profile_measurable (
	profile_measurable_id SERIAL PRIMARY KEY,
	profile_id INT NOT NULL,
	measurable_id INT NOT NULL,
	value VARCHAR(64) NOT NULL,
	format VARCHAR(64) NOT NULL,
	
	CONSTRAINT profile_measureable_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile(profile_id)
		ON DELETE RESTRICT,
	CONSTRAINT profile_measureable_fk_measurable
		FOREIGN KEY (measurable_id)
		REFERENCES measurable_master(measurable_id)
		ON DELETE RESTRICT
);
	
CREATE TABLE profile_videos (
	profile_video_id SERIAL PRIMARY KEY,
	video VARCHAR(64) NOT NULL,
	description VARCHAR(64),
	date_of_upload DATETIME NOT NULL,
	CONSTRAINT profile_measureable_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile(profile_id)
		ON DELETE RESTRICT
);

CREATE TABLE profile_calendar (
	profile_calendar_id SERIAL PRIMARY KEY,
	date_time_of_game SMALLDATETIME NOT NULL,
	player_team VARCHAR(64) NOT NULL,
	against_team VARCHAR(64) NOT NULL, 
	description VARCHAR(64) NOT NULL,

	CONSTRAINT profile_measureable_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile(profile_id)
		ON DELETE RESTRICT
);


CREATE TABLE coach_opening (
	opening_id SERIAL PRIMARY KEY,
	coach_id INT NOT NULL,
	sport_id INT NOT NULL,
	position_id INT NOT NULL,
	numbOfOpening INT NOT NULL,
	
	CONSTRAINT opening_fk_coach
		FOREIGN KEY (coach_id)
		REFERENCES coach(user_id)
		ON DELETE RESTRICT,
	CONSTRAINT opening_fk_sport
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT,
	CONSTRAINT opening_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master(position_id)
		ON DELETE RESTRICT
);

CREATE TABLE sport_offering (
	offering_id SERIAL PRIMARY KEY,
	school_id INT NOT NULL,
	sport_id INT NOT NULL,
	
	CONSTRAINT offering_fk_school
		FOREIGN KEY (school_id)
		REFERENCES school(school_id)
		ON DELETE RESTRICT,
	CONSTRAINT offering_fk_sport_id
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT
);

CREATE TABLE application (
	application_id SERIAL PRIMARY KEY,
	profile_id INT NOT NULL,
	school_id INT NOT NULL,
	sport_id INT NOT NULL,
	position_id INT NOT NULL,
	
	CONSTRAINT application_fk_profile
		FOREIGN KEY (profile_id)
		REFERENCES profile(profile_id)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_school
		FOREIGN KEY (school_id)
		REFERENCES school(school_id)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_sport
		FOREIGN KEY (sport_id)
		REFERENCES sport(sport_id)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_position
		FOREIGN KEY (position_id)
		REFERENCES position_master(position_id)
		ON DELETE RESTRICT
);

CREATE TABLE evalutation (
	evalutation_id SERIAL PRIMARY KEY,
	coach_id INT NOT NULL, 
	status ENUM ('dismissed', 'accepted', 'unevaluated'),
	CONSTRAINT coach_fk_coach 
		FOREIGN KEY (coach_id)
		REFERENCES coach(coach_id)
		ON DELETE RESTRICT
)

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
	message_time DATE NOT NULL,
	
	CONSTRAINT message_fk_chat
		FOREIGN KEY (chat_id)
		REFERENCES chat(chat_id)
		ON DELETE RESTRICT
);

