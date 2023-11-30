import PropTypes from "prop-types";
import { useState } from "react";

function AttendanceKidCard({ kidName, kidSurname, isPresent }) {
  const [present, setPresent] = useState(isPresent);

  return (
    <div className="flex gap-1 justify-center items-center rounded shadow bg-white border cursor-pointer">
      <div className="rounded-full py-2 px-3 mx-3 my-2 bg-gray-200 font-semibold text-xs text-gray-200">0</div>
      <div className="text-sm font-medium text-gray-900 flex-grow">
        {kidName} {kidSurname}
      </div>
      <button onClick={() => setPresent(!present)}>
        <img
          src={present ? "/images/correct.png" : "/images/remove-red.png"}
          className="w-7 h-7 mx-4 cursor-pointer text-black"
          alt=""
        />
      </button>
    </div>
  );
}

AttendanceKidCard.propTypes = {
  kidName: PropTypes.string.isRequired,
  kidSurname: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
};

export default AttendanceKidCard;
