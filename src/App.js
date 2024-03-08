import React from "react";
import { MapInteractionCSS } from "react-map-interaction";

export default function App() {
  return (
    <MapInteractionCSS
      showControls
      defaultValue={{
        scale: 1,
        translation: { x: 0, y: 20 }
      }}
      minScale={0.5}
      maxScale={3}
      translationBounds={{
        xMax: 400,
        yMax: 200
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="test"
        width="100%"
      />
    </MapInteractionCSS>
  );
}
