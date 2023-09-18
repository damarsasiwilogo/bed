USE sakila;

-- 1. Add new actor into table actors with name JHONNY DAVIS.
INSERT INTO actor (first_name, last_name) VALUES ('JOHNNY', 'DAVIS');

-- 2. There are several new actor to add. Add new actor into table actors with name
--    ADAM DAVIS, JEREMY DAVIS, CRAIG DAVIS, STEVE DAVIS in a single query.
INSERT INTO actor (first_name, last_name) VALUES
('ADAM', 'DAVIS'),
('JEREMY', 'DAVIS'),
('CRAIG', 'DAVIS'),
('STEVE', 'DAVIS');

-- 3. Count how many actors with last name DAVIS.
SELECT COUNT(*) FROM actor WHERE last_name = 'DAVIS';

-- 4. Delete actor with last name DAVIS and ﬁrst name JENNIFER.
DELETE FROM actor WHERE last_name = 'DAVIS' AND first_name = 'JENNIFER';

-- 5. Update actor with last name DAVIS and change his/her ﬁrst name into GEORGE.


-- 6. Find top 10 actor with the most perform on ﬁlm.


-- 7. Display title, description, length, and rating from ﬁlm, where special features include
--    deleted scenes and behind the scenes order by most length.


-- 8. Display country and total of inactive customer (active = 0) from country where
--    customer active = 0 order by the highest inactive (active = 0) customer.

