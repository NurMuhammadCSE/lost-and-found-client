"use client";

import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import assets from '@/assets';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      {/* Optional image for visual enhancement */}
      <Box sx={{ mb: 4 }}>
        <Image
          src={assets.images.notFound} // Replace with your own image path
          alt="Page not found"
          width={300}
          height={300}
        />
      </Box>

      {/* Message and heading */}
      <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>

      {/* Return to Home button */}
      <Button variant="contained" color="primary" onClick={handleGoHome} sx={{ mt: 2 }}>
        Go Back to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
