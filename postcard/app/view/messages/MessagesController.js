/**
 * @class Postcard.view.messages.MessagesController
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('Postcard.view.messages.MessagesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.messages',
    listen: {
        component: {
            '#reply': {
                click: 'onReplyClick'
            },

            '#setTag': {
                click: 'onTagChange'
            }
        }
    },

    routes: {
        'thread/:id/messages': function(id) {
            this.getViewModel().get('messages').load({
                params: {
                    parentId: id
                },
                callback: function(records) {
                    this.getView().show();
                    //this.lookupReference('tagPicker').setValue(records[0].get('tag'));
                },
                scope: this
            });
        },

        'thread/new': function() {
            this.getView().hide();
        }
    },

    onReplyClick: function() {
        this.redirectTo(window.location.hash + '/new');
    },


    onTagChange: function() {
        var newValue = this.lookupReference('tagPicker').getValue(),
            threadParent = this.getViewModel().get('messages').getAt(0);

        threadParent.set('tag', newValue);
        threadParent.save({
            callback: function() {
                this.getViewModel().get('tags').reload();
                this.fireEvent('tagadded');
                this.fireEvent('threadschanged');
            },
            scope: this
        });
    }
});