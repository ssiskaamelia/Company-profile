import React, { useEffect } from "react"
import { Link } from "react-scroll";
import { Menu, MenuItem, Divider } from "@mui/material"

function Navbar(props) {
  const [anchorElabout, setAnchorElabout] = React.useState(null);
  const [anchorElmedia, setAnchorElmedia] = React.useState(null);
  const [openPage, setOpenPage] = React.useState("");
  const openabout = Boolean(anchorElabout);
  const openmedia = Boolean(anchorElmedia);

  useEffect(() => {
    console.log("PAGE", openPage)
    if(openPage !== "") {
      handleOpenPage(openPage)
    }
  },[openPage])

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
  // document.addEventListener("scroll", function (e) {
  //   if (window.screen.width < 768 && window.scrollY > 690) {
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.add("display");

  //     const nav = document.querySelector(".navbar");

  //     nav.classList.add("navopened");
  //   } else if (window.screen.width > 768 && window.scrollY > 220) {
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.add("display");

  //     const nav = document.querySelector(".navbar");

  //     nav.classList.add("navopened");
  //   } else {
  //     const nav = document.querySelector(".navbar");
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.remove("display");
  //     nav.classList.remove("navopened");
  //   }

  // });
  const handleOpenPage = (page) => {
    window.location.assign(page)
  }

  return (
    <nav className="navbar solid">
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
                className="staging"
                onClick={() => setOpenPage("/")}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="staging"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                onClick={(event) => handleClick(event, "about")}
                to="about"
              >
                ABOUT
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
                <MenuItem onClick={() => setOpenPage("about")} disableRipple>
                  {/* <EditIcon /> */}
                  ABOUT US
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => setOpenPage("visimisi")} disableRipple>
                  {/* <FileCopyIcon /> */}
                  VISI MISI
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => setOpenPage("about")} disableRipple>
                  {/* <MoreHorizIcon /> */}
                  TEAMS
                </MenuItem>
              </Menu>
            </li>
            <li>
              <Link
                className="staging"
                onClick={() => setOpenPage('/business')}
                to="business"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                BUSINESS
              </Link>
            </li>
            <li>
              <Link
                className="staging"
                onClick={() => setOpenPage('/services')}
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                className="staging"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                onClick={(event) => handleClick(event, "media")}
                to="media"
              >
                MEDIA
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
                <MenuItem onClick={() => handleOpenPage("mediagallery")} disableRipple>
                  {/* <EditIcon /> */}
                  GALLERY
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleOpenPage("mediatestimonial")} disableRipple>
                  {/* <FileCopyIcon /> */}
                  TESTIMONIAL
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={() => handleOpenPage("mediaprogram")} disableRipple>
                  {/* <ArchiveIcon /> */}
                  PROGRAM
                </MenuItem>
              </Menu>
            </li>
            <li>
              <Link
                className="staging"
                onClick={() => setOpenPage('/services')}
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                CAREER
              </Link>
            </li>
            <li>
              <Link
                className="staging"
                onClick={() => setOpenPage('/contact')}
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="button" onClick={() => setOpenPage()}>
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
