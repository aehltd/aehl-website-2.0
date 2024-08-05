import React from "react";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

type presentationItem = {
  date: string;
  name: string;
  url: string;
};
const presentations: presentationItem[] = [
  {
    date: "8/1/2024",
    name: "AEHL Company Presentation August 2024",
    url: "https://aehltd.squarespace.com/s/AEHL-Company-Presentation-August-2024-v2.pptx"
  },
  {
    date: "6/28/2024",
    name: "AEHL Company Presentation June 2024",
    url: "https://aehltd.squarespace.com/s/AEHL-Company-Presentation-June-2024.pptx",
  },
];
const PresentationsRow = () => {
  return (
    <div className="overflow-x-auto">
      <table className="max-w-full divide-y divide-gray-200 table-auto w-full">
        <thead className="bg-slate-400 text-white">
          <tr>
            <th className="px-6 py-3 text-start xsmalltext text-white font-medium uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-start xsmalltext text-white font-medium uppercase tracking-wider">
              Event Details
            </th>
            <th className="px-6 py-3 text-end xsmalltext text-white font-medium uppercase tracking-wider">
              Download
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {presentations.map((presentation, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-slate-100"}
            >
              <td className="px-6 py-3 whitespace-nowrap text text-black text-start">
                {presentation.date}
              </td>
              <td className="px-6 py-3 whitespace-nowrap text text-black text-start">
                {presentation.name}
              </td>
              <td className="flex flex-row-reverse px-6 py-3 whitespace-nowrap items-center justify-start space-x-10">
                <Button
                  type="link"
                  icon={<DownloadOutlined />}
                  href={presentation.url}
                  target="_blank"
                  size="large"
                ></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div>
    //   <iframe
    //     src="https://www.dropbox.com/scl/fi/k14ych2noa7885kidwd9s/AEHL-Company-Presentation-June-2024.pdf?rlkey=xxfjf7hw738ne3n2ut5qob78v&st=j74xnfm7&raw=1"
    //     width="100%"
    //     height="600px"
    //     title="AEHL Company Presentation June 2024"
    //     className="border rounded shadow-lg mt-4"
    //   />
    //   {/* SQUARESPACE LINK */}
    //   {/* https://static1.squarespace.com/static/65f5178b7e5b446365b2d70a/t/66a29ca50148a07cea85a615/1721932966168/AEHL+Company+Presentation+June+2024.pdf */}
    // </div>
  );
};

export default PresentationsRow;
