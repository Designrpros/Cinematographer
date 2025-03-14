"use client";

import React, { useEffect, useState, useRef } from "react";
import Toolbar from "./components/Toolbar";
import { usePathname } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

// Global styles
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
  }
`;

// Hero section styled with the video background
const HeroSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: -1; /* Keep it behind other content */
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeTab = (() => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/philosophy":
        return "Philosophy";
      default:
        return "Home";
    }
  })();

  // List of video sources
  const videoPlaylist = [
    "/hero-video.mp4",    // First video
    "/hero-video2.mp4",   // Second video
    "/hero-video3.mp4",   // Third video
    "/hero-video4.mp4",   // Fourth video (new one)
  ];

  // State to track the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Reference to the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle video end event to switch to the next video in the playlist
  const handleVideoEnd = () => {
    // Get the next video index, and loop back to the first one if it's the last video
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  };

  // Set up event listener for video end
  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    // Cleanup listener on component unmount
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  // Play the next video when the current video index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Ensure the new video source is loaded
      videoRef.current.play(); // Play the new video
    }
  }, [currentVideoIndex]);

  return (
    <html lang="en">
      <head />
      <body>
        <GlobalStyle />
        <HeroSection>
          <Video autoPlay muted ref={videoRef}>
            <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
          </Video>
        </HeroSection>
        <Toolbar activeTab={activeTab} onTabChange={() => {}} />
        {children}
      </body>
    </html>
  );
}