/**
 * @class Postcard.view.messages.MessagesController
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('Postcard.view.messages.MessagesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messages',
    listen: {
        controller: {
            '*': {
                threadselected: function(parentId) {
                    this.getViewModel().get('messages').load({
                        params: {
                            parentId: parentId
                        }
                    });
                }
            }
        }
    }
});