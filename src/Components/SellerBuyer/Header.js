import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ showSidebar, setshowSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openProfileMenu = Boolean(anchorEl);
  const DashboardDetails = useSelector(
    (state) => state?.DashboardData?.Details
  );

  const handleClose = () => {
    setAnchorEl(null);
  };
  const LogoutUser = () => {
    localStorage.removeItem("token");
    window.open("/", "_self");
  };
  return (
    <div className="h-[65px] w-screen bg-white px-10 border-b-[2px] border-gray-200 flex items-center justify-between">
      <div className="flex items-center">
        <Tooltip title="Menu" placement="bottom">
          <AiOutlineMenu
            size={40}
            className={` px-2 rounded-md cursor-pointer transition-all ${
              showSidebar ? "bg-hover_color text-white" : "text-hover_color"
            } hover:bg-hover_color hover:text-white`}
            onClick={() => setshowSidebar(!showSidebar)}
          />
        </Tooltip>
        <Link to={"/"}>
          <h1 className="text-2xl font-bold text-green-600">Green Valley</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        {/* <Button
          variant="text"
          className="font-bold bg-gray_light text-text_color hover:bg-hover_color hover:text-white"
        >
          Forum
        </Button>
        <Button
          variant="text"
          className="font-bold bg-gray_light text-text_color hover:bg-hover_color hover:text-white"
        >
          Help
        </Button> */}

        <div className="flex items-center ">
          <div className="mr-1">
            <IconButton>
              <Badge badgeContent={4} color="error">
                <IoMdNotifications size={26} className="text-text_color" />
              </Badge>
            </IconButton>
          </div>

          <Tooltip title="Profile" placement="bottom">
            <Button
              className="text-text_color"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <div className="flex items-center space-x-1">
                <div className="rounded-full border-2 border-gray-300 p-[3px]">
                  <Avatar
                    alt="Remy Sharp"
                    // src={Teacher?.ProfilePicture}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-sans font-semibold text-[15px] lowercase text-text_color">
                    {DashboardDetails?.Email}
                  </h1>
                </div>
              </div>
              <RiArrowDropDownLine
                size={25}
                className="ml-1 text-inherit text-text_color_secondary"
              />
            </Button>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openProfileMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                background: "#fffff",
                color: "black",
                minWidth: 200,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 66,
                  width: 10,
                  height: 10,
                  background: "#eef1ff",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "center", vertical: "top" }}
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          >
            <MenuItem>
              <Link href={"/profile"}>
                <div className="flex items-center space-x-2s">
                  <Avatar
                    // src={Teacher?.ProfilePicture}
                    className="inline-block"
                  />
                  <span>Profile</span>
                </div>
              </Link>
            </MenuItem>
            <MenuItem onClick={LogoutUser}>
              <CgLogOut className="mr-3 text-lg" /> Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
