"use client"
import { Box, Container, Stack, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
// import AuthButton from "@/components/UI/AuthButton/AuthButton";
import { getUserInfo } from "@/Services/authServices"; // Import to check login status
import dynamic from "next/dynamic";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const userInfo = getUserInfo(); // Check if user is logged in

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const NavLinks = (
    <>
      <Typography component={Link} href={"/"} sx={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Typography>
      <Typography component={Link} href={"/about"} sx={{ textDecoration: 'none', color: 'inherit' }}>
        About Us
      </Typography>
      {/* Show "My Profile" if logged in */}
      {userInfo?.userId && (
        <Typography component={Link} href={"/profile"} sx={{ textDecoration: 'none', color: 'inherit' }}>
          My Profile
        </Typography>
      )}
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
            <AuthButton />
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
            <ListItem component={Link} href="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} href="/about" onClick={toggleDrawer}>
              <ListItemText primary="About Us" />
            </ListItem>
            {userInfo?.userId && (
              <ListItem component={Link} href="/profile" onClick={toggleDrawer}>
                <ListItemText primary="My Profile" />
              </ListItem>
            )}
            <ListItem onClick={toggleDrawer}>
              <AuthButton />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Container>
  );
};

export default Navbar;
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
