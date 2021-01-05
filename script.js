console.info('[Yangguang extension] loaded');

const interval = setInterval(() => {
  let headerAd = document.querySelector('#masthead-ad iframe');
  console.info('[Yangguang extension]', headerAd);
  if (headerAd) {
    document.querySelector('#masthead-ad iframe').remove();
    clearInterval(interval);
  }

}, 500);
