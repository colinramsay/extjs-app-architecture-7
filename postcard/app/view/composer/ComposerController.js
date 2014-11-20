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
                        threadId: null
                    });

                    session.getSaveBatch().start().on('complete', function(batch, operation) {
                        this.fireEvent('threadselected', operation.getRecords()[0].getId());
                    }, this);
                }
            }
        }
    }
});