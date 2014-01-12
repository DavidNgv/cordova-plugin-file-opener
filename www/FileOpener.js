/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

/**
 * Constructor
 */
function FileOpener() {
};

FileOpener.prototype.open = function(url, callback) {
    console.log('FileOpener.prototype.open');

    cordova.exec(
        callback,
        function(err) {
            callback(err);
        }
        , 'FileOpener', 'openFile', [url]
    );
};


/**
 * Load Plugin
 */

/*
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.fileOpener) {
    window.plugins.fileOpener = new FileOpener();
}
*/


module.exports = FileOpener;