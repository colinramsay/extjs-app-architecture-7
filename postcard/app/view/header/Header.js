Ext.define('Postcard.view.header.Header', {
    extend: 'Ext.Toolbar',
    requires: ['Postcard.view.header.HomeButton'],
    xtype: 'app-header',
    height: 60,
    controller: 'header',
    viewModel: 'header',

    initComponent: function() {
        this.callParent(arguments);
        
        var hiddenCfg = {
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': { hidden: true }, 
                'wide': { hidden: false } 
            }
        };

        var shownCfg = {
            plugins: ['responsive'],
            responsiveConfig: {
                'tall': { hidden: false }, 
                'wide': { hidden: true } 
            }
        };

        this.add({ xtype: 'home-button', cls: 'title', html: 'Postcard' });
        
        this.add(' ');
        this.add(Ext.apply({ flex: 1,xtype: 'textfield', cls: 'search-box', emptyText: 'Search', bind: '{searchTerm}' }, hiddenCfg));
        this.add('->');
        this.add(Ext.apply({ flex: 1,xtype: 'combobox', displayField: 'name', idField: 'name', editable: false, queryMode: 'local', forceSelection: true, bind: { store: '{tags}', value: '{currentTag}' } }, hiddenCfg));
        
        this.add({ xtype: 'button', cls: 'new-message', text: 'New Message' });
        this.add(Ext.apply({ width: 30, text: 'Menu', cls: 'menu', enableToggle: true }, shownCfg));
    }
});