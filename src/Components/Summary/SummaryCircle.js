import PropTypes from "prop-types";

function SummaryCircle({ text, value, color }) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
      <p className="text-xs">{text}</p>
      <span className={`text-md text-${color}-500`}>{value}</span>
    </div>
  );
}

SummaryCircle.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default SummaryCircle;
