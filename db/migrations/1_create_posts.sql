DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    pseudonym varchar(100),
    content varchar(255) NOT NULL
);
