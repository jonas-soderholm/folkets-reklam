import MapCommercials from "./CommercialCards";
import DropDownMenu from "./DropDownMenu";

function ActiveCommercials() {
  return (
    <>
      {/* Header */}
      <div className="mb-1 text-2xl">Pågående insamlingar</div>
      {/* Dropdown menu */}
      <DropDownMenu />
      {/* Commercials */}
      <MapCommercials />
    </>
  );
}

export default ActiveCommercials;
