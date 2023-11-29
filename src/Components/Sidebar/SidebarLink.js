import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function SidebarLink(props) {
  return (
    <Link to={props.to}>
      <div className="flex gap-2 cursor-pointer ">
        <img src={props.imgSrc} alt="" />
        <span className="text-gray-300 hover:text-white">{props.text}</span>
      </div>
    </Link>
  );
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SidebarLink;
