import PropTypes from "prop-types";

function MiniSidebarGroupSelect(props) {
  return (
    <option className="bg-transparent" value={props.value}>
      {props.name}
    </option>
  );
}

MiniSidebarGroupSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MiniSidebarGroupSelect;
