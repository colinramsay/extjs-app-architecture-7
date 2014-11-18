Ext.define('Postcard.model.Thread', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'people',  type: 'string'},
        {name: 'subject', type: 'string'},
        { name: 'lastMessageOn', type: 'date' },
        { name: 'lastMessageSnippet', type: 'string' }
    ]
});