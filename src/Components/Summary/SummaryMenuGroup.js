import SummaryMenu from "./SummaryMenu";

function SummaryMenuGroup() {
  return (
    <div className="flex flex-col gap-3 p-7 justify-center items-start rounded-2xl shadow bg-white border cursor-pointer">
      <div className="text-xl font-medium text-krillin mb-3">Jadłospis na dziś</div>
      <SummaryMenu meal="I śniadanie" dish="Pieczywo z masłem, ser żółty, dżem, ogórek, herbata" />
      <SummaryMenu meal="II śniadanie" dish="Jogurt, jabłko" />
      <SummaryMenu meal="Zupa" dish="Kalafiorowa" />
      <SummaryMenu meal="Obiad" dish="Makaron w sosie bolońskim" />
      <SummaryMenu meal="Podwieczorek" dish="Koktajl owocowy" />
    </div>
  );
}

export default SummaryMenuGroup;