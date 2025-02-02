import { useState } from "react";
import { Input, Button, Box, Text, Link } from "@chakra-ui/react";

function DownloadForm() {
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");

    const handleDownload = async () => {
        setMessage("");
        setDownloadUrl("");

        const response = await fetch("/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();

        if (data.error) {
            setMessage(data.error);
        } else {
            setMessage(data.message);
            setDownloadUrl(data.downloadUrl);
        }
    };

    return (
        <Box textAlign="center">
            <Text fontSize="xl" mb={4}>Baixar Vídeo do YouTube</Text>
            <Input
                placeholder="Cole o link do vídeo"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                mb={3}
            />
            <Button onClick={handleDownload} colorScheme="teal">Baixar</Button>
            
            {message && <Text mt={3}>{message}</Text>}
            
            {downloadUrl && (
                <Link href={downloadUrl} download mt={3} color="blue.500">
                    Clique aqui para baixar o vídeo
                </Link>
            )}
        </Box>
    );
}

export default DownloadForm;
