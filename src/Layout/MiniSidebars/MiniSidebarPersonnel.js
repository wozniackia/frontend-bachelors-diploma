import PropTypes from "prop-types";
import MiniSidebarFacility from "../../Components/MiniSidebar/MiniSidebarFacilityName";
import MiniSidebarLink from "../../Components/MiniSidebar/MiniSidebarLink";

function MiniSidebarPersonnel({ index }) {
  return (
    <>
      <MiniSidebarFacility facilityName="Przedszkole Pieski" />

      <MiniSidebarLink text="Pracownicy" selected={index === 0} to="/personnel" />

      <MiniSidebarLink text="Urlopy" selected={index === 1} to="/leaves" />
    </>
  );
}

MiniSidebarPersonnel.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebarPersonnel;
