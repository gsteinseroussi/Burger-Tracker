CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER PRIMARY KEY auto_increment,
burger_name VARCHAR
(30) NOT NULL,
devoured BOOLEAN DEFAULT FALSE
)