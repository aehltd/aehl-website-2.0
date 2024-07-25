import React from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: FAQItem[] = [
  {
    question: "What is Antelope Enterprise's business?",
    answer:
      "Antelope Enterprise engages in two businesses: (1) an energy transmission in the US, via its wholly-owned subsidiary, AEHL US LLC, and (2) livestreaming ecommerce in China, via its 51% ownership position in Kylin Cloud.",
  },
  {
    question:
      "What are Antelope Enterprise's ticker symbol, exchange, and CUSIP?",
    answer:
      'Antelope Enterprise\'s common stock is traded on the NASDAQ Global Market under the symbol "AEHL." The CUSIP number is G041JN122 for the common stock.',
  },
  {
    question: "When was Antelope Enterprise founded?",
    answer:
      "Antelope Enterprise, formerly known as China Ceramics Co., Ltd, was founded on September 30, 1993 under the laws of the PRC. On October 14, 2020, the Company announced its name change from China Ceramics to Antelope Enterprise Holdings Limited to reflect its entry into the livestreaming ecommerce business among other high-tech businesses. On April 28, 2023, the Company consummated the sale of its legacy ceramic tile building materials business.",
  },
  {
    question: "How many of the Company's shares are outstanding?",
    answer:
      "As of June 28, 2024, there were approximately 8.9 million common shares outstanding.",
  },
  {
    question: "When is the next earnings release?",
    answer:
      "As a foreign private issuer, Antelope Enterprise's first half earnings reports are scheduled to be released approximately twelve weeks following the first half of its fiscal year (June 30) and its second half and full year earnings reports are schedule to be released approximately sixteen weeks following its fiscal year-end (December 31). All earnings releases are posted on our website.",
  },
  {
    question: "How can I get on an e-mail list to receive all press releases?",
    answer:
      "To automatically receive e-mail alerts for the information categories that interest you, please click on E-mail Alerts.",
  },
  {
    question:
      "Who is Antelope Enterprise' independent Certified Public Accountant?",
    answer: "ARK Pro CPA & Co is Antelope Enterprise’s independent auditor.",
  },
  {
    question: "Who is Antelope Enterprise' outside legal counsel?",
    answer:
      "Hunter Taubman Fischer & Li LLC is Antelope Enterprise' outside legal counsel.",
  },
  {
    question: "Who is Antelope Enterprise' investor relations firm?",
    answer:
      "Precept Investor Relations LLC is Antelope Enterprise's investor relations firm. To contact, email david.rudnick@preceptir.com or call 646-694-8538.",
  },
  {
    question: "Who is Antelope Enterprise' transfer agent?",
    answer:
      "Transhare Corporation acts as Antelope Enterprise' transfer agent - 17755 US Highway 19 North, Clearwater, FL 33764; 303-662-1112.",
  },
];

const IRFAQPage = () => {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">FAQ</h1>
        </div>
      </div>
      <ul className="flex row flex-col space-y-8">
        {FAQ.map((item, index) => (
          <li key={index} className="flex flex-col">
            <h2>{index + 1}. {item.question}</h2>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IRFAQPage;
