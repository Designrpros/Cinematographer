"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Layout from "./layout";
import HalwestAgha from "./HalwestAgha/page"; // Correct path
import Projects from "./projects/page"; // Correct path (lowercase folder)
import Toolbar from "./components/Toolbar";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const router = useRouter();
  const pathname = usePathname();

  // Sync activeTab with pathname on initial load or route change
  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveTab("Home");
        break;
      case "/projects":
        setActiveTab("Projects");
        break;
      case "/philosophy":
        setActiveTab("Philosophy");
        break;
      default:
        setActiveTab("Home");
        break;
    }
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Sync URL with tab change
    switch (tab) {
      case "Home":
        router.push("/");
        break;
      case "Projects":
        router.push("/projects");
        break;
      case "Philosophy":
        router.push("/philosophy");
        break;
    }
  };

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
      {Content}
    </Layout>
  );
};

export default Home;