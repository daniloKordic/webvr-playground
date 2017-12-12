(() => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').
        then((registration) => {
          console.log('registered');
        }, (err) => {
          console.log(err);
        });
    });
  } else {
    alert('No SW support in your browser!');
  }
})();