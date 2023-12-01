import PropTypes from "prop-types";
import MiniSidebarFacilityName from "../../../Components/Layout/MiniSidebar/MiniSidebarFacilityName";
import MiniSidebarGroup from "../../../Components/Layout/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../../../Components/Layout/MiniSidebar/MiniSidebarLink";

function MiniSidebarFacility({ index }) {
  return (
    <>
      <MiniSidebarFacilityName facilityName="Przedszkole Pieski" />

      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzieci" selected={index === 0} to="/kids" />

      <MiniSidebarLink text="Rodzice" selected={index === 1} to="/parents" />

      <MiniSidebarLink text="Grupy" selected={index === 2} to="/groups" />

      <MiniSidebarLink text="Konfiguracja placówki" selected={index === 3} to="/config" />

      <MiniSidebarLink text="Diety" selected={index === 4} to="/diets" />
    </>
  );
}

MiniSidebarFacility.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebarFacility;
