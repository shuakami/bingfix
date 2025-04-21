# Bing Fix UserScript - 绕过 Bing 搜索区域限制

本用户脚本 (UserScript) 用于解决在代理环境下访问 Bing (必应) 搜索时，可能遇到的因区域识别导致搜索结果不全或返回“没有与此相关的结果”的问题。


当通过部分代理访问 Bing 时，服务器可能根据代理 IP 判断用户区域，并据此提供本地化或受限的搜索内容。此脚本旨在绕过这种限制，获取更广泛的搜索结果。

## 实现原理

脚本通过拦截 `bing.com/search` 页面的网络请求 (AJAX)，并自动注入以下 HTTP 头部信息来实现：

*   `X-Forwarded-For: 8.8.8.8`：模拟一个常见的公共 IP 地址来源。
*   `Accept-Language: en-US,en;q=0.9`：优先请求英文内容。

通过这种方式，模拟来自特定区域（通常是美国）的访问，从而获取不同的搜索结果集。

## 安装步骤

1.  **安装用户脚本管理器**：您需要一个浏览器扩展来运行用户脚本。推荐使用：
    *   [Tampermonkey](https://www.tampermonkey.net/) (支持 Chrome, Firefox, Edge, Safari 等)
    *   [Violentmonkey](https://violentmonkey.github.io/) (开源，支持多款浏览器)
    *   [Greasemonkey](https://www.greasespot.net/) (主要用于 Firefox)
    *(请根据您的浏览器选择并安装)*

2.  **安装本脚本**：
    *   **推荐**: 直接点击仓库中的 `Bing Fix-0.1.user.js` 文件链接，用户脚本管理器通常会自动识别并提示安装。
    *   **手动**: 复制 `Bing Fix-0.1.user.js` 文件的代码，在用户脚本管理器中新建脚本，将代码粘贴并保存。