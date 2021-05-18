<?php

namespace App\DataFixtures;

use App\Entity\Realisations;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

/**
 * Class RealisationsFixtures
 * @package App\DataFixtures
 */
class RealisationsFixtures extends Fixture
{
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager) :void
    {
        $this->addRealisations($manager);
    }

    /**
     * @param array $array
     * @param ObjectManager $manager
     */
    private function persistData(array $array, ObjectManager $manager): void
    {
        foreach ($array as $data){
            $home = new Realisations();
            $home->setTitle($data['title']);
            $home->setDescription($data['description']);
            $home->setSize('1280x857');
            $home->setFilter($data['filter']);
            if(isset($data['cover'])) {
                $home->setCover('build/images/cover/'.$data['cover'].'.jpg');
            } else {
                $home->setCover($data['link']);
            }
            if (isset($data['link'])) {
                $home->setLink($data['link']);
            }

            $manager->persist($home);
        }
        $manager->flush();
    }

    /**
     * @param ObjectManager $manager
     */
    private function addRealisations(ObjectManager $manager): void
    {
        $array = [
            [
                'title' => 'NovelClass',
                'description' => "Ma mission dans ce projet d’alternance est de participé à la refonte du site web NovelClass. Mon travail est assez varié, je m’occupe parfois du Frontend (ReactJs, Sass, Javascript) et parfois du Backend (Symfony, API, DevOps). J’apprends énormément de choses au côté d’un développeur Full-Stack",
                'filter' => 'web',
                'cover' => "web"
            ], [
                'title' => 'Page profil',
                'description' => "Cette illustration apparait sur la page d'accueil du site web. Elle fait référence à la page profil",
                'filter' => 'graphisme',
                'link' => "links/graphisme/cover/profile.png"
            ], [
                'title' => 'Page compétences',
                'description' => "Cette illustration apparait sur la page d'accueil du site web. Elle fait référence à la page compétences",
                'filter' => 'graphisme',
                'link' => "links/graphisme/cover/competences.png"
            ], [
                'title' => 'Page réalisations',
                'description' => "Cette illustration apparait sur la page d'accueil du site web. Elle fait référence à la page réalisations",
                'filter' => 'graphisme',
                'link' => "links/graphisme/cover/realisations.png"
            ], [
                'title' => 'Cloud AWS PHP',
                'description' => 'Manipulation d’un Cloud PaaS. Dans cet exercice, j’utilise le service AWS avec PHP. Ce service va permettre la communication avec Clever Cloud. Je peux ainsi envoyer et récupérer des fichiers',
                'filter' => 'web',
                'cover' => "web",
                'link' => "https://github.com/ChrisChrisW/AWS-Cloud"
            ], [
                'title' => 'Manga Encyclopedia',
                'description' => "L'application te montre tous les mangas et animes disponibles. Elle fait pour les amateurs ou passionnés d'animations japonaises qui souhaitent lire/regarder des mangas/animés qui n'ont pas vus/lus. Elle est aussi pour les gens qui sont curieux et qui souhaitent découvrir cette univers",
                'filter' => 'mobile',
                'cover' => "mobile",
                'link' => "https://gitlab.com/ChrisChrisW/reactjs_lp"
            ], [
                'title' => 'Thème Sylius',
                'description' => "Création d’un site E-Commerce sous Sylius 1.9 (Symfony). L’exercice principal est de produire un Template autrement dit il faut surcharger le Framework Symfony avec nos fichiers PHP, CSS, TWIG, JSON",
                'filter' => 'web',
                'cover' => "web",
                'link' => "https://github.com/ChrisChrisW/SyliusTheme"
            ], [
                'title' => 'Particules en Three.js',
                'description' => 'Initiation à Three.js avec des petites particules',
                'filter' => 'web',
                'cover' => "web",
                'link' => "particles"
            ], [
                'title' => 'Bannière Linkedin',
                'description' => 'Une bannière professionnelle. Il remplace la bannière animée juste à côté',
                'filter' => 'graphisme',
                'link' => "links/graphisme/banniere/slime.png"
            ], [
                'title' => 'Bannière Linkedin animée',
                'description' => 'Un GIF réservait à ma bannière LinkedIn cependant j’ai découvert qu’on ne pouvait pas mettre des images animées',
                'filter' => 'graphisme',
                'link' => "links/graphisme/banniere/animation_slime.gif"
            ],[
                'title' => 'Connexion à une API via React Native',
                'description' => 'Un mini programme en React Native pour se connecter à une API REST. Il fonctionne également en ReactJs',
                'filter' => 'mobile',
                'cover' => "mobile",
                'link' => "https://github.com/ChrisChrisW/react_authentification"
            ], [
                'title' => 'Whaledone API',
                'description' => 'Whaledone est un projet en équipe. C’est une application mobile qui aide les gens à être écoresponsable. Mon rôle était de créer une API REST complète et sécurisé qui se connectera à l’application',
                'filter' => 'web',
                'cover' => "web",
            ], [
                'title' => 'Filtres en Javascript (vanilla)',
                'description' => 'Un exercice en javascript vanilla. Il y plusieurs filtres tels que le Sobel, Sépia, Niveau de gris, … En plus on peut exporter l’image filtrée',
                'filter' => 'web',
                'cover' => "web",
                'link' => "links/javascript-filter/index.html"
            ], [
                'title' => 'Pokedex en PHP',
                'description' => 'Un exercice pour comprendre le concept objet en PHP. Un bon moyen de revoir l’univers Pokémon',
                'filter' => 'web',
                'cover' => "web",
                'link' => "https://github.com/ChrisChrisW/PDO_PHP"
            ], [
                'title' => 'Ancien site portfolio',
                'description' => 'Le portfolio crée lors de ma deuxième année du DUT MMI.',
                'filter' => 'web',
                'cover' => "web",
                'link' => "links/portfolio/index.html"
            ], [
                'title' => 'Cat VS World',
                'description' => 'Cat VS World est un projet VR sous Unity. Il se décompose en deux parties. La phase de customisation permet d’équiper son chat de combat. La phase de combat est la partie la plus fun, on doit détruire le chat ennemi',
                'filter' => 'unity',
                'cover' => "unity",
                'link' => "https://github.com/ChrisChrisW/Cat_VS_World"
            ], [
                'title' => 'Bateau pirate 3D',
                'description' => 'Le bateau a été modélisé sur le logiciel Blender. Il a été conçu pour un projet de conception de jeu de société',
                'filter' => 'graphisme',
                'cover' => "modelisation",
                'link' => "show3D/bateau"
            ], [
                'title' => 'Coffre 3D',
                'description' => 'Le coffre a été modélisé sur le logiciel Blender. Il a été fait pour un projet de conception de jeu de société',
                'filter' => 'graphisme',
                'cover' => "modelisation",
                'link' => "show3D/coffre"
            ], [
                'title' => 'StorySpot',
                'description' => "C'est un jeu destiné à un Musée, le principe du jeu est simple, il suffit juste de scanner les fleurs de lys dans un ordre donné. L'ordre est important car elle raconte une des histoires de la France. L'application est disponible au musée de Meudon",
                'filter' => 'unity',
                'cover' => "unity"
            ], [
                'title' => 'Site StorySpot',
                'description' => "Site web produit lors du développement de l'application StorySpot pour aider les utilisateurs à comprendre le principe de l'application et les personnes qu'ils l'ont fait",
                'filter' => 'web',
                'cover' => "web",
                'link' => "http://storyspot.iut-velizy.uvsq.fr/StorySpot/"
            ], [
                'title' => 'GIF animé',
                'description' => "Le GIF est fait sur Photoshop, grâce à l'outil vidéo de Photoshop. L'image est inspirée d'une série et d'une BD appelé WAKFU. Ce dessin a été entièrement dessiné par moi-même. J'ai pris beaucoup d'attention sur les ombrages du personnage",
                'filter' => 'graphisme',
                'link' => "links/graphisme/gif/wang_christophe.gif"
            ], [
                'title' => 'Blason',
                'description' => "Un dessin fait sur Photoshop et avec une tablette graphique sur un exercice où on doit s'illustrer soi-même",
                'filter' => 'graphisme',
                'link' => "links/graphisme/blason/blason.png"
            ], [
                'title' => 'Logo IUT Vichy',
                'description' => "Le logo a été fait sur Illustrator + une charte graphique assemblait sur InDesign. Il y a d'autres variantes du logos qui sont visibles sur la charte graphique. L'IUT de Vichy a voulu modifier leur ancien logo, ils ont alors proposé aux étudiants de créer un logo représentant l'IUT mais aussi d'autres établissement",
                'filter' => 'graphisme',
                'cover' => "logo_iut",
                'link' => "links/graphisme/logo/charte_graphique.pdf"
            ], [
                'title' => 'La mort',
                'description' => "Court métrage fait en première année. C'est l'histoire d'un personnage représentant la MORT qui effectue sa mission de prendre l'âme d'une personne, mais comme un employé lambda qu'on voit tous les jours. C'est un scénario tragique avec une fin comique",
                'filter' => 'audiovisuel',
                'cover' => "audiovisuel",
                'link' => "links/audiovisuel/scenario.pdf"
            ]
        ];

        $this->persistData($array, $manager);
    }

    /**
     * @return string[]
     */
    public static function getGroups(): array
    {
        return ['courses'];
    }
}