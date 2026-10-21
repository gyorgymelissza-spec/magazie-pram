self.addEventListener('install', (e) => {
  console.log('Service Worker instalat');
});
self.addEventListener('fetch', (e) => {
  // Lasă cererile să treacă normal către Firebase
});