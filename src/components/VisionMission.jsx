import React from "react";
import { Box, Heading, Text, Image, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Image path
const visionMissionImage = "/solarcycle.jpg"; // Ensure the image is in /public or adjust the import path if necessary

const VisionMission = () => {
  return (
    <Box bg="black" color="white" py={{ base: 10, md: 16 }} px={{ base: 4, md: 12 }} textAlign="center">
      {/* Title */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "4xl" }} // ✅ Adjusted font size for responsiveness
        mb={10}
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
        maxW="90%"
        mx="auto"
        flexWrap="wrap"
      >
        {/* Image - Increased width */}
        <Image
          src={visionMissionImage}
          alt="Solar Bike"
          width={{ base: "100%", md: "50%" }} // ✅ Responsive width
          height="auto"
          objectFit="cover"
          mb={{ base: 6, md: 0 }}
        />

        {/* Vision & Mission Text */}
        <Box textAlign="left" ml={{ md: 10 }} maxW="500px">
          {/* Vision */}
          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mb={2} textAlign="center">
            Vision
          </Text>
          <List spacing={3} fontSize={{ base: "md", md: "lg" }} fontFamily="monospace">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              To redefine transportation by becoming a leading manufacturer of efficient and sustainable solar-powered vehicles.
            </ListItem>
          </List>

          {/* Mission */}
          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mt={6} mb={2} textAlign="center">
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
