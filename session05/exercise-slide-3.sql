use sakila;

-- 1. Display the first and last names of all actors from the table actor.
SELECT first_name, last_name FROM actor;

-- 2. You need to ﬁnd the ID number, ﬁrst name, and last name of an actor,
-- 	   of whom you know only the ﬁrst name, "Joe." What is one query would you use to obtain this information?
SELECT actor_id, first_name, last_name FROM actor WHERE first_name = 'JOE';

-- 3. Display the address, district, and city_id from address only for district: California, Alberta and Mekka
SELECT address, district, citi_id FROM address WHERE district IN ('California', 'Alberta', 'Mekka');

-- 4. Count actor with last name WOOD from table actors.
SELECT COUNT(*) FROM actor WHERE last_name = 'WOOD';

-- 5. Shows list of customer_id and sum of amount spent that made payment more than 20.
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id HAVING count(*) > 20;