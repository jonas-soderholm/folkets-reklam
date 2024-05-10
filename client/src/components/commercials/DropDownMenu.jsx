import React, { useEffect, useState } from "react";
import { useSharedState } from "../../SharedContext.jsx";

function DropDownMenu() {
  const { selectedStatus, setSelectedStatus } = useSharedState();

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    // console.log(selectedStatus);
  };

  return (
    <div className="dropdown md:text-xl text-lg my-5">
      <select className="dark:bg-neutral-800 rounded-lg px-5 py-2  text-slate-200" onChange={handleStatusChange}>
        <option value="active">Pågående Donationer</option>
        <option value="running">Aktiva på stan nu</option>
        <option value="pending">På väg ut</option>
      </select>
    </div>
  );
}

export default DropDownMenu;
