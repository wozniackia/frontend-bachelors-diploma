import PropTypes from "prop-types";
import MiniSidebarFacility from "../../Components/MiniSidebar/MiniSidebarFacilityName";
import MiniSidebarGroup from "../../Components/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../../Components/MiniSidebar/MiniSidebarLink";

function MiniSidebar({ index }) {
  return (
    <>
      <MiniSidebarFacility facilityName="Przedszkole Pieski" />

      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzisiaj" selected={index === 0} to="/summary" />

      <MiniSidebarLink text="Obecności" selected={index === 1} to="/attendance" />
    </>
  );
}

MiniSidebar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebar;
