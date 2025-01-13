"use client";

import React, { createContext, RefObject, useContext, useRef } from "react";

const ScrollContext = createContext<RefObject<HTMLUListElement> | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollableRef = useRef<HTMLUListElement>(
    null,
  ) as RefObject<HTMLUListElement>;

  return (
    <ScrollContext.Provider value={scrollableRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
};
