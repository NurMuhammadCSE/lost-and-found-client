import { Box, Container, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@lostandfound.com</Typography>
            <Box sx={{ mt: 1 }}>
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
            </Box>
          </Grid>

          {/* Additional Links */}
          <Grid item xs={12} sm={4} textAlign="center">
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
          </Grid>

          {/* Copyright Information */}
          <Grid item xs={12} textAlign="center" mt={2}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Lost and Found. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
