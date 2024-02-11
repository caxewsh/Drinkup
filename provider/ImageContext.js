import React, { createContext, useContext, useMemo } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children, backgroundImageSource }) => { /* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
  const contextValue = useMemo(() => ({ backgroundImageSource }), [
    backgroundImageSource,
  ]);
  console.log("context fetched");
  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const { backgroundImageSource } = useContext(ImageContext);
  if (!backgroundImageSource) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return { backgroundImageSource };
};
