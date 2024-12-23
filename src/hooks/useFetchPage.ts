"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { endPoint, STORAGE_KEY, STORAGE_TITLE_KEY } from "../utils/constants";

interface Page {
  title: string;
  bodyText: string;
}
const useFetchPage = (pageIndex: number) => {
  const [page, setPage] = useState<Page>({ title: "", bodyText: "" });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const loadFromLocalStorage = (): boolean => {
    const savedContent = localStorage.getItem(`${STORAGE_KEY}_${pageIndex}`);
    const savedTitle = localStorage.getItem(
      `${STORAGE_TITLE_KEY}_${pageIndex}`
    );
    if (savedContent || savedTitle) {
      setPage({
        title: savedTitle || "",
        bodyText: savedContent || "",
      });
      setLoading(false);
      return true;
    }
    return false;
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(endPoint);
      setPage(res.data.Pages[pageIndex]);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const dataLoaded = loadFromLocalStorage();
    if (!dataLoaded) {
      fetchData();
    }
  }, [pageIndex]);
  const savePage = (newTitle: string, newText: string) => {
    setPage({
      title: newTitle,
      bodyText: newText,
    });
    localStorage.setItem(`${STORAGE_KEY}_${pageIndex}`, newText);
    localStorage.setItem(`${STORAGE_TITLE_KEY}_${pageIndex}`, newTitle);
  };
  return { page, loading, error, savePage };
};

export default useFetchPage;
