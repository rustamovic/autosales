import React from "react";
import { NavLink } from "react-router-dom";

const AdminPanelHeader = ({ children }) => {
  return (
    <div
      style={{
        width: "90%",
        margin: "150px auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "20%", display: "flex", flexDirection: "column" }}>
        <NavLink
          style={{ textDecoration: "none", height: "30px" }}
          activeClassName="adminNav"
          to="/admin-add"
        >
          Add Admin
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", height: "30px" }}
          activeClassName="adminNav"
          to="/admin-list"
        >
          Admin List
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", height: "30px" }}
          activeClassName="adminNav"
          to="/admin-chat"
        >
          Admin Chat
        </NavLink>
      </div>
      <div style={{ width: "65%", marginLeft: "2%" }}>{children}</div>
    </div>
  );
};

export default React.memo(AdminPanelHeader);
