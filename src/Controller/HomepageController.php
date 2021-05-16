<?php

namespace App\Controller;

use App\Repository\HomepageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class HomepageController
 * @package App\Controller
 */
class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index(): Response
    {
        return $this->render('homepage/index.html.twig');
    }

    /**
     * @Route("/api", name="homepage_api")
     */
    public function api(HomepageRepository $homepageRepository, SerializerInterface $serializer): Response
    {
        $home = $homepageRepository->findAll();
        $json = $serializer->serialize($home, 'json', ['groups' => 'homepage:read']);

        return new JsonResponse($json, 200, [
            'Content-Type'                  =>  'application/json',
            'Access-Control-Allow-Origin'   =>  '*'
        ], true);
    }
}