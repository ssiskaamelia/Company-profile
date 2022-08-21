import * as React from "react";
import { AppBar, Menu, MenuItem, Divider } from "@mui/material";
import { Logo2 } from "../../assets/images";
import "./Navbar.scss";

const Navbar = (props) => {
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElMedia, setAnchorElMedia] = React.useState(null);
  const openAbout = Boolean(anchorElAbout);
  const openMedia = Boolean(anchorElMedia);

  React.useEffect(() => {
    console.log("PROPS", props);
  }, [props]);

  const handleOpenMenu = (event, name) => {
    if (name === "about") {
      setAnchorElAbout(event.currentTarget);
    } else if (name === "media") {
      setAnchorElMedia(event.currentTarget);
    }
  };
  const handleClose = (name) => {
    if (name === "about") {
      setAnchorElAbout(null);
    } else if (name === "media") {
      setAnchorElMedia(null);
    }
  };

  return (
    <AppBar position="static" className="navbar">
      <div className="containerNavbar">
        <div className="navbarWrapper">
          <div className="navLogo">
            <a href="/" className="homeLink">
              <img src={Logo2} alt="LOGO YKBUT" className="image" />
            </a>
          </div>
          <div className="navLink">
            <ul>
              <li>
                <a className="link" href="/">
                  HOME
                </a>
              </li>
              <li onMouseLeave={() => handleClose("about")}>
                <a
                  className="link"
                  onClick={(event) => handleOpenMenu(event, "about")}
                >
                  ABOUT
                </a>
                <Menu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorElAbout}
                  open={openAbout}
                  onClose={() => handleClose("about")}
                >
                  <MenuItem onClick={() => {}} disableRipple>
                    <a href="/about" className="menuLink">
                      ABOUT US
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={() => {}} disableRipple>
                    <a href="/about" className="menuLink">
                      VISI MISI
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={() => {}} disableRipple>
                    <a href="/about" className="menuLink">
                      TEAMS
                    </a>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <a className="link" href="/business">
                  BUSINESS
                </a>
              </li>
              <li>
                <a className="link" href="/services">
                  SERVICES
                </a>
              </li>
              <li onMouseLeave={() => handleClose("media")}>
                <a
                  className="link"
                  onClick={(event) => handleOpenMenu(event, "media")}
                >
                  MEDIA
                </a>
                <Menu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorElMedia}
                  open={openMedia}
                  onClose={() => handleClose("media")}
                >
                  <MenuItem disableRipple>
                    <a href="/media" className="menuLink">
                      GALLERY
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple>
                    <a href="/media" className="menuLink">
                      TESTIMONIAL
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple>
                    <a href="/media" className="menuLink">
                      PROGRAM
                    </a>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <a className="link" href="/career">
                  CAREER
                </a>
              </li>
              <li>
                <a className="link" href="/contact">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div style={{ width: "150px" }}></div>
        </div>
      </div>
    </AppBar>
  );
};
export default Navbar;
