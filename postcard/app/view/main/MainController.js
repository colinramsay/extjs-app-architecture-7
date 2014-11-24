Ext.define('Postcard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'home': 'onHome',
        'thread/:id/messages': 'onShowThread'
    },

    onShowThread: function(id) {
        if(this.getView().isCard()) {
            this.setActiveItem(1);
        }
    }
});
