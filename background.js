// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "dar_likes"});
    });
  });

//   chrome.browserAction.onClicked.addListener(function(activeTab){
//     var newURL = "http://stackoverflow.com/";
//     chrome.tabs.create({ url: newURL });
//   });