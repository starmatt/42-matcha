module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS messages(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        message VARCHAR(512) DEFAULT '' NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    );`,

    "down": `DROP TABLE IF EXISTS messages;`
};