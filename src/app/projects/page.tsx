"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const projects = [
  { title: "Short Film - Arctic Dreams", videoUrl: "/hero-video.mp4" },
  { title: "Music Video - Echoes", videoUrl: "/hero-video.mp4" },
  { title: "Documentary - Life in Shadows", videoUrl: "/hero-video.mp4" }
];

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1; /* Ensures it stays above the background */
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.2);
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <Video controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCard>
        ))}
      </Grid>
    </Section>
  );
}