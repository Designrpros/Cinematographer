"use client";

import React from "react";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

// Global styles
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
    font-family: "Helvetica", Arial, sans-serif;
    color: white;
  }
`;

// Video background section
const HeroSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: -1;
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

// Overlay for text content with shared background frame
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
  text-align: center;
`;

const TextFrame = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  border-radius: 10px;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HalwestAgha = () => {
  return (
    <>
      <Head>
        <title>Halwest Agha | Cinematographer</title>
        <meta name="description" content="Portfolio of cinematographer Halwest Agha" />
      </Head>
      <GlobalStyle />
      <HeroSection>
        <Video autoPlay loop muted>
          <source src="/hero-video.mp4" type="video/mp4" />
        </Video>
        <Overlay>
          <TextFrame>
            <Title>Halwest Agha</Title>
            <Subtitle>Cinematographer | Visual Storyteller</Subtitle>
          </TextFrame>
        </Overlay>
      </HeroSection>
    </>
  );
};

export default HalwestAgha;