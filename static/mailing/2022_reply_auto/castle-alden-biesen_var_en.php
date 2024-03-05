<?php
include dirname(__FILE__).'/../../data/common.php';

$text01 = 'Dear,';
$text02 = 'We are pleased to inform you that we have received your pre-registration form for a DINNER IN THE SKY.<br/>
During the month of August 2022, you will be sent in priority the information on the price and the opening of registrations.<br/>
We look forward to welcoming you very soon in the sky';

$image01 = 'https://dinnerinthesky.be/dist/assets/images/'.$bgHome;

$text03 = 'Book your Dinner in the Sky now for priority dates.';

$cta_url = 'https://dinnerinthesky.be/castle-alden-biesen/book/book-2022.php';
$cta_text = 'Click here to book';

foreach ($listChefs as $key => $Chefitem) {
  $chefs[$key]['img'] = 'https://dinnerinthesky.be/dist/assets/images/chefs/thumbs/'.$Chefitem[1];
  $chefs[$key]['name'] = $Chefitem[0];
}

$signature = 'The Dinner in the Sky\'s team<br><a href="http://www.dinnerinthesky.be" style="Margin: 0; color: #356791; font-family: Helvetica,Arial,sans-serif; font-weight: 400; line-height: 1.4; margin: 0; padding: 0; text-align: left; text-decoration: none;">www.dinnerinthesky.be</a>';

$copyright = 'Copyright © 2021 Dinner in the sky, All right reserved.';
$legal_url = 'https://dinnerinthesky.be/en/legal';
$legal_text = 'Privacy policy &amp; Cookies Policy';

$viewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/index_en.php';
$viewweb_text = 'Web Version';

$unsubscribe_url = 'mailto:info@dinnerinthesky.be?subject=UNSUBSCRIBE';
$unsubscribe_text = 'Unsubscribe';

/*****    OPEN    */

$openText01 = 'Dear,<br/><br/>We are pleased to inform you that we have received your pre-registration form for a DINNER IN THE SKY.<br/><br/>Do you want to experience this unique event? Surf to this page:';
$openText02 = 'We look forward to welcoming you very soon in the Brussels sky,<br/><br/>Dinner in the Sky Team<br/>';

$openImage01 = 'https://dinnerinthesky.be/mailing/2022_reply_auto/img/Brussels_dits_2019_1.jpg';

$openViewweb_url = 'http://www.dinnerinthesky.be/mailing/2022_reply_auto/castle-alden-biesen_open_en.php';
?>