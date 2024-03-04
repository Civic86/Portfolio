import NavBar from "./components/navBar";
import CaptionCarousel from "./components/captionCarousel";
import NavBar2 from "./components/navBar2";
import { Box, Center, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Card from "./components/card";
import Footer from "./components/footer";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import SplitScreen from "./components/profile";
const cardsData = [
  { id: "cocoon", title: "Cocoon", language: "Next.js", description: "App development with AI", imageSrc: "/cocoon-logo.png" },
  { id: "can", title: "beverage can design", language: "illustlator", description: "High-quality branded can design", imageSrc: "can.png" },
  { id: "quiz", title: "Single page quiz app", language: "JavaScript", description: "Natural JavaScript Quiz app in 1 page", imageSrc: "/quizapp.png" },
  { id: "max", title: "PhotoShop poster", language: "Photoshop", description: "Max Verstappen PhotoShop poster", imageSrc: "MaxF1.png" },
  { id: "trade", title: "tradeSquare", language: "Figma", description: "App design for online burtering app", imageSrc: "/TradeSquare.png" },

]

export default function Index(): JSX.Element {
  return (
    <>
      <NavBar2 />

      <Box mt={10}>
        <Container maxW="container.lg" px={4}>
          {/* <Box bg="white" w="100%">
        <ImageCarousel images={images} />
      </Box> */}
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Box borderRadius="50%" overflow="hidden" height={300} width={300}>
              <Image
                src={'/Kai.jpg'}
                alt="Kai"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Flex>
        </Container>
        <Text textAlign='center' fontSize={"xxx-large"} fontWeight={"Bold"} >Hello, Welcome to Kai Koharazawa's Portfolio!</Text>
        <Text textAlign='center' fontSize={"xx-large"} mt={48} color={'blue.400'} fontWeight={"Bold"}>Products</Text>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={-5}>
          {cardsData.map(card => (
            <GridItem key={card.id} w='100%' h='auto'>
              <Card
                id={card.id}
                title={card.title}
                language={card.language}
                description={card.description}
                imageSrc={card.imageSrc}
              />
            </GridItem>
          ))}
        </Grid>
        <Box mt={10}>
          <Flex justifyContent="center" alignItems="center" direction="column">
            <Text textAlign='center' fontSize={"xx-large"} fontWeight={"Bold"} color={'blue.400'} mb={10}>About Myself</Text>
            <SplitScreen/>
          </Flex>
        </Box>
      </Box>
      <Footer />

    </>
  );
}
