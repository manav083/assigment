import React from "react";
import "../assets/css/custom.css";
import logo from "../assets/images/logo.svg";
import campaigns from "../assets/images/campaign.svg"
import teams from "../assets/images/teams.svg";
import contacts from "../assets/images/leads.svg"
import reports from "../assets/images/reports.svg"
import help from "../assets/images/help.svg";



const Sidebar = () => {
  return (
    <div>
      <div className="sidebar1">
        <img style={{width: 36, height: 36, margin: "10px auto"}} src={logo} alt="logo" />
        <img style={{width: 36, height: 36, margin: "10px auto"}} src={campaigns} alt="campaigns" />
        <img style={{width: 36, height: 36, margin: "10px auto"}} src={teams} alt="teams" />
        <img style={{width: 36, height: 36, margin: "10px auto"}} src={contacts} alt="contacts" />
        <img style={{width: 36, height: 36, margin: "10px auto"}} src={reports} alt="reports" />
        <img style={{width: 36, height: 36, position: "absolute", bottom: "2%", left: "25%"}} src={help} alt="help"/>
      </div>
    </div>
  );
};

export default Sidebar;
