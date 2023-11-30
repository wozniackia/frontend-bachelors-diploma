import ParentCard from "../../Components/Kids/ParentCard";

function Parents() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Rodzice</span>
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
            Dziecko, Konta rodziców
          </label>
        </div>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <ParentCard
          kidName="Michał Wóz"
          parent1Name="Andrzej Wóz"
          parent2Name="Ela Wóz"
        />
        <ParentCard
          kidName="Michał Wóz"
          parent1Name="Andrzej Wóz"
          parent2Name="Ela Wóz"
        />
        <ParentCard
          kidName="Michał Wóz"
          parent1Name="Andrzej Wóz"
          parent2Name="Ela Wóz"
        />
        <ParentCard
          kidName="Michał Wóz"
          parent1Name="Andrzej Wóz"
          parent2Name="Ela Wóz"
        />
      </div>
    </div>
  );
}

export default Parents;
