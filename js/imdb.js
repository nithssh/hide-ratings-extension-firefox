/**
 * ===================================================================
 * JS file that is intented to be used only in IMDB.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 * ===================================================================
 */

// Check initial state from browser.storage
browser.storage.sync.get(['imdb'], function (items) {
    showRatings(items.imdb);
});

// Listen for changes
browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    showRatings(msg.imdb);
});
