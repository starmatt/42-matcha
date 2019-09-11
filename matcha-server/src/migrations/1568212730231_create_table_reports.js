module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS reports(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        id_report INT DEFAULT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
        );`,

    "down": "DROP TABLE IF EXISTS reports;"
};