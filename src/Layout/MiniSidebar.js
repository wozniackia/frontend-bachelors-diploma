function MiniSidebar() {
  return (
    <>
      <div>
        <label for="select" class="block mb-2 text-sm font-medium text-gray-900 ">Aktualna placówka</label>
        <div class="flex cursor-pointer px-3 py-2 bg-gray-300 rounded-md">
        <span class="text-gray-900 hover:text-black">Przedszkole Pieski</span>
      </div>
      </div>

      <div class="">
        <label for="select" class="block mb-2 text-sm font-medium text-gray-900 ">Aktualna grupa</label>
        <select id="select" class="bg-transparent cursor-pointer border border-gray-900 text-gray-900 text-sm rounded-lg  block w-full p-2.5">
          <option selected class="bg-transparent">Wybierz grupę</option>
          <option class="bg-transparent" value="1">Misie</option>
          <option class="bg-transparent" value="2">Kotki</option>
          <option class="bg-transparent" value="3">Pantery</option>
          <option class="bg-transparent" value="4">tygryski</option>
        </select>
      </div>
      
      <div class="flex cursor-pointer px-3 py-2 bg-gray-300 rounded-md">
        <span class="text-gray-900 hover:text-black">Dzisiaj</span>
      </div>
      <div class="flex cursor-pointer px-3 py-2">
        <span class="text-gray-900 hover:text-black">Komunikacja</span>
      </div>
    </>
  );
}
export default MiniSidebar;
