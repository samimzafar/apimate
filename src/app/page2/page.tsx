"use client";
import React from "react";
import DocViewer from "../components/docViewer/DocViewer";
import useFetchPage from "../../hooks/useFetchPage";

const Page2: React.FC = () => {
  const { page, loading, error, savePage } = useFetchPage(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <DocViewer title={page.title} para={page.bodyText} onSave={savePage} pageIndex={1} />
    </div>
  );
};

export default Page2;
