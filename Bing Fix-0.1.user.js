// ==UserScript==
// @name         Bing Fix
// @version      0.1
// @description  代理环境下为 bing.com/search 请求注入自定义请求头，绕过区域限制，解除“没有与此相关的结果...检查拼写或尝试其他关键字” 问题
// @match        https://www.bing.com/search*
// @grant        none
// @author       Shuakami
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    // 保存原始方法
    const origOpen = XMLHttpRequest.prototype.open;
    const origSend = XMLHttpRequest.prototype.send;

    // 覆盖 open，用于记录请求 URL
    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return origOpen.apply(this, arguments);
    };

    // 覆盖 send，发送前注入头部
    XMLHttpRequest.prototype.send = function(body) {
        if (this._url && this._url.includes('bing.com/search')) {
            this.setRequestHeader('X-Forwarded-For', '8.8.8.8');
            this.setRequestHeader('Accept-Language', 'en-US,en;q=0.9');
            this.setRequestHeader('Referer', 'https://www.bing.com/');
        }
        return origSend.apply(this, arguments);
    };
})();
