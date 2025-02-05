<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class VideoDownloadService
{
    private bool $isWindows;
    private string $ytDlpPath;
    private string $projectDir;

    public function __construct(ParameterBagInterface $params)
    {
        $this->isWindows = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
        $this->projectDir = $params->get('kernel.project_dir');
        $this->ytDlpPath = $params->get('kernel.project_dir') . '/bin/yt-dlp' . ($this->isWindows ? '.exe' : '');
    }

    public function downloadVideo(string $url, string $plataforma): array
    {
        $outputPath = "{$this->projectDir}/public/videos/{$plataforma}";

        if (!is_dir($outputPath) && !mkdir($outputPath, 0777, true) && !is_dir($outputPath)) {
            return ['error' => "Falha ao criar diretório: $outputPath"];
        }

        if (!file_exists($this->ytDlpPath) || (!is_executable($this->ytDlpPath) && !$this->isWindows)) {
            return ['error' => 'yt-dlp não encontrado ou sem permissão de execução'];
        }

        $metadataCommand = "$this->ytDlpPath --dump-json " . escapeshellarg($url);
        $metadataJson = shell_exec($metadataCommand);
        $metadata = json_decode($metadataJson, true);

        if (!$metadata) {
            return ['error' => 'Erro ao obter metadados do vídeo'];
        }

        $title = $metadata['title'] ?? 'Sem título';
        $description = $metadata['description'] ?? 'Sem descrição';
        $thumbnail = $metadata['thumbnail'] ?? '';
        $localThumbnail = $this->baixarThumbnail($thumbnail, $plataforma);
        $duration = $metadata['duration'] ?? 0;

        $outputFile = "$outputPath/$title.mp4";
        $downloadCommand = "$this->ytDlpPath -o " . escapeshellarg($outputFile) . " " . escapeshellarg($url);
        shell_exec($downloadCommand);

        if (!file_exists($outputFile)) {
            return ['error' => 'Falha no download do vídeo'];
        }

        return [
            'video' => [
                'title' => $title,
                'description' => $description,
                'duration' => $duration,
                'downloadUrl' => "/videos/$plataforma/" . basename($outputFile),
                'thumbnail' => $localThumbnail ?: $thumbnail,
                'plataforma' => $plataforma
            ],
            'message' => 'Download concluído!',
            'downloadUrl' => "/videos/$plataforma/" . basename($outputFile),
        ];
    }

    private function baixarThumbnail(string $url, string $plataforma): string
    {
        $outputPath = "{$this->projectDir}/public/thumbs/{$plataforma}";

        if (!is_dir($outputPath) && !mkdir($outputPath, 0777, true) && !is_dir($outputPath)) {
            return '';
        }

        $filename = basename(parse_url($url, PHP_URL_PATH));
        $filePath = "{$outputPath}/{$filename}";

        file_put_contents($filePath, file_get_contents($url));

        return "/thumbs/{$plataforma}/{$filename}";
    }
}
