import PropTypes from "prop-types";

function LeavesCard({ primaryName, primarySurname, status, type }) {
  var color;
  switch(status) {
    case 'Oczekujący':
      color='orange'
      break;
    case 'Zatwierdzony':
      color='green'
      break;
    case 'Odrzucony':
      color='red'
      break;
    default:
      color='red'
      break;
  }

  return (
    <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-md base-color">
          {primaryName} {primarySurname}
        </span>
        <span className="text-sm">30-31 października 2023</span>
      </div>
      <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <span className={`bg-${color}-200 text-${color}-500 px-2 rounded-full`}>
          {status}
        </span>
        <span>{type}</span>
      </div>
    </div>
  );
}

LeavesCard.propTypes = {
  primaryName: PropTypes.string.isRequired,
  primarySurname: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default LeavesCard;
