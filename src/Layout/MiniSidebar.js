import MiniSidebarFacility from "../Components/MiniSidebar/MiniSidebarFacility";
import MiniSidebarGroup from "../Components/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../Components/MiniSidebar/MiniSidebarLink";

function MiniSidebar() {
  return (
    <>
      <MiniSidebarFacility facilityName="Przedszkole Pieski" />

      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzisiaj" selected={true} to="#" />

      <MiniSidebarLink text="Komunikacja" selected={false} to="#" />
    </>
  );
}
export default MiniSidebar;
