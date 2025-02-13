<?php include_once "contents/content.php" ?>
<!DOCTYPE html>
<html lang="<?php echo $language; ?>">


<head>
  <?php
  $url = $_SERVER['SERVER_NAME'] . $_SERVER['PHP_SELF'];
  $config = [
    'localhost/public/index.php' => ['GA_CODE' => 'G-8XDGXSWV4L', 'GTM' => 'GTM-MQKHWM4S'],
    'clientbeta.tech/maria-ozawa/public/index.php' => ['GA_CODE' => 'G-8XDGXSWV4L', 'GTM' => 'GTM-MQKHWM4S']
  ];
  ?>

  <!-- Google Tag Manager -->
  <script async="" src="https://www.googletagmanager.com/gtm.js?id=<?php echo $config[$url]['GTM']; ?>"></script>
  <script>(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', '<?php echo $config[$url]['GTM']; ?>');</script>
  <!-- End Google Tag Manager -->

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
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQKHWM4S" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->