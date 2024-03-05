---
subject: Dinner in the sky
---

<wrapper class="header">
  <container>
    <spacer size="10"></spacer>
    <row class="collapse">
      <columns small="6" large="4">
        <img src="https://dinnerinthesky.be/mailing/2022_reply_auto/img/logo-white.png" alt="Dinner in the sky | Belgium">
      </columns>
      <columns small="6" large="8">
        &nbsp;
      </columns>
    </row>
    <spacer size="10"></spacer>
  </container>
</wrapper>

<container>

  <spacer size="16"></spacer>

  <row>
    <columns small="12">
      <center>
        <p><?php echo $openText01 ?></p>
      </center>
      <center>
        <button href="<?php echo $cta_url ?>"><?php echo $cta_text ?></button>
      </center>
      <center>
        <p><?php echo $openText02 ?></p>
      </center>
    </columns>
  </row>

  <spacer size="16"></spacer>

  <row>
    <columns small="12">
      <center>
        <img src="<?php echo $openImage01 ?>" alt="Dinner in the sky">
      </center>

    </columns>
  </row>

  <spacer size="16"></spacer>

  <row align="center">
    <?php foreach ($chefs as $key => $Chefitem) { ?>
      <columns small="6" large="3">
        <img align="center" src="<?php echo $Chefitem['img'] ?>" alt="<?php echo $Chefitem['name'] ?>">
      </columns>
      <?php if ($key % 4 == 3) { ?>
  </row>
  <row align="center">
      <?php } ?>
      <?php $last = $key % 4 ?>
    <?php } ?>
    <?php $nbrComplete = 4 - ($last + 1); ?>
    <?php for ($i = 0; $i < $nbrComplete; $i++) { ?>
      <columns small="6" large="3">&nbsp;</columns>
    <?php } ?>
  </row>

  <row>
    <columns small="12">
      <p><?php echo $signature ?></p>
    </columns>
  </row>

  <wrapper class="secondary">

    <spacer size="16"></spacer>

    <row>
      <columns large="12">
        <center>
          <menu>
            <item href="https://www.facebook.com/ditsbelgium"><img src="https://dinnerinthesky.be/mailing/2022_reply_auto/img/icon-facebook.png" alt=""></item>
            <item href="https://twitter.com/search?q=dinnerinthesky"><img src="https://dinnerinthesky.be/mailing/2022_reply_auto/img/icon-twitter.png" alt=""></item>
            <item href="http://instagram.com/dinnerinthesky_official?ref=badge"><img src="https://dinnerinthesky.be/mailing/2022_reply_auto/img/icon-instagram.png" alt=""></item>
            <item href="https://plus.google.com/s/Dinner%20in%20the%20sky%20belgium"><img src="https://dinnerinthesky.be/mailing/2022_reply_auto/img/icon-google_plus.png" alt=""></item>
          </menu>
        </center>
        <br/>
        <p class="text-center"><small><?php echo $copyright ?><br/><a href="<?php echo $legal_url ?>"><?php echo $legal_text ?></a></small></p>
      </columns>
    </row>
  </wrapper>

  <center>
    <menu>
      <item href="<?php echo $openViewweb_url ?>"><small><?php echo $viewweb_text ?></small></item>
      <item href="<?php echo $unsubscribe_url ?>"><small><?php echo $unsubscribe_text ?></small></item>
    </menu>
  </center>

</container>
