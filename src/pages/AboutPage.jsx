import React from 'react';
import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <Box pt="64px" display="flex" flexDirection="column" minHeight="100vh">
      <Container maxW="98vw" py={16} flex="1">
        <Box textAlign="center">
          <Heading as="h2" size="xl" color="#E63946" mb={6} letterSpacing="widest">
            Our Journey
          </Heading>
        </Box>

        <Box 
          bg="white" 
          color="black" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          w="92%" 
          ml="5%"
        >
          <Text fontSize="lg" textAlign="justify">
            Our journey began when the co-founders embarked on the idea of creating a Solar Powered Vehicle. 
            To refine our concept, we conducted field visits, attended relevant events, and participated in conferences, 
            with the support of mentors and resources from our college.
          </Text>
          <Text fontSize="lg" textAlign="justify" mt={4}>
            Despite facing numerous challenges, we persevered. We joined an incubation program, 
            and with a growing team and access to valuable resources, significant improvements were made. 
            A real-time customer, a farmer, had a test run on our prototype. 
            We managed to address all inconsistencies and scale up our prototype.
          </Text>
          <Text fontSize="lg" textAlign="justify" mt={4}>
            We have been diligently working on our prototype for the past 1.3 years, 
            continually improving and refining it to ensure its success in the market. 
            The designing and simulation process is still in progress.
          </Text>
        </Box>

        {/* Our Team Section */}
        <Box textAlign="center" mt={10}>
          <Heading as="h2" size="xl" color="#E63946" mb={6} letterSpacing="widest">
            Our Team
          </Heading>
        </Box>

        <Box 
          bg="white" 
          color="black" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          w="92%" 
          ml="5%"
        >
          <Flex justify="center" align="center" gap={10}>
            <Box textAlign="center">
              <Heading as="h4" size="md" color="#E63946" mb={1} letterSpacing="widest">
                Shreesha Shetty
              </Heading>
              <Text fontSize="lg">Co-Founder</Text>
            </Box>
            <Box textAlign="center">
              <Heading as="h4" size="md" color="#E63946" mb={1} letterSpacing="widest">
                Apoorva Achar
              </Heading>
              <Text fontSize="lg">Co-Founder</Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;