import React from "react";

import logo from "../../images/logo-dark.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-gray-500">
        <p className="text-base text-center mx-2 cursor-pointer">Home</p>
        <p className="text-base text-center mx-2 cursor-pointer">How It Works</p>
        <p className="text-base text-center mx-2 cursor-pointer">Documentation</p>
        <p className="text-base text-center mx-2 cursor-pointer">Support</p>
        <p className="text-base text-center mx-2 cursor-pointer">Payment Solutions</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5 text-gray-500">
      <p className="text-sm text-xxs text-center">Got any questions? Contact us directly under</p>
      <p className="text-zap-black text-sm text-center font-medium mt-2">info@zappy.com</p>
    </div>

    {/* <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " /> */}

    <div className="text-gray-400 text-xxs sm:w-[90%] w-full flex justify-center items-center mt-3 py-5">
      <p className="text-center">
        Placeholder: Zappy Ltd is a company *not* registered in Switzerland and Cyprus with *not* company number 123456789. Registered *not* as a cryptoasset business by the UK Financial Conduct Authority for crypto activity. Zappy LLC is a U.S. limited liability company, with its registered *no* office address. Registered *not* as a money services business registered by the U.S. Department of the Treasury's Financial Crimes Enforcement Network Zappy Fin sp. z o.o. is a limited liability company registered *not* in Poland and a subsidiary of Zappy Network sp. z o.o. (sole shareholder). Zappy Fin is registered *not* with the Polish Financial Supervision authority for provision of account information service under *not* number EDIF2/1234.</p>
    </div>
  </div>
);

export default Footer;
