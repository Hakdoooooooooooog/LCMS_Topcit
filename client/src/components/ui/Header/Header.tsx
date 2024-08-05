import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HeaderStyle from "./Header.module.css";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { LinkProps } from "../../../lib/types";

interface IHeaderProps {
  links: LinkProps[];
}

const Header = ({ links }: IHeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={HeaderStyle.header}>
      <Container maxWidth="xl">
        <Toolbar component={"nav"} className={HeaderStyle.nav}>
          <Box
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box className={HeaderStyle.main_link}>
              {links.map((link, index) =>
                link.name === "Home" ? (
                  <NavLink key={index} to={link.href}>
                    <img
                      src="/logo-small.webp"
                      alt="logo"
                      className={HeaderStyle.logo}
                    />
                  </NavLink>
                ) : null
              )}
            </Box>

            <Box className={HeaderStyle.secondary_links}>
              {false // TODO: Add condition for authenticated user
                ? links
                    .filter(
                      (link) => link.name !== "Home" && link.name !== "Join Us"
                    )
                    .map((link, index) => (
                      <NavLink key={index} to={link.href}>
                        {link.name}
                      </NavLink>
                    ))
                : links
                    .filter((link) => link.name === "Join Us")
                    .map((link, index) => (
                      <NavLink key={index} to={link.href}>
                        {link.name}
                      </NavLink>
                    ))}
            </Box>
          </Box>

          <Box
            component={"div"}
            sx={{
              alignItems: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Tooltip title="Menu" arrow>
              <IconButton
                sx={{
                  bgcolor: "transparent",
                  maxHeight: 48,
                }}
                disableFocusRipple={true}
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>

            <Menu
              classes={{
                list: HeaderStyle.menu_list,
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {false // TODO: Add condition for authenticated user
                ? links
                    .filter(
                      (link) => link.name !== "Home" && link.name !== "Join Us"
                    )
                    .map((link, index) => (
                      <NavLink key={index} to={link.href}>
                        {link.name}
                      </NavLink>
                    ))
                : links
                    .filter((link) => link.name === "Join Us")
                    .map((link, index) => (
                      <NavLink key={index} to={link.href}>
                        {link.name}
                      </NavLink>
                    ))}
            </Menu>

            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "flex", md: "none" },
              }}
              className={HeaderStyle.main_link}
            >
              {links.map((link, index) =>
                link.name === "Home" ? (
                  <NavLink key={index} to={link.href}>
                    <img
                      src="/logo-small.webp"
                      alt="logo"
                      className={HeaderStyle.logo}
                    />
                  </NavLink>
                ) : null
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
