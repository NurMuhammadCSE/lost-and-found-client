import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>
          <Box color={"primary.main"}>Lost-Found</Box>
        </Typography>

        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href={"/"}>
            Home
          </Typography>
          <Typography component={Link} href={"/about"}>
            About Us
          </Typography>
          <Typography component={Link} href={"/profile"}>
            My Profile
          </Typography>
        </Stack>

        <Button LinkComponent={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
