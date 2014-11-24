Ext.define('Postcard.model.Message', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        { name: 'id' },
        { name: 'people' },
        { name: 'subject' },
        { name: 'body' },
        { name: 'date', type: 'date', dateFormat: 'Y-m-dTH:i:s P'},
        { name: 'tag' }
    ],
    proxy: {
        reader: {
            rootProperty: 'messages'
        }
    }
});