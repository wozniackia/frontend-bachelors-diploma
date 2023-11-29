import MiniSidebarGroupSelect from "./MiniSidebarGroupSelect";

function MiniSidebarGroup(props) {
  return (
    <div className="">
      <label
        htmlFor="select"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Aktualna grupa
      </label>
      <select
        id="select"
        className="bg-transparent cursor-pointer border border-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        value={0}
      >
        <MiniSidebarGroupSelect value="0" name="Wybierz grupę" />
        <MiniSidebarGroupSelect value="1" name="Misie" />
        <MiniSidebarGroupSelect value="2" name="Kotki" />
        <MiniSidebarGroupSelect value="3" name="Pantery" />
        <MiniSidebarGroupSelect value="4" name="Tygryski" />
      </select>
    </div>
  );
}

export default MiniSidebarGroup;
