browser.runtime.onMessage.addListener((message) => {
  alert(message.link);
});
