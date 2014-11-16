//this is the model we will be using in the store
Ext.define('Thread', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'people',  type: 'string'},
        {name: 'subject', type: 'string'},
        { name: 'lastMessageOn', type: 'date' },
        { name: 'lastMessageSnippet', type: 'string' }
    ]
});

Ext.define('Message', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'people',  type: 'string'},
        {name: 'subject', type: 'string'},
        { name: 'body', type: 'string' },
        { name: 'date', type: 'date', dateFormat: 'Y-m-dTH:i:s P'}
    ]
});

//this data does not line up to our model fields - the phone field is called phoneNumber
var data = {
    threads: [
        {
            id: 1,
            people: 'Ed Spencer',
            subject: '555 1234',
            lastMessageOn: new Date(),
            body: 'The View uses an Ext.XTemplate as its internal templating mechanism, and is bound to an Ext.data.Store so that as the data in the store changes the view is automatically updated to reflect the changes.'
        },
        {
            id: 2,
            people: 'Abe Elias',
            subject: '666 1234',
            lastMessageOn: new Date(),
            body: 'The view also provides built-in behavior for many common events that can occur for its contained items including click, doubleclick, mouseover, mouseout, etc. as well as a built-in selection model.'
        }
    ]
};


var messageData1 = {
    messages: [
        {
            id: 1,
            people: 'Ralph Steadman',
            subject: 'McDonalds',
            date: new Date(),
            body: 'Morbi sit amet lacinia mauris. Integer pulvinar diam nunc, sed convallis ante lobortis ac. Donec faucibus sagittis nisi quis varius. In ex orci, sagittis ut maximus vel, accumsan et ante. Praesent sit amet erat ligula. Suspendisse euismod enim turpis, nec mollis nulla semper commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ut ornare sapien, quis porta enim. Cras sed lorem neque. Cras malesuada neque a mi convallis, eget suscipit nisi tempus. Donec sit amet lorem vel arcu ultrices efficitur vitae non sem. Praesent vestibulum, orci condimentum faucibus gravida, dolor odio rutrum velit, et tincidunt neque ligula dignissim felis. Morbi consectetur urna dignissim metus pretium volutpat. Vestibulum vitae ultrices enim.'
        },
        {
            id: 2,
            people: 'Abe Elias',
            subject: '666 1234',
            date: new Date(),
            body: 'Nullam condimentum elit id quam rutrum ultricies. Maecenas in volutpat purus. Praesent in tortor id turpis sodales bibendum. Donec dapibus eros consequat, porta metus et, rhoncus ante. Praesent eget nisi maximus, lacinia metus accumsan, bibendum diam. Praesent sagittis, nulla sed sodales aliquet, lectus justo lacinia dolor, at feugiat erat tortor eu odio. Vivamus vel diam pretium, dapibus est in, condimentum lacus. Nullam tincidunt vel erat ac facilisis. Curabitur nibh sem, porttitor nec porta a, vulputate et quam. Suspendisse fringilla, nibh iaculis maximus porta, magna massa mattis ipsum, eu accumsan erat ante eu justo. In hendrerit vel augue non aliquam. Sed venenatis porttitor nibh et vulputate. Proin tempus quam at enim dictum faucibus. Suspendisse potenti.'
        }
    ]
};


