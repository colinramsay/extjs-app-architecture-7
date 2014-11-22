Ext.define('Postcard.view.header.Header', {
    extend: 'Ext.Toolbar',
    requires: ['Postcard.view.header.HomeButton'],
    xtype: 'app-header',
    height: 60,
    controller: 'header',
    viewModel: 'header',


    items: [
        { xtype: 'home-button', cls: 'title', html: 'Postcard', bind: { hidden: '{menuExpanded}' } },
        { xtype: 'tbspacer', bind: { hidden: '{menuExpanded}' } },
        { 
            xtype: 'textfield', flex: 1, cls: 'search-box', emptyText: 'Search', 
            bind: '{searchTerm}',
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': { hidden: true, bind: { hidden: '{!menuExpanded}' } }, 
                'wide': { hidden: false } 
            }
        },
        { xtype: 'tbfill', bind: { hidden: '{menuExpanded}' } },
        { 
            xtype: 'combobox', flex: 1, 
            displayField: 'name', idField: 'name', editable: false,
            queryMode: 'local', forceSelection: true,
            bind: {
                store: '{tags}', value: '{currentTag}'
            },
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': { hidden: true, bind: { hidden: '{!menuExpanded}' } }, 
                'wide': { hidden: false } 
            }
        },

        { xtype: 'button', cls: 'new-message', text: 'New Message', bind: { hidden: '{menuExpanded}' } },

        { 
            text: 'Menu', cls: 'menu', width: 30, enableToggle: true,
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': { hidden: false }, 
                'wide': { hidden: true } 
            }
        }
    ]
});