/**
 * ===================================================================
 * JS file that is intented to be used only in Goodreads.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 * ===================================================================
 */

// Check initial state from browser.storage
browser.storage.sync.get({
    goodreads: false,
}, function (items) {
    showRatings(items.goodreads);
});

// Listen for changes
browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    showRatings(msg.goodreads);
});
