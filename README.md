# AREX Reader

English | [简体中文](README.zh-CN.md)

Ask AREX directly on any webpage.

AREX Reader is a Chrome extension that helps you understand the webpages, videos, and papers you are reading. Use it as a floating companion on the page or in Chrome's side panel.

Current version: **0.4.0**. See the [release notes](CHANGELOG.md) and [download the versioned package](https://github.com/AREX-Research/arex-reader/releases/tag/v0.4.0).

## What you can do

- Ask questions, summarize a page, and continue the conversation on any website
- Explain or translate selected text without leaving the page
- Right-click selected text in an arXiv PDF to ask AREX in your preferred floating window or side panel
- Choose Small, Standard, or Large reading text in Settings
- Get overviews of YouTube and Bilibili videos, then jump back to key moments
- Get overviews of arXiv papers and ask about their methods, contributions, and limitations

## Install

AREX Reader requires Chrome 116 or later.

1. Download **arex-reader-extension-0.4.0-chrome.zip** from the [0.4.0 release](https://github.com/AREX-Research/arex-reader/releases/tag/v0.4.0). You can also use **Code → Download ZIP** or clone this repository.
2. If you downloaded the ZIP, extract it to a permanent folder. Do not move or delete this folder after installation.
3. Open `chrome://extensions` in Chrome.
4. Turn on **Developer mode**, then click **Load unpacked**.
5. Select the repository folder (or extracted folder) that directly contains `manifest.json`.
6. Open any webpage, click the AREX icon, and follow the prompts to sign in.

If AREX does not appear on the page, open the extension details, set **Site access** to **On all sites**, and refresh the page.

## Update

Developer-mode installations do not update automatically. Download the latest release package (or pull the latest Git changes), replace the files in the same installation directory, click **Reload** on the AREX Reader card at `chrome://extensions`, and refresh open webpages. Keep the installation directory in place so Chrome retains the extension identity and preferences.

The release ZIP is the same build prepared for Chrome Web Store submission. A GitHub release does not mean that the Store update has been uploaded or approved.

## Privacy and permissions

AREX Reader needs access to webpages so it can display the floating entry, selection toolbar, and inline overviews. Simply browsing a regular webpage does not automatically upload its content. The extension sends only the page content needed to complete an action when you ask a question, request a translation, or generate an overview.

For extension-specific details, read the [AREX Reader Privacy Notice](https://arex-research.com/privacy/reader) and [Terms of Service](https://arex-research.com/terms).

## Feedback

If you find a problem or have a suggestion, please open a [GitHub Issue](https://github.com/AREX-Research/arex-reader/issues). Do not include account details, access codes, or private page content in your report.

---

This repository distributes official AREX Reader packages and release notes only. It does not contain source code and is not licensed as open-source software.
