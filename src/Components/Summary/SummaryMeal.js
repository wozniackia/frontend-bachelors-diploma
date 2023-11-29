import PropTypes from "prop-types";

function SummaryMeal(props) {
  return (
    <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
      <div className="rounded-full py-2 px-3  base-bg font-semibold text-xs text-white">
        {props.number}
      </div>
      <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
        <span className="text-sm">
          {props.name}: {props.price} zł
        </span>
        <span className="text-xs">Liczba: {props.number}</span>
      </div>
    </div>
  );
}

SummaryMeal.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default SummaryMeal;
