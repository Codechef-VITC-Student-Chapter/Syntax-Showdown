import React, { useEffect, useRef, useState } from 'react';

interface SteppedLineProps {
  box1Ref: React.RefObject<HTMLDivElement>;
  box2Ref: React.RefObject<HTMLDivElement>;
  color?: string;
  width?: number;
  stepSize?: number;
}

const SteppedLine: React.FC<SteppedLineProps> = ({
  box1Ref,
  box2Ref,
  color = 'white',
  width = 5,
  stepSize = 20,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = document.querySelector('.container') as HTMLElement;
    const updateSize = () => {
      setContainerSize({
        width: container.offsetWidth,
        height: container.offsetHeight,
      });
    };

    updateSize(); // Set initial size
    window.addEventListener('resize', updateSize); // Update on resize

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  useEffect(() => {
    const drawSteppedLine = () => {
      const box1 = box1Ref.current?.getBoundingClientRect();
      const box2 = box2Ref.current?.getBoundingClientRect();
      const container = svgRef.current?.parentElement?.getBoundingClientRect();

      if (!box1 || !box2 || !container) return;

      const startX = box1.left + box1.width;
      const startY = box1.top + box1.height / 2;
      const endX = box2.left;
      const endY = box2.top + box2.height / 2;

      // Convert to relative positions inside the container
      const relStartX = startX - container.left;
      const relStartY = startY - container.top;
      const relEndX = endX - container.left;
      const relEndY = endY - container.top;

      // Define the stepped path
      const midX = (relStartX + relEndX) / 2;
      const pathData = `
                M ${relStartX},${relStartY}
                H ${midX - stepSize}
                V ${relEndY}
                H ${relEndX}
            `;

      // Create or update the SVG path
      const path = svgRef.current?.querySelector('path');
      if (path) {
        path.setAttribute('d', pathData);
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', `${width}`);
        path.setAttribute('fill', 'none');
      }
    };

    drawSteppedLine();
  }, [box1Ref, box2Ref, color, width, stepSize, containerSize]);

  return (
    <svg
      ref={svgRef}
      width={containerSize.width}
      height={containerSize.height}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    />
  );
};

export default SteppedLine;
