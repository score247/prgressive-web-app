import React from "react";

export const DeviceContext = React.createContext({
  isMobile: false
});

export const DeviceContextProvider = DeviceContext.Provider;
export const DeviceContextConsumer = DeviceContext.Consumer;
export const useDeviceContext = () => React.useContext(DeviceContext);
