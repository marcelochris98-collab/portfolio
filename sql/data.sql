database_with_sample_data.sql:
-- Créer la base de données
CREATE DATABASE IF NOT EXISTS pro_for_you;
USE pro_for_you;

-- Table des projets
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    technologies VARCHAR(255),
    image VARCHAR(255),
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des administrateurs
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insérer l'utilisateur admin (username: admin, password: admin123)
INSERT INTO admin_users (username, password) 
VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Insérer des projets d'exemple
INSERT INTO projects (title, description, technologies, image, url) VALUES
('Site E-commerce', 'Plateforme de vente en ligne complète avec panier et paiement sécurisé', 'PHP, MySQL, JavaScript, Stripe', 'project1.jpg', 'https://example.com/ecommerce'),
('Application de Gestion', 'Système de gestion pour entreprise avec dashboard interactif', 'React, Node.js, MongoDB', 'project2.jpg', 'https://example.com/app'),
('Portfolio Photographe', 'Site vitrine élégant pour photographe professionnel', 'HTML, CSS, JavaScript, Lightbox', 'project3.jpg', 'https://example.com/photo');

-- Insérer des messages d'exemple
INSERT INTO contacts (name, email, subject, message) VALUES
('Jean Dupont', 'jean.dupont@example.com', 'Demande de devis', 'Bonjour, je souhaiterais obtenir un devis pour la création d\'un site e-commerce.'),
('Marie Martin', 'marie.martin@example.com', 'Question technique', 'J\'ai une question concernant l\'hébergement de mon site web.'),
('Pierre Durand', 'pierre.durand@example.com', 'Collaboration', 'Intéressé par une collaboration sur un projet web.');

