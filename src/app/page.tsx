"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Layout from "./layout";
import Toolbar from "./components/Toolbar";
import HalwestAgha from "./HalwestAgha/page";
import Projects from "./projects/page";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveTab("Home");
        break;
      case "/projects":
        setActiveTab("Projects");
        break;
      default:
        setActiveTab("Home");
        break;
    }
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "Home" ? "/" : `/${tab.toLowerCase()}`);
  };

  // Dynamically render the correct content
  let Content;
  switch (activeTab) {
    case "Home":
      Content = <HalwestAgha />;
      break;
    case "Projects":
      Content = <Projects />;
      break;
    default:
      Content = <HalwestAgha />;
      break;
  }

  return (
    <Layout>
      <Toolbar activeTab={activeTab} onTabChange={handleTabChange} />
      {Content} {/* Show the correct page */}
    </Layout>
  );
};

export default Home;