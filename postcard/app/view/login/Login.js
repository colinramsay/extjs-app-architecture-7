
Ext.define('Postcard.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login-window',

    title: 'Login to Postcard',
    closable: false,
    autoShow: true,
    
    controller: 'login',
    viewModel: 'login',

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'email',
            bind: '{email}',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }]
    },

    buttons: [{ text: 'Login' }]
});
