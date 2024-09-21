chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openExtension",
    title: "拡張機能を起動する",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openExtension" && tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        alert('TypeScriptから拡張機能が起動されました！');
      }
    });
  }
});
