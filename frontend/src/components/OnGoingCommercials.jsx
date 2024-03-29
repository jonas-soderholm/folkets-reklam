import React from "react";

const Commercials = [
  {
    name: "Hello1",
    ammount_of_donations: 0,
    maximum_amount_raised: 100,
    current_amount_raised: 25,
    image: "./hero.png",
  },
  {
    name: "Hello1",
    ammount_of_donations: 0,
    maximum_amount_raised: 100,
    current_amount_raised: 80,
    image: "./hero.png",
  },
  {
    name: "Hello1",
    ammount_of_donations: 0,
    maximum_amount_raised: 100,
    current_amount_raised: 50,
    image: "./hero.png",
  },
  {
    name: "Hello1",
    ammount_of_donations: 0,
    maximum_amount_raised: 100,
    current_amount_raised: 10,
    image: "./hero.png",
  },
];

function card_visuals() {
  return <></>;
}

function OnGoingCommercials() {
  const maximumAmountRaised = 100;
  const currentAmountRaised = 50;

  // Calculate the width of the bar based on the current amount raised
  const barWidth = (currentAmountRaised / maximumAmountRaised) * 100;

  return (
    <>
      {/* Header */}
      <div className="mb-1 text-2xl">Pågående insamlingar</div>
      {/* Dropdown */}
      <div className="dropdown mb-10 mt-4">
        <select className=" bg-slate-800 rounded-full px-3 py-2 text-white text-sm">
          <option value="Hello1">Populära</option>
          <option value="Hello2">Mål snart nått</option>
          <option value="Hello3">Senast tillagda</option>
        </select>
      </div>
      {/* Commercial cards */}
      {/* Image */}
      <div className="commercials-cards flex">
        <div className="commercial-image flex">
          <img className="size-[8rem] w-[8rem] h-8rem rounded-xl " src="./hero.png" alt="" />
        </div>
        {/* Info */}
        <div className="commercial-info flex-column ml-4 max-w-[14rem]">
          <a className="flex text-sm">Antal donationer: 22</a>
          <h1 className="flex mt-1 text-[15px]">Name of the com mer cial asd sad asda sd asd </h1>
          <div className="currently-raised flex-column">
            {/* Collected progression bar */}
            <div className="visual flex-row mt-6 bg-gray-500 rounded-full">
              <div className="mb-1 h-2 bg-green-500 rounded-full" style={{ width: `${barWidth}%` }}></div>
            </div>
            {/* Collected text */}
            <h1 className="flex text-sm mb-8">Totalt just nu: 6504kr</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnGoingCommercials;
