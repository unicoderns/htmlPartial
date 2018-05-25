/*
Name: htmlpartial
Description: Html partial loader
Version: 0.1
Author: Chriss Mejía - Unicoderns
Website: https://chrissmejia.com - https://unicoderns.com
Support: https://github.com/unicoderns/htmlPartial
*/

(function () {
    function fetchFile(tag) {
        fetch(tag.getAttribute("file")).then(function (response) {
            return response.text();
        })
        .then(function (html) {
            tag.innerHTML = html;
        });    
    }

    var partialTags = document.getElementsByTagName("partial");
    var i;
    for (i = 0; i < partialTags.length; i++) {
        fetchFile(partialTags[i]);
    }
})();