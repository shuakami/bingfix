# Bing Fix UserScript (Bing 搜索区域修复脚本)

一个简单的用户脚本 (UserScript)，旨在解决在使用网络代理访问 Bing (必应) 搜索时，因区域限制导致无法获得预期搜索结果 (例如提示"没有与此相关的结果...检查拼写或尝试其他关键字") 的问题。

## 背景

当您通过代理服务器访问 Bing 搜索时，Bing 可能会根据代理服务器的 IP 地址判断您所在的区域，并可能因此返回不相关或受限的搜索结果。此脚本通过注入特定的 HTTP 请求头来模拟美国用户的访问，从而绕过这种限制。

## 功能

*   自动为 `bing.com/search` 的 AJAX 请求注入以下 HTTP 头部信息：
    *   `X-Forwarded-For: 8.8.8.8` (模拟来自 Google 公共 DNS 的请求)
    *   `Accept-Language: en-US,en;q=0.9` (指定接受语言为美式英语)
*   帮助获取更符合预期的、通常是基于美国地区的搜索结果。
*   脚本在 `https://www.bing.com/search*` 页面自动运行。

## 安装

1.  **安装用户脚本管理器:** 您需要在浏览器中安装一个用户脚本管理器扩展。常见的选择有：
    *   [Tampermonkey (油猴)](https://www.tampermonkey.net/) (支持 Chrome, Firefox, Edge, Opera, Safari 等主流浏览器)
    *   [Greasemonkey (暴力猴)](https://www.greasespot.net/) (主要用于 Firefox)
    *   Violentmonkey (支持 Chrome, Firefox, Edge, Opera)
2.  **安装此脚本:**
    *   **推荐方式:** 点击本仓库中的 `Bing Fix-0.1.user.js` 文件，您的用户脚本管理器通常会自动弹出安装提示。
    *   **手动方式:** 复制 `Bing Fix-0.1.user.js` 文件中的全部代码，在您的用户脚本管理器中选择"添加新脚本"，然后将代码粘贴进去并保存。