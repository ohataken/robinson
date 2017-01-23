function templateLink(pattern, title, url) {
  return pattern.replace("%title%", title).replace("%url%", url);
}

const templates = {
  markdown: "[%title%](%url%)",
  html: "<a href='%url%'>%title%</a>",
  text: "%title% (%url%)",
};

Object.keys(templates).forEach((key) => {
  chrome.contextMenus.create({
    id: key,
    title: key,
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const template = templates[info.menuItemId];
  const link = templateLink(template, tab.title, tab.url);
  chrome.tabs.sendMessage(tab.id, { link: link });
});
