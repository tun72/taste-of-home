import { createContext, useContext, useRef, useState } from "react";

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
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { ObserverProvider, useObserver };
