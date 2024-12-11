CREATE TABLE technicians(
    technician_id INTEGER PRIMARY KEY,
    name TEXT,
    photo TEXT,
    specialization TEXT,
    rating REAL,
    description TEXT,
)

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
);

CREATE TABLE appliance_types (
    appliance_id INTEGER PRIMARY KEY,
    type_name TEXT
);