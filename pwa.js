let deferredPrompt;
const addBtn = document.getElementById('add-to-home-screen');

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the add to home screen message
  addBtn.classList.remove('hidden');
});
addBtn.addEventListener('click', (e) => {
  // hide the message
  addBtn.classList.add('hidden');
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
});
