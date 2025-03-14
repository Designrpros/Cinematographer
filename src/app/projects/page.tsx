"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Video playlist with names, video URLs, and tags
const videoPlaylist = [
  { name: "Arctic Dreams", videoUrl: "/hero-video.mp4", tags: ["Film", "Adventure"] },
  { name: "Echoes", videoUrl: "/hero-video2.mp4", tags: ["Music", "Art"] },
  { name: "Life in Shadows", videoUrl: "/hero-video3.mp4", tags: ["Documentary", "Life"] },
  { name: "The Silent Path", videoUrl: "/hero-video4.mp4", tags: ["Film", "Drama"] },
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

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#FFF" : "transparent")};
  color: ${(props) => (props.isActive ? "black" : "#FFF")};
  border: 1px solid #FFF;
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: #FFF; 
    color: black;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center; /* Center the cards */
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-direction: column; /* Default to vertical stacking */
  
  @media (min-width: 768px) {
    flex-direction: row; /* Switch to horizontal layout on larger screens */
  }
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

  @media (min-width: 768px) {
    max-width: 45%; /* Allow 2 items per row on larger screens */
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  display: block;
`;

const ProjectTitle = styled(motion.div)`
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
  display: flex;
  flex-direction: column; /* Stack title and category */
`;

const ProjectName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ProjectCategory = styled.span`
  font-size: 1rem;
  font-weight: normal;
`;

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Handle filtering based on selected tag
  const handleFilterClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag); // Toggle filter
  };

  // Filter the videos based on the selected tag
  const filteredVideos = selectedTag
    ? videoPlaylist.filter((project) => project.tags.includes(selectedTag))
    : videoPlaylist;

  // Get unique tags from the playlist
  const uniqueTags = [
    ...new Set(videoPlaylist.flatMap((project) => project.tags)),
  ];

  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </Title>

      {/* Filter buttons */}
      <FilterContainer>
        {uniqueTags.map((tag) => (
          <FilterButton
            key={tag}
            isActive={selectedTag === tag}
            onClick={() => handleFilterClick(tag)}
          >
            {tag}
          </FilterButton>
        ))}
      </FilterContainer>

      <Grid>
        {filteredVideos.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <ProjectTitle>
              <ProjectName>{project.name}</ProjectName>
              <ProjectCategory>{project.tags.join(", ")}</ProjectCategory>
            </ProjectTitle>
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