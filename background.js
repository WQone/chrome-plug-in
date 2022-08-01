chrome.contextMenus.create({
    id: 'baidu-search',
    title: '使用百度搜索：%s',
    contexts: ['selection']
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch(info.menuItemId){
        case 'baidu-search':
            chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(info.selectionText)});
            break;
    }
});