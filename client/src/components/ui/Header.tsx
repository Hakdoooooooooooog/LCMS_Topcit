import { NavLink } from "react-router-dom";
// import {
//   Menu,
//   Avatar,
//   MenuItem,
//   Divider,
//   ListItemIcon,
//   Tooltip,
//   IconButton,
//   Box,
// } from "@mui/material";
// import { PersonAdd, Settings, Logout } from "@mui/icons-material";
// import { useState } from "react";
// import { ArrowDownIcon } from "@heroicons/react/16/solid";

interface ILink {
  name: string;
  href: string;
  sublinks?: Array<ILink>;
}

interface IHeaderProps {
  links: Array<ILink>;
  styles: CSSModuleClasses;
}

const Header = ({ links, styles }: IHeaderProps) => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <header>
      <nav>
        <div className={styles.main_link}>
          {links.map((link, index) =>
            link.name === "Home" ? (
              <NavLink key={index} to={link.href}>
                <img src="/logo-small.png" alt="logo" className={styles.logo} />
              </NavLink>
            ) : null
          )}
        </div>
        <div className={styles.secondary_links}>
          {links.map((link, index) =>
            link.name !== "Home" ? (
              <NavLink key={index} to={link.href}>
                {link.name}
              </NavLink>
            ) : null
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
