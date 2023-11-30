import PropTypes from "prop-types";
import SummaryMeal from "./SummaryMeal";

function SummaryMealGroup({ dayName, dayNumber, monthName }) {
  return (
    <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-xl">Posiłki</span>
        <span className="text-sm">
          Na {dayName} , {dayNumber} {monthName}, łącznie
        </span>
      </div>
      <SummaryMeal name="Stawka podstawowa" number={10} price={14.00} />
      <SummaryMeal name="Stawka rozszerzona" number={11} price={23.00} />
      <button className="px-2 py-1 mt-3 text-white text-xs font-semibold shadow base-bg rounded border cursor-pointer hover:shadow-lg">
        Zobacz zamówienie
      </button>
    </div>
  );
}

SummaryMealGroup.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
};

export default SummaryMealGroup;
