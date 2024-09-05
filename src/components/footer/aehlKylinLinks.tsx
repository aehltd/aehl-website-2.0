import Link from "next/link";

type aehlKylinLinks = {
  label: string;
  link: string;
};

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

export default function aehlKylinLinks() {
  return (
      <ul>
        {aehlKylinLink.map((entry, index) => {
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
