import { Link } from 'react-router-dom';


function P3() {
  return <>

<div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Lista pracowników</span>
        <div className="flex justify-between items-center gap-5">
          <img src="/images/plus.png" className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer" alt="" />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>

      <div className="flex justify-center items-end w-full gap-1 bg-white rounded-lg p-3">
        <div className="flex-grow">
          <label for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Imię, Nazwisko</label>
          
        </div>
      </div>


      <div className="flex flex-col my-3 gap-1">
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mateusz Pollubeusz </span>
            <span className="text-sm">Pracownik</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Jan Kowalski</span>
            <span className="text-sm">Pracownik</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Barbara Nowak</span>
            <span className="text-sm">Pracownik</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>
      </div>
    </div>





    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Zastępstwa</span>
        <div className="flex justify-between items-center gap-5">
          <img src="/images/plus.png" className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer" alt="" />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>

      <div className="flex justify-center items-end w-full gap-1 bg-white rounded-lg p-3">
        <div className="flex-grow">
          <label for="select" className="block mb-2 text-sm font-medium text-gray-900 ">Filtry</label>
          <select id="select" className="bg-transparent cursor-pointer border text-sm rounded-lg w-full">
            <option selected className="bg-transparent">Choose an option</option>
            <option className="bg-transparent" value="1">Option 1</option>
            <option className="bg-transparent" value="2">Option 2</option>
            <option className="bg-transparent" value="3">Option 3</option>
            <option className="bg-transparent" value="4">Option 4</option>
          </select>
        </div>
        <div className="flex-grow">
          <select id="select" className="bg-transparent cursor-pointer border text-sm rounded-lg w-full">
            <option selected className="bg-transparent">Choose an option</option>
            <option className="bg-transparent" value="1">Option 1</option>
            <option className="bg-transparent" value="2">Option 2</option>
            <option className="bg-transparent" value="3">Option 3</option>
            <option className="bg-transparent" value="4">Option 4</option>
          </select>
        </div>
      </div>


      <div className="flex flex-col my-3 gap-1">
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mateusz Pollubeusz za Maciek Piłk</span>
            <span className="text-sm">30-31 października 2023</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <span className="bg-orange-200 text-orange-500 px-2 rounded-full">Oczekujący</span>
            <span>Urlop wypoczynkowy</span>
          </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mateusz Pollubeusz za Maciek Piłk</span>
            <span className="text-sm">30-31 października 2023</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <span className="bg-green-200 text-green-500 px-2 rounded-full">Oczekujący</span>
            <span>Urlop wypoczynkowy</span>
          </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mateusz Pollubeusz za Maciek Piłk</span>
            <span className="text-sm">30-31 października 2023</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <span className="bg-red-200 text-red-500 px-2 rounded-full">Oczekujący</span>
            <span>Urlop wypoczynkowy</span>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default P3;
