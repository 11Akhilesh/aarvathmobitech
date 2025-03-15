import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

// Image path
const visionMissionImage = "/solarcycle.jpg"; // Ensure the image is in /public or adjust the import path if necessary

const VisionMission = () => {
  return (
    <Box bg="black" color="white" py={16} px={12} textAlign="center">
      {/* Title */}
      <Heading as="h1" fontSize="50px" mb={10} letterSpacing="widest" fontFamily="monospace">
        Our Vision & Mission
      </Heading>

      {/* Image and Text Container */}
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        justify="center"
        maxW="90%" 
        mx="auto"
      >
        {/* Image - Increased width */}
        <Image 
          src={visionMissionImage} 
          alt="Solar Bike" 
          width={{ base: "100%", md: "60%", lg: "60%" }} // ✅ Increased width
          height="auto"
          objectFit="cover"
          mb={{ base: 6, md: 0 }}
        />

        {/* Vision & Mission Text */}
        <Box textAlign="left" ml={{ md: 16 }} maxW="500px"> 
          {/* Vision */}
          <Text fontSize="40px" color="red.500" fontWeight="bold" mb={1}>
            Vision
          </Text>
          <Text fontSize="20px" mb={6} fontFamily="monospace">
            Redefine transportation with efficient solar-powered vehicles.
          </Text>

          {/* Mission */}
          <Text fontSize="40px" color="red.500" fontWeight="bold" mb={1}>
            Mission
          </Text>
          <Text fontSize="20px" fontFamily="monospace">
            Innovate, Develop, Upgrade, Foster, Educate, Engage.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default VisionMission;
