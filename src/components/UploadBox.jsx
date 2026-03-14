import React from "react";

const UploadBox = ({ onUpload, fileName }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />
      {fileName && <p>Uploaded: {fileName}</p>}
    </div>
  );
};

export default UploadBox;
