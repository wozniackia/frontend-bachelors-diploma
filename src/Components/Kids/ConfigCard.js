import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ConfigCard({ cardName, navigation }) {
  return (
    <Link to={navigation}>
    <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-md base-color">{cardName}</span>
      </div>
    </div>
    </Link>
  );
}

ConfigCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  navigation: PropTypes.string.isRequired,
};

export default ConfigCard;
