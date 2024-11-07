"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import NextLink from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add registration handling logic here
    console.log("Registration data:", data);
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
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            type="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Register
          </Button>
        </Box>
        {/* Text with link to Login */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{" "}
            <NextLink href="/login" passHref>
              <Link color="primary">Login</Link>
            </NextLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
