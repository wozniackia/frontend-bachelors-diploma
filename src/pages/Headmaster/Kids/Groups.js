import GroupCard from "../../../Components/Kids/GroupCard";

function Groups() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Lista Grup</span>
        <div className="flex justify-between items-center gap-5">
          <img
            src="/images/plus.png"
            className="base-bg rounded-lg  text-center p-1 h-10 w-10 cursor-pointer"
            alt=""
          />
          <span className="base-color text-2xl font-medium">Dodaj</span>
        </div>
      </div>

      <div className="flex justify-center items-end w-full gap-1 bg-gray-200 rounded-lg p-3">
        <div className="flex-grow">
          <label
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nazwa grupy, Dzieci
          </label>
        </div>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <GroupCard groupName="Misie" />

        <GroupCard groupName="Kotki" />

        <GroupCard groupName="Pantery" />

        <GroupCard groupName="Tygryski" />

        <GroupCard groupName="Żabki" />
      </div>
    </div>
  );
}

export default Groups;
