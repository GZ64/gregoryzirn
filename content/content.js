module.exports = {
    title: 'Grégory Zirn',
    age: '43ans',
    phone: '07.45.09.09.72',
    mail: 'contact@gregoryzirn.fr',
    street: '1 rue Saint Louis',
    zipCode: '35500',
    city: 'Vitré',
    country: 'FRANCE',
    subTitle: 'Développeur web - Symfony - React.js',
    intro: 'Développeur web full-stack avec plus de 6 ans d’expérience, je propose mes services pour accompagner votre entreprise dans le développement de solutions web sur mesure. Spécialisé en front-end et back-end, j’ai une expertise approfondie en HTML, CSS, Javascript (ES6), React, Symfony, et PHP. Je peux intervenir sur l’ensemble du cycle de vie d’un projet, de la conception à la mise en production, en passant par l’intégration continue et l\'optimisation des performances.\n' +
        '\n' +
        'Mes expériences professionnelles chez FIFTY-FIVE, LE POINT, et MOSAIC m’ont permis de travailler dans des environnements complexes et d’apporter des solutions à des problématiques techniques variées, telles que :\n' +
        '\n' +
        'Développement d’applications web performantes et optimisées.\n' +
        'Implémentation d’A/B tests pour améliorer les taux de conversion.\n' +
        'Tracking et analyse des données pour mieux comprendre les comportements utilisateurs.\n' +
        'Gestion et optimisation de sites web en respectant les standards SEO et les réglementations RGPD.\n' +
        'Je suis à l’écoute de vos besoins et peux m’adapter à vos outils existants pour garantir la réussite de vos projets. Si vous cherchez un professionnel réactif, capable de s’intégrer rapidement dans votre équipe ou de travailler en autonomie, je serais ravi d’échanger avec vous sur vos objectifs et comment nous pouvons les atteindre ensemble.',
    resume: 'Après un long parcours de formations et une expérience en agence, je maîtrise les technologies du web les plus demandées par les entreprises. Mes connaissances sont d’une part axées sur le code,  et d’autres part sur la gestions de projets.J’utilise aussi des outils de web-design, UX/UI design pour mes besoin personnels. Voici une présentation des niveau de compétences.',
    skills: [
        {name: 'symfony', score: '60'},
        {name: 'reactjs', score: '70'},
        {name: 'redux', score: '30'},
        {name: 'SSR', score: '30'},
        {name: 'sass', score: '90'},
        {name: 'gulp', score: '70'},
        {name: 'html_css', score: '90'},
        {name: 'es_6', score: '70'},
        {name: 'node_js', score: '70'},
        {name: 'angular_js', score: '40'},
        {name: 'vue_js', score: '40'},
        {name: 'php', score: '70'},
        {name: 'mysql', score: '70'},
        {name: 'bootstrap', score: '80'},
        {name: 'materialize', score: '90'},
        {name: 'linux', score: '70'},
        {name: 'photoshop', score: '30'}
    ],
    introProjets: 'Mes premiers projets m\'ont permis d\'expérimenter le développement web (architecture MVC, projets orientés objets). Ensuite j’ai participé a la réalisation de projets bien plus innovant (produits bancaires, réservations d’espaces de travail, Interface de suivi des crypto-monnaies).',
    portfolios: [
        {
            title: 'HelloBank',
            link: 'https://www.hellobank.fr/fr/ouvrir-un-compte/?types=HBA',
            gitlab: 'http://hellobank.gregoryzirn.fr/',
            content: 'Formulaire de souscription d\'un compte bancaire chez Hellobank.',
            details: [
                'Le formulaire se compose d’une landing page sur laquelle les données du prospect sont tout de suite récupérées pour pouvoir le relancer en cas d’abandon',
                'Ensuite nous récoltons plus d’information sur le prospect comme son adresse postal, son identité, sa profession puis ensuite on demande aux prospect de fournir ses pièces justificatives a l’aide d’un système d’upload avec vérification des données via une api',
                'Pour la partie technique, le formulaire est livrée dans une iframe, donc j’ai du faire face a des problématique lié au cross-domain pour par exemple étendre la hauteur de l’frame (chez le parent donc) quand on déroule un dropdown dans le formulaire (l’enfant)',
                'La stack technique était composée de : Symfony2, Jquery, twig, foundation  et  de Web services pour la validation des pièces justificatives. '
                ],
            src: 'img/portfolio/hellobank.png',
            alt: 'Application Hellobank'
        },
        {
            title: 'BNP Paribas',
            link: 'https://mabanque.bnpparibas/fr/ouvrir-un-compte/?agence=EERI',
            gitlab: 'http://bnpparibas.gregoryzirn.fr/',
            content: 'Formulaire d\'ouverture de compte BNP Paribas 9 minutes',
            details: [
                'Le client BNP Paribas nous a sollicité afin de pouvoir se positionner sur le marché du compte bancaire en 9 minutes ! Donc c’est la première contrainte technique. Mais le formulaire reste sensiblement le meme.',
                'Le formulaire est a peu près identique à celui de Hellobank, donc le gain de temps est au niveau des vérifications des pièces fourni. Pour des raison de productivité nous avion récupérer le système d’upload de Hellobank',
                'La stack technique était composée de Symfony pour le back-end, REACT pour le front avec le framework material ui basé sur REACTJS. '
            ],
            src: 'img/portfolio/bnp_paribas.png',
            alt: 'BNP Paribas'
        },
        {
            title: 'Le comptoir des saveurs.',
            link: 'img/portfolio/flyers_comptoir_des_saveurs.png',
            content: 'Réalisation d\'un Flyers pour le restaurant Le comptoir des saveurs à l\'aide de Photoshop, InDesign et un bon massicot',
            details: ['Recto verso au format A5 300 pixels/pouce', 'Création du design en accord avec la charte graphique', 'Impression et découpage'],
            src: 'img/portfolio/flyers_comptoir_des_saveurs_preview.png',
            alt: 'Flyers Comptoir des saveurs'
        },
        {
            title: 'La maison de l\'architecte.',
            link: 'http://lamaisondelarchitecte.gregoryzirn.fr/',
            content: 'Mise en pratique d\'une <strong>mise en page</strong> avec Bootstrap',
            details: ['En-tête : Utilisation d\'un <strong>jumbotron</strong> avec surcharge de la couleur de fond et de la marge inférieure. Au sein de ce jumbotron j\'utilise la grille pour répartir le logo et le titre. Utilisation des classes pour centrer le texte et pour cacher le logo sur les smartphones', 'Corps de page : Répartition des images avec la grille. Marge entre les images', 'Pied de page : Une rangée et un centrage avec quelques règles css pour les boutons ronds', 'Généralités sur la page : Police Bitter de <strong>google fonts</strong> pour le texte. Une couleurs de fond à #eef, et la couleur du texte à #259'],
            src: 'img/portfolio/la_maison_de_l_architecte.png',
            alt: 'La maison de l\'architecte'
        },
        {
            title: 'La maison de l\'architecture.',
            link: 'http://lamaisondelarchitecture.gregoryzirn.fr/',
            content: 'Mise en page faisant intervenir des plugins javascript',
            details: ['Barre de navigation fixée en haut avec un fond noir qui se rétracte sur les petits supports', 'Un <strong>carrousel</strong> avec les indicateurs de <strong>slide</strong>, les titres et les boutons de <strong>navigation</strong>', 'Pour le pied de page utilisation d\'une rangée avec un centrage et des images <a href="http://fontawesome.io/icons/" title="Font Awesome" ><strong>Font Awesome</strong></a>'],
            src: 'img/portfolio/la_maison_de_l_architecture.png',
            alt: 'La maison de l\'architecture'
        },
        {
            title: 'Générateur de formulaires.',
            link: 'http://formulaires.gregoryzirn.fr/',
            content: 'L’utilisateur peut créer des formulaires personnalisés en cliquant sur les boutons Label, Zone de texte et Bouton, et en fournissant les renseignements demandés',
            details: ['Utilisation des méthodes <strong>after()</strong> et <strong>append()</strong> qui permettent toutes deux d\'injecter du contenu dans le <strong>DOM</strong>, mais d\'une façon légèrement différente', 'Prévoir un conteneur pour la partie création afin de les supprimer facilement avec la methode <strong>remove()</strong>', 'Un peu de css pour les marges et couleurs'],
            src: 'img/portfolio/generateur_de_formulaires.png',
            alt: 'Générateur de formulaires'
        },
        {
            title: 'Jeu de plateau Javascript.',
            link: 'http://jeuplateau.gregoryzirn.fr/',
            content: '<strong>Stack technique</strong>',
            details: ['HTML CSS', 'Les bases de JavaScript (variables, conditions, boucles, évènements)', 'La <strong>programmation orientée objet</strong> en JavaScript', 'Dissocier les <strong>calculs "métier"</strong> du jeu (est-ce que le joueur a le droit d\'aller sur cette case ?) avec la <strong>mise à jour de l\'interface</strong>', 'Séparer autant que possible les codes ayant des rôles différents dans des fichiers JavaScript différents'],
            src: 'img/portfolio/Jeu_de_plateau.png',
            alt: 'Jeu de plateau'
        },
        {
            title: 'Blog de Zozor',
            link: 'http://blogzozor.gregoryzirn.fr/',
            content: 'Premier mooc d\'openclassrooms autour des langages <strong>HTML5</strong> et CSS3. Ceci est le premier TP du tutoriel.',
            details: ['Rappel sur la <strong>mise en page</strong> (en-tête, corps de page, pied de page)', 'Utilisation des <strong>balises html5</strong> et sensibilisation de leurs rôles <strong>sémantiques</strong>', 'Utilisation des <strong>propriétés CSS3</strong> pour le design et aussi pour le positionnement'],
            src: 'img/portfolio/blog_zozor.png',
            alt: 'Blog de Zozor'
        },
        {
            title: 'CV de Zozor',
            link: 'http://cvzozor.gregoryzirn.fr/',
            content: 'Premier mooc d\'openclassrooms autour des langages <strong>HTML5</strong> et CSS3.Ceci est le premier TP du tutoriel.',
            details: ['Rappel sur la <strong>mise en page</strong> (en-tête, corps de page, pied de page)', 'Utilisation des <strong>balises html5</strong> et sensibilisation de leurs rôles <strong>sémantiques</strong>', 'Utilisation des <strong>propriétés CSS3</strong> pour le design et aussi pour le positionnement'],
            src: 'img/portfolio/cv_zozor.png',
            alt: 'CV de zozor'
        }
    ],
    codes: [
        {
            title: 'Html5 et css3',
            tx_reussite: 89,
            src: 'img/certifications/html_css.png',
            alt: 'HTML et CSS',
            file: 'files/certifications/html_css.pdf',
            details: ['Maîtriser les langages <strong>HTML et CSS</strong>', 'Créer des pages web en HTML et CSS', 'Structurer une page web', 'Transformer une <strong>maquette</strong> en page web', 'Envoyer un site en ligne']
        },
        {
            title: 'Javascript',
            tx_reussite: 93,
            src: 'img/certifications/javascript.png',
            alt: 'Javascript',
            file: 'files/certifications/javascript.pdf',
            details: ['Configuration d\'un environnement de travail en ligne avec JSFiddle, JS Bin et CodePen ou en local avec un IDE comme Sublime Text, Atom et Brackets', 'Les variables, conditions et boucles en <strong>javascript</strong>', 'Manipuler et créer des fonctions', 'Tableaux et chaînes de caractères', 'Programmation orientée objet']
        },
        {
            title: 'JQuery',
            tx_reussite: 95,
            src: 'img/certifications/jquery.png',
            alt: 'JQuery',
            file: 'files/certifications/jquery.pdf',
            details: [
                'Sélection d\'éléments en <strong>JQuery</strong>',
                'Modifier le contenu d\'un élément',
                'Insérer et remplacer des éléments dans le <strong>DOM</strong>',
                'Gestion événementielle',
                'Animations et effets',
                'Files d\'attente et timer',
                'Textes et images',
                'Formulaires et tableaux',
                'Communications <strong>AJAX</strong>',
                'Utiliser et créer des <strong>plugins</strong>',
                '<strong>Déboguer</strong> le code jquery'
            ]
        },
        {
            title: 'Node.js',
            tx_reussite: 95,
            src: 'img/certifications/node-js.png',
            alt: 'Node.js',
            file: 'files/certifications/node-js.pdf',
            details: [
                'Les atouts de <strong>node.js</strong>',
                'Ecouter et créer des évènements',
                'Fonctions de <strong>callback</strong>',
                'Créer des modules',
                'Utiliser <strong>NPM</strong> pour installer des modules',
                'Utilisation du framework <strong>Express.js</strong> pour la gestion des routes, des templates et des middlewares',
                'La communication temps réel avec <strong>socket.io</strong>'
            ]
        },
        {
            title: 'PHP et MySQL',
            tx_reussite: 72,
            src: 'img/certifications/php.png',
            alt: 'PHP',
            file: 'files/certifications/php_mysql.pdf',
            details: [
                'Installation d\'un serveur web local comprenant <strong>Apache</strong> <strong>PHP</strong> et <strong>MySQL</strong>',
                'Inclure des portions de page',
                'Les variables, conditions, boucles, fonctions et tableaux',
                'Transmettre des données par l\'url ou par les formulaires',
                'Variables superglobales, sessions et cookies',
                'Stocker et manipuler des informations à l\'aide de MySQL',
                'Les fonctions, dates et jointures entre tables',
                'Créer des images en PHP',
                'Les expressions régulières',
                'La programmation orientée objet',
                'Organiser son code selon l\'architecture MVC',
                'Proteger un dossier avec un .htaccess'
            ]
        },
        {
            title: 'Bootstrap',
            tx_reussite: 97,
            src: 'img/certifications/bootstrap.png',
            alt: 'Bootstrap',
            file: 'files/certifications/bootstrap.pdf',
            details: [
                'Configurer <strong>Bootstrap</strong>',
                'Organisation spatiale des éléments à l\'aide de la grille.',
                'Eléments de base: listes à puces, descriptions, tableaux, formulaires de contact, boutons, icônes et images',
                'Les composants intégrés: la navigation, effets typographiques, thumbnails, listes groupées, panneaux, médias, alertes et barres de progression',
                'Les plugins JQuery: menu déroulant, fenêtre modale, onglets, boutons, carrousel, info-bulles et Popover, effet accordéon et le Scrollspy'
            ]
        },
        {
            title: 'Wordpress',
            tx_reussite: 92,
            src: 'img/certifications/wordpress.png',
            alt: 'Wordpress',
            file: 'files/certifications/wordpress.pdf',
            details: [
                'La publication d\'articles, de pages, de menus et de medias sous <strong>wordpress</strong>',
                'Gérer un site participatif',
                'Développement de thèmes et plugins',
                'Mise en production',
                'Amélioration du <strong>référencement</strong>',
                'Optimisation des performances (cacher les ressources et compresser les fichiers JS et CSS)'
            ]
        },
        {
            title: 'Git',
            tx_reussite: 84,
            src: 'img/certifications/git.png',
            alt: 'Git',
            file: 'files/certifications/git.pdf',
            details: [
                'Effectuer des commits avec <strong>GIT</strong>',
                'Lire l\'historique',
                'Se positionner sur un commit donné',
                'Utilisation de remotes',
                'Héberger les repositories sur <strong>Github</strong>',
                'Récupérer du code d\'un autre repository',
                'Création de repositories',
                'Envoyer le code sur Github',
                'Récupérer des modifications',
                'Créer des branches',
                'Fusionner des branches',
                'Résoudre des conflits',
                'Identifier les auteurs des différents commits',
                'Ignorer des fichiers'
            ]
        }
    ],
    environnements: [
        {
            title: 'Comprendre le web',
            tx_reussite: 100,
            src: 'img/certifications/comprendre_le_web.png',
            alt: 'Comprendre le web',
            file: 'files/certifications/comprendre_le_web.pdf',
            details: [
                'Comprendre la notion de web au travers des représentations',
                'Maîtriser les notions de <strong>web, services et cloud</strong>',
                'Connaissances sur la création du web et ses acteurs',
                'Notions sur les différents <strong>langages clients/serveurs</strong> qui existent aujourd’hui sur le web',
                'Fonctionnement et comparaison entre les différentes  <strong>base de données</strong>',
                'Les intérêts d’un site <strong>responsive et mobile</strong>',
                'Les réseaux derrière le web (serveur, IP et protocole)',
                'Validation de la question : « Le métier de <strong>développeur web</strong> est-il en adéquation avec mon profil personnel ?',
                'Le parcours pour devenir <strong>développeur informatique</strong> et quelques astuces pour accéder au saint Graal'
            ]
        },
        {
            title: 'Start-up',
            tx_reussite: 73,
            src: 'img/certifications/decouvrez_le_monde_des_start_ups.png',
            alt: 'Les start-ups',
            file: 'files/certifications/start-ups.pdf',
            details: [
                'Les caractéristiques principales d\'une <strong>start-up</strong>',
                'Les modèles économique des start-ups',
                'Le mode de fonctionnement d\'une start-up',
                'Envisager l\'échec',
                'L\'état d\'esprit d\'un entrepreneur',
                'L\'écosystème des start-ups',
                'S\'informer et structurer sa veille',
                'L\'immersion dans un incubateur',
                'Trouver, développer, tester et donner vie à une idée',
                'Le parcours d\'un entrepreneur'
            ]
        },
        {
            title: 'Devenir mentor',
            tx_reussite: 97,
            src: 'img/certifications/devenir_mentor.png',
            alt: 'Devenir mentor',
            file: 'files/certifications/mentor.pdf',
            details: [
                'Devenir <strong>mentor</strong>',
                'Les enjeux du mentorat',
                'Les devoirs du mentor',
                'Les outils et la formation du mentor',
                'Recevoir et accompagner les élèves',
                'Valider un projet'
            ]
        },
        {
            title: 'Référencement web',
            tx_reussite: 95,
            src: 'img/certifications/referencement_web.png',
            alt: 'Référencement web',
            file: 'files/certifications/referencement_web.pdf',
            details: [
                'Le référencement dans le contexte du <strong>webmarketing</strong>',
                '<strong>Référencement naturel</strong> et <strong>référencement payant</strong>',
                'Les moteurs de recherche',
                'La pertinence et la notoriété d\'une page web',
                'Définir des mots clés',
                'Lister les mots clés',
                'Analyser les recherches des internautes',
                'Repérer les mots clés des concurrents',
                'Présentation du contenant',
                'Optimisation technique du contenant',
                'L\'unicité du contenu',
                'Utilisation des outils <strong>SenSEO</strong> <strong>Semrush</strong> et <strong>google adwords</strong>',
                'Gestion des liens entrant et sortant'
            ]
        }
    ],
    systemes: [
        {
            title: 'IBM Bluemix',
            tx_reussite: 92,
            src: 'img/certifications/bluemix.png',
            alt: 'Bluemix',
            file: 'files/certifications/cours_bluemix.pdf',
            details: [
                'L\'environnement cloud <strong>d\'IBM Bluemix (IaaS, PaaS et SaaS)</strong>',
                'Les services de Bluemix',
                'La tarification',
                'L\'interface',
                'Développer un projet avec <strong>DevOps services</strong>',
                'Installer les outils pour utiliser Bluemix depuis chez soi en ligne de commande',
                'Configurer les paramètres de l\'application (nombre de serveurs, mémoire) directement depuis les fichiers de l\'application',
                'Utiliser Git avec Bluemix',
                'Déployer une application en ligne',
                'Ajouter des services à une application (<strong>Cloudant</strong>, <strong>Watson</strong> et <strong>Cloud Integration</strong>)'
            ]
        },
        {
            title: 'Linux',
            tx_reussite: 95,
            src: 'img/certifications/linux.png',
            alt: 'Linux',
            file: 'files/certifications/linux.pdf',
            details: [
                'Les fondements de <strong>Linux</strong>',
                'Partitionner un disque dur',
                'Installer Linux dans une machine virtuelle',
                'Utilisation de la console',
                'La structure des fichiers et dossiers',
                'Les utilisateurs et les droits',
                'Editeur de texte <strong>vim</strong>',
                'Installer des programmes avec <strong>apt-get</strong>',
                'Extraire, trier et filtrer des données',
                'Rediriger le résultat d\'une commande',
                'Surveiller l\'activité du système',
                'Exécuter des programmes en arrière-plan à une heure différée',
                'Archiver et compresser',
                'La connexion <strong>SSH</strong>',
                'Transférer des fichiers',
                'Analyser le réseau et filtrer le trafic avec un pare-feu',
                'Compiler un programme depuis les sources',
                '<strong>Scripts shell</strong>'
            ]
        },
        {
            title: 'Programmer en C',
            tx_reussite: 91,
            src: 'img/certifications/programmer_en_c.png',
            alt: 'Langage C',
            file: 'files/certifications/programmer_en_c.pdf',
            details: [
                'Les bases de la <strong>programmation en C</strong>',
                'Les techniques avancées du langage C (programmation modulaire, pointeurs, tableaux, chaines de caractères, préprocesseur, types de variable, lire et ecrire dans un fichier et allocations dynamique de variable)',
                'Installation de bibliothèques',
                'Afficher des images',
                'La gestion des événements',
                'Ecrire du texte avec <strong>SDL_ttf</strong>',
                'Gestion de l\'audio avec <strong>FMOD</strong>',
                'Les listes chaînées',
                'Les piles et les files',
                'Les tables de hachage'
            ]
        }
    ],
    parcours: [
        {
            title: 'Disciple du Javascript',
            tx_reussite: 93,
            src: 'img/certifications/disciple_javascript.png',
            alt: 'Disciple du javascript',
            file: 'files/certifications/disciple_du_javascript.pdf',
            details: [
                'Apprenez à coder en Javascript',
                'Dynamisez vos sites web avec Javascript',
                'Créez un jeu de plateau tour par tour en Javascript',
                'Simplifiez vos développements Javascript avec JQuery',
                'Des applications ultra-rapides avec node.js',
                'Développez vos applications web avec Angular.js',
                'Créez une single-page app avec node.js et meteor'
            ]
        },
        {
            title: 'Le cloud d\'IBM Bluemix',
            tx_reussite: 91,
            src: 'img/certifications/deployez_sur_bluemix.png',
            alt: 'Déployer sur Bluemix',
            file: 'files/certifications/deployez_vos_applications_node_sur_bluemix.pdf',
            details: [
                'Apprenez à coder en Javascript',
                'Dynamisez vos sites web avec Javascript',
                'Des applications ultra-rapides avec node.js',
                'Gérez votre code avec Git et Github',
                'Déployez des applications dans le cloud avec IBM Bluemix'
            ]
        },
        {
            title: 'Intégrateur web',
            tx_reussite: 92,
            src: 'img/certifications/integrateur_web.png',
            alt: 'Intégrateur web',
            file: 'files/certifications/integration_web.pdf',
            details: [
                'Comprendre le web',
                'Apprenez à créer votre site web avec HTML5 et CSS3',
                'Prenez en main Bootstrap',
                'Gérez votre code avec Git et Github',
                'Utilisation du framework Express.js pour la gestion des routes, des templates et des middlewares',
                'La communication temps réel avec socket.io'
            ]
        },
        {
            title: 'Lancer son site web',
            tx_reussite: 89,
            src: 'img/certifications/lancer_son_site.png',
            alt: 'Lancer son site web',
            file: 'files/certifications/lancer_son_site_web.pdf',
            details: [
                'Comprendre le web',
                'Apprenez à créer votre site web avec HTML5 et CSS3',
                'Concevez votre site web avec PHP et MySQL',
                'Les clés pour réussir son référencement web'
            ]
        }
    ]
};