const manifest = {
    "manifest_version": 3,
    "name": "Amazon Price Hider",
    "version": "1.0",
    "description": "Hide prices on Amazon to avoid impulsive purchases.",
    "permissions": [
        "tabs",
        "activeTab",
        "webNavigation"
    ],
    "content_scripts": [
        {
            "matches": [
                "*://www.amazon.co.jp/*"
            ],
            "js": [
                "content.js"
            ],
            "run_at": "document_idle"
        }
    ],
    "background": {
        "service_worker": "background.js"
    },
    "action": {
        "default_popup": "popup.html",
        "default_icon": "icon.png"
    }
};
