import { Input, Button, Link, Text, VStack, Box, Spinner, Icon } from "@chakra-ui/react";
import { Title } from "@components/includes/Title";
import { SectionVideo } from "@components/includes/SectionVideo";
import theme from "./theme";
import {videoProps} from "@components/types";
import { ReactElement, ElementType } from "react";

type elementsProps = {
    icon: ElementType;
    plataforma: string;
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
        <Box
            position="relative"
            width={{ base: '100%', md: '100%' }}
            borderWidth="1px"
            borderRadius="lg"
            mt={20}
            boxShadow={'2xl'}
            py={{ base: 20, md: 50 }}
            px={{ base: 40, md: 50 }}
        >
        <Icon as={props.icon}
            boxSize={20}
            position="absolute"
            top={-5}
            left={-5}
            color={theme.colors[props.plataforma][500]}
            transform="rotate(-45deg)"
        />

            <Title plataforma={props.plataforma} />
            <Input
                type="text"
                placeholder="Cole o Link do Vídeo aqui"
                borderRadius={2}
                value={props.url}
                onChange={(e) => props.setUrl(e.target.value)}
                mb={5}
                _placeholder={{ color: theme.colors.text }} 
                _focus={{
                    border: "0.5px solid",
                    borderColor: theme.colors[props.plataforma][500],
                    boxShadow: "0 0 0 2px " + theme.colors[props.plataforma][300],
                }}
            />
          <Button
            bg={theme.colors[props.plataforma][500]}
            _hover={{ bg: theme.colors[props.plataforma][600] }}
            _active={{ bg: theme.colors[props.plataforma][700] }}
            color="white"
            rounded="full"
            w="100%"
            borderRadius={2}
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
            <Button
                mt={5}
                bg={theme.colors.Button.normal}
                _hover={{ bg: theme.colors.Button.hover }}
                _active={{ bg: theme.colors.Button.active }}
                color={ 'blackAlpha.900' }
                rounded="full"
                width="100%"
                onClick={() => window.location.href = '/'}
                borderRadius={2}
            >
                Voltar
            </Button>
            
        </Box>
    )
}