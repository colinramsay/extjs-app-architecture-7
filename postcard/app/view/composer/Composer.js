Ext.define('Postcard.view.composer.Composer', {
    extend: 'Ext.form.Panel',
    xtype: 'composer',
    cls: 'composer',
    viewModel: 'composer',
    items: [
        {
            fieldLabel: 'To', xtype: 'combo', width: '100%',
            valueField: 'id',
            displayField: 'label',
            bind: {
                store: '{contacts}'
            }
        },
        { xtype: 'htmleditor' }
    ],
    bbar: [
        '->',
        { xtype: 'button', text: 'Send' }
    ]
});