var messageData2 = {
    messages: [
  {
    "id": "54662680af8a7757161d331c",
    "people": "Jeannine Faulkner",
    "subject": "velit do proident",
    "date": "2014-11-10T07:43:57 -00:00",
    "body": "Nostrud sunt tempor aute pariatur incididunt laborum deserunt amet. Ut commodo veniam exercitation irure officia consectetur velit exercitation ullamco et voluptate nisi voluptate. Voluptate fugiat ex aliqua enim ea tempor. Culpa anim cillum aliquip duis pariatur velit et quis. Nulla ipsum irure sint est officia qui nulla elit ea. Non id mollit irure anim aute est fugiat occaecat pariatur ex consequat sint excepteur sit. Reprehenderit Lorem pariatur laboris reprehenderit proident magna incididunt fugiat adipisicing labore voluptate laborum est.\r\n"
  },
  {
    "id": "546626804636e1d95c34ebfa",
    "people": "Cain French",
    "subject": "do duis eu",
    "date": "2014-11-12T07:11:29 -00:00",
    "body": "Reprehenderit deserunt fugiat sint consectetur ut ex est exercitation nostrud voluptate officia est. Occaecat cupidatat pariatur dolore culpa minim laboris duis nostrud eu ipsum aliqua exercitation consequat. Quis amet aute occaecat qui exercitation dolore do ea aliqua cillum id nostrud. Officia elit fugiat laborum fugiat.\r\n"
  },
  {
    "id": "54662680e185e0b5cbcd546d",
    "people": "Turner Underwood",
    "subject": "eiusmod mollit nulla",
    "date": "2014-11-25T02:48:58 -00:00",
    "body": "Nisi mollit enim ipsum est esse laborum id non consequat id anim nisi aliqua cupidatat. Incididunt officia reprehenderit id pariatur. Magna et veniam occaecat Lorem non minim dolor occaecat consequat ut.\r\n"
  },
  {
    "id": "5466268025bb19d9f8c95c0a",
    "people": "Hilary Hays",
    "subject": "do elit cillum",
    "date": "2014-11-18T12:36:44 -00:00",
    "body": "Exercitation Lorem labore proident aliquip proident amet consectetur cupidatat commodo non tempor. Officia consectetur ad voluptate nisi non nostrud velit. Qui irure ut minim tempor. Duis consequat magna excepteur incididunt cupidatat excepteur est dolor consequat eu. Lorem nulla non amet anim do aute eu quis in irure mollit amet irure. Aliquip amet pariatur ea aliqua nisi anim labore tempor dolor quis laborum ipsum culpa esse. Occaecat ullamco consequat sint anim et incididunt et.\r\n"
  }
]
};

var messageData3 = {
    messages: [
  {
    "id": "546626a29770a9020a181a56",
    "people": "Garcia Burks",
    "subject": "aute voluptate deserunt",
    "date": "2014-11-11T22:39:29 -00:00",
    "body": "Exercitation sint quis consectetur non officia aute consectetur. Incididunt ipsum dolor minim in voluptate consectetur culpa nisi adipisicing laborum. Incididunt fugiat aliquip ipsum cupidatat ut ullamco culpa mollit proident. In sunt ad nulla minim sint irure. Sint quis dolor nostrud laboris cupidatat consectetur cupidatat irure. Eiusmod in dolor exercitation ipsum non culpa Lorem est aute consectetur eiusmod ipsum culpa dolor. Irure ipsum labore culpa eu anim proident ipsum sit nulla excepteur reprehenderit in ad.\r\n"
  },
  {
    "id": "546626a22975090fbdcaf812",
    "people": "Alejandra Delaney",
    "subject": "adipisicing mollit dolor",
    "date": "2014-11-19T21:27:09 -00:00",
    "body": "Amet fugiat magna elit consequat deserunt id velit irure Lorem. Labore ea aliqua incididunt cupidatat. Quis dolor laborum qui ullamco id sint Lorem deserunt. Consectetur quis do occaecat est amet mollit veniam duis duis exercitation consequat. Tempor do eu est et aute ipsum consequat exercitation anim adipisicing elit ipsum. Minim amet tempor commodo minim adipisicing veniam ea aliqua aliquip qui laborum deserunt minim.\r\n"
  },
  {
    "id": "546626a25c92764df618ec4b",
    "people": "Moody French",
    "subject": "consequat veniam non",
    "date": "2014-11-27T03:34:28 -00:00",
    "body": "Nulla dolore culpa anim et officia est. Laboris sint consectetur incididunt aliquip ex aliquip quis dolore dolore. Veniam do sit velit nulla veniam ea. Officia esse aliqua est sint est sint nulla sit Lorem sunt excepteur excepteur nisi. Duis tempor excepteur eiusmod velit proident. Voluptate ullamco magna esse quis mollit exercitation laboris Lorem consectetur irure.\r\n"
  },
  {
    "id": "546626a21f470749e94927df",
    "people": "Lesley Branch",
    "subject": "nisi pariatur laboris",
    "date": "2014-11-01T16:42:44 -00:00",
    "body": "Deserunt sint culpa nisi Lorem aliqua elit culpa id labore pariatur. Eiusmod dolore non elit consectetur veniam deserunt aliquip. Et ea exercitation elit nostrud amet id in aliquip cupidatat aute. Laborum pariatur laboris eu ea minim velit laborum veniam est nostrud ut nostrud. Voluptate commodo ipsum dolore consequat dolor aute et ad aute do. Do aliqua ut do consequat in occaecat cupidatat esse sunt ullamco.\r\n"
  }
]
}

