
CREATE TABLE IF NOT EXISTS usersv2 (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(30) not null,
    `created_at` DATETIME null,
    `updated_at` DATETIME null,
    `deleted_at` DATETIME null
)