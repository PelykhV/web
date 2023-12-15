CREATE DATABASE IF NOT EXISTS hotels;

USE hotels;

CREATE TABLE hotels (
    HotelID INT AUTO_INCREMENT PRIMARY KEY,
    HotelName VARCHAR(255) NOT NULL,
    VisitorsPerYear INT,
    NumberOfRooms INT
);
