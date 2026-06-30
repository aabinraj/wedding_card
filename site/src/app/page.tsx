"use client";
import React, { useState, useCallback } from "react";
import { OpeningAnimation } from "../components/OpeningAnimation";
import { Envelope } from "../components/Envelope";
import { MainInvitation } from "../components/MainInvitation";
import { useAppState } from "../context/AppStateContext";
import { SparkleCursor } from "../components/SparkleCursor";

export default function HomePage() {
  const { isOpen } = useAppState();
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <>
      {/* Sparkle cursor – always visible */}
      <SparkleCursor />

      {/* Phase 1: Opening animation (line + text) */}
      {!introComplete && <OpeningAnimation onComplete={handleIntroComplete} />}

      {/* Phase 2: Envelope (shown after intro, hidden after opened) */}
      {introComplete && !isOpen && <Envelope />}

      {/* Phase 3: Main invitation content */}
      {isOpen && <MainInvitation />}
    </>
  );
}
