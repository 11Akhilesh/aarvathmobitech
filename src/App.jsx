import React from 'react';
import { ChakraProvider, extendTheme, CSSReset, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // ✅ Import Footer
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

// Extend the theme to include custom styles
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Box 
          display="flex" 
          flexDirection="column" 
          minHeight="100vh"
        >
          <NavBar />
          
          {/* Main Content */}
          <Box flex="1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>

          {/* ✅ Footer stays at the bottom */}
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
