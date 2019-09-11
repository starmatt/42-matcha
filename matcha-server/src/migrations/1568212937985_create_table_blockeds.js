module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS blockeds(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_blocked INT DEFAULT NULL,
        id_blocker INT DEFAULT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
        );`,

    "down": "DROP TABLE IF EXISTS blockeds;"
};