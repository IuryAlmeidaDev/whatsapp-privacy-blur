document.addEventListener('DOMContentLoaded', () => {
  const toggleMaster = document.getElementById('toggleMaster');
  const chkMessages = document.getElementById('chkMessages');
  const chkNames = document.getElementById('chkNames');
  const chkPhotos = document.getElementById('chkPhotos');

  // Carrega preferências salvas
  chrome.storage.local.get({
    enabled: true,
    blurMessages: true,
    blurNames: true,
    blurPhotos: true
  }, (data) => {
    toggleMaster.checked = data.enabled !== false;
    chkMessages.checked = data.blurMessages !== false;
    chkNames.checked = data.blurNames !== false;
    chkPhotos.checked = data.blurPhotos !== false;
  });

  // Salva alterações
  function save() {
    chrome.storage.local.set({
      enabled: toggleMaster.checked,
      blurMessages: chkMessages.checked,
      blurNames: chkNames.checked,
      blurPhotos: chkPhotos.checked
    });
  }

  toggleMaster.addEventListener('change', save);
  chkMessages.addEventListener('change', save);
  chkNames.addEventListener('change', save);
  chkPhotos.addEventListener('change', save);
});
