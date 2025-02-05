import { Input, Button, Link, Text, VStack, Box, Spinner, Icon, Flex, Center } from "@chakra-ui/react";
import { Title } from "@components/includes/Title";
import { SectionVideo } from "@components/includes/SectionVideo";
import theme from "./theme";
import {videoProps} from "@components/types";
import { ReactElement, ElementType } from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter, FaHome } from "react-icons/fa";
import { Alert, AlertIcon, AlertTitle, AlertDescription, SlideFade } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

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
            transform="rotate(-25deg)"
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
                 <SlideFade in={!!props.mensagem} offsetY="10px">
                 {props.mensagem && (
                     <Alert alignItems={"center"} bg={theme.colors[props.plataforma][50]} status="info" borderRadius="md" boxShadow="md" mt={3}>
                         <AlertIcon color={theme.colors[props.plataforma][500]} as={InfoIcon} />
                         <AlertDescription fontSize={16} textAlign="center" fontFamily="sans-serif" >{props.mensagem}</AlertDescription>
                     </Alert>
                 )}
             </SlideFade>
            )}

            <Flex justifyContent="center" gap={20} mt={10}>
                <Link href="/" > <Icon  boxSize={7} as={FaHome} >  </Icon> </Link>
                <Link href="/download/instagram" > <Icon  boxSize={7} as={FaInstagram} >  </Icon> </Link>
                <Link href="/download/twitter" > <Icon  boxSize={7} as={FaTwitter} >  </Icon> </Link>
                <Link href="/download/youtube" > <Icon  boxSize={7} as={FaYoutube} >  </Icon> </Link>
                <Link href="/download/tiktok" > <Icon  boxSize={7} as={FaTiktok} >  </Icon> </Link>
            </Flex>
            
        </Box>
    )
}