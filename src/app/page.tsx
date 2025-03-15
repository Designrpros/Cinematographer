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
    setActiveTab(pathname === "/" ? "Home" : pathname === "/projects" ? "Projects" : "Home");
  }, [pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(tab === "Home" ? "/" : `/${tab.toLowerCase()}`);
  };

  const Content = activeTab === "Projects" ? <Projects /> : <HalwestAgha />;

  return (
    <Layout>
      <Toolbar activeTab={activeTab} onTabChange={handleTabChange} />
      {Content}
    </Layout>
  );
};

export default Home;