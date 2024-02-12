import NavBar from "./components/navBar";
import CaptionCarousel from "./components/captionCarousel";
import NavBar2 from "./components/navBar2";
import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Card from "./components/card";
import Footer from "./components/footer";

const cardsData = [
  { id: "cocoon", title: "Cocoon", language: "Next.js", description: "App development with AI", imageSrc: "/cocoon-logo.png" },
  { id: "can", title: "beverage can design", language: "illustlator", description: "High-quality branded can design", imageSrc: "can0.png" },
  { id: "quiz", title: "Single page quiz app", language: "JavaScript", description: "Natural JavaScript Quiz app in 1 page", imageSrc: "/quizapp.png" },
  { id: "max", title: "PhotoShop poster", language: "Photoshop", description: "Max Verstappen PhotoShop poster", imageSrc: "MaxF1.png" },
  { id: "trade", title: "tradeSquare", language: "Figma", description: "App design for online burtering app", imageSrc: "/TradeSquare.png" },

]

export default function Index(): JSX.Element {
  return (
    <>
      <NavBar2 />
      <NavBar />
      <CaptionCarousel/>

      <Box mt={10}>
        <Text textAlign='center' fontSize={"xx-large"}>Products</Text>
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
      </Box>
      <Footer />

    </>
  );
}
