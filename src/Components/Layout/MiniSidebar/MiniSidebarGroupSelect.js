import PropTypes from "prop-types";

function MiniSidebarGroupSelect({ name, value }) {
  return (
    <option className="bg-transparent" value={value}>
      {name}
    </option>
  );
}

MiniSidebarGroupSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default MiniSidebarGroupSelect;
