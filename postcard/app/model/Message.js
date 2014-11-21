Ext.define('Postcard.model.Message', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'people',  type: 'string'},
        {name: 'subject', type: 'string'},
        { name: 'body', type: 'string' },
        { name: 'date', type: 'date', dateFormat: 'Y-m-dTH:i:s P'},
        { name: 'tag', type: 'string' }
    ],
    proxy: {
        reader: {
            rootProperty: 'messages'
        }
    }
});