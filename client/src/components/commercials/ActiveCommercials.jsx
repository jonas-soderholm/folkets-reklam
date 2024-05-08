import MapCommercials from "./CommercialCards";
import DropDownMenu from "./DropDownMenu";

function ActiveCommercials() {
  return (
    <>
      {/* Header */}
      <div className="card-background text-2xl rounded-t-2xl -translate-y-[1.2rem]">
        <div className=" p-[2rem] justify-center flex">
          {/* Pågående insamlingar */}
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
