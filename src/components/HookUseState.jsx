// A biblioteca React fornece a função useState para componentes funcionais, que retornará um array com dois elementos, onde o primeiro é a constante que armazena aquele estado e o segundo é uma função para substituir o valor daquele estado. A Listagem 3 mostra a chamada de um Hook.
// Mas por que utilizar estados?
// Por questão de performace, o react utiliza o conceito de imutabilidade, onde não é possível alterar o valor de uma variável diretamente.
//Evento onClick: O evento onclick executa determinada funcionalidade quando um botão é clicado. Como detectar cliques em botões para alterar o estado.

import { useState } from "react"; //Importando o hook useState
function HookUseState() {
  //SINTAXE
  //const [ESTADO, FORMA DE MODIFICAR O ESTADO] = Hook useState (VALOR INICIAL)
  const [cantor, setCantor] = useState("Zeca Pagodinho");

  //COM FUNÇÃO BÁSICA
  function MudarCantor() {
    if (cantor === "Zeca Pagodinho") {
      setCantor("Alcione");
    } else {
      setCantor("Zeca Pagodinho");
    }
  }

//COM ARROW FUNCTION  - IF E ELSE E TERNÁRIO

  //Uma função para mudar os cantores utilizando IF e ELSE
  //   const Mudar = () => {
  //     if (cantor === "Zeca Pagodinho") {
  //       setCantor("Alcione");
  //     } else {
  //       setCantor("Zeca Pagodinho");
  //     }
  //   };

  //Uma função para mudar os cantores utilizando o ternário
  //  ? Perguntando 'SE'  a comparação é verdadeira
  // : Senão, caso não seja verdadeira

  const Mudar = () => {
    setCantor(cantor === "Zeca Pagodinho" ? "Alcione" : "Zeca Pagodinho");
  };

  return (
    <>
      <h1> {cantor} </h1>

      <button
        onClick={() => {
          MudarCantor();
        }}
      >
        {" "}
        COM FUNCTION BÁSICA{" "}
      </button>

      <button
        onClick={() => {
          MudarCantor();
        }}
      >
        TROCAR O CANTOR
      </button>
    </>
  );
}

export default HookUseState;
