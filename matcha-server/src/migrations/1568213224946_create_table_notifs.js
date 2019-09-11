module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS notifs(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        event VARCHAR(128) DEFAULT NULL,
        user_id INT DEFAULT NULL,
        event_id INT DEFAULT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
        );`,

    "down": "DROP TABLE IF EXISTS notifs;"
}