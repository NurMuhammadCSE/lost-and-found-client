import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Link from "next/link";

const Sidebar = () => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 1,
          mt: 1,
          mx: 2,
        }}
        component={Link}
        href="/"
      >
        <Typography
          color={"primary.main"}
          component="h1"
          sx={{
            cursor: "pointer",
          }}
          variant="h4"
          fontWeight={600}
        >
          Lost-Found
        </Typography>
      </Stack>
      <Box
        sx={{
          mt: -5,
        }}
      >
        {drawer}
      </Box>
    </Box>
  );
};

export default Sidebar;
