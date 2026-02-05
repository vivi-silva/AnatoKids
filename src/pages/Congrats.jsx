import { useNavigate, useParams } from "react-router-dom";
import { LEVELS } from "../data/questions.js";
import { useGame } from "../state/GameContext.jsx";

export default function Congrats() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const game = useGame();

  const idx = LEVELS.findIndex((l) => l.id === levelId);
  const current = LEVELS[idx];
  const next = LEVELS[idx + 1];

  return (
    <div className="gameBg">
     <div className="page">
      <div className="card">
        <h1 className="h1">Parabéns! 🎉</h1>
        <p className="p">
          Você concluiu o nível <strong>{current?.label ?? levelId}</strong>.
        </p>
        <p className="p"><strong>Pontuação atual:</strong> {game.score}</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button className="btn btn-gold" onClick={() => navigate(next ? `/nivel/${next.id}` : "/fim")}>
            {next ? `Ir para ${next.label}` : "Ver resultado final"}
          </button>
          <button className="btn btn-blue" onClick={() => navigate("/")}>Início</button>
        </div>
      </div>
    </div>
  </div>
  );
}

