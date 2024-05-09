import React, { useEffect, useState } from "react";
import { useSharedState } from "../../SharedContext.jsx";

function DropDownMenu() {
  const { selectedStatus, setSelectedStatus } = useSharedState();

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    // console.log(selectedStatus);
  };

  return (
    <div className="dropdown mb-10 mt-4">
      <select className="bg-slate-800 rounded-full px-5 py-2  text-white" onChange={handleStatusChange}>
        <option value="active">Pågående Donationer</option>
        <option value="running">Aktiva på stan nu</option>
        <option value="pending">På väg ut</option>
      </select>
    </div>
  );
}

export default DropDownMenu;
