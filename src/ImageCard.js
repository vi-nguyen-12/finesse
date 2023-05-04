import React from "react";

const ImageCard = ({ url }) => {
  return (
    <div className="d-flex justify-content-center">
      <img
        src={url}
        style={{
          objectFit: "cover",
          height: "calc(100vh - 150px)",
        }}
      />
    </div>
  );
};

export default ImageCard;
