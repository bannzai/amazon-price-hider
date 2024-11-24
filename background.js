// background.js - Handling tab updates and navigation
chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"]
    });
}, { url: [{ urlMatches: 'https://www.amazon.co.jp/.*' }] });

// popup.html - Optional UI for the extension
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Amazon Price Hider</title>
  </head>
  <body>
    <h1>Amazon Price Hider</h1>
    <p>All prices are hidden to help you decide mindfully!</p>
  </body>
</html>
*/
