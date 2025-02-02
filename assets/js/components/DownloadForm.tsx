import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { DownloadInput } from "@components/DownloadInput";
import { DownloadButton } from "@components/DownloadButton";
import { DownloadMessage } from "@components/DownloadMessage";
import { DownloadLink } from "@components/DownloadLink";
import { DownloadResponse } from "./types";

export function DownloadForm(){
    const [url, setUrl] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    const [downloadUrl, setdownloadUrl] = useState<string>("");

    const handleDownload = () => {
        setMensagem("");
        setdownloadUrl("");
    
        const rota = "/download";
        const reponseProps = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        };
    
        fetch(rota, reponseProps)
            .then((response) => response.json())
            .then((data: DownloadResponse) => {
                if (data.error) {
                    setMensagem(data.error || "");
                } else {
                    setMensagem(data.mensagem || "");
                    setdownloadUrl(data.downloadUrl || "");
                }
            })
            .catch((error) => {
                setMensagem("Ocorreu um erro ao tentar fazer o download");
                console.error("Erro ao fazer o download:", error);
            });
    };

    return (
        <Box
            textAlign="center"
        >
            <Text fontSize="xl" mb={4}>Baixar Vídeo do YouTube</Text>
            <DownloadInput url={url} setUrl={setUrl} />
            <DownloadButton onclick={handleDownload} />
            <DownloadMessage mensagem={mensagem} />
            <DownloadLink downloadUrl={downloadUrl} />
        </Box>
    )
}