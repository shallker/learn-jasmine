;(function () {
    // <link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-1.3.0/jasmine.css">
    // <script type="text/javascript" src="jasmine/lib/jasmine-1.3.0/jasmine.js"></script>
    // <script type="text/javascript" src="jasmine/lib/jasmine-1.3.0/jasmine-html.js"></script>

    function insertCSS(path) {
        var linkElement = document.createElement('link');

        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = path;
        document.head.appendChild(linkElement);
    }

    function insertScript(path) {
        var scriptElement = document.createElement('script');

        scriptElement.type = 'text/javascript';
        scriptElement.src = path;
        document.body.appendChild(scriptElement);
    }

    insertCSS('../jasmine/lib/jasmine-1.3.0/jasmine.css');

    document.write('<script type="text/javascript" src="../jasmine/lib/jasmine-1.3.0/jasmine.js"></script>')
    document.write('<script type="text/javascript" src="../jasmine/lib/jasmine-1.3.0/jasmine-html.js"></script>')
    document.write('<script type="text/javascript" src="./jasmine.execute().js"></script>')
})();
