USE sakila;

select * from city;
select * from country;

SELECT city.city, country.country
FROM city
INNER JOIN country ON country.country_id = city.country_id
ORDER BY country.country ASC;

SELECT city.city, country.country
FROM country
LEFT JOIN city ON country.country_id = city.country_id
ORDER BY country.country ASC;