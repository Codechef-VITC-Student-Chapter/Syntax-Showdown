import { useEffect, useState } from 'react';
import clubLogo from '/Club Logo.png';
import swords from '/Swords.png';
import TournamentBracket from './graph/TournamentBracket';
import FinalsTournamentBracket from './graph/FinalsTournamentBracket';
import LoadingScreen from './LoadingScreen';

interface Match {
  id: string;
  player1: string;
  player2: string;
  nextId?: string;
}

function whatColour(colour: string): string {
  const colourMap: { [key: string]: string } = {
    '#D73646': 'r',
    '#376189': 'b',
    '#2E987A': 'g',
    '#F4B331': 'y',
  };

  return colourMap[colour] || colour;
}

// const AllGames: Match[] = [
//   {
//     id: 'rm1',
//     player1: 'Red Player 1',
//     player2: 'Red Player 2',
//     nextId: 'rq1',
//   },
//   {
//     id: 'rm2',
//     player1: 'Red Player 3',
//     player2: 'Red Player 4',
//     nextId: 'rq1',
//   },
//   {
//     id: 'rm3',
//     player1: 'Red Player 5',
//     player2: 'Red Player 6',
//     nextId: 'rq2',
//   },
//   {
//     id: 'rm4',
//     player1: 'Red Player 7',
//     player2: 'Red Player 8',
//     nextId: 'rq2',
//   },
//   {
//     id: 'rm5',
//     player1: 'Red Player 9',
//     player2: 'Red Player 10',
//     nextId: 'rq3',
//   },
//   {
//     id: 'rm6',
//     player1: 'Red Player 11',
//     player2: 'Red Player 12',
//     nextId: 'rq3',
//   },
//   {
//     id: 'rm7',
//     player1: 'Red Player 13',
//     player2: 'Red Player 14',
//     nextId: 'rq4',
//   },
//   {
//     id: 'rm8',
//     player1: 'Red Player 15',
//     player2: 'Red Player 16',
//     nextId: 'rq4',
//   },

//   // Round of 16 (Blue Group)
//   {
//     id: 'bm1',
//     player1: 'Blue Player 1',
//     player2: 'Blue Player 2',
//     nextId: 'bq1',
//   },
//   {
//     id: 'bm2',
//     player1: 'Blue Player 3',
//     player2: 'Blue Player 4',
//     nextId: 'bq1',
//   },
//   {
//     id: 'bm3',
//     player1: 'Blue Player 5',
//     player2: 'Blue Player 6',
//     nextId: 'bq2',
//   },
//   {
//     id: 'bm4',
//     player1: 'Blue Player 7',
//     player2: 'Blue Player 8',
//     nextId: 'bq2',
//   },
//   {
//     id: 'bm5',
//     player1: 'Blue Player 9',
//     player2: 'Blue Player 10',
//     nextId: 'bq3',
//   },
//   {
//     id: 'bm6',
//     player1: 'Blue Player 11',
//     player2: 'Blue Player 12',
//     nextId: 'bq3',
//   },
//   {
//     id: 'bm7',
//     player1: 'Blue Player 13',
//     player2: 'Blue Player 14',
//     nextId: 'bq4',
//   },
//   {
//     id: 'bm8',
//     player1: 'Blue Player 15',
//     player2: 'Blue Player 16',
//     nextId: 'bq4',
//   },

//   // Round of 16 (Green Group)
//   {
//     id: 'gm1',
//     player1: 'Green Player 1',
//     player2: 'Green Player 2',
//     nextId: 'gq1',
//   },
//   {
//     id: 'gm2',
//     player1: 'Green Player 3',
//     player2: 'Green Player 4',
//     nextId: 'gq1',
//   },
//   {
//     id: 'gm3',
//     player1: 'Green Player 5',
//     player2: 'Green Player 6',
//     nextId: 'gq2',
//   },
//   {
//     id: 'gm4',
//     player1: 'Green Player 7',
//     player2: 'Green Player 8',
//     nextId: 'gq2',
//   },
//   {
//     id: 'gm5',
//     player1: 'Green Player 9',
//     player2: 'Green Player 10',
//     nextId: 'gq3',
//   },
//   {
//     id: 'gm6',
//     player1: 'Green Player 11',
//     player2: 'Green Player 12',
//     nextId: 'gq3',
//   },
//   {
//     id: 'gm7',
//     player1: 'Green Player 13',
//     player2: 'Green Player 14',
//     nextId: 'gq4',
//   },
//   {
//     id: 'gm8',
//     player1: 'Green Player 15',
//     player2: 'Green Player 16',
//     nextId: 'gq4',
//   },

