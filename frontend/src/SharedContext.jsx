import React, { createContext, useContext, useState } from "react";

const MarkerStateContext = createContext();

export const useSharedState = () => {
  return useContext(MarkerStateContext);
};

export const SharedStateProvider = ({ children }) => {
  const [markers, setMarkers] = useState([]);

  return (
    <MarkerStateContext.Provider
      value={{
        markers,
        setMarkers,
      }}
    >
      {children}
    </MarkerStateContext.Provider>
  );
};
