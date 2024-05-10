import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSharedState } from "../../SharedContext.jsx";
import { progressionBarCalculator } from "../commercials/progression_bar.js";

function DonationDetail() {
  const { id } = useParams();
  const { selectedCommercial, setSelectedCommercial } = useSharedState();
  const [filteredCommercial, setFilteredCommercial] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ongoing_commercials`);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setSelectedCommercial(data);
        const foundCommercial = data.find((commercial) => commercial._id === id.toString());
        setFilteredCommercial(foundCommercial);
      } catch (error) {
        console.error("Error fetching data");
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mb-[70vh] mx-4">
      {filteredCommercial ? (
        <div className="flex flex-row flex-wrap items-center md:my-[15rem] justify-center mt-[2rem] ">
          <div className="image">
            <img
              class="md:w-[25rem] md:h-auto h-auto w-[20rem] rounded-lg object-cover mb-[2rem]"
              src={filteredCommercial.img}
              alt=""
            />
          </div>
          <div className="information flex md:flex-row md:items-start md:text-left">
            {/* <div className="information mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border-4 px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left"> */}
            <div className="mb-4 md:mr-6 md:mb-0"></div>
            <div className="">
              <p className="text-xl font-medium text-gray-700">{filteredCommercial.name}</p>
              <p className="mb-4 text-sm font-medium text-gray-500">{filteredCommercial.status}</p>
              <div className="flex justify-between ">
                <div className="flex flex-col items-center rounded-xl bg-gray-100 md:px-5 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Donationer</p>
                  <p className="text-3xl font-medium text-gray-600">{filteredCommercial.amount_of_donations}</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 md:px-5 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Totalt</p>
                  <p className="text-3xl font-medium text-gray-600">{filteredCommercial.current_donation_amount}kr</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 md:px-5 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Mål</p>
                  <p className="text-3xl font-medium text-gray-600">{filteredCommercial.max_donation_amount}kr</p>
                </div>
              </div>
              <div className="my-6  max-w-[24rem]">
                Är du också trött på cigarettfimparna på gatan? Donera till vår kampanj och stoppa nedskräpningen. Bidra
                till att sätta upp reklamen mitt i Stockholm. Din donation gör skillnad. Tillsammans kan vi skapa ett
                trevligare Stockholm.
              </div>
              <div className="flex space-x-2">
                <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">
                  Dela
                </button>
                <button className="w-full rounded-lg border-2 border-transparent bg-[#43ce82] px-4 py-2 font-medium text-white">
                  Donera
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DonationDetail;
