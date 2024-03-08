import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { MapInteractionCSS } from "react-map-interaction";

export default function CombinedZoomAndPan() {
  const imgRef = useRef();

  const onPinchZoomUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;
    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <MapInteractionCSS
      showControls
      defaultValue={{
        scale: 1,
        translation: { x: 0, y: 20 }
      }}
      minScale={0.5}
      maxScale={10} // Adjust maxScale based on your preference
      translationBounds={{
        xMax: 400,
        yMax: 200
      }}
    >
      <QuickPinchZoom
        onUpdate={onPinchZoomUpdate}
        tapZoomFactor={2}
        zoomOutFactor={4}
        inertiaFriction={0}
        maxZoom={10}
        minZoom={0.5}
      >
        <img
          width="50%"
          ref={imgRef}
          alt="img"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </QuickPinchZoom>
    </MapInteractionCSS>
  );
}
