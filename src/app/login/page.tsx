"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { userLogin } from "@/Services/Actions/userLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const result = await userLogin(data);
      if (result?.data?.accessToken) {
        toast.success(result?.message);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", marginTop: 16 }}
        >
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
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
        </form>

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
