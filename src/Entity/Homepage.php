<?php

namespace App\Entity;

use App\Repository\HomepageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=HomepageRepository::class)
 */
class Homepage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=150)
     * @Groups({"homepage:read"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=150)
     * @Gedmo\Slug(fields={"title"})
     * @Groups({"homepage:read"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"homepage:read"})
     */
    private $subtitle;

    /**
     * @ORM\Column(type="text")
     * @Groups({"homepage:read"})
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"homepage:read"})
     */
    private $url;

    /**
     * @ORM\Column(type="text")
     * @Groups({"homepage:read"})
     */
    private $link;

    /**
     * @var Media
     *
     * @ORM\OneToOne(targetEntity=Media::class, cascade={"persist", "remove"})
     * @Assert\Valid
     * @Groups({"homepage:read"})
     */
    private $cover;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return $this
     */
    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSubtitle(): ?string
    {
        return $this->subtitle;
    }

    /**
     * @return string|null
     */
    public function getIdentifier(): ?string
    {
        return $this->getSlug();
    }

    /**
     * @param string $subtitle
     * @return $this
     */
    public function setSubtitle(string $subtitle): self
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return $this
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getLink(): ?string
    {
        return $this->link;
    }

    /**
     * @param string $link
     * @return $this
     */
    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    /**
     * @return Media|null
     */
    public function getCover(): ?Media
    {
        return $this->cover;
    }

    /**
     * @param Media $cover
     * @return $this
     */
    public function setCover(Media $cover): self
    {
        $this->cover = $cover;

        return $this;
    }
}