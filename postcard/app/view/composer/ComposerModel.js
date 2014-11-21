/**
 * @class Postcard.view.Composer.ComposerModel
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('Postcard.view.Composer.ComposerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.composer',
    stores: {
        contacts: {
            type: 'contacts'
        }
    },

    data: {
        newMessage: {}
    }
});