Ext.define('Postcard.view.main.Main', {
    extend: 'Ext.Panel',
    requires: [
        'Postcard.view.main.MainController',
        'Postcard.view.main.MainModel',
        'Postcard.view.composer.Composer',
        'Postcard.view.messages.Messages',
        'Postcard.view.threads.Threads',
        'Postcard.view.header.Header'
    ],
    xtype: 'app-main',
    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',
    session: true,

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    dockedItems: [{ xtype: 'app-header' }],

    items: [
        { xtype: 'threads', flex: 1 },
        {
            xtype: 'container',
            flex: 1,
            activeItem: null,
            defaults: { hidden: true },
            items: [
                { xtype: 'messages', reference: 'messages' },
                { xtype: 'composer', reference: 'composer' }
            ]
        }
    ]
});
