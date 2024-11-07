"use client";

import React, { useState } from "react";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login handling logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            label="Username or Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Log In
          </Button>
        </Box>

        {/* Text with link to Register */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Don&apos;t have an account?{" "}
            <NextLink href="/register" passHref>
              <Link color="primary">Register</Link>
            </NextLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
