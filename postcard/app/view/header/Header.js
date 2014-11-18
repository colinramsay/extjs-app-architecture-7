Ext.define('Postcard.view.header.Header', {
    extend: 'Ext.Toolbar',
    xtype: 'app-header',
    height: 60,
    controller: 'header',
    items: [
        { xtype: 'container', cls: 'title', html: 'Postcard' },
        ' ',
        { xtype: 'textfield', cls: 'search-box', emptyText: 'Search' },
        '->',
        { xtype: 'button', text: 'New Message' },
        ' ',
        { xtype: 'combobox' }
    ]
});