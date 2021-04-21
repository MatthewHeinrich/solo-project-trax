
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "trails" (
    "id" SERIAL PRIMARY KEY,
    "trail_name" VARCHAR (80),
    "trail_city" VARCHAR (100),
    "map_url" VARCHAR (250) 
);

CREATE TABLE "conditions" (
    "id" SERIAL PRIMARY KEY,
    "open" BOOLEAN,
    "closed" BOOLEAN,
    "wet" BOOLEAN,
    "tacky" BOOLEAN,
    "perfect" BOOLEAN,
    "dry" BOOLEAN,
    "user_id" INT REFERENCES "user"(id),
    "trail_id" INT REFERENCES "trails"(id)
);

CREATE TABLE "feedback" (
    "id" SERIAL PRIMARY KEY,
    "flowy" INT (10),
    "technical" INT (10),
    "downhill" INT (10),
    "climbing" INT (10),
    "overall" INT (10),
    "user_id" INT REFERENCES "user"(id),
    "trail_id" INT REFERENCES "trails"(id)
);

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user"(id),
    "trail_id" INT REFERENCES "trails"(id)
);

-- create new trail --
INSERT INTO "trails" ("trail_name", "trail_city", "map_url") VALUES ('Lebanon Hills', 'Eagan', 'Screen Shot 2021-04-20 at 2.06.33 PM')

-- Get favorites from user -- 
SELECT "trails".trail_name, "trails".trail_city, "trails".map_url FROM "favorites"
JOIN "user" ON "user".id = "favorites".user_id
JOIN "trails" ON "trails".id = "favorites".trail_id 

-- Admin adding feedback to trails --
INSERT INTO "feedback" ("flowy", "technical", "downhill", "climbing", "overall", "user_id", "trail_id") VALUES ('6', '6', '4', '7', '7', '1', '3');

-- Admin adding conditions to trails --
INSERT INTO "conditions" ("open", "closed", "wet", "tacky", "perfect", "dry", "user_id", "trail_id") VALUES (true, false, false, true, false, false, '1', '3')