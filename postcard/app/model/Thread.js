Ext.define('Postcard.model.Thread', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'people',  type: 'string'},
        {name: 'subject', type: 'string'},
        { name: 'lastMessageOn', type: 'date' },
        { name: 'lastMessageSnippet', type: 'string' }
    ],
    proxy: {
        reader: {
            rootProperty: 'threads'
        }
    }
});