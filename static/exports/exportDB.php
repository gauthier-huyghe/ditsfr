<?php
if (isset($_GET['table']) && !empty($_GET['table'])) {
	$table = $_GET['table'];
} else {
	die('Table not valid');
}

// This one makes the beginning of the xls file
function xlsBOF() {
	echo pack("ssssss", 0x809, 0x8, 0x0, 0x10, 0x0, 0x0);
	return;
}

// This one makes the end of the xls file
function xlsEOF() {
	echo pack("ss", 0x0A, 0x00);
	return;
}

// this will write text in the cell you specify
function xlsWriteLabel($Row, $Col, $Value ) {
	$L = strlen($Value);
	echo pack("ssssss", 0x204, 8 + $L, $Row, $Col, 0x0, $L);
	echo $Value;
	return;
}

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");

header("Content-Disposition: attachment;filename=DITS_FR_".date("Y-m-d_H-i",time())."_".$table.".xls");
header("Content-Transfer-Encoding: binary ");


// start the file
xlsBOF();

// these will be used for keeping things in order.
$Xcol = 0;
$Xrow = 0;

$tableselect = $table; /* Remplacez par le nom de votre table à exporter ! */

require_once '../api/safe/config.2022.php';

$pdo = new PDO($dsn, $username, $password);

$pdo->exec("SET CHARACTER SET utf8");
$sql = "SELECT * FROM ".$tableselect."";
$statement = $pdo->prepare($sql);
$statement->execute();
$rows = $statement->fetchAll(PDO::FETCH_ASSOC);

if (!empty($rows)) {
	$firstRow = $rows[0];
	foreach ($firstRow as $colName => $val) {
		xlsWriteLabel( $Xrow, $Xcol, strtoupper( mb_convert_encoding($colName, "ISO-8859-1", "UTF-8") ) );
		$Xcol++;
	}
}

// prepare for the first real data row
$Xcol = 0;
$Xrow++;

foreach ($rows as $row) {
	foreach( $row as $k => $v ) {
		// write it out

		xlsWriteLabel( $Xrow, $Xcol, mb_convert_encoding($v, "ISO-8859-1", "UTF-8") );
		$Xcol++;
	}
	// reset col and goto next row
	$Xcol = 0;
	$Xrow++;
}


xlsEOF();
exit;

?>
