let currentUrl = ""

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status === "complete") {
        if (currentUrl === tab.url) {
            return
        } else {
            currentUrl = tab.url
        }
    }
    console.log(currentUrl)
})

// chrome.tabs.query({'active': true, 'lastFocusedWindow': false}, function 
// (tabs) {
//     var url = tabs[0].url;
//     console.log(url)

// })

// chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
//     var url = tabs[0].url;
//     console.log(url);
// });

