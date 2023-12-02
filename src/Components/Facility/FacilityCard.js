import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GalleryCard({ name, initials }) {
  return (
    <Link to="/headmaster/summary">
      <div className="flex px-5 justify-start gap-5 items-center w-12/12 h-20 shadow bg-white border cursor-pointer hover:shadow-lg">
        <div className="rounded-full p-3 bg-gray-200 font-semibold">{initials}</div>
        <p className="base-color text-xl font-medium">{name}</p>
      </div>
    </Link>
  );
}

GalleryCard.propTypes = {
  name: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};

export default GalleryCard;
