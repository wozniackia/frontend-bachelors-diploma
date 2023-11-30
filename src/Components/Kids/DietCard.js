import PropTypes from "prop-types";

function DietCard({ dietName, price, childNumber }) {
  return (
    <div className="flex px-4 py-2 justify-between items-center rounded-lg bg-white border border-solid border-gray-300">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-md base-color">{dietName}</span>
        <span className="text-sm">Cena: {price} zł</span>
      </div>
      <div className="flex flex-col justify-between items-center text-s font-medium text-gray-900">
        <span className="bg-green-200 text-green-500 px-2 rounded-full">
          {childNumber}
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

DietCard.propTypes = {
  dietName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  childNumber: PropTypes.number.isRequired,
};

export default DietCard;
