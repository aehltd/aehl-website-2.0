import React from "react";
import arrow from "../assets/icons/arrow.png";
import endToEndModel from "../assets/icons/our-method.png";
import traditionalModel from "../assets/icons/trad-model.png";
import naturalGas from "../assets/icons/natural-gas.png";
import gasGenerator from "../assets/icons/gas-generator.png";
import dataCenter from "../assets/icons/data-center.png";
import hpc from "../assets/icons/hpc.png";
import powerGrid from "../assets/icons/power-grid.png";
import utility from "../assets/icons/utility.png";

type ChainItem = {
  name: string;
  image: string;
};

type Chain = {
  name: string;
  image: string;
  items: ChainItem[];
};

const endToEndChain: Chain = {
  name: "Our End-to-End Model",
  image: endToEndModel,
  items: [
    {
      name: "Natural Gas",
      image: naturalGas,
    },
    {
      name: "Gas Generator",
      image: gasGenerator,
    },
    {
      name: "Data Center",
      image: dataCenter,
    },
    {
      name: "HPC",
      image: hpc,
    },
  ],
};

const traditionalChain: Chain = {
  name: "Traditional Model",
  image: traditionalModel,
  items: [
    {
      name: "Natural Gas",
      image: naturalGas,
    },
    {
      name: "Gas Generator",
      image: gasGenerator,
    },
    {
      name: "Power Grid",
      image: powerGrid,
    },
    {
      name: "Utility",
      image: utility,
    },
    {
      name: "Data Center",
      image: dataCenter,
    },
    {
      name: "HPC",
      image: hpc,
    },
  ],
};

interface ChainProps {
  chain: Chain;
}

const InfrastructureChain: React.FC<ChainProps> = ({ chain }) => {
  return (
    <div className="flex-grow bg-slate-400 rounded-lg p-2">
      <div className="flex items-center space-x-2">
        <img src={chain.image} alt={chain.name} className="w-6 object-scale-down" />
        <p className="text-white text-sm text-center">{chain.name}</p>
      </div>
      <ul className="flex justify-between mt-2 mx-2">
        {chain.items.map((item, index) => (
          <React.Fragment key={item.name}>
            <li className="flex flex-col items-center h-16 justify-center">
              <div className="flex items-center justify-center h-8 w-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-scale-down"
                />
              </div>
              <p className="text-white minitext text-center">{item.name}</p>
            </li>
            {index < chain.items.length - 1 && (
              <li className="flex mx-2 h-16 items-center">
                <img src={arrow} alt="arrow" className="w-6 object-scale-down" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export { InfrastructureChain, endToEndChain, traditionalChain };
