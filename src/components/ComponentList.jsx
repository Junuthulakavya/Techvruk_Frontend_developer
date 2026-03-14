import React from "react";

const ComponentList = ({ components, selected, onSelect }) => {
  return (
    <div style={{ borderLeft: "1px solid #ddd", padding: 10 }}>
      <h3>Components</h3>

      {components.map((c) => (
        <div
          key={c.id}
          onClick={() => onSelect(c)}
          style={{
            padding: 8,
            cursor: "pointer",
            background: selected?.id === c.id ? "#cce5ff" : "transparent",
          }}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
