# 🔒 Modo Privacidade WhatsApp Web - Ocultar e Borrar Mensagens

Uma extensão focada em segurança e privacidade visual para o Google Chrome (Manifest V3) que borra mensagens, nomes de contatos e fotos de perfil no WhatsApp Web durante reuniões, gravações de tela ou compartilhamento de tela no Google Meet, Zoom e Teams.

---

## ✨ Recursos

- 👁️ **Desfoque Inteligente (Blur):** Borra automaticamente as mensagens da conversa, as prévias na barra lateral, nomes de contatos e fotos.
- 🖱️ **Revelar ao passar o mouse:** Basta posicionar o cursor sobre qualquer item para vê-lo temporariamente de forma nítida.
- 🎛️ **Interruptor Liga/Desliga Rápido:** Ative ou desative o modo privacidade a qualquer momento pelo menu da extensão.
- ⚙️ **Filtros Personalizados:** Escolha exatamente o que deseja ocultar (somente mensagens, somente nomes ou somente fotos).
- 🛡️ **100% Privado e Seguro:** Nenhuma mensagem é lida, interceptada ou salva. Trata-se puramente de uma máscara visual aplicada via CSS local no seu navegador.

---

## 🚀 Como testar no seu Google Chrome (Modo Desenvolvedor)

1. Abra o Google Chrome e acesse:  
   `chrome://extensions/`
2. Ative a opção **"Modo do desenvolvedor"** no canto superior direito.
3. Clique em **"Carregar sem compactação"** no canto superior esquerdo.
4. Selecione esta pasta (`whatsapp-privacidade-blur`).
5. Abra o [WhatsApp Web](https://web.whatsapp.com) e veja suas mensagens protegidas e desfocadas automaticamente!

---

## 📁 Estrutura do Projeto

```
whatsapp-privacidade-blur/
├── manifest.json       # Configuração da extensão (Manifest V3)
├── content.js          # Injeção de classes e sincronização em tempo real
├── styles.css          # Regras de desfoque CSS e transições suaves
├── popup.html          # Menu com botão de ligar/desligar e filtros
├── popup.js            # Armazenamento local de preferências
├── icons/              # Ícones oficiais (16x16, 48x48, 128x128)
├── PRIVACY_POLICY.md   # Política de privacidade pronta para a Chrome Web Store
└── README.md           # Documentação do projeto
```

---

## 📄 Licença

Distribuído sob a licença MIT.
