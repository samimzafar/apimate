"use client";
import React, { useState, useEffect, useRef } from "react";
import "./docViewer.css";

type DocViewerProps = {
  title: string;
  para: string;
  onSave: (newTitle: string, newText: string) => void;
  pageIndex: number;
};

const DocViewer: React.FC<DocViewerProps> = ({ title, para, onSave, pageIndex }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(para);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNewTitle(title);
    setNewText(para);
  }, [title, para]);

  const handleSave = () => {
    if (contentRef.current) {
      const content = contentRef.current.innerText || "";
      setNewText(content);
      onSave(newTitle, content);
      localStorage.setItem(`page_${pageIndex}_title`, newTitle);
      localStorage.setItem(`page_${pageIndex}_content`, content);
    }
    setIsEditing(false);
  };

  return (
    <div className="docViewer-container">
      <div className="docViewer-header">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          disabled={!isEditing}
          className="docViewer-titleInput"
        />
        <button
          className="docViewer-editButton"
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div
        className="docViewer-section"
        contentEditable={isEditing}
        ref={contentRef}
        suppressContentEditableWarning={true}
      >
        {newText}
      </div>
    </div>
  );
};

export default DocViewer;