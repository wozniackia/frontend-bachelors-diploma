import PropTypes from "prop-types";

function KidCard({ kidName, parent1Name, parent2Name, groupName }) {
  return (
    <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-md base-color">{kidName}</span>
        <span className="text-sm">Rodzice: {parent1Name} {parent2Name ? `, ${parent2Name}` : ``}</span>
      </div>
      <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
        <span className="bg-green-200 text-green-500 px-2 rounded-full">
          {groupName}
        </span>
      </div>
      <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img
          src="/images/edit.png"
          className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer"
          alt=""
        />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
    </div>
  );
}

KidCard.propTypes = {
  kidName: PropTypes.string.isRequired,
  parent1Name: PropTypes.string.isRequired,
  parent2Name: PropTypes.string,
  groupName: PropTypes.string.isRequired,
};

export default KidCard;
