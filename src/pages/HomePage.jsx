import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import VisionMission from "../components/VisionMission";

// Image Paths
const logos = ["/inunitylogo.png", "/sahyadrilogo.png", "/Thingqbatorlogo.png"];

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Hero title="AARVATH MOBITECH" subtitle="Solar Powered Vehicles" image="/bike.jpg" />
      <VisionMission />

      {/* Logo Slider Section */}
      <Box overflow="hidden" width="100%" mt={10} position="relative" bg="white" py={3}>
        <motion.div
          style={{ display: "flex", whiteSpace: "nowrap", gap: "120px", alignItems: "center" }}
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {/* "Supported by" text */}
          <Text fontSize="32" fontWeight="bold" color="black">
            Supported by,
          </Text>

          {/* Logos */}
          {logos.map((logo, index) => (
            <Image key={index} src={logo} alt={`Company ${index + 1}`} height="80px" />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default HomePage;
