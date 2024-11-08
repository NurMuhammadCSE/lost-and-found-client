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
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/Services/Actions/userRegister";
import { toast } from "sonner";
import { userLogin } from "@/Services/Actions/userLogin";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { storeUserInfo } from "@/Services/authServices";

export type RegisterFormData = {
  name: string;
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
  } = useForm<RegisterFormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await registerUser(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: data.password,
          email: data.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
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
            // required
            fullWidth
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            type="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            // required
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
            // required
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
            // required
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
            Already have an account? {/* <NextLink href="/login" passHref> */}
            <Link href="/login" color="primary">
              Login
            </Link>
            {/* </NextLink> */}
            {/* <Typography color="primary" component={Link} href="/login">
              Login
            </Typography> */}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

// export default RegistrationForm;
export default dynamic(() => Promise.resolve(RegistrationForm), { ssr: false });
