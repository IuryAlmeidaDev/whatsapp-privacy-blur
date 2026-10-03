// Content Script para Extensão: Modo Privacidade WhatsApp Web

(function () {
  'use strict';

  // Configurações padrão
  const DEFAULT_SETTINGS = {
    enabled: true,
    blurMessages: true,
    blurNames: true,
    blurPhotos: true
  };

  // Aplica as classes no body da página
  function applyClasses(settings) {
    const isEnabled = settings.enabled !== false;
    document.body.classList.toggle('wa-privacy-active', isEnabled);

    if (isEnabled) {
      document.body.classList.toggle('blur-messages', settings.blurMessages !== false);
      document.body.classList.toggle('blur-names', settings.blurNames !== false);
      document.body.classList.toggle('blur-photos', settings.blurPhotos !== false);
    } else {
      document.body.classList.remove('blur-messages', 'blur-names', 'blur-photos');
    }
  }

  // Carrega configurações salvas
  chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
    applyClasses(settings);
  });

  // Atualização em tempo real quando o usuário mudar algo no popup
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
      chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
        applyClasses(settings);
      });
    }
  });
})();
