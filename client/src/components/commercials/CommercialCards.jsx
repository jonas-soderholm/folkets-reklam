import React, { useEffect, useState } from "react";
import { progressionBarCalculator } from "./progression_bar";
import { useSharedState } from "../../SharedContext.jsx";

function MapCommercials() {
  const [commercials, setCommercials] = useState([]);
  const { selectedStatus, setSelectedStatus } = useSharedState();
  const { selectedCommercial, setSelectedCommercial } = useSharedState();

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

  const handleCardClick = (commercial) => {
    const url = `/donations/${commercial._id}`;
    window.location.href = url;
  };

  return (
    <>
      {/* Commercial cards */}
      <div className="flex flex-wrap gap-12 justify-center md:mx-[10rem]">
        {commercials
          .filter((commercial) => commercial.status === selectedStatus)
          .map((commercial) => (
            <div
              key={commercial._id}
              className="commercials-cards flex justify-between mx-auto bg-[#cacaca] p-4 rounded-xl shadow-slate-500 shadow-2xl cursor-pointer hover-zoom"
              onClick={() => handleCardClick(commercial)}
            >
              <div className="commercial-image flex overflow-hidden rounded-xl">
                <img
                  className="size-[8rem] w-[8rem] h-[8rem] md:w-[25rem] md:h-[15rem] rounded-xl image-zoom object-cover"
                  src={commercial.img}
                  alt=""
                />
              </div>
              {/* Info */}
              <div className="commercial-info flex-column ml-4 max-w-[13rem]">
                {/* Ammount of donations */}
                <a className="flex text-sm font-thin">Antal donationer: {commercial.amount_of_donations}</a>
                {/* Commercial name */}
                <a className="flex text-sm font-bold my-4">{commercial.name}</a>
                {/* Amount raised */}
                <div className="relative bottom-0">
                  <div className="amount">
                    <h1 className="text-sm">Totalt just nu: {commercial.current_donation_amount}kr</h1>
                    {/* Amount raised progression bar */}
                    <div className="visual flex-row bg-gray-500 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{
                          width: `${progressionBarCalculator(
                            commercial.current_donation_amount,
                            commercial.max_donation_amount
                          )}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MapCommercials;

// test_commercial_active
// test_commercial_info
// test_commercial_name
