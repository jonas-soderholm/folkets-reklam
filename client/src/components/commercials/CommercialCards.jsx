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
        const response = await fetch("http://127.0.0.1:5000/api/commercials");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setCommercials(data);
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
            <button className="" onClick={() => donationHandler(commercial._id, -200)}>
              Remove
            </button>
            <button className="" onClick={() => donationHandler(commercial._id, 200)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default MapCommercials;
