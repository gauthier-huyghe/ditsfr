<?php
include dirname(__FILE__).'/../../data/common.php';

$text01 = 'Beste,';
$text02 = 'Wij hebben uw voorinschrijving voor DINNER IN THE SKY goed ontvangen en danken u hiervoor.<br/>
Tijdens de maand augustus 2022 zult U als eerste op de hoogte gebracht worden van de prijs en de opening van de definitieve inschrijvingen.<br/>
Wij verheugen ons u te mogen verwelkomen in de lucht.';

$image01 = 'https://dinnerinthesky.be/dist/assets/images/'.$bgHome;

$text03 = 'Reserveer nu al uw Dinner in the Sky voor de prioritaire data.';

$cta_url = 'https://dinnerinthesky.be/castle-alden-biesen/book/reservatie-2022.php';
$cta_text = 'Klik hier om te reserveren';

foreach ($listChefs as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.be/dist/assets/images/chefs/thumbs/'.$Chefitem[1];
  $chefs[$key]['name'] = $Chefitem[0];
}

$signature = 'De Dinner in the Sky-team<br><a href="http://www.dinnerinthesky.be" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.be</a>';

$copyright = 'Copyright © 2021 Dinner in the sky, Alle rechten voorbehouden.';
$legal_url = 'https://dinnerinthesky.be/nl/legal';
$legal_text = 'Privacyverklaring &amp; Cookieverklaring';

$viewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/index_nl.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.be?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Beste,<br/><br/>Wij hebben uw voorinschrijving voor DINNER IN THE SKY goed ontvangen en danken u hiervoor.<br/><br/>Wil u er ook bij zijn? Afspraak op deze pagina:';
$openText02 = 'Wij verheugen ons u te mogen verwelkomen in de lucht van Brussel.<br/><br/>De Dinner in the Sky-team<br/>';

$openImage01 = 'https://dinnerinthesky.be/mailing/2022_reply_auto/img/Brussels_dits_2019_1.jpg';

$openViewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/castle-alden-biesen_open_nl.php';
?>