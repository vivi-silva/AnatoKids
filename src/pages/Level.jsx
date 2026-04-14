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

  const [showOverlay, setShowOverlay] = useState(false);
  const [feedback, setFeedback] = useState(null); // "ok" | "err" | null

  const current = questions[index];
  const levelLabel = getLevelLabel(levelId);

  const progressText = useMemo(() => {
    if (!questions.length) return "Sem perguntas";
    return `Pergunta ${index + 1} / ${questions.length}`;
  }, [questions.length, index]);

  const isLastQuestion = index >= questions.length - 1;

  const totalQuestions = questions.length;
  const currentQuestionNumber = index + 1;
  const progressPercent = totalQuestions
    ? (currentQuestionNumber / totalQuestions) * 100
    : 0;

  const okVideoSrc = `${import.meta.env.BASE_URL}videos/feedback/acerto.mp4`;
  const errVideoSrc = `${import.meta.env.BASE_URL}videos/feedback/erro.mp4`;

  function handleAnswer(option) {
    if (locked) return;

    const correct = !!option.correct;

    setLocked(true);
    setFeedback(correct ? "ok" : "err");

    if (correct) game.addPoint();

    setShowOverlay(true);
  }

  function continueAfterCorrect() {
    setShowOverlay(false);
    setFeedback(null);
    setLocked(false);

    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      navigate(`/parabens/${levelId}`);
    }
  }

  function tryAgainAfterWrong() {
    setShowOverlay(false);
    setFeedback(null);
    setLocked(false);
  }

  function exitToHome() {
    setShowOverlay(false);
    setFeedback(null);
    setLocked(false);
    navigate("/");
  }

  if (!questions.length) {
    return (
      <div className="gameBg">
        <div className="gameScreen">
          <div className="hudOverlay">
            <div className="hudMain">
              <div className="hudMain__left">
                <h1 className="hudTitle">{levelLabel}</h1>

                <div className="hudProgress">
                  <div className="hudProgress__track">
                    <div
                      className="hudProgress__fill"
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div className="hudProgress__meta">
                    <span className="hudMeta">0/0</span>
                  </div>
                </div>
              </div>

              <div className="hudMain__right">
                <div className="scoreBadge">⭐ {game.score}</div>

                <button className="btn btn-blue" onClick={() => navigate("/")}>
                  Início
                </button>
              </div>
            </div>
          </div>

          <div className="gameCard centerOnly">
            <p className="quizPrompt">Não há perguntas cadastradas.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!current) return null;

  const questionVideoSrc = current.videoUrl
    ? `${import.meta.env.BASE_URL}${current.videoUrl}`
    : "";

  const overlayVideoSrc =
    feedback === "ok" ? okVideoSrc : feedback === "err" ? errVideoSrc : "";

  return (
    <div className="gameBg">
      <div className="gameScreen">
        {/* HUD GAMEFICADO */}
        <div className="hudOverlay">
  <div className="hudBar">
    <div className="hudBar__left">
      <h1 className="hudTitle">{levelLabel}</h1>
    </div>

    <div className="hudBar__center">
      <div className="progressLine" aria-label={`Progresso ${currentQuestionNumber} de ${totalQuestions}`}>
        <div
          className="progressLine__fill"
          style={{ width: `${progressPercent}%` }}
        />
        <span className="progressLine__label">
          {currentQuestionNumber}/{totalQuestions}
        </span>
      </div>
    </div>

    <div className="hudBar__right">
      <div className="scoreBadge">⭐ {game.score}</div>

      <button className="btn btn-blue" onClick={exitToHome}>
        Sair
      </button>
    </div>
  </div>
</div>

        {/* Card principal do quiz */}
        <div className="gameCard">
          <p className="quizPrompt">Pergunta (PT): {current.promptPT}</p>

          <div className="quizLayout">
            {/* Vídeo grande */}
            <div className="quizLayout__video">
              <div className="videoFrame videoFrame--large">
                {questionVideoSrc ? (
                  <video
                    key={current.id}
                    src={questionVideoSrc}
                    controls
                    preload="metadata"
                    playsInline
                  />
                ) : (
                  <div style={{ padding: 16, color: "white", fontWeight: 800 }}>
                    Vídeo da pergunta não encontrado.
                  </div>
                )}
              </div>
            </div>

            {/* Respostas em coluna */}
            <div className="quizLayout__answers">
              <div className="answerGrid answerGrid--vertical">
                {current.options.map((opt) => {
                  const pt = opt.pt ?? opt.text ?? "";
                  const dati = opt.dati ?? pt;

                  return (
                    <button
  key={opt.id}
  className="btn btn-blue optionBtn optionBtn--vertical"
  onClick={() => handleAnswer(opt)}
  disabled={locked}
  style={{ opacity: locked ? 0.78 : 1 }}
>
  <div className="optionBtn__content">
    {opt.image && (
      <img
        className="optionBtn__image"
        src={`${import.meta.env.BASE_URL}${opt.image}`}
        alt={pt}
      />
    )}

    <div className="optionBtn__texts">
      <span className="optionBtn__pt">{pt}</span>
      <span className="optionBtn__dati dati">{dati}</span>
    </div>
  </div>
</button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="actionsRow">
            <span style={{ fontWeight: 850, color: "rgba(11,22,48,0.70)" }}>
              Selecione uma resposta para continuar.
            </span>
          </div>
        </div>

        {/* Popup de feedback */}
        {showOverlay && (
          <div className="quizOverlay" role="dialog" aria-modal="true">
            <div className="quizOverlay__backdrop" />

            <div className="quizOverlay__panel">
              <h2 className="quizOverlay__title">
                {feedback === "ok" ? "Muito bem!" : "Ops... tente de novo"}
              </h2>

              <div className="videoFrame" style={{ height: "auto" }}>
                {overlayVideoSrc ? (
                  <video
                    key={feedback}
                    src={overlayVideoSrc}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <div style={{ padding: 16, fontWeight: 800 }}>
                    Vídeo de feedback não encontrado.
                  </div>
                )}
              </div>

              <div className="quizOverlay__actions">
                {feedback === "ok" ? (
                  <button className="btn btn-gold" onClick={continueAfterCorrect}>
                    {isLastQuestion ? "Concluir nível" : "Continuar"}
                  </button>
                ) : (
                  <button className="btn btn-gold" onClick={tryAgainAfterWrong}>
                    Tentar novamente
                  </button>
                )}

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