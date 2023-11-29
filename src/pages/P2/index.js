import { Link } from 'react-router-dom';


function P2() {
  return <>
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Przedszkole Pieski</span>
        <div className="flex justify-between items-center gap-5">
          <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer" alt="" />
          <span className="base-color text-2xl font-medium">Edytuj</span>
        </div>
      </div>

      <div className="text-sm font-medium text-gray-900">
        Podsumowanie - Poniedziałek
      </div>
      <div className="mt-2 mb-6 flex justify-start items-center gap-3">
        <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
          <p className="text-xs">Obecnych</p>
          <span className="text-md text-green-500">0</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
          <p className="text-xs">Nieobecnych</p>
          <span className="text-md text-red-500">0</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
          <p className="text-xs">Nieobecnych</p>
          <span className="text-md text-yellow-500">0</span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
          <p className="text-xs">Zgłoszenia</p>
          <span className="text-md text-red-500">0</span>
        </div>
      </div>

      <div className="flex flex-col gap-5	">

        <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-xl">Posiłki</span>
            <span className="text-sm">Na poniedziałek , 9 października, łącznie </span>
          </div>
          <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
            <div className="rounded-full py-2 px-3  base-bg font-semibold text-xs text-white">1</div>
            <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
              <span className="text-sm">Stawka podstawowa: 14,00 zł</span>
              <span className="text-xs">Liczba: 10</span>
            </div>
            
          </div>
          <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
            <div className="rounded-full py-2 px-3  base-bg font-semibold text-xs text-white">2</div>
            <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
              <span className="text-sm">Stawka rozszerzona: 23,00 zł</span>
              <span className="text-xs">Liczba: 11</span>
            </div>
            
          </div>
          <button className="px-2 py-1 mt-3 text-white text-xs font-semibold shadow base-bg rounded border cursor-pointer hover:shadow-lg">
            Zobacz zamówienie
          </button>
        </div>

        <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
          <div className="text-xl font-medium text-gray-900 mb-3"> Zgłoszenia</div>
          <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
            <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
              <span className="text-sm">nieobecność</span>
              <span className="text-xs base-color">Maciek Pieczarka</span>
            </div>
            <div className="font-semibold text-xs">9 października</div>
          </div>
          <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
            <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
              <span className="text-sm">nieobecność</span>
              <span className="text-xs base-color">Julia Pralka</span>
            </div>
            <div className="font-semibold text-xs">9 października</div>
          </div>
        </div>

        
      </div>
    </div>
  </>
}

export default P2;
