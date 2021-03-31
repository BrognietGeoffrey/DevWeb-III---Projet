CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "last_name" varchar(50),
  "sur_name" varchar(50),
  "password" varchar(100),
  "email" varchar(50),
  "notifications" boolean
);

CREATE TABLE "notes" (
  "code" SERIAL PRIMARY KEY,
  "name" varchar(50),
  "sizeNote" varchar(1000),
  "ctag_id" int,
  "label_id" int,
  "id_group" int,
  "creationDate" date_time
);

CREATE TABLE "categories" (
  "ctag_id" SERIAL,
  "ctag_name" varchar(50),
  PRIMARY KEY ("ctag_id", "ctag_name")
);

CREATE TABLE "history" (
  "code" SERIAL PRIMARY KEY,
  "modif" varchar(100),
  "date_time" date_time
);

CREATE TABLE "labels" (
  "label_id" SERIAL,
  "label_name" varchar(20),
  PRIMARY KEY ("label_id", "label_name")
);

CREATE TABLE "groupes" (
  "id_group" SERIAL,
  "id" int,
  "nameGroup" varchar(20),
  PRIMARY KEY ("id_group", "id")
);

ALTER TABLE "notes" ADD FOREIGN KEY ("ctag_id") REFERENCES "categories" ("ctag_id");

ALTER TABLE "history" ADD FOREIGN KEY ("code") REFERENCES "notes" ("code");

ALTER TABLE "notes" ADD FOREIGN KEY ("code") REFERENCES "users" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("label_id") REFERENCES "labels" ("label_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "groupes" ("id");

ALTER TABLE "notes" ADD FOREIGN KEY ("id_group") REFERENCES "groupes" ("id_group");

