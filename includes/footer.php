<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php echo SITE_NAME; ?></h3>
                    <p>Developpeur Junior passionner , creant des solutions web innovantes</p>
        
                </div>
                <div class="footer-section">
                    <h3>liens rapides</h3>
                    <ul>
                       <li><a href="<?php echo SITE_URL;?>/about.php">A propos</a> </li>
                         <li><a href="<?php echo SITE_URL;?>/services.php">services</a> </li>
                           <li><a href="<?php echo SITE_URL;?>/portfolio.php"></a>portfolio </li>
                
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>contact</h3>
                    <p> <i class="fas fa-envelope"></i> <?php echo SITE_EMAIL;?> </p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-linkeden"></i></a>
                         <a href="#"><i class="fab fa-github"></i></a>
                          <a href="#"><i class="fab fa-twiter"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy;<?php echo date ('y'); ?><?php echo SITE_NAME ; ?> tous droits reserves </p>
            </div>
        </div>
    </footer>
    <script src="<?php echo SITE_URL; ?>">/js/main.js</script>
</body>
</html>