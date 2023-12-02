import { Link } from "react-router-dom";

function Kids() {
  return (
    <div className="flex-grow p-6">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Dzieci</span>
      </div>

      <div className="my-6 flex justify-left items-center gap-3 w-11/12">
        <Link to="/parent/summary">
          <div className="flex px-5 justify-start gap-5 items-center w-12/12 h-20 shadow bg-white border cursor-pointer hover:shadow-lg">
            <div className="rounded-full p-3 bg-gray-200 font-semibold">MW</div>
            <p className="text-krillin text-xl font-medium">Maciuś Wóz</p>
          </div>
        </Link>
        <Link to="/parent/summary">
          <div className="flex px-5 justify-start gap-5 items-center w-12/12 h-20 shadow bg-white border cursor-pointer hover:shadow-lg">
            <div className="rounded-full p-3 bg-gray-200 font-semibold">WW</div>
            <p className="text-krillin text-xl font-medium">Wojtuś Wóz</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Kids;
