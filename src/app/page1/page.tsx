"use client";
import React from "react";
import DocViewer from "../components/docViewer/DocViewer";
import useFetchPage from "../../hooks/useFetchPage";

const Page1: React.FC = () => {
  const { page, loading, error, savePage } = useFetchPage(0);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <DocViewer title={page.title} para={page.bodyText} onSave={savePage} pageIndex={0}/>
    </div>
  );
};

export default Page1;
