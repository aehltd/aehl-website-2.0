import { Divider } from "antd";
import Link from "next/link";

type IrLinks = {
  label: string;
  link: string;
};

type aehlUsLinks = {
  label: string;
  link: string;
};

type aehlKylinLinks = {
  label: string;
  link: string;
};

const aehlUsLink: aehlUsLinks[] = [
  {
    label: "About AEHL US",
    link: "/aehl-us/overview",
  },
  {
    label: "Products",
    link: "/aehl-us/products",
  },
];
const aehlKylinLink: aehlKylinLinks[] = [
  {
    label: "About AEHL Kylin",
    link: "/aehl-kylin/overview",
  },
  {
    label: "Business Model",
    link: "/aehl-kylin/model",
  },
];

const IrLink: IrLinks[] = [
  {
    label: "Investor Relations",
    link: "/ir/overview",
  },
  {
    label: "Press Releases",
    link: "/ir/press-releases",
  },
  {
    label: "Events and Presentations",
    link: "/ir/events-presentations",
  },
  {
    label: "SEC Filings",
    link: "/ir/sec-filings",
  },
  {
    label: "Stock Price",
    link: "/ir/stock-information",
  },
  {
    label: "Board of Directors",
    link: "/ir/board",
  },
  {
    label: "Committee Composition",
    link: "/ir/committee-composition",
  },
  {
    label: "Diversity Matrix",
    link: "/ir/diversity-matrix",
  },
  {
    label: "Governance Documents",
    link: "/ir/documents",
  },
  {
    label: "FAQs",
    link: "/ir/faqs",
  },
  {
    label: "IR Contact",
    link: "/ir/contact-ir",
  },
];

export default function Footer() {
  return (
    <div className="bg-gray-100 w-full flex items-center justify-center">
      <div className="flex flex-col row items-center">
        <div className="flex w-full justify-between items-center">
          <h2 className="font-bold tracking-widest">
            Antelope Enterprise Holdings Limited
          </h2>
          <img
            src="https://res.cloudinary.com/aehl/image/upload/v1724428463/%E5%B0%8F%E9%BB%91%E8%89%B2.jpg_dsu0fh.png"
            alt="logo"
          />
        </div>
        <Divider className="my-2" />

        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="text-start px-5">
            <ul className="list-none">
              <li className="py-2">
                <h3 className="font-semibold">AEHL US</h3>
              </li>
              {aehlUsLink.map((entry) => {
                return (
                  <li className="py-0.5">
                    <Link
                      href={entry.link}
                      className="text-midnight2 hover:underline hover:font-bold"
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              })}

              <li className="py-2">
                <h3 className="font-semibold">AEHL Kylin</h3>
              </li>
              {aehlUsLink.map((entry) => {
                return (
                  <li className="py-0.5">
                    <Link
                      href={entry.link}
                      className="text-midnight2 hover:underline hover:font-bold"
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="text-start px-5">
            <ul className="list-none">
              <li className="py-2">
                <h3 className="font-semibold">Investor</h3>
              </li>
              {IrLink.map((entry) => {
                return (
                  <li className="py-0.5">
                    <Link
                      href={entry.link}
                      className="text-midnight2 hover:underline hover:font-bold"
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-start py-2">
            <div className="text-start">
              <p className="p-2">Phone: +1 (838) 500 - 8888</p>
              <p className="p-2">
                Office: Suite 7540, The Empire State Building, 350 Fifth Ave,
                New York, NY, 10118
              </p>
            </div>
          </div>
        </div>

        <Divider className="my-2" />

        <div className="flex w-full justify-between space-x-16">
          <div className="text-start">
            <p>Copyright ©2024 AEHL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
