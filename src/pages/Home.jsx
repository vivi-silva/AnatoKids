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
  const [rulesScreen, setRulesScreen] = useState("video"); // "video" | "text"

  const [openGlossary, setOpenGlossary] = useState(false);
  const [openMascots, setOpenMascots] = useState(false);

  const rulesVideoRef = useRef(null);
  const glossaryVideoRef = useRef(null);

  const rulesVideoSrc = useMemo(
    () => `${import.meta.env.BASE_URL}videos/regras/regras.mp4`,
    []
  );

  const glossaryVideoSrc = useMemo(
    () => `${import.meta.env.BASE_URL}videos/sinalario/sinalario.mp4`,
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

  function openRulesModal() {
    setRulesScreen("video");
    setOpenRules(true);
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

    setRulesScreen("video");
    setOpenRules(false);
  }

  function showRulesVideo() {
    setRulesScreen("video");
  }

  function showRulesText() {
    if (rulesVideoRef.current) {
      try {
        rulesVideoRef.current.pause();
      } catch {
        // ignore
      }
    }

    setRulesScreen("text");
  }

  function closeGlossary() {
    if (glossaryVideoRef.current) {
      try {
        glossaryVideoRef.current.pause();
        glossaryVideoRef.current.currentTime = 0;
      } catch {
        // ignore
      }
    }
    setOpenGlossary(false);
  }

  function closeMascots() {
    setOpenMascots(false);
  }

  return (
    <section className="home">
      <div className="home__bg" />
      <div className="home__overlay" />

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
              onClick={openRulesModal}
              type="button"
            >
              REGRAS
            </button>

            <button
              className="home__btnYellow secondary"
              onClick={() => setOpenGlossary(true)}
              type="button"
            >
              SINALÁRIO
            </button>

            <button className="home__btnYellow" onClick={start} type="button">
              INICIAR MISSÃO! <span aria-hidden="true">🚀</span>
            </button>
          </div>
        </div>
      </div>

      {openRules && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Regras do jogo"
        >
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

            <div className="modal__tabs">
              <button
                className={`modal__tab ${
                  rulesScreen === "video" ? "is-active" : ""
                }`}
                onClick={showRulesVideo}
                type="button"
              >
                Libras
              </button>

              <button
                className={`modal__tab ${
                  rulesScreen === "text" ? "is-active" : ""
                }`}
                onClick={showRulesText}
                type="button"
              >
                Português
              </button>
            </div>

            {rulesScreen === "video" ? (
              <video
                key={openRules ? "rules-open" : "rules-closed"}
                ref={rulesVideoRef}
                className="modal__video"
                src={rulesVideoSrc}
                controls
                preload="metadata"
                autoPlay
                muted
                playsInline
              />
            ) : (
             <div className="modal__rulesText">
  <h3>REGRAS DO JOGO</h3>

  <h4>Como funciona este jogo?</h4>

  <p>
    Este jogo tem como objetivo ajudar vocês, alunos, a aprender e melhorar a
    compreensão sobre o corpo humano — seus significados, sinais em Libras e os
    nomes de cada parte do corpo.
  </p>

  <p>
    Além disso, o jogo contribui para que vocês compreendam os nomes dos órgãos
    localizados na cabeça, no interior do corpo e também na parte externa,
    envolvendo conteúdos gerais de anatomia humana.
  </p>

  <p>O jogo é composto por 30 perguntas, divididas em 3 fases:</p>

  <ul>
    <li>Fase 1</li>
    <li>Fase 2</li>
    <li>Fase 3</li>
  </ul>

  <p>
    Cada fase possui 10 perguntas, com alternativas A, B e C, nas quais você
    deverá clicar na resposta correta.
  </p>

  <p>
    Se errar, não tem problema! Você poderá tentar novamente até acertar.
  </p>

  <p>
    O principal objetivo do jogo é aprender enquanto joga.
  </p>

  <p>Como jogar é muito simples: basta observar, responder e aprender com:</p>

  <ul>
    <li>os sinais em Libras</li>
    <li>os nomes em português</li>
    <li>os significados</li>
    <li>e as imagens</li>
  </ul>

  <p>
    Tudo isso vai ajudar na memorização e na compreensão do conteúdo.
  </p>

  <p>
    Esse aprendizado é muito importante para que você conheça melhor o seu
    próprio corpo.
  </p>
</div>
            )}

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

      {openGlossary && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Sinalário">
          <div className="modal__backdrop" onClick={closeGlossary} />

          <div className="modal__panel">
            <div className="modal__top">
              <div className="modal__title">Sinalário</div>
              <button
                className="modal__close"
                onClick={closeGlossary}
                aria-label="Fechar"
                type="button"
              >
                ✕
              </button>
            </div>

            <video
              key={openGlossary ? "glossary-open" : "glossary-closed"}
              ref={glossaryVideoRef}
              className="modal__video"
              src={glossaryVideoSrc}
              controls
              preload="metadata"
              autoPlay
              muted
              playsInline
            />

            <div className="modal__bottom">
              <button
                className="home__btnYellow secondary"
                onClick={closeGlossary}
                type="button"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}

      {openMascots && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Opções de mascote">
          <div className="modal__backdrop" onClick={closeMascots} />

          <div className="modal__panel modal__panel--image">
            <div className="modal__top">
              <div className="modal__title">Mascote escolhido!</div>
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