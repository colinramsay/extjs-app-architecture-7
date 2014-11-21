Ext.define('Postcard.view.threads.ThreadsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.threads',

    listen: {
        component: {
            'threads': {
                itemclick: function(dataview, record) {
                    this.fireEvent('threadselected', record.getId());
                }
            }
        },


        controller: {
            '*': {
                refreshthreads: function() {
                    this.getViewModel().data.threads.reload();
                }
            }
        }
    }
});