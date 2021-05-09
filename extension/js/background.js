console.log('Goto this：扩展执行');


// 添加使用默认搜索引擎搜索
chrome.contextMenus.create({
    title: 'Goto this: %s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
        window.open(params.selectionText, '_blank')
    }
});


// 添加图标的点击事件
chrome.browserAction.onClicked.addListener(function(tab) {
    alert(`作者：tanyiqu
项目地址：https://github.com/tanyiqu/goto-this
版本：1.1`);
});