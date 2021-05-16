<?php

namespace App\EventListener;

use App\Entity\EntityInterface\TimestampableInterface;
use App\Entity\Grade;
use App\Entity\Program;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Class TimestampableEntitySubscriber
 *
 * @package App\EventListener
 */
class TimestampableEntitySubscriber implements EventSubscriber
{
    /**
     * List of subscribed events
     *
     * @return array
     */
    public function getSubscribedEvents(): array
    {
        return [
            Events::prePersist,
            Events::preUpdate,
        ];
    }

    /**
     * On pre-persist entity grade
     *
     * @param LifecycleEventArgs $args
     */
    public function prePersist(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        if (!$entity instanceof TimestampableInterface) {
            return;
        }

        $this->updateCreatedAt($entity);
    }

    /**
     * On pre-update entity grade
     *
     * @param LifecycleEventArgs $args
     */
    public function preUpdate(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        // if this subscriber only applies to certain entity types,
        // add some code to check the entity type as early as possible
        if (!$entity instanceof TimestampableInterface) {
            return;
        }

        $this->updateUpdatedAt($entity);
    }

    /**
     * Update Created At
     *
     * @param TimestampableInterface $entity
     */
    private function updateCreatedAt(TimestampableInterface $entity): void
    {
        $entity->setCreatedAt(new \DateTime('now'));
    }

    /**
     * Update Created At
     *
     * @param TimestampableInterface $entity
     */
    private function updateUpdatedAt(TimestampableInterface $entity): void
    {
        $entity->setUpdatedAt(new \DateTime('now'));
    }
}
