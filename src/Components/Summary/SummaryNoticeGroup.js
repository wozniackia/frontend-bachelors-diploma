import SummaryNotice from "./SummaryNotice";

function SummaryNoticeGroup(props) {
  return (
    <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
      <div className="text-xl font-medium text-gray-900 mb-3">Zgłoszenia</div>
      <SummaryNotice name="Maciek" surname="Pieczarka" dayNumber={9} monthName="października" />
      <SummaryNotice name="Julka" surname="Pralka" dayNumber={9} monthName="października" />
    </div>
  );
}

export default SummaryNoticeGroup;