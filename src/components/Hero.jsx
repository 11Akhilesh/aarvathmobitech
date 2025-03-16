import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Background Image Path
const backgroundImage = "/solarcycle.jpg"; // Ensure it's in /public folder

// Animation Keyframes (Sliding from left)
const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Hero = () => {
  return (
    <Box
      position="relative"
      minH={{ base: "80vh", md: "100vh" }}
      w="100%"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition={{ base: "center", md: "center 10%" }}
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      px={{ base: 2, md: 8 }}
    >
      <Container maxW="container.xl">
        <Box
          bg="rgba(0, 0, 0, 0.7)"
          p={{ base: 4, md: 6 }}
          borderRadius="8px"
          maxW={{ base: "95%", md: "38%" }}
          mx={{ base: "auto", md: "-20vh" }}
          mt={{ base: "40vh", md: "60vh" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading 
            as="h1" 
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            fontWeight="bold"
            color="white"
          >
            AARVATH MOBITECH
          </Heading>
          <Text 
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            fontWeight="medium"
            color="white"
          >
            Solar Powered Vehicles
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;