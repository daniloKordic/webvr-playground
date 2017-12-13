(function(){
 'use strict';

 if (!('indexedDB' in window)) {
  console.log('inedxedDB not supported');
  return;
 }

 var dbPromise = idb.open('testDB', 1);

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
