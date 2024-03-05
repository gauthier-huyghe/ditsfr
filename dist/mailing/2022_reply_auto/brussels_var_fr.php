<?php
$translations = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/fr/translations.json'), true);
$globals = json_decode(file_get_contents(dirname(__FILE__) . '/../../json/globals.json'), true);

$text01 = 'Madame, Monsieur,';
$text02 = 'Merci pour votre intérêt pour Dinner in the Sky.<br/>Nous avons le plaisir de vous informer que vous êtes dès à présent inscrits dans notre base de donnée.<br/>Vous serez informé en priorité de toutes les informations concernant nos prochains évènements.<br/>Au plaisir de vous accueillir très bientôt sur Dinner in the Sky.';

$image01 = 'https://dinnerinthesky.fr/img/background/DITS-2022-Cloud.png';

$cta_url = $translations['link_booking'];
$cta_text = 'Cliquez ici pour réserver';

foreach ($globals['chefs'] as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.fr/img/chefs/thumbs/'.$Chefitem['img'];
  $chefs[$key]['name'] = $Chefitem['name'];
}

$signature = 'L\'équipe Dinner in the Sky<br><a href="https://www.dinnerinthesky.fr" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.fr</a>';

$copyright = 'Copyright © 2024 Dinner in the sky, Tous droits réservés.';
$legal_url = 'https://dinnerinthesky.fr/terms';
$legal_text = 'Politique de confidentialité &amp; Politique des Cookies';

$viewweb_url = 'https://dinnerinthesky.fr/mailing/2022_reply_auto/index_fr.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.fr?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Madame, Monsieur,<br/><br/>Merci pour votre intérêt pour Dinner in the Sky.<br/>Nous avons le plaisir de vous informer que vous êtes dès à présent inscrits dans notre base de donnée.<br/>Vous serez informé en priorité de toutes les informations concernant nos prochains évènements.<br/>Noter que les réservations pour notre évènement de main 2024 sont actuellement ouvertes via le lien suivant :';
$openText02 = 'Au plaisir de vous accueillir très bientôt sur Dinner in the Sky.<br/><br/>L\'Equipe Dinner in the Sky<br/>';

$openImage01 = 'https://dinnerinthesky.fr/img/background/DITS-2022-Cloud.png';

$openViewweb_url = 'http://www.dinnerinthesky.fr/mailing/2022_reply_auto/index_open_fr.php';

?>