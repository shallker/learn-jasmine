;(function () {
    // <link rel="stylesheet" type="text/css" href="lib/jasmine-2.0.0/jasmine.css">

    // <script type="text/javascript" src="lib/jasmine-2.0.0/jasmine.js"></script>
    // <script type="text/javascript" src="lib/jasmine-2.0.0/jasmine-html.js"></script>
    // <script type="text/javascript" src="lib/jasmine-2.0.0/boot.js"></script>

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
        document.head.appendChild(scriptElement);
    }

    insertCSS('../jasmine-2.0/lib/jasmine-2.0.0/jasmine.css');

    // createElement('script')加document.head.appendChild 没有 document.write 好用
    // 前者好像是异步的，总是在 jasmine.js 还没有加载完之前就执行 jasmine-html.js
    // 后者是像是同步按顺序的执行js文件
    document.write('<script type="text/javascript" src="../jasmine-2.0/lib/jasmine-2.0.0/jasmine.js"></script>')
    document.write('<script type="text/javascript" src="../jasmine-2.0/lib/jasmine-2.0.0/jasmine-html.js"></script>')
    document.write('<script type="text/javascript" src="../jasmine-2.0/lib/jasmine-2.0.0/boot.js"></script>')
})();
