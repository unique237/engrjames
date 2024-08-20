CREATE TABLE users (
    user_id serial PRIMARY KEY,
    full_names VARCHAR(50),
    username VARCHAR(25) UNIQUE NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL
);

CREATE TABLE article (
    article_id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    image_one VARCHAR(150) NOT NULL,
    image_two VARCHAR(150) NOT NULL,
    article_link VARCHAR(255),
    body_one VARCHAR(1500) NOT NULL,
    heading_two VARCHAR(50),
    body_two VARCHAR(1500),
    publish_date DATE DEFAULT CURRENT_TIMESTAMP,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE project (
    project_id serial PRIMARY KEY,
    project_description VARCHAR(255) NOT NULL,
    project_image VARCHAR(150),
    tech_one VARCHAR(150),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE contact (
    contact_id serial PRIMARY KEY,
    prefix VARCHAR(25),
    names VARCHAR(50),
    email VARCHAR(50),
    phone_prefix VARCHAR(15),
    phone_number VARCHAR(15),
    subject VARCHAR(150),
    message VARCHAR(2000),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscription (
    subscription_id serial PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
