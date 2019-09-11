module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS users(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(128) NOT NULL,
        password VARCHAR(256) NOT NULL,
        username VARCHAR(128) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );`,
    "down": `DROP TABLE IF EXISTS users;`
};