<?php
$translations = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/nl/translations.json'), true);
$globals = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/globals.json'), true);

$text01 = 'Geachte heer, mevrouw,';
$text02 = 'Dank u voor uw interesse in Dinner in the Sky.<br/>Het verheugt ons u te kunnen meedelen dat u nu in onze databank bent opgenomen.<br/>U wordt bij voorrang op de hoogte gehouden als er plaatsen vrijkomen en van alle informatie over onze volgende evenementen.<br/>We kijken ernaar uit u te verwelkomen bij Dinner in the Sky.';

$image01 = 'https://dinnerinthesky.be/img/background/DITS-2023-Waterloo_Base_tiny.png';

$cta_url = $translations['link_booking'];
$cta_text = 'Klik hier om te reserveren';

foreach ($globals['chefs'] as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.be/img/chefs/thumbs/'.$Chefitem['img'];
  $chefs[$key]['name'] = $Chefitem['name'];
}

$signature = 'De Dinner in the Sky-team<br><a href="http://www.dinnerinthesky.be" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.be</a>';

$copyright = 'Copyright © 2022 Dinner in the sky, Alle rechten voorbehouden.';
$legal_url = 'https://dinnerinthesky.be/nl/legal';
$legal_text = 'Privacyverklaring &amp; Cookieverklaring';

$viewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/waterloo_nl.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.be?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Geachte heer, mevrouw,<br/><br/>Dank u voor uw interesse in Dinner in the Sky.<br/>Het verheugt ons u te kunnen meedelen dat u nu in onze databank bent opgenomen.<br/>U wordt bij voorrang op de hoogte gehouden als er plaatsen vrijkomen en van alle informatie over onze volgende evenementen.<br/>Reserveringen voor ons evenement in juni 2023 zijn momenteel open via de volgende link: ';
$openText02 = 'We kijken ernaar uit u te verwelkomen bij Dinner in the Sky.<br/><br/>De Dinner in the Sky-team<br/>';

$openImage01 = 'https://dinnerinthesky.be/img/background/DITS-2023-Waterloo_Base_tiny.png';

$openViewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/waterloo_open_nl.php';
?>