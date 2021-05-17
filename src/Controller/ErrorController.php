<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ErrorController
 * @package App\Controller
 */
class ErrorController extends AbstractController
{
    /**
     * @param $exception
     * @return Response
     */
    public function show($exception): Response
    {
        return $this->render('bundles/TwigBundle/Exception/error.html.twig', [
            'message' => $exception->getMessage(),
            'status_code' => $exception->getStatusCode(),
        ]);
    }

}