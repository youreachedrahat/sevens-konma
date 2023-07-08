import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import "fontsource-inter/500.css";
import theme from "./Theme";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

const CarouselTestimonials =() =>{
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
      >
        <ChakraCarousel gap={32} showIndicators={false}>
          {data.slice(5, 15).map((post, index) => (
            <Flex
              key={index}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-evenly"
              flexDirection="column"
              overflow="hidden"
              color="gray.300"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  w="full"
                  mb={2}
                >
                  {capsFirst(post.title)}
                </Heading>
                <Text w="full">{capsFirst(post.body)}</Text>
              </VStack>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  );
}

export default CarouselTestimonials;