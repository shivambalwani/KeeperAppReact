import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import MenuIcon from "@material-ui/icons/Menu";
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewListIcon from "@material-ui/icons/ViewList";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";

function Header() {
  return (
    <header>
      <h1>
        <div>
          <MenuIcon className="menu-icon" />
          <HighlightIcon />
          Keep
        </div>
        <div className="header-icons">
          <RefreshIcon className="refresh-icon" />
          <ViewListIcon className="viewlist-icon" />
          <SettingsIcon className="setting-icon" />
          <AppsTwoToneIcon className="app-icon" />
        </div>
      </h1>
    </header>
  );
}

export default Header;
