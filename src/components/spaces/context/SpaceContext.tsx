import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Defina o tipo do estado compartilhado
interface SpaceContextType {
  spaces: any[];
  setSpaces: Dispatch<SetStateAction<any[]>>;
}

// Cria o contexto com o tipo SpaceContextType ou null
const SpaceContext = createContext<SpaceContextType | null>(null);

// Provedor do contexto
export const SpaceProvider = ({ children }: { children: ReactNode }) => {
  const [spaces, setSpaces] = useState<any[]>([]);

  return (
    <SpaceContext.Provider
      value={{
        spaces,
        setSpaces,
      }}
    >
      {children}
    </SpaceContext.Provider>
  );
};

// Hook para usar o contexto facilmente
export const useSpaceContext = () => {
  const context = useContext(SpaceContext);
  if (!context) {
    throw new Error("useSpaceContext must be used within a SpaceProvider");
  }
  return context;
};
