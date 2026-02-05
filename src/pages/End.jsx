import { useNavigate } from "react-router-dom";
import { useGame } from "../state/GameContext.jsx";

export default function End() {
  const navigate = useNavigate();
  const game = useGame();

  return (
  <div className="gameBg">
    <div className="page">
      <div className="card">
        <h1 className="h1">Fim do jogo 🎉</h1>
        <p className="p"><strong>Score final:</strong> {game.score}</p>

        <button className="btn btn-blue" onClick={() => navigate("/")}>
          Voltar ao início
        </button>
      </div>
    </div>
  </div>
  );
}


