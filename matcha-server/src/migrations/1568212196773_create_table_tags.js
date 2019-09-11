module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS tags(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );`,

    "down": "DROP TABLE IF EXISTS tags;"
};