import React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
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
      bgSize="cover"
      bgPosition="center 10%" // ✅ Adjusted to shift image slightly downward
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
    >
      {/* Content */}
      <Container maxW="container.xl">
        <VStack align="start" spacing={2} animation={`${slideIn} 1s ease-out`}>
          <Box
            bg="rgba(0, 0, 0, 0.7)"
            padding="1rem"
            borderRadius="8px"
            display="inline-block"
          >
            <Heading as="h1" size="2xl" fontWeight="bold" color="white">
              AARVATH MOBITECH
            </Heading>
          </Box>

          <Box
            bg="rgba(0, 0, 0, 0.7)"
            padding="0.5rem 1rem"
            borderRadius="8px"
            animation={`${slideIn} 1.2s ease-out`}
          >
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
