import React, { useEffect } from "react";
import DataBaseCommercials from "./DataBaseCommercials";

function MapCommercials() {
  const commercials = DataBaseCommercials();

  return (
    <>
      {/* Commercial cards */}
      {commercials.map((commercial) => (
        <div key={commercial._id} className="commercials-cards flex">
          <div className="commercial-image flex">
            <img
              className="size-[8rem] w-[8rem] h-8rem rounded-xl"
              src="./hero.png" // Replace "imageSrc" with the correct property name containing the image URL
              alt=""
            />
          </div>
          {/* Info */}
          <div className="commercial-info flex-column ml-4 max-w-[14rem]">
            {/* Ammount of donations */}
            <a className="flex text-sm">Antal donationer: {commercial.amount_of_donations}</a>
            {/* Commercial name */}
            <h1 className="flex mt-1 text-[15px]">{commercial.commercial}</h1>
            <div className="currently-raised flex-column">
              {/* Ammount raised progression bar */}
              <div className="visual flex-row mt-6 bg-gray-500 rounded-full">
                <div
                  className="mb-1 h-2 bg-green-500 rounded-full"
                  style={{
                    width: `${progressionBarCalculator(commercial.current_amount_raised, commercial.goal_amount)}%`,
                  }}
                ></div>
              </div>
              {/* Ammount raised */}
              <h1 className="flex text-sm mb-12">Totalt just nu: {commercial.current_amount_raised}kr</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const progressionBarCalculator = (currentAmount, goalAmount) => {
  return (currentAmount / goalAmount) * 100;
};

function OnGoingCommercials() {
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
      {/* Render the commercial cards */}
      <MapCommercials />
    </>
  );
}

export default OnGoingCommercials;
