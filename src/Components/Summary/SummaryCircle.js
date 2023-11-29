import PropTypes from "prop-types";

function SummaryCircle(props) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-2/12 h-[9.5rem] shadow base-border rounded-full">
      <p className="text-xs">{props.text}</p>
      <span className={`text-md text-${props.color}-500`}>{props.value}</span>
    </div>
  );
}

SummaryCircle.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default SummaryCircle;
