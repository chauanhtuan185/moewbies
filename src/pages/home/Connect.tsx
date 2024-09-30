import { useState } from "react";
import ParasolToken from "../../assets/parasol-token.svg";
import ParasolTokenRight from "../../assets/right-parasol-token.svg";
import Meow from "../../assets/icon-meow.svg";
import { useWindowSize } from "../../hook/windowSize";
import Address from "../../components/address";

const Connect = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const { width } = useWindowSize();

  const [isClaim, setIsClaim] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAddress("0x12345678901235677");
      setIsClaim(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col md:bg-light border-b rounded-lg border-gray-900 md:w-3/4 md:mx-auto w-full mx-5">
      {width > 768 ? (
        // Desktop
        <div className="flex flex-row gap-4 ">
          <img src={ParasolToken} alt="Parasol Token" className="self-start" />
        {/* Call Address component */}
        <Address address={address} isLoading={isLoading} handleClick={handleClick} isClaim={isClaim} />
        <img
          src={ParasolTokenRight}
          alt="Parasol Token"
          className="w-48 h-auto self-end mb-10"
          />
        </div>
      ) : (
        // Mobile
        <div className="flex flex-col">
          {String(address).length > 0 ? (
            <div
            className="m-auto bg-text-btn text-light rounded-md uppercase font-bold hover:bg-primary hover:text-text-btn lg:text-3xl flex items-center gap-2 self-center 
          border-2 border-gray-700 px-6 py-2 transition-all duration-300 font-weight-900 text-lg font-size-lg"
          >
            <img src={Meow} alt="Connect" className="w-8 h-8 select-none" />
            <span className={"font-weight-900 lg:text-3xl font-size-lg"}>
              {address}
            </span>
          </div>
        ) : (
          <button
            onClick={handleClick}
            className="m-auto bg-text-btn text-light rounded-md uppercase font-bold hover:bg-primary hover:text-text-btn lg:text-lg flex items-center gap-2 self-center 
          border-2 border-gray-700 px-6 py-2 transition-all duration-300 font-weight-900 text-lg font-size-lg"
          >
            <img
              src={Meow}
              alt="Connect"
              className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
            />
            <span className={"font-weight-900 text-lg font-size-lg"}>
              {isLoading ? "Connecting..." : "Connect"}
            </span>
          </button>
        )}
        </div>
      )}
    </div>
  );
};

export default Connect;