//   // Round of 16 (Yellow Group)
//   {
//     id: 'ym1',
//     player1: 'Yellow Player 1',
//     player2: 'Yellow Player 2',
//     nextId: 'yq1',
//   },
//   {
//     id: 'ym2',
//     player1: 'Yellow Player 3',
//     player2: 'Yellow Player 4',
//     nextId: 'yq1',
//   },
//   {
//     id: 'ym3',
//     player1: 'Yellow Player 5',
//     player2: 'Yellow Player 6',
//     nextId: 'yq2',
//   },
//   {
//     id: 'ym4',
//     player1: 'Yellow Player 7',
//     player2: 'Yellow Player 8',
//     nextId: 'yq2',
//   },
//   {
//     id: 'ym5',
//     player1: 'Yellow Player 9',
//     player2: 'Yellow Player 10',
//     nextId: 'yq3',
//   },
//   {
//     id: 'ym6',
//     player1: 'Yellow Player 11',
//     player2: 'Yellow Player 12',
//     nextId: 'yq3',
//   },
//   {
//     id: 'ym7',
//     player1: 'Yellow Player 13',
//     player2: 'Yellow Player 14',
//     nextId: 'yq4',
//   },
//   {
//     id: 'ym8',
//     player1: 'Yellow Player 15',
//     player2: 'Yellow Player 16',
//     nextId: 'yq4',
//   },

//   // Quarter Finals
//   { id: 'rq1', player1: 'Winner RM1', player2: 'Winner RM2', nextId: 'rs1' },
//   { id: 'rq2', player1: 'Winner RM3', player2: 'Winner RM4', nextId: 'rs1' },
//   { id: 'rq3', player1: 'Winner RM5', player2: 'Winner RM6', nextId: 'rs2' },
//   { id: 'rq4', player1: 'Winner RM7', player2: 'Winner RM8', nextId: 'rs2' },

//   { id: 'bq1', player1: 'Winner BM1', player2: 'Winner BM2', nextId: 'bs1' },
//   { id: 'bq2', player1: 'Winner BM3', player2: 'Winner BM4', nextId: 'bs1' },
//   { id: 'bq3', player1: 'Winner BM5', player2: 'Winner BM6', nextId: 'bs2' },
//   { id: 'bq4', player1: 'Winner BM7', player2: 'Winner BM8', nextId: 'bs2' },

//   { id: 'gq1', player1: 'Winner GM1', player2: 'Winner GM2', nextId: 'gs1' },
//   { id: 'gq2', player1: 'Winner GM3', player2: 'Winner GM4', nextId: 'gs1' },
//   { id: 'gq3', player1: 'Winner GM5', player2: 'Winner GM6', nextId: 'gs2' },
//   { id: 'gq4', player1: 'Winner GM7', player2: 'Winner GM8', nextId: 'gs2' },

//   { id: 'yq1', player1: 'Winner YM1', player2: 'Winner YM2', nextId: 'ys1' },
//   { id: 'yq2', player1: 'Winner YM3', player2: 'Winner YM4', nextId: 'ys1' },
//   { id: 'yq3', player1: 'Winner YM5', player2: 'Winner YM6', nextId: 'ys2' },
//   { id: 'yq4', player1: 'Winner YM7', player2: 'Winner YM8', nextId: 'ys2' },

//   // Semi Finals
//   { id: 'rs1', player1: 'Winner RQ1', player2: 'Winner RQ2', nextId: 'rf1' },
//   { id: 'rs2', player1: 'Winner RQ3', player2: 'Winner RQ4', nextId: 'rf1' },

//   { id: 'bs1', player1: 'Winner BQ1', player2: 'Winner BQ2', nextId: 'bf1' },
//   { id: 'bs2', player1: 'Winner BQ3', player2: 'Winner BQ4', nextId: 'bf1' },

//   { id: 'gs1', player1: 'Winner GQ1', player2: 'Winner GQ2', nextId: 'gf1' },
//   { id: 'gs2', player1: 'Winner GQ3', player2: 'Winner GQ4', nextId: 'gf1' },

//   { id: 'ys1', player1: 'Winner YQ1', player2: 'Winner YQ2', nextId: 'yf1' },
//   { id: 'ys2', player1: 'Winner YQ3', player2: 'Winner YQ4', nextId: 'yf1' },

