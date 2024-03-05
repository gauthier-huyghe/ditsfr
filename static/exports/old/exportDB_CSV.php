<?php
if (isset($_GET['table']) && !empty($_GET['table'])) {
	$table = $_GET['table'];
} else {
	die('Table not valid');
}

header("Content-type: application/csv");
header("Content-Disposition: attachment; filename=DITS_".date("Y-m-d_H-i",time())."_".$table.".csv");
header("Pragma: no-cache"); 
header("Expires: 0");
include('../safe/config.php');

if ($table == 'fullcompany') {

	$result = mysql_query("SHOW COLUMNS FROM `contact_list_company_2012`");
	$i = 0;
	if (mysql_num_rows($result) > 0) {
		while ($row = mysql_fetch_assoc($result)) {
			$csv_output .= $row['Field']."; ";
			$i++;
		}
	}
	 
	$csv_output .= "\n";
	 
	$values1 = mysql_query("SELECT * FROM `contact_list_company_2012`");
	while ($rowr = mysql_fetch_row($values1)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}
	$values2 = mysql_query("SELECT * FROM `contact_list_company_liege`");
	while ($rowr = mysql_fetch_row($values2)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}
	$values3 = mysql_query("SELECT * FROM `contact_list_company`");
	while ($rowr = mysql_fetch_row($values3)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}

	print $csv_output;
	exit;

} else if ($table == 'fullprivate') {

	$result = mysql_query("SHOW COLUMNS FROM `contact_list_private_2012`");
	$i = 0;
	if (mysql_num_rows($result) > 0) {
		while ($row = mysql_fetch_assoc($result)) {
			$csv_output .= $row['Field']."; ";
			$i++;
		}
	}
	 
	$csv_output .= "\n";
	 
	$values = mysql_query("SELECT * FROM `contact_list_private_2012`");
	while ($rowr = mysql_fetch_row($values)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}
	$values = mysql_query("SELECT * FROM `contact_list_private_liege`");
	while ($rowr = mysql_fetch_row($values)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}
	$values = mysql_query("SELECT * FROM `contact_list_private`");
	while ($rowr = mysql_fetch_row($values)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}

	print $csv_output;
	exit;

} else {

	$tableselect = $table; /* Remplacez par le nom de votre table à exporter ! */
	$file = 'export';
	$result = mysql_query("SHOW COLUMNS FROM ".$tableselect."");
	$i = 0;
	if (mysql_num_rows($result) > 0) {
		while ($row = mysql_fetch_assoc($result)) {
			$csv_output .= $row['Field']."; ";
			$i++;
		}
	}
	 
	$csv_output .= "\n";
	 
	$values = mysql_query("SELECT * FROM ".$tableselect."");
	while ($rowr = mysql_fetch_row($values)) {
		for ($j=0;$j<$i;$j++) {
			$csv_output .= $rowr[$j]."; ";
		}
		$csv_output .= "\n";
	}

	print $csv_output;
	exit;
}
?>