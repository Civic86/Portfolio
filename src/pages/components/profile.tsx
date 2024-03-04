import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";


export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
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
              Passionate
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Web Engineer
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            a passionate web developer with a keen interest in both frontend and backend development. With a deep understanding of UI/UX principles, I strive to create intuitive and engaging user experiences. Whether it's crafting pixel-perfect designs or optimizing code for efficiency, I love the creative and technical aspects of web development. I thrive in collaborative environments and believe in the power of teamwork to bring ideas to life. My adaptable nature allows me to seamlessly integrate into diverse teams, contributing my skills and expertise while also learning from others. With a commitment to continuous improvement, I'm always eager to explore new technologies and techniques to enhance my craft. Let's collaborate and build something remarkable together!
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            '/Kai2.jpg'}
        />
      </Flex>
    </Stack>
  )
}
