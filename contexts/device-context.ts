import React from "react";
import { DeviceContextType } from "./device-context-type";

export const DeviceContext = React.createContext<DeviceContextType>({
  isMobile: false
});

export const DeviceContextProvider = DeviceContext.Provider;
export const DeviceContextConsumer = DeviceContext.Consumer;
export const useDeviceContext = () => React.useContext(DeviceContext);
