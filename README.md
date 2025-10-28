# userscripts-misc
Miscellaneous user scripts

### RoyalRoad: AN Spam Filter ([install](https://github.com/ElDani82/userscripts-misc/raw/main/rr-an-spam-filter/rr-an-spam-filter.user.js))
**Description:** Collapses all author's notes on chapter pages that contain spam. Where *spam* is defined as an author creating a link either to a different story or to an Amazon product page. This is the typical behavior of authors who advertise other works, in most cases they're part of a story suggestion trading circle/network.

**Note:** This is a very simple script and may cause false positives when an author links to a different story of their own. Any hidden author's note can be toggled visible again by tapping/clicking on the bar with the red-tinted text *A note from [author name]*! False positives can also be introduced through the Amazon affiliate links or short-urls that RR has started using some time ago.

### RoyalRoad: New Story Plus ([install](https://github.com/ElDani82/userscripts-misc/raw/main/rr-story-info-plus/rr-story-info-plus.user.js))
**Description:** Adds word count information to story lists. The script modifies the pages data ("202 PAGES" => "56k WORDS (202P)") and adds a words per chapter information ("16 CHAPTERS" => "16 CHAPTERS (3,472 w/Ch)").

**Note:** The words per chapter count is less accurate on small page and chapter numbers due to rounding. RoyalRoad divides the total word count of a story by 275 and rounds the result up to arrive at the displayed page count.
