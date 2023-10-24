import React, { useRef, useState, useEffect } from "react";
import Card from "../Count/Card";

import CollegeMapImage from "../../../../../assets/images/section/AboutUs/Layout/layout.jpg";

const CollegeMap = () => {
  const mapRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleZoom = (event) => {
    const newZoom = zoomLevel - event.deltaY * 0.001;
    const clampedZoom = Math.min(Math.max(newZoom, 0.1), 3);
    setZoomLevel(clampedZoom);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const xDiff = event.clientX - dragStart.x;
    const yDiff = event.clientY - dragStart.y;
    setOffset({ x: offset.x + xDiff, y: offset.y + yDiff });
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime <= 300) {
      setIsDragging(true);
      setDragStart({ x: event.clientX, y: event.clientY });
    }
    setLastClickTime(currentTime);
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.style.transform = `scale(${zoomLevel}) translate(${offset.x}px, ${offset.y}px)`;
    }
  }, [zoomLevel, offset]);

  return (
    <div className="p-6 h-[50rem]">
      <h1 className="text-center  text-gray-900 antialiased tracking-normal font-sans text-5xl font-semibold leading-[1.3]  mb-3">
        College Layout
      </h1>
      <Card extra="-top-[10rem]">
        <div
          className="relative h-[70rem]  w-full overflow-hidden"
          onWheel={handleZoom}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        >
          <img
            ref={mapRef}
            className="absolute left-0 h-full w-full object-center transition-transform duration-200"
            src={CollegeMapImage}
            alt=""
          />
        </div>
      </Card>
    </div>
  );
};

export default CollegeMap;
