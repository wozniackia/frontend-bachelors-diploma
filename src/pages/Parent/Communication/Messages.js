import { useState } from 'react';
function Messages() {
  const [tab, setTab] = useState(0)
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 w-8/12 justify-between items-center gap-20">
        <span className="text-4xl font-semibold ">Wiadomości</span>
        <button className="px-2 py-1 mt-3 text-white text-xs font-semibold shadow bg-teal-600 rounded border cursor-pointer hover:shadow-lg">
          Nowa
        </button>
      </div>

      <div className="flex px-1 items-end w-full gap-1 rounded-lg p-3">
        <div className="tabs flex space-x-2 bg-gray-300 px-3 py-1.5 rounded-lg">
          {/* Menu Pills  */}
          <div onClick={()=>setTab(0)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===0 && 'active'}`} >Wiadomości prywatne</div>
          <div onClick={()=>setTab(1)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===1 && 'active'}`} >Wiadomości grupowe</div>
          <div onClick={()=>setTab(2)} onKeyDown={() => {}} className={`cursor-pointer px-2 py-1 rounded-lg font-semibold text-sm tab ${tab===2 && 'active'}`} >Wiadomości ogólne</div>
        </div>
      </div>

      {/* Tab Content  */}
      <div className={`tab-content ${tab!==0 && 'hidden'}`}>
        <div className="flex flex-col my-3 gap-1">
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Wiadomość</span>
              <span className="text-md text-gray-800">Mateusz Pollubeusz</span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>1 dzień temu</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-orange-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Wiadomość</span>
              <span className="text-md text-gray-800">Mateusz Pollubeusz</span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>3 dni temu</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Wiadomość</span>
              <span className="text-md text-gray-800">Mateusz Pollubeusz </span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>5 dni temu</span>
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
              <span className="text-sm text-gray-400">Do grupy: Misie</span>
              <span className="text-md text-gray-800">Ingormacje dla grupy: Misie </span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>Dzisiaj</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Do grupy: Tygryski</span>
              <span className="text-md text-gray-800">Informacje dla grupy: Tygryski </span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>1 dzień temu</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Do grupy: Misie</span>
              <span className="text-md text-gray-800">Informacje dla grupy: Misie</span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>3 dni temu</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`tab-content ${tab!==2 && 'hidden'}`}>
        <div className="flex flex-col my-3 gap-1">
          
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-green-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Do: wszyscy</span>
              <span className="text-md text-gray-800">Konkurs plastyczny "Jesień"</span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>1 dzień temu</span>
            </div>
          </div>
          <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border-b border-solid border-gray-900">
            <div className="rounded-full p-5 mx-3 my-2 bg-yellow-200 font-semibold text-xs text-white">
              <img src="/images/notification.svg" className="w-6 h-6" alt="" />
            </div>
            <div className="flex-grow flex flex-col font-medium text-gray-900">
              <span className="text-sm text-gray-400">Do: wszyscy</span>
              <span className="text-md text-gray-800">Program "Zdrowa żywność"</span>
            </div>
            <div className="text-xs font-medium text-gray-900 self-start py-3">
              <span>3 dni temu</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Messages;