<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class VideoDownloadController extends AbstractController
{
    #[Route('/download', name: 'download_video', methods: ['POST'])]
    public function download(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $videoUrl = $data['url'] ?? null;

        if (!$videoUrl) {
            return new JsonResponse(['error' => 'URL não fornecida'], 400);
        }

        $outputPath = $this->getParameter('kernel.project_dir') . '/public/videos';
        if (!is_dir($outputPath)) {
            mkdir($outputPath, 0777, true);
        }

        $ytDlpPath = $this->getParameter('kernel.project_dir') . '/bin/yt-dlp.exe';
        $command = "\"$ytDlpPath\" -o \"$outputPath/%(title)s.%(ext)s\" \"$videoUrl\"";

        shell_exec($command);

        $files = glob("$outputPath/*.*");
        $latestFile = reset($files);
        $fileName = basename($latestFile);

        return new JsonResponse([
            'message' => 'Download concluído!',
            'downloadUrl' => "/videos/$fileName"
        ]);
    }
}
