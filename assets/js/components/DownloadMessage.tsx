import { Text } from "@chakra-ui/react";

type MensageProps = {
    mensagem: string;
};

export function DownloadMessage(props : MensageProps){
    return(
        props.mensagem ? 
        <Text mt={3} > {props.mensagem}</Text>
        :null
    )
}