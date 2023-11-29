import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function MiniSidebarLink(props) {
  return (
    <Link to={props.to}>
      <div className={`flex cursor-pointer px-3 py-2 ${props.selected ? "bg-gray-300" : ""} rounded-md`}>
        <span className="text-gray-900 hover:text-black">{props.text}</span>
      </div>
    </Link>
  );
}

MiniSidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default MiniSidebarLink;
