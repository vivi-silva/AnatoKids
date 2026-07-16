import { useEffect, useRef, useState } from "react";
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
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  // Evita somar ponto novamente se a pessoa voltar e acertar a mesma pergunta
  const [answeredCorrectIds, setAnsweredCorrectIds] = useState(() => new Set());

  const feedbackTimerRef = useRef(null);

  const current = questions[index];
  const levelLabel = getLevelLabel(levelId);

  const isLastQuestion = index >= questions.length - 1;

  const totalQuestions = questions.length;
  const currentQuestionNumber = index + 1;
  const progressPercent = totalQuestions
    ? (currentQuestionNumber / totalQuestions) * 100
    : 0;

  const okVideoSrc = `${import.meta.env.BASE_URL}videos/feedback/acerto.mp4`;
  const errVideoSrc = `${import.meta.env.BASE_URL}videos/feedback/erro.mp4`;

  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) {
        clearTimeout(feedbackTimerRef.current);
      }
    };
  }, []);

  function clearFeedbackTimer() {
    if (feedbackTimerRef.current) {
      clearTimeout(feedbackTimerRef.current);
      feedbackTimerRef.current = null;
    }
  }

  function resetAnswerVisualState() {
    clearFeedbackTimer();
    setShowOverlay(false);
    setFeedback(null);
    setLocked(false);
    setSelectedOptionId(null);
  }

  function handleAnswer(option) {
    if (locked || !current) return;

    const correct = !!option.correct;

    clearFeedbackTimer();

    setLocked(true);
    setSelectedOptionId(option.id);
    setFeedback(correct ? "ok" : "err");

    if (correct && !answeredCorrectIds.has(current.id)) {
      game.addPoint();

      setAnsweredCorrectIds((prev) => {
        const next = new Set(prev);
        next.add(current.id);
        return next;
      });
    }

    // Pequeno atraso para a criança ver a alternativa destacada antes do popup
    feedbackTimerRef.current = setTimeout(() => {
      setShowOverlay(true);
    }, correct ? 650 : 500);
  }

  function continueAfterCorrect() {
    resetAnswerVisualState();

    if (index < questions.length - 1) {
      setIndex((i) => i + 1);
    } else {
      navigate(`/parabens/${levelId}`);
    }
  }

  function tryAgainAfterWrong() {
    resetAnswerVisualState();
  }

  function previousQuestion() {
    if (index <= 0) return;

    resetAnswerVisualState();
    setIndex((i) => Math.max(0, i - 1));
  }

  function exitToHome() {
    resetAnswerVisualState();
    navigate("/");
  }

  if (!questions.length) {
    return (
      <div className="gameBg">
        <div className="gameScreen">
          <div className="hudOverlay">
            <div className="hudBar">
              <div className="hudBar__left">
                <h1 className="hudTitle">{levelLabel}</h1>
              </div>

              <div className="hudBar__center">
                <div className="progressLine" aria-label="Sem perguntas">
                  <div className="progressLine__fill" style={{ width: "0%" }} />
                  <span className="progressLine__label">0/0</span>
                </div>
              </div>

              <div className="hudBar__right">
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
              <div
                className="progressLine"
                aria-label={`Progresso ${currentQuestionNumber} de ${totalQuestions}`}
              >
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
                {current.options.map((opt, optionIndex) => {
                  const pt = opt.pt ?? opt.text ?? "";
                  const dati = opt.dati ?? pt;
                  const optionLetter = String.fromCharCode(65 + optionIndex);

                  const isSelected = selectedOptionId === opt.id;
                  const isCorrectSelected = isSelected && opt.correct;
                  const isWrongSelected = isSelected && !opt.correct;

                  return (
                    <button
                      key={opt.id}
                      className={[
                        "btn",
                        "btn-blue",
                        "optionBtn",
                        "optionBtn--vertical",
                        isCorrectSelected ? "is-correct" : "",
                        isWrongSelected ? "is-wrong" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => handleAnswer(opt)}
                      disabled={locked}
                      type="button"
                    >
                      <div className="optionBtn__content">
                        <span className="optionBtn__label">
                          {optionLetter})
                        </span>

                        <div className="optionBtn__texts">
                          <span className="optionBtn__pt">{pt}</span>
                          <span className="optionBtn__dati dati">{dati}</span>
                        </div>

                        {opt.image && (
                          <img
                            className="optionBtn__image"
                            src={`${import.meta.env.BASE_URL}${opt.image}`}
                            alt={pt}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="actionsRow">
            <button
              className="btn btn-blue"
              onClick={previousQuestion}
              disabled={index === 0 || locked || showOverlay}
              type="button"
            >
              ← Voltar pergunta
            </button>

            <button className="btn btn-blue" onClick={exitToHome} type="button">
              Escolher fase
            </button>

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
                  <button
                    className="btn btn-gold"
                    onClick={continueAfterCorrect}
                    type="button"
                  >
                    {isLastQuestion ? "Concluir fase" : "Continuar"}
                  </button>
                ) : (
                  <button
                    className="btn btn-gold"
                    onClick={tryAgainAfterWrong}
                    type="button"
                  >
                    Tentar novamente
                  </button>
                )}

                <button className="btn btn-blue" onClick={exitToHome} type="button">
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