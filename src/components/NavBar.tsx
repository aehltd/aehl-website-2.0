import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/nav-logo.png";

type MenuItem = {
  label: string;
  key: string;
  items?: MenuItem[];
};

const items: MenuItem[] = [
  { label: "Home", key: "" },
  {
    label: "Texas Energy",
    key: "aehl-us",
    items: [
      { label: "Overview", key: "aehl-us/overview" },
      { label: "Our Products", key: "aehl-us/products" },
      { label: "Real Time Metrics", key: "aehl-us/metrics" },
    ],
  },
  {
    label: "Kylin Cloud",
    key: "aehl-kylin",
    items: [
      { label: "Overview", key: "aehl-kylin/overview" },
      { label: "Value Proposition", key: "aehl-kylin/value" },
      { label: "Business Model", key: "aehl-kylin/model" },
    ],
  },
  {
    label: "Investor Relations",
    key: "ir",
    items: [
      { label: "Stock Quote", key: "ir/stock" },
      { label: "Press Releases", key: "ir/releases" },
      { label: "Corporate Presentation", key: "ir/presentation" },
      { label: "SEC Filings", key: "ir/filings" },
      { label: "Board of Directors", key: "ir/board" },
      { label: "Corporate Governance", key: "ir/governance" },
      { label: "Investor FAQs", key: "ir/faq" },
    ],
  },
  { label: "Contact Us", key: "contact-us" },
];

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => {
      if (item.items) {
        return (
          <Menu.SubMenu key={item.key} title={item.label}>
            {renderMenuItems(item.items)}
          </Menu.SubMenu>
        );
      }
      return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
    });
  };

  return (
    <Menu
      className="font-poppins pt-2 fixed top-0 z-50 w-full h-14"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <img className="h-12 ml-5 pb-2" src={logo} alt="AEHL" />
      <div style={{ flexGrow: 1 }} />{" "} {/* Spacer to push menu items to the right */}
      {renderMenuItems(items)}
    </Menu>
  );
};

export default NavBar;
