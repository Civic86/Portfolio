import NavBar from "./components/navBar";
import CaptionCarousel from "./components/captionCarousel";
import NavBar2 from "./components/navBar2";
import { Box, Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Card from "./components/card";

const cardsData = [
  { id: "1", title: "Title 1", language: "Language 1", description: "Description 1", imageSrc: "image1.jpg" },
  { id: "2", title: "Title 2", language: "Language 2", description: "Description 2", imageSrc: "image2.jpg" },
  { id: "3", title: "Title 3", language: "Language 3", description: "Description 3", imageSrc: "image3.jpg" },
  { id: "4", title: "Title 4", language: "Language 4", description: "Description 4", imageSrc: "image4.jpg" },
  { id: "5", title: "Title 5", language: "Language 5", description: "Description 5", imageSrc: "image5.jpg" },
  { id: "6", title: "Title 6", language: "Language 6", description: "Description 6", imageSrc: "image6.jpg" },
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

    </>
  );
}
