export function exibirMensagem(mensagem, tipo = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}


export function validarEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

export function validarSenhas(senha, confirmarSenha) {
    return senha === confirmarSenha;
}

export function validarSenhaForte(senha) {
    const temNumero = /\d/.test(senha);
    const temEspecial = /[^a-zA-Z0-9]/.test(senha);
    const tamanhoMinimo = senha.length >= 8;

    return temNumero && temEspecial && tamanhoMinimo;
}

