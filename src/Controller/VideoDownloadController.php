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

        $ytDlpPath = $this->getParameter('kernel.project_dir') . '/bin/yt-dlp.exe';

        $metadataCommand = "\"$ytDlpPath\" --dump-json \"$videoUrl\"";
        $metadataJson = shell_exec($metadataCommand);
        $metadata = json_decode($metadataJson, true);

        if (!$metadata) {
            return new JsonResponse(['error' => 'Erro ao obter metadados'], 500);
        }

        $title = $metadata['title'] ?? 'Sem título';
        $description = $metadata['description'] ?? 'Sem descrição';
        $thumbnail = $metadata['thumbnail'] ?? '';
        $duration = $metadata['duration'] ?? 0;

        $outputPath = $this->getParameter('kernel.project_dir') . '/public/videos';
        if (!is_dir($outputPath)) {
            mkdir($outputPath, 0777, true);
        }

        $downloadCommand = "\"$ytDlpPath\" -o \"$outputPath/%(title)s.%(ext)s\" \"$videoUrl\"";
        shell_exec($downloadCommand);

        $files = glob("$outputPath/*.*");

        if ($files) {
            usort($files, function($a, $b) {
                return filectime($b) - filectime($a);
            });

            $latestFile = reset($files);
            $fileName = basename($latestFile);
        } else {

            return new JsonResponse(['error' => 'Nenhum arquivo encontrado'], 404);
        }

        return new JsonResponse([
            'video' => [
                'title' => $title,
                'description' => $description,
                'duration' => $duration,
                'downloadUrl' => "/videos/$fileName",
                'thumbnail' => $thumbnail
            ],
            'message' => 'Download concluído!',
            'downloadUrl' => "/videos/$fileName"
        ]);
    }
}
