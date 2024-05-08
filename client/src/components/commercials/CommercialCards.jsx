import React, { useEffect, useState } from "react";
import { updateDonationsOnDataBase } from "./donation_handler";
import { progressionBarCalculator } from "./progression_bar";
import { donationHandler } from "./donation_handler";

function MapCommercials() {
  const [commercials, setCommercials] = useState([]);
  const [rerenderCommercial, setRerenderCommercial] = useState(false);

  // Get commercials from DB
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/ongoing_commercials");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setCommercials(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Commercial cards */}
      {commercials.map((commercial) => (
        <div key={commercial.id} className="commercials-cards flex">
          <div className="commercial-image flex">
            <img className="size-[8rem] w-[8rem] h-8rem rounded-xl" src="./hero.png" alt="" />
          </div>
          {/* Info */}
          <div className="commercial-info flex-column ml-4 max-w-[14rem]">
            {/* Ammount of donations */}
            <a className="flex text-sm font-thin">Antal donationer: {commercial.amount_of_donations}</a>
            {/* Commercial name */}
            <h1 className="flex mt-1 text-[18px]">{commercial.name}</h1>
            <div className="currently-raised flex-column"></div>
            {/* Ammount raised */}
            <div className="relative bottom-0">
              <h1 className="flex text-sm">Totalt just nu: {commercial.current_donation_amount}kr</h1>
              {/* Ammount raised progression bar */}
              <div className="visual flex-row bg-gray-500 rounded-full">
                <div
                  className="mb-4 h-2 bg-green-500 rounded-full"
                  style={{
                    width: `${progressionBarCalculator(
                      commercial.current_donation_amount,
                      commercial.max_donation_amount
                    )}%`,
                  }}
                ></div>
              </div>
            </div>
            <button className="" onClick={() => donationHandler(commercial.id, -200)}>
              Go to commercial
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MapCommercials;
