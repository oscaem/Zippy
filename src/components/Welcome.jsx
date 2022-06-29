import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiVisa } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { sendTransaction, isLoading } = useContext(TransactionContext);

  const handleSubmit = () => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-black text-gradient py-1">
            Send money internationally
          </h1>
          <p className="text-left mt-5 text-gray-500 font-light md:w-9/12 w-11/12 text-base">
            Without intermediaries, instant, anonymous* and for a flat 1$ fee.
          </p>

          {/* {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>

          )} */}

          {/* CoverageCards Images */}

          <div className="payment-methods grid-cols-2 mt-7">
            <div className="payment-method">
              <div className="payment-method-image-container">
                <img src="./images/visa.svg" alt="Visa Payment Option" />
              </div>
              <span className="payment-method-text">VISA</span>
            </div>
            <div className="payment-method">
              <div className="payment-method-image-container">
                <img src="./images/mastercard.svg" alt="Mastercard Payment Option" />
              </div>
              <span className="payment-method-text">Mastercard</span>
            </div>
            <div className="payment-method">
              <div className="payment-method-image-container">
                <img src="./images/apple-pay.svg" alt="Apple Pay Payment Option" />
              </div>
              <span className="payment-method-text">Apple Pay</span>
            </div>
            <div className="payment-method">
              <div className="payment-method-image-container">
                <img src="./images/transfer-manual.svg" alt="Manual Bank Transfer Payment Option" />
              </div>
              <span className="payment-method-text">Bank Transfer</span>
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/* SEND INPUT FIELD */}
          <div className="text-white p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">

            {/* SEND CARD */}            
            <Input className="" placeholder="Send Amount" name="amount" type="number" handleChange={handleChange} id="Amount" />
            <Input placeholder="Receiver Country" name="keyword" type="text" handleChange={handleChange} id="Country" />
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 border-white flex justify-center items-center">
                    <SiVisa fontSize={50} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  {/* <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p> */}
                  <Input class="border-2 border-solid border-white" placeholder="Card Number" name="Valid trough" type="text" id="CardNumber" />
                </div>
                <div className="float">
                  <table>
                    <tr>
                      <td>
                        <Input placeholder="00/00" name="Valid trough" type="text" />
                      </td>
                      <td>
                        <Input placeholder="CVC" name="CVC" type="text" />
                      </td>
                    </tr>
                  </table>

                  {/* <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p> */}
                </div>
              </div>
            </div>

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-yellow-300 font-bold w-full mt-2 border-[px] p-2 border-[#bababa6d] hover:bg-yellow-400 rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Welcome;