//   // Final
//   { id: 'rf1', player1: 'Winner RS1', player2: 'Winner RS2', nextId: 'fq1' },
//   { id: 'bf1', player1: 'Winner BS1', player2: 'Winner BS2', nextId: 'fq1' },
//   { id: 'gf1', player1: 'Winner GS1', player2: 'Winner GS2', nextId: 'fq2' },
//   { id: 'yf1', player1: 'Winner YS1', player2: 'Winner YS2', nextId: 'fq2' },

//   // Final Rounds
//   { id: 'fq1', player1: 'Winner RF1', player2: 'Winner BF1', nextId: 'fs1' },
//   { id: 'fq2', player1: 'Winner GF1', player2: 'Winner YF1', nextId: 'fs1' },

//   { id: 'fq3', player1: 'Loser FQ1', player2: 'Loser FQ2', nextId: 'fs2' },

//   { id: 'fs1', player1: 'Winner FQ1', player2: 'Winner FQ2', nextId: 'ff1' },

//   { id: 'fs2', player1: 'Loser FS1', player2: 'Winner FQ3', nextId: 'ff1' },

//   { id: 'ff1', player1: 'Winner FS1', player2: 'Winner FS2' },
// ];

function filterMatches(matches: Match[], filter: string): Match[] {
  if (filter === 'f') {
    return matches.filter(
      (match) =>
        match.id.startsWith('f') || match.id.endsWith('f1') || match.id == 'f'
    );
  }
  return matches.filter((match) => match.id.startsWith(filter));
}

function App() {
  const [allGames, setAllGames] = useState<Match[]>([]);
  const [selectedGroup, setGroup] = useState('');
  // const thing = filterMatches(allGames, whatColour(selectedGroup));
  // const [selectedMatches, setMatches] = useState(thing);

  const fetchData = async () => {
    try {
      const response = await fetch('https://syntaxapi.poseidon0z.com/games');
      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }
      const data: Match[] = await response.json();
      setAllGames(data);

      // Optional: Set a default group if needed
      setGroup('#D73646');
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);
  const [selectedMatches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    setMatches(filterMatches(allGames, whatColour(selectedGroup)));
  }, [selectedGroup]);

  const matchesf: Match[] = filterMatches(allGames, 'f');
  console.log(filterMatches(allGames, 'f'));
  if (selectedGroup == '') {
    return <LoadingScreen></LoadingScreen>;
  }
  return (
    <>
      <div className="w-screen h-screen backdrop-blur-[1px]">
        {/* Header */}
        <div className="flex justify-center items-center m-5 p-5">
          <img src={clubLogo} className="h-12 md:h-20" alt="Club Logo" />
          <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-extrabold m-5 p-3">
            Syntax Showdown
          </h1>
          <img src={swords} className="h-10 md:h-18" alt="Swords" />
        </div>

        {/* Sub Heading */}
        <div className="flex justify-center items-center m-5 p-5">
          <h2 className="text-white sm:text-xl md:text-3xl font-extrabold m-5 p-3">
            Final Showdown
          </h2>
        </div>
        <div className="m-2">
          <FinalsTournamentBracket
            color2="white"
            matches={matchesf}
            prefix="f"
          />
        </div>
        {/* Sub Heading */}
        <div className="flex justify-center items-center m-5 p-5">
          <h2 className="text-white sm:text-xl md:text-3xl font-extrabold m-5 p-3">
            Group Showdown
          </h2>
        </div>

        <div className="custombreaks flex w-screen justify-center">
          {/* Buttons */}
          <div
            className="flex-col m-16 p-8 rounded-2xl border-4 border-white justify-center items-center inline-flex"
            style={{
              borderStyle: 'dashed',
              borderWidth: '4px',
              borderColor: 'white',
              borderSpacing: '4px',
            }}
          >
            <div
              className="text-white sm:text-xl md:text-2xl font-medium"
              style={{ color: selectedGroup }}
            >
              Choose Your Group
            </div>
            <div className="flexer max-w-full flex py-8">
              {/* Buttons */}
              {[
                { name: 'Group 1', color: '#D73646' },
                { name: 'Group 2', color: '#376189' },
                { name: 'Group 3', color: '#2E987A' },
                { name: 'Group 4', color: '#F4B331' },
              ].map((group, index) => (
                <button
                  key={index}
                  className="m-1 md:m-2 p-1 md:p-2 cursor-pointer"
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
                    <div className="px-2 py-1 flex justify-evenly text-sm md:text-2xl bg-white border-4 rounded-md border-[#373737]">
                      <div>{group.name}</div>
                      <div>►</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Group Bracket */}
          <TournamentBracket
            key={selectedGroup}
            color1={selectedGroup}
            color2="white"
            matches={selectedMatches}
            prefix={whatColour(selectedGroup)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
