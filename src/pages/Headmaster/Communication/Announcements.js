import { useState } from 'react';


function Announcements() {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 w-8/12 justify-between items-center gap-20">
        <span className="text-4xl font-semibold ">Tablica Ogłoszeń</span>
        <button className="px-2 py-1 mt-3 text-white text-xs font-semibold shadow bg-teal-600 rounded border cursor-pointer hover:shadow-lg">
          Dodaj
        </button>
      </div>

      <div className="flex justify-center items-end w-full gap-1 rounded-lg p-3">
        <div className="tabs flex space-x-2 bg-gray-300 px-3 py-1.5 rounded-lg">
          {/* Menu Pills  */}
          <div onClick={()=>setTab(0)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===0 && 'active'}`} >Wszystkie</div>
          <div onClick={()=>setTab(1)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===1 && 'active'}`} >Jadłospisy</div>
          <div onClick={()=>setTab(2)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===2 && 'active'}`} >Inne</div>
        </div>
      </div>

      {/* Tab Content  */}
      <div className={`tab-content ${tab!==0 && 'hidden'}`}>
        <div className="flex flex-col my-3 gap-1">
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">30-31 października 2023</span>
              <span className="text-md text-gray-800">Ogłoszenie naboru do grup</span>
              <span className="text-sm">Ogłaszamy nabór do grupy pierwszej przedszkola Pieski. Informujemy, że na chwilę obecną pozostało 8 wolnych miejsc. Zainteresowanych prosimy o bezpośredni kontakt z dyretkorem placówki.</span>
            </div>
            
            
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-orange-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">27 października 2023</span>
              <span className="text-md text-gray-800">Konkurs artystyczny</span>
              <span className="text-sm">Informujemy, że w najbliższy poniedziałek (31 października) we wszystkich grupach odbędzie się konkurs artystyczny o tematyce: "Jesień". Rodziców prosimy o wyposarzenie dzieci w niezbędne przybory malarskie takie jak: farby akwarelowe, pędzle do malowania i blok techniczny biały.</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">26 października 2023</span>
              <span className="text-md text-gray-800">Program "Żyję zdrowo"</span>
              <span className="text-sm">Informujemy, że w naszej placówce od przyszłego tygodnia startuje program "Żyję zdrowo". Celem programu jest edukacja najmłodszych odnośnie zdrowego odżywiania. Każde dziecko raz w tygodniu otrzyma zdrowy zestaw warzyw i owoców składający się z: Jabłka, mini-marchewek, mandarynek i soków owocowych. Program ufundowany jest przez burmistrza miasta, a uczestnictwo w nim jest dla rodziców nieodpłatne.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`tab-content ${tab!==1 && 'hidden'}`}>
        <div className="flex flex-col my-3 gap-1">
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-orange-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
              <span className="text-md text-gray-800">Jadłospis na tydzień 27-31 października</span>
              <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>27 października</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
            <span className="text-md text-gray-800">Jadłospis na tydzień 21-26 października</span>
            <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
          </div>
          <div className="text-xs font-medium text-gray-900 self-start py-3">
            <span>21 października</span>
          </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
            <span className="text-md text-gray-800">Jadłospis na tydzień 14-20 października</span>
            <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
          </div>
          <div className="text-xs font-medium text-gray-900 self-start py-3">
            <span>14 października</span>
          </div>
          </div>
        </div>
      </div>
      <div className={`tab-content ${tab!==2 && 'hidden'}`}>
        <div className="flex flex-col my-3 gap-1">
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-orange-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
            <span className="text-md text-gray-800">Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
            <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
          </div>
          <div className="text-xs font-medium text-gray-900 self-start py-3">
            <span>27 października</span>
          </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
            <span className="text-md text-gray-800">Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
            <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
          </div>
          <div className="text-xs font-medium text-gray-900 self-start py-3">
            <span>27 października</span>
          </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/search.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
            
            <span className="text-md text-gray-800">Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
            <span className="text-sm">Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum </span>
          </div>
          <div className="text-xs font-medium text-gray-900 self-start py-3">
            <span>27 października</span>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Announcements;
