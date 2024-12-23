"use client";
import React from "react";
import DocViewer from "./components/docViewer/DocViewer";
import useFetchPage from "../hooks/useFetchPage";

const Home: React.FC = () => {
  const { page, loading, error, savePage } = useFetchPage(3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home-container">
      <DocViewer
        title={page.title}
        para={page.bodyText}
        onSave={savePage}
        pageIndex={3}
      />
    </div>
  );
};

export default Home;
