import Box from './graph/Box';
import clubLogo from '/Club Logo.png';
import swords from '/Swords.png';

function App() {
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

        {/* Horizontal Bracket */}
        <div className="flex justify-center items-center space-x-8 p-10">
          {/* Round of 16 */}
          <div className="flex flex-col justify-center space-y-4">
            {[...Array(8)].map((_, i) => (
              <Box
                key={`round16-${i}`}
                player1={`Player ${i * 2 + 1}`}
                player2={`Player ${i * 2 + 2}`}
                color1="#d73546"
                color2="#376189"
                color3="#ffffff"
              />
            ))}
          </div>

          {/* Connectors for Round of 16 to Round of 8 */}
          <div className="flex flex-col justify-center h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={`connector16-8-${i}`}
                className="w-8 h-0.5 bg-white mx-2 my-4"
              ></div>
            ))}
          </div>

          {/* Round of 8 */}
          <div className="flex flex-col justify-center space-y-16">
            {[...Array(4)].map((_, i) => (
              <Box
                key={`round8-${i}`}
                player1={`Winner ${i * 2 + 1}`}
                player2={`Winner ${i * 2 + 2}`}
                color1="#d73546"
                color2="#376189"
                color3="#ffffff"
              />
            ))}
          </div>

          {/* Connectors for Round of 8 to Round of 4 */}
          <div className="flex flex-col justify-center h-full">
            {[...Array(4)].map((_, i) => (
              <div
                key={`connector8-4-${i}`}
                className="w-8 h-0.5 bg-white mx-2 my-8"
              ></div>
            ))}
          </div>

          {/* Round of 4 */}
          <div className="flex flex-col justify-center space-y-32">
            {[...Array(2)].map((_, i) => (
              <Box
                key={`round4-${i}`}
                player1={`Winner ${i * 2 + 1}`}
                player2={`Winner ${i * 2 + 2}`}
                color1="#d73546"
                color2="#376189"
                color3="#ffffff"
              />
            ))}
          </div>

          {/* Connectors for Round of 4 to Round of 2 */}
          <div className="flex flex-col justify-center h-full">
            {[...Array(2)].map((_, i) => (
              <div
                key={`connector4-2-${i}`}
                className="w-8 h-0.5 bg-white mx-2 my-16"
              ></div>
            ))}
          </div>

          {/* Round of 2 */}
          <div className="flex flex-col justify-center space-y-64">
            <Box
              key="round2"
              player1="Winner 1"
              player2="Winner 2"
              color1="#d73546"
              color2="#376189"
              color3="#ffffff"
            />
          </div>

          {/* Connector for Round of 2 to Final */}
          <div className="flex flex-col justify-center h-full">
            <div
              key="connector2-1"
              className="w-8 h-0.5 bg-white mx-2 my-32"
            ></div>
          </div>

          {/* Round of 1 (Final) */}
          <div className="flex flex-col justify-center">
            <Box
              key="round1"
              player1="Finalist 1"
              player2="Finalist 2"
              color1="#d73546"
              color2="#376189"
              color3="#ffffff"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
