Ext.define('Postcard.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    listen: {
        component: {
            'button': {
                click: function() {
                    this.fireViewEvent('loginsuccess');
                }
            }
        }
    }
});
