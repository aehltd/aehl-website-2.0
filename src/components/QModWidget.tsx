import React from 'react';

interface QModComponentProps {
    tool: string,
    params: string,
}

const QModComponent: React.FC<QModComponentProps> = ({tool, params}) => {
  return (
    <div
      data-qmod-tool={tool}
      data-qmod-params={params}
      className="qtool"
    ></div>
  );
};

export default QModComponent;