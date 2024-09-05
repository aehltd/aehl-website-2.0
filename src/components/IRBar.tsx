import { useState } from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  // {
  //   key: "/ir/overview",
  //   label: <Link href="/ir/overview">Overview</Link>,
  // },
  {
    key: "/ir/",
    label: <Link href="/ir/press-releases" className="hover:text-black">Newsroom</Link>,
    children: [
      {
        key: "/ir/press-releases",
        label: <Link href="/ir/press-releases">Press Releases</Link>,
      },
      {
        key: "/ir/events-presentations",
        label: (
          <Link href="/ir/events-presentations">Events and Presentations</Link>
        ),
      },
    ],
  },
  {
    key: "/ir/sec-filings",
    label: <Link href="/ir/sec-filings">SEC Filings</Link>,
  },
  {
    key: "/ir/stock-information",
    label: <Link href="/ir/stock-information">Stock Price</Link>,
  },
  {
    key: "/ir/governance",
    label: <Link href="/ir/board" className="hover:text-black">Corporate Governance</Link>,
    children: [
      {
        key: "/ir/board",
        label: <Link href="/ir/board">Board of Directors</Link>,
      },
      {
        key: "/ir/committee-composition",
        label: (
          <Link href="/ir/committee-composition">Committee Composition</Link>
        ),
      },
      {
        key: "/ir/diversity-matrix",
        label: <Link href="/ir/diversity-matrix">Diversity Matrix</Link>,
      },
      {
        key: "/ir/documents",
        label: <Link href="/ir/documents">Governance Documents</Link>,
      },
    ],
  },
  {
    key: "/ir/faqs",
    label: <Link href="/ir/faqs">FAQs</Link>,
  },
  {
    key: "/ir/contact-ir",
    label: <Link href="/ir/contact-ir">IR Contact</Link>,
  },
];

const itemsInline: MenuItem[] = [
  {
    label: "Investor Relations",
    key: "/ir-sections",
    children: items,
  },
];

export default function IRBar({ current }: { current: string }) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleClick = (e: any) => {
    setOpenKeys([]);
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="flex row p-0 justify-between">
        <Link
          href="/ir/overview"
          className="text-start items-center md:flex hidden"
        >
          <h2 className="font-semibold tracking-wider">Investor Relations</h2>
        </Link>
        <div className="hidden md:flex">
          <Menu
            className="text-base font-poppins h-full min-w-0 flex-auto bg-white "
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            disabledOverflow
            items={items}
            style={{ borderBottom: "none" }}
          />
        </div>
        <div className="md:hidden flex items-center flex-col w-full">
          <Menu
            className="font-poppins !border-0 w-full"
            onClick={handleClick}
            selectedKeys={[current]}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys as string[])}
            mode="inline"
            items={itemsInline}
          />
        </div>
      </div>
    </div>
  );
}
