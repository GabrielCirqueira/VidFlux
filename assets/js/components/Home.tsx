import { Box, Container } from "@chakra-ui/react";
import { DownloadForm } from "./DownloadForm";

export function Home() {
    return(
        <Box
            maxHeight={"sm"}
        >
            <DownloadForm/>
        </Box>
    )
}