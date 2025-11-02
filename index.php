<?php 
require_once 'includes/header.php';
 ?>
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">Bonjour, je suis   chris NGUEFAH<span class="highlight"> Développeur junior</span></h1>
            <p class="hero-subtitle">Je transforme vos idées en solutions web performantes et élégantes</p>
            <div class="hero-buttons">
                <a href="<?php echo SITE_URL; ?>/portfolio.php" class="btn btn-primary">Voir mon travail</a>
                <a href="<?php echo SITE_URL; ?>/contact.php" class="btn btn-secondary">Me contacter</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="img/profile.jpg" alt="Profile">
        </div>
    </div>
</section>

<section class="skills">
    <div class="container">
        <h2 class="section-title">Mes Compétences</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <i class="fas fa-code"></i>
                <h3>Front-End</h3>
                <p>HTML5, CSS3, JavaScript, </p>
            </div>
            <div class="skill-card">
                <i class="fas fa-server"></i>
                <h3>Back-End</h3>
                <p>PHP,  Python, MySQL,</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-mobile-alt"></i>
                <h3>Responsive Design</h3>
                <p>Design adaptatif pour tous les appareils</p>
            </div>
            <div class="skill-card">
                <i class="fas fa-rocket"></i>
                <h3>Performance</h3>
                <p>Optimisation et bonnes pratiques</p>
            </div>
        </div>
    </div>
</section>

<section class="cta">
    <div class="container">
        <h2>Prêt à démarrer votre projet ?</h2>
        <p>Collaborons pour créer quelque chose d'exceptionnel</p>
        <a href="<?php echo SITE_URL; ?>/contact.php" class="btn btn-primary">Commencer maintenant</a>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
