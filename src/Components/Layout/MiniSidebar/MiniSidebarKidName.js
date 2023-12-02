import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MiniSidebarKidName({ kidName }) {
  return (
    <div>
      <label htmlFor="select" className="block mb-2 text-sm font-medium text-gray-900 ">
        Wybrane dziecko
      </label>
      <div className="flex cursor-pointer px-3 py-2 bg-krillin rounded-md">
        <Link to="/parent">
          <span className="font-semibold text-white hover:text-black">{kidName}</span>
        </Link>
      </div>
    </div>
  );
}

MiniSidebarKidName.propTypes = {
  kidName: PropTypes.string.isRequired,
};

export default MiniSidebarKidName;
