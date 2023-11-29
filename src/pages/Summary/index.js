import EditButton from "../../Components/General/EditButton";
import SummaryCircle from "../../Components/Summary/SummaryCircle";
import SummaryMealGroup from "../../Components/Summary/SummaryMealGroup";
import SummaryNoticeGroup from "../../Components/Summary/SummaryNoticeGroup";

function Summary() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Przedszkole Pieski</span>
        <EditButton />
      </div>

      <div className="text-sm font-medium text-gray-900">
        Podsumowanie - Poniedziałek
      </div>

      <div className="mt-2 mb-6 flex justify-start items-center gap-3">
        <SummaryCircle text="Obecnych" value={0} color="green" />
        <SummaryCircle text="Zgłoszenia na dziś" value={0} color="red" />
        <SummaryCircle text="Zgłoszenia na jutro" value={0} color="red" />
        <SummaryCircle text="Wszystkich" value={0} color="yellow" />
      </div>

      <div className="flex flex-col gap-5	">
        <SummaryMealGroup dayName="poniedziałek" dayNumber={9} monthName="października" />

        <SummaryNoticeGroup />
      </div>
    </div>
  );
}

export default Summary;
