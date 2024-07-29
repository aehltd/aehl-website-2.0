import React from 'react';

interface QModComponentProps {
    tool: string,
    params: string,
    datatracked: boolean,
}

const QModComponent: React.FC<QModComponentProps> = ({tool, params, datatracked}) => {
  return (
    <div
      data-qmod-tool={tool}
      data-qmod-params={params}
      className="qtool"
      data-qmod-tracked={datatracked}
    ></div>
  );
};

export default QModComponent;