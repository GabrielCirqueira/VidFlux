import { useState } from "react";
import { Container, Icon, Text, VStack } from "@chakra-ui/react";
import { Elements } from "@components/Elements";
import { fetchDownload } from "@components/downloadService";
import {videoProps} from "@components/types";
import { FaYoutube } from "react-icons/fa";
import theme from '@components/theme'

export function YoutubePage() {
    const [url, setUrl] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    const [downloadUrl, setDownloadUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [video, setVideo] = useState<videoProps>({
        title: "",
        description: "",
        plataforma: "",
        thumbnail: "",
        duration: "0",
        downloadUrl: "",
    });

    const handleDownload = async () => {
        setMensagem("");
        setDownloadUrl("");
        setIsLoading(true);

        const data = await fetchDownload(url, "youtube");

        if (data.error) {
            setMensagem(data.error || "");
        } else {
            setMensagem(data.mensagem || "");
            setDownloadUrl(data.downloadUrl || "");
            setVideo(data.video);
        }
        setIsLoading(false);
    };

    return (
        <Container maxW={theme.styles.WidthContainer}>
            <VStack gap={10}>
                <Elements
                    icon={FaYoutube}
                    plataforma="Youtube"
                    url={url}
                    video={video}
                    setUrl={setUrl}
                    onclick={handleDownload}
                    isLoading={isLoading}
                    mensagem={mensagem}
                    downloadUrl={downloadUrl}
                />
            </VStack>
        </Container>
    );
}
