import { Link } from "react-router-dom";

function P0() {
  return (
    <div className="flex-grow p-6">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Placówki</span>
        <div className="flex justify-between items-center gap-5">
          <img
            src="/images/plus.png"
            className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
            alt=""
          />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>
      <div className="my-6 w-10/12 flex border border-gray-400 rounded justify-center items-center bg-white  ">
        <img src="/images/search.svg" className="w-6 h-6 ml-2" alt="" />
        <input
          className="flex-grow px-2 py-1 bg-transparent rounded-tr rounded-br outline-none text-sm"
          type="text"
          placeholder="Zacznij wpisywać tekst, aby wyszukać na liście"
        />
      </div>
      
      <div className="my-6 flex justify-left items-center gap-3 w-11/12">
      <Link to="/p2">  
      <div className="flex px-5 justify-start gap-5 items-center w-12/12 h-20 shadow bg-white border cursor-pointer hover:shadow-lg">
          <div className="rounded-full p-3 bg-gray-200 font-semibold">AW</div>
          <p className="base-color text-xl font-medium">Przedszkole Pieski</p>
        </div>
        </Link>
        <Link to="/p2"> 
        <div className="flex px-5 justify-start gap-5 items-center w-12/12 h-20 shadow bg-white border cursor-pointer hover:shadow-lg">
          <div className="rounded-full p-3 bg-gray-200 font-semibold">AW</div>
          <p className="base-color text-xl font-medium">Przedszkole Kotki</p>
        </div>
        </Link>
        <div className="flex px-5 justify-start gap-5 items-center w-4/12 h-20 shadow secondary-bg border cursor-pointer hover:shadow-lg">
          <p className="base-color text-xl font-medium">Dodaj placówkę</p>
          <img
            src="/images/plus.png"
            className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
            alt=""
          />
        </div> 
      </div>
    </div>
  );
}

export default P0;
