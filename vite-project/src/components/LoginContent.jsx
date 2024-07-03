import React from "react";
import "./LoginContent.css";

const Content = () => {
  return (
    <div class="form">
      <p class="title">Entre em ListEase</p>
      <div class="box">
        <p>Nome de usuário</p>
        <input type="text" />
        <p>Senha</p>
        <input type="text" />
        <button>Entrar</button>
        <p class="login">
        Não possui login? Então faça seu <a>cadastro</a>!
        </p>
      </div>
    </div>
  );
};

export default Content;
