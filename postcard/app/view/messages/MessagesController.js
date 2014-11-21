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
        },

        component: {
            'button': {
                click: 'onReplyClick'
            },

            'combo': {
                change: 'onTagChange'
            }
        }
    },


    onReplyClick: function() {
        this.fireEvent('reply');
        this.lookupReference('replyButton').hide();
    },


    onTagChange: function(combo, newValue) {
        var threadParent = this.getViewModel().data.messages.getAt(0);

        threadParent.set('tag', newValue);
        threadParent.save();
    }
});