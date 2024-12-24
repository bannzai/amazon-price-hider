// background.js - Handling tab updates and navigation
chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.frameId === 0) { // Make sure we're only injecting into the main frame
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["content.js"]
        });
    }
}, { url: [{ urlMatches: 'https://www.amazon.co.jp/.*' }] });
