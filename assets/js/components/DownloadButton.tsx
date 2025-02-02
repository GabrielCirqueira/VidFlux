import { Button } from "@chakra-ui/react";

type DownlaodButtonProps = {
    onclick: () => void;
}

export function DownloadButton( props : DownlaodButtonProps){
    return (
        <Button onClick={props.onclick} colorScheme="teal">
            Baixar
        </Button>
    )
}