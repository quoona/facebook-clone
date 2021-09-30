import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import LocalConvenienceStoreRoundedIcon from "@mui/icons-material/LocalConvenienceStoreRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import { useStateValue } from "./StateProvider";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
function Sidebar({ title }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalRoundedIcon}
        title="Covid Information Center"
      />
      <SidebarRow Icon={FlagRoundedIcon} title="Pages" />
      <SidebarRow Icon={EmojiPeopleRoundedIcon} title="Friends" />
      <SidebarRow Icon={ChatRoundedIcon} title="Messenger" />
      <SidebarRow Icon={LocalConvenienceStoreRoundedIcon} title="Market" />
      <SidebarRow Icon={OndemandVideoRoundedIcon} title="Watch" />
      <SidebarRow Icon={ExpandMoreRoundedIcon} title="More" />
    </div>
  );
}

export default Sidebar;
