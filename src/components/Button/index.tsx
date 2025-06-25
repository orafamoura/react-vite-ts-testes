'use client';

import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<"button"> // dessa forma ele aceita todos os atributos nativos de um button

const Button = ({children, onClick}: ButtonProps) => {  
  return <button type="button" onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-xl/20">{children}</button>
;
};

export default Button;