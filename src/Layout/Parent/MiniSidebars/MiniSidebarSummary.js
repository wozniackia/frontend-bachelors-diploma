import PropTypes from "prop-types";
import MiniSidebarLink from "../../../Components/Layout/MiniSidebar/MiniSidebarLink";
import MiniSidebarKidName from "../../../Components/Layout/MiniSidebar/MiniSidebarKidName";

function MiniSidebar({ index }) {
  return (
    <>
      <MiniSidebarKidName kidName="Maciuś" />

      <MiniSidebarLink text="Dzisiaj" selected={index === 0} to="/parent/summary" />
    </>
  );
}

MiniSidebar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebar;
