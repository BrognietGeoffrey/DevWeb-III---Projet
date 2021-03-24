{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 CREATE TABLE "users" (\
  "id" SERIAL PRIMARY KEY,\
  "last_name" varchar(50),\
  "sur_name" varchar(50),\
  "password" varchar(100),\
  "email" varchar(50),\
  "notifications" boolean\
);\
\
CREATE TABLE "notes" (\
  "code" SERIAL PRIMARY KEY,\
  "name" varchar(50),\
  "sizeNote" varchar(1000),\
  "ctag_id" int,\
  "label_id" int,\
  "id_group" int,\
  "creationDate" date\
);\
\
CREATE TABLE "categories" (\
  "ctag_id" SERIAL,\
  "ctag_name" varchar(50),\
  PRIMARY KEY ("ctag_id")\
);\
\
CREATE TABLE "history" (\
  "code" SERIAL PRIMARY KEY,\
  "modif" varchar(100),\
  "date_time" date\
);\
\
CREATE TABLE "labels" (\
  "label_id" SERIAL,\
  "label_name" varchar(20),\
  PRIMARY KEY ("label_id")\
);\
\
CREATE TABLE "groupes" (\
  "id_group" int,\
  "id" int,\
  "nameGroup" varchar(20)\
);\
\
ALTER TABLE "notes" ADD FOREIGN KEY ("ctag_id") REFERENCES "categories" ("ctag_id");\
\
ALTER TABLE "history" ADD FOREIGN KEY ("code") REFERENCES "notes" ("code");\
\
ALTER TABLE "notes" ADD FOREIGN KEY ("code") REFERENCES "users" ("id");\
\
ALTER TABLE "notes" ADD FOREIGN KEY ("label_id") REFERENCES "labels" ("label_id");\
\
--ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "groupes" ("id");\
\
--ALTER TABLE "notes" ADD FOREIGN KEY ("id_group") REFERENCES "groupes" ("id_group");\
\
}