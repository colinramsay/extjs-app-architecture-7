Ext.define('Postcard.model.BaseModel', {
    extend: 'Ext.data.Model',

    schema: {
        namespace: 'Postcard.model',
        urlPrefix: 'http://localhost:3000',
        proxy: {
            type: 'ajax',
            url: '{prefix}/{entityName:uncapitalize}'
        }
    },
});
