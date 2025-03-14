"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Layout from "./layout";
import Toolbar from "./components/Toolbar";

const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const pathname = usePathname();
  const router = useRouter(); // Only use if necessary

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
    router.push(tab === "Home" ? "/" : `/${tab.toLowerCase()}`);
  };

  return (
    <Layout>
      <Toolbar activeTab={activeTab} onTabChange={handleTabChange} />
    </Layout>
  );
};

export default Home;