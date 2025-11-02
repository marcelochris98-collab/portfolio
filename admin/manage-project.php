<?php
require_once '../includes/config.php';
require_once '../includes/functions.php';
requireLogin();

$message = '';
$error = '';

// Supprimer un projet
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    
    // Récupérer l'image pour la supprimer
    $stmt = $pdo->prepare("SELECT image FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    $project = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($project && file_exists('../images/projects/' . $project['image'])) {
        unlink('../images/projects/' . $project['image']);
    }
    
    $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
    if ($stmt->execute([$id])) {
        $message = 'Projet supprimé avec succès';
    }
}

// Ajouter/Modifier un projet
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!verifyCSRFToken($_POST['csrf_token'])) {
        $error = 'Token CSRF invalide';
    } else {
        $title = clean($_POST['title']);
        $description = clean($_POST['description']);
        $technologies = clean($_POST['technologies']);
        $url = clean($_POST['url']);
        $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
        
        // Gestion de l'image
        $imageName = '';
        if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
            $uploadResult = uploadImage($_FILES['image']);
            if ($uploadResult['success']) {
                $imageName = $uploadResult['filename'];
                
                // Supprimer l'ancienne image si modification
                if ($id > 0) {
                    $stmt = $pdo->prepare("SELECT image FROM projects WHERE id = ?");
                    $stmt->execute([$id]);
                    $oldProject = $stmt->fetch(PDO::FETCH_ASSOC);
                    if ($oldProject && file_exists('../images/projects/' . $oldProject['image'])) {
                        unlink('../images/projects/' . $oldProject['image']);
                    }
                }
            } else {
                $error = $uploadResult['message'];
            }
        }
        
        if (empty($error)) {
            if ($id > 0) {
                // Modification
                if ($imageName) {
                    $stmt = $pdo->prepare("UPDATE projects SET title = ?, description = ?, technologies = ?, url = ?, image = ? WHERE id = ?");
                    $stmt->execute([$title, $description, $technologies, $url, $imageName, $id]);
                } else {
                    $stmt = $pdo->prepare("UPDATE projects SET title = ?, description = ?, technologies = ?, url = ? WHERE id = ?");
                    $stmt->execute([$title, $description, $technologies, $url, $id]);
                }
                $message = 'Projet modifié avec succès';
            } else {
                // Ajout
                if ($imageName) {
                    $stmt = $pdo->prepare("INSERT INTO projects (title, description, technologies, url, image) VALUES (?, ?, ?, ?, ?)");
                    $stmt->execute([$title, $description, $technologies, $url, $imageName]);
                    $message = 'Projet ajouté avec succès';
                } else {
                    $error = 'Veuillez ajouter une image';
                }
            }
        }
    }
}

// Récupérer tous les projets
$projects = $pdo->query("SELECT * FROM projects ORDER BY created_at DESC")->fetchAll(PDO::FETCH_ASSOC);

