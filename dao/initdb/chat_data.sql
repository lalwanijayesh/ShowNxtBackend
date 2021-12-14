INSERT INTO profile (profile_id, user_id, position_id)
VALUES (1, 4, 7),
	   (2, 9, 15),
	   (3, 9, 17),
	   (4, 10, 1),
	   (5, 4, 3);

insert into application (application_id, profile_id, school_id, position_id)
values
(1, 1, 1, 7),
(2, 1, 2, 7),
(3, 2, 1, 15),
(4, 2, 2, 15),
(5, 2, 3, 15),
(6, 2, 4, 15),
(7, 4, 1, 1),
(8, 4, 2, 1),
(9, 4, 3, 1),
(10, 4, 4, 1),
(11, 5, 1, 3),
(12, 5, 2, 3),
(13, 5, 3, 3),
(14, 5, 4, 3);

insert into evaluation (application_id, coach_id, status)
values
(5, 1, 'accepted'),
(9, 1, 'accepted'),
(13, 1, 'dismissed'),
(6, 2, 'dismissed'),
(10, 2, 'dismissed'),
(14, 2, 'accepted'),
(7, 3, 'accepted'),
(11, 3, 'dismissed'),
(4, 7, 'dismissed'),
(8, 7, 'dismissed'),
(12, 7, 'accepted'),
(3, 8, 'dismissed'),
(1, 13, 'accepted');