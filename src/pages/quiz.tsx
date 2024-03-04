'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Heading, Divider, Container, SimpleGrid, Box, Icon } from '@chakra-ui/react'
import NavBar from './components/navBar'
import NavBar2 from './components/navBar2'
import Image from 'next/image'
import { ReactElement } from 'react'
import Footer from './components/footer'


interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function WithBackgroundImage() {
  return (

    <>
      <NavBar2 />
      <NavBar />

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Pure Quiz App<br />
            <Text as={'span'} color={'blue.400'}>
              without any Flamework
            </Text>
            <a href="https://front-end-beta-wheat.vercel.app/">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                justifyContent="center"
                alignContent="center"
              >
                Check out this project
              </Button>
            </a>
          </Heading>
        </Stack>
      </Container>
      {/* <Divider orientation="horizontal" borderColor="blue.900" mt={200} borderWidth="3px" /> */}
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={10}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                App Development
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              This project used JavaScript to complete and implement the process of question selection, quiz screen, and results display in a single page. We also did not use a framework such as React, but used vanilla JavaScript to complete the implementation.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/quizappScreen.png'}
            width={1000}
            height={500}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
      </Stack>

      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/quizSection.png'}
            width={1000}
            height={500}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
        <Flex p={8} flex={1} justify={'center'} mt={10}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                Problem
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              There were many challenges in implementing this application. The challenge was how to write clean and coherent code on a single page, without the option of passing a series of processes as props to other pages.
              <br/>
              <br/>
              I put a lot of effort into solving the problem of processing user input data without using React hooks or other methods to process the information.
            </Text>
          </Stack>
        </Flex>
      </Stack>

      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
        <Flex p={8} flex={1} justify={'center'} mt={10}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                Solution
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              By manually defining all variables, setting each event listener, and then manually setting each function, we were able to implement timers, scores, and other dynamic content in a stable manner.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/quizResult.png'}
            width={1000}
            height={500}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
      </Stack>
      <Footer />
    </>
  )
}
