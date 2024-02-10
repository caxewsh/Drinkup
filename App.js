import React, { useState, useEffect } from "react";
import AppNavigation from "./navigation/AppNavigation";
import { ImageProvider } from "./provider/ImageContext";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBackgroundImage = async () => {
      try {
        const image = require("./assets/bg.png");
        setBackgroundImage(image);
      } catch (error) {
        console.error("Error loading background image:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBackgroundImage();
  }, []);

  if (loading || !backgroundImage) {
    // You can return a loading indicator or null while the image is loading
    return null;
  }

  return (
    <ImageProvider backgroundImageSource={backgroundImage}>
      <AppNavigation />
    </ImageProvider>
  );
};

export default App;
