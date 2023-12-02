import PropTypes from "prop-types";

function SummaryPlan({ time, name }) {
  return (
    <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow bg-gray-900 bg-opacity-10 border cursor-pointer hover:shadow-lg">
      <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
        <span className="font-semibold text-xs text-gray-900">{time}</span>
      </div>
      <div className="font-semibold text-xs">{name}</div>
    </div>
  );
}

SummaryPlan.propTypes = {
  time: PropTypes.string.isRequired,
  dish: PropTypes.string.isRequired,
};

export default SummaryPlan;
