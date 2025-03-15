import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function AchievementsPage() {
  return (
    <Box pt="64px" bg="black" color="white">
      
      {/* Our Story Section */}
      <VStack spacing={6} align="center"> {/* Centered Content */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" color="#E63946" letterSpacing="widest">
            Our Story
          </Heading>
        </Box>
        <Box bg="white" color="black" p={6} borderRadius="lg" w="100%" maxW="98vw"> 
          <Text letterSpacing="widest">
            Our journey began with a vision to revolutionize the transportation industry. Through dedication and innovation, we have developed cutting-edge solar-powered vehicles that contribute to a sustainable future. From our humble beginnings, we have grown into a leader in solar technology, continually pushing the boundaries to provide eco-friendly transportation solutions.
          </Text>
        </Box>
      </VStack>

      {/* Our Achievements Section */}
      <VStack spacing={6} align="center" mt={16}> {/* Centered Content */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" color="#E63946" letterSpacing="widest">
            Our Achievements
          </Heading>
        </Box>

        {/* Achievement 1 */}
        <Box bg="white" color="black" p={6} borderRadius="lg" w="100%" maxW="98vw"> 
          <Heading as="h3" size="md" color="#E63946" letterSpacing="widest">
            Achievement 1: 5 Lakhs Seed Funding by Cisco Thingqbator
          </Heading>
          <Text mt={2} letterSpacing="widest">
            We secured a significant milestone with a seed funding of 5 Lakhs from Cisco Thingqbator. This funding has been instrumental in accelerating our research and development efforts, allowing us to innovate and expand our capabilities in solar-powered transportation solutions. We are grateful for Cisco Thingqbator's support and are committed to leveraging these resources to drive our mission forward.
          </Text>
        </Box>

        {/* Achievement 2 */}
        <Box bg="white" color="black" p={6} borderRadius="lg" w="100%" maxW="98vw"> 
          <Heading as="h3" size="md" color="#E63946" letterSpacing="widest">
            Achievement 2: Top 10 in Manthan 2022-23
          </Heading>
          <Text mt={2} letterSpacing="widest">
            We proudly secured a position in the Top 10 at Manthan 2022-23, a prestigious innovation and entrepreneurship competition conducted by the Government of Karnataka. This recognition underscores our commitment to excellence and innovation in the field of solar-powered transportation. Being among the top contenders has fueled our drive to continue pushing boundaries and delivering impactful solutions.
          </Text>
        </Box>

        {/* Achievement 3 */}
        <Box bg="white" color="black" p={6} borderRadius="lg" w="100%" maxW="98vw"> 
          <Heading as="h3" size="md" color="#E63946" letterSpacing="widest">
            Achievement 3: 1st in I2CONECT hosted by IEEE
          </Heading>
          <Text mt={2} letterSpacing="widest">
            We achieved 1st place in the I2CONECT competition, hosted by IEEE, and were awarded a cash prize of 5,000/-. This victory highlights our innovative approach and technical excellence in the field of solar-powered transportation, showcasing our ability to lead and excel in competitive environments.
          </Text>
        </Box>

      </VStack>

    </Box>
  );
}

export default AchievementsPage;