"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Video playlist with names and video URLs
const videoPlaylist = [
  { name: "Short Film - Arctic Dreams", videoUrl: "/hero-video.mp4" },
  { name: "Music Video - Echoes", videoUrl: "/hero-video2.mp4" },
  { name: "Documentary - Life in Shadows", videoUrl: "/hero-video3.mp4" },
  { name: "Indie Film - The Silent Path", videoUrl: "/hero-video4.mp4" }
];

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
  font-family: "Helvetica", Arial, sans-serif;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center; /* Center the cards */
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  &:hover h2 {
    opacity: 0; /* Hide title on hover */
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;

const ProjectTitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 5px;
  color: white;
  z-index: 3;
  transition: opacity 0.3s ease-in-out;
`;

export default function Projects() {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </Title>
      <Grid>
        {videoPlaylist.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
            <Video controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </ProjectCard>
        ))}
      </Grid>
    </Section>
  );
}