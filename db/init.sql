DROP TABLE IF EXISTS purchase_history; 
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS inventory;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

INSERT INTO users (username, password, email)
VALUES
('isaac', '$2b$12$feQl.Aibt85tb6BphRz.5OphyZL5KFSrhMykJLG8lriw6n2fdIJBW', 'me@spooky.com');

CREATE TABLE inventory (
    part_id SERIAL PRIMARY KEY,
    part_name VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quality TEXT NOT NULL,
    image TEXT NOT NULL
);

INSERT INTO inventory (part_name, price, quality, image)
VALUES
('Brain', 24200, 'A', 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201402/human_brain-650_022814052328.jpg');

CREATE TABLE purchase_history (
    purchase_id SERIAL PRIMARY KEY,
    purchase_date DATE DEFAULT NOW(),
    user_id INTEGER REFERENCES users(user_id),
    part_id INTEGER REFERENCES inventory(part_id)
);

INSERT INTO purchase_history (user_id, part_id)
VALUES
(1, 1);