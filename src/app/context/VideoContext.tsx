import React, { createContext, useState, useContext } from "react";

const VideoContext = createContext<any>(null);

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <VideoContext.Provider value={{ currentVideoIndex, setCurrentVideoIndex }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);