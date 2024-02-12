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
            Bartering App Design<br />
            <Text as={'span'} color={'blue.400'}>
              with Figma
            </Text>
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
                App Design
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Branding and design for a barter smartphone app. In this project, the work was divided between the development team and the design team to create a better app.            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/tradeMock1.png'}
            width={400}
            height={300}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
      </Stack>

      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50} mb={50}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/tradeDetail.png'}
            width={900}
            height={800}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
        <Flex p={8} flex={1} justify={'center'} mt={10}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                App Design
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              In the design of each component element and UI part, we coordinated between elements in px units and shared them with the development team, which allowed us to properly process feedback from each team and incorporate it into the design to create an excellent UI design.
            </Text>
          </Stack>
        </Flex>
      </Stack>

      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
        <Flex p={8} flex={1} justify={'center'} mt={10}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'blue.400'} as={'span'}>
                Styleguide
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Branding, style guides, and other tasks were accomplished at the same time. By carefully selecting a logo that matched the brand colors and intended use, and by carefully selecting visually appealing fonts and designs, we were able to design a simple, stylish, and consistent design that stood out from the rest of the application suite.                 </Text>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/tradeDetail2.png'}
            width={300}
            height={100}
            style={{ borderRadius: "10%" }}
          />
        </Flex>
      </Stack>
      <Footer />
    </>
  )
}
