// ==UserScript==
// @name        is it pink? 🥺🥺🥺
// @namespace   http://tampermonkey.net/
// @description yes it is 😏😳
// @author      Mia @ github.com/xNasuni
// @match       https://www.youtube.com/*
// @grant       GM_addStyle
// @version     1.0
// ==/UserScript==

GM_addStyle(`
.ytp-scrubber-button.ytp-swatch-background-color {
  background-color: #ff2690 !important;
}
`)
