import PropTypes from "prop-types";

function GroupCard({ groupName }) {
  return (
    <div className="flex px-4 py-2 justify-between items-center rounded-lg border border-solid border-gray-300">
      <div className="flex flex-col font-medium text-gray-900">
        <span className="text-md base-color">{groupName}</span>
      </div>
      <div className="flex px-10 justify-between items-end w-full gap-5 rounded-lg p-3">
        <div className="flex-grow">
          <span
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Mariusz Wóz
          </span>
          <span
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Kamil Kowalski
          </span>
          <span
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Marcelina Wrońska
          </span>
          <span
            htmlFor="select"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Michał Bielski
          </span>
        </div>
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

GroupCard.propTypes = {
  groupName: PropTypes.string.isRequired,
};

export default GroupCard;
