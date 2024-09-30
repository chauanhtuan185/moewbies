import Logo from "./assets/logo.svg";
import Meow from "./assets/icon-meow.svg";
import Hero from "./assets/hero.svg";
import BgX from "./assets/bg-x.svg";
import ConnectButton from "./pages/home/Connect";

function App() {
  return (
    <div className='h-screen w-screen bg-[url("./assets/background.png")] overflow-hidden no-wrap'>
      <div className="grid grid-rows-[20%_10%_15%_20%_35%] h-full">
        {/* Hàng 1: Logo */}
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Logo" className="h-[50%] object-contain select-none" />
        </div>
        
        {/* Hàng 2: 3 buttons */}
        <div className="flex items-center flex-row justify-center gap-5 md:gap-20 ">
        <button className="bg-dark text-text-btn px-8 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300 font-weight-900 font-size-lg ">
          <img src={Meow} alt="connect" className="w-4 h-4 select-none user-select-none" />
          <span className="font-weight-900 text-sm md:text-3xl font-size-lg">Connect</span>
        </button>
          <button className="bg-dark text-text-btn px-8 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300 font-weight-900 text-lg font-size-lg">
          <img src={Meow} alt="eligibilities" className="w-4 h-4 select-none user-select-none" />
          <span className="font-weight-900 text-sm md:text-3xl font-size-lg">ELIGIBILITIES</span>
        </button>
          <button className="bg-dark text-text-btn px-8 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300 font-weight-900 text-lg font-size-lg">
          <img src={Meow} alt="claim" className="w-4 h-4 select-none user-select-none" />
          <span className="font-weight-900 text-sm md:text-3xl font-size-lg">CLAIM</span>
        </button>
        </div>
        
        {/* Hàng 3: 1 component */}
        <div className="h-full ">
          <ConnectButton />
        </div>
        
        {/* Hàng 4 */}
        <div className="block">
          {/* Nội dung cho hàng 4 */}
        </div>
        
        {/* Hàng 5: 2 ảnh */}
        <div className="grid md:grid-cols-2 gap-4 overflow-hidden content-center relative grid-cols-1 md:gap-0 md:content-start md:relative md:justify-center">
          <div className="md:flex md:h-[90%] hidden lg:block items-center md:justify-center md:items-start">
            <img src={BgX} alt="BgX" className="object-contain absolute bottom-0 left-0 select-none user-select-none" />
          </div>
          <div className="flex md:h-[90%] h-full items-center md:justify-center md:items-start">
            <img src={Hero} alt="Hero" className="object-contain absolute bottom-0 right-0 select-none user-select-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
