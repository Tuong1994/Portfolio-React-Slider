import React from "react";

interface IconDownloadProps {
  className?: string;
  onClick?(): void;
}

const IconDownload: React.FC<IconDownloadProps> = (props) => {
  const { className, onClick } = props;

  return (
    <i
      className={`fa-solid fa-download ${className ? className : ""}`}
      onClick={onClick}
    ></i>
  );
};

export default IconDownload;
