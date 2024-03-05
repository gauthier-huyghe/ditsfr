<?php
include dirname(__FILE__).'/../../data/common.php';

$text01 = 'Bonjour,';
$text02 = 'Nous avons le plaisir de vous informer que nous avons bien reçu votre pré-inscription à DINNER IN THE SKY.<br/>
Vous serez informé du prix et de l\'ouverture des réservations en priorité durant le mois d\'août 2022.<br/>
Nous nous réjouissons de vous accueillir très prochainement dans le ciel.';

$image01 = 'https://dinnerinthesky.be/dist/assets/images/'.$bgHome;

$text03 = 'Réservez d\'ores et déjà votre Dinner in the Sky pour les dates prioritaires :';

$cta_url = 'https://dinnerinthesky.be/kortrijk/book/reservation-2022.php';
$cta_text = 'Cliquez ici pour réserver';

foreach ($listChefs as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.be/dist/assets/images/chefs/thumbs/'.$Chefitem[1];
  $chefs[$key]['name'] = $Chefitem[0];
}

$signature = 'L\'équipe Dinner in the Sky<br><a href="http://www.dinnerinthesky.be" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.be</a>';

$copyright = 'Copyright © 2021 Dinner in the sky, Tous droits réservés.';
$legal_url = 'https://dinnerinthesky.be/fr/terms';
$legal_text = 'Politique de confidentialité &amp; Politique des Cookies';

$viewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/index_fr.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.be?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Bonjour,<br/><br/>Nous avons le plaisir de vous informer que nous avons bien reçu votre pré-inscription à DINNER IN THE SKY.<br/><br/>Pour vivre cet événement unique rendez-vous donc sur cette page :';
$openText02 = 'Nous nous réjouissons de vous accueillir très prochainement dans le ciel bruxellois,<br/><br/>L\'Equipe Dinner in the Sky<br/>';

$openImage01 = 'https://dinnerinthesky.be/mailing/2022_reply_auto/img/Brussels_dits_2019_1.jpg';

$openViewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/kortrijk_open_fr.php';

?>