import React from 'react';
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage'; // Import ContactPage

// Extend the theme to include custom colors
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
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* Add ContactPage route */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;