// Projet en cours d'édition
$editProject = null;
if (isset($_GET['edit'])) {
    $id = intval($_GET['edit']);
    $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = ?");
    $stmt->execute([$id]);
    $editProject = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gérer les Projets</title>
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
        .admin-content {
            padding: 3rem 0;
            background: var(--light-gray);
            min-height: calc(100vh - 70px);
        }
        .project-form {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            margin-bottom: 2rem;
        }
        .projects-table {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: var(--shadow);
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        th {
            background: var(--light-gray);
            font-weight: 600;
        }
        .project-image-preview {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 5px;
        }
        .action-btns {
            display: flex;
            gap: 0.5rem;
        }
        .btn-edit, .btn-delete {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-decoration: none;
            font-size: 0.9rem;
            transition: all 0.3s;
        }
        .btn-edit {
            background: #10b981;
            color: white;
        }
        .btn-edit:hover {
            background: #059669;
        }
        .btn-delete {
            background: #ef4444;
            color: white;
        }
        .btn-delete:hover {
            background: #dc2626;
        }
        .alert {
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        .alert-success {
            background: #d1fae5;
            color: #065f46;
        }
        .alert-error {
            background: #fee;
            color: #c00;
        }
    </style>
</head>
<body>
    <header class="admin-header">
        <div class="container">
            <nav class="admin-nav">
                <h2>📁 Gestion des Projets</h2>
                <div>
                    <a href="dashboard.php"><i class="fas fa-home"></i> Dashboard</a>
                    <a href="<?php echo SITE_URL; ?>" target="_blank"><i class="fas fa-external-link-alt"></i> Voir le site</a>
                    <a href="logout.php"><i class="fas fa-sign-out-alt"></i> Déconnexion</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="admin-content">
        <div class="container">
            <?php if ($message): ?>
                <div class="alert alert-success"><?php echo $message; ?></div>
            <?php endif; ?>
            
            <?php if ($error): ?>
                <div class="alert alert-error"><?php echo $error; ?></div>
            <?php endif; ?>

            <!-- Formulaire d'ajout/modification -->
            <div class="project-form">
                <h2><?php echo $editProject ? 'Modifier le Projet' : 'Ajouter un Nouveau Projet'; ?></h2>
                <form method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="csrf_token" value="<?php echo generateCSRFToken(); ?>">
                    <?php if ($editProject): ?>
                        <input type="hidden" name="id" value="<?php echo $editProject['id']; ?>">
                    <?php endif; ?>
                    
                    <div class="form-group">
                        <label>Titre du Projet *</label>
                        <input type="text" name="title" value="<?php echo $editProject ? htmlspecialchars($editProject['title']) : ''; ?>" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Description *</label>
                        <textarea name="description" rows="4" required><?php echo $editProject ? htmlspecialchars($editProject['description']) : ''; ?></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Technologies (séparées par des virgules) *</label>
                        <input type="text" name="technologies" value="<?php echo $editProject ? htmlspecialchars($editProject['technologies']) : ''; ?>" placeholder="PHP, MySQL, JavaScript" required>
                    </div>
                    
                    <div class="form-group">
                        <label>URL du Projet</label>
                        <input type="url" name="url" value="<?php echo $editProject ? htmlspecialchars($editProject['url']) : ''; ?>" placeholder="https://example.com">
                    </div>
                    
                    <div class="form-group">
                        <label>Image <?php echo $editProject ? '(laisser vide pour garder l\'actuelle)' : '*'; ?></label>
                        <input type="file" name="image" accept="image/*" <?php echo !$editProject ? 'required' : ''; ?>>
                        <?php if ($editProject && $editProject['image']): ?>
                            <img src="<?php echo SITE_URL . '/images/projects/' . $editProject['image']; ?>" alt="Current" style="margin-top: 1rem; max-width: 200px; border-radius: 5px;">
                        <?php endif; ?>
                    </div>
                    
                    <div style="display: flex; gap: 1rem;">
                        <button type="submit" class="btn btn-primary">
                            <?php echo $editProject ? 'Mettre à Jour' : 'Ajouter le Projet'; ?>
                        </button>
                        <?php if ($editProject): ?>
                            <a href="manage-projects.php" class="btn btn-secondary">Annuler</a>
                        <?php endif; ?>
                    </div>
                </form>
            </div>

            <!-- Liste des projets -->
            <div class="projects-table">
                <h2>Liste des Projets (<?php echo count($projects); ?>)</h2>
                <?php if (count($projects) > 0): ?>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Titre</th>
                                <th>Technologies</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($projects as $project): ?>
                                <tr>
                                    <td>
                                        <img src="<?php echo SITE_URL . '/images/projects/' . $project['image']; ?>" 
                                             alt="<?php echo htmlspecialchars($project['title']); ?>" 
                                             class="project-image-preview">
                                    </td>
                                    <td><strong><?php echo htmlspecialchars($project['title']); ?></strong></td>
                                    <td><?php echo htmlspecialchars($project['technologies']); ?></td>
                                    <td><?php echo date('d/m/Y', strtotime($project['created_at'])); ?></td>
                                    <td>
                                        <div class="action-btns">
                                            <a href="?edit=<?php echo $project['id']; ?>" class="btn-edit">
                                                <i class="fas fa-edit"></i> Modifier
                                            </a>
                                            <a href="?delete=<?php echo $project['id']; ?>" 
                                               class="btn-delete" 
                                               onclick="return confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')">
                                                <i class="fas fa-trash"></i> Supprimer
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                <?php else: ?>
                    <p style="text-align: center; color: #666; padding: 2rem;">Aucun projet pour le moment. Ajoutez-en un !</p>
                <?php endif; ?>
            </div>
        </div>
    </main>
</body>
</html>
