<?php
namespace App\Entity\EntityInterface;

/**
 * Interface TimestampableInterface
 *
 * @package App\Entity\EntityInterface
 */
interface TimestampableInterface
{
    public function getCreatedAt();
    public function setCreatedAt(\DateTimeInterface $createdAt);
    public function getUpdatedAt();
    public function setUpdatedAt(\DateTimeInterface $createdAt);
}
