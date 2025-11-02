<?php
require_once '../includes/config.php';
require_once '../includes/functions.php';
requireLogin();

// Statistiques
$totalProjects = $pdo->query("SELECT COUNT(*) FROM projects")->fetchColumn();
$totalContacts = $pdo->query("SELECT COUNT(*) FROM contacts")->fetchColumn();
$recentContacts = $pdo->query("SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5")->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin</title>
    <link rel="stylesheet" href="<?php echo SITE_URL; ?>/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .admin-header {
            background: var(--primary-color);
            color: white;
            padding: 1rem 0;
        }
        .admin-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .admin-nav a {
            color: white;
            margin-left: 1rem;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: background 0.3s;
        }
        .admin-nav a:hover {
            background: rgba(255,255,255,0.2);
        }
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        .stat-box {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            text-align: center;
            transition: transform 0.3s;
        }
        .stat-box:hover {
            transform: translateY(-5px);
        }
        .stat-box i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .stat-box h3 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        .recent-contacts {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            margin-top: 2rem;
        }
        .contact-item {
            border-bottom: 1px solid #eee;
            padding: 1rem 0;
        }
        .contact-item:last-child {
            border-bottom: none;
        }
        .contact-item strong {
            color: var(--primary-color);
        }
        .contact-meta {
            font-size: 0.9rem;
            color: #666;
            margin-top: 0.5rem;
        }
    </style>
</head>
<body>
    <header class="admin-header">
        <div class="container">
            <nav class="admin-nav">
                <h2>📊 Dashboard Admin</h2>
                <div>
                    <a href="manage-projects.php"><i class="fas fa-folder"></i> Projets</a>
                    <a href="<?php echo SITE_URL; ?>" target="_blank"><i class="fas fa-external-link-alt"></i> Voir le site</a>
                    <a href="logout.php"><i class="fas fa-sign-out-alt"></i> Déconnexion</a>
                </div>
            </nav>
        </div>
    </header>

    <main style="padding: 3rem 0; background: var(--light-gray); min-height: calc(100vh - 70px);">
        <div class="container">
            <h1>Bienvenue, <?php echo htmlspecialchars($_SESSION['admin_username']); ?> ! 👋</h1>
            
            <div class="dashboard-grid">
                <div class="stat-box">
                    <i class="fas fa-project-diagram"></i>
                    <h3><?php echo $totalProjects; ?></h3>
                    <p>Projets Totaux</p>
                    <a href="manage-projects.php" class="btn btn-primary" style="margin-top: 1rem; font-size: 0.9rem;">Gérer</a>
                </div>
                <div class="stat-box">
                    <i class="fas fa-envelope"></i>
                    <h3><?php echo $totalContacts; ?></h3>
                    <p>Messages Reçus</p>
                </div>
                <div class="stat-box">
                    <i class="fas fa-clock"></i>
                    <h3><?php echo date('H:i'); ?></h3>
                    <p><?php echo date('d/m/Y'); ?></p>
                </div>
            </div>

            <div class="recent-contacts">
                <h2><i class="fas fa-comments"></i> Messages Récents</h2>
                <?php if (count($recentContacts) > 0): ?>
                    <?php foreach ($recentContacts as $contact): ?>
                        <div class="contact-item">
                            <strong><?php echo htmlspecialchars($contact['name']); ?></strong>
                            <span style="color: #666;"> - <?php echo htmlspecialchars($contact['email']); ?></span>
                            <p style="margin: 0.5rem 0;"><?php echo htmlspecialchars(substr($contact['message'], 0, 100)); ?>...</p>
                            <div class="contact-meta">
                                <i class="fas fa-calendar"></i> <?php echo date('d/m/Y H:i', strtotime($contact['created_at'])); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <p style="text-align: center; color: #666; padding: 2rem;">Aucun message pour le moment</p>
                <?php endif; ?>
            </div>
        </div>
    </main>
</body>
</html>
