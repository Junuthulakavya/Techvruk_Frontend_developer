import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DiagramViewer = ({ image }) => {
  if (!image) return <p>No diagram uploaded</p>;

  return (
    <div style={{ border: "1px solid #ddd", padding: 10 }}>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div style={{ marginBottom: 10 }}>
              <button onClick={() => zoomIn()}>Zoom In</button>
              <button onClick={() => zoomOut()}>Zoom Out</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>

            <TransformComponent>
              <img src={image} alt="diagram" style={{ maxWidth: "100%" }} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default DiagramViewer;
