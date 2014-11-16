Ext.define('Postcard.controller.Root', {
    extend: 'Ext.app.Controller',
    
    listen: {
        component: {
            'login-window': {
                loginSuccess: 'onLoginSuccess'
            }
        }
    },

    onLaunch: function () {
//        this.loginWindow = Ext.create('Postcard.view.login.Login');
Ext.create('Postcard.view.main.Main');
    },


    onLoginSuccess: function() {
        this.loginWindow.destroy();

        Ext.create('Postcard.view.main.Main');
    }
});
