import React from 'react';
import "./CadastroContent.css";

const Content = () => {
  return (
    <div class="container">
      <div class="apresentacao">
        <h1>Seja bem-vindo ao <span>ListEase</span>!</h1>
        <h2>Aqui você encontra um sistema para organizar suas compras de forma <span>simples</span> e <span>intuitiva</span>.</h2>
        <h3>Venha facilitar suas compras!</h3>
      </div>
      <section></section>
      <div class="form">
        <h2>Faça seu Cadastro!</h2>
        <div class="box">
          <p>Nome de usuário</p>
          <input type="text" />
          <p>Senha</p>
          <input type="text" />
          <p>Confirme sua Senha</p>
          <input type="text" name="" id="" />
          <button>Cadastre-se</button>
          <p class="login">Já possui cadastro? Então faça <a>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Content;
