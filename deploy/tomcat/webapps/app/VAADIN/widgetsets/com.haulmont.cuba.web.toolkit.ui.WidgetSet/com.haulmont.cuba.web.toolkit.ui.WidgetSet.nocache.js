function com_haulmont_cuba_web_toolkit_ui_WidgetSet(){var O='bootstrap',P='begin',Q='gwt.codesvr.com.haulmont.cuba.web.toolkit.ui.WidgetSet=',R='gwt.codesvr=',S='com.haulmont.cuba.web.toolkit.ui.WidgetSet',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='readystatechange',fb=10,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='com_haulmont_cuba_web_toolkit_ui_WidgetSet',ob='Failed to load ',pb='head',qb='meta',rb='name',sb='com.haulmont.cuba.web.toolkit.ui.WidgetSet::',tb='::',ub='gwt:property',vb='content',wb='=',xb='gwt:onPropertyErrorFn',yb='Bad handler "',zb='" for "gwt:onPropertyErrorFn"',Ab='gwt:onLoadErrorFn',Bb='" for "gwt:onLoadErrorFn"',Cb='#',Db='?',Eb='/',Fb='img',Gb='clear.cache.gif',Hb='baseUrl',Ib='com.haulmont.cuba.web.toolkit.ui.WidgetSet.nocache.js',Jb='base',Kb='//',Lb='ie11orHigher',Mb='MSIE',Nb='Trident',Ob='yes',Pb='no',Qb='modernie',Rb='none',Sb='user.agent',Tb='webkit',Ub='safari',Vb='msie',Wb=11,Xb='ie10',Yb=9,Zb='ie9',$b=8,_b='ie8',ac='gecko',bc='gecko1_8',cc=2,dc=3,ec=4,fc='selectingPermutation',gc='com.haulmont.cuba.web.toolkit.ui.WidgetSet.devmode.js',hc='8F51513B00EC5D913038D25EF997FAFB',ic=':1',jc=':10',kc=':11',lc=':2',mc=':3',nc=':4',oc=':5',pc=':6',qc=':7',rc=':8',sc=':9',tc=':',uc='.cache.js',vc='link',wc='rel',xc='stylesheet',yc='href',zc='loadExternalRefs',Ac='popupbutton/popupbutton.css',Bc='fi_jasoft_dragdroplayouts/dragdroplayouts.css',Cc='end',Dc='http:',Ec='file:',Fc='_gwt_dummy_',Gc='__gwtDevModeHook:com.haulmont.cuba.web.toolkit.ui.WidgetSet',Hc='Ignoring non-whitelisted Dev Mode URL: ',Ic=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
com_haulmont_cuba_web_toolkit_ui_WidgetSet.__sendStats=r;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleName=S;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__errFn=null;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleBase=U;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__softPermutationId=V;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__computePropValue=null;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__getPropMap=null;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__installRunAsyncCode=function(){};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__gwtStartLoadingFragment=function(){return null};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__gwt_isKnownPropertyValue=function(){return false};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[com_haulmont_cuba_web_toolkit_ui_WidgetSet.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){d()},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
com_haulmont_cuba_web_toolkit_ui_WidgetSet.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(com_haulmont_cuba_web_toolkit_ui_WidgetSet.__errFn){n.onerror=function(){com_haulmont_cuba_web_toolkit_ui_WidgetSet.__errFn(nb,new Error(ob+code))}}p.getElementsByTagName(pb)[V].appendChild(n)}
com_haulmont_cuba_web_toolkit_ui_WidgetSet.__startLoadingFragment=function(a){return D(a)};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(qb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(rb),k;if(j){j=j.replace(sb,bb);if(j.indexOf(tb)>=V){continue}if(j==ub){k=i.getAttribute(vb);if(k){var l,m=k.indexOf(wb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==xb){k=i.getAttribute(vb);if(k){try{d=eval(k)}catch(a){alert(yb+k+zb)}}}else if(j==Ab){k=i.getAttribute(vb);if(k){try{e=eval(k)}catch(a){alert(yb+k+Bb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;com_haulmont_cuba_web_toolkit_ui_WidgetSet.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Cb);if(b==-1){b=a.length}var c=a.indexOf(Db);if(c==-1){c=a.length}var d=a.lastIndexOf(Eb,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Fb);b.src=a+Gb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Hb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Ib)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Jb);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Kb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Lb]=function(){{var a=o.navigator.userAgent;if(a.indexOf(Mb)==-1&&a.indexOf(Nb)!=-1){return Ob}return Pb}};i[Lb]={'no':V,'yes':W};j[Qb]=function(){{var a=o.navigator.userAgent;if(a.indexOf(Mb)==-1&&a.indexOf(Nb)!=-1){return Ob}return Rb}};i[Qb]={'none':V,'yes':W};j[Sb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Tb)!=-1}())return Ub;if(function(){return a.indexOf(Vb)!=-1&&(b>=fb&&b<Wb)}())return Xb;if(function(){return a.indexOf(Vb)!=-1&&(b>=Yb&&b<Wb)}())return Zb;if(function(){return a.indexOf(Vb)!=-1&&(b>=$b&&b<Wb)}())return _b;if(function(){return a.indexOf(ac)!=-1||b>=Wb}())return bc;return Ub};i[Sb]={'gecko1_8':V,'ie10':W,'ie8':cc,'ie9':dc,'safari':ec};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};com_haulmont_cuba_web_toolkit_ui_WidgetSet.__computePropValue=k;o.__gwt_activeModules[S].bindings=com_haulmont_cuba_web_toolkit_ui_WidgetSet.__getPropMap;r(O,fc);if(q()){return D(gc)}var l;try{h([Pb,Rb,bc],hc);h([Pb,Ob,bc],hc+ic);h([Ob,Rb,Zb],hc+jc);h([Ob,Rb,Ub],hc+kc);h([Pb,Rb,Xb],hc+lc);h([Pb,Rb,_b],hc+mc);h([Pb,Rb,Zb],hc+nc);h([Pb,Rb,Ub],hc+oc);h([Ob,Rb,bc],hc+pc);h([Ob,Ob,bc],hc+qc);h([Ob,Rb,Xb],hc+rc);h([Ob,Rb,_b],hc+sc);l=f[k(Lb)][k(Qb)][k(Sb)];var m=l.indexOf(tc);if(m!=-1){g=parseInt(l.substring(m+W),fb);l=l.substring(V,m)}}catch(a){}com_haulmont_cuba_web_toolkit_ui_WidgetSet.__softPermutationId=g;return D(l+uc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=p.createElement(vc);b.setAttribute(wc,xc);b.setAttribute(yc,D(a));p.getElementsByTagName(pb)[V].appendChild(b);__gwt_stylesLoaded[a]=true}}
r(zc,P);c(Ac);c(Bc);r(zc,Cc)}
B();com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleBase=C();t[S].moduleBase=com_haulmont_cuba_web_toolkit_ui_WidgetSet.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==Dc||o.location.protocol==Ec);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=Fc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=Gc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(Hc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+Ic]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(pb)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,Cc);A(H);return true}
com_haulmont_cuba_web_toolkit_ui_WidgetSet.succeeded=com_haulmont_cuba_web_toolkit_ui_WidgetSet();