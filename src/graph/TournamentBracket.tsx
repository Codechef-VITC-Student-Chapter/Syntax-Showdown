import React, { useEffect, useRef } from "react";
import Box from "./Box";

interface Match {
  id: string;
  player1: string;
  player2: string;
  nextId?: string;
}

const matches: Match[] = [
  { id: "m1", player1: "Player 1", player2: "Player 2", nextId: "q1" },
  { id: "m2", player1: "Player 3", player2: "Player 4", nextId: "q1" },
  { id: "m3", player1: "Player 5", player2: "Player 6", nextId: "q2" },
  { id: "m4", player1: "Player 7", player2: "Player 8", nextId: "q2" },
  { id: "m5", player1: "Player 9", player2: "Player 10", nextId: "q3" },
  { id: "m6", player1: "Player 11", player2: "Player 12", nextId: "q3" },
  { id: "m7", player1: "Player 13", player2: "Player 14", nextId: "q4" },
  { id: "m8", player1: "Player 15", player2: "Player 16", nextId: "q4" },
  { id: "q1", player1: "Winner 1", player2: "Winner 2", nextId: "s1" },
  { id: "q2", player1: "Winner 3", player2: "Winner 4", nextId: "s1" },
  { id: "q3", player1: "Winner 5", player2: "Winner 6", nextId: "s2" },
  { id: "q4", player1: "Winner 7", player2: "Winner 8", nextId: "s2" },
  { id: "s1", player1: "Winner Q1", player2: "Winner Q2", nextId: "f1" },
  { id: "s2", player1: "Winner Q3", player2: "Winner Q4", nextId: "f1" },
  { id: "f1", player1: "Winner SF1", player2: "Winner SF2" },
];

const TournamentBracket: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const drawSteppedLine = (
    fromElement: HTMLElement,
    toElement: HTMLElement,
    color: string = "red"
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
    const stepSize = 30;

    const pathData = `
      M ${startX},${startY}
      H ${midX - stepSize}
      V ${endY}
      H ${endX}
    `;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    svg.appendChild(path);
  };

  useEffect(() => {
    const updateLines = () => {
      if (!svgRef.current) return;
      svgRef.current.innerHTML = "";

      matches.forEach((match) => {
        if (match.nextId) {
          const fromElement = document.getElementById(match.id);
          const toElement = document.getElementById(match.nextId);
          if (fromElement && toElement) {
            drawSteppedLine(fromElement, toElement);
          }
        }
      });
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  return (
    <div className="relative flex justify-center items-center p-10 rounded-lg">
      <div className="relative w-[1000px] flex justify-between items-stretch">
        {["m", "q", "s", "f"].map((round, i) => (
          <div
            key={i}
            className={`flex flex-col items-center w-48 justify-evenly`}
          >
            {matches
              .filter((m) => m.id.startsWith(round))
              .map((match) => (
                <Box
                  key={match.id}
                  id={match.id}
                  player1={match.player1}
                  player2={match.player2}
                  color1={i === 0 ? "#3498db" : "#2ecc71"}
                  color2={i === 0 ? "#2980b9" : "#27ae60"}
                  color3={i === 0 ? "#1abc9c" : "#e74c3c"}
                />
              ))}
          </div>
        ))}
      </div>
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></svg>
    </div>
  );
};

export default TournamentBracket;
