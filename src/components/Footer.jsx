import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Input, Textarea, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // ✅ Import Link from react-router-dom

const Footer = () => {
  return (
    <Box id="footer" bg="black" color="white" py={8} px={12}>
      <Container maxW="container.xl">
        <HStack spacing={12} align="start" justify="space-between">
          {/* Logo */}
          <VStack align="start" spacing={2}>
            <Image src="/footerlogo.jpg" alt="AARVATH Logo" boxSize="290px" width="290px" />
          </VStack>

          {/* About Us */}
          <VStack align="start" spacing={2}>
            <Heading as="h3" size="lg" color="#f5deb3">About Us</Heading>
            <Link to="/achievements" style={{ color: "blue.300" }}>Our Story</Link> {/* ✅ Redirect to Achievements Page */}
            <Link to="/achievements" style={{ color: "blue.300" }}>Achievements</Link>
          </VStack>

          {/* Support */}
          <VStack align="start" spacing={2}>
  <Heading as="h3" size="lg" color="#f5deb3">Support</Heading>
  <Link to="/contact" style={{ color: "blue.300" }}>Contact Support</Link>
  <Link to="/faq" style={{ color: "blue.300" }}>FAQ</Link>
</VStack>




          {/* Contact Form */}
          <VStack align="start" spacing={2} w="300px">
            <Heading as="h3" size="lg" color="#f5deb3">Contact Us</Heading>
            <Text fontSize="sm">Name:</Text>
            <Input bg="white" size="sm" />
            <Text fontSize="sm">Email:</Text>
            <Input bg="white" size="sm" />
            <Text fontSize="sm">Message:</Text>
            <Textarea bg="white" size="sm" />
            <Button bg="goldenrod" color="black" w="full">Submit</Button>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;
