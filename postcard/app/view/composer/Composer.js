Ext.define('Postcard.view.composer.Composer', {
    extend: 'Ext.form.Panel',
    xtype: 'composer',
    cls: 'composer',
    viewModel: 'composer',
    controller: 'composer',
    session: true,
    items: [
        { xtype: 'hiddenfield', bind: '{newMessage.parentId}' },
        {
            fieldLabel: 'To', xtype: 'combo', width: '100%',
            valueField: 'id',
            displayField: 'label',
            bind: {
                store: '{contacts}',
                value: '{newMessage.people}'
            }
        },
        { xtype: 'textfield', bind: '{newMessage.subject}' , width: '100%' },
        { xtype: 'htmleditor', bind: { value: '{newMessage.body}' } }
    ],
    bbar: [
        '->',
        { xtype: 'button', text: 'Send' }
    ],


    showForReply: function(parentId) {
        this.getViewModel().set('newMessage.parentId', parentId);

        this.down('textfield').hide();
        this.down('combo').hide();

        this.show();
    },


    showForNew: function() {
        this.getViewModel().set('newMessage.parentId', null);

        this.down('textfield').show();
        this.down('combo').show();

        this.show();
    }
});