import React, { useEffect, useRef } from 'react';
import Box from './Box';

interface Match {
  id: string;
  player1: string;
  player2: string;
  nextId?: string;
}

interface Props {
  color1: string;
  color2: string;
  matches: Match[];
  prefix?: string;
}

const TournamentBracket: React.FC<Props> = ({
  color1,
  color2,
  matches,
  prefix = '',
}: Props) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const drawSteppedLine = (
    fromElement: HTMLElement,
    toElement: HTMLElement,
    color: string = 'white'
  ) => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const fromRect = fromElement.getBoundingClientRect();
    const toRect = toElement.getBoundingClientRect();
    const containerRect = svg.parentElement!.getBoundingClientRect();

    const startX = fromRect.right - containerRect.left;
    const startY = fromRect.top + fromRect.height / 2 - containerRect.top;
    const endX = toRect.left - containerRect.left;
    const endY = toRect.top + toRect.height / 2 - containerRect.top;

    const midX = (startX + endX) / 2;
    const stepSize = window.innerWidth / 100;

    const pathData = `
      M ${startX},${startY}
      H ${midX - stepSize}
      V ${endY}
      H ${endX}
    `;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '3');
    path.setAttribute('fill', 'none');
    svg.appendChild(path);
  };

  useEffect(() => {
    const updateLines = () => {
      if (!svgRef.current) return;
      svgRef.current.innerHTML = '';

      matches.forEach((match) => {
        if (match.nextId && !match.nextId.startsWith('fq')) {
          const fromElement = document.getElementById(match.id);
          const toElement = document.getElementById(match.nextId);
          if (fromElement && toElement) {
            drawSteppedLine(fromElement, toElement);
          }
        }
      });
    };

    setTimeout(updateLines, 0);

    window.addEventListener('resize', updateLines);
    return () => window.removeEventListener('resize', updateLines);
  }, [matches]);

  return (
    <div className="overflow-x-auto">
      <div className="relative flex justify-center items-center p-10 rounded-lg min-w-[640px] ">
        <div className="relative w-[1000px] flex justify-between items-stretch">
          {[prefix + 'm', prefix + 'q', prefix + 's', prefix + 'f'].map(
            (round, i) => (
              <div
                key={i}
                className={`flex flex-col items-center w-24 md:w-32 lg:w-48 justify-evenly`}
              >
                {matches
                  .filter((m) => m.id.startsWith(round))
                  .map((match) => (
                    <Box
                      key={match.id}
                      id={match.id}
                      player1={match.player1}
                      player2={match.player2}
                      color1={color1}
                      color2={color1}
                      color3={color2}
                    />
                  ))}
              </div>
            )
          )}
        </div>
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></svg>
      </div>
    </div>
  );
};

export default TournamentBracket;
