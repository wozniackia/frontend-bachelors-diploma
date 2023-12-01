import PropTypes from "prop-types";
import MiniSidebarFacility from "../../../Components/Layout/MiniSidebar/MiniSidebarFacilityName";
import MiniSidebarGroup from "../../../Components/Layout/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../../../Components/Layout/MiniSidebar/MiniSidebarLink";

function MiniSidebar({ index }) {
  return (
    <>
      <MiniSidebarFacility facilityName="Przedszkole Pieski" />

      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzisiaj" selected={index === 0} to="/headmaster/summary" />

      <MiniSidebarLink text="Obecności" selected={index === 1} to="/headmaster/attendance" />
    </>
  );
}

MiniSidebar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebar;
