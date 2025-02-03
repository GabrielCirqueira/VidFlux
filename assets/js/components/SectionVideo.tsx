'use client'

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import {videoProps} from "@components/types";
import theme from "./theme";

export function SectionVideo(props : videoProps) {

    const maxLength = 100;
    const isTruncated = props.description.length > maxLength;

    return (
      <Box w="100%" py={{ base: 20, md: 16 }}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1}>
            <Image
              objectFit="cover"
              borderRadius={10}
              boxSize="100%"
              src={props.thumbnail}
              alt="#"
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={5}
            pt={10}>
            <Heading fontSize={'2xl'} fontFamily={'arial'}>
              <Center>
              {props.title}
              </Center>
            </Heading>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
                {isTruncated ? `${props.description.slice(0, maxLength)}...` : props.description}
            </Text>
            
            <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={4}
            justifyContent={'space-between'}
            alignItems={'center'}
            >
            <Button
                flex={1}
                fontSize={'md'}
                fontWeight={'semibold'}
                padding={'10px'}
                rounded={'full'}
                _focus={{
                bg: 'gray.200',
                }}
                _hover={{
                bg: 'gray.300',
                }}
            >
                Baixar Outro
            </Button>

            <Link
                href={props.downloadUrl}
                download
                flex={1}
                fontSize={'md'}
                bg={theme.colors.primary[500]} 
                _hover={{ bg: theme.colors.primary[600] }}
                _active={{ bg: theme.colors.primary[700] }}
                color="white"
                rounded="full"
                fontWeight={'semibold'}
                padding={'10px'}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <span>baixar</span>
            </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    )
}