<?php
// ini_set('display_errors', 1);
// ini_set('log_errors', 1);
// ini_set('error_log', dirname(__FILE__) . '/error_log.txt');
// error_reporting(E_ALL);


$content = json_decode(file_get_contents(dirname(__FILE__).'/../json/globals.json'), true);

// Define some constants
$Config['LOCAL_TEST'] = false;
$Config['ONLINE_TEST'] = false;

$Config["FROM_NAME"] = "Contact Form Dinner in the Sky";
$Config["FROM_EMAIL"] = "info@dinnerinthesky.fr";
$Config["TO_EMAIL_COMPANY"] = Array('michael@hakuna-matata.be' => 'michael@hakuna-matata.be', 'gauthier.huyghe@gmail.com' => 'gauthier.huyghe@gmail.com');
$Config["TO_EMAIL_PRIVATE"] = Array('michael@hakuna-matata.be' => 'michael@hakuna-matata.be', 'gauthier.huyghe@gmail.com' => 'gauthier.huyghe@gmail.com');

$Config["SUBJECT_COMPANY"] = "Contact Dinner in the Sky - Company";
$Config["SUBJECT_PRIVATE"] = "Contact Dinner in the Sky - Private";

$datas = json_decode($_POST['data']);

$Values['youare'] = (isset($datas->youare) && ($datas->youare == 'company' || $datas->youare == 'private') ? $datas->youare : '');
$Values['city'] = (isset($datas->city) ? $datas->city : 'brussels');
$Values['companyname'] = (isset($datas->companyname) ? $datas->companyname : '');
$Values['firstname'] = (isset($datas->firstname) ? $datas->firstname : '');
$Values['lastname'] = (isset($datas->lastname) ? $datas->lastname : '');
$Values['email'] = (isset($datas->email) ? $datas->email : '');
$Values['phone'] = (isset($datas->phone) ? $datas->phone : '');
$Values['nbrseat'] = (isset($datas->nbrseat) ? $datas->nbrseat : '');
$Values['language'] = (isset($datas->language) ? $datas->language : 'en');

function VerifForm($Values=array()) {
global $Values;

	$Errors = false;
	if (!isset($Values['city']) || empty($Values['city'])) {
		$Errors = true;
	}
	if (!isset($Values['youare']) || empty($Values['youare'])) {
		$Errors = true;
	} else if ($Values['youare'] == 'company') {
		if (!isset($Values['companyname']) || empty($Values['companyname'])) {
			$Errors = true;
		}
		if (!isset($Values['nbrseat']) || empty($Values['nbrseat'])) {
			$Errors = true;
		}
	}
	if (!isset($Values['firstname']) || empty($Values['firstname'])) {
		$Errors = true;
	}
	if (!isset($Values['lastname']) || empty($Values['lastname'])) {
		$Errors = true;
	}
	if (!isset($Values['email']) || empty($Values['email']) || !preg_match("/^(.+)@([^\.].*)\.([a-z]{2,})$/", $Values['email'])) {
		$Errors = true;
	}
	if (!isset($Values['phone']) || empty($Values['phone'])) {
		$Errors = true;
	}
	if ($Errors) {
		return false ;
	} else {
		return true;
	}
}

