import React from "react";

type TitleInputProps = {
  title: string;
  setTitle: (title: string) => void;
  isEditing: boolean;
};

const TitleInput: React.FC<TitleInputProps> = ({
  title,
  setTitle,
  isEditing,
}) => {
  return (
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      disabled={!isEditing}
      className="docViewer-titleInput"
    />
  );
};

export default TitleInput;
