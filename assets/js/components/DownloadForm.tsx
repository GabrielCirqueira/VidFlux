import { useState } from "react";
import { Text, VStack } from "@chakra-ui/react";
import { Elements } from "@components/Elements";
import { fetchDownload } from "@components/downloadService";
import { DownloadResponse } from "./types";

export function DownloadForm() {
    const [url, setUrl] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    const [downloadUrl, setDownloadUrl] = useState<string>("");

    const handleDownload = async () => {
        setMensagem("");
        setDownloadUrl("");

        const data: DownloadResponse = await fetchDownload(url);

        if (data.error) {
            setMensagem(data.error || "");
        } else {
            setMensagem(data.mensagem || "");
            setDownloadUrl(data.downloadUrl || "");
        }
    };

    return (
        <VStack gap={10}>
            <Text fontSize="xl" mb={4}>Baixar Vídeo do YouTube</Text>
            <Elements
                url={url}
                setUrl={setUrl}
                onclick={handleDownload}
                mensagem={mensagem}
                downloadUrl={downloadUrl}
            />
        </VStack>
    );
}
