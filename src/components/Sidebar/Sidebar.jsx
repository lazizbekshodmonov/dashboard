import { Link } from "react-router-dom";
import "./sidebar.scss";
import "../../icons/icomoon/style.css";
import logo from "./logo.svg";

const Saidbar = ({ props }) => {
  return (
    <div className="sidebar_container">
      <div className="logo_container">
        <img src={logo} alt="" />
        <h2>Dashboard Kit</h2>
      </div>
      <div className="router_link">
        <div className="main_router_link">
          {[
            "Overview",
            "Tickets",
            "Ideas",
            "Agents",
            "Contacts",
            "Articles",
          ].map((item) => {
            return (
              <Link
                to={"/" + item.toLowerCase()}
                key={item.toLowerCase()}
                className={
                  item.toLowerCase() === props ? "links active" : "links"
                }
              >
                <span className={"icon-" + item.toLowerCase()}></span>
                <div className="link">{item}</div>
              </Link>
            );
          })}
        </div>
        <div className="user_settings">
          {["Settings", "Subscription"].map((item) => {
            return (
              <Link
                to={"/" + item.toLowerCase()}
                key={item.toLowerCase()}
                className={
                  item.toLowerCase() === props ? "links active" : "links"
                }
              >
                <span className={"icon-" + item.toLowerCase()}></span>
                <div className="link">{item}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
