import{o as Se,a as Pa,i as Ia,s as O,b as rt,e as Re}from"./lifecycle.dx25CBUf.js";import{a3 as za,aa as Wa,aU as $a,aV as Na,i as Oa,u as Ua,aW as Ya,aX as We,aY as qa,q as Ka,aZ as ht,c as it,f as tt,a as U,p as Ja,b as Xa,h as l,m as F,aw as W,g as t,d as dt,s as d,e as i,r,v as Ha,t as Pt,o as h}from"./utils.DQ8kT1M4.js";import{a as Va,s as G}from"./render.CVMQNMFr.js";import{i as S}from"./if.CdTdfcsA.js";import{e as Ga,i as Za}from"./each.BL27Cx8G.js";import{b as Pe}from"./this.Cgkk7Zrw.js";import{I as m}from"./Icon.DaRiFDlb.js";import{m as xt}from"./config.DeGfjkSW.js";import{I as Qa}from"./zh_TW.D-6nPIns.js";import{i as tr}from"./translation.tdZ0su-1.js";import"./props.CQxvYL6U.js";const er=()=>performance.now(),Z={tick:u=>requestAnimationFrame(u),now:()=>er(),tasks:new Set};function $e(){const u=Z.now();Z.tasks.forEach(s=>{s.c(u)||(Z.tasks.delete(s),s.f())}),Z.tasks.size!==0&&Z.tick($e)}function ar(u){let s;return Z.tasks.size===0&&Z.tick($e),{promise:new Promise(x=>{Z.tasks.add(s={c:u,f:x})}),abort(){Z.tasks.delete(s)}}}function It(u,s){We(()=>{u.dispatchEvent(new CustomEvent(s))})}function rr(u){if(u==="float")return"cssFloat";if(u==="offset")return"cssOffset";if(u.startsWith("--"))return u;const s=u.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(x=>x[0].toUpperCase()+x.slice(1)).join("")}function Ie(u){const s={},x=u.split(";");for(const B of x){const[j,E]=B.split(":");if(!j||E===void 0)break;const R=rr(j.trim());s[R]=E.trim()}return s}const ir=u=>u;function sr(u,s,x,B){var j=(u&Ya)!==0,E="both",R,K=s.inert,C=s.style.overflow,c,v;function P(){return We(()=>R??=x()(s,B?.()??{},{direction:E}))}var M={is_global:j,in(){s.inert=K,It(s,"introstart"),c=re(s,P(),v,1,()=>{It(s,"introend"),c?.abort(),c=R=void 0,s.style.overflow=C})},out(f){s.inert=!0,It(s,"outrostart"),v=re(s,P(),c,0,()=>{It(s,"outroend"),f?.()})},stop:()=>{c?.abort(),v?.abort()}},A=za;if((A.transitions??=[]).push(M),Va){var w=j;if(!w){for(var b=A.parent;b&&(b.f&Wa)!==0;)for(;(b=b.parent)&&(b.f&$a)===0;);w=!b||(b.f&Na)!==0}w&&Oa(()=>{Ua(()=>M.in())})}}function re(u,s,x,B,j){var E=B===1;if(qa(s)){var R,K=!1;return Ka(()=>{if(!K){var f=s({direction:E?"in":"out"});R=re(u,f,x,B,j)}}),{abort:()=>{K=!0,R?.abort()},deactivate:()=>R.deactivate(),reset:()=>R.reset(),t:()=>R.t()}}if(x?.deactivate(),!s?.duration)return j(),{abort:ht,deactivate:ht,reset:ht,t:()=>B};const{delay:C=0,css:c,tick:v,easing:P=ir}=s;var M=[];if(E&&x===void 0&&(v&&v(0,1),c)){var A=Ie(c(0,1));M.push(A,A)}var w=()=>1-B,b=u.animate(M,{duration:C,fill:"forwards"});return b.onfinish=()=>{b.cancel();var f=x?.t()??1-B;x?.abort();var y=B-f,$=s.duration*Math.abs(y),vt=[];if($>0){var et=!1;if(c)for(var I=Math.ceil($/16.666666666666668),p=0;p<=I;p+=1){var k=f+y*P(p/I),e=Ie(c(k,1-k));vt.push(e),et||=e.overflow==="hidden"}et&&(u.style.overflow="hidden"),w=()=>{var J=b.currentTime;return f+y*P(J/$)},v&&ar(()=>{if(b.playState!=="running")return!1;var J=w();return v(J,1-J),!0})}b=u.animate(vt,{duration:$,fill:"forwards"}),b.onfinish=()=>{w=()=>B,v?.(B,1-B),j()}},{abort:()=>{b&&(b.cancel(),b.effect=null,b.onfinish=ht)},deactivate:()=>{j=ht},reset:()=>{B===0&&v?.(1,0)},t:()=>w()}}function ze(u){return function(...s){var x=s[0];return x.stopPropagation(),u?.apply(this,s)}}function nr(u){const s=u-1;return s*s*s+1}function or(u,{delay:s=0,duration:x=400,easing:B=nr,axis:j="y"}={}){const E=getComputedStyle(u),R=+E.opacity,K=j==="y"?"height":"width",C=parseFloat(E[K]),c=j==="y"?["top","bottom"]:["left","right"],v=c.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),P=parseFloat(E[`padding${v[0]}`]),M=parseFloat(E[`padding${v[1]}`]),A=parseFloat(E[`margin${v[0]}`]),w=parseFloat(E[`margin${v[1]}`]),b=parseFloat(E[`border${v[0]}Width`]),f=parseFloat(E[`border${v[1]}Width`]);return{delay:s,duration:x,easing:B,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*R};${K}: ${y*C}px;padding-${c[0]}: ${y*P}px;padding-${c[1]}: ${y*M}px;margin-${c[0]}: ${y*A}px;margin-${c[1]}: ${y*w}px;border-${c[0]}-width: ${y*b}px;border-${c[1]}-width: ${y*f}px;min-${K}: 0`}}var lr=dt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ur=dt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),cr=dt('<span class="text-sm text-[var(--content-meta)]"></span>'),dr=dt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),vr=dt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),fr=dt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Ar(u,s){Xa(s,!1);let x=1,B=xt.mode??"meting",j=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",E=xt.id??"9129324473",R=xt.server??"netease",K=xt.type??"playlist",C=F(!1),c=F(!1),v=F(!1),P=F(!1),M=F(0),A=F(0),w=F(.7),b=F(!1),f=F(!1),y=F(!0),$=F(0),vt=F(""),et=F(!1),I=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),k=F(0),e=F(),J=F(),yt=F();const Ne=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200},{id:4,title:"Bones",artist:"Low Roar, Jofridur Akadottir",cover:"assets/music/cover/yds.jpg",url:"assets/music/url/Bones - Low Roar, Jofridur Akadottir.flac",duration:169},{id:5,title:"Runaway",artist:"DEAN FUJIOKA",cover:"assets/music/cover/yds.jpg",url:"assets/music/url/Runaway - DEAN FUJIOKA.flac",duration:222}];async function Oe(){if(!j||!E)return;l(f,!0);const n=j.replace(":server",R).replace(":type",K).replace(":id",E).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(n);if(!D.ok)throw new Error("meting api error");const X=await D.json();l(p,X.map(N=>{let ft=N.name??N.title??"未知歌曲",Ft=N.artist??N.author??"未知艺术家",z=N.duration??0;return z>1e4&&(z=Math.floor(z/1e3)),(!Number.isFinite(z)||z<=0)&&(z=0),{id:N.id,title:ft,artist:Ft,cover:N.pic??"",url:N.url??"",duration:z}})),t(p).length>0&&Wt(t(p)[0]),l(f,!1)}catch{At("Meting 歌单获取失败"),l(f,!1)}}function Ue(){!t(e)||!t(I).url||(t(C)?t(e).pause():t(e).play())}function _t(){l(c,!t(c)),t(c)&&(l(P,!1),l(v,!1))}function wt(){l(v,!t(v)),t(v)&&(l(c,!1),l(P,!1))}function ie(){l(P,!t(P))}function Ye(){l(y,!t(y))}function qe(){l($,(t($)+1)%3)}function Ke(){if(t(p).length<=1)return;const n=t(k)>0?t(k)-1:t(p).length-1;kt(n)}function zt(){if(t(p).length<=1)return;let n;if(t(y))do n=Math.floor(Math.random()*t(p).length);while(n===t(k)&&t(p).length>1);else n=t(k)<t(p).length-1?t(k)+1:0;kt(n)}function kt(n){if(n<0||n>=t(p).length)return;const D=t(C);l(k,n),t(e)&&t(e).pause(),Wt(t(p)[t(k)]),(D||!t(C))&&setTimeout(()=>{t(e)&&(t(e).readyState>=2?t(e).play().catch(()=>{}):t(e).addEventListener("canplay",()=>{t(e).play().catch(()=>{})},{once:!0}))},100)}function Et(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function Wt(n){!n||!t(e)||(l(I,{...n}),n.url?(l(f,!0),t(e).pause(),W(e,t(e).currentTime=0),l(M,0),l(A,n.duration??0),t(e).removeEventListener("loadeddata",se),t(e).removeEventListener("error",ne),t(e).removeEventListener("loadstart",oe),t(e).addEventListener("loadeddata",se,{once:!0}),t(e).addEventListener("error",ne,{once:!0}),t(e).addEventListener("loadstart",oe,{once:!0}),W(e,t(e).src=Et(n.url)),t(e).load()):l(f,!1))}function se(){l(f,!1),t(e)?.duration&&t(e).duration>1&&(l(A,Math.floor(t(e).duration)),t(p)[t(k)]&&W(p,t(p)[t(k)].duration=t(A)),W(I,t(I).duration=t(A)))}function ne(n){l(f,!1),At(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>zt(),1e3):At("播放列表中没有可用的歌曲")}function oe(){}function At(n){l(vt,n),l(et,!0),setTimeout(()=>{l(et,!1)},3e3)}function Je(){l(et,!1)}function Xe(n){if(!t(e)||!t(J))return;const D=t(J).getBoundingClientRect(),N=(n.clientX-D.left)/D.width*t(A);W(e,t(e).currentTime=N),l(M,N)}function He(n){if(!t(e)||!t(yt))return;const D=t(yt).getBoundingClientRect(),X=Math.max(0,Math.min(1,(n.clientX-D.left)/D.width));l(w,X),W(e,t(e).volume=t(w)),l(b,t(w)===0)}function le(){t(e)&&(l(b,!t(b)),W(e,t(e).muted=t(b)))}function ue(n){if(!Number.isFinite(n)||n<0)return"0:00";const D=Math.floor(n/60),X=Math.floor(n%60);return`${D}:${X.toString().padStart(2,"0")}`}function ce(){t(e)&&(t(e).addEventListener("play",()=>{l(C,!0)}),t(e).addEventListener("pause",()=>{l(C,!1)}),t(e).addEventListener("timeupdate",()=>{l(M,t(e).currentTime)}),t(e).addEventListener("ended",()=>{t($)===1?(W(e,t(e).currentTime=0),t(e).play().catch(()=>{})):t($)===2||t(k)<t(p).length-1||t(y)?zt():l(C,!1)}),t(e).addEventListener("error",n=>{l(f,!1)}),t(e).addEventListener("stalled",()=>{}),t(e).addEventListener("waiting",()=>{}))}Se(()=>{l(e,new Audio),W(e,t(e).volume=t(w)),W(e,t(e).playbackRate=x),ce();const n=setInterval(()=>{t(e)&&t(e).playbackRate!==x&&W(e,t(e).playbackRate=x)},100);return()=>{clearInterval(n)}}),Se(()=>{l(e,new Audio),W(e,t(e).volume=t(w)),ce(),B==="meting"?Oe():(l(p,[...Ne]),t(p).length>0?Wt(t(p)[0]):At("本地播放列表为空"))}),Pa(()=>{t(e)&&(t(e).pause(),W(e,t(e).src=""))}),Ia();var de=it(),Ve=tt(de);{var Ge=n=>{var D=fr(),X=tt(D);{var N=a=>{var g=lr(),_=i(g),L=i(_);m(L,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var T=d(L,2),o=i(T,!0);r(T);var H=d(T,2),ut=i(H);m(ut,{icon:"material-symbols:close",class:"text-lg"}),r(H),r(_),r(g),Pt(()=>G(o,t(vt))),h("click",H,Je),U(a,g)};S(X,a=>{t(et)&&a(N)})}var ft=d(X,2);let Ft;var z=i(ft);let ve;var Ze=i(z);{var Qe=a=>{m(a,{icon:"eos-icons:loading",class:"text-white text-lg"})},ta=a=>{var g=it(),_=tt(g);{var L=o=>{var H=ur();U(o,H)},T=o=>{m(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};S(_,o=>{t(C)?o(L):o(T,!1)},!0)}U(a,g)};S(Ze,a=>{t(f)?a(Qe):a(ta,!1)})}r(z);var st=d(z,2);let fe;var pe=i(st),$t=i(pe),Nt=i($t);let me;var be=d(Nt,2),ea=i(be);{var aa=a=>{m(a,{icon:"eos-icons:loading",class:"text-white text-xl"})},ra=a=>{var g=it(),_=tt(g);{var L=o=>{m(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},T=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};S(_,o=>{t(C)?o(L):o(T,!1)},!0)}U(a,g)};S(ea,a=>{t(f)?a(aa):a(ra,!1)})}r(be),r($t);var Ot=d($t,2),Ut=i(Ot),ia=i(Ut,!0);r(Ut);var ge=d(Ut,2),sa=i(ge,!0);r(ge),r(Ot);var he=d(Ot,2),Bt=i(he),na=i(Bt);m(na,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Bt);var Yt=d(Bt,2),oa=i(Yt);m(oa,{icon:"material-symbols:expand-less",class:"text-lg"}),r(Yt),r(he),r(pe),r(st);var Ct=d(st,2);let xe;var qt=i(Ct),Kt=i(qt),ye=i(Kt);let _e;r(Kt);var Jt=d(Kt,2),Xt=i(Jt),la=i(Xt,!0);r(Xt);var Ht=d(Xt,2),ua=i(Ht,!0);r(Ht);var we=d(Ht,2),ca=i(we);r(we),r(Jt);var ke=d(Jt,2),Lt=i(ke),da=i(Lt);m(da,{icon:"material-symbols:visibility-off",class:"text-lg"}),r(Lt);var Vt=d(Lt,2),va=i(Vt);m(va,{icon:"material-symbols:expand-more",class:"text-lg"}),r(Vt),r(ke),r(qt);var Gt=d(qt,2),nt=i(Gt),fa=i(nt);r(nt),Pe(nt,a=>l(J,a),()=>t(J)),r(Gt);var Zt=d(Gt,2),ot=i(Zt);let Ee;var pa=i(ot);m(pa,{icon:"material-symbols:shuffle",class:"text-lg"}),r(ot);var pt=d(ot,2),ma=i(pt);m(ma,{icon:"material-symbols:skip-previous",class:"text-xl"}),r(pt);var lt=d(pt,2);let Ae;var ba=i(lt);{var ga=a=>{m(a,{icon:"eos-icons:loading",class:"text-xl"})},ha=a=>{var g=it(),_=tt(g);{var L=o=>{m(o,{icon:"material-symbols:pause",class:"text-xl"})},T=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};S(_,o=>{t(C)?o(L):o(T,!1)},!0)}U(a,g)};S(ba,a=>{t(f)?a(ga):a(ha,!1)})}r(lt);var mt=d(lt,2),xa=i(mt);m(xa,{icon:"material-symbols:skip-next",class:"text-xl"}),r(mt);var Tt=d(mt,2);let Fe;var ya=i(Tt);{var _a=a=>{m(a,{icon:"material-symbols:repeat-one",class:"text-lg"})},wa=a=>{var g=it(),_=tt(g);{var L=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg"})},T=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};S(_,o=>{t($)===2?o(L):o(T,!1)},!0)}U(a,g)};S(ya,a=>{t($)===1?a(_a):a(wa,!1)})}r(Tt),r(Zt);var Be=d(Zt,2),jt=i(Be),ka=i(jt);{var Ea=a=>{m(a,{icon:"material-symbols:volume-off",class:"text-lg"})},Aa=a=>{var g=it(),_=tt(g);{var L=o=>{m(o,{icon:"material-symbols:volume-down",class:"text-lg"})},T=o=>{m(o,{icon:"material-symbols:volume-up",class:"text-lg"})};S(_,o=>{t(w)<.5?o(L):o(T,!1)},!0)}U(a,g)};S(ka,a=>{t(b)||t(w)===0?a(Ea):a(Aa,!1)})}r(jt);var at=d(jt,2),Fa=i(at);r(at),Pe(at,a=>l(yt,a),()=>t(yt));var Dt=d(at,2);let Ce;var Ba=i(Dt);m(Ba,{icon:"material-symbols:queue-music",class:"text-lg"}),r(Dt),r(Be),r(Ct);var Ca=d(Ct,2);{var La=a=>{var g=vr(),_=i(g),L=i(_),T=i(L,!0);r(L);var o=d(L,2),H=i(o);m(H,{icon:"material-symbols:close",class:"text-lg"}),r(o),r(_);var ut=d(_,2);Ga(ut,5,()=>t(p),Za,(bt,Q,Y)=>{var V=dr();let Mt;var gt=i(V),Ta=i(gt);{var ja=q=>{m(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Da=q=>{var Rt=it(),ee=tt(Rt);{var ae=ct=>{m(ct,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ra=ct=>{var Me=cr();Me.textContent=Y+1,U(ct,Me)};S(ee,ct=>{Y===t(k)?ct(ae):ct(Ra,!1)},!0)}U(q,Rt)};S(Ta,q=>{Y===t(k)&&t(C)?q(ja):q(Da,!1)})}r(gt);var Qt=d(gt,2),Le=i(Qt);r(Qt);var Te=d(Qt,2),St=i(Te);let je;var Ma=i(St,!0);r(St);var te=d(St,2);let De;var Sa=i(te,!0);r(te),r(Te),r(V),Pt((q,Rt,ee,ae)=>{Mt=O(V,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Mt,q),rt(V,"aria-label",`播放 ${t(Q).title??""} - ${t(Q).artist??""}`),rt(Le,"src",Rt),rt(Le,"alt",t(Q).title),je=O(St,1,"font-medium truncate",null,je,ee),G(Ma,t(Q).title),De=O(te,1,"text-sm text-[var(--content-meta)] truncate",null,De,ae),G(Sa,t(Q).artist)},[()=>({"bg-[var(--btn-plain-bg)]":Y===t(k),"text-[var(--primary)]":Y===t(k)}),()=>Et(t(Q).cover),()=>({"text-[var(--primary)]":Y===t(k),"text-90":Y!==t(k)}),()=>({"text-[var(--primary)]":Y===t(k)})]),h("click",V,()=>kt(Y)),h("keydown",V,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),kt(Y))}),U(bt,V)}),r(ut),r(g),Pt(bt=>G(T,bt),[()=>tr(Qa.playlist)]),h("click",o,ie),sr(3,g,()=>or,()=>({duration:300,axis:"y"})),U(a,g)};S(Ca,a=>{t(P)&&a(La)})}r(ft),Ha(2),Pt((a,g,_,L,T,o,H,ut,bt,Q,Y,V,Mt,gt)=>{Ft=O(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,a),ve=O(z,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ve,g),fe=O(st,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,fe,_),rt(Nt,"src",L),me=O(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,me,T),G(ia,t(I).title),G(sa,t(I).artist),xe=O(Ct,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,xe,o),rt(ye,"src",H),_e=O(ye,1,"w-full h-full object-cover transition-transform duration-300",null,_e,ut),G(la,t(I).title),G(ua,t(I).artist),G(ca,`${bt??""} / ${Q??""}`),rt(nt,"aria-valuenow",t(A)>0?t(M)/t(A)*100:0),Re(fa,`width: ${t(A)>0?t(M)/t(A)*100:0}%`),Ee=O(ot,1,"w-10 h-10 rounded-lg",null,Ee,Y),ot.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,Ae=O(lt,1,"btn-regular w-12 h-12 rounded-full",null,Ae,V),lt.disabled=t(f),mt.disabled=t(p).length<=1,Fe=O(Tt,1,"w-10 h-10 rounded-lg",null,Fe,Mt),rt(at,"aria-valuenow",t(w)*100),Re(Fa,`width: ${t(w)*100}%`),Ce=O(Dt,1,"btn-plain w-8 h-8 rounded-lg",null,Ce,gt)},[()=>({expanded:t(c),"hidden-mode":t(v)}),()=>({"opacity-0":!t(v),"scale-0":!t(v),"pointer-events-none":!t(v)}),()=>({"opacity-0":t(c)||t(v),"scale-95":t(c)||t(v),"pointer-events-none":t(c)||t(v)}),()=>Et(t(I).cover),()=>({spinning:t(C)&&!t(f),"animate-pulse":t(f)}),()=>({"opacity-0":!t(c),"scale-95":!t(c),"pointer-events-none":!t(c)}),()=>Et(t(I).cover),()=>({spinning:t(C)&&!t(f),"animate-pulse":t(f)}),()=>ue(t(M)),()=>ue(t(A)),()=>({"btn-regular":t(y),"btn-plain":!t(y)}),()=>({"opacity-50":t(f)}),()=>({"btn-regular":t($)>0,"btn-plain":t($)===0}),()=>({"text-[var(--primary)]":t(P)})]),h("click",z,wt),h("keydown",z,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),wt())}),h("click",Bt,ze(wt)),h("click",Yt,ze(_t)),h("click",st,_t),h("keydown",st,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),_t())}),h("click",Lt,wt),h("click",Vt,_t),h("click",nt,Xe),h("keydown",nt,a=>{if(a.key==="Enter"||a.key===" "){a.preventDefault(),t(J).getBoundingClientRect();const _=.5*t(A);t(e)&&(W(e,t(e).currentTime=_),l(M,_))}}),h("click",ot,Ye),h("click",pt,Ke),h("click",lt,Ue),h("click",mt,zt),h("click",Tt,qe),h("click",jt,le),h("click",at,He),h("keydown",at,a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.key==="Enter"&&le())}),h("click",Dt,ie),U(n,D)};S(Ve,n=>{n(Ge)})}U(u,de),Ja()}export{Ar as default};
