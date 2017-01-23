browser.runtime.onMessage.addListener((message) => {
  alert(message.link);
  const el = document.createElement("input");
  document.body.appendChild(el);
  el.setAttribute("type", "text");
  el.setAttribute("value", message.link);
  el.select();
  document.execCommand("copy");
});
