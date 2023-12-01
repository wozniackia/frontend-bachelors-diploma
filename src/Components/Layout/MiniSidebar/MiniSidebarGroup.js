import MiniSidebarGroupSelect from "./MiniSidebarGroupSelect";

function MiniSidebarGroup() {
  return (
    <div className="">
      <label
        htmlFor="select"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        Aktualne dziecko
      </label>
      <select
        id="select"
        className="bg-transparent cursor-pointer border border-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
        value={0}
      >
        <MiniSidebarGroupSelect value="0" name="Wybierz dziecko" />
        <MiniSidebarGroupSelect value="1" name="Maciuś" />
        <MiniSidebarGroupSelect value="2" name="Wojtuś" />
      </select>
    </div>
  );
}

export default MiniSidebarGroup;
