-- psql -U misch -d petful -f ./db/petful.sql;
--psql -U misch -d petful
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS dogs;
DROP TYPE IF EXISTS "gen";
CREATE TYPE "gen" AS ENUM ( 'female', 'male', 'unspecified');

CREATE TABLE cats (
  id serial PRIMARY KEY,
  name text NOT NULL,
  age int,
  sex gen,
  breed text,
  story text,
  imageUrl text,
  imageDescription text
);
ALTER SEQUENCE cats_id_seq RESTART WITH 100;

CREATE TABLE dogs (
  id serial PRIMARY KEY,
  name text NOT NULL,
  age int,
  sex gen,
  breed text,
  story text,
  imageUrl text,
  imageDescription text
);
ALTER SEQUENCE dogs_id_seq RESTART WITH 10000;

INSERT INTO dogs (imageUrl, imageDescription, name, sex, age, breed, story) VALUES  
  ('http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  'A smiling golden-brown golden retreiver listening to music.',
  'Zeus', 'male', 3, 'Golden Retriever', 'Owner Passed away'
  ),
  ('https://upsidedowndogs.com/wp-content/uploads/2009/12/jigsaw-the-rhodesian-ridgeback-dog.jpg',
    'Upside down smiling ridgeback in a blanket',
    'Chance', 'male', 5, 'Ridgeback', 'Owner spontaneously combusted'
  );

INSERT INTO cats (imageUrl, imageDescription, name, sex, age, breed, story) VALUES 
  (  'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      'Orange bengal cat with black stripes lounging on concrete.',
      'Fluffy', 'female', 2, 'Bengal', 'Thrown on the street'),
  ( 'https://www.top5.com/wp-content/uploads/2018/04/funny-cats-21.jpg', 
  'Dilute orange/red calico in a fridge crisper container.',
  'Spikey', 'female', 4, 'Calico', 'Owner passed away'),
  ( 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  'Orange bengal cat with black stripes lounging on concrete.',
  'Flufster', 'male', 8, 'Bengal', 'Thrown on the street'),
   ( 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  'Orange bengal cat with black stripes lounging on concrete.',
  'Oldtimer', 'unspecified', 17, 'Bengal', 'Born in the alleys, raised in the alleys.');

