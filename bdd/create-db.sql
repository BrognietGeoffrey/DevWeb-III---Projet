//// -- LEVEL 1
//// -- Tables and References

// Creating tables
Table users {
  id int [pk, increment] // auto-increment
  last_name varchar(50)
  sur_name varchar(50)
  password varchar(100)
  email varchar(50)
  notifications boolean
}

Table notes {
  code int [pk,increment]
  name varchar(50)
  sizeNote varchar(1000)
  ctag_id int
  label_id int
  id_group int
  creationDate date_time
 }

Table categories {
  ctag_id int [pk,increment]
  ctag_name varchar(50) [pk]
}

Table history {
  code int [pk,increment]
  //name varchar(50) [pk]
  modif varchar(100)
  date_time date_time
}

Table labels {
  label_id int [pk,increment]
  label_name varchar(20) [pk]
}

Table groupes {
  id_group int [pk, increment]
  id int [pk]
  nameGroup varchar(20)
}
// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: categories.ctag_id - notes.ctag_id
//Ref: categories.ctag_name - notes.ctag_name
Ref: notes.code - history.code
//Ref: notes.name - history.name
Ref: users.id < notes.code
Ref : labels.label_id - notes.label_id
Ref: users.id > groupes.id
Ref: groupes.id_group - notes.id_group
//----------------------------------------------//

//// -- LEVEL 2
//// -- Adding column settings


//----------------------------------------------//

//// -- Level 3
//// -- Enum, Indexes

// Enum for 'products' table below


// Indexes: You can define a single or multi-column index
