import React from "react"
import { Link } from "react-scroll";
import { Button, Menu, MenuItem, Divider } from "@mui/material"

function Navbar() {

  const [anchorElabout, setAnchorElabout] = React.useState(null);
  const [anchorElmedia, setAnchorElmedia] = React.useState(null);
  const openabout = Boolean(anchorElabout);
  const openmedia = Boolean(anchorElmedia);

  const handleClick = (event, name) => {
    if (name === "about") {
      setAnchorElabout(event.currentTarget);
    } else if (name === "media") {
      setAnchorElmedia(event.currentTarget);
    }
  };
  const handleClose = (name) => {
    if (name === "about") {
      setAnchorElabout(null);
    } else if (name === "media") {
      setAnchorElmedia(null);
    }
  };
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }

  });
  function openBar() {

    const bar = document.querySelector(".bar");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <h1 className="logo">
            <Link
              spy={true}
              smooth={true}
              duration={1000}
              to="headerbg"
              style={{ cursor: "pointer" }}
            >
              LOGO
            </Link>
          </h1>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                onClick={(event) => handleClick(event, "about")}
              >
                About
              </Link>
              <Menu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorElabout}
                open={openabout}
                onClose={() => handleClose("about")}
              >
                <MenuItem onClick={() => handleClose("about")} disableRipple>
                  {/* <EditIcon /> */}
                  About Us
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleClose("about")} disableRipple>
                  {/* <FileCopyIcon /> */}
                  Visi Misi
                </MenuItem>
                {/* <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleClose("about")} disableRipple>
                  Motto
                </MenuItem> */}
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleClose("about")} disableRipple>
                  {/* <MoreHorizIcon /> */}
                  Teams
                </MenuItem>
              </Menu>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                onClick={(event) => handleClick(event, "media")}
              >
                Media
              </Link>
              <Menu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorElmedia}
                open={openmedia}
                onClose={() => handleClose("media")}
              >
                <MenuItem onClick={() => handleClose("media")} disableRipple>
                  {/* <EditIcon /> */}
                  Gallery
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleClose("media")} disableRipple>
                  {/* <FileCopyIcon /> */}
                  Testimonial
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleClose("media")} disableRipple>
                  {/* <ArchiveIcon /> */}
                  Program
                </MenuItem>
              </Menu>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
