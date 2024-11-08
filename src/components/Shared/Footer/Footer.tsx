"use client"
import { Box, Container, Typography, Link, Stack, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";
// import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Footer = () => {
  // const [year, setYear] = useState("");

  // useEffect(() => {
  //   setYear(new Date().getFullYear().toString()); // Ensures the date is set on the client only
  // }, []);

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="center"
          textAlign="center"
        >
          {/* Contact Information */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@lostandfound.com</Typography>
            <Stack direction="row" spacing={1} mt={1} justifyContent="center">
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                sx={{ color: "white" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                sx={{ color: "white" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="mailto:support@lostandfound.com"
                aria-label="Email"
                sx={{ color: "white" }}
              >
                <Email />
              </IconButton>
            </Stack>
          </Box>

          {/* Additional Links */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="/terms" color="inherit" underline="hover">
              Terms of Use
            </Link>
            <br />
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Box>
        </Stack>

        {/* Copyright Information */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            © 2024 Lost and Found. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
// export default dynamic(() => Promise.resolve(Footer), { ssr: false });
