<?php require_once 'config.php'; ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo SITE_NAME;?>-Developpeur junior  </title>
    <link rel="stylesheet" href="<?php echo SITE_URL;?>/css/responsive.css">
    <link rel="stylesheet" href="<?php echo SITE_URL; ?>/css/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <title>Document</title>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <a href="<?php echo SITE_URL; ?>"><?php echo SITE_NAME; ?></a>
                </div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="<?php echo SITE_URL; ?>/index.php">Accueil</a></li>
                    <li><a href="<?php echo SITE_URL; ?>/about.php">À Propos</a></li>
                    <li><a href="<?php echo SITE_URL; ?>/services.php">Services</a></li>
                    <li><a href="<?php echo SITE_URL; ?>/portfolio.php">Portfolio</a></li>
                    <li><a href="<?php echo SITE_URL; ?>/contact.php">Contact</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

</body>
</html>