import { registrarUsuario, autenticarUsuario } from './auth.js';
import {
    exibirMensagem,
    validarEmail,
    validarSenhas,
    validarSenhaForte
} from './utils.js';

var body = document.querySelector("body");
var signInButton = document.querySelector("#signIn");
var signUpButton = document.querySelector("#signUp");

body.onload = function () {
    body.className = "on-load";
};

signInButton.addEventListener("click", function () {
    body.className = "sign-in";
});

signUpButton.addEventListener("click", function () {
    body.className = "sign-up";
});

const formCadastro = document.getElementById("formCadastro");
if (formCadastro) {
    formCadastro.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nomeCadastro").value.trim();
        const email = document.getElementById("emailCadastro").value.trim();
        const senha = document.getElementById("senhaCadastro").value;
        const confirmarSenha = document.getElementById("confirmarSenhaCadastro").value;

        if (!validarEmail(email)) {
            return exibirMensagem("Email inválido.");
        }

        if (!validarSenhas(senha, confirmarSenha)) {
            return exibirMensagem("As senhas não coincidem.");
        }

        if (!validarSenhaForte(senha)) {
            return exibirMensagem("A senha deve conter no mínimo 8 caracteres, 1 número, 1 caracter especial, 1 letra maiúscula e uma minúscula.");
        }


        const { status, data } = await registrarUsuario(email, senha, confirmarSenha);

        if (status === 200 || status === 201) {
            exibirMensagem("Cadastro realizado com sucesso!");

            setTimeout(() => {
                localStorage.setItem("usuario", JSON.stringify({
                    email,
                    expira: data.dataExpiracao || "data não fornecida"
                }));
            }, 5000);

        } else {
            exibirMensagem(data?.mensagem || "Erro ao cadastrar. Verifique os dados.");
        }

    });
}

const formLogin = document.getElementById("formLogin");
if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("emailLogin").value.trim();
        const senha = document.getElementById("senhaLogin").value;

        if (!validarEmail(email)) {
            return exibirMensagem("Email inválido.");
        }

        const { status, data } = await autenticarUsuario(email, senha);

        if (status === 200) {
            localStorage.setItem("usuario", JSON.stringify({
                email: email,
                token: data.token,
                expira: data.dataExpiracao || "data não informada"
            }));
            window.location.href = "Pages/welcome.html";
        } else {
            exibirMensagem(data?.mensagem || "Usuário ou senha inválido.");
        }
    });
}
