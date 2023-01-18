let deferredPrompt;
const addBtn = document.getElementById('add-button');

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
