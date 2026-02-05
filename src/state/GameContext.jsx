import React, { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);

  const value = useMemo(
    () => ({
      score,
      addPoint: () => setScore((s) => s + 1),
      reset: () => setScore(0),
    }),
    [score]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame precisa estar dentro de <GameProvider>");
  return ctx;
}
