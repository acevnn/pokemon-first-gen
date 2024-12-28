"use client";

import React, { createContext, RefObject, useContext, useRef } from "react";

// Create the context with an explicit type that allows `null`
const ScrollContext = createContext<RefObject<HTMLUListElement> | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  // Explicitly define the type for useRef to match the context type
  const scrollableRef = useRef<HTMLUListElement>(
    null,
  ) as RefObject<HTMLUListElement>;

  return (
    <ScrollContext.Provider value={scrollableRef}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to access the ScrollContext
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
};
