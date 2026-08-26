(function(){function e(e){return e}function t(){let e=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return e.classList.add(`mark`),e.setAttribute(`viewBox`,`0 0 388 337`),e.setAttribute(`fill`,`currentColor`),e.setAttribute(`aria-hidden`,`true`),e.innerHTML=`
    <path fill-rule="evenodd" d="M194 18 279 162 217 254 256.5 318 217.5 318 194 279 170.5 318 131.5 318 171 254 109 162Zm0 73-42 71 42 67 42-67Z" />
    <path d="m104 174.5 20.5 31L59 318H16.5ZM284 174.5 371.5 318H329l-65.5-112.5Z" />
  `,e}function n({collapseLabelOnNarrow:e=!1,density:n=`default`,hostId:r=`arex-reader-entry`,label:i=`速览`,openingLabel:a=`正在打开速览`,failureLabel:o=`暂时无法打开速览，请重试`,placement:s=`inline`,title:c,onActivate:l}){let u=document.createElement(`span`);u.id=r,u.dataset.collapseLabelOnNarrow=e?`true`:`false`,u.dataset.density=n,u.dataset.placement=s;let d=u.attachShadow({mode:`open`}),f=document.createElement(`style`);f.textContent=`
    :host {
      display: inline-flex;
      align-items: center;
      flex: 0 0 auto;
      color: inherit;
      font: inherit;
      vertical-align: middle;
    }
    * { box-sizing: border-box; }
    button {
      min-width: 0;
      height: 32px;
      margin: 0;
      padding: 0 12px 0 10px;
      border: 0;
      border-radius: 999px;
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      background: rgb(0 0 0 / .07);
      color: #1c1a17;
      box-shadow: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 13px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
      transition: background 120ms ease, color 120ms ease;
    }
    button:hover:not(:disabled) { background: rgb(0 0 0 / .11); }
    button:active:not(:disabled) { background: rgb(0 0 0 / .15); }
    button:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
    button:disabled { cursor: wait; opacity: .48; }
    .mark {
      display: block;
      width: 15px;
      height: 14px;
      flex: 0 0 auto;
      color: currentColor;
    }
    .label { transform: translateY(-.15px); }

    :host([data-placement="youtube"]) button {
      height: 36px;
      padding: 0 16px;
      background: var(--yt-spec-badge-chip-background, rgb(0 0 0 / .05));
      color: var(--yt-spec-text-primary, #0f0f0f);
      font-size: 14px;
    }
    :host([data-placement="youtube"]) button:hover:not(:disabled) {
      background: var(--yt-spec-additive-background, rgb(0 0 0 / .1));
    }

    :host([data-placement="bilibili"]) button {
      height: 32px;
      padding: 0 12px;
      background: rgb(0 0 0 / .06);
      color: #18191c;
      font-size: 13px;
    }
    :host([data-placement="bilibili"]) button:hover:not(:disabled) {
      background: rgb(0 0 0 / .1);
    }

    :host([data-placement="arxiv"]) button {
      height: 28px;
      padding: 0 10px;
      background: rgb(0 0 0 / .06);
      color: #111;
      font-size: 13px;
      font-weight: 600;
    }
    :host([data-placement="arxiv"]) button:hover:not(:disabled) {
      background: rgb(0 0 0 / .1);
    }

    :host([data-placement="pdf-toolbar"]) {
      position: fixed;
      top: 0;
      right: 176px;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      height: var(--viewer-pdf-toolbar-height, 56px);
      line-height: 0;
      pointer-events: auto;
    }
    :host([data-placement="pdf-toolbar"]) button {
      height: 36px;
      padding: 0 14px;
      background: rgb(255 255 255 / .18);
      color: #fff;
      font: 500 13px/1 system-ui, "Segoe UI", sans-serif;
    }
    :host([data-placement="pdf-toolbar"]) button:hover:not(:disabled) {
      background: rgb(255 255 255 / .28);
    }
    :host([data-placement="pdf-toolbar"]) .mark { color: #fff; }

    .status {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
    }
    @media (prefers-reduced-motion: reduce) {
      button { transition-duration: .01ms; }
    }
    @media (max-width: 900px) {
      :host([data-placement="pdf-toolbar"]) { right: 140px; }
    }
    @media (max-width: 720px) {
      :host([data-placement="pdf-toolbar"]) { right: 108px; }
      :host([data-collapse-label-on-narrow="true"]) button {
        width: 32px;
        padding: 0;
      }
      :host([data-collapse-label-on-narrow="true"]) .label { display: none; }
    }
  `;let p=document.createElement(`button`);p.type=`button`,p.title=c,p.setAttribute(`aria-label`,c);let m=document.createElement(`span`);m.className=`label`,m.textContent=i;let h=document.createElement(`span`);return h.className=`status`,h.setAttribute(`role`,`status`),h.setAttribute(`aria-live`,`polite`),p.append(t(),m),p.addEventListener(`click`,async()=>{if(!p.disabled){p.disabled=!0,h.textContent=a;try{await l(),h.textContent=``,p.title=c}catch{h.textContent=o,p.title=o}finally{p.disabled=!1}}}),d.append(f,p,h),u}function r(){let e=`floating`,t=t=>(t.type===`READER_SURFACE_MODE_UPDATED`&&(e=t.mode),!1);return chrome.runtime.onMessage.addListener(t),chrome.runtime.sendMessage({type:`GET_READER_SURFACE_MODE`}).then(t=>{t.ok&&`readerSurfaceMode`in t&&(e=t.readerSurfaceMode)}).catch(()=>void 0),{open(t,n){return chrome.runtime.sendMessage({type:`OPEN_READER`,mode:n??e,...t})},dispose(){chrome.runtime.onMessage.removeListener(t)}}}function i(e){let t=e.trim().replace(/\.$/,``).toLowerCase();if(!t||/[\s/@]/.test(t))return null;try{return new URL(`https://${t}`).hostname.toLowerCase()}catch{return null}}function a(e){try{let t=new URL(e);return t.protocol!==`http:`&&t.protocol!==`https:`?null:i(t.hostname)}catch{return null}}function o(e,t){let n=a(t);return!!(n&&!e.disabledHosts.includes(n))}function s({currentUrl:e=()=>location.href,onChange:t}){let n=null,r=!1,i=null,a=()=>!!(n&&!r&&o(n,e())),s=()=>{let e=a();e!==i&&(i=e,t(e))},c=e=>(e.type===`WEB_SURFACE_SETTINGS_UPDATED`?(n=e.settings,s()):e.type===`WEB_SURFACES_DISMISSED_FOR_PAGE`&&(r=!0,s()),!1);return chrome.runtime.onMessage.addListener(c),s(),chrome.runtime.sendMessage({type:`GET_WEB_SURFACE_SETTINGS`}).then(e=>{e.ok&&`webSurfaceSettings`in e&&(n=e.webSurfaceSettings,s())}).catch(()=>void 0),{automaticSurfacesEnabled:a,dispose(){chrome.runtime.onMessage.removeListener(c)}}}function c(e){let t=e?.trim().toLowerCase()??``;return t===`zh`||t.startsWith(`zh-`)?`zh-CN`:`en`}function l(e,t){return e===`system`?c(t):e}function u(e){let t=!1,n={preference:`system`,locale:l(`system`,chrome.i18n.getUILanguage())},r=r=>{t||(r.locale!==n.locale||r.preference!==n.preference)&&(n=r,e(r))};e(n),chrome.runtime.sendMessage({type:`GET_UI_LANGUAGE`}).then(e=>{e.ok&&`uiLanguage`in e&&r(e.uiLanguage)}).catch(()=>void 0);let i=e=>(e.type===`UI_LANGUAGE_UPDATED`&&r(e.settings),!1);return chrome.runtime.onMessage.addListener(i),{dispose(){t=!0,chrome.runtime.onMessage.removeListener(i)}}}var d=/^[A-Za-z0-9_-]{11}$/;function f(e){try{let t=new URL(e),n=null;return t.hostname===`youtu.be`?n=t.pathname.split(`/`).filter(Boolean)[0]??null:(t.hostname===`youtube.com`||t.hostname.endsWith(`.youtube.com`))&&(n=t.pathname===`/watch`?t.searchParams.get(`v`):t.pathname.match(/^\/(?:shorts|live|embed)\/([^/?#]+)/)?.[1]??null),n&&d.test(n)?n:null}catch{return null}}var p={common:{settings:`设置`,overview:`速览`,retry:`重试`,send:`发送`,collapse:`收起`,visitArex:`访问 AREX 主页`,openArex:`打开 AREX`,openArexChat:`打开 AREX 聊天`,collapseArexChat:`收起 AREX 聊天`,arexChatWindow:`AREX 聊天窗口`,openFailed:`暂时无法打开，请重试。`,openOverview:`打开 AREX 速览`,openPaperOverview:`打开 AREX 论文速览`,openVideoOverview:`打开 AREX 视频速览`,openingOverview:`正在打开速览`,openOverviewFailed:`暂时无法打开速览，请重试`},options:{documentTitle:`AREX Reader 设置`,languageHeading:`语言`,languageDescription:`默认跟随浏览器语言，也可以固定使用 English 或中文。界面和新生成的速览会使用同一种语言。`,system:`跟随系统`,english:`English`,chinese:`中文`,systemHint:`当前系统语言：中文`,pageDisplay:`网页显示`,lede:`页面上的关闭按钮只隐藏当前页面，刷新或下次访问时会恢复。如果某个网站不需要 AREX，可在这里长期关闭。`,disabledSites:`不显示的网站`,disabledSitesDescription:`按网站域名生效。例如添加 arxiv.org 后，其网页入口和划词工具栏都不会自动出现。`,addSite:`添加网站`,sitePlaceholder:`example.com 或完整网页地址`,invalidSite:`请输入有效的网站域名或网页地址。`,addedSites:`已添加的网站`,addedSiteCount:e=>`已添加 ${e} 个网站`,enableAll:`全部重新启用`,loading:`正在读取设置`,disabledHere:`不会在此自动显示`,restoring:`恢复中`,enableAgain:`重新启用`,empty:`暂无。AREX 会在支持的网页中正常显示。`,savedLocally:`设置仅保存在当前浏览器中。`,terms:`服务条款`,privacy:`Reader 隐私说明`,readFailed:`无法读取设置。`,saveFailed:`无法保存设置。`},reader:{currentPage:`当前网页`,explainSelection:`解释这段内容`,digestPage:`速读这页`,digestPageDisplay:`解读当前页面`,newConversation:`新对话`,currentConversation:`当前对话`,conversation:e=>`对话 ${e}`,pageConversations:`当前网页的对话`,currentConversationTitle:e=>`当前对话：${e}`,openSidePanel:`在侧边栏打开 AREX`,openSidePanelShort:`在侧边栏打开`,returnFloating:`回到 AREX 小窗口`,returnFloatingShort:`回到小窗口`,collapseArex:`收起 AREX`,pageDisplaySettings:`网页显示设置`,openPageDisplaySettings:`打开 AREX 网页显示设置`,bilibiliVideo:`Bilibili 视频`,youtubeVideo:`YouTube 视频`,unavailableTitle:`暂时无法使用`,tryLater:`请稍后再试。`,welcomePaper:`想从这篇论文了解什么？`,welcomeVideo:`想从这个视频了解什么？`,welcomePage:`想从这页了解什么？`,paperHint:`可以先看速览，或直接问方法、贡献和局限。`,videoHint:`可以先看速览，或直接问重点、脉络和高光片段。`,reconnecting:`正在重新连接`,paperOverview:`论文速览`,videoOverview:`视频速览`,collapseOverview:`收起速览`,askArex:`向 AREX 提问`,askPaper:`问问这篇论文…`,askVideo:`问问这个视频…`,askPage:`问问这页内容…`,stop:`停止生成`,safetyTitle:`无法提供这类回复`,safetyBody:`这条回复可能包含 AREX 不能协助提供的内容。`,quotedSelection:`引用的选中内容`},auth:{title:`在网页上直接问 AREX`,phone:`手机号`,wait:`请稍候…`,getCode:`获取验证码`,useAccessKey:`使用登录码`,accessKey:`登录码`,accessKeyPlaceholder:`输入登录码`,continue:`继续`,usePhone:`使用手机号`,sentTo:`发送至`,code:`验证码`,back:`返回`,startTitle:`开始使用 AREX`,consentIntro:`请先阅读并同意以下条款。`,dataDisclosure:`仅当你主动提问、翻译或生成速览时，AREX 才会发送完成该操作所需的页面地址、标题、正文或选中文字。仅浏览网页不会自动上传正文。`,consentPrefix:`我已阅读并同意`,terms:`服务条款`,and:`与`,privacy:`隐私政策`,start:`开始使用`,cancel:`取消`,rateLimited:`操作太频繁，请稍后再试。`,networkError:`网络连接异常，请稍后再试。`,otpExpired:`验证码无效或已过期，请重新获取。`,loginFailed:`暂时无法登录，请稍后再试。`,accessKeyInvalid:`登录码不正确，请检查后重试。`,invalidPhone:`请输入 11 位中国大陆手机号，或带国家区号的完整号码。`,codeSendFailed:`验证码发送失败，请稍后再试。`,invalidCodeFormat:`请输入 6 位验证码。`,incorrectCode:`验证码不正确，请重新输入。`,startFailed:`暂时无法开始使用，请稍后再试。`,signOutFailed:`暂时无法退出，请稍后再试。`},paperOverview:{fieldBackground:`论文所处的领域背景`,conclusions:`结论与贡献`,method:`核心思想与方法`,generating:`正在提炼论文的核心内容…`,reading:`正在读取论文…`,unavailable:`论文速览暂时不可用，请稍后再试。`,contentBlocked:`此内容不支持生成论文速览。`,notGenerated:`论文速览暂时没有生成。`,generate:`生成速览`,quota:e=>`今天的 ${e} 篇论文速览额度已用完，请明天再试。`},videoOverview:{generating:`正在提炼视频重点…`,reading:`正在整理视频…`,noCaptions:`这个视频暂无可用字幕。`,notGenerated:`视频速览尚未生成。`,unavailable:`视频速览暂时不可用，请稍后再试。`,contentBlocked:`此内容不支持生成视频速览。`,generate:`生成速览`,summary:`内容概览`,outline:`内容脉络`,quotes:`高光金句`,node:`内容节点`,seekTo:e=>`跳转到 ${e}`,quotaFree:`今天的 3 次视频速览已用完。Pro 每天可生成 20 次，或明天再试。`,quota:e=>`今天的 ${e} 次视频速览已用完，请明天再试。`},selection:{toolbar:`AREX 划词工具栏`,ask:`问 AREX`,explain:`解释`,translate:`翻译`,askPlaceholder:`针对这段内容提问…`,askLabel:`针对选中内容提问`,hidePage:`在当前页面隐藏`,hideArex:`在当前页面隐藏 AREX`,translation:`译文`,targetLanguage:`翻译目标语言`,closeTranslation:`关闭翻译`,translating:`正在翻译`,sameLanguage:e=>`选中的内容看起来已经是${e}。`,switchLanguage:e=>`切换为${e}`,emptyTranslation:`没有可显示的翻译，请重试。`,login:`登录`},errors:{serviceUnavailable:`AREX 暂时不可用，请稍后再试。`,authExpired:`登录已失效，请重新登录。`,tooManyRequests:`请求较多，请稍后再试。`,requestFailed:`这次请求没有完成，请重试。`,chatLoadFailed:`暂时无法加载之前的对话。你仍可以开始新的提问。`,conversationOpenFailed:`暂时无法打开这段对话，请稍后再试。`,startFailed:`暂时无法开始，请稍后再试。`,resumeFailed:`连接中断，暂时无法恢复这次回答。`,contentMissing:`没有找到可阅读的内容。`,translationLogin:`请先登录 AREX，再使用翻译。`,translationFailed:`暂时无法翻译，请稍后再试。`,seekFailed:`无法跳转到对应时间。`,switchSurfaceFailed:`暂时无法切换显示方式，请稍后再试。`,openSettingsFailed:`无法打开设置。`}},m={common:{settings:`Settings`,overview:`Overview`,retry:`Retry`,send:`Send`,collapse:`Collapse`,visitArex:`Visit the AREX website`,openArex:`Open AREX`,openArexChat:`Open AREX chat`,collapseArexChat:`Collapse AREX chat`,arexChatWindow:`AREX chat window`,openFailed:`Couldn't open AREX. Try again.`,openOverview:`Open AREX overview`,openPaperOverview:`Open AREX paper overview`,openVideoOverview:`Open AREX video overview`,openingOverview:`Opening overview`,openOverviewFailed:`Couldn't open the overview. Try again.`},options:{documentTitle:`AREX Reader Settings`,languageHeading:`Language`,languageDescription:`Follow your browser language by default, or always use English or Chinese. The interface and newly generated overviews use the same language.`,system:`System`,english:`English`,chinese:`中文`,systemHint:`Current system language: English`,pageDisplay:`On-page display`,lede:`Closing AREX on a page hides it only until you refresh or visit again. You can permanently disable AREX on specific sites here.`,disabledSites:`Disabled sites`,disabledSitesDescription:`Rules apply by hostname. For example, adding arxiv.org hides its page entries and selection toolbar.`,addSite:`Add site`,sitePlaceholder:`example.com or a full URL`,invalidSite:`Enter a valid hostname or page URL.`,addedSites:`Added sites`,addedSiteCount:e=>`${e} ${e===1?`site`:`sites`} added`,enableAll:`Enable all`,loading:`Loading settings`,disabledHere:`AREX won't appear automatically`,restoring:`Enabling…`,enableAgain:`Enable`,empty:`None. AREX will appear normally on supported pages.`,savedLocally:`Settings are stored only in this browser.`,terms:`Terms of Service`,privacy:`Reader Privacy Notice`,readFailed:`Couldn't load settings.`,saveFailed:`Couldn't save settings.`},reader:{currentPage:`Current page`,explainSelection:`Explain this passage`,digestPage:`Read this page`,digestPageDisplay:`Explain this page`,newConversation:`New conversation`,currentConversation:`Current conversation`,conversation:e=>`Conversation ${e}`,pageConversations:`Conversations on this page`,currentConversationTitle:e=>`Current conversation: ${e}`,openSidePanel:`Open AREX in the side panel`,openSidePanelShort:`Open in side panel`,returnFloating:`Return to the AREX window`,returnFloatingShort:`Return to window`,collapseArex:`Collapse AREX`,pageDisplaySettings:`On-page display settings`,openPageDisplaySettings:`Open AREX display settings`,bilibiliVideo:`Bilibili video`,youtubeVideo:`YouTube video`,unavailableTitle:`Temporarily unavailable`,tryLater:`Please try again later.`,welcomePaper:`What would you like to learn from this paper?`,welcomeVideo:`What would you like to learn from this video?`,welcomePage:`What would you like to learn from this page?`,paperHint:`Start with the overview, or ask about methods, contributions, and limitations.`,videoHint:`Start with the overview, or ask about key ideas, structure, and notable moments.`,reconnecting:`Reconnecting`,paperOverview:`Paper overview`,videoOverview:`Video overview`,collapseOverview:`Collapse overview`,askArex:`Ask AREX`,askPaper:`Ask about this paper…`,askVideo:`Ask about this video…`,askPage:`Ask about this page…`,stop:`Stop generating`,safetyTitle:`Unable to provide this response`,safetyBody:`This response may contain content AREX cannot assist with.`,quotedSelection:`Quoted selection`},auth:{title:`Ask AREX from any webpage`,phone:`Mainland China phone number`,wait:`Please wait…`,getCode:`Get verification code`,useAccessKey:`Use access key`,accessKey:`Access key`,accessKeyPlaceholder:`Enter your access key`,continue:`Continue`,usePhone:`Use phone number`,sentTo:`Sent to`,code:`Verification code`,back:`Back`,startTitle:`Start using AREX`,consentIntro:`Please review and accept the following terms.`,dataDisclosure:`AREX sends the page URL, title, content, or selected text needed for an action only when you ask a question, request a translation, or generate an overview. Simply browsing does not upload the page body.`,consentPrefix:`I have read and accept the`,terms:`Terms of Service`,and:`and`,privacy:`Privacy Policy`,start:`Start using AREX`,cancel:`Cancel`,rateLimited:`Too many attempts. Try again later.`,networkError:`Check your network connection and try again.`,otpExpired:`The verification code is invalid or expired. Request a new one.`,loginFailed:`Sign-in is temporarily unavailable. Try again later.`,accessKeyInvalid:`That access key isn't valid. Check it and try again.`,invalidPhone:`Enter an 11-digit Mainland China phone number.`,codeSendFailed:`Couldn't send a verification code. Try again later.`,invalidCodeFormat:`Enter the 6-digit verification code.`,incorrectCode:`That verification code isn't correct. Try again.`,startFailed:`Couldn't start using AREX. Try again later.`,signOutFailed:`Couldn't sign out. Try again later.`},paperOverview:{fieldBackground:`Field background`,conclusions:`Conclusions and contributions`,method:`Core ideas and methods`,generating:`Distilling the paper's core ideas…`,reading:`Reading the paper…`,unavailable:`The paper overview is temporarily unavailable. Try again later.`,contentBlocked:`This content isn't supported for paper overview generation.`,notGenerated:`This paper overview hasn't been generated yet.`,generate:`Generate overview`,quota:e=>`You've used today's ${e} paper overviews. Try again tomorrow.`},videoOverview:{generating:`Distilling the video's key ideas…`,reading:`Preparing the video overview…`,noCaptions:`No usable captions are available for this video.`,notGenerated:`This video overview hasn't been generated yet.`,unavailable:`The video overview is temporarily unavailable. Try again later.`,contentBlocked:`This content isn't supported for video overview generation.`,generate:`Generate overview`,summary:`Overview`,outline:`Timeline`,quotes:`Notable quotes`,node:`Content section`,seekTo:e=>`Jump to ${e}`,quotaFree:`You've used today's 3 video overviews. Pro includes 20 per day, or try again tomorrow.`,quota:e=>`You've used today's ${e} video overviews. Try again tomorrow.`},selection:{toolbar:`AREX selection toolbar`,ask:`Ask AREX`,explain:`Explain`,translate:`Translate`,askPlaceholder:`Ask about this passage…`,askLabel:`Ask about the selected passage`,hidePage:`Hide on this page`,hideArex:`Hide AREX on this page`,translation:`Translation`,targetLanguage:`Translation target language`,closeTranslation:`Close translation`,translating:`Translating`,sameLanguage:e=>`The selected text already appears to be ${e}.`,switchLanguage:e=>`Switch to ${e}`,emptyTranslation:`There's no translation to display. Try again.`,login:`Sign in`},errors:{serviceUnavailable:`AREX is temporarily unavailable. Try again later.`,authExpired:`Your sign-in has expired. Please sign in again.`,tooManyRequests:`Too many requests. Please try again later.`,requestFailed:`The request didn't finish. Try again.`,chatLoadFailed:`Couldn't load earlier conversations. You can still start a new question.`,conversationOpenFailed:`Couldn't open this conversation. Try again later.`,startFailed:`Couldn't get started. Try again later.`,resumeFailed:`The connection was interrupted and this response couldn't be restored.`,contentMissing:`No readable content was found.`,translationLogin:`Sign in to AREX before using translation.`,translationFailed:`Translation is temporarily unavailable. Try again later.`,seekFailed:`Couldn't jump to that time.`,switchSurfaceFailed:`Couldn't change the display mode. Try again later.`,openSettingsFailed:`Couldn't open settings.`}};function h(e){return e===`zh-CN`?p:m}var g=`arex-reader-entry`;function _(){return document.querySelector(`ytd-watch-metadata #actions #top-level-buttons-computed`)||document.querySelector(`#above-the-fold #actions #top-level-buttons-computed`)||document.querySelector(`#actions #top-level-buttons-computed`)}var v=e({matches:[`https://*.youtube.com/*`,`https://youtu.be/*`],runAt:`document_idle`,main(e){let t=r(),i=!1,a=``,o=l(`system`,chrome.i18n.getUILanguage()),c=()=>{if(e.signal.aborted||!i)return;let r=f(location.href),s=document.getElementById(g);if(!r){s?.remove(),a=``;return}if(s&&a===r)return;s?.remove();let c=_();if(!c)return;let l=h(o),u=n({hostId:g,label:l.common.overview,placement:`youtube`,title:l.common.openVideoOverview,openingLabel:l.common.openingOverview,failureLabel:l.common.openOverviewFailed,onActivate:async()=>{let e=await t.open({actionId:`overview`},`floating`);if(!e.ok)throw Error(e.message||l.common.openArex)}});u.style.marginInlineEnd=`8px`,c.prepend(u),a=r},d=s({onChange(e){if(i=e,e){c();return}document.getElementById(g)?.remove(),a=``}}),p=u(e=>{o!==e.locale&&(o=e.locale,document.getElementById(g)?.remove(),a=``,c())}),m=new MutationObserver(c);m.observe(document.documentElement,{childList:!0,subtree:!0}),e.onInvalidated(()=>{m.disconnect(),d.dispose(),p.dispose(),document.getElementById(g)?.remove(),t.dispose()})}}),y={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)},b=globalThis.browser?.runtime?.id?globalThis.browser:globalThis.chrome,x=class e extends Event{static EVENT_NAME=S(`wxt:locationchange`);constructor(t,n){super(e.EVENT_NAME,{}),this.newUrl=t,this.oldUrl=n}};function S(e){return`${b?.runtime?.id}:youtube:${e}`}var C=typeof globalThis.navigation?.addEventListener==`function`;function w(e){let t,n=!1;return{run(){n||(n=!0,t=new URL(location.href),C?globalThis.navigation.addEventListener(`navigate`,e=>{let n=new URL(e.destination.url);n.href!==t.href&&(window.dispatchEvent(new x(n,t)),t=n)},{signal:e.signal}):e.setInterval(()=>{let e=new URL(location.href);e.href!==t.href&&(window.dispatchEvent(new x(e,t)),t=e)},1e3))}}}var T=class e{static SCRIPT_STARTED_MESSAGE_TYPE=S(`wxt:content-script-started`);id;abortController;locationWatcher=w(this);constructor(e,t){this.contentScriptName=e,this.options=t,this.id=Math.random().toString(36).slice(2),this.abortController=new AbortController,this.stopOldScripts(),this.listenForNewerScripts()}get signal(){return this.abortController.signal}abort(e){return this.abortController.abort(e)}get isInvalid(){return b.runtime?.id??this.notifyInvalidated(),this.signal.aborted}get isValid(){return!this.isInvalid}onInvalidated(e){return this.signal.addEventListener(`abort`,e),()=>this.signal.removeEventListener(`abort`,e)}block(){return new Promise(()=>{})}setInterval(e,t){let n=setInterval(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearInterval(n)),n}setTimeout(e,t){let n=setTimeout(()=>{this.isValid&&e()},t);return this.onInvalidated(()=>clearTimeout(n)),n}requestAnimationFrame(e){let t=requestAnimationFrame((...t)=>{this.isValid&&e(...t)});return this.onInvalidated(()=>cancelAnimationFrame(t)),t}requestIdleCallback(e,t){let n=requestIdleCallback((...t)=>{this.signal.aborted||e(...t)},t);return this.onInvalidated(()=>cancelIdleCallback(n)),n}addEventListener(e,t,n,r){t===`wxt:locationchange`&&this.isValid&&this.locationWatcher.run(),e.addEventListener?.(t.startsWith(`wxt:`)?S(t):t,n,{...r,signal:this.signal})}notifyInvalidated(){this.abort(`Content script context invalidated`),y.debug(`Content script "${this.contentScriptName}" context invalidated`)}stopOldScripts(){document.dispatchEvent(new CustomEvent(e.SCRIPT_STARTED_MESSAGE_TYPE,{detail:{contentScriptName:this.contentScriptName,messageId:this.id}})),this.options?.noScriptStartedPostMessage||window.postMessage({type:e.SCRIPT_STARTED_MESSAGE_TYPE,contentScriptName:this.contentScriptName,messageId:this.id},`*`)}verifyScriptStartedEvent(e){let t=e.detail?.contentScriptName===this.contentScriptName,n=e.detail?.messageId===this.id;return t&&!n}listenForNewerScripts(){let t=e=>{!(e instanceof CustomEvent)||!this.verifyScriptStartedEvent(e)||this.notifyInvalidated()};document.addEventListener(e.SCRIPT_STARTED_MESSAGE_TYPE,t),this.onInvalidated(()=>document.removeEventListener(e.SCRIPT_STARTED_MESSAGE_TYPE,t))}},E={debug:(...e)=>([...e],void 0),log:(...e)=>([...e],void 0),warn:(...e)=>([...e],void 0),error:(...e)=>([...e],void 0)};return(async()=>{try{let{main:e,...t}=v;return await e(new T(`youtube`,t))}catch(e){throw E.error(`The content script "youtube" crashed on startup!`,e),e}})()})();