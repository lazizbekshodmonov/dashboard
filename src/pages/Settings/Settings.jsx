import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SettingsContainer from "./SettingsContainer";
import "./Settings.scss";
export default function Settings() {
  return (
    <div className="settings">
      <Sidebar props={"settings"} />
      <SettingsContainer />
    </div>
  );
}
