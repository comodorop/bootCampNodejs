-- migration script --
CREATE TABLE IF NOT EXISTS users (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user` VARCHAR(30) not null,
    `password` VARCHAR(30) not null,
    `created_at` DATETIME null,
    `updated_at` DATETIME null,
    `deleted_at` DATETIME null
)