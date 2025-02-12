<?php include_once "contents/content.php" ?>
<!DOCTYPE html>
<html lang="<?php echo $language; ?>">


<head>
  <?php
  $url = $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF'];
  $config = [
    'localhost/public/index.php' => ['GA_CODE' => 'G-8XDGXSWV4L'],
    'clientbeta.tech/public/index.php' => ['GA_CODE' => 'G-8XDGXSWV4L']
  ];
  ?>

  <!-- GOOGLE TAG MANAGER -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $config[$url]['GA_CODE']; ?>"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', '<?php echo $config[$url]['GA_CODE']; ?>');
  </script>

  <title><?php echo $title; ?></title>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport">
  <meta content="IE=edge" http-equiv="X-UA-Compatible">
  <meta name="description" content="Maria's Website is for business and events.">

  <!-- SWIPER CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <!-- GLightbox CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />


  <link rel="shortcut icon" href="../public/assets/images/icons/maria-room-logo.png" type="image/x-icon">

  <link rel="stylesheet" href="../public/assets/css/swiper-config.css">
  <link rel="stylesheet" href="../public/assets/css/style.css">
  <link rel="stylesheet" href="../public/assets/css/media.css">
</head>

<body>