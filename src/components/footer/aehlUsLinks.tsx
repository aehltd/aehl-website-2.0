import Link from "next/link";

type aehlUsLinks = {
  label: string;
  link: string;
};

const aehlUsLink: aehlUsLinks[] = [
  {
    label: "About AEHL US",
    link: "/aehl-us/corporate-overview",
  },
  {
    label: "Products",
    link: "/aehl-us/products",
  },
];

export default function aehlUsLinks() {
  return (
      <ul>
        {aehlUsLink.map((entry, index) => {
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
