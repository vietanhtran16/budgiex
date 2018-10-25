DROP TABLE LoginSessions;
DROP TABLE Users;

CREATE TABLE Users (
    user_id INT(4) PRIMARY KEY AUTO_INCREMENT,
    nick_name VARCHAR(26) NOT NULL,
    passwd VARCHAR(31) NOT NULL,
    first_name VARCHAR(31) NOT NULL,
    last_name VARCHAR(31) NOT NULL,
    user_role VARCHAR(10) NOT NULL
);

CREATE TABLE LoginSessions (
    id INT(32) PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(63) NOT NULL,
    user_id INT(4),
    CONSTRAINT fk_sess_user_id FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


INSERT INTO Users (nick_name, passwd, first_name, last_name, user_role) VALUES("jim", "", "Jim", "Kypa", "user");
INSERT INTO LoginSessions (token, user_id) VALUES ("a82b2-e324fa02-ac3b42d1", 1);
