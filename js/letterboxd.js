/**
 * ===================================================================
 * JS file that is intented to be used only in Letterboxd.
 *
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 * ===================================================================
 */

// Check initial state from browser.storage
browser.storage.sync.get(['letterboxd'], function (items) {
    showRatings(items.letterboxd);
});

// Listen for changes
browser.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    showRatings(msg.letterboxd);
});
