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
    pattern: /^{{< alert-info ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
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
    pattern: /^{{< alert-info ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
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
    pattern: /^{{< alert-info ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            isitext: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< alert-success >}} ${obj.isitext} {{< /alert-success >}}`;
    },
});