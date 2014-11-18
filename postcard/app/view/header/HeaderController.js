Ext.define('Postcard.view.header.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',
    listen: {
        component: {
            'button': {
                click: function() {
                    this.fireEvent('newmessage');
                }
            }
        }
    }
});