import PropTypes from "prop-types";

function PersonnelEmployeeCard({ name, surname, role }) {
  return (
    <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
          <div className="flex flex-col font-medium text-gray-900">
            <span className="text-md base-color">{name} {surname} </span>
            <span className="text-sm">{role}</span>
          </div>
          <div className="flex flex-col justify-between items-center text-xs font-medium text-gray-900">
        <img src="/images/edit.png" className="base-bg rounded-lg  text-center p-1 h-7 w-7 cursor-pointer" alt="" />
        <span className="base-color text-sm font-medium">Edytuj</span>
      </div>
        </div>
  );
}

PersonnelEmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default PersonnelEmployeeCard;
