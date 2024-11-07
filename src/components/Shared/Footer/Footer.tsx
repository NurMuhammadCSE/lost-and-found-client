import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography color="white" component={Link} href={"/"}>
            Home
          </Typography>
          <Typography color="white" component={Link} href={"/about"}>
            About Us
          </Typography>
          <Typography color="white" component={Link} href={"/profile"}>
            My Profile
          </Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}></Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Lost Found. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            <Box component="span" color="white">
              Lost Found
            </Box>{" "}
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
