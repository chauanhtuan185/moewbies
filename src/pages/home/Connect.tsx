import { useState } from "react";
import ParasolToken from "../../assets/parasol-token.svg";
import ParasolTokenRight from "../../assets/right-parasol-token.svg";
import Meow from "../../assets/icon-meow.svg";
import { useWindowSize } from "../../hooks/windowSize";
import Address from "../../components/address";

import { connector , addReturnStrategy } from '../../connector';
import { openLink } from "../../utils";
import { walletsListQuery } from "../../state/wallets-list";
import { authPayloadQuery } from "../../state/auth-payload";
import { useRecoilValueLoadable } from 'recoil';
const Connect = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const { width } = useWindowSize();
  const [isClaim, setIsClaim] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
  
      // Tạo deep link kết nối với ví TON
      const wallets = await connector.getWallets(); // Lấy danh sách ví hỗ trợ
  
      if (wallets.length > 0) {
        // Nếu có ví hỗ trợ
        const universalLink = wallets[1].universalLink; 
  
        openLink(addReturnStrategy(universalLink, 'none'), '_blank');
      } else {
        console.error('No wallet found');
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Connection failed", error);
      notification.error({
        message: 'Connection failed',
        description: 'Unable to connect to the wallet. Please try again.',
      });
    }
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
