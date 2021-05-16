<?php

namespace App\Manager;

use App\Entity\Media;
use App\Enum\MediaDirectory;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Filesystem\Filesystem;

class FileManager
{
    /**
     * @var SluggerInterface
     */
    private $slugger;

    /**
     * @var string Kernel Root Dir
     */
    private $rootDir;

    /**
     * FileUploader constructor.
     *
     * @param SluggerInterface $slugger
     * @param KernelInterface $kernel
     */
    public function __construct(SluggerInterface $slugger, KernelInterface $kernel)
    {
        $this->slugger = $slugger;
        $this->rootDir = $kernel->getProjectDir();
    }

    /**
     * Upload file and move it to correct folder
     *
     * @param Media        $media
     * @param UploadedFile $file
     * @param string       $targetDirectory
     *
     * @return Media
     */
    public function upload(Media $media, UploadedFile $file, string $targetDirectory): Media
    {
        if (null === $file) {
            return $media;
        }

        // If media already exist, remove old file
        if (null !== $media->getId()) {
            $this->removeMediaFile($media);
        }

        // Create name
        $originalFilename = pathinfo($media->getName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename . '-' . uniqid("", false) . '.' . $file->guessExtension();

        // Set Media Data
        $media->setWeight($file->getSize());
        $media->setContentType($file->getClientMimeType());
        $media->setFolder($targetDirectory);
        $media->setSrc($fileName);

        // Upload folder
        $uploadFolder = $this->rootDir;
        $uploadFolder .= MediaDirectory::MEDIA_ROOT_DIR_UPLOAD;
        $uploadFolder .= $targetDirectory;

        try {
            $file->move($uploadFolder, $fileName);
        } catch (FileException $e) {
            echo $e->getCode();
            echo ' ';
            echo $e->getMessage();
            // TODO: handle exception if something happens during file upload
            // TODO: Add log
        }

        return $media;
    }

    /**
     * Remove file
     *
     * @param Media  $media
     */
    public function removeMediaFile(Media $media): void
    {
        $filePath = $this->rootDir;
        $filePath .= MediaDirectory::MEDIA_ROOT_DIR_UPLOAD;
        $filePath .= $media->getFolder();
        $filePath .= $media->getSrc();

        try {
            $fileSystem = new Filesystem();
            $fileSystem->remove([$filePath]);
        } catch (FileException $e) {
            // TODO: handle exception if something happens during file upload
            // TODO: Add log
        }
    }
}