/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Postcard.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        controller: {
            '*': {
                threadselected: function(parentId) {
                    this.getView().threadSelected(parentId);
                },

                newmessage: function() {
                    this.getView().newMessage();  
                },

                reply: function() {
                    this.getView().reply();
                },

                navigatehome: function() {
                    this.getView().setActiveItem(0);
                }
            }
        }
    }
});
