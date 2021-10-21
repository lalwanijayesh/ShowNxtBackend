
CREATE TABLE appUser (
	userId INT PRIMARY KEY,  
  	userType VARCHAR(64) NOT NULL,
  	email VARCHAR(64),
	
	CONSTRAINT chk_userType 
		CHECK (userType IN ('athlete', 'coach'))
);

CREATE TABLE athlete (
	userId INT PRIMARY KEY,  
  	firstName VARCHAR(64) NOT NULL, 
  	lastName VARCHAR(64) NOT NULL,
    gender VARCHAR (64) NOT NULL,
    gpa DEC(3, 2) NOT NULL,
    sat INT NOT NULL,
    act INT NOT NULL,
    athelet_height INT NOT NULL,
    athlete_weight INT NOT NULL,
	
	CONSTRAINT chk_gender 
		CHECK (gender IN('male', 'female', 'nonbinary', 'other')),
	
	CONSTRAINT athlete_fk_user 
    	FOREIGN KEY(userID)
		REFERENCES appUser(userID)
		ON DELETE RESTRICT
);

CREATE TABLE school(
	schoolID INT PRIMARY KEY,  
  	schoolName VARCHAR(64) NOT NULL, 
  	schoolLocation VARCHAR(64) NOT NULL,
    division INT NOT NULL,
	
	CONSTRAINT chk_division 
		CHECK (division IN(1, 2, 3))
);

CREATE TABLE sport(
	sportID INT PRIMARY KEY,
  	sportName VARCHAR(64) NOT NULL, 
    gender VARCHAR (64) NOT NULL,
	
	CONSTRAINT chk_gender
		CHECK (gender IN('male', 'female'))
);

CREATE TABLE coach(
	userID INT PRIMARY KEY,
	schoolID INT NOT NULL,
	sportID INT NOT NULL,
  	firstName VARCHAR(64), 
  	lastName VARCHAR(64),
	
	
	CONSTRAINT coach_fk_school 
    	FOREIGN KEY(schoolID)
		REFERENCES school(schoolID)
		ON DELETE RESTRICT,
	CONSTRAINT coach_fk_sport
   		FOREIGN KEY(sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT
);

CREATE TABLE positionMaster (
	positionID INT PRIMARY KEY,
	sportID INT NOT NULL,
	positionName VARCHAR(64) NOT NULL,
	
	CONSTRAINT position_fk_sport
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT
);

CREATE TABLE profile (
	profileID INT PRIMARY KEY,
	userID INT NOT NULL,
	sportID INT NOT NULL,
	positionID INT NOT NULL,
	
	CONSTRAINT profile_fk_user
		FOREIGN KEY (userID)
		REFERENCES appUser(userID)
		ON DELETE RESTRICT,
	CONSTRAINT profile_fk_sport
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT,
	CONSTRAINT profile_fk_position
		FOREIGN KEY (positionID)
		REFERENCES positionMaster(positionID)
		ON DELETE RESTRICT
);

CREATE TABLE chat (
	chatID INT PRIMARY KEY,
	participant1 INT NOT NULL,
	participant2 INT NOT NULL,
	
	CONSTRAINT chat_fk_user1
		FOREIGN KEY (participant1)
		REFERENCES appUser(userID)
		ON DELETE RESTRICT,
	CONSTRAINT chat_fk_user2
		FOREIGN KEY (participant2)
		REFERENCES appUser(userID)
		ON DELETE RESTRICT
);

CREATE TABLE chatMessage (
	messageID INT PRIMARY KEY,
	chatID INT NOT NULL,
	chatMessage VARCHAR NOT NULL,
	messageTime DATE NOT NULL,
	
	CONSTRAINT message_fk_chat
		FOREIGN KEY (chatID)
		REFERENCES chat(chatID)
		ON DELETE RESTRICT
);


CREATE TABLE measurableMaster (
	measurableID INT PRIMARY KEY,
	sportID INT NOT NULL,
	positionID INT NOT NULL,
	measureableName VARCHAR(64) NOT NULL,
	format VARCHAR(64) NOT NULL,
	
	CONSTRAINT measurable_fk_sport
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT,
	CONSTRAINT measurable_fk_position
		FOREIGN KEY (sportID)
		REFERENCES positionMaster(positionID)
		ON DELETE RESTRICT
);

CREATE TABLE profileMeasurable (
	profileMeasurableID INT PRIMARY KEY,
	profileID INT NOT NULL,
	measurableID INT NOT NULL,
	
	CONSTRAINT profileMeasureable_fk_profile
		FOREIGN KEY (profileID)
		REFERENCES profile(profileID)
		ON DELETE RESTRICT,
	CONSTRAINT profileMeasureable_fk_measurable
		FOREIGN KEY (measurableID)
		REFERENCES measurableMaster(measurableID)
		ON DELETE RESTRICT
	);
	
CREATE TABLE coachOpening (
	openingID INT PRIMARY KEY,
	coachID INT NOT NULL,
	sportID INT NOT NULL,
	positionID INT NOT NULL,
	numbOfOpening INT NOT NULL,
	
	CONSTRAINT opening_fk_coach
		FOREIGN KEY (coachID)
		REFERENCES coach(userID)
		ON DELETE RESTRICT,
	CONSTRAINT opening_fk_sport
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT,
	CONSTRAINT opening_fk_position
		FOREIGN KEY (positionID)
		REFERENCES positionMaster(positionID)
		ON DELETE RESTRICT
);

CREATE TABLE sportOffering (
	offeringID INT PRIMARY KEY,
	schoolID INT NOT NULL,
	sportID INT NOT NULL,
	
	CONSTRAINT offering_fk_school
		FOREIGN KEY (schoolID)
		REFERENCES school(schoolID)
		ON DELETE RESTRICT,
	CONSTRAINT offering_fk_sportID
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT
);

CREATE TABLE application (
	applicationID INT PRIMARY KEY,
	profileID INT NOT NULL,
	schoolID INT NOT NULL,
	sportID INT NOT NULL,
	positionID INT NOT NULL,
	
	CONSTRAINT application_fk_profile
		FOREIGN KEY (profileID)
		REFERENCES profile(profileID)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_school
		FOREIGN KEY (schoolID)
		REFERENCES school(schoolID)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_sport
		FOREIGN KEY (sportID)
		REFERENCES sport(sportID)
		ON DELETE RESTRICT,
	CONSTRAINT application_fk_position
		FOREIGN KEY (positionID)
		REFERENCES positionMaster(positionID)
		ON DELETE RESTRICT
);