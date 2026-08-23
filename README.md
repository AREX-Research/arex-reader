# AREX Reader

English | [简体中文](README.zh-CN.md)

Ask AREX directly on any webpage.

AREX Reader is a Chrome extension that helps you understand the webpages, videos, and papers you are reading. Use it as a floating companion on the page or in Chrome's side panel.

## What you can do

- Ask questions, summarize a page, and continue the conversation on any website
- Explain or translate selected text without leaving the page
- Get overviews of YouTube and Bilibili videos, then jump back to key moments
- Get overviews of arXiv papers and ask about their methods, contributions, and limitations

## Install

AREX Reader requires Chrome 116 or later.

1. Click **Code → Download ZIP** on this repository, or clone the repository with Git.
2. If you downloaded the ZIP, extract it to a permanent folder. Do not move or delete this folder after installation.
3. Open `chrome://extensions` in Chrome.
4. Turn on **Developer mode**, then click **Load unpacked**.
5. Select the repository folder (or extracted folder) that directly contains `manifest.json`.
6. Open any webpage, click the AREX icon, and follow the prompts to sign in.

If AREX does not appear on the page, open the extension details, set **Site access** to **On all sites**, and refresh the page.

## Update

AREX Reader does not update automatically yet. Download the latest repository ZIP (or pull the latest Git changes), replace the existing installation files, click **Reload** on the AREX Reader card at `chrome://extensions`, and refresh any open webpages.

## Privacy and permissions

AREX Reader needs access to webpages so it can display the floating entry, selection toolbar, and inline overviews. Simply browsing a regular webpage does not automatically upload its content. The extension sends only the page content needed to complete an action when you ask a question, request a translation, or generate an overview.

For details, read our [Privacy Policy](https://arex-research.com/privacy) and [Terms of Service](https://arex-research.com/terms).

## Feedback

If you find a problem or have a suggestion, please open a [GitHub Issue](https://github.com/AREX-Research/arex-reader/issues). Do not include account details, access codes, or private page content in your report.

---

This repository distributes official AREX Reader packages and release notes only. It does not contain source code and is not licensed as open-source software.
