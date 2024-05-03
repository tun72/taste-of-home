import { createContext, useContext, useState } from "react";

const ObserverContext = createContext();

function ObserverProvider({ children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  return (
    <ObserverContext.Provider
      value={{
        isIntersecting,
        setIsIntersecting,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
}

function useObserver() {
  const context = useContext(ObserverContext);

  if (context === undefined)
    throw new Error("ObserverContext are use outside of the ObserverProvider");
  return context;
}

export { ObserverProvider, useObserver };
