# AREX Reader release notes

## 0.4.0 — 2026-09-10

### 简体中文

这次更新聚焦更轻量的阅读界面，以及划词、输入和连续阅读的稳定性。

- **PDF 选区提问**：在 arXiv 原生 PDF 阅读器中选中文字，右键「问 AREX」。沿用浮窗或侧边栏偏好，先展示引用，输入问题后才发送，无需替换 PDF 阅读器。
- **更简洁的界面**：精简顶部操作，登出移入设置；提供小、标准、大三档字号。引用默认收起为两行，长内容可展开，发送前可取消。
- **更顺畅的输入与阅读**：划词输入隔离网页快捷键；中文输入法确认文字时不会误发送；关闭划词只收起本次选区；生成过程中向上阅读时不再被强制拉回底部。
- **对话恢复与公式**：恢复已有会话后再展示对话，减少空会话闪现；改进数学公式渲染、PDF 中窗口层级、视频速览异常处理及重新生成入口。
- **会话与页面隔离**：加强账号、来源页面和异步请求的归属校验，减少切换页面或账号时的历史混用及过期结果干扰。

开发者模式用户：使用新包覆盖原安装目录，在 `chrome://extensions` 中重新加载扩展，再刷新已打开的网页。服务端历史不会因本次更新被删除；旧版无账号归属的本地索引会被清理，并从服务端重新加载历史。

### English

This release focuses on a lighter reading interface and more reliable selection, input, and conversation behavior.

- **Ask about PDF passages**: select text in the native arXiv PDF viewer and right-click **Ask AREX**. Your preferred floating window or side panel opens with a reviewable quote; nothing is sent until you submit a question.
- **A simpler interface**: a quieter header, sign-out in Settings, and Small / Standard / Large reading text. Long quotes collapse to two lines, expand on demand, and can be removed before sending.
- **Smoother input and reading**: webpage shortcuts no longer intercept selection questions; IME confirmation does not submit a message; dismissing a selection leaves the reader open; scrolling up during generation pauses automatic following.
- **History and rendering fixes**: restore conversation history before showing the chat, improve mathematical formula rendering and PDF window layering, and handle invalid video overviews with a regeneration option.
- **Stronger session boundaries**: improved account, source-page, and asynchronous request isolation when switching pages or accounts.

Unpacked installations: replace the files in the existing installation directory, reload AREX Reader at `chrome://extensions`, and refresh open webpages. Server-side history is retained; legacy local indexes without account ownership are cleared and history is reloaded from the server.
