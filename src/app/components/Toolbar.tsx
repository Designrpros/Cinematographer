"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

interface ToolbarProps {
  activeTab: string;
  onTabChange?: (tab: string) => void; // Make it optional with "?"
}

const Navbar = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 50;
`;

const BurgerIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 51;

  div {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  div:nth-child(1) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translateY(10px)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  div:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translateY(-10px)" : "rotate(0)")};
  }
`;

const Menu = styled.div<{ isMenuOpen: boolean }>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 50;
  animation: slideIn 0.3s ease-in-out;

  @keyframes slideIn {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
  }
`;

const MenuItem = styled.a<{ $isActive: boolean }>`
  font-size: 28px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? "#FFDD00" : "#fff")};
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 10px;
  letter-spacing: 1.5px;

  &:hover {
    color: #ffdd00;
    transform: scale(1.1);
  }
`;

const Toolbar: React.FC<ToolbarProps> = ({ activeTab, onTabChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab); // Only call if provided
    }
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <>
      <Navbar>
        <BurgerIcon onClick={toggleMenu} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </BurgerIcon>
      </Navbar>

      <Menu isMenuOpen={isMenuOpen}>
        <BurgerIcon onClick={toggleMenu} isOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </BurgerIcon>
        <Link href="/" passHref>
          <MenuItem $isActive={activeTab === "Home"} onClick={() => handleTabClick("Home")}>
            Home
          </MenuItem>
        </Link>
        <Link href="/projects" passHref>
          <MenuItem
            $isActive={activeTab === "Projects"}
            onClick={() => handleTabClick("Projects")}
          >
            Projects
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Toolbar;