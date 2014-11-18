Ext.define('Postcard.view.composer.ComposerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.composer',
    listen: {
        component: {
            'button': {
                click: function() {
                    var session = this.getSession(),
                        viewModel = this.getViewModel(),
                        selectedPage = viewModel.getData().newMessage

                    var newMessage = session.createRecord('Postcard.model.Message', {
                        people: 'me',
                        subject: 'test',
                        body: 'test body',
                        threadId: null
                    });

                    session.getChanges();
                    session.getSaveBatch().start();
                }
            }
        }
    }
});