import React, { useEffect } from 'react';

interface QModComponentProps {
    tool: string;
}

const QModComponent: React.FC<QModComponentProps> = ({tool}) => {
  useEffect(() => {
    // Load the QMod stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/wp-content/themes/generatepress/css/qmod-style.css';
    document.head.appendChild(link);

    // Load the QMod script
    const script = document.createElement('script');
    script.id = 'qmod';
    script.type = 'application/javascript';
    script.src = 'https://qmod.quotemedia.com/js/qmodLoader.js';
    script.setAttribute('data-qmod-wmid', '101150');
    document.body.appendChild(script);

    return () => {
      // Clean up the added elements if needed
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-qmod-tool={tool}
      data-qmod-params={`{
        "lang":"en",
        "socialshare":true,
        "resultsPerPage":10,
        "excludeTopics":"NONCOMPANY",
        "noSrc":"qmr",
        "summLen":100,
        "showLogo":false,
        "lowHigh":false,
        "videonews":true,
        "showVideos":true,
        "showSharingButtons":true,
        "showThumbnail":false,
        "dateHeadings":true,
        "yearSelect":false,
        "yearSelectNumYears":2,
        "yearSelected":0,
        "datePickerFormat":"Y-m-d",
        "symbol":"AEHL"
      }`}
      className="qtool"
    ></div>
  );
};

export default QModComponent;