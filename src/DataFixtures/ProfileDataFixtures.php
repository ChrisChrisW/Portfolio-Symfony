<?php
namespace App\DataFixtures;

use App\Entity\Profile;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

/**
 * Class ProfileDataFixtures
 * @package App\DataFixtures
 */
class ProfileDataFixtures extends Fixture
{
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager) :void
    {
        $profile = new Profile();
        $profile->setFirstname("Christophe");
        $profile->setLastname("WANG");
        $profile->setDescription("Je suis passionné par l’informatique et l’aspect artistique. J’aime particulièrement apprendre de nouvelles choses dans ces deux domaines. En ce moment, j’accumule des connaissances dans l’animation et la 3D. J’aimerai plus tard participer à la création d’un jeu vidéo.");
        $profile->setCover('build/images/photo/Christophe.png');
        $profile->setCv('links/cv.pdf');
        $profile->setPortfolio('links/portfolio.pdf');

        $manager->persist($profile);

        $manager->flush();
    }

    /**
     * @return string[]
     */
    public static function getGroups(): array
    {
        return ['courses'];
    }
}