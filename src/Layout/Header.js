import { Link } from "react-router-dom";
// Header.js
function Header() {
  return (
    <div className="flex justify-around items-center bg-white flex-shrink-0 basis-[60px] shadow border border-rounded border-solid">
      <div className="w-9/12 flex justify-between items-center ">
        
      
        
      </div>
      <div>
        <p className="base-color text-lg">Antoni Woźniacki</p>
        <p className="text-gray-500">Zalogowany jako</p>
      </div>
      <div className="rounded-full p-3 bg-gray-200 font-semibold">AW</div>
    </div>
  );
}

export default Header;
