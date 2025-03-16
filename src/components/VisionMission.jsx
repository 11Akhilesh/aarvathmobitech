import React from "react";
import { Box, Heading, Text, Image, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Image path
const visionMissionImage = "/solarcycle.jpg"; // Ensure the image is in /public folder

const VisionMission = () => {
  return (
    <Box bg="black" color="white" py={{ base: 12, md: 16 }} px={{ base: 6, md: 12 }} textAlign="center">
      {/* Title */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={8}
        letterSpacing="widest"
        fontFamily="monospace"
      >
        Our Vision & Mission
      </Heading>

      {/* Image and Text Container */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="100%"
        mx="auto"
        flexWrap="wrap"
        gap={{ base: 6, md: 12 }} // ✅ Adds proper spacing in all screens
      >
        {/* Image - Improved for all screens */}
        <Image
          src={visionMissionImage}
          alt="Solar Bike"
          flex={{ base: "none", md: "1" }} // ✅ Scales well on all screens
          width={{ base: "100%", md: "45%", lg: "40%" }} // ✅ Prevents oversizing
          maxW="500px" // ✅ Keeps image within reasonable size
          objectFit="cover"
        />

        {/* Vision & Mission Text */}
        <Box textAlign="left" maxW="600px" flex="1"> {/* ✅ Text scales well */}
          {/* Vision */}
          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mb={3} textAlign="center">
            Vision
          </Text>
          <List spacing={3} fontSize={{ base: "md", md: "lg" }} fontFamily="monospace">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              To redefine transportation by becoming a leading manufacturer of efficient and sustainable solar-powered vehicles.
            </ListItem>
          </List>

          {/* Mission */}
          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mt={6} mb={3} textAlign="center">
            Mission
          </Text>
          <List spacing={3} fontSize={{ base: "md", md: "lg" }} fontFamily="monospace">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              Innovate, develop, and constantly upgrade solar-powered vehicles that are both cost-effective and safe, setting new standards in the industry.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              Foster partnerships with stakeholders to promote the use of renewable energy in transportation.
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              Educate and engage customers and communities on the benefits of solar-powered mobility.
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default VisionMission;
