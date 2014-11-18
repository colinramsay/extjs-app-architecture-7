Ext.define('Postcard.view.threads.Threads', {
    extend: 'Ext.DataView',
    //requires: ['Postcard.view.threads.ThreadsModel'],
    xtype: 'threads',
    cls: 'thread-view',
    viewModel: 'threads',
    controller: 'threads',
    border: true,
    deferEmptyText: false,
    emptyText: 'No messages',
    tpl: new Ext.XTemplate('<tpl for=".">',
        '<div class="thread">',
            '<div class="date">{lastMessageOn:date("H:m")}</div>',
            '<div class="details">',
                '<div class="header">{people} - {subject}</div>',
                '<div class="body">{body}</div>',
            '</div>',
        '</div>',
    '</tpl>'),
    itemSelector: '.thread',
    tbar: [{
        text: 'Button',
        handler: 'onClickButton'
    }],
    bind: '{threads}',
    listeners: {
        // itemclick: function(dataview, record) {
        //     var rightPane = Ext.ComponentQuery.query('#rightPane')[0];

        //     var fadeInFn = function() {

        //         rightPane.activeItem = rightPane.getComponent('messages');
        //         messageStore.loadData(window['messageData' + record.getId()].messages);
        //         rightPane.activeItem.getEl().setOpacity(0);
        //         rightPane.activeItem.show();
        //         rightPane.activeItem.getEl().fadeIn();
        //         setTimeout(function() {
        //             rightPane.activeItem.updateLayout();    
        //         }, 10);
                
        //     };

        //     if(rightPane.activeItem) {
        //         rightPane.activeItem.getEl().fadeOut({
        //             callback: fadeInFn
        //         });    
        //     } else {
        //         fadeInFn();
        //     }
        // }
    }
});