// ==UserScript==
// @name         RoyalRoad: Story Info Plus
// @namespace    eldani-rr-story-info-plus
// @version      1.0
// @description  Adds word count information (total and per chapter) to stories in lists
// @author       ElDani
// @match        https://www.royalroad.com/fictions/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=royalroad.com
// @downloadURL  https://github.com/ElDani82/userscripts-misc/raw/main/rr-story-info-plus/rr-story-info-plus.user.js
// @updateURL    https://github.com/ElDani82/userscripts-misc/raw/main/rr-story-info-plus/rr-story-info-plus.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addStoryInfos() {
        var list = document.querySelectorAll(".fiction-list-item");
        list.forEach((story) => {
            var info = { "pages": 0, "chapters": 0, "el": false };
            var spans = story.querySelectorAll("span:not(.label)");
            spans.forEach((el) => {
                if(el.innerText.includes(" PAGES")) {
                    info.pages = el.innerText.replace(" PAGES", "").replace(",", "") - 0;
                    el.innerText = Math.round(info.pages * 275 / 1000) + "k words (" + info.pages + "p)";
                }
                if(el.innerText.includes(" CHAPTERS")) {
                    info.chapters = el.innerText.replace(" CHAPTERS", "").replace(",", "") - 0;
                    info.el = el;
                }
            });
            if(info.pages > 0 && info.chapters > 0 && info.el !== false) {
                var wCh = info.pages * 275 / info.chapters;
                info.el.innerText = info.el.innerText + "\r\n(" +
                    wCh.toLocaleString(undefined, { maximumFractionDigits: 0 }) +
                    " w/Ch)"
                ;
            }
        });
    }

    addStoryInfos();
})();
