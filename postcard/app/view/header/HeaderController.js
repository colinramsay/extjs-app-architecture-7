Ext.define('Postcard.view.header.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header',
    listen: {
        component: {
            'button[cls="reply"]': {
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
        if(pressed) {
            this.getView().items.each(function(item) {
                item.hide();
            });

            this.getView().down('[cls="search-box"]').show();
            this.getView().down('combobox').show();
            this.getView().down('[cls="menu"]').show();
        } else {
            this.getView().items.each(function(item) {
                item.show();
            });

            this.getView().down('[cls="search-box"]').hide();
            this.getView().down('combobox').hide();
            this.getView().down('[cls="menu"]').show();
        }
    }
});