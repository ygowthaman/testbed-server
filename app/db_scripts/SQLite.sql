-- SQLite
-- CREATE TABLE country(
--   country_uuid INTEGER PRIMARY KEY AUTOINCREMENT,
--   country_name CHAR(100) NOT NULL,
--   year INTEGER NOT NULL,
--   month INTEGER NOT NULL,
--   day INTEGER NOT NULL,
--   title-image TEXT)

-- CREATE TABLE destination(
--   destination_uuid INTEGER PRIMARY KEY AUTOINCREMENT,
--   country_uuid INTEGER NOT NULL,
--   destination_name TEXT NOT NULL,
--   description TEXT,
--   title-image TEXT,
--   FOREIGN KEY (country_uuid) REFERENCES country(country_uuid)
-- );

-- CREATE TABLE landmark(
--   landmark_uuid INTEGER PRIMARY KEY AUTOINCREMENT,
--   country_uuid INTEGER NOT NULL,
--   destination_uuid INTEGER NOT NULL,
--   landmark_name TEXT,
--   description TEXT,
--   FOREIGN KEY (destination_uuid) REFERENCES destination(destination_uuid),
--   FOREIGN KEY (country_uuid) REFERENCES country(country_uuid)
-- );

-- CREATE TABLE images(
--   image_uuid INTEGER PRIMARY KEY AUTOINCREMENT,
--   landmark_uuid INTEGER NOT NULL,
--   destination_uuid INTEGER NOT NULL,
--   country_uuid INTEGER NOT NULL,
--   image_name TEXT NOT NULL,
--   image_location TEXT NOT NULL,
--   description TEXT,
--   FOREIGN KEY (landmark_uuid) REFERENCES landmark(landmark_uuid),
--   FOREIGN KEY (destination_uuid) REFERENCES destination(destination_uuid),
--   FOREIGN KEY (country_uuid) REFERENCES country(country_uuid)
-- );

-- INSERT INTO country (country_name, year, month, day) VALUES('China', 2020, 1, 16)

-- INSERT INTO images (landmark_uuid, destination_uuid, country_uuid, image_name, image_location)
-- VALUES (3, 3, 8, 'A fairy tale creek', 'https://live.staticflickr.com/65535/53519542005_bf0e5301a9_o.jpg')

-- SELECT country.country_uuid, 
-- country.country_name, 
-- country.year, 
-- country.month, 
-- country.day, 
-- destination.destination_uuid, 
-- destination.destination_name 
-- FROM destination 
-- INNER JOIN country 
-- ON country.country_uuid = destination.country_uuid 
-- WHERE country.country_uuid IS '8'