"use client";

import React from "react";
import styled from "styled-components";

interface VideoProps {
  opacity: number;
}

const HeroSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: -1; /* Behind content */
  background: #000; /* Fallback */
`;

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

interface VideoBackgroundProps {
  videoSrc: string;
  nextVideoSrc: string;
  opacity: number;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  nextVideoRef: React.RefObject<HTMLVideoElement | null>;
}

export default function VideoBackground({
  videoSrc,
  nextVideoSrc,
  opacity,
  videoRef,
  nextVideoRef,
}: VideoBackgroundProps) {
  return (
    <HeroSection>
      <Video autoPlay muted playsInline ref={videoRef} opacity={opacity}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <video ref={nextVideoRef} muted style={{ display: "none" }}>
        <source src={nextVideoSrc} type="video/mp4" />
      </video>
    </HeroSection>
  );
}