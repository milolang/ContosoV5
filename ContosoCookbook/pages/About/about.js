﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var app = Windows.ApplicationModel.Store.CurrentAppSimulator;

    WinJS.UI.Pages.define("/pages/About/about.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            if (app.licenseInformation.isTrial) {
                // Show the purchase price on the purchase button
                var button = document.querySelector("#purchase");

                app.loadListingInformationAsync().then(function (listing) {
                    button.textContent = "Upgrade to the Full Version for " + listing.formattedPrice;
                });

                // Handle clicks of the purchase button
                button.onclick = function () {
                    app.requestAppPurchaseAsync(false);
                };

            }
            else {
                // Show the expiration date and hide the purchase button
                document.querySelector("#info").textContent = "Valid until " + app.licenseInformation.expirationDate.toLocaleDateString();
                document.querySelector("#purchase").style.visibility = "hidden";
            }

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
