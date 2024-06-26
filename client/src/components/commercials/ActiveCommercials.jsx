import MapCommercials from "./CommercialCards";
import DropDownMenu from "./DropDownMenu";

function ActiveCommercials() {
  return (
    <>
      {/* Header */}
      <div className="relative card-background text-2xl rounded-t-2xl -translate-y-[1.2rem] pb-[9rem] overflow-hidden">
        <div className=" p-[2rem] justify-center flex">
          {/* Dropdown menu */}
          <DropDownMenu />
        </div>
        {/* Commercials */}
        <MapCommercials />
      </div>
    </>
  );
}

export default ActiveCommercials;
