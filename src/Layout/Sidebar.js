import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* logo */}
      <Link to="/">
        <div className="text-4xl font-semibold basis-[80px] flex justify-center items-center">
          <span className="text-gray-950">Kids</span>
          <span className="text-white">App</span>
        </div>
      </Link>
      {/* side menu */}
      <div className="flex flex-col gap-3 flex-grow mx-auto items-start justify-start pt-20">
        <Link to="/p2">
          <div className="flex gap-2 cursor-pointer ">
            <img src="/images/calendar.png" alt="" />
            <span className="text-gray-300 hover:text-white">Dzisiaj</span>
          </div>
        </Link>
        <Link to="/p4">
          <div className="flex gap-2 cursor-pointer ">
            <img src="/images/message.png" alt="" />
            <span className="text-gray-300 hover:text-white">Komunikacja</span>
          </div>
        </Link>
        <Link to="/p3">
        <div className="flex gap-2 cursor-pointer ">
          <img src="/images/person.png" alt="" />
          <span className="text-gray-300 hover:text-white">Kadra</span>
        </div>
        </Link>
        <div className="flex gap-2 cursor-pointer ">
          <img src="/images/wallet.png" alt="" />
          <span className="text-gray-300 hover:text-white">Finanse</span>
        </div>
        <Link to="/Dzieci">
        <div className="flex gap-2 cursor-pointer ">
          <img src="/images/home.png" alt="" />
          <span className="text-gray-300 hover:text-white">Placówka</span>
        </div>
        </Link>
      </div>
    </>
  );
}
export default Sidebar;
