import Link from "next/link";

type IrLinks = {
  label: string;
  link: string;
};

const IrLink: IrLinks[] = [
  {
    label: "Our Values",
    link: "/ir/our_values",
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

export default function irLinks() {
  return (
      <ul>
        {IrLink.map((entry, index) => {
          return (
            <li key={index} className="py-0.5">
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
  );
}
