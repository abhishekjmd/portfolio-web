import React from "react";
import RadioTower from "../icons/radio-tower";
import Remote from "../icons/remote";
import SourceControl from "../icons/source-control";
import Bell from "../icons/bell";
import CloudUpload from "../icons/cloud-upload";
import Info from "../icons/info";
import Warning from "../icons/warning";

const Footer = () => {
  return (
    <div className="flex w-full justify-between slim text-[#a9b1d6] text-sm border-t-2 border-[#1b1e2e]">
      <div className="flex justify-center items-center gap-1">
        <div className="px-2 py-1 bg-[#3d59a1] hover:bg-[#282e44]">
          <Remote />
        </div>
        <div className="flex justify-center items-center p-1 px-2 hover:bg-[#282e44]">
          <SourceControl height={18} width={18} />
          <span className="ml-1">main*</span>
        </div>
        <div className="hidden lg:block mx-2 mr-4">
          <CloudUpload />
        </div>
        <div className="hidden  lg:flex gap-1">
          <div className="flex justify-center text-xs">
            <Info />
            <span className="ml-1">0</span>
          </div>
          <div className="flex justify-center text-xs">
            <Warning />
            <span className="ml-1">0</span>
          </div>
        </div>
      </div>
      <div className="flex px-2 justify-center items-center gap-3">
        <div className="hidden lg:flex gap-6 justify-center items-center">
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>CRLF</span>
          <span>&#123; &#125; TypeScript JSX</span>
        </div>
        <div className="flex justify-center items-center py-1 px-2 hover:bg-[#282e44]">
          <RadioTower />
          <span className="ml-1">Go Live</span>
        </div>
        <div className="hover:bg-[#282e44] py-1 px-2">
          <Bell />
        </div>
      </div>
    </div>
  );
};

export default Footer;
