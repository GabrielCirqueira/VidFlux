import { Input, Button, Link, Text, VStack, Box, Spinner, Icon, Flex, Center, Tooltip, Image } from "@chakra-ui/react";
import { Title } from "@components/includes/Title";
import { SectionVideo } from "@components/includes/SectionVideo";
import theme from "./theme";
import { videoProps } from "@components/types";
import { ReactElement, ElementType } from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaTwitter, FaHome, FaShareAlt, FaClipboard, FaClock } from "react-icons/fa";
import { Alert, AlertIcon, AlertDescription, SlideFade } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

type elementsProps = {
    icon: ElementType;
    plataforma: string;
    url: string;
    setUrl: (url: string) => void;
    onclick: () => void;
    downloadUrl: string;
    mensagem: string;
    isLoading: boolean;
    video: videoProps;
    history?: { thumbnail: string; title: string }[]; 
};

export function Elements(props: elementsProps) {
    return (
        <Box
            position="relative"
            width={{ base: '100%', md: '80%' }}
            borderWidth="1px"
            borderRadius="lg"
            mt={10}
            boxShadow={'xl'}
            py={10}
            px={10}
            bg="rgba(255, 255, 255, 0.9)"
            backdropFilter="blur(10px)"
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

            <Flex gap={3}>
                  <Input
                      type="text"
                      placeholder="Cole o Link do Vídeo aqui (ex: https://www.youtube.com/...)"
                      borderRadius={8}
                      value={props.url}
                      onChange={(e) => props.setUrl(e.target.value)}
                      _placeholder={{ color: theme.colors.text }} 
                      _focus={{
                          border: "0.5px solid",
                          borderColor: theme.colors[props.plataforma][500],
                          boxShadow: "0 0 0 2px " + theme.colors[props.plataforma][300],
                      }}
                  />
                  <Tooltip label="Colar link">
                      <Button onClick={() => navigator.clipboard.readText().then(text => props.setUrl(text))} 
                          bg="gray.200" _hover={{ bg: "gray.300" }}>
                          <Icon as={FaClipboard} />
                      </Button>
                  </Tooltip>
              </Flex>
  
              <Button
                  mt={4}
                  bg={theme.colors[props.plataforma][500]}
                  _hover={{ bg: theme.colors[props.plataforma][600] }}
                  color="white"
                  rounded="full"
                  w="100%"
                  onClick={props.onclick}
              >
                  {props.isLoading ? <Spinner size="sm" /> : "Baixar"}
              </Button>

            {props.video.downloadUrl && <SectionVideo {...props.video} />}

            {props.mensagem && (
                <SlideFade in={!!props.mensagem} offsetY="10px">
                    <Alert status="info" borderRadius="md" boxShadow="md" mt={3} alignItems="center">
                        <AlertIcon color={theme.colors[props.plataforma][500]} as={InfoIcon} />
                        <AlertDescription fontSize={16} textAlign="center">{props.mensagem}</AlertDescription>
                    </Alert>
                </SlideFade>
            )}

            <Flex justifyContent="center" gap={8} mt={8}>
                <Tooltip label="Início">
                    <Button variant="ghost">
                        <Link href="/"> <Icon boxSize={7} as={FaHome} /> </Link>
                    </Button>
                </Tooltip>
                <Tooltip label="Instagram">
                    <Button variant="ghost">
                        <Link href="/download/instagram"> <Icon boxSize={7} as={FaInstagram} /> </Link>
                    </Button>
                </Tooltip>
                <Tooltip label="Twitter">
                    <Button variant="ghost">
                        <Link href="/download/twitter"> <Icon boxSize={7} as={FaTwitter} /> </Link>
                    </Button>
                </Tooltip>
                <Tooltip label="YouTube">
                    <Button variant="ghost">
                        <Link href="/download/youtube"> <Icon boxSize={7} as={FaYoutube} /> </Link>
                    </Button>
                </Tooltip>
                <Tooltip  label="TikTok">
                    <Button variant="ghost">
                        <Link href="/download/tiktok"> <Icon boxSize={7} as={FaTiktok} /> </Link>
                    </Button>
                </Tooltip>
            </Flex>

            {props.history && props.history.length > 0 && (
                <Box mt={10}>
                    <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={3}>Histórico de Downloads</Text>
                    <Flex overflowX="auto" gap={5}>
                        {props.history.map((video, index) => (
                            <Box key={index} minWidth="120px" textAlign="center">
                                <Image src={video.thumbnail} boxSize="80px" borderRadius="md" />
                                <Text fontSize="sm" noOfLines={2} mt={2}>{video.title}</Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            )}
        </Box>
    );
}
