<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

echo json_encode([
  "metas" => [
    "title" => "Website | Home",
    "description" => "Website | Homepage decription",
    "image" => "https://dummyimage.com/1200x627"
  ],
  "blocks" => [
    [
      "type" => "hero_home",
      "content" => [
        "id" => "home",
        "tagline" => "June 2023",
        "title" => "Dinning with<br/><strong>the stars</strong>",
        "image" => "/img/DITS-2022-Waterloo.png",
        "text" => "<p>Soyez les premiers à être informés<br/>de l'ouverture des réservations !",
        "cta" => [
          "text" => "Je m'inscris",
          "route" => "#suscribe"
        ]
      ],
    ],
    [
      "type" => "images_text",
      "content" => [
        "id" => "dits_2_0",
        "title" => "This new generation of Dinner in the Sky tables",
        "tagline" => "DITS 2.0",
        "text" => "
          <p>Cette nouvelle génération de table Dinner in the Sky déjà présente à Kuala Lumpur, Riyad et Singapore va enfin devenir accessible au public belge en 2022.<br/><br/>
          DITS 2.0, c’est une cuisine centrale plus grande et aérée permettant aux Chefs d’avoir un contact direct avec l’ensemble des invités. <br/>
          Mais aussi 8 tables de 4 personnes installées tout autour de la cuisine ouverte permettant d’accueillir 32 invités avec une intimité plus grande.<br/>
          Les réservations peuvent se faire dès à présent pour 2 ou 4 personnes.
          </p>
          <p>Pour les entreprises, plus besoin de privatiser la structure complète pour vos relations d’affaires.<br/>
          Vous pouvez privatiser une, deux, trois ou… tables de 4 personnes ou décider de privatiser les 8 tables, soit 32 places pour un moment tout à fait magique.</p>
          <p>Dinner in the Sky prendra possession dans le ciel de Belgique et accueillera derrière ses fourneaux les plus belles toques Belges.</p>
          <p>Chaque jour les chefs régaleront les 32 convives pour un déjeuner et deux dîners extra-ordinaires dans le ciel étoilé de Belgique.</p>
          <p>L’événement se déroulera en juin 2023.</p>
        ",
        // <p>Dinner in the Sky prendra possession dans le ciel de Belgique et accueillera derrière ses fourneaux les plus belles toques Belges parmi lesquelles :</p>
        "images" => [
          "/img/gallery/JJ5_7049.jpg",
          "/img/gallery/JJ5_6389.jpg",
          "/img/gallery/JJ5_6186.jpg",
        ]
      ]
    ],
    [
      "type" => "image_text_cta",
      "content" => [
        "id" => "cocktails",
        "tagline" => "Et en pratique",
        "title" => "Cocktails",
        "text" => "<p>Pour la partie habillage, on vous conseille de préparer les habits la veille en fonction de la météo et de laisser le choix à l’enfant entre deux options. Porte-manteaux, casier, bac à chaussures, placez un maximum d’objets à leur portée. Un tableau-planning peut aussi aider les plus grands à visualiser les activités de la semaine et se responsabiliser autour de tâches. Le réveil est un autre outil utile à l’autonomie de l’enfant dans sa gestion du temps.</p>",
        "image" => "https://dummyimage.com/600x460",
        "image_left" => true,
        "cta" => [
          "text" => "Voir les témoignages",
          "route" => "/blocks"
        ]
      ]
    ],
    [
      "type" => "image_text_cta",
      "content" => [
        "id" => "chefs",
        "tagline" => "Et en pratique",
        "title" => "Ths Chefs",
        "text" => "<p>Pour la partie habillage, on vous conseille de préparer les habits la veille en fonction de la météo et de laisser le choix à l’enfant entre deux options. Porte-manteaux, casier, bac à chaussures, placez un maximum d’objets à leur portée. Un tableau-planning peut aussi aider les plus grands à visualiser les activités de la semaine et se responsabiliser autour de tâches. Le réveil est un autre outil utile à l’autonomie de l’enfant dans sa gestion du temps.</p>",
        "image" => "https://dummyimage.com/600x460",
        "image_left" => true,
        "cta" => [
          "text" => "Voir les témoignages",
          "route" => "/blocks"
        ]
      ]
    ],
    [
      "type" => "text",
      "content" => [
        "id" => "test2",
        "tagline" => "Affirmation Test 2",
        "title" => "An incredible value",
        "text" => "<p><strong>Fugiat non aute dolor qui officia. Duis in qui officia cillum anim in ullamco magna est pariatur nulla. Aliqua ad anim consectetur anim labore mollit culpa nisi nulla eu consectetur labore incididunt irure. Velit ullamco irure dolore laboris amet irure incididunt commodo esse eu amet eu quis. Voluptate sit consequat tempor aute id aliqua sint enim anim ullamco proident. Officia aliqua do quis esse nostrud. In veniam do deserunt ea fugiat ad labore excepteur irure cillum nisi pariatur. Nulla magna esse nisi exercitation nostrud sint enim nostrud Lorem do occaecat duis magna. Quis amet aliqua elit velit mollit quis laboris ad ea dolore. Irure officia voluptate ut elit.</strong></p><p></p><p>Laborum minim veniam pariatur. Exercitation dolor pariatur tempor nulla adipisicing nulla. Enim dolore culpa laboris eu dolore. Cupidatat esse amet culpa anim. Ut ad incididunt nisi laboris pariatur irure occaecat duis aliqua non nulla qui consectetur fugiat. Lorem est amet ipsum cillum do id amet id anim nisi quis sint enim. Occaecat id commodo nulla non excepteur exercitation occaecat ut cillum in exercitation duis proident amet Lorem. Nostrud aliqua enim velit tempor irure reprehenderit Lorem sunt. Fugiat consectetur anim nostrud voluptate officia sint dolor. Eiusmod officia deserunt nulla.</p>"
      ]
    ],
    [
      "type" => "text",
      "content" => [
        "id" => "test3",
        "tagline" => "Affirmation Test 3",
        "title" => "An incredible value",
        "text" => "<p><strong>Fugiat non aute dolor qui officia. Duis in qui officia cillum anim in ullamco magna est pariatur nulla. Aliqua ad anim consectetur anim labore mollit culpa nisi nulla eu consectetur labore incididunt irure. Velit ullamco irure dolore laboris amet irure incididunt commodo esse eu amet eu quis. Voluptate sit consequat tempor aute id aliqua sint enim anim ullamco proident. Officia aliqua do quis esse nostrud. In veniam do deserunt ea fugiat ad labore excepteur irure cillum nisi pariatur. Nulla magna esse nisi exercitation nostrud sint enim nostrud Lorem do occaecat duis magna. Quis amet aliqua elit velit mollit quis laboris ad ea dolore. Irure officia voluptate ut elit.</strong></p><p></p><p>Laborum minim veniam pariatur. Exercitation dolor pariatur tempor nulla adipisicing nulla. Enim dolore culpa laboris eu dolore. Cupidatat esse amet culpa anim. Ut ad incididunt nisi laboris pariatur irure occaecat duis aliqua non nulla qui consectetur fugiat. Lorem est amet ipsum cillum do id amet id anim nisi quis sint enim. Occaecat id commodo nulla non excepteur exercitation occaecat ut cillum in exercitation duis proident amet Lorem. Nostrud aliqua enim velit tempor irure reprehenderit Lorem sunt. Fugiat consectetur anim nostrud voluptate officia sint dolor. Eiusmod officia deserunt nulla.</p>"
      ]
    ]
  ]
]);
exit();
