import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

// Background Image Path
const backgroundImage = "/solarcycle.jpg"; // Ensure it's in the /public folder

// Animation Keyframes (Sliding from left)
const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Hero = () => {
  return (
    <Box
      position="relative"
      height="100vh" // ✅ Fix: Use height instead of minH
      width="100vw"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center" // ✅ Center content vertically
      alignItems="center"
    >
      {/* Hero Text */}
      <Container maxW="container.xl" textAlign="center">
        <VStack spacing={4} animation={`${slideIn} 1s ease-out`}>
          <Box bg="rgba(0, 0, 0, 0.7)" p={4} borderRadius="8px">
            <Heading as="h1" size="2xl" fontWeight="bold" color="white">
              AARVATH MOBITECH
            </Heading>
          </Box>

          <Box bg="rgba(0, 0, 0, 0.7)" p={3} borderRadius="8px">
            <Text fontSize="xl" fontWeight="medium" color="white">
              Solar Powered Vehicles
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
