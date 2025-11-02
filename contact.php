<?php include 'includes/header.php'; ?>

<section class="page-header">
    <div class="container">
        <h1>Contactez-moi</h1>
        <p>Discutons de votre projet</p>
    </div>
</section>

<section class="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Informations de Contact</h2>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p><?php echo SITE_EMAIL; ?></p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h3>Téléphone</h3>
                        <p>689 70 32 81</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Localisation</h3>
                        <p>logbessou, CAMEROUN</p>
                    </div>
                </div>
            </div>
            
            <form class="contact-form" action="process-contact.php" method="POST">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Votre nom" required>
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Votre email" required>
                </div>
                <div class="form-group">
                    <input type="text" name="subject" placeholder="Sujet">
                </div>
                <div class="form-group">
                    <textarea name="message" rows="5" placeholder="Votre message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Envoyer le message</button>
            </form>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
process-contact.php:
<?php
require_once 'includes/config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: contact.php?error=email');
        exit;
    }
    
    // Insérer dans la base de données
    $stmt = $pdo->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->execute([$name, $email, $subject, $message]);
    
    // Envoyer un email (optionnel)
    $to = SITE_EMAIL;
    $email_subject = "Nouveau message de: $name";
    $email_body = "Nom: $name\nEmail: $email\nSujet: $subject\n\nMessage:\n$message";
    $headers = "From: $email";
    
    mail($to, $email_subject, $email_body, $headers);
    
    header('Location: contact.php?success=1');
    exit;
}
?>
