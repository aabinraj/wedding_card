"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AppState = {
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: (p: number) => void;
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const value: AppState = {
    isPlaying,
    setIsPlaying,
    isOpen,
    setIsOpen,
    loadingProgress,
    setLoadingProgress,
  };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppState => {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return ctx;
};
