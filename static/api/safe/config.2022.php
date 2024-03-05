<?php

// Parametres mySQL
$host = "kuuo.myd.sharedbox.com"; // Serveur mySQL
$username = "kuuo_theLimit"; // Login de connection a mySQL
$password = "C13lFr0nT13r"; // Mot de passe pour mySQL
$db = "kuuo_intheSky"; // Base de donnees mySQL

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
