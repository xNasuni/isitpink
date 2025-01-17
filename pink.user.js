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
.ytp-play-progress.ytp-swatch-background-color {
  background: -webkit-linear-gradient(left, #ff2791 0%, #f03 100%) !important;
  background: linear-gradient(to right, #ff2791 0%, #f03 100%) !important;
}

.ytp-scrubber-button.ytp-swatch-background-color {
  background-color: #f03 !important;
}
`)
