import PersonnelEmployeeCard from "./PersonnelEmployeeCard";

function Employees() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Lista pracowników</span>
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
            Imię, Nazwisko
          </label>
        </div>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <PersonnelEmployeeCard
          name="Mateusz"
          surname="Pollubeusz"
          role="Pracownik"
        />

        <PersonnelEmployeeCard name="Jan" surname="Kowalski" role="Pracownik" />

        <PersonnelEmployeeCard
          name="Barbara"
          surname="Nowak"
          role="Pracownik"
        />
      </div>
    </div>
  );
}

export default Employees;
