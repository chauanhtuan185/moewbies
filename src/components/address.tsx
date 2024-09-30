import Meow from '../assets/icon-meow.svg';
import Claim from './Claim';

interface AddressProps {
    address: string;
    isLoading: boolean;
    handleClick: () => void;
    isClaim: boolean;
}

const Address = ({address, isLoading, handleClick, isClaim}: AddressProps) => {
  return (
    <>
    {String(address).length > 0 ? (
          <div className="flex flex-col gap-4 md:m-auto justify-center">
          <div className="m-auto">
          <span className="uppercase font-bold w-full font-size-lg md:text-3xl flex text-dark text-center m-auto">
            YOU ARE ELIGIBLE!
          </span>
          </div>
          <div className="m-auto bg-text-btn text-light rounded-md uppercase font-bold hover:bg-primary hover:text-text-btn lg:text-3xl flex items-center gap-2 self-center border-2 border-gray-700 px-6 py-2 transition-all duration-300 font-weight-900 text-lg font-size-lg">
            <img src={Meow} alt="Connect" className="w-8 h-8 select-none" />
            <span className={"font-weight-900 lg:text-3xl font-size-lg"}>
              {address}
            </span>
          </div>
          {isClaim ? <Claim /> : null}
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
    </>
  )
}

export default Address
