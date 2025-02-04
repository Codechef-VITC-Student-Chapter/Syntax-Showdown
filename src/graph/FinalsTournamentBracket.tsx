import React, { useEffect, useRef } from 'react';
import Box from './Box';
import Trophy from '/Trophy.png';

interface Match {
  id: string;
  player1: string;
  player2: string;
  nextId?: string;
  next?: string;
}

interface Props {
  color2: string;
  matches: Match[];
  prefix?: string;
}

const FinalsTournamentBracket: React.FC<Props> = ({
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
        if (match.id == 'ff1') {
          const fromElement = document.getElementById(match.id);
          const toElement = document.getElementById('gg');
          if (fromElement && toElement) {
            drawSteppedLine(fromElement, toElement);
          }
        }
        if (match.next) {
          const fromElement = document.getElementById(match.id);
          const toElement = document.getElementById(match.next);
          if (fromElement && toElement) {
            drawSteppedLine(fromElement, toElement);
          }
        }
        if (match.nextId) {
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

  const colourMatch: { [key: string]: string } = {
    rf1: '#D73646',
    bf1: '#376189',
    gf1: '#2E987A',
    yf1: '#F4B331',
    fq1: '',
  };
  return (
    <div className="overflow-x-auto md:overflow-clip">
      <div className="relative flex justify-center items-center py-10 rounded-lg min-w-[640px] ">
        <div className="relative w-[1000px] flex justify-between items-stretch px-10">
          {[prefix + 'q', prefix + 's', prefix + 'f'].map((round, i) => (
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
                    color1={
                      match.id.startsWith('fq')
                        ? '#C15217'
                        : match.id.startsWith('fs')
                        ? '#6F6F6F'
                        : match.id.startsWith('ff')
                        ? '#E99D11'
                        : '#ffffff'
                    }
                    color2={
                      match.id.startsWith('fq')
                        ? '#C15217'
                        : match.id.startsWith('fs')
                        ? '#6F6F6F'
                        : match.id.startsWith('ff')
                        ? '#E99D11'
                        : '#ffffff'
                    }
                    color3={match.id.startsWith('ff') ? '#fff' : '#ffffff'}
                  />
                ))}
            </div>
          ))}
          <div className="flex flex-col justify-center">
            <img id="gg" src={Trophy} className="h-24"></img>
          </div>
        </div>
        <svg
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        ></svg>
      </div>
    </div>
  );
};

export default FinalsTournamentBracket;
