import { Container } from "@chakra-ui/react";
import { DownloadForm } from "./DownloadForm";

export function Home() {
    return(
        <Container
            maxHeight={"sm"}
        >
            <DownloadForm/>
        </Container>
    )
}