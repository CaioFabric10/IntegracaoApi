# 🔐 Projeto: Integração Front-End com API de Autenticação - UMFG

## 🎯 Objetivo

Este projeto tem como finalidade integrar uma interface front-end personalizada com a API de autenticação da UMFG. O sistema permite que usuários possam se registrar, realizar login e visualizar uma mensagem de boas-vindas após a autenticação bem-sucedida.

---

## 🧰 Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript (ES6 Modules)
- FontAwesome (ícones)
- Validação de formulários via JS
- API RESTful fornecida pela UMFG
- Efeitos visuais com FinisherHeader
- Deploy via [Vercel](https://vercel.com/)

---

## ✅ Funcionalidades Implementadas

### 🔸 Cadastro de Usuário
- Validação de email com regex
- Verificação de senhas iguais
- Validação de senha forte (mínimo 8 caracteres e 1 número)
- Exibição de mensagens de erro retornadas pela API

### 🔸 Login
- Validação de email
- Armazenamento de dados do usuário no `localStorage`
- Redirecionamento para a tela de boas-vindas
- Exibição de mensagens de erro personalizadas

### 🔸 Tela de Boas-Vindas
- Exibe email do usuário autenticado
- Mostra a data de expiração do token JWT

### 🔸 Interface e Visual
- Layout responsivo e moderno
- Transições suaves entre telas
- Efeito visual animado com partículas no cabeçalho

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
