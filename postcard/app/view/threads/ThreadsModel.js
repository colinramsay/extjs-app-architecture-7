Ext.define('Postbox.view.threads.ThreadsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.threads',
    stores: {
        threads: {
            type: 'threads'
        }
    }
});