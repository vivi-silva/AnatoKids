import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../state/GameContext.jsx";
import "./home.css";

function TitleLogo() {
  return (
    <div className="home__logo" aria-label="AnatoKids Bilíngue">
      <svg
        className="home__logoSvg"
        viewBox="0 0 1200 420"
        role="img"
        aria-label="AnatoKids Bilíngue"
      >
        <defs>
          <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7fe8ff" />
            <stop offset="55%" stopColor="#2c86ff" />
            <stop offset="100%" stopColor="#1a46ff" />
          </linearGradient>

          <linearGradient id="gradGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff4a6" />
            <stop offset="45%" stopColor="#ffd35f" />
            <stop offset="100%" stopColor="#ff9f2e" />
          </linearGradient>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              floodColor="#000"
              floodOpacity="0.35"
            />
          </filter>
        </defs>

        <text
          x="50%"
          y="135"
          textAnchor="middle"
          className="logoText logoText--blueDepth"
          filter="url(#softShadow)"
        >
          AnatoKids
        </text>
        <text
          x="50%"
          y="125"
          textAnchor="middle"
          className="logoText logoText--blueStroke"
        >
          AnatoKids
        </text>
        <text
          x="50%"
          y="125"
          textAnchor="middle"
          className="logoText logoText--blueFill"
        >
          AnatoKids
        </text>

        <text
          x="50%"
          y="252"
          textAnchor="middle"
          className="logoText logoText--goldDepth"
          filter="url(#softShadow)"
        >
          Bilíngue
        </text>
        <text
          x="50%"
          y="242"
          textAnchor="middle"
          className="logoText logoText--goldStroke"
        >
          Bilíngue
        </text>
        <text
          x="50%"
          y="242"
          textAnchor="middle"
          className="logoText logoText--goldFill"
        >
          Bilíngue
        </text>
      </svg>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const game = useGame();

  const [openRules, setOpenRules] = useState(false);
  const [openMascots, setOpenMascots] = useState(false);

  const rulesVideoRef = useRef(null);

  const rulesVideoSrc = useMemo(
    () => `${import.meta.env.BASE_URL}videos/regras/regras.mp4`,
    []
  );

  const mascotImageSrc = useMemo(
    () => `${import.meta.env.BASE_URL}images/mascote.png`,
    []
  );

  function start() {
    game.reset();
    navigate("/nivel/basico");
  }

  function closeRules() {
    if (rulesVideoRef.current) {
      try {
        rulesVideoRef.current.pause();
        rulesVideoRef.current.currentTime = 0;
      } catch {
        // ignore
      }
    }
    setOpenRules(false);
  }

  function closeMascots() {
    setOpenMascots(false);
  }

  return (
    <section className="home">
      <div className="home__bg" />
      <div className="home__overlay" />

      {/* BOTÃO NO CANTO SUPERIOR */}
      <button
        className="home__topButton"
        onClick={() => setOpenMascots(true)}
        type="button"
      >
        Ver mascotes
      </button>

      <div className="home__content">
        <div className="home__center">
          <TitleLogo />

          <p className="home__subtitle"></p>

          <div className="home__buttons">
            <button
              className="home__btnYellow secondary"
              onClick={() => setOpenRules(true)}
              type="button"
            >
              REGRAS
            </button>

            <button className="home__btnYellow" onClick={start} type="button">
              INICIAR MISSÃO! <span aria-hidden="true">🚀</span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE REGRAS */}
      {openRules && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Regras do jogo">
          <div className="modal__backdrop" onClick={closeRules} />

          <div className="modal__panel">
            <div className="modal__top">
              <div className="modal__title">Regras do jogo</div>
              <button
                className="modal__close"
                onClick={closeRules}
                aria-label="Fechar"
                type="button"
              >
                ✕
              </button>
            </div>

            <video
              key={openRules ? "open" : "closed"}
              ref={rulesVideoRef}
              className="modal__video"
              src={rulesVideoSrc}
              controls
              preload="metadata"
              autoPlay
              muted
              playsInline
            />

            <div className="modal__bottom">
              <button
                className="home__btnYellow secondary"
                onClick={closeRules}
                type="button"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DOS MASCOTES */}
      {openMascots && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Opções de mascote">
          <div className="modal__backdrop" onClick={closeMascots} />

          <div className="modal__panel modal__panel--image">
            <div className="modal__top">
              <div className="modal__title">Escolha o seu mascote!</div>
              <button
                className="modal__close"
                onClick={closeMascots}
                aria-label="Fechar"
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="modal__imageWrap">
              <img
                className="modal__image"
                src={mascotImageSrc}
                alt="Opções de mascote do jogo para escolha dos alunos"
              />
            </div>

            <div className="modal__bottom">
              <button
                className="home__btnYellow secondary"
                onClick={closeMascots}
                type="button"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

