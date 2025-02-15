<?php include_once '../includes/head.php'; ?>

<?php include_once '../includes/content-header.php' ?>

<main>
  <?php
  $sections = ['banner', 'mc', 'wb', 'secrets', 'exclusive', 'yt'];

  foreach ($sections as $section) {
    include_once "../includes/content-$section.php";
  }
  ?>

</main>
<?php
include_once '../includes/footer.php';
include_once '../includes/aside.php';
?>