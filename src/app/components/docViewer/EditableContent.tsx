import React, { useRef, useEffect, useMemo } from "react";
type EditableContentProps = {
  text: string;
  isEditing: boolean;
  onSave: (content: string) => void;
};

const EditableContent: React.FC<EditableContentProps> = ({
  text,
  isEditing,
  onSave,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = text;
    }
  }, [text]);

  const handleSave = () => {
    if (contentRef.current) {
      onSave(contentRef.current.innerHTML || "");
    }
  };
  return useMemo(
    () => (
      <div
        className="docViewer-section"
        contentEditable={isEditing}
        ref={contentRef}
        suppressContentEditableWarning={true}
        onBlur={handleSave}
      />
    ),
    [isEditing, text]
  );
};

export default EditableContent;
