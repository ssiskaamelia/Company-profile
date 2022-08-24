import * as React from "react";
import { AppBar, Menu, MenuItem, Divider } from "@mui/material";
import { Logo2 } from "../../assets/images";
import "./Navbar.scss";

const Navbar = (props) => {
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElCareer, setAnchorElCareer] = React.useState(null);
  const openAbout = Boolean(anchorElAbout);
  const openCareer = Boolean(anchorElCareer);

  React.useEffect(() => {
    console.log("PROPS", props);
  }, [props]);

  const handleOpenMenu = (event, name) => {
    if (name === "about") {
      setAnchorElAbout(event.currentTarget);
    } else if (name === "career") {
      setAnchorElCareer(event.currentTarget);
    }
  };
  const handleClose = (name) => {
    if (name === "about") {
      setAnchorElAbout(null);
    } else if (name === "career") {
      setAnchorElCareer(null);
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
                  BERANDA
                </a>
              </li>
              <li onMouseLeave={() => handleClose("about")}>
                <a
                  className="link"
                  onClick={(event) => handleOpenMenu(event, "about")}
                >
                  TENTANG
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
                      TENTANG KAMI
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
                      PENGURUS
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={() => {}} disableRipple>
                    <a href="/about" className="menuLink">
                      TESTIMONIAL
                    </a>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <a className="link" href="/business">
                  BISNIS
                </a>
              </li>
              <li>
                <a className="link" href="/services">
                  LAYANAN
                </a>
              </li>
              <li onMouseLeave={() => handleClose("career")}>
                <a
                  className="link"
                  onClick={(event) => handleOpenMenu(event, "career")}
                >
                  KARIR
                </a>
                <Menu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorElCareer}
                  open={openCareer}
                  onClose={() => handleClose("career")}
                >
                  <MenuItem disableRipple>
                    <a href="/career" className="menuLink">
                      BERKARIR DI YKBUT
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple>
                    <a href="/career" className="menuLink">
                      INFO KARIR
                    </a>
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple>
                    <a href="/career" className="menuLink">
                      TANYA & JAWAB
                    </a>
                  </MenuItem>
                </Menu>
              </li>
              <li>
                <a className="link" href="/media">
                  MEDIA
                </a>
              </li>
                <li>
                <a className="link" href="/contact">
                  HUBUNGI
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
