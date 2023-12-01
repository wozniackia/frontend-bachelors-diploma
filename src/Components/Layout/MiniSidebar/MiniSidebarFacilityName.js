import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MiniSidebarFacilityName({ facilityName }) {
  return (
    <div>
      <label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-900 ">
        Aktualna placówka
      </label>
      <div className="flex cursor-pointer px-3 py-2 bg-gray-300 rounded-md">
        <Link to="/headmaster/facility">
          <span className="text-gray-900 hover:text-black">{facilityName}</span>
        </Link>
      </div>
    </div>
  );
}

MiniSidebarFacilityName.propTypes = {
  facilityName: PropTypes.string.isRequired,
};

export default MiniSidebarFacilityName;
