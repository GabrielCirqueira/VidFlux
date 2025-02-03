import { Input, Button, Link, Text, VStack, Box, Spinner } from "@chakra-ui/react";
import { Title } from "./Title";
import { SectionVideo } from "@components/SectionVideo";
import theme from "./theme";
import {videoProps} from "@components/types";

type elementsProps = {
    url: string;
    setUrl: (url : string) => void;
    onclick: () => void;
    downloadUrl :  string;
    mensagem: string;
    isLoading: boolean;
    video: videoProps;
}

export function Elements(props : elementsProps) {
    return (
        <Box py={{ base: 20, md: 36 }}>
            <Title/>
            <Input
                type="text"
                placeholder="Cole o Link do Video  aqui"
                borderRadius={4}
                value={props.url}
                onChange={(e) => props.setUrl(e.target.value)}
                mb={3}
            />
          <Button
            bg={theme.colors.primary[500]}
            _hover={{ bg: theme.colors.primary[600] }}
            _active={{ bg: theme.colors.primary[700] }}
            color="white"
            rounded="full"
            w="100%"
            borderRadius={4}
            onClick={props.onclick}
            >
            {props.isLoading ? <Spinner size="sm" /> : "Baixar"}
        </Button>
            {props.video.downloadUrl && (
               <SectionVideo {...props.video} />
            )}

            {props.mensagem && (
                <Text mt={3}>{props.mensagem}</Text>
            )}
            
            
        </Box>
    )
}