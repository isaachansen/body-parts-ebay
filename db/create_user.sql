INSERT INTO users (email, password, username)
VALUES ($1, $2, $3);

SELECT email, username FROM users
WHERE email = $1;