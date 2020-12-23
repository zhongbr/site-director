// ==UserScript==
// @name        干掉跳转警告
// @description 干掉各大博客平台的外链跳转警告
// @namespace   https://github.com/WindrunnerMax/TKScript
// @version     1.0.0
// @author      Zhongbr
// @include     *://blog.csdn.net/*
// @include     *://www.zhihu.com/*
// @include     *://www.jianshu.com/*
// @license     GPL License
// @require     https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js
// @connect     static.doc88.com
// @grant       unsafeWindow
// ==/UserScript==
(function () {
    'use strict';

    function log() {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ["[Site-Director ".concat(new Date().toLocaleTimeString(), "]")].concat(args));
    }

    /*
    * CSDN网站
    * */
    var CSDNDirector = {
      regexp: /^https?:\/\/blog.csdn.net/g,
      director: function director(document) {
        log('csdn site matched .');
        document.querySelector('#mainBox > main > div.blog-content-box > article').querySelectorAll('a:not([name])').forEach(function (e) {
          var a = document.createElement("a");
          a.innerHTML = "<span onclick=\"window.open('".concat(e.href, "')\">").concat(e.innerText, "</>");
          e.replaceWith(a);
        });
      }
    };

    /*
    * 知乎网站
    * */
    var zhihuDirector = {
      regexp: /zhihu/,
      director: function director(document) {
        log("zhihu site matched .");
        document.querySelectorAll("a").forEach(function (v) {
          var regexp = /https:\/\/link.zhihu.com\/\?target=(.*)/;

          if (v.href.match(regexp)) {
            v.href = v.href.replace(regexp, function ($0, $1) {
              return decodeURIComponent($1);
            });
          }
        });
      }
    };

    var JianShuDirector = {
      regexp: /^https?:\/\/www.jianshu.com/,
      director: function director(document) {
        document.querySelector("#__next > div._21bLU4._3kbg6I > div > div > section:nth-child(1) > article").querySelectorAll("a").forEach(function (e) {
          var regexp = /https:\/\/links.jianshu.com\/go\?to=(.*)/;

          if (regexp.test(e.href)) {
            e.href = e.href.replace(regexp, function (_, target) {
              return decodeURIComponent(target);
            });
          }
        });
      }
    };

    var websiteLocation = unsafeWindow.location.href;
    var siteDocument = unsafeWindow.document;
    var directors = [CSDNDirector, zhihuDirector, JianShuDirector]; // 匹配网站开始替换

    for (var i = 0; i < directors.length; i++) {
      if (directors[i].regexp.test(websiteLocation)) {
        directors[i].director(siteDocument, unsafeWindow);
        break;
      }
    }

}());
