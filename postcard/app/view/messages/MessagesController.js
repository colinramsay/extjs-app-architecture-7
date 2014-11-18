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
                threadselected: function(threadId) {
                    console.debug('threadselected');
                    this.getViewModel().get('messages').load({
                        params: {
                            threadId: threadId
                        }
                    });
                }
            }
        }
    }
});