module.exports = {
    "up": `CREATE TABLE IF NOT EXISTS conversations(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        sender_id INT DEFAULT NULL,
        recipient_id INT DEFAULT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
        );`,

    "down": "DROP TABLE IF EXISTS conversations;"
};