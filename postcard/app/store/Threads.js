Ext.define('Postcard.store.Threads', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'Postcard.model.Thread',
    alias: 'store.threads',
    data: {
        threads: [
            {
                id: 1,
                people: 'Ed Spencer',
                subject: '555 1234',
                lastMessageOn: new Date(),
                body: 'The View uses an Ext.XTemplate as its internal templating mechanism, and is bound to an Ext.data.Store so that as the data in the store changes the view is automatically updated to reflect the changes.'
            },
            {
                id: 2,
                people: 'Abe Elias',
                subject: '666 1234',
                lastMessageOn: new Date(),
                body: 'The view also provides built-in behavior for many common events that can occur for its contained items including click, doubleclick, mouseover, mouseout, etc. as well as a built-in selection model.'
            }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'threads'
        }
    }
});