import { RiReactjsLine } from "react-icons/ri";
import { SiSolidity } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiEthers } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Solidity */}
        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiSolidity className="text-7xl text-gray-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Solidity
          </span>
        </div>

        {/* JavaScript */}
        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <FaJsSquare className="text-7xl text-yellow-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            JavaScript
          </span>
        </div>

        {/* React */}
        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            React.js
          </span>
        </div>

        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiEthers className="text-7xl text-gray-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Ethers.js
          </span>
        </div>

        {/* Node.js */}
        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            Node.js
          </span>
        </div>

        {/* MongoDB */}
        <div className="relative group rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm p-2 rounded-lg">
            MongoDB
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
