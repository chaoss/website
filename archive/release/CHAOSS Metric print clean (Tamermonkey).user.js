// ==UserScript==
// @name         CHAOSS Metric print clean
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use this when releasing CHAOSS metrics and creating the PDF version of the release
// @author       Georg J.P. Link
// @match        https://chaoss.community/*
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

// 2020-08-08
(function() {
    'use strict';

    // Remove stuff we don't want in the printout
    $("#lf-header").remove()
    $("#header-space").remove()
    $("#header-outer").remove()
    $("#to-top").remove()
    $("#footer-outer").remove()

    // Change title to be more friendly
    function changeTitle() {
        var title = $(document).prop('title');
        title = title.substr(title.indexOf(" ") + 1).replace(" - CHAOSS","")
        $(document).prop('title', ") " + title)
    }

    changeTitle();

})();