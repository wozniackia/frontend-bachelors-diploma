import SummaryPlan from "./SummaryPlan";

function SummaryPlanGroup() {
  return (
    <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
      <div className="text-xl font-medium text-krillin mb-3">Plan zajęć</div>
      <SummaryPlan time="9:00" name="Śniadanie" />
      <SummaryPlan time="9:30" name="Rytmika" />
      <SummaryPlan time="10:00" name="Zajęcia dydaktyczne" />
      <SummaryPlan time="11:00" name="II śniadanie" />
      <SummaryPlan time="11:30" name="Spacer" />
      <SummaryPlan time="12:00" name="Zabawa" />
      <SummaryPlan time="13:00" name="Obiad" />
      <SummaryPlan time="13:30" name="Odpoczynek" />
      <SummaryPlan time="14:00" name="Zajęcia dydaktyczne" />
      <SummaryPlan time="16:00" name="Podwieczorek" />
    </div>
  );
}

export default SummaryPlanGroup;