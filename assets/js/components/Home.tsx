import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, useColorModeValue, SimpleGrid, Image } from "@chakra-ui/react";
import { FaYoutube, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

interface CardProps {
  heading: string;
  description: string;
  icon: React.ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box 
      maxW={{ base: "full", md: "275px" }} 
      w={"full"} 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      p={5} 
      boxShadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "2xl",
        transition: "all 0.3s ease",
      }}
    >
      <Stack align={"start"} spacing={4}>
        <Flex 
          w={16} 
          h={16} 
          align={"center"} 
          justify={"center"} 
          color={"white"} 
          rounded={"full"} 
          bg={useColorModeValue("gray.100", "gray.700")}
          boxShadow="md"
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={useColorModeValue("gray.800", "white")}>{heading}</Heading>
          <Text mt={1} fontSize={"sm"} color={useColorModeValue("gray.600", "gray.300")}>
            {description}
          </Text>
        </Box>
        <Button 
          as="a" 
          href={href} 
          variant={"solid"} 
          colorScheme={"teal"} 
          size={"sm"}
          _hover={{ bg: "teal.600", transform: "scale(1.1)" }}
        >
          Baixar
        </Button>
      </Stack>
    </Box>
  );
};

export function Home() {
  return (
    <Container maxW={"container.xl"} py={10} mt={50}>
      <Stack spacing={12}>
        <Heading as="h1" size="2xl" textAlign="center" mb={6} color="teal.500">
          (VidFlux) Sistema de Download de Vídeos
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600" mb={12}>
          Este sistema permite que você baixe vídeos de várias plataformas de forma rápida e simples. 
          Selecione a plataforma de sua preferência abaixo para começar a baixar os vídeos de sua escolha.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          <Card heading="YouTube" description="Baixe vídeos do YouTube rapidamente." icon={<Icon as={FaYoutube} w={12} h={12} color="red.500" />} href="/download/youtube" />
          <Card heading="Twitter" description="Baixe vídeos do Twitter com facilidade." icon={<Icon as={FaTwitter} w={12} h={12} color="black" />} href="/download/twitter" />
          <Card heading="TikTok" description="Baixe vídeos do TikTok sem marca d'água." icon={<Icon as={FaTiktok} w={12} h={12} color="black" />} href="/download/tiktok" />
          <Card heading="Instagram" description="Baixe vídeos do Instagram com facilidade." icon={<Icon as={FaInstagram} w={12} h={12} color="purple.500" />} href="/download/instagram" />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
          <Box 
            p={6} 
            bg={useColorModeValue("gray.50", "gray.800")} 
            borderRadius="lg" 
            boxShadow="xl"
            textAlign="center"
            _hover={{ boxShadow: "2xl", transform: "scale(1.05)", transition: "all 0.3s ease" }}
          >
            <Heading as="h3" size="lg" mb={4} color={useColorModeValue("gray.800", "white")}>
              Como Funciona?
            </Heading>
            <Text fontSize="lg" color="gray.600">
              O processo é simples e direto. Escolha a plataforma, clique no link de download e pronto! 
              Você pode baixar vídeos de diversas redes sociais de forma segura e sem complicação.
            </Text>
          </Box>

          <Box 
            p={6} 
            bg={useColorModeValue("gray.50", "gray.800")} 
            borderRadius="lg" 
            boxShadow="xl"
            textAlign="center"
            _hover={{ boxShadow: "2xl", transform: "scale(1.05)", transition: "all 0.3s ease" }}
          >
            <Heading as="h3" size="lg" mb={4} color={useColorModeValue("gray.800", "white")}>
              Tecnologias Utilizadas
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Este sistema foi desenvolvido utilizando as mais recentes tecnologias, como React, Chakra UI para estilização 
              e Symfony para gerenciar as APIs, proporcionando uma experiência moderna e ágil ao usuário.
            </Text>
          </Box>
        </SimpleGrid>

        <Box 
          maxW="container.sm" 
          mx="auto" 
          p={6} 
          bg={useColorModeValue("gray.50", "gray.800")} 
          borderRadius="lg" 
          boxShadow="xl"
          textAlign="center"
          _hover={{
            boxShadow: "2xl",
            transform: "scale(1.03)",
            transition: "all 0.3s ease"
          }}
        >
          <Heading size="md" mb={4} color={useColorModeValue("gray.800", "white")}>
            Sobre o Criador
          </Heading>
          <Flex direction="column" align="center" mb={4}>
            <Image 
              borderRadius="full" 
              boxSize="150px" 
              src="https://i.postimg.cc/yNdJY5mg/image.png"
              alt="Gabriel Cirqueira" 
              mb={4}
            />
            <Text fontSize="lg" color="gray.600" mb={4}>
              Este sistema foi desenvolvido por Gabriel Cirqueira como parte de um projeto de aprendizado. O objetivo é proporcionar 
              uma ferramenta prática utilizando React, Chakra UI e Symfony para aprender e aplicar novos conhecimentos em 
              desenvolvimento web e integrações de APIs.
            </Text>
            <Button 
              variant="solid" 
              colorScheme="teal" 
              size="md" 
              w="full"
              _hover={{ bg: "teal.600" }}
            >
              Acesse meu portfólio
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Container>
  );
}
