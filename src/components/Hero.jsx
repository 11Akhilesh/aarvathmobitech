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
      minH="100vh"
      w="100vw"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover" // ✅ Ensures full coverage without horizontal scrolling
      bgPosition="center10%"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      px={{ base: 4, md: 8, lg: 16 }} // ✅ Adds padding on smaller screens
    >
      {/* Content */}
      <Container maxW="container.xl">
        <Box
          bg="rgba(0, 0, 0, 0.7)"
          padding={{ base: "1rem", md: "1.5rem 2rem" }} // ✅ Responsive padding
          borderRadius="8px"
          maxWidth={{ base: "100%", md: "50%" }} // ✅ Adjusts box width on small screens
          animation={`${slideIn} 1s ease-out`}
          ml={-40}
          textAlign={{ base: "center", md: "left" }} // ✅ Centers text on mobile
        >
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white">
            AARVATH MOBITECH
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium" color="white">
            Solar Powered Vehicles
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;