import Meow from '../assets/icon-meow.svg';

const Claim = () => {
  return (
    <div className=" md:m-auto ">
      <div className="m-auto flex flex-row gap-2">
        <span className="uppercase font-bold w-full font-size-lg md:text-3xl flex text-dark text-center m-auto">
        TOKEN TO CLAIM
        </span>
        <div className="flex flex-row gap-2">
            <img src={Meow} alt="Claim" className="w-12 h-12" />
            <span className="font-bold text-3xl text-dark">100</span>
        </div>
      </div>
      <div className="m-auto self-center">
        <button className="flex md:flex-row gap-4 justify-center items-center border-2 rounded-lg border-dark bg-text-btn px-8 py-2 m-2 ">
            <img src={Meow} alt="Claim" className="w-8 h-8" />
            <span className="font-bold text-2xl text-dark">CLAIM</span>
        </button>
      </div>
    </div>
  )
}

export default Claim