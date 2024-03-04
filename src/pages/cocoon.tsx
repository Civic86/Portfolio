'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Heading, Divider, Container, SimpleGrid, Center } from '@chakra-ui/react'
import NavBar from './components/navBar'
import NavBar2 from './components/navBar2'
import Image from 'next/image'
import { ReactElement } from 'react'
import Footer from './components/footer'
import Link from 'next/link'


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
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage={'url("/cocoon-logo.png")'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6} mt={200}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              You have worth more than you think
            </Text>
            <a href="https://www.cocoon.quest/">
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
          </Stack>
        </VStack>
      </Flex>
      {/* <Divider orientation="horizontal" borderColor="blue.900" mt={200} borderWidth="3px" /> */}
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
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
              The project board is an exclusive resource for contract work. It&apos;s
              perfect for freelancers, agencies, and moonlighters.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/cocoon-screen2.png'}
            width={1000}
            height={500}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
      </Stack>


      <Text textAlign='center' fontSize={"xxx-large"} fontWeight={"Bold"} color={"blue.400"} >Design Journey</Text>
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/cocoon-lofi.png'}
            width={700}
            height={500}
          />
        </Flex>
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
                Lo-fi
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The design process began with a rough design of ideas for the app's layout. The idea behind the initial design was to have a modern, simple feel while maintaining a consistent, user-friendly flow.
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
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
                Mid-fi
              </Text>
              <br />{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              After weeks of continuous revisions and meetings with the team, the app is finally moving and starting to take shape. At this stage of the development cycle, a login feature with a progress tracker has been implemented.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/cocoon-hifi.png'}
            width={1000}
            height={500}
          />
        </Flex>
      </Stack>
      <Footer />
    </>
  )
}
