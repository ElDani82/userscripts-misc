// ==UserScript==
// @name         RoyalRoad: AN Spam Filter
// @namespace    eldani-rr-an-spam-filter
// @version      1.0
// @description  Collapses all author's notes that contain spam
// @author       ElDani
// @match        https://www.royalroad.com/fiction/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=royalroad.com
// @downloadURL  https://github.com/ElDani82/userscripts-misc/raw/main/rr-an-spam-filter/rr-an-spam-filter.user.js
// @updateURL    https://github.com/ElDani82/userscripts-misc/raw/main/rr-an-spam-filter/rr-an-spam-filter.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getRRStoryID(url) {
        if(typeof url !== "string" || url.length === 0) {
            return console.log("[RRantispam]", "getStoryID(): Please provide an url in string form!");
        }
        let results = /\/fiction\/(\d+)/.exec(url);
        if(results && results.length >= 2) {
            return results[1];
        }
    }
    function hideAN(el) {
        let portlet = el.closest(".author-note-portlet");
        let ANtitle = portlet?.querySelector(".portlet-title");
        let ANbody = portlet?.querySelector(".portlet-body");

        if(!portlet || !ANtitle || !ANbody) {
            return console.log("[RRantispam]", "Couldn't find matching parent of", el);
        }

        ANbody.style.display = "none";

        if(!portlet.classList.contains("RRantispam")) {
            portlet.classList.add("RRantispam");
            ANtitle.style.color = "#eeabab";
            ANtitle.style.cursor = "pointer";
            ANtitle.style.userSelect = "none";
            ANtitle.style.MozUserSelect = "none";
            ANtitle.style.WebkitUserSelect = "none";
            ANtitle.onclick = function() {
                if(ANbody) ANbody.style.display = ANbody.style.display === "none" ? "block" : "none";
            };
        }
    }

    const ownID = getRRStoryID(location.href);

    Array.from(document.querySelectorAll(".author-note-portlet a")).forEach((url) => {
        let curID = getRRStoryID(url.href);
        if(curID && curID !== ownID) {
            hideAN(url);
        }
    });
})();
