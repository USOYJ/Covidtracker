DROP DATABASE IF EXISTS child_db;
CREATE DATABASE child_db;

USE child_db;

CREATE TABLE schedule (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL
);

ROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;



