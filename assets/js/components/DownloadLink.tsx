import { Link } from "@chakra-ui/react";

type DownloadUrlProps = {
    downloadUrl :  string;
}

export function DownloadLink(props : DownloadUrlProps){
    return (
        props.downloadUrl ?
        <Link
         href={props.downloadUrl}
         download 
         mt={3}
         color={"blue.500"}
        >
        Clique aqui para baixar o Vídeo!
        </Link>
        : null
    )
}