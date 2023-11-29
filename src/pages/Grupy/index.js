


function Grupy() {
  return <>

<div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Lista Grup</span>
        <div className="flex justify-between items-center gap-5">
          <img src="/images/plus.png" className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer" alt="" />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>
      
      <div className="flex justify-center items-end w-full gap-1 bg-gray-200 rounded-lg p-3">
        <div className="flex-grow">
          <label for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Nazwa grupy, Dzieci</label>
          
        </div>
      </div>


      <div className="flex flex-col my-3 gap-1">
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-green-200 border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Misie </span>
            
          </div>
          <div className="flex px-10 justify-between items-end w-full gap-5 bg-green-200 rounded-lg p-3">
        <div className="flex-grow">
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Mariusz Wóz</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Kamil Kowalski</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Marcelina Wrońska</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Michał Bielski</span>
        </div>
      </div>
          
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>

        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-yellow-100 border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Kotki</span>
            
          </div>

          <div className="flex px-10 justify-between items-end w-full gap-5 bg-yellow-100 rounded-lg p-3">
        <div className="flex-grow">
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Jacek Mazur</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Karolina Mazur</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Bartłomiej Koc</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Sylwia Małachowska</span>
        </div>
      </div>

          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>

        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-orange-200 border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Pantery</span>
            
          </div>
          
          <div className="flex px-5 justify-between items-end w-full gap-5 bg-orange-200 rounded-lg p-3">
        <div className="flex-grow">
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Jakub Młot</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Jakub Kowalski</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Julian Bendarz</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Kacper Kot</span>
        </div>
      </div>

          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-red-200 border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Tygryski</span>
     
          </div>
         
          <div className="flex px-4 justify-between items-end w-full gap-5 bg-red-200 rounded-lg p-3">
        <div className="flex-grow">
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Krystian Pazur</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Maria Jaworska</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Jarosław Kaktus</span>
          <span for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Szymon Piekarz</span>
        </div>
      </div>

          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>

        
      </div>
    </div>





  </>
}

export default Grupy;
