import SummaryMenuGroup from "../../../Components/Summary/SummaryMenuGroup";
import SummaryPlanGroup from '../../../Components/Summary/SummaryPlanGroup'

function Summary() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex flex-col gap-5	">
        <SummaryPlanGroup />
        <SummaryMenuGroup />
      </div>
    </div>
  );
}

export default Summary;
