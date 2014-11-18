/**
 * @class Postcard.model.Contact
 * @extends Postcard.model.BaseModel
 * Description
 */
Ext.define('Postcard.model.Contact', {
    extend: 'Postcard.model.BaseModel',
    fields: [
        { name: 'id',    type: 'int'},
        { name: 'name',  type: 'string'},
        { name: 'email',  type: 'string'},
        { name: 'label',  type: 'string'}
    ],
    proxy: {
        reader: {
            rootProperty: 'contacts'
        }
    }
});