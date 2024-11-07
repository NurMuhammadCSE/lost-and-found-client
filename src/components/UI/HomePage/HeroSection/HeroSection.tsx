import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: 8,
        py: 8,
        // backgroundColor: "#f7f7f7",
        // borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.1,
        }}
      >
        <Image
          src={assets.images.wall} // Update with your image path
          layout="fill"
          objectFit="cover"
          alt="Lost and Found Background"
        />
      </Box>

      {/* Left Section: Headline and Description */}
      <Box sx={{ maxWidth: "50%" }}>
        <Typography variant="h2" color="primary.main" gutterBottom>
          Find what you lost, reunite what you found!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Our mission is to help people reconnect with their lost items and make
          it easy to report found belongings. Join us in creating a community of
          helping hands.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary">
            Report a Lost Item
          </Button>
          <Button variant="outlined" color="primary">
            Report a Found Item
          </Button>
        </Box>
      </Box>

      {/* Right Section: Image */}
      <Box sx={{ maxWidth: "50%" }}>
        <Image
          src={assets.images.cat} // Update with your image path
          width={500}
          height={500}
          alt="Hero Image"
        />
      </Box>
    </Container>
  );
};

export default HeroSection;
