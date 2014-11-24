Ext.define('Postcard.view.main.Main', {
    extend: 'Ext.Panel',
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
                { xtype: 'messages' },
                { xtype: 'composer' }
            ]
        }
    ],

    isCard: function() {
        return this.getLayout().type === 'card';
    }
});
