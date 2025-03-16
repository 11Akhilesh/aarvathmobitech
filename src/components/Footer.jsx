import React, { useState } from "react";
import { Box, Container, Heading, Text, VStack, Stack, Input, Textarea, Button, Image, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_pdiztbc", // ✅ Replace with your EmailJS Service ID
        "template_5z7lwef", // ✅ Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "LnQjmA7FEu_WSbgmQ" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log("Failed to send email.", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Box id="footer" bg="black" color="white" py={{ base: 6, md: 8 }} px={{ base: 4, md: 6 }}>
      <Container maxW="container.xl">
        <Stack
          spacing={{ base: 8, md: 8 }}
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "center", lg: "start" }}
        >
          <VStack align={{ base: "center", lg: "start" }} spacing={2}>
            <Image
              src="/footerlogo.jpg"
              alt="AARVATH Logo"
              boxSize={{ base: "150px", md: "200px" }}
              w="auto"
            />
          </VStack>

          {/* About Us */}
          <VStack align="start" spacing={2}>
            <Heading as="h3" size="lg" color="#f5deb3">About Us</Heading>
            <Link to="/about" style={{ color: "blue.300" }}>Our Story</Link>
            <Link to="/achievements" style={{ color: "blue.300" }}>Achievements</Link>
          </VStack>

          {/* Support */}
          <VStack align="start" spacing={2}>
            <Heading as="h3" size="lg" color="#f5deb3">Support</Heading>
            <Text>Contact Us:</Text>
            <Text as="a" href="tel:+919876543210" color="blue.300">
              +91 9876543210
            </Text>
          </VStack>

          {/* Contact Form */}
          <VStack 
            as="form" 
            onSubmit={sendEmail}
            align={{ base: "center", lg: "start" }}
            spacing={2} 
            w={{ base: "90%", sm: "80%", md: "300px" }}
          >
            <Heading as="h3" size={{ base: "md", md: "lg" }} color="#f5deb3">
              Contact Us
            </Heading>
            <Text fontSize="sm">Name:</Text>
            <Input 
              bg="white" 
              color="black" 
              size={{ base: "sm", md: "md" }}
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <Text fontSize="sm">Email:</Text>
            <Input 
              bg="white" 
              color="black" 
              size={{ base: "sm", md: "md" }}
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <Text fontSize="sm">Message:</Text>
            <Textarea 
              bg="white" 
              color="black" 
              size={{ base: "sm", md: "md" }}
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
            <Button type="submit" bg="goldenrod" color="black" w="full">Submit</Button>
          </VStack>
        </Stack>

        <Divider my={{ base: 4, md: 6 }} />
        <Text 
          textAlign="center" 
          fontSize={{ base: "xs", md: "sm" }}
        >
          © 2024 Aarvath Mobitech Pvt Ltd. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
