cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.telerik.plugins.healthkit/www/HealthKit.js",
        "id": "com.telerik.plugins.healthkit.HealthKit",
        "clobbers": [
            "window.plugins.healthkit"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.telerik.plugins.healthkit": "0.3.5",
    "org.apache.cordova.dialogs": "0.3.0"
}
// BOTTOM OF METADATA
});