Ext.define('Postcard.view.messages.Messages', {
    extend: 'Ext.Panel',
    xtype: 'messages',
    controller: 'messages',
    viewModel: 'messages',
    autoScroll: true,
    bbar: [
    '->',
    {
        text: 'Reply',
        reference: 'replyButton'
    }],
    items: [{
        xtype: 'dataview',
        bind: '{messages}',
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
    }],

    
    show: function() {
        this.down('button').show();
        this.callParent(arguments);
    }
});