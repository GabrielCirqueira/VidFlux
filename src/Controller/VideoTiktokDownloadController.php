<?php

namespace App\Controller;

use App\Service\VideoDownloadService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Enums\Plataforma;

class VideoTiktokDownloadController extends AbstractController
{
    #[Route('/api/download/tiktok', name: 'download_video_tiktok', methods: ['POST'])]
    public function download(Request $request, VideoDownloadService $videoDownloadService): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $videoUrl = $data['url'] ?? null;

        $parsedUrl = parse_url($videoUrl);
        $host = $parsedUrl['host'];
        $dominio = "tiktok.com";

        if (strpos($host, $dominio) == false) {
            return new JsonResponse(['error' => 'Link fornecido não pertece ao Tiktok!'], 400);
        }

        if (!$videoUrl) {
            return new JsonResponse(['error' => 'URL não fornecida'], 400);
        }

        $result = $videoDownloadService->downloadVideo($videoUrl, Plataforma::TIKTOK);

        return new JsonResponse($result);
    }
}