var store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    model: 'Thread',
    data : data,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'threads'
        }
    }
});

var messageStore = Ext.create('Ext.data.Store', {
    autoLoad: true,
    model: 'Message',
    data : messageData1,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'messages'
        }
    }
});

Ext.define('Postcard.view.main.Main', {
    extend: 'Ext.Panel',
    requires: [
        'Postcard.view.main.MainController',
        'Postcard.view.main.MainModel',
        'Postcard.view.composer.Composer',
        'Postcard.view.messages.Messages'
    ],
    plugins: 'viewport',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    dockedItems: [{
        xtype: 'toolbar',
        height: 60,
        dock: 'top',
        items: [
            { xtype: 'container', cls: 'title', html: 'Postcard' },
            ' ',
            { xtype: 'textfield', cls: 'search-box', emptyText: 'Search' },
            '->',
            { xtype: 'button', text: 'New Message', handler: function() {
                var rightPane = Ext.ComponentQuery.query('#rightPane')[0];

                var fadeInFn = function() {
                    rightPane.activeItem = rightPane.getComponent('form');
                    rightPane.activeItem.getEl().setOpacity(0);
                    rightPane.activeItem.show();
                    rightPane.activeItem.getEl().fadeIn();
                    setTimeout(function() {
                        rightPane.activeItem.updateLayout();    
                    }, 10);
                };

                if(rightPane.activeItem) {
                    rightPane.activeItem.getEl().fadeOut({
                        callback: fadeInFn
                    });    
                } else {
                    fadeInFn();
                }
            } },
            ' ',
            { xtype: 'combobox' }
        ]
    }],

    items: [{
        xtype: 'dataview',
        store: store,
        itemsId: 'threads',
        flex: 1,
        cls: 'thread-view',
        tpl: new Ext.XTemplate('<tpl for=".">',
            '<div class="thread">',
                '<div class="date">{lastMessageOn:date("H:m")}</div>',
                '<div class="details">',
                    '<div class="header">{people} - {subject}</div>',
                    '<div class="body">{body}</div>',
                '</div>',
            '</div>',
        '</tpl>'),
        itemSelector: '.thread',
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }],
        listeners: {
            itemclick: function(dataview, record) {
                var rightPane = Ext.ComponentQuery.query('#rightPane')[0];

                var fadeInFn = function() {

                    rightPane.activeItem = rightPane.getComponent('messages');
                    messageStore.loadData(window['messageData' + record.getId()].messages);
                    rightPane.activeItem.getEl().setOpacity(0);
                    rightPane.activeItem.show();
                    rightPane.activeItem.getEl().fadeIn();
                    setTimeout(function() {
                        rightPane.activeItem.updateLayout();    
                    }, 10);
                    
                };

                if(rightPane.activeItem) {
                    rightPane.activeItem.getEl().fadeOut({
                        callback: fadeInFn
                    });    
                } else {
                    fadeInFn();
                }
            }
        }
    },

    {
        xtype: 'container',
        flex: 1,
        itemId: 'rightPane',
        activeItem: null,
        items: [
            {
                xtype: 'composer',
                cls: 'composer',
                flex: 1,
                hidden: true,
                id:'form'
            },
            {
                xtype: 'messages',
                hidden: false,
                id: 'messages'
            }
        ]
    }]
});
