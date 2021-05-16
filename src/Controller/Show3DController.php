<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class Show3DController
 * @package App\Controller
 */
class Show3DController extends AbstractController
{
    /**
     * @Route("/show3D/{stl}", name="show_3d")
     */
    public function index(string $stl): Response
    {
        return $this->render('show-3d/index.html.twig', ['stl' => $stl]);
    }
}