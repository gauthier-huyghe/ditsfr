<?php

// Parametres mySQL
$host = "database"; // Serveur mySQL
$username = "lamp"; // Login de connection a mySQL
$password = "lamp"; // Mot de passe pour mySQL
$db = "lamp"; // Base de donnees mySQL
// Connection au serveur mySQL

$dsn = "mysql:host=$host;dbname=$db";
try {
  // create database connection
  $dpo = new PDO($dsn, $username, $password);

} catch (PDOException $e) {
  die($e->getMessage());
}

// error_reporting(0);

?>
