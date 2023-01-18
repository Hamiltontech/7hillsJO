// check if the user is visiting on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// variable to store the deferred prompt
let deferredPrompt;

// listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  // stash the event so it can be triggered later
  deferredPrompt = e;
});

// function to show the prompt
const addToHomeScreen = () => {
  if (deferredPrompt && isMobile) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  }
}

// export the addToHomeScreen function so it can be used in other components
export {addToHomeScreen};
