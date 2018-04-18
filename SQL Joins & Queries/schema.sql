DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;

CREATE TABLE top5000 (
    position INT NOT NULL,
    artist VARCHAR(150) NOT NULL,
    song VARCHAR(150) NOT NULL,
    year YEAR,
    raw_total DECIMAL(10,4),
    raw_usa DECIMAL(10,4),
    raw_uk DECIMAL(10,4),
    raw_eur DECIMAL(10,4),
    raw_row DECIMAL(10,4),
    PRIMARY KEY(position)
);

CREATE TABLE top_albums (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  album VARCHAR(100) NULL,
  year YEAR NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);





