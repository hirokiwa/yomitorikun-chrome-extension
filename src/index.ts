chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "scanQRCode",
    title: "QRコードをスキャン",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "scanQRCode" && tab?.id) {
    chrome.tabs.captureVisibleTab((screenshotUrl) => {
      if (screenshotUrl && tab.id) {
        chrome.tabs.sendMessage(tab.id, { screenshotUrl });
      }
    });
  }
});
