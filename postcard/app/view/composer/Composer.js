Ext.define('Postcard.view.composer.Composer', {
    extend: 'Ext.form.Panel',
    xtype: 'composer',
    cls: 'composer',
    items: [
        { fieldLabel: 'To', xtype: 'combo', width: '100%' },
        { xtype: 'htmleditor' }
    ],
    bbar: [
        '->',
        { xtype: 'button', text: 'Send' }
    ]
});