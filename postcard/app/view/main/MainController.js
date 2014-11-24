Ext.define('Postcard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'home': 'onHome',
        'thread/:id/messages': 'onShowThread'
    },


    listen: {
        component: {
            'button[cls="logout"]': {
                click: function() {
                    window.localStorage.removeItem('loggedin');
                    window.location = '/';
                }
            }
        }
    },


    onShowThread: function(id) {
        if(this.getView().isCard()) {
            this.setActiveItem(1);
        }
    }
});
