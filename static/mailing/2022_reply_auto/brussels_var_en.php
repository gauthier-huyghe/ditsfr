<?php
$translations = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/en/translations.json'), true);
$globals = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/globals.json'), true);

$text01 = 'Dear Sir or Madam,';
$text02 = 'Thank you for your interest in Dinner in the Sky.<br/>We are pleased to inform you that you are now registered in our data base.<br/>You will be informed in priority if any places become available as well as all information concerning our next events.<br/>We look forward to welcoming you to Dinner in the Sky.';

$image01 = 'https://dinnerinthesky.be/img/background/DITS-2022-Cloud.png';

$cta_url = $translations['link_booking'];
$cta_text = 'Click here to book';

foreach ($globals['chefs'] as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.be/img/chefs/thumbs/'.$Chefitem['img'];
  $chefs[$key]['name'] = $Chefitem['name'];
}

$signature = 'The Dinner in the Sky\'s team<br><a href="http://www.dinnerinthesky.be" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.be</a>';

$copyright = 'Copyright © 2023 Dinner in the sky, All right reserved.';
$legal_url = 'https://dinnerinthesky.be/en/legal';
$legal_text = 'Privacy policy &amp; Cookies Policy';

$viewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/index_en.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.be?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Dear Sir or Madam,<br/><br/>Thank you for your interest in Dinner in the Sky.<br/>We are pleased to inform you that you are now registered in our data base.<br/>You will be informed in priority with all information concerning our next events.<br/>Please note that reservations for our May 2024 event are currently open via the following link:';
$openText02 = 'We look forward to welcoming you to Dinner in the Sky.<br/><br/>Dinner in the Sky Team<br/>';

$openImage01 = 'https://dinnerinthesky.be/img/background/DITS-2022-Cloud.png';

$openViewweb_url = 'https://dinnerinthesky.be/mailing/2022_reply_auto/index_open_en.php';
?>