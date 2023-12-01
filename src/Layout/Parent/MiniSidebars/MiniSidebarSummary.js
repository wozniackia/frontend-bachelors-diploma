import PropTypes from "prop-types";
import MiniSidebarGroup from "../../../Components/Layout/MiniSidebar/MiniSidebarGroup";
import MiniSidebarLink from "../../../Components/Layout/MiniSidebar/MiniSidebarLink";

function MiniSidebar({ index }) {
  return (
    <>
      <MiniSidebarGroup />

      <MiniSidebarLink text="Dzisiaj" selected={index === 0} to="/parent/summary" />
    </>
  );
}

MiniSidebar.propTypes = {
  index: PropTypes.number.isRequired,
};

export default MiniSidebar;
