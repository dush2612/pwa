// populate install dialog in mobile devices
var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

// register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./../sw.js")
    .then((reg) => console.log("service worker registered", reg))
    .catch((err) => console.log("service worker not registered", err));
}

// fire install button in mobile device

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
