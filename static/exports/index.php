<?php
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', dirname(__FILE__) . '/error_log.txt');
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="">
    <head>
        <title>Website | Home</title>
        <meta data-n-head="ssr" charset="utf-8">
        <meta data-n-head="ssr" name="viewport" content="width=device-width,initial-scale=1">
        <meta data-n-head="ssr" name="format-detection" content="telephone=no">
        <meta data-n-head="ssr" data-hid="i18n-og" property="og:locale" content="fr_BE">
        <meta data-n-head="ssr" data-hid="i18n-og-alt-en-GB" property="og:locale:alternate" content="en_GB">
        <meta data-n-head="ssr" data-hid="i18n-og-alt-nl-BE" property="og:locale:alternate" content="nl_BE">
        <meta data-n-head="ssr" data-hid="title" name="title" content="Website | Home">
        <meta data-n-head="ssr" data-hid="description" name="description" content="Website | Homepage decription">
        <meta data-n-head="ssr" data-hid="image" name="image" content="undefined">
        <meta data-n-head="ssr" itemprop="name" content="Website | Home">
        <meta data-n-head="ssr" itemprop="description" content="Website | Homepage decription">
        <meta data-n-head="ssr" itemprop="image" content="undefined">
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary">
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Website | Home">
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content="Website | Homepage decription">
        <meta data-n-head="ssr" data-hid="og:title" name="og:title" property="og:title" content="Website | Home">
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" property="og:description" content="Website | Homepage decription">
        <meta data-n-head="ssr" data-hid="og:image" name="og:image" property="og:image" content="undefined">
        <meta data-n-head="ssr" data-hid="og:url" name="og:url" property="og:url" content="/fr">
        <meta data-n-head="ssr" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="WP Headless">
        <meta data-n-head="ssr" data-hid="og:type" name="og:type" property="og:type" content="website">
        <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.ico">

    </head>
    <body class="book">

    	<!-- Header Begins -->
        <header class="header" role="navigation">

            <div class="header__navigation nav js-nav is-active">
                <div class="nav__container">
                    <div class="nav__inner">
                        <div class="nav__content">

                            <div class="nav__logo">
                                <a href="/fr" title="Dinner in the Sky">
                                    <span>Dinner in the Sky</span>
                                </a>
                            </div>

                            <a class="nav__toggle" href="/fr">
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

    </body>
</html>
