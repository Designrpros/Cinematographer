"use client";

import React from "react";
import Toolbar from "./components/Toolbar";
import { usePathname } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
  }
`;

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

  return (
    <html lang="en">
      <head />
      <body>
        <GlobalStyle />
        <HeroSection>
          <Video autoPlay loop muted>
            <source src="/hero-video.mp4" type="video/mp4" />
          </Video>
        </HeroSection>
        <Toolbar activeTab={activeTab} onTabChange={() => {}} />
        {children}
      </body>
    </html>
  );
}