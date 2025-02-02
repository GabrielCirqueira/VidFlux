import { Input, Button, Link, Text, VStack } from "@chakra-ui/react";

type elementsProps = {
    url: string;
    setUrl: (url : string) => void;
    onclick: () => void;
    downloadUrl :  string;
    mensagem: string;
}

export function Elements(props : elementsProps) {
    return (
        <VStack>
            <Input
                type="text"
                placeholder="Cole o Link do Video  aqui"
                value={props.url}
                onChange={(e) => props.setUrl(e.target.value)}
                mb={3}
            />
            <Button onClick={props.onclick} colorScheme="teal">
                Baixar
            </Button>
            {props.downloadUrl && (
                <Link
                    href={props.downloadUrl}
                    download
                    mt={3}
                    color={"blue.500"}
                >
                    <span>Clique aqui para baixar o Vídeo!</span>
                </Link>
            )}

            {props.mensagem && (
                <Text mt={3}>{props.mensagem}</Text>
            )}
        </VStack>
    )
}