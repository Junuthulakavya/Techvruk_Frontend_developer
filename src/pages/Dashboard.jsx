import React, { useState, useEffect } from "react";
import UploadBox from "../components/UploadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";
import { fetchComponents } from "../services/api";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    fetchComponents().then(setComponents);
  }, []);

  const handleUpload = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
    setFileName(file.name);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Diagram Dashboard</h2>

      <UploadBox onUpload={handleUpload} fileName={fileName} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 20,
        }}
      >
        <DiagramViewer image={image} selectedComponent={selectedComponent} />

        <ComponentList
          components={components}
          selected={selectedComponent}
          onSelect={setSelectedComponent}
        />
      </div>
    </div>
  );
};

export default Dashboard;
