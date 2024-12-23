"use client";
import React from "react";
import "./menuBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./menuItems";
import { gatherContent } from "./helper";

const MenuBar = () => {
  const pathname = usePathname();
  const handleExport = () => {
    const content = gatherContent(pathname);
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(content));

    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "documentation.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="menu-container">
      <div className="menu-content">
        <h2>Menu</h2>
        <ul>
          {menuItems.map(({ path, label }) => (
            <li key={path} className="menu-item">
              <Link href={path} className={pathname === path ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="menu-exportButton" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default MenuBar;
