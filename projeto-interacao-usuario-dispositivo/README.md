# 🔐 Projeto: Integração Front-End com API de Autenticação - UMFG

## 🎯 Objetivo

Este projeto tem como finalidade integrar uma interface front-end personalizada com a API de 
autenticação da UMFG. O sistema permite que usuários possam se registrar, realizar login e visualizar uma mensagem de boas-vindas após a autenticação bem-sucedida, utilizando token JWT com expiração.

---

## 🧰 Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript (ES6 Modules)
- FontAwesome (ícones)
- Toast customizado para feedbacks visuais
- Validação de formulários via JS (client-side)
- Integração com API RESTful da UMFG (Heroku)
- Efeitos visuais com FinisherHeader
- Deploy público via [Vercel](https://integracao-api-gkeq.vercel.app)

---

## ✅ Funcionalidades Implementadas

### 🔸 Cadastro de Usuário
- Validação de email com regex
- Verificação se as senhas coincidem
- Validação de senha forte (mínimo 8 caracteres, 1 caracter especial, 1 letra maiúscula e minúscula)
- Integração com a API `/Autenticacao/registar`
- Mensagem visual de sucesso ou erro (toast)

### 🔸 Login
- Integração com a API `/Autenticacao/autenticar`
- Validação de email e senha
- Armazenamento de:
   - Email do usuário
   - Token JWT
   - Data de expiração do token
- Tratamento de login inválido (`401 Unauthorized`)
- Redirecionamento para a tela de boas-vindas

### 🔸 Tela de Boas-Vindas
- Exibe:
   - Email do usuário autenticado
   - Data/hora de expiração do token (formatada em `pt-BR`)
- Fallback para “usuário não autenticado” ou data inválida

### 🔸 Interface e Experiência Visual
- Layout moderno com transição entre telas de login e cadastro
- Animação de partículas com FinisherHeader
- Responsividade básica
- Feedback visual via sistema de toasts personalizados

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   https://github.com/CaioFabric10/IntegracaoApi.git

## 🌐 Acesso online

O projeto está hospedado no Vercel e pode ser acessado diretamente via: [Vercel](https://integracao-api-gkeq.vercel.app)
