import { Box, Button, Container, Flex, Heading, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import {  } from '@chakra-ui/react';

interface CardProps {
  heading: string;
  description: string;
  icon: React.ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box maxW={{ base: "full", md: "275px" }} w={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
      <Stack align={"start"} spacing={2}>
        <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.100", "gray.700")}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>{description}</Text>
        </Box>
        <Button as="a" href={href} variant={"link"} colorScheme={"blue"} size={"sm"}>Baixar</Button>
      </Stack>
    </Box>
  );
};

export function Home() {
  return (
    <Container maxW={"container.md"} py={10} mt={50}>
      <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
        <Card heading="YouTube" description="Baixe vídeos do YouTube rapidamente." icon={<Icon as={FaYoutube} w={10} h={10} color="red.500" />} href="/download/youtube" />
        <Card heading="TikTok" description="Baixe vídeos do TikTok sem marca d'água." icon={<Icon as={FaTiktok} w={10} h={10} color="black" />} href="/download/tiktok" />
        <Card heading="Instagram" description="Baixe vídeos do Instagram com facilidade." icon={<Icon as={FaInstagram} w={10} h={10} color="purple.500" />} href="/download/instagram" />
      </Stack>
    </Container>
  );
}
