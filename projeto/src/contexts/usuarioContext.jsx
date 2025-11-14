import React, { createContext } from "react";

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const usuario = {
    id: 1,
    nome: "admin",
    senha: "admin"
  };

  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};