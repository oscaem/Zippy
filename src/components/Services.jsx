import React from "react";
import { BsShieldFillCheck, BsCash, BsPersonBadge } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-5 m-2 cursor-pointer hover:shadow-xl hover:bg-yellow-400">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-gray-500 text-lg">{title}</h3>
      <p className="mt-1 text-gray-500 text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="p-10 flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Smarter Remittance
          <br />
          with Zappy.
        </h1>
        <p className="text-left my-2 text-gray-500 font-light md:w-9/12 w-11/12 text-base">
          Leveraging the power of Blockchain and Zero-Knowledge Rollups to revolutionise International Remittance without On/Off Ramps.
          <br />
          <a className="text-black text-xs" href="url">Learn more about how we scale remittance with zkRollups.</a>
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#424040]"
          title="Smart Identity Verification"
          icon={<BsPersonBadge fontSize={21} className="text-white" />}
          subtitle="No Account required. Send with Quick-KYC. Transactions are processed under a Zero-Knowledge protocol."
        />
        <ServiceCard
          color="bg-[#434040]"
          title="Trustless"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Crosschain transactions are served without middleman. Send Money without interference of foreign institutions."
        />
        <ServiceCard
          color="bg-[#434040]"
          title="Save up to 95% in fees"
          icon={<BsCash fontSize={21} className="text-white" />}
          subtitle="Transaction fees are calculated on a flat rate of 1$ for any volume*. Pay less than in traditional remittance."
        />
      </div>
    </div>
  </div>
);

export default Services;
