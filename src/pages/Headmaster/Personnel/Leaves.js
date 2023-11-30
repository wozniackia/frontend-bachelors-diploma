import LeavesCard from "../../../Components/Personnel/LeavesCard";

function Leaves() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Urlopy</span>
        <div className="flex justify-between items-center gap-5">
          <img
            src="/images/plus.png"
            className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
            alt=""
          />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>

      <div className="flex justify-center items-end w-full gap-1 bg-white rounded-lg p-3">
        <div className="flex-grow">
          <label
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Filtry
          </label>
          <select
            id="select"
            className="bg-transparent cursor-pointer border text-sm rounded-lg w-full"
          >
            <option selected className="bg-transparent">
              Choose an option
            </option>
            <option className="bg-transparent" value="1">
              Option 1
            </option>
            <option className="bg-transparent" value="2">
              Option 2
            </option>
            <option className="bg-transparent" value="3">
              Option 3
            </option>
            <option className="bg-transparent" value="4">
              Option 4
            </option>
          </select>
        </div>
        <div className="flex-grow">
          <select
            id="select"
            className="bg-transparent cursor-pointer border text-sm rounded-lg w-full"
          >
            <option selected className="bg-transparent">
              Choose an option
            </option>
            <option className="bg-transparent" value="1">
              Option 1
            </option>
            <option className="bg-transparent" value="2">
              Option 2
            </option>
            <option className="bg-transparent" value="3">
              Option 3
            </option>
            <option className="bg-transparent" value="4">
              Option 4
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <LeavesCard
          primaryName="Mateusz"
          primarySurname="Pollubeusz"
          status="Oczekujący"
          type="Urlop wypoczynkowy"
        />
        <LeavesCard
          primaryName="Mateusz"
          primarySurname="Pollubeusz"
          status="Zatwierdzony"
          type="Urlop wypoczynkowy"
        />
        <LeavesCard
          primaryName="Mateusz"
          primarySurname="Pollubeusz"
          status="Odrzucony"
          type="Urlop wypoczynkowy"
        />
      </div>
    </div>
  );
}

export default Leaves;
