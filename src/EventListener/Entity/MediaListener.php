<?php
namespace App\EventListener\Entity;

use App\Entity\Media;
use App\Manager\FileManager;
use Doctrine\Persistence\Event\LifecycleEventArgs;

/**
 * Class MediaListener
 * Listen to all Lifecycle Media Events
 *
 * Documentation: https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/events.html#entity-listeners
 *
 * @package App\EventListener\Entity
 */
class MediaListener
{
    /**
     * @var FileManager
     */
    private $fileManager;

    /**
     * MediaListener constructor.
     *
     * @param FileManager $fileManager
     */
    public function __construct(FileManager $fileManager)
    {
        $this->fileManager = $fileManager;
    }

    /**
     * @param Media              $media
     * @param LifecycleEventArgs $event
     */
    public function preRemove(Media $media, LifecycleEventArgs $event): void
    {
        $this->fileManager->removeMediaFile($media);
    }
}