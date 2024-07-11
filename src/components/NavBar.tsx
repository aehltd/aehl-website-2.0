import React, { useState, useLayoutEffect } from "react";
import { Menu, Drawer, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/nav-logo.png";

type MenuItem = Required<MenuProps>["items"][number];
// type MenuItem = {
//   key: string;
//   label: React.ReactNode;
//   children?: MenuItem[];
//   type?: "group";
//   disabled?: boolean;
// };

const items: MenuItem[] = [
  { key: "", label: "Home" },
  {
    key: "aehl-us",
    label: "Texas Energy",
    children: [
      { key: "aehl-us/overview", label: "Overview" },
      { key: "aehl-us/products", label: "Our Products" },
      { key: "aehl-us/metrics", label: "Real Time Metrics" },
    ],
  },
  {
    key: "aehl-kylin",
    label: "Kylin Cloud",
    children: [
      { key: "aehl-kylin/overview", label: "Overview" },
      { key: "aehl-kylin/value", label: "Value Proposition" },
      { key: "aehl-kylin/model", label: "Business Model" },
    ],
  },
  {
    key: "ir",
    label: "Investor Relations",
    children: [
      {
        key: "finances",
        label: "Finances",
        type: "group",
        children: [
          { key: "ir/finances#stock", label: "Stock Information" },
          { key: "ir/finances#sec", label: "SEC Filings" },
        ],
      },
      {
        key: "news",
        label: "News and Media",
        type: "group",
        children: [
          { key: "ir/news#press", label: "Press Releases" },
          { key: "ir/news#presentation", label: "Corporate Presentation" },
        ],
      },
      { key: "ir/governance", label: "Corporate Governance" },
      { key: "ir/board", label: "Board of Directors" },
      { key: "ir/faq", label: "Investor FAQs" },
    ],
  },
  { key: "contact-us", label: "Contact Us" },
];

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState("");
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
    setVisible(false);
    const [path, hash] = e.key.split("#");
    if (hash) {
      navigate(`/${path}#${hash}`);
    } else {
      navigate(`/${e.key}`);
    }
  };

  const openDrawer = () => {
    setVisible(true);
  }
  const closeDrawer = () => {
    setVisible(false);
  }

  return (
    <div className="flex justify-center">
      <div className="flex row p-0 w-full h-14 2xl:h-20 justify-between">
        <div className="flex items-center pl-4 py-2">
          <img src={logo} alt="logo" className="h-full w-full"/>
        </div>
        <div className="md:hidden"> {/* Show on mobile, hide on desktop */}
          <MenuOutlined className="h-full text-2xl pr-4" onClick={openDrawer} />
        </div>

        <div className="hidden md:flex">
          <Menu
            className="font-poppins h-full pt-2 2xl:pt-4 2xl:text-2xl min-w-96"
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
      <div className="md:hidden">
        <Drawer
            placement="right"
            closable={true}
            onClose={closeDrawer}
            open={visible}
            >
            <Menu
              className="font-poppins !border-0"
              onClick={handleClick}
              selectedKeys={[current]}
              mode="inline"
              items={items}
            />
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
