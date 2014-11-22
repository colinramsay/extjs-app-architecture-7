Ext.define('Postcard.view.header.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',
    listen: {
        component: {
            'button[cls="new-message"]': {
                click: function() {
                    this.fireEvent('newmessage');
                }
            },

            'button[cls="menu"]': {
                toggle: 'onMenuToggle'
            },

            'home-button': {
                click: function() {
                    this.fireEvent('navigatehome');
                }
            }
        }
    },


    onMenuToggle: function(btn, pressed) {
        this.getViewModel().set('menuExpanded', pressed);
    }
});