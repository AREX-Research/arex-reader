# AREX Reader

[English](README.md) | 简体中文

在网页上直接问 AREX。

AREX Reader 是一款 Chrome 扩展，帮助你理解正在阅读的网页、视频和论文。它可以常驻网页，也可以在 Chrome 侧边栏中使用。

## 你可以用它做什么

- 在任意网页上提问、总结或继续追问
- 选中文字后直接解释或翻译
- 查看 YouTube、Bilibili 视频速览，并从时间戳跳回原视频
- 查看 arXiv 论文速览，继续询问方法、贡献和局限

## 安装

需要 Chrome 116 或更高版本。

1. 点击本仓库的 **Code → Download ZIP**，或者使用 Git 克隆本仓库。
2. 如果下载的是 ZIP，请将它解压到一个固定目录，安装后不要移动或删除这个目录。
3. 在 Chrome 地址栏打开 `chrome://extensions`。
4. 打开右上角的「开发者模式」，点击「加载已解压的扩展程序」。
5. 选择仓库目录或解压后的目录；这个目录中应当能直接看到 `manifest.json`。
6. 打开任意网页，点击 AREX 图标并按提示登录。

如果页面上没有出现 AREX，请在扩展详情中将「网站访问权限」设为「在所有网站上」，然后刷新网页。

## 更新

AREX Reader 目前不会自动更新。重新下载最新仓库 ZIP（或使用 Git 拉取更新），覆盖原来的安装文件，再到 `chrome://extensions` 中点击 AREX Reader 的「重新加载」，最后刷新已经打开的网页。

## 隐私与权限

AREX Reader 需要网页访问权限，才能显示悬浮入口、划词工具栏和站内速览。仅仅浏览网页时，它不会自动上传普通网页正文；当你主动提问、翻译或生成速览时，扩展才会发送完成该请求所需的页面内容。

详细说明请查看 [隐私政策](https://arex-research.com/privacy) 与 [服务条款](https://arex-research.com/terms)。

## 反馈

遇到问题或有建议，请提交 [GitHub Issue](https://github.com/AREX-Research/arex-reader/issues)。反馈时请勿附带账号信息、登录码或私人页面内容。

---

本仓库仅用于发布 AREX Reader 官方安装包和版本说明，不包含源代码，也不以开源软件形式授权。
