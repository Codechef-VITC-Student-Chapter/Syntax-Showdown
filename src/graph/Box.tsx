interface Props {
  id: string; // 🔥 Added id so `document.getElementById(id)` works
  player1: string;
  player2: string;
  color1: string;
  color2: string;
  color3: string;
}

function Box({ id, player1, player2, color1, color2, color3 }: Props) {
  return (
    <div id={id} className="py-2 flex flex-row">
      <div
        className="bg-gray-600 text-sm text-white text-center border-white border-1 mx-1"
        style={{ writingMode: 'vertical-rl' }}
      >
        {id.endsWith('f') ? id.slice(0, -1) : id}
      </div>
      <div
        className="w-24 md:w-32 lg:w-48 min-h-24 border-2 overflow-hidden text-center flex flex-col rounded-md shadow-md text-md md:font-semibold"
        style={{ borderColor: color3, color: color3 }}
      >
        <div
          className="w-full flex-grow flex flex-col justify-center"
          style={{ backgroundColor: color1 }}
        >
          {player1}
        </div>
        <hr className="border-1" style={{ borderColor: color3 }} />
        <div
          className="w-full flex-grow flex flex-col justify-center"
          style={{ backgroundColor: color2 }}
        >
          {player2}
        </div>
      </div>
    </div>
  );
}

export default Box;
