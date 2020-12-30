import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import db, { auth } from "../firebase";
import SidebarThreads from "./SidebarThreads";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    db.collection("threads").onSnapshot((snapshot) =>
      setThreads(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addThread = () => {
    const threadName = prompt("Enter a Room name.");
    if (threadName) {
      db.collection("threads").add({
        threadName: threadName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon className="search__sidebarIcon" />
          <input placeholder="Search" className="sidebar__input"></input>
        </div>
        <IconButton variant="outlined" className="sidebar__button">
          <PersonAddOutlinedIcon onClick={addThread} />
        </IconButton>
      </div>
      <div className="sidebar__threads">
        {threads.map(({ id, data: { threadName } }) => (
          <SidebarThreads key={id} id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar__bottom">
        <ExitToAppOutlinedIcon
          className="sidebar__bottom__avatar"
          onClick={() => auth.signOut()}
        />
        {/*<IconButton>
                    <HelpOutlineIcon />
                </IconButton>*/}
        <IconButton>
          <FeedbackOutlinedIcon
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://forms.gle/zXgfd9wrsfaHFdfPA";
            }}
          />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
