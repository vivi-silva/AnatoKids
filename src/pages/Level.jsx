import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QUESTIONS, LEVELS } from "../data/questions.js";
import { useGame } from "../state/GameContext.jsx";

function getLevelLabel(levelId) {
  return LEVELS.find((l) => l.id === levelId)?.label ?? levelId;
}

export default function Level() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const game = useGame();

  const questions = QUESTIONS[levelId] || [];

  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);

  // overlay
  const [showOverlay, setShowOverlay] = useState(false);
  const [feedback, setFeedback] = useState(null); // "ok" | "err" | null

  const current = questions[index];
  const levelLabel = getLevelLabel(levelId);

  const progressText = useMemo(() => {
    if (!questions.length) return "Sem perguntas";
    return `Pergunta ${index + 1} / ${questions.length}`;
  }, [questions.length, index]);

  function handleAnswer(option) {
    if (locked) return;

    const correct = !!option.correct;

    setLocked(true);
    setFeedback(correct ? "ok" : "err");
    if (correct) game.addPoint();

    setShowOverlay(true);
  }

  function continueAfterFeedback() {
    setShowOverlay(false);
    setFeedback(null);
    setLocked(false);

    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      navigate(`/parabens/${levelId}`);
    }
  }

  function exitToHome() {
    setShowOverlay(false);
    navigate("/");
  }

  if (!questions.length) {
    return (
      <div className="gameBg">
        <div className="gameScreen">
          <div className="hudOverlay">
            <h1 className="hudTitle">Nível {levelLabel}</h1>
            <p className="hudMeta">Sem perguntas</p>
            <div className="scorePill">Pontuação: {game.score}</div>
            <button className="btn btn-blue" onClick={() => navigate("/")}>
              Início
            </button>
          </div>

          <div className="gameCard centerOnly">
            <p className="quizPrompt">Não há perguntas cadastradas.</p>
          </div>
        </div>
      </div>
    );
  }

  const isLastQuestion = index >= questions.length - 1;

  return (
    <div className="gameBg">
      <div className="gameScreen">
        {/* HUD (overlay no canto) */}
        <div className="hudOverlay">
          <h1 className="hudTitle">Nível {levelLabel}</h1>
          <p className="hudMeta">{progressText}</p>
          <div className="scorePill">Pontuação: {game.score}</div>
          <button className="btn btn-blue" onClick={() => navigate("/")}>
            Sair
          </button>
        </div>

        {/* Card principal do quiz */}
        <div className="gameCard">
          <p className="quizPrompt">Pergunta (PT): {current.promptPT}</p>

          <div className="videoFrame">
            <video key={current.id} src={current.videoUrl} controls preload="metadata" />
          </div>

          <div className="answerGrid">
            {current.options.map((opt) => (
              <button
                key={opt.id}
                className="btn btn-blue"
                onClick={() => handleAnswer(opt)}
                disabled={locked}
                style={{ textAlign: "left", opacity: locked ? 0.78 : 1 }}
              >
                {opt.text}
              </button>
            ))}
          </div>

          {/* Sem botão de continuar aqui — ele fica no overlay */}
          <div className="actionsRow">
            <span style={{ fontWeight: 850, color: "rgba(11,22,48,0.70)" }}>
              Selecione uma resposta para continuar.
            </span>
          </div>
        </div>

        {/* OVERLAY DE FEEDBACK */}
        {showOverlay && (
          <div className="quizOverlay" role="dialog" aria-modal="true">
            <div className="quizOverlay__backdrop" />

            <div className="quizOverlay__panel">
              <div className="quizOverlay__icon">
                {feedback === "ok" ? "✅" : "❌"}
              </div>

              <h2 className="quizOverlay__title">
                {feedback === "ok" ? "Muito bem!" : "Ops... quase!"}
              </h2>

              <p className="quizOverlay__text">
                {feedback === "ok"
                  ? "Você acertou a resposta."
                  : "Essa não era a opção correta, mas vamos seguir!"}
              </p>

              <div className="quizOverlay__actions">
                <button className="btn btn-gold" onClick={continueAfterFeedback}>
                  {isLastQuestion ? "Concluir nível" : "Continuar"}
                </button>

                <button className="btn btn-blue" onClick={exitToHome}>
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

