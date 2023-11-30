import PropTypes from "prop-types";

function AttendanceSummaryCard({ text, value, color }) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-3/12 h-16 shadow bg-white border cursor-pointer hover:shadow-lg">
      <p className="text-xs">{text}</p>
      <span className={`text-md text-${color}-500`}>{value}</span>
    </div>
  );
}

AttendanceSummaryCard.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default AttendanceSummaryCard;
