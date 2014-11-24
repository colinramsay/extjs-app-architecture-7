Ext.define('Postcard.view.threads.Threads', {
    extend: 'Ext.DataView',
    //requires: ['Postcard.view.threads.ThreadsModel'],
    xtype: 'threads',
    cls: 'thread-view',
    viewModel: 'threads',
    controller: 'threads',
    border: true,
    deferEmptyText: false,
    emptyText: 'No messages',
    autoScroll: true,
    tpl: new Ext.XTemplate('<tpl for=".">',
        '<div class="thread">',
            '<div class="date">{lastMessageOn:date("H:m")}</div>',
            '<div class="details">',
                '<div class="header">{people} - {subject}</div>',
                '<div class="body">{[this.stripHtml(values.lastMessageSnippet)]}</div>',
            '</div>',
        '</div>',
    '</tpl>', {
        stripHtml: function(html) {
            var div = document.createElement('div');
            div.innerHTML = html;
            return div.textContent || div.innerText || '';
        }
    }),
    itemSelector: '.thread',
    bind: '{threads}'
});