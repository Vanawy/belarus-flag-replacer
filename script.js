// ==UserScript==
// @name         Belarus Flag Replacer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vanawy
// @match        https://trackmania.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=trackmania.io
// @grant        none
// @source       https://github.com/Vanawy/belarus-flag-replacer
// @downloadURL  https://github.com/Vanawy/belarus-flag-replacer/raw/main/script.js
// ==/UserScript==

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    if(document.querySelector('[src="/img/flags/BLR.jpg"]')) {
        observer.disconnect();
        main();
    }
}

function main() {
    let flags = document.querySelectorAll('[src="/img/flags/BLR.jpg"]');
    for (let flag of flags) {
        flag.src = 'https://i.imgur.com/pyPe1V9.png';
    }
}
