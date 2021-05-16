<?php

namespace App\Enum;

/**
 * Class MediaDirectory
 *
 * An 'enum' class for Media directory
 *
 * @package App\Enum
 */
class MediaDirectory
{
    /**
     * @const root directory for media when upload (file system)
     */
    public const MEDIA_ROOT_DIR_UPLOAD = '/public/media/uploads';

    /**
     * @const directory for image cover
     */
    public const IMAGE_COVER = '/images/cover/';
}