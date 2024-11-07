import assets from "@/assets";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Purpose and Mission */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" color="primary.main" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
          Lost and Found is dedicated to helping people reconnect with their
          lost items and assist those who have found belongings they wish to
          return. Our mission is to make it easy, safe, and reliable for users
          to report and recover lost items, creating a community of care and
          responsibility.
        </Typography>
      </Box>

      {/* Team Information (Optional) */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          color="primary.main"
          gutterBottom
          textAlign="center"
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center" }}>
              <Image
                alt="John Doe"
                src={assets.images.profile} // Replace with actual team member image
                height={500}
                width={500}
                // className="w-[100px] h-[100px] mx-auto mt-3"
              />
              <CardContent>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  Founder & CEO
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Passionate about connecting people with their lost items and
                  making a difference.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members as needed */}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutSection;
