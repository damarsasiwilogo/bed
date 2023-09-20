use sakila;
select * from film;
    
SELECT b.first_name, b.last_name, c.title FROM film_actor AS a
LEFT JOIN actor AS b ON a.actor_id = b.actor_id
LEFT JOIN film AS c ON a.film_id = c.film_id;

SELECT c.category_id, c.name AS category_name, COUNT(f.film_id) AS film_count
FROM category c
JOIN film_category fc ON c.category_id = fc.category_id
JOIN film f ON fc.film_id = f.film_id
GROUP BY c.category_id, c.name;




SELECT c.first_name, c.last_name, count(p.customer_id) AS total_transaction
FROM payment p 
INNER JOIN customer c ON p.customer_id = c.customer_id
GROUP BY c.first_name, c.last_name
HAVING total_transaction > 20;

SELECT c.first_name, c.last_name, sum(p.amount) AS total_amount
FROM payment p 
INNER JOIN customer c ON p.customer_id = c.customer_id
GROUP BY c.first_name, c.last_name
HAVING total_amount BETWEEN 100 AND 200;

SELECT rental_duration FROM film;

SELECT film_id, title, rental_duration FROM film
WHERE rental_duration > (
	SELECT AVG (rental_duration) FROM film);

-- tampilkan title film duration pendek

SELECT min(length) from film;

SELECT film_id, title, length FROM film
WHERE length = (Select min(length) from film);