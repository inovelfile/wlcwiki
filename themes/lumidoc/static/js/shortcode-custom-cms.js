CMS.registerEditorComponent({
    id: "alert-info",
    label: "Alert Info",
    fields: [{
            name: "isitext",
            label: "Isi Alert Text",
            widget: "string"
        },
    ],
    pattern: /^{{< alert-info ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< alert-info >}} ${obj.isitext} {{< /alert-info >}}`;
    },
});

CMS.registerEditorComponent({
    id: "alert-warning",
    label: "Alert Warning",
    fields: [{
            name: "isitext",
            label: "Isi Alert Text",
            widget: "string"
        },
    ],
    pattern: /^{{< alert-warning ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< alert-warning >}} ${obj.isitext} {{< /alert-warning >}}`;
    },
});

CMS.registerEditorComponent({
    id: "alert-danger",
    label: "Alert Danger",
    fields: [{
            name: "isitext",
            label: "Isi Alert Text",
            widget: "string"
        },
    ],
    pattern: /^{{< alert-danger ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< alert-danger >}} ${obj.isitext} {{< /alert-danger >}}`;
    },
});

CMS.registerEditorComponent({
    id: "alert-success",
    label: "Alert Success",
    fields: [{
            name: "isitext",
            label: "Isi Alert Text",
            widget: "string"
        },
    ],
    pattern: /^{{< alert-success ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< alert-success >}} ${obj.isitext} {{< /alert-success >}}`;
    },
});

CMS.registerEditorComponent({
    id: "button-long",
    label: "Long Button",
    fields: [{
            name: "isitext",
            label: "Isi Button Text",
            widget: "string"
        },
        {
            name: "link",
            label: "Link",
            widget: "string"
        }
    ],
    pattern: /^{{< button-long ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
            link: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< button-long "${obj.isitext}" "${obj.link}" >}} `;
    },
});

CMS.registerEditorComponent({
    id: "button-short",
    label: "Short Button",
    fields: [{
            name: "isitext",
            label: "Isi Button Text",
            widget: "string"
        },
        {
            name: "link",
            label: "Link",
            widget: "string"
        }
    ],
    pattern: /^{{< button-short ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
            link: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< button-short "${obj.isitext}" "${obj.link}" >}} `;
    },
});

CMS.registerEditorComponent({
    id: "button-wiki",
    label: "Wiki Button",
    fields: [{
            name: "isitext",
            label: "Isi Button Text",
            widget: "string"
        },
        {
            name: "link",
            label: "Link",
            widget: "string"
        }
    ],
    pattern: /^{{< button-wiki ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
            link: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< button-wiki "${obj.isitext}" "${obj.link}" >}} `;
    },
});

CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube Embed",
    fields: [{
            name: "videoid",
            label: "Youtube Video ID",
            widget: "string",
        },
        {
            name: "desc",
            label: "Contoh Video ID [ Abaikan field ini ]",
            widget: "string",
            default: "Contoh = ( GXr5glhGkzE ) diambil dari (https://www.youtube.com/watch?v=GXr5glhGkzE)",
            readOnly: true,
        }
    ],
    pattern: /^{{< youtube ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            videoid: match[1],
            desc: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< youtube >}}${obj.videoid}{{< /youtube >}}`;
    },
});

// cms.registerEventListener({
//     name: "preSave",
//     handler: ({ author, entry }) => {
//       return entry.get("data").set("author", author);
//     },
// });