// app/controller/Root.js
Ext.define('Postcard.controller.Root', {
    extend: 'Ext.app.Controller',

    routes: {
        'home': 'onHome'
    },

    onLaunch: function () {
        this.loginWindow = Ext.create('Postcard.view.login.Login');
    },

    onHome: function() {
        this.loginWindow.destroy();
        Ext.create('Postcard.view.main.Main');
    }
});