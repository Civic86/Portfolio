import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Heading, Divider, Container, SimpleGrid } from '@chakra-ui/react'
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
      {/* <Divider orientation="horizontal" borderColor="blue.900" mt={200} borderWidth="3px" /> */}
      <Stack minH={'10vh'} direction={{ base: 'column', md: 'row' }} mt={50}>
        <Flex p={8} flex={1} justify={'center'} mt={100}>
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
                F1 Poster
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                PhotoShop Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} mt={50}>
              This F1 poster was created in Adobe Photoshop 2023. Layer styles, custom brushes, masking and color correction were used to create an energetic and cohesive design.
                <br/>
              All materials were sourced from Adobe's free resources, which were then processed and edited. The result is a very artistic piece of work.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/MaxF1.png'}
            width={500}
            height={300}
            style={{ borderRadius: "1%" }}
          />
        </Flex>
      </Stack>
      <Footer />
    </>
  )
}
