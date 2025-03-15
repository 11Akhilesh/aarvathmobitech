import React from "react";
import { 
  Box, 
  Flex, 
  HStack, 
  Image, 
  Link as ChakraLink, 
  IconButton, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  VStack, 
  useDisclosure 
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

// Path to logo
const logoSrc = "/logo.png"; // Ensure it's placed inside /public or use import

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Handle mobile menu
  const location = useLocation(); // Get current page URL
  const navigate = useNavigate(); // Handle navigation

  // Scroll to footer function
  const handleScrollToFooter = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      // ✅ Already on the homepage, just scroll
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // ✅ If not on homepage, go to homepage first, then scroll after loading
      navigate("/");
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Wait for page transition before scrolling
    }
  };

  return (
    <Flex 
      as="nav"
      align="center"
      justify="center" // Centering buttons
      wrap="wrap"
      padding="1rem"
      bg="rgba(0, 0, 0, 1)"
      color="white"
      width="100%"
      zIndex="1000"
      position="fixed"
      top="0"
    >
      {/* Logo */}
      <Box position="absolute" left="20px">
        <ChakraLink as={RouterLink} to="/">
          <Image src={logoSrc} alt="Logo" height="41px" />
        </ChakraLink>
      </Box>

      {/* Desktop Navigation (Always Visible) */}
      <HStack spacing={9} display={{ base: "none", md: "flex" }}>  
        <ChakraLink as={RouterLink} to="/" fontWeight="500" letterSpacing="widest" fontSize="14px">Home</ChakraLink>
        <ChakraLink as={RouterLink} to="/about" fontWeight="500" letterSpacing="widest" fontSize="14px">About Us</ChakraLink> 
        <ChakraLink as={RouterLink} to="/achievements" fontWeight="500" letterSpacing="widest" fontSize="14px">Achievements</ChakraLink>
        <ChakraLink href="#footer" onClick={handleScrollToFooter} fontWeight="500" letterSpacing="widest" fontSize="14px">
          Contact Us
        </ChakraLink>
      </HStack>

      {/* Hamburger Button (Only Visible on Mobile) */}
      <IconButton 
        display={{ base: "flex", md: "none" }}  // ✅ Visible only on small screens
        icon={<HamburgerIcon />} 
        variant="ghost" 
        aria-label="Open Menu" 
        onClick={onOpen} 
        color="white"
      />

      {/* Mobile Menu (Drawer) */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton />
          <VStack spacing={6} mt="100px">  
            <ChakraLink as={RouterLink} to="/" onClick={onClose} fontSize="18px">Home</ChakraLink>
            <ChakraLink as={RouterLink} to="/about" onClick={onClose} fontSize="18px">About Us</ChakraLink> 
            <ChakraLink as={RouterLink} to="/achievements" onClick={onClose} fontSize="18px">Achievements</ChakraLink>
            <ChakraLink href="#footer" onClick={(e) => { onClose(); handleScrollToFooter(e); }} fontSize="18px">
              Contact Us
            </ChakraLink>
          </VStack>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavBar;
