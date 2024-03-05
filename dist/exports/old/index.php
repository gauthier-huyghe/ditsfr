<?php
// ini_set('display_errors', 1);
// ini_set('log_errors', 1);
// ini_set('error_log', dirname(__FILE__) . '/error_log.txt');
// error_reporting(E_ALL);
$lang = 'fr';
$basepath_data = dirname(__FILE__).'/../data/';
$baseurl = '/';

require_once '../api/Mobile_Detect.php';
$detect = new Mobile_Detect;
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
include_once dirname(__FILE__).'/../data/common.php';
include_once dirname(__FILE__).'/../data/translate.'.$lang.'.php';

?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="<?= $lang ?>">
    <head>
        <?php include_once dirname(__FILE__).'/../src/partials/head.php'; ?>
        <!-- Main Style -->
        <link href="../dist/assets/css/style.css?v=<?php echo $Version ?>" rel="stylesheet" type="text/css" />
    </head>
    <body class="book <?= $lang ?> <?= $deviceType ?>">

    	<!-- Header Begins -->
        <header class="header" role="navigation">

            <div class="header__navigation nav js-nav is-active">
                <div class="nav__container">
                    <div class="nav__inner">
                        <div class="nav__content">

                            <div class="nav__logo">
                                <a href="#home" title="Dinner in the Sky">
                                    <span>Dinner in the Sky</span>
                                </a>
                            </div>

                            <a class="nav__toggle" href="../<?= $lang ?>/">
                                <div class="nav__toggle__state"><span class="icon-back"></span> Back to the website</div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </header>
        <!-- Header Ends -->

    	<section id="book">
            <div class="book__inner">

                <div class="book__container">

                    <div class="book__container__full">
                        <hr/>
                        <fieldset>
                            <h2>EXPORTS</h2>

<table style="display: inline-table; text-align:center;" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
	<td colspan="2"><p><a href="exportDB.php?table=contact_list_private">Export Contacts Private</a></p></td>
	<td colspan="2"><p><a href="exportDB.php?table=contact_list_company">Export Contacts Company</a></p></td>
  </tr>
  <tr>
	<td colspan="2">&nbsp;</td>
  </tr>
</table>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>

        <script type="text/javascript" src="https://ft-polyfill-service.herokuapp.com/v2/polyfill.min.js"></script>
        <script type="text/javascript" src="../dist/assets/scripts/app.js?v=<?= $Version ?>"></script>

    </body>
</html>
