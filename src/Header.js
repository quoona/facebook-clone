/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsSubwayOutlinedIcon from "@mui/icons-material/DirectionsSubwayOutlined";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Avatar } from "@mui/material";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header_center">
        <div
          className="header_option
         header_option_active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <DirectionsSubwayOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <GroupOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        {/* <IconButton>
          <AddIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton> */}
        <Navbar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<MessengerIcon />} />

          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
