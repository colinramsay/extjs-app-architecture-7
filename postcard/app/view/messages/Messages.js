Ext.define('Postcard.view.messages.Messages', {
    extend: 'Ext.Panel',
    xtype: 'messages',
    bbar: [
    '->',
    {
        text: 'Reply'
    }],
    items: [{
        xtype: 'dataview',
        store: messageStore,
        flex: 1,
        cls: 'message-view',
        tpl: new Ext.XTemplate('<tpl for=".">',
            '<div class="message">',
                '<div class="date">{date:date("H:m")}</div>',
                '<div class="details">',
                    '<div class="header">{people} - {subject}</div>',
                    '<div class="body">{body}</div>',
                '</div>',
            '</div>',
        '</tpl>'),
        itemSelector: '.message'
    }]
});