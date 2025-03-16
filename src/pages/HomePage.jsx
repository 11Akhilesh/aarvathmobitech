import React, { useState, useEffect } from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import VisionMission from "../components/VisionMission";

// Image Paths
const logos = ["/inunitylogo.png", "/sahyadrilogo.png", "/Thingqbatorlogo.png"];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      <NavBar />
      <Hero title="AARVATH MOBITECH" subtitle="Solar Powered Vehicles" image="/bike.jpg" />
      <VisionMission />

      {/* Logo Carousel Section */}
      <Box 
        width="100%" 
        mt={10} 
        bg="white" 
        py={8} 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
      >
        <Text 
          fontSize={{ base: "24px", md: "32px" }} 
          fontWeight="bold" 
          color="black" 
          mb={4}
        >
          Supported by,
        </Text>
        <Box height={{ base: "50px", md: "80px" }} position="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logos[currentIndex]}
              alt={`Company ${currentIndex + 1}`}
              height={{ base: "50px", md: "80px" }}
              objectFit="contain"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
