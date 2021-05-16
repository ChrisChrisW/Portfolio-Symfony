<?php

namespace App\DataFixtures;

use App\Entity\Homepage;
use App\Entity\Media;
use App\Enum\MediaDirectory;
use App\Manager\FileManager;
//use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
//use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Class HomepageFixtures
 * @package App\DataFixtures
 */
class HomepageFixtures extends Fixture
{
    /**
     * @var FileManager $fileManager
     */
    private $fileManager;

    public function __construct(FileManager $fileManager)
    {
        $this->fileManager = $fileManager;
    }

    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager) :void
    {
        $this->addHomePage($manager);
    }

    /**
     * @param array $array
     * @param ObjectManager $manager
     */
    private function persistData(array $array, ObjectManager $manager): void
    {
        foreach ($array as $data){
            $home = new Homepage();
            $home->setTitle($data['title']);
            $home->setSlug(self::slugify($data['title']));
            $home->setSubtitle($data['subtitle']);
            $home->setDescription($data['description']);
            if (isset($data['url'])) {
                $home->setUrl($data['url']);
            } else {
                $home->setCover($this->createCover($manager, 'Cover '.$data['title'], $data['cover']));
            }
            $home->setLink($data['link']);

            $manager->persist($home);
        }
        $manager->flush();
    }

    /**
     * @param $text
     * @return string
     */
    private static function slugify($text): string
    {
        $text = preg_replace('~[^\pL\d]+~u', '-', $text); // replace non letter or digits by -
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text); // transliterate
        $text = preg_replace('~[^-\w]+~', '', $text); // remove unwanted characters
        $text = trim($text, '-'); // trim
        $text = preg_replace('~-+~', '-', $text); // remove duplicate -
        $text = strtolower($text); // lowercase

        if (empty($text)) {
            return 'n-a';
        }
        return $text;
    }

    /**
     * @param ObjectManager $manager
     */
    private function addHomePage(ObjectManager $manager): void
    {
        $array = [
            [
                'title' => 'Mon profil',
                'subtitle' => 'CW',
                'description' => 'Une petite description + un CV',
                'url' => "/links/graphisme/cover/profile.png",
                'link' => "/profil"
            ], [
                'title' => 'Compétences',
                'subtitle' => 'skills',
                'description' => 'Détails des compétences acquises.',
                'url' => "/links/graphisme/cover/competences.png",
                //'cover' => 'competences',
                'link' => "/competences"
            ], [
                'title' => 'Réalisations',
                'subtitle' => 'projets',
                'description' => 'Quelques exemples pour illustrer mon travail',
                'url' => "/links/graphisme/cover/realisations.png",
                'link' => "/realisations"
            ], [
                'title' => 'Contact',
                'subtitle' => '@Mail',
                'description' => 'Contactez-moi par ici ^-^!',
                'url' => "/build/images/cover/contact.jpg",
                'link' => "/contact"
            ],
        ];

        $this->persistData($array, $manager);
    }


    /**
     * @param ObjectManager $manager
     * @param String $name
     * @param string $image
     * @return Media
     */
    private function createCover(ObjectManager $manager, string $name, string $image): Media
    {
        $media = new Media();
        $media->setName($name);
        $media->setDescription($name);
        $media->setCreatedAt(new \DateTime());

        $this->fileManager->upload($media, $this->createUploadedFile($image), MediaDirectory::IMAGE_COVER);

        $manager->persist($media);

        return $media;
    }

    /**
     * @param string $name
     * @return UploadedFile
     */
    private function createUploadedFile(string $name): UploadedFile
    {
        // Create temp image
        copy(__DIR__ . '/assets/img/'.$name.'.png', __DIR__ . '/assets/img/'.$name.'-copy.png');

        return new UploadedFile(__DIR__ . '/assets/img/'.$name.'-copy.png', $name.'-copy.png', null, null, true);
    }

    /**
     * @return string[]
     */
    public static function getGroups(): array
    {
        return ['courses'];
    }
}