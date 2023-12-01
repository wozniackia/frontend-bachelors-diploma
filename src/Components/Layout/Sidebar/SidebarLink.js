import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function SidebarLink({ to, imgSrc, text }) {
  return (
    <Link to={to}>
      <div className="flex gap-2 cursor-pointer ">
        <img src={imgSrc} alt="" />
        <span className="text-white hover:text-white">{text}</span>
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
