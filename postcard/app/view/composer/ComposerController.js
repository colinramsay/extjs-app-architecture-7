Ext.define('Postcard.view.composer.ComposerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.composer',
    listen: {
        component: {
            'button': {
                click: function() {
                    var session = this.getSession(),
                        data = this.getViewModel().get('newMessage');

                    var newMessage = session.createRecord('Postcard.model.Message', {
                        people: data.people,
                        subject: data.subject,
                        body: data.body,
                        parentId: data.parentId
                    });

                    session.getSaveBatch().start().on('complete', function(batch, operation) {
                        var record = operation.getRecords()[0],
                            id = record.getId(),
                            parentId = record.get('parentId');

                        this.redirectTo('thread/' + (parentId || id) + '/messages');
                    }, this);
                }
            }
        }
    },


    routes: {
        'thread/:id/messages': function(id) {
            this.getView().hide();
        },

        'thread/:id/messages/new': function(id) {
            this.getView().showForReply(id);
        },

        'thread/new': function() {
            this.getView().showForNew();
        }
    }
});