function SendMail() {
global $Config;
global $Values;
global $content;

		include './vendors/class.mailer.php';

    // ENVOYER QUE SI COMPANY
    if ($Values['youare'] == 'company') {

    	// MAIL ADMIN
    	$Message = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
    	<head>
    		<title>::: Dinner in the Sky :::</title>
    	</head>
    <body>
    	<b>Quelqu\'un a remplis le formulaire sur "Dinner in the Sky.fr", Voici les informations :</b><br><br>
      <table width="50%" border="0" cellpadding="0" cellspacing="2">
        <tr><td width="190">Type</td><td width="10">:</td><td>'.$Values['youare'].'</td></tr>';
    	if ($Values['youare'] == 'company') {
    		$Message .= '
        <tr><td width="190">Company Name</td><td width="10">:</td><td>'.$Values['companyname'].'</td></tr>';
    	}
    	$Message .= '
        <tr><td width="190">Name</td><td width="10">:</td><td>'.$Values['firstname'].' '.$Values['lastname'].'</td></tr>
       	<tr><td width="190">E-mail</td><td width="10">:</td><td>'.$Values['email'].'</td></tr>
       	<tr><td width="190">Phone</td><td width="10">:</td><td>'.$Values['phone'].'</td></tr>';
    	if ($Values['youare'] == 'company') {
    		$Message .= '
       	<tr><td width="190">Number of seats</td><td width="10">:</td><td>'.$Values['nbrseat'].'</td></tr>';
    	}
    	$Message .= '
       	<tr><td width="190">Langue</td><td width="10">:</td><td>'.$Values['language'].'</td></tr>
      </table>
    </body></html>';
    	$SendMail = new Mailer();

    	if ($Config['LOCAL_TEST']) {
				// $SendMail->use_smtp('127.0.0.1', 1025);
				// $SendMail->init_smtp();
    		$SendMail->set_address(array('gauthier.huyghe@gmail.com' => 'gauthier.huyghe@gmail.com'));
    	} else if ($Config['ONLINE_TEST']) {
    		$SendMail->set_address(array('gauthier.huyghe@gmail.com' => 'gauthier.huyghe@gmail.com', 'michael.chiche3@gmail.com' => 'michael.chiche3@gmail.com'));
    	} else if ($Values['youare'] == 'company') {
    		$SendMail->set_address($Config["TO_EMAIL_COMPANY"]);
    	} else {
    		$SendMail->set_address($Config["TO_EMAIL_PRIVATE"]);
    	}
    	$SendMail->set_from($Config["FROM_EMAIL"], $Config["FROM_NAME"]);
    	$SendMail->set_format('html');
        if ($Values['youare'] == 'company') {
    		$SendMail->set_subject($Config["SUBJECT_COMPANY"]);
    	} else {
    		$SendMail->set_subject($Config["SUBJECT_PRIVATE"]);
    	}
    	$SendMail->set_message(utf8_decode($Message));
    	$SendMail->send();
    }

	/***** Auto Reply *****/


	if (isset($Values['email']) && $Values['youare'] != 'company') {

    ob_start();

		include(dirname(__FILE__).'/../mailing/2022_reply_auto/'.$Values['city'].'_var_'.$Values["language"].'.php');
		// include(dirname(__FILE__).'/../mailing/2021_reply_auto/brussels_fr.php');

		include(dirname(__FILE__).'/../mailing/2022_reply_auto/foundation-emails-template/dist/dits_'.$Values['city'].'_'.($content['reservationOpen'] ? 'open_' : '').'php.php');
		$combinefile = ob_get_clean();

		// var_dump($combinefile);
		// die();

		// $Message2 = sanitize_output($combinefile);
		$Message2 = $combinefile;

		$SendMail2 = new Mailer();
		$SendMail2->set_from('info@dinnerinthesky.fr', 'Dinner in the Sky');
		$SendMail2->set_address(array($Values['email'] => $Values['email']));
		$SendMail2->set_format(3); /* Multi-format (html affiché, et texte si html pas supporté) */
		$SendMail2->set_subject('Dinner in the Sky');
		$SendMail2->set_message(utf8_decode($Message2));
		$SendMail2->send();
	}

	return true;
}

function SaveForm() {
global $Values;

	require_once './safe/config.2022.php';

	try {
		$dpo = new PDO($dsn, $username, $password);

		if ($Values['youare'] == 'company') {
			$data = array(
				'ip' => $_SERVER["REMOTE_ADDR"],
				// 'city' => utf8_decode($Values['city']),
				'companyname' => utf8_decode($Values['companyname']),
				'firstname' => utf8_decode($Values['firstname']),
				'lastname' => utf8_decode($Values['lastname']),
				'email' => utf8_decode($Values['email']),
				'phone' => utf8_decode($Values['phone']),
				'nbrseat' => utf8_decode($Values['nbrseat']),
				'language' => $Values["language"]
			);

			$sql = "INSERT INTO contact_list_company(ip, companyname, firstname, lastname, email, phone, nbrseat, language) VALUES (:ip, :companyname, :firstname, :lastname, :email, :phone, :nbrseat, :language)";
			// $sql = "INSERT INTO contact_list_company(ip, city, companyname, firstname, lastname, email, phone, nbrseat, language) VALUES (:ip, :city, :companyname, :firstname, :lastname, :email, :phone, :nbrseat, :language)";

		} else {
			$data = array(
				'ip' => $_SERVER["REMOTE_ADDR"],
				// 'city' => utf8_decode($Values['city']),
				'firstname' => utf8_decode($Values['firstname']),
				'lastname' => utf8_decode($Values['lastname']),
				'email' => utf8_decode($Values['email']),
				'phone' => utf8_decode($Values['phone']),
				'language' => $Values["language"]
			);

			$sql = "INSERT INTO contact_list_private(ip, firstname, lastname, email, phone, language) VALUES (:ip, :firstname, :lastname, :email, :phone, :language)";
			// $sql = "INSERT INTO contact_list_private(ip, city, firstname, lastname, email, phone, language) VALUES (:ip, :city, :firstname, :lastname, :email, :phone, :language)";

		}


		$request = $dpo->prepare($sql)->execute($data);

	// var_dump($sql);
	// var_dump($data);
	// var_dump($request);
	// die();

	} catch (PDOException $e) {
		die($e->getMessage());
	}

	if ($request === false){
		return false;
	} else {
		return true;
	}
}

// Read the form values
$success = false;

// If all values exist, send the email
if ( VerifForm($Values)
			&& SaveForm()
			&& SendMail()
	) {
	$success = true;
}

// Return an appropriate response to the browser
echo $success
	? json_encode(Array("type" => "success", "message" => "<p>Thanks for sending your message! We'll get back to you shortly.</p>"))
	: json_encode(Array("type" => "error", "message" => "<p>There was a problem sending your message. Please try again.</p>"));

?>
