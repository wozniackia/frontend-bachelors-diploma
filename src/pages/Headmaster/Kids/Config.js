import ConfigCard from "../../../Components/Kids/ConfigCard";

function Kids() {
  return (
    <div className="flex-grow p-6 overflow-auto">
      <div className="flex my-6 items-center gap-20">
        <span className="text-4xl font-semibold ">Konfiguracja</span>
      </div>

      <div className="flex flex-col my-3 gap-1">
        <ConfigCard cardName="Dodaj placówkę" navigation="#" />

        <ConfigCard cardName="Dodaj grupę" navigation="#" />

        <ConfigCard cardName="Dodaj dziecko" navigation="#" />

        <ConfigCard cardName="Skonfiguruj diety" navigation="#" />

        <ConfigCard cardName="Przekaż dane dostępowe rodzicowi" navigation="#" />

        <ConfigCard cardName="Dodaj konto pracownika" navigation="#" />
      </div>
    </div>
  );
}

export default Kids;
