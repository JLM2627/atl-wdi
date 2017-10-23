1.SELECT name FROM country WHERE region = 'Southern Europe' ORDER BY population ASC LIMIT 1;

Holy See (Vatican City State)


2. SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

Italian

3. 
SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage DESC;

4. -- SELECT name FROM countrycode WHERE percentage = '100';
SELECT name FROM country WHERE code = 'SMR';

San Marino

5. -- SELECT name FROM countrycode WHERE city = 'SMR'
-- SELECT city FROM country WHERE code = 'SMR';
-- SELECT name FROM city WHERE code = 'SMR';
SELECT name FROM city WHERE countrycode = 'SMR';
Serravalle
 San Marino

 6.
SELECT name FROM country WHERE code = 'BRA';
Brazil

7. 
SELECT name FROM city WHERE id = '211';

8.
SELECT name, district, countrycode FROM city WHERE population = 91084;
Santa Monica, California!!!!