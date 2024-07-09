import React, { useState, useLayoutEffect } from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/nav-logo.png";

type MenuItem = {
  type: "item" | "group" | "submenu";
  label: string;
  key: string;
  items?: MenuItem[];
};

const items: MenuItem[] = [
  { type: "item", label: "Home", key: "" },
  {
    type: "submenu",
    label: "Texas Energy",
    key: "aehl-us",
    items: [
      { type: "item", label: "Overview", key: "aehl-us/overview" },
      { type: "item", label: "Our Products", key: "aehl-us/products" },
      { type: "item", label: "Real Time Metrics", key: "aehl-us/metrics" },
    ],
  },
  {
    type: "submenu",
    label: "Kylin Cloud",
    key: "aehl-kylin",
    items: [
      { type: "item", label: "Overview", key: "aehl-kylin/overview" },
      { type: "item", label: "Value Proposition", key: "aehl-kylin/value" },
      { type: "item", label: "Business Model", key: "aehl-kylin/model" },
    ],
  },
  {
    type: "submenu",
    label: "Investor Relations",
    key: "ir",
    items: [
      {
        type: "group",
        label: "Finances",
        key: "finances",
        items: [
          {
            type: "item",
            label: "Stock Information",
            key: "ir/finances#stock",
          },
          { type: "item", label: "SEC Filings", key: "ir/finances#sec" },
        ],
      },
      {
        type: "group",
        label: "News and Media",
        key: "news",
        items: [
          { type: "item", label: "Press Releases", key: "ir/news#press" },
          {
            type: "item",
            label: "Corporate Presentation",
            key: "ir/news#presentation",
          },
        ],
      },
      {
        type: "group",
        label: "Corporate Governance",
        key: "governance",
        items: [
          { type: "item", label: "Overview", key: "ir/governance#overview" },
          {
            type: "item",
            label: "Board of Directors",
            key: "ir/governance#board",
          },
          { type: "item", label: "Documents", key: "ir/governance#documents" },
        ],
      },
      { type: "item", label: "Investor FAQs", key: "ir/faq" },
    ],
  },
  { type: "item", label: "Contact Us", key: "contact-us" },
];

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const scrollId = location.hash.replace("#", "");
    if (scrollId) {
      const element = document.getElementById(scrollId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      }
    } else {
      const element = document.getElementById("container");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ block: "start", behavior: "smooth" });
        }, 500);
      }
    }
  }, [location]);

  const handleClick = async (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
    const [path, hash] = e.key.split("#");
    if (hash) {
      navigate(`/${path}#${hash}`);
    } else {
      navigate(`/${e.key}`);
    }
  };

  const renderMenuItems = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => {
      if (item.items) {
        if (item.type === "submenu") {
          return (
            <Menu.SubMenu key={item.key} title={item.label}>
              {renderMenuItems(item.items)}
            </Menu.SubMenu>
          );
        } else if (item.type === "group") {
          return (
            <Menu.ItemGroup key={item.key} title={item.label}>
              {renderMenuItems(item.items)}
            </Menu.ItemGroup>
          );
        }
      }
      return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
    });
  };

  return (
    <div className="flex h-14 w-full justify-center">
      <Menu
        className="font-poppins row pt-2 pb-0"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <img className="h-12 mr-auto pb-2" src={logo} alt="AEHL" />
        {renderMenuItems(items)}
      </Menu>
    </div>
  );
};

export default NavBar;
