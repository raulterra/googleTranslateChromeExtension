// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var title = "Translate Google for Selected Text";
  var id = chrome.contextMenus.create({
    "title": title, 
    "contexts":["selection"],
    "id": "contextSelection"});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info) {
    var selection = info.selectionText;

    var language_origin = 'en';
    var language_destination = 'pt';

    var link = "http://translate.google.com/#" + language_origin + "/" + language_destination + "/" + selection;

    chrome.tabs.create({url: link});
};