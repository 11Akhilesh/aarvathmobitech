import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import VisionMission from '../components/VisionMission';
import Footer from '../components/Footer';

// Image Path
const solarBikeImage = "/bike.jpg"; // Ensure it's in /public or use import if inside src/assets

const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Hero 
        title="AARVATH MOBITECH" 
        subtitle="Solar Powered Vehicles" 
        image={solarBikeImage}
      />
      <VisionMission /> {/* ✅ Added the Vision & Mission section */}
      <Footer />
    </Box>
  );
}

export default HomePage;
