<?php

namespace App\Controller;

use App\Service\VideoDownloadService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Enums\Plataforma;

class VideoInstaDownloadController extends AbstractController
{
    #[Route('/api/download/instagram', name: 'download_video_instagram', methods: ['POST'])]
    public function download(Request $request, VideoDownloadService $videoDownloadService): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $videoUrl = $data['url'] ?? null;

        $parsedUrl = parse_url($videoUrl);
        $host = $parsedUrl['host'];
        $dominio = "instagram.com";

        if (strpos($host, $dominio) == false) {
            return new JsonResponse(['error' => 'Link fornecido não pertece ao Instagram!'], 400);
        }

        if (!$videoUrl) {
            return new JsonResponse(['error' => 'URL não fornecida'], 400);
        }

        $result = $videoDownloadService->downloadVideo($videoUrl, Plataforma::INSTAGRAM);

        return new JsonResponse($result);
    }
}
