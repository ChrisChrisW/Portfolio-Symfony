<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ParticlesController
 * @package App\Controller
 */
class ParticlesController extends AbstractController
{
    /**
     * @Route("/particles", name="particles")
     */
    public function index(): Response
    {
        return $this->render('particles/index.html.twig');
    }
}