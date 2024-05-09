import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const useSharedState = () => {
  return useContext(StateContext);
};

export const SharedStateProvider = ({ children }) => {
  const [selectedStatus, setSelectedStatus] = useState("active");

  return (
    <StateContext.Provider
      value={{
        selectedStatus,
        setSelectedStatus,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
