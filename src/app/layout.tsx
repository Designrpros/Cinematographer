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

// Define a custom interface for the Video props
interface VideoProps {
  opacity: number;
}

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

// Update the Video styled component to accept opacity as a prop
const Video = styled.video<VideoProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.5s ease-in-out;
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
    "/hero-video2.mp4",
    "/hero-video.mp4",
    "/hero-video3.mp4",
    "/hero-video4.mp4",
  ];

  // State to track the current and next video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [opacity, setOpacity] = useState(1); // Controls the fade-in/out effect

  // Reference to the video elements
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null); // Reference for the hidden video

  // Handle video end event to switch to the next video in the playlist
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
    setNextVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
    setOpacity(0); // Start fading out the current video
  };

  // Preload the next video
  useEffect(() => {
    if (nextVideoRef.current) {
      nextVideoRef.current.load();
    }
  }, [nextVideoIndex]);

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
      setOpacity(1); // Start fading in the new video
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
          {/* Current video */}
          <Video autoPlay muted ref={videoRef} opacity={opacity}>
            <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
          </Video>

          {/* Preload the next video */}
          <video ref={nextVideoRef} muted style={{ display: "none" }}>
            <source src={videoPlaylist[nextVideoIndex]} type="video/mp4" />
          </video>
        </HeroSection>
        <Toolbar activeTab={activeTab} onTabChange={() => {}} />
        {children}
      </body>
    </html>
  );
}