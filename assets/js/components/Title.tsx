'use client'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'
import theme from './theme';

export function Title() {
  return (
    <>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          >
          <Heading
            fontWeight={600}
            color={"gray"}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Baixe vídeos do <br />
            <Text as={'span'} color={theme.colors.text}>
                YouTube rapidamente
            </Text>
          </Heading>
            <Text color={'gray.500'}>
            Insira o link do vídeo e faça o download em poucos segundos.  
            Simples, rápido e gratuito!
            </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>

          </Stack>
        </Stack>
    </>
  )
}