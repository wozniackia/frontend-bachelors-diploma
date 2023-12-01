import PropTypes from "prop-types";
import MiniSidebarFacilityName from "../../../Components/Layout/MiniSidebar/MiniSidebarFacilityName";
import MiniSidebarGroup from "../../../Components/Layout/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../../../Components/Layout/MiniSidebar/MiniSidebarLink";

function MiniSidebarFacility({ index }) {
  return (
    <>
      <MiniSidebarFacilityName facilityName="Przedszkole Pieski" />

      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzieci" selected={index === 0} to="/headmaster/kids" />

      <MiniSidebarLink text="Rodzice" selected={index === 1} to="/headmaster/parents" />

      <MiniSidebarLink text="Grupy" selected={index === 2} to="/headmaster/groups" />

      <MiniSidebarLink text="Konfiguracja placówki" selected={index === 3} to="/headmaster/config" />

      <MiniSidebarLink text="Diety" selected={index === 4} to="/headmaster/diets" />
    </>
  );
}

MiniSidebarFacility.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebarFacility;
