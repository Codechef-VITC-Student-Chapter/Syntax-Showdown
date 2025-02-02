interface props {
  player1: string;
  player2: string;
  color1: string;
  color2: string;
  color3: string;
}

function Box({ player1, player2, color1, color2, color3 }: props) {
  return (
    <div
      className="w-48 h-21 border-2 overflow-hidden text-center flex flex-col"
      style={{ borderColor: color3, color: color3 }}
    >
      <div
        className="w-48 grow flex flex-col justify-center"
        style={{ backgroundColor: color1 }}
      >
        {player1}
      </div>
      <hr className="border-1 border-white" />
      <div
        className="w-48 grow flex flex-col justify-center"
        style={{ backgroundColor: color2 }}
      >
        {player2}
      </div>
    </div>
  );
}

export default Box;
