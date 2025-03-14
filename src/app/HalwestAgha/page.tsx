"use client";

import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

// Global reset to ensure no default margins/padding
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
  z-index: -1; /* Ensure it's behind other content */
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #fff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HalwestAgha = () => {
  return (
    <>
      <Head>
        <title>Halwest Agha | Cinematographer</title>
        <meta name="description" content="Portfolio of cinematographer Halwest Agha" />
      </Head>
      <GlobalStyle />  {/* Apply global reset */}
      <HeroSection>
        <Video autoPlay loop muted>
          <source src="/hero-video.mp4" type="video/mp4" />
        </Video>
        <Overlay>
          <Title>Halwest Agha</Title>
          <Subtitle>Cinematographer | Visual Storyteller</Subtitle>
        </Overlay>
      </HeroSection>
    </>
  );
};

export default HalwestAgha;