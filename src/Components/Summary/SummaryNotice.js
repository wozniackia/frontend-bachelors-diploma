import PropTypes from "prop-types";

function SummaryNotice({ name, surname, dayNumber, monthName }) {
  return (
    <div className="flex px-3 py-1.5 w-4/12 justify-start gap-5 items-center shadow secondary-bg border cursor-pointer hover:shadow-lg">
      <div className="flex-grow flex flex-col gap-1 font-medium text-gray-900">
        <span className="text-sm">nieobecność</span>
        <span className="text-xs base-color">{`${name} ${surname}`}</span>
      </div>
      <div className="font-semibold text-xs">{dayNumber} {monthName}</div>
    </div>
  );
}

SummaryNotice.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  dayNumber: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
};

export default SummaryNotice;
