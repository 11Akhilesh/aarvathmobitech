import React from "react";
import { Box, Heading, Text, Image, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Image path
const visionMissionImage = "/solarcycle.jpg"; // Ensure the image is in /public folder

const VisionMission = () => {
  return (
    <Box 
      bg="black" 
      color="white" 
      py={{ base: 8, md: 16 }} 
      px={{ base: 4, md: 12 }}
    >
      <Heading
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        mb={{ base: 6, md: 8 }}
        textAlign="center"
      >
        Our Vision & Mission
      </Heading>

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 12 }}
        mx="auto"
        px={{ base: 2, md: 0 }}
      >
        <Image
          src={visionMissionImage}
          alt="Solar Bike"
          w={{ base: "100%", sm: "80%", md: "45%" }}
          maxW={{ base: "400px", md: "500px" }}
          objectFit="cover"
          mx="auto"
        />

        <Box flex="1" maxW={{ base: "100%", lg: "50%" }}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mb={3} textAlign="center">
            Vision
          </Text>
          <List spacing={{ base: 2, md: 3 }} fontSize={{ base: "sm", md: "lg" }} fontFamily="monospace">
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="blue.500" />
              To redefine transportation by becoming a leading manufacturer of efficient and sustainable solar-powered vehicles.
            </ListItem>
          </List>

          <Text fontSize={{ base: "2xl", md: "3xl" }} color="red.500" fontWeight="bold" mt={6} mb={3} textAlign="center">
            Mission
          </Text>
          <List spacing={{ base: 2, md: 3 }} fontSize={{ base: "sm", md: "lg" }} fontFamily="monospace">
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
