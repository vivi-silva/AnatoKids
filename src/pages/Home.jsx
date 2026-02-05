import { useState } from "react";
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

          {/* sombra suave */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Linha 1 - AnatoKids */}
        {/* “degrau” (profundidade) */}
        <text
          x="50%"
          y="135"
          textAnchor="middle"
          className="logoText logoText--blueDepth"
          filter="url(#softShadow)"
        >
          AnatoKids
        </text>
        {/* contorno */}
        <text
          x="50%"
          y="125"
          textAnchor="middle"
          className="logoText logoText--blueStroke"
        >
          AnatoKids
        </text>
        {/* preenchimento gradiente */}
        <text
          x="50%"
          y="125"
          textAnchor="middle"
          className="logoText logoText--blueFill"
        >
          AnatoKids
        </text>

        {/* Linha 2 - Bilíngue */}
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

  function start() {
    game.reset();
    navigate("/nivel/basico");
  }

  return (
    <section className="home">
      <div className="home__bg" />
      <div className="home__overlay" />

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

      {openRules && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Regras do jogo">
          <div className="modal__backdrop" onClick={() => setOpenRules(false)} />

          <div className="modal__panel">
            <div className="modal__top">
              <div className="modal__title">Regras do jogo</div>
              <button
                className="modal__close"
                onClick={() => setOpenRules(false)}
                aria-label="Fechar"
                type="button"
              >
                ✕
              </button>
            </div>

            <video
              className="modal__video"
              src="/videos/regras.mp4"
              controls
              preload="metadata"
              autoPlay
            />

            <div className="modal__bottom">
              <button
                className="home__btnYellow secondary"
                onClick={() => setOpenRules(false)}
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

