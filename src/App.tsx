import clubLogo from '/Club Logo.png';
import swords from '/Swords.png';

function App() {
  return (
    <>
      <div className="w-screen min-h-screen backdrop-blur-[1px]">
        <div className="flex justify-center items-center m-5 p -5">
          <img src={clubLogo} className="h-20"></img>
          <h1 className="text-white text-4xl font-extrabold m-5 p-3">
            Syntax Showdown
          </h1>
          <img src={swords} className="h-18"></img>
        </div>
      </div>
    </>
  );
}

export default App;
