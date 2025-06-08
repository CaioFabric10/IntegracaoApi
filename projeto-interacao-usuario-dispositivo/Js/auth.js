const API_BASE_URL = 'https://umfgcloud-autenticacao-service-7e27ead80532.herokuapp.com';

export async function registrarUsuario(email, senha, senhaConfirmada) {
    const url = `${API_BASE_URL}/Autenticacao/registar`;
    console.log("➡️ POST para:", url);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha, senhaConfirmada })
        });

        let data = {};
        try {
            data = await response.json();
        } catch (e) {
            console.warn("⚠️ Resposta sem JSON");
        }

        console.log("Status da resposta:", response.status);
        return { status: response.status, data };
    } catch (error) {
        console.error("Erro de rede:", error);
        return { status: 500, data: { mensagem: 'Erro de rede ou servidor fora do ar.' } };
    }
}


export async function autenticarUsuario(email, senha) {
    try {
        const response = await fetch(`${API_BASE_URL}/Autenticacao/autenticar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        let data = {};
        try {
            data = await response.json();
        } catch (e) {
            console.warn("Resposta sem JSON");
        }

        return { status: response.status, data };

    } catch (error) {
        return {
            status: 0,
            data: { mensagem: "Erro de rede ou servidor fora do ar." }
        };
    }
}
