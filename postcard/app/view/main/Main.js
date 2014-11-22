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
    plugins: ['viewport', 'responsive'],
    controller: 'main',
    viewModel: 'main',
    session: true,

    dockedItems: [{ xtype: 'app-header' }],

    responsiveConfig: {
        'tall': {
            layout: {
                type: 'card'
            }
        },

        'wide': {
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        }
    },

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
    ],


    isCard: function() {
        return this.getLayout().type === 'card';
    },


    reply: function() {
        this.lookupReference('composer').showForReply(this.parentId);
    },


    newMessage: function() {
        this.lookupReference('messages').hide();
        this.lookupReference('composer').showForNew();
    },


    threadSelected: function(parentId) {
        if(this.isCard()) {
            this.setActiveItem(1);
        }

        this.parentId = parentId;
        this.lookupReference('composer').hide();
        this.lookupReference('messages').show();
    }
});
