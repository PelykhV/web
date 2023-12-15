CREATE DATABASE IF NOT EXISTS reacthotels;

USE reacthotels;

CREATE TABLE reacthotels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    price INT NOT NULL
);
