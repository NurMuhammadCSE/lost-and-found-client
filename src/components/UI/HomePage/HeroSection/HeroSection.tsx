import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 4, md: 8 },
        py: { xs: 4, md: 8 },
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
          // layout="fill"
          // objectFit="cover"
          alt="Lost and Found Background"
        />
      </Box>

      {/* Left Section: Headline and Description */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          color="primary.main"
          gutterBottom
          fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
        >
          Find what you lost, reunite what you found!
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.25rem" } }}
        >
          Our mission is to help people reconnect with their lost items and make
          it easy to report found belongings. Join us in creating a community of
          helping hands.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            color="primary"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Report a Lost Item
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Report a Found Item
          </Button>
        </Box>
      </Box>

      {/* Right Section: Image */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          mt: { xs: 4, md: 0 },
          textAlign: "center",
        }}
      >
        <Image
          src={assets.images.cat} // Update with your image path
          width={500}
          height={500}
          alt="Hero Image"
          // style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default HeroSection;
// export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
