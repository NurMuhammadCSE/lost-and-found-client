"use client";

import { Box, Button, Container, Stack, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavLinks = (
    <>
      <Typography component={Link} href={"/"} sx={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Typography>
      <Typography component={Link} href={"/about"} sx={{ textDecoration: 'none', color: 'inherit' }}>
        About Us
      </Typography>
      <Typography component={Link} href={"/profile"} sx={{ textDecoration: 'none', color: 'inherit' }}>
        My Profile
      </Typography>
    </>
  );

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

        {/* Show Menu for Desktop */}
        {!isMobile && !isTablet ? (
          <Stack direction={"row"} gap={4} justifyContent={"space-between"} alignItems="center">
            {NavLinks}
            <Button LinkComponent={Link} href="/login" variant="contained">
              Login
            </Button>
          </Stack>
        ) : (
          // Show IconButton for Mobile/Tablet
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </Stack>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            {["Home", "About Us", "My Profile"].map((text, index) => (
              <ListItem key={index} component={Link} href={`/${text.replace(" ", "").toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem component={Link} href="/login">
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Navbar;
