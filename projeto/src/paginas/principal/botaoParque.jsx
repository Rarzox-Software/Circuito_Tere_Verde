import React from 'react';

export default function BotaoParque({ logo, children, selecionado, onClick }) {
  return (
    <>
        {React.cloneElement(logo, { 
          selecionado,
          className: `transition-all duration-300 ${selecionado ? 'scale-110' : 'hover:scale-105'}`
        })}
    </>
  );
}