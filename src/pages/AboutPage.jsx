import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react';
import Hero from '../components/Hero';

// Replace with your actual image path
const aboutImage = "/placeholder-about.jpg";

function AboutPage() {
  return (
    <Box pt="64px">
      <Hero 
        title="ABOUT US" 
        subtitle="Learn our story" 
        image={aboutImage}
        showComingSoon={false}
      />
      
      <Container maxW="container.xl" py={16}>
        <VStack spacing={10} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={6}>Our Mission</Heading>
            <Text fontSize="lg">
              At Aarvath Mobitech, we are committed to revolutionizing transportation 
              with sustainable, solar-powered vehicles. Our mission is to reduce carbon 
              footprints while providing efficient and accessible mobility solutions.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h3" size="lg" mb={4}>Our Vision</Heading>
              <Text fontSize="md">
                We envision a world where clean energy powers all forms of transportation, 
                making our planet healthier and more sustainable for future generations.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="lg" mb={4}>Our Approach</Heading>
              <Text fontSize="md">
                We combine cutting-edge solar technology with innovative vehicle design 
                to create solutions that are both environmentally friendly and practical 
                for everyday use.
              </Text>
            </Box>
          </SimpleGrid>
          
          <Box>
            <Heading as="h2" size="xl" mb={6}>Our Team</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
              {/* Team member cards - replace with actual data */}
              <Box textAlign="center">
                <Image src="/api/placeholder/300/300" borderRadius="full" alt="Team Member" mx="auto" />
                <Heading as="h4" size="md" mt={4}>John Doe</Heading>
                <Text>Founder & CEO</Text>
              </Box>
              <Box textAlign="center">
                <Image src="/api/placeholder/300/300" borderRadius="full" alt="Team Member" mx="auto" />
                <Heading as="h4" size="md" mt={4}>Jane Smith</Heading>
                <Text>Chief Technology Officer</Text>
              </Box>
              <Box textAlign="center">
                <Image src="/api/placeholder/300/300" borderRadius="full" alt="Team Member" mx="auto" />
                <Heading as="h4" size="md" mt={4}>Alex Johnson</Heading>
                <Text>Lead Engineer</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default AboutPage;