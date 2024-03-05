<?php

// Parametres mySQL
$sql_serveur = "mysql072.webhosting.be"; // Serveur mySQL
$sql_login = "ID34641_dinner1"; // Login de connection a mySQL
$sql_password = "ID34641_dinner1"; // Mot de passe pour mySQL
$sql_base = "E31p3871BW676TJ"; // Base de donnees mySQL
// Connection au serveur mySQL

$link = mysql_connect($sql_serveur, $sql_login, $sql_password);
if (!$link) {
   die('Impossible de se connecter : ' . mysql_error());
}

// Rendre la base de données foo, la base courante
$db_selected = mysql_select_db($sql_base, $link);
if (!$db_selected) {
   die ('Impossible de sélectionner la base de données : ' . mysql_error());
}

error_reporting(0);
		
?>
