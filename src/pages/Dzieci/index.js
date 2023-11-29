function Dzieci() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Dzieci</span>
        <div className="flex justify-between items-center gap-5">
          <img
            src="/images/plus.png"
            className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
            alt=""
          />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>
      <div className="my-6 flex border border-gray-400 rounded justify-center items-center bg-white  ">
        <img src="/images/search.svg" className="w-6 h-6 ml-2" alt="" />
        <input
          className="flex-grow px-2 py-1 bg-transparent rounded-tr rounded-br outline-none text-sm"
          type="text"
          placeholder="Wyszukaj na liście..."
        />
      </div>
      <div className="flex justify-center items-end w-full gap-1 bg-gray-200 rounded-lg p-3">
        <div className="flex-grow">
          <label
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Imię, Nazwisko, Grupa
          </label>
        </div>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mariusz Wóz </span>
            <span className="text-sm">Rodzice: Andzej Wóz, Elżbieta Wóz</span>
          </div>
          <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
            <span className="bg-green-200 text-green-500 px-2 rounded-full">
              Misie
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <img
              src="/images/edit.png"
              className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer"
              alt=""
            />
            <span className="base-color text-sm font-medium">Edytuj</span>
          </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Stanisław Kowalski</span>
            <span className="text-sm">
              Rodzice: Mirosław Kowalski, Ewa Kowalska
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
            <span className="bg-red-200 text-red-500 px-2 rounded-full">
              Tygryski
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <img
              src="/images/edit.png"
              className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer"
              alt=""
            />
            <span className="base-color text-sm font-medium">Edytuj</span>
          </div>
        </div>
        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Mikołaj Nowakowicz</span>
            <span className="text-sm">
              Rodzice: Wiesław Nowakowicz, Elżbieta Nowakowicz-Lis
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
            <span className="bg-orange-200 text-orange-500 px-2 rounded-full">
              Pantery
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <img
              src="/images/edit.png"
              className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer"
              alt=""
            />
            <span className="base-color text-sm font-medium">Edytuj</span>
          </div>
        </div>

        <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">Julia Kwiatek</span>
            <span className="text-sm">
              Rodzice: Albert Kwiatek, Małgorzata Kwiatek
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
            <span className="bg-red-200 text-red-500 px-2 rounded-full">
              Tygryski
            </span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
            <img
              src="/images/edit.png"
              className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer"
              alt=""
            />
            <span className="base-color text-sm font-medium">Edytuj</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dzieci;
