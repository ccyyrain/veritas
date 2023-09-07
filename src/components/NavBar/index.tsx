import * as React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StyledAppBar = styled(AppBar)<{ component?: string }>`
  background-color: rgba(22, 22, 22, 0.8) !important;
  top: 0;
  font-size: 14px;
  font-weight: 700;
  font-family: Helvetica, arial, sans-serif; !important
`;

interface Props {
  window?: () => Window;
}

type NavKeys = "home" | "team" | "investment advisory" | "contact";

const navItems: NavKeys[] = ["home", "team", "investment advisory", "contact"];

const navLinks: Record<NavKeys, string> = {
  home: "",
  team: "team",
  "investment advisory": "investment-advisory",
  contact: "contact",
};

const drawerWidth = 240;
export default function NavBar(props: Props) {
  const location = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "Cabin, Arial, sans-serif", fontSize: "22px" }}
      >
        Veritas Partners Asia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", textTransform: "capitalize" }}
              component={Link}
              to={`/${navLinks[item]}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1, overflowY: "visible" }}>
      <CssBaseline />
      <StyledAppBar component="nav" position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }} // changed sm to md
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Cabin, Arial, sans-serif",
              fontWeight: "700",
              fontSize: "22px",
            }}
          >
            Veritas Partners Asia
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Link key={item} to={`/${navLinks[item]}`}>
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    fontWeight:
                      location.pathname === `/${navLinks[item]}`
                        ? "bold"
                        : "normal",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" }, // changed sm to md
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
