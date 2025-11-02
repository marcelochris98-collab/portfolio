<?php 
include 'includes/header.php';

// Récupérer les projets
$stmt = $pdo->query("SELECT * FROM projects ORDER BY created_at DESC");
$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<section class="page-header">
    <div class="container">
        <h1>Mon Portfolio</h1>
        <p>Découvrez mes réalisations et projets récents</p>
    </div>
</section>

<section class="portfolio">
    <div class="container">
        <div class="portfolio-grid">
            <?php foreach($projects as $project): ?>
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <img src="<?php echo SITE_URL . '/images/projects/' . $project['image']; ?>" 
                         alt="<?php echo htmlspecialchars($project['title']); ?>">
                    <div class="portfolio-overlay">
                        <a href="<?php echo $project['url']; ?>" target="_blank" class="btn btn-primary">Voir le projet</a>
                    </div>
                </div>
                <div class="portfolio-info">
                    <h3><?php echo htmlspecialchars($project['title']); ?></h3>
                    <p><?php echo htmlspecialchars($project['description']); ?></p>
                    <div class="technologies">
                        <?php 
                        $techs = explode(',', $project['technologies']);
                        foreach($techs as $tech): 
                        ?>
                        <span class="tech-tag"><?php echo trim($tech); ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
