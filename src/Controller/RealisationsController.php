<?php

namespace App\Controller;

use App\Repository\RealisationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RealisationsController
 * @package App\Controller
 */
class RealisationsController extends AbstractController
{
    /**
     * @Route("/realisations", name="realisations")
     */
    public function index(RealisationsRepository $realisationsRepository): Response
    {
        return $this->render('realisations/index.html.twig', [
            'realisations' => $realisationsRepository->findAll()
        ]);
    }
}