import { useState } from "react";
import { Menu, Drawer, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    { key: "/", label: <Link href="/">Home</Link> },
    {
      key: "/aehl-us",
      label: "AEHL US",
      children: [
        {
          key: "/aehl-us/overview",
          label: <Link href="/aehl-us/overview">Overview</Link>,
        },
        {
          key: "/aehl-us/products",
          label: <Link href="/aehl-us/products">Our Products</Link>,
        },
        // {
        //   key: "/aehl-us/metrics",
        //   label: <Link href="/aehl-us/metrics">Real Time Metrics</Link>,
        // },
      ],
    },
    {
      key: "aehl-kylin",
      label: "Kylin Cloud",
      children: [
        {
          key: "/aehl-kylin/overview",
          label: <Link href="/aehl-kylin/overview">Overview</Link>,
        },
        {
          key: "/aehl-kylin/model",
          label: <Link href="/aehl-kylin/model">Business Model</Link>,
        },
      ],
    },
    { key: "/ir", label: <Link href="/ir/overview">Investor Relations</Link> },
    { key: "/contact-us", label: <Link href="/contact-us">Contact Us</Link> },
  ];

export default function NavBar({current, isIRSection}: {current: string, isIRSection: boolean}) {
  const [visible, setVisible] = useState(false);

  const currPage = isIRSection ? "/ir" : current;

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex row p-0 h-14 justify-between">
        <div className="flex items-center pl-4 py-2">
            <img
              src = "https://res.cloudinary.com/aehl/image/upload/v1724428463/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg_dsu0fh.png"
              alt = "logo"
              className = "h-full w-full"
            />
        </div>
        <div className="md:hidden">
          <MenuOutlined className="h-full pr-4" onClick={openDrawer} />
        </div>

        <div className="hidden md:flex">
          <Menu
            className="text-base font-poppins h-full pt-2 min-w-0 flex-auto bg-gray-200"
            selectedKeys={[currPage]}
            mode="horizontal"
            disabledOverflow
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
            selectedKeys={[currPage]}
            mode="inline"
            items={items}
          />
        </Drawer>
      </div>
    </div>
  );
};