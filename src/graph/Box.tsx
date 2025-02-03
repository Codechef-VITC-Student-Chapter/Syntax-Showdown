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
    <div id={id} className="py-2">
      <div
        className="w-48 h-20 border-2 overflow-hidden text-center flex flex-col rounded-md shadow-md"
        style={{ borderColor: color3, color: color3 }}
      >
        <div
          className="w-48 flex-grow flex flex-col justify-center text-white font-semibold"
          style={{ backgroundColor: color1 }}
        >
          {player1}
        </div>
        <hr className="border-1 border-white" />
        <div
          className="w-48 flex-grow flex flex-col justify-center text-white font-semibold"
          style={{ backgroundColor: color2 }}
        >
          {player2}
        </div>
      </div>
    </div>
  );
}

export default Box;
