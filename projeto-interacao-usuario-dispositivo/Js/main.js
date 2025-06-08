import { registrarUsuario, autenticarUsuario } from './auth.js';
import { exibirMensagem, validarEmail, validarSenhas } from './utils.js';

document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target[1].value;
    const senha = e.target[2].value;
    const confirmarSenha = e.target[3].value;

    if (!validarEmail(email)) return exibirMensagem("Email inválido", "error");
    if (!validarSenhas(senha, confirmarSenha)) return exibirMensagem("Senhas não coincidem", "error");

    const { status, data } = await registrarUsuario(email, senha);

    if (status === 201) {
        localStorage.setItem("usuario", JSON.stringify({ email, expira: data.expiracao }));
        window.location.href = "welcome.html";
    } else {
        exibirMensagem(data.mensagem || "Erro desconhecido", "error");
    }
});
