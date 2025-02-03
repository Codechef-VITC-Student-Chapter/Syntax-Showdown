import { useState } from "react";
import Box from "./graph/Box";
import clubLogo from "/Club Logo.png";
import swords from "/Swords.png";
import TournamentBracket from "./graph/TournamentBracket";

function App() {
  const [selectedGroup, setGroup] = useState("#d73646");

  return (
    <>
      <div className="w-screen min-h-screen backdrop-blur-[1px]">
        {/* Header */}
        <div className="flex justify-center items-center m-5 p-5">
          <img src={clubLogo} className="h-20" alt="Club Logo" />
          <h1 className="text-white text-4xl font-extrabold m-5 p-3">
            Syntax Showdown
          </h1>
          <img src={swords} className="h-18" alt="Swords" />
        </div>

        {/* Sub Heading */}
        <div className="flex justify-center items-center m-5 p-5">
          <h2 className="text-white text-3xl font-extrabold m-5 p-3">
            Final Showdown
          </h2>
        </div>

        <TournamentBracket />

        {/* Sub Heading */}
        <div className="flex justify-center items-center m-5 p-5">
          <h2 className="text-white text-3xl font-extrabold m-5 p-3">
            Group Showdown
          </h2>
        </div>

        {/* Buttons */}
        <div
          className="m-16 p-8 rounded-2xl border-4 border-white flex-col justify-center items-center inline-flex"
          style={{
            borderStyle: "dashed",
            borderWidth: "4px",
            borderColor: "white",
            borderSpacing: "4px",
          }}
        >
          <div
            className="text-white text-2xl font-medium"
            style={{ color: selectedGroup }}
          >
            Choose Your Group
          </div>
          <div className="flex flex-col py-8">
            {/* Buttons */}
            {[
              { name: "Group 1", color: "#D73646" },
              { name: "Group 2", color: "#376189" },
              { name: "Group 3", color: "#2E987A" },
              { name: "Group 4", color: "#F4B331" },
            ].map((group, index) => (
              <button
                className="m-2 p-2 cursor-pointer"
                onClick={() => setGroup(group.color)}
              >
                <div
                  key={index}
                  className="border-4 rounded-lg"
                  style={{
                    borderColor: group.color,
                    backgroundColor: group.color,
                  }}
                >
                  <div className="px-2 py-1 flex justify-evenly text-2xl bg-white border-4 rounded-md border-[#373737]">
                    <div>{group.name}</div>
                    <div>►</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
