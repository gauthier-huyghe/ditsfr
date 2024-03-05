<?php

// Parametres mySQL
$host = "ugalibahg104397.mysql.db"; // Serveur mySQL
$username = "ugalibahg104397"; // Login de connection a mySQL
$password = "q9g76GNnwdcscK"; // Mot de passe pour mySQL
$db = "ugalibahg104397"; // Base de donnees mySQL
// Connection au serveur mySQL

$dsn = "mysql:host=$host;dbname=$db";
try {
  // create database connection
  $dpo = new PDO($dsn, $username, $password);

} catch (PDOException $e) {
  die($e->getMessage());
}

// $link = mysql_connect($sql_serveur, $sql_login, $sql_password);
// if (!$link) {
//    die('Impossible de se connecter : ' . mysql_error());
// }

// // Rendre la base de données foo, la base courante
// $db_selected = mysql_select_db($sql_base, $link);
// if (!$db_selected) {
//    die ('Impossible de sélectionner la base de données : ' . mysql_error());
// }

// error_reporting(0);

?>
