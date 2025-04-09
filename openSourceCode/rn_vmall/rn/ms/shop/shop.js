!(function(n){
var e=(function(){
// 函数
function n(n: any, e: any): any {
return n
}
// 函数
function e(n: any): any {
var e={

}
;
return n.forEach((function(n,t){
e[n]=!0
}
)),e
}
// 函数
function t(n: any, t: any, a: any): any {
if(n.formatValueCalls++,n.formatValueCalls>200)return"[TOO BIG formatValueCalls "+n.formatValueCalls+" exceeded limit of 200]";
// 变量
var f: any = r(n,t);
if(f)return f;
// 变量
var c: any = Object.keys(t),s=e(c);
if(d(t)&&(c.indexOf('message')>=0||c.indexOf('description')>=0))return o(t);
if(0===c.length){
if(v(t)){
// 变量
var g: any = t.name?': '+t.name:'';
return n.stylize('[Function'+g+']','special')
}
if(p(t))return n.stylize(RegExp.prototype.toString.call(t),'regexp');
if(y(t))return n.stylize(Date.prototype.toString.call(t),'date');
if(d(t))return o(t)
}
var h,b,m='',j=!1,O=['{
','
}
'];
(h=t,Array.isArray(h)&&(j=!0,O=['[',']']),v(t))&&(m=' [Function'+(t.name?': '+t.name:'')+']');
return p(t)&&(m=' '+RegExp.prototype.toString.call(t)),y(t)&&(m=' '+Date.prototype.toUTCString.call(t)),d(t)&&(m=' '+o(t)),0!==c.length||j&&0!=t.length?a<0?p(t)?n.stylize(RegExp.prototype.toString.call(t),'regexp'):n.stylize('[Object]','special'):(n.seen.push(t),b=j?i(n,t,a,s,c):c.map((function(e){
return l(n,t,a,s,e,j)
}
)),n.seen.pop(),u(b,m,O)):O[0]+m+O[1]
}
// 函数
function r(n: any, e: any): any {
if(s(e))return n.stylize('undefined','undefined');
if('string'==typeof e){
// 变量
var t: any = "'"+JSON.stringify(e).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";
return n.stylize(t,'string')
}
return c(e)?n.stylize(''+e,'number'):a(e)?n.stylize(''+e,'boolean'):f(e)?n.stylize('null','null'):void 0
}
// 函数
function o(n: any): any {
return'['+Error.prototype.toString.call(n)+']'
}
// 函数
function i(n: any, e: any, t: any, r: any, o: any): any {
for(var i=[],u=0,a=e.length;
u<a;
++u)b(e,String(u))?i.push(l(n,e,t,r,String(u),!0)):i.push('');
return o.forEach((function(o){
o.match(/^\d+$/)||i.push(l(n,e,t,r,o,!0))
}
)),i
}
// 函数
function l(n: any, e: any, r: any, o: any, i: any, l: any): any {
var u,a,c;
if((c=Object.getOwnPropertyDescriptor(e,i)||{
value:e[i]
}
).get?a=c.set?n.stylize('[Getter/Setter]','special'):n.stylize('[Getter]','special'):c.set&&(a=n.stylize('[Setter]','special')),b(o,i)||(u='['+i+']'),a||(n.seen.indexOf(c.value)<0?(a=f(r)?t(n,c.value,null):t(n,c.value,r-1)).indexOf('\n')>-1&&(a=l?a.split('\n').map((function(n){
return'  '+n
}
)).join('\n').substr(2):'\n'+a.split('\n').map((function(n){
return'   '+n
}
)).join('\n')):a=n.stylize('[Circular]','special')),s(u)){
if(l&&i.match(/^\d+$/))return a;
(u=JSON.stringify(''+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=n.stylize(u,'name')):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=n.stylize(u,'string'))
}
return u+': '+a
}
// 函数
function u(n: any, e: any, t: any): any {
return n.reduce((function(n,e){
return e.indexOf('\n')>=0&&0,n+e.replace(/\u001b\[\d\d?m/g,'').length+1
}
),0)>60?t[0]+(''===e?'':e+'\n ')+' '+n.join(',\n  ')+' '+t[1]:t[0]+e+' '+n.join(', ')+' '+t[1]
}
// 函数
function a(n: any): any {
return'boolean'==typeof n
}
// 函数
function f(n: any): any {
return null===n
}
// 函数
function c(n: any): any {
return'number'==typeof n
}
// 函数
function s(n: any): any {
return void 0===n
}
// 函数
function p(n: any): any {
return g(n)&&'[object RegExp]'===h(n)
}
// 函数
function g(n: any): any {
return'object'==typeof n&&null!==n
}
// 函数
function y(n: any): any {
return g(n)&&'[object Date]'===h(n)
}
// 函数
function d(n: any): any {
return g(n)&&('[object Error]'===h(n)||n instanceof Error)
}
// 函数
function v(n: any): any {
return'function'==typeof n
}
// 函数
function h(n: any): any {
return Object.prototype.toString.call(n)
}
// 函数
function b(n: any, e: any): any {
return Object.prototype.hasOwnProperty.call(n,e)
}
return function(e,r){
return t({
seen:[],formatValueCalls:0,stylize:n
}
,e,r.depth)
}

}
)(),t=0,r=1,o=2,i=3,l=[];
l[t]='debug',l[r]='log',l[o]='warning',l[i]='error';
// 函数
function u(t: any): any {
return function(){
var r;
r=1===arguments.length&&'string'==typeof arguments[0]?arguments[0]:Array.prototype.map.call(arguments,(function(n){
return e(n,{
depth:10
}
)
}
)).join(', ');
// 变量
var u: any = arguments[0],a=t;
'string'==typeof u&&'Warning: '===u.slice(0,9)&&a>=i&&(a=o),n.__inspectorLog&&n.__inspectorLog(l[a],r,[].slice.call(arguments),1),f.length&&(r=c('',r)),n.nativeLoggingHook(r,a)
}

}
// 函数
function a(n: any, e: any): any {
return Array.apply(null,Array(e)).map((function(){
return n
}
))
}
// 变量
var f: any = [];
// 函数
function c(n: any, e: any): any {
return f.join('')+n+' '+(e||'')
}
if(n.nativeLoggingHook){
n.console;
n.console={
error:u(i),info:u(r),log:u(r),warn:u(o),trace:u(t),debug:u(t),table:function(e){
if(!Array.isArray(e)){
// 变量
var t: any = e;
for(var o in e=[],t)if(t.hasOwnProperty(o)){
// 变量
var i: any = t[o];
i["(index)"]=o,e.push(i)
}

}
if(0!==e.length){
// 变量
var l: any = Object.keys(e[0]).sort(),u=[],f=[];
l.forEach((function(n,t){
f[t]=n.length;
for(var r=0;
r<e.length;
r++){
// 变量
var o: any = (e[r][n]||'?').toString();
u[r]=u[r]||[],u[r][t]=o,f[t]=Math.max(f[t],o.length)
}

}
));
for(var c=g(f.map((function(n){
return a('-',n).join('')
}
)),'-'),s=[g(l),c],p=0;
p<e.length;
p++)s.push(g(u[p]));
n.nativeLoggingHook('\n'+s.join('\n'),r)
}
else n.nativeLoggingHook('',r);
// 函数
function g(n: any, e: any): any {
var t=n.map((function(n,e){
return n+a(' ',f[e]-n.length).join('')
}
));
return e=e||' ',t.join(e+'|'+e)
}

}
,group:function(e){
n.nativeLoggingHook(c("\u2510",e),r),f.push("\u2502")
}
,groupEnd:function(){
f.pop(),n.nativeLoggingHook(c("\u2518"),r)
}
,groupCollapsed:function(e){
n.nativeLoggingHook(c("\u2518",e),r),f.push("\u2502")
}
,assert:function(e,t){
e||n.nativeLoggingHook('Assertion failed: '+t,i)
}

}
,Object.defineProperty(console,'_isPolyfilled',{
value:!0,enumerable:!1
}
)
}
else if(!n.console){
var s=function(){

}
,p=n.print||s;
n.console={
debug:p,error:p,info:p,log:p,trace:p,warn:p,assert:function(n,e){
n||p('Assertion failed: '+e)
}
,clear:s,dir:s,dirxml:s,group:s,groupCollapsed:s,groupEnd:s,profile:s,profileEnd:s,table:s
}
,Object.defineProperty(console,'_isPolyfilled',{
value:!0,enumerable:!1
}
)
}

}
)('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);

!(function(n){
var r=0,t=function(n,r){
throw n
}
,l={
setGlobalHandler:function(n){
t=n
}
,getGlobalHandler:function(){
return t
}
,reportError:function(n){
t&&t(n,!1)
}
,reportFatalError:function(n){
t&&t(n,!0)
}
,applyWithGuard:function(n,t,u,e,a){
try{
return r++,n.apply(t,u)
}
catch(n){
l.reportError(n)
}
finally{
r--
}
return null
}
,applyWithGuardIfNeeded:function(n,r,t){
return l.inGuard()?n.apply(r,t):(l.applyWithGuard(n,r,t),null)
}
,inGuard:function(){
return!!r
}
,guard:function(n,r,t){
var u;
if('function'!=typeof n)return null;
// 变量
var e: any = null!=(u=null!=r?r:n.name)?u:'<generated guard>';
return function(){
for(var r=arguments.length,u=new Array(r),a=0;
a<r;
a++)u[a]=arguments[a];
return l.applyWithGuard(n,null!=t?t:this,u,null,e)
}

}

}
;
n.ErrorUtils=l
}
)('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);

'undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window&&window,(function(){
'use strict';
// 变量
var e: any = Object.prototype.hasOwnProperty;
'function'!=typeof Object.entries&&(Object.entries=function(n){
if(null==n)throw new TypeError('Object.entries called on non-object');
// 变量
var o: any = [];
for(var t in n)e.call(n,t)&&o.push([t,n[t]]);
return o
}
),'function'!=typeof Object.values&&(Object.values=function(n){
if(null==n)throw new TypeError('Object.values called on non-object');
// 变量
var o: any = [];
for(var t in n)e.call(n,t)&&o.push(n[t]);
return o
}
)
}
)();

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]),n=r(d[1]),o=r(d[2]),s=t(r(d[3])),u=r(d[4]);
(0,n.configure)({
useProxies:'never'
}
),o.Text.defaultProps=Object.assign({

}
,o.Text.defaultProps,{
allowFontScaling:!1
}
),o.TextInput.defaultProps=Object.assign({

}
,o.TextInput.defaultProps,{
defaultProps:!1
}
),o.AppRegistry.registerComponent(u.SHOP.name,(function(){
return s.default
}
))
}
),"75fa714a720aebf8db05934fc1c96e526cdd3a0e1078bf2466e20190d390da4a",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","18410d735a08b9a7dbe46cf465c03e35e37c3fd266baca9de32f7b9d593b3b42","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = t(r(d[1])),o=t(r(d[2])),s=t(r(d[3])),n=t(r(d[4])),l=t(r(d[5])),u=t(r(d[6])),p=r(d[7]),h=r(d[8]),c=r(d[9]),f=r(d[10]),v=t(r(d[11])),S=r(d[12]),k=t(r(d[13])),y=r(d[14]),D=r(d[15]);
// 函数
function I(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(I=function(){
return!!t
}
)()
}
(0,h.setCustomText)();
var w=(function(t){
// 函数
function u(t: any): any {
var o,l,c,f;
return(0,e.default)(this,u),l=this,c=u,f=[t],c=(0,n.default)(c),o=(0,s.default)(l,I()?Reflect.construct(c,f||[],(0,n.default)(l).constructor):c.apply(l,f)),h.DeviceUtils.deviceStore(t),o.state={
updateEnv:!1,pageId:'',lang:'',defaultStyle:'default',DarkStyle:!1,width:p.Dimensions.get('window').width,i18next:null
}
,o._onLayout=o._onLayout.bind(o),(0,h.captureException)('shop'),k.default.reset(),h.ShopStore.resetFolow(),o
}
return(0,l.default)(u,t),(0,o.default)(u,[{
key:"componentDidMount",value:function(){
if('web'!==p.Platform.OS){
var t,e,o,s,n,l,u=this.props,c=u.apiEnv,f=u.darkConfigInfo,v=u.darkMode,S=u.appPackageName,k=this.props,D=k.tabname,I=k.tabindex;
I=Number(I),isNaN(I)&&(I=0),h.TabsTopStore.setTabNameIndex(D||'',I);
var w=c&&JSON.parse(c)||{

}
,P=(null==(t=this.props)?void 0:t.userAbTest)&&JSON.parse(this.props.userAbTest)||[];
P=null==(e=P)||null==(o=e.map((function(t){
return t.strategyId||''
}
)))?void 0:o.join(','),w.strategies=P||'';
// 变量
var N: any = null==(s=this.props)||null==(n=s.pageId)?void 0:n.toString();
this.darkDate=f&&('android'===p.Platform.OS?JSON.parse(JSON.parse(f)):JSON.parse(f))||{

}
,v&&JSON.parse(v)&&this.darkDate.darkMode&&'Y'===this.darkDate.darkMode?(this.setState({
defaultStyle:'huawei_dark',DarkStyle:!0
}
),h.DarkStore.setDarkBool(v)):(this.setState({
defaultStyle:'default',DarkStyle:!1
}
),h.DarkStore.setDarkBool(!1)),w.pageId=N,h.appIdStore.setApkPackageName(S),h.appIdStore.setIsPreload(this.props.isPreInstalledPackage),(0,h.envService)(w),(0,y.ImgArrayUpdata)(null==(l=this.props)?void 0:l.isPreInstalledPackage,w.cmsCdnPath),this.setState({
updateEnv:!0,pageId:N
}
)
}

}

}
,{
key:"componentWillUnmount",value:function(){
this.listenerNative&&this.listenerNative.remove()
}

}
,{
key:"_onLayout",value:function(t){
Math.floor(this.state.width)!==Math.floor(t.nativeEvent.layout.width)&&this.setState({
width:t.nativeEvent.layout.width
}
)
}

}
,{
key:"render",value:function(){
var t,e=this.props.RnPromptMsg,o=(0,h.getLanguage)(this.props),s=(0,f.handleI18nextNative)(e,o),n=h.PlatformUtils.isIOS()?!h.DarkStore.QMbool&&this.state.DarkStyle:this.props.darkMode&&'Y'===(null==(t=this.darkDate)?void 0:t.darkMode);
return h.DarkStore.setDarkBool(n),this.state.updateEnv&&s?(0,D.jsx)(h.Provider,{
theme:n?'huawei_dark':'default',width:this.state.width,children:(0,D.jsx)(S.Provider,{
store:h.AppStore,children:(0,D.jsxs)(D.Fragment,{
children:[(0,D.jsx)(c.I18nextProvider,{
i18n:s,children:(0,D.jsx)(v.default,Object.assign({

}
,this.props,{
pageId:this.props.pageId,pageAlias:this.props.pn,DarkStyle:n
}
))
}
),(0,D.jsx)(p.View,{
onLayout:this._onLayout
}
)]
}
)
}
)
}
):(0,D.jsx)(p.View,{
onLayout:this._onLayout
}
)
}

}
])
}
)(u.default.Component);
_e.default=w
}
),"18410d735a08b9a7dbe46cf465c03e35e37c3fd266baca9de32f7b9d593b3b42",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41","bb16bf2e4a3383c96b69077535dc96abdd0a92662cb2545d5c24a875a69b4a96","de194a8e1c2c01b4359fb8c45955f847e83e2c5be5da52ef9a219cd92c1e97a1","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var n: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.useI18next=e.handleI18nextNative=e.handleI18next=e.getResourcesAndLang=void 0;
var t=n(r(d[1])),u=n(r(d[2])),s=r(d[3]),l=n(r(d[4])),o=r(d[5]),f=e.getResourcesAndLang=function(n){
var t,u={

}
;
if(t=s.PlatformUtils.isApp()?(0,s.getLanguage)(n):s.env.defaultLang){
// 变量
var o: any = l.default.getModule();
u[t]={
translation:o.default
}

}
return{
lang:t,resources:u
}

}
;
e.handleI18nextNative=function(n,t){
if(t){
var u=l.default.getModule(),o={

}
;
return o[t]={
translation:u.default
}
,s.i18n.init(o,t,s.BussinessDomain.MS,n)
}
return null
}
,e.handleI18next=function(){
// 变量
var n: any = s.env.defaultLang;
if(n){
var t=l.default.getModule(),u={

}
;
return u[n]={
translation:t.default
}
,s.i18n.init(u,n,s.BussinessDomain.MS)
}
return null
}
,e.useI18next=function(n){
// 变量
var l: any = (0,o.useState)(),v=(0,u.default)(l,2),c=v[0],M=v[1],p=null==n?void 0:n.RnPromptMsg,x=f(n),I=x.lang,S=x.resources;
return(0,o.useEffect)((function(){
// 变量
var n: any = s.i18n.init.apply(s.i18n,(0,t.default)(s.PlatformUtils.isMp()?[S,I,void 0,s.BussinessDomain.MS]:p?[S,I,s.BussinessDomain.MS,p]:[S,I,s.BussinessDomain.MS]));
M(n)
}
),[p,I]),c
}

}
),"bb16bf2e4a3383c96b69077535dc96abdd0a92662cb2545d5c24a875a69b4a96",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","cc5f2b4289ed1f6f448a954d4a0509baa530c4619abf8715f5f45da12e35da83","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","3ca3dc182bd16698a12893e76de976edefdbadf2cb574648bc28fbfc2e603bf8","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),o=e(_r(d[4])),u=e(_r(d[5])),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = c(t);
if(n&&n.has(e))return n.get(e);
var r={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var u in e)if("default"!==u&&{

}
.hasOwnProperty.call(e,u)){
// 变量
var i: any = o?Object.getOwnPropertyDescriptor(e,u):null;
i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[6])),a=_r(d[7]),l=_r(d[8]),f=e(_r(d[9])),s=_r(d[10]);
// 函数
function c(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(c=function(e){
return e?n:t
}
)(e)
}
// 函数
function p(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(p=function(){
return!!e
}
)()
}
var v='shopDefault',w={

}
,h=0,y=function(){
return'web'===a.Platform.OS
}
;
y()&&(l.UrlUtils.getQueryStr('targetRoute')?(w=l.UrlUtils.getQueryStrAll()).targetRoute&&(v=w.targetRoute):v='shopDefault',h=window.screen.width);
var O=(function(e){
// 函数
function i(e: any): any {
var n,u,a,f;
if((0,t.default)(this,i),u=this,a=i,f=[e],a=(0,o.default)(a),n=(0,r.default)(u,p()?Reflect.construct(a,f||[],(0,o.default)(u).constructor):a.apply(u,f)),l.PlatformUtils.isApp()){
// 变量
var s: Function = null==e?void 0:e.targetRoute;
v=s||'shopDefault'
}
return n
}
return(0,u.default)(i,e),(0,n.default)(i,[{
key:"componentDidMount",value:function(){
y()&&l.PlatformUtils.isWap(a.Dimensions.get('window').width)&&(this.resizeListener=window.addEventListener('resize',(function(){
Math.abs(window.screen.width-h)>200&&window.location.reload()
}
)))
}

}
,{
key:"componentWillUnmount",value:function(){
v='shopDefault',y()&&this.resizeListener&&window.removeEventListener('resize',(function(){

}
))
}

}
,{
key:"render",value:function(){
return(0,s.jsx)(f.default,Object.assign({
defaultRoute:v,shopParams:w
}
,this.props))
}

}
])
}
)(i.Component);
_e.default=O
}
),"de194a8e1c2c01b4359fb8c45955f847e83e2c5be5da52ef9a219cd92c1e97a1",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","a690f5197e72a31fbd0bb5efda438d186f8c1249a32bd399acf07d3a39227cc6","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),a=e(_r(d[4])),o=e(_r(d[5])),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = O(t);
if(n&&n.has(e))return n.get(e);
var r={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var i: any = a?Object.getOwnPropertyDescriptor(e,o):null;
i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[6])),s=_r(d[7]),u=_r(d[8]),c=_r(d[9]),l=e(_r(d[10])),f=e(_r(d[11])),h=e(_r(d[12])),p=e(_r(d[13])),j=e(_r(d[14])),S=e(_r(d[15])),v=_r(d[16]),_=_r(d[17]);
// 函数
function O(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(O=function(e){
return e?n:t
}
)(e)
}
// 函数
function b(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(b=function(){
return!!e
}
)()
}
var x=(function(e){
// 函数
function i(e: any): any {
var n,o,s,u;
return(0,t.default)(this,i),o=this,s=i,u=[e],s=(0,a.default)(s),(n=(0,r.default)(o,b()?Reflect.construct(s,u||[],(0,a.default)(o).constructor):s.apply(o,u))).state={

}
,n
}
return(0,o.default)(i,e),(0,n.default)(i,[{
key:"render",value:function(){
var e=this.props,t=(0,u.createStackNavigator)(),n=this.props.defaultRoute||'ShopDefault',r=Object.assign({

}
,c.DefaultTheme,{
colors:Object.assign({

}
,c.DefaultTheme.colors,{
background:'transparent'
}
)
}
);
return(0,_.jsx)(c.NavigationContainer,{
theme:r,children:(0,_.jsxs)(t.Navigator,{
initialRouteName:n,detachInactiveScreens:!v.PlatformUtils.isApp(),children:[(0,_.jsx)(t.Screen,{
name:"ShopDefault",options:{
headerShown:!1,title:(0,v.t)('shop_home')
}
,children:function(t){
return s.Platform.OS,(0,_.jsx)(l.default,Object.assign({

}
,t,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"shopResultPage",options:{
headerShown:!1,title:(0,v.t)('search_result_page')
}
,children:function(t){
return s.Platform.OS,(0,_.jsx)(l.default,Object.assign({

}
,t,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"shopFollow",options:{
headerShown:!1,title:(0,v.t)('shop_watchlist')
}
,children:function(){
return(0,_.jsx)(f.default,Object.assign({

}
,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"SearchPage",options:{
headerShown:!1,title:(0,v.t)('search_page')
}
,children:function(t){
return(0,_.jsx)(h.default,Object.assign({

}
,t,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"ShopInfo",options:{
headerShown:!1,title:(0,v.t)('shop_info_page')
}
,children:function(t){
return(0,_.jsx)(p.default,Object.assign({

}
,t,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"ShopBrand",options:{
headerShown:!1,title:(0,v.t)('brand_video_page')
}
,children:function(t){
return(0,_.jsx)(j.default,Object.assign({

}
,t,e))
}

}
),(0,_.jsx)(t.Screen,{
name:"FavoritesPrds",options:{
headerShown:!1,title:(0,v.t)('favorite_products_record')
}
,children:function(t){
return(0,_.jsx)(S.default,Object.assign({

}
,t,e))
}

}
)]
}
)
}
)
}

}
])
}
)(i.Component);
_e.default=x
}
),"a690f5197e72a31fbd0bb5efda438d186f8c1249a32bd399acf07d3a39227cc6",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","b59f5741143d747a6b7458314d550fc2033674c2475d4bcae93d5c5db8ca365c","58acbb2a11d12e39fd248a1b96db102c400867b55536474cd5eb8b47fc1caf0e","7927a993b87ae53f6dde9af6eea78f8762cec2fd49fdea682ef0c9dd6fd162a0","bee67c5c8d0aa9de358424ebf9c433d3d13ec3a4830e039155bba744b818ab86","9b5592a50094674b2891b96412c72bd19173af335e0cf03cb727d031d985911f","db1f04441986657eeeb1fd4d0112294a69281e97af9cdfa6f7d23a1d482a90a0","90e4b15747084d342ca95d5c5cc122f5d56127ece3ac0f2c8def5b2b7d891859","98e1819f6d679d435e1705727cbda21d9ebb17a91aad8e09381e0ab5f29fa3a8","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,a=e(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),o=e(_r(d[4])),i=e(_r(d[5])),s=e(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var a: any = O(t);
if(a&&a.has(e))return a.get(e);
var n={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var i: any = r?Object.getOwnPropertyDescriptor(e,o):null;
i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]
}
return n.default=e,a&&a.set(e,n),n
}
)(_r(d[7])),c=_r(d[8]),p=_r(d[9]),u=e(_r(d[10])),h=_r(d[11]),v=_r(d[12]),f=e(_r(d[13])),y=e(_r(d[14])),S=e(_r(d[15])),T=_r(d[16]),C=_r(d[17]),P=e(_r(d[18])),E=e(_r(d[19])),I=e(_r(d[20])),L=_r(d[21]),b=e(_r(d[22])),_=_r(d[23]),R=e(_r(d[24])),w=_r(d[25]),A=_r(d[26]);
// 函数
function O(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,a=new WeakMap;
return(O=function(e){
return e?a:t
}
)(e)
}
// 函数
function k(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(k=function(){
return!!e
}
)()
}
var D=0,B=0;
c.DeviceUtils.getStatusBarHeight().then((function(e){
D=e
}
)).catch((function(){

}
)),'ios'===v.Platform.OS&&c.DeviceUtils.getSafeAreaBottomHeight().then((function(e){
B=e
}
));
var U=(0,h.observer)(t=(function(e){
// 函数
function t(e: any): any {
var r,s,h,b;
if((0,n.default)(this,t),s=this,h=t,b=[e],h=(0,i.default)(h),(r=(0,o.default)(s,k()?Reflect.construct(h,b||[],(0,i.default)(s).constructor):h.apply(s,b))).tabs=[],r.tabConfig='',r.cardId='',r.headStyle={

}
,r.titleStyle={

}
,r.strategyIdList='',r.scrollViewStartOffsetY=0,r.pageType=1,r.convertResult={

}
,r.currentTime=(new Date).getTime(),r.otherParams={

}
,r.scrollViewKey=1,r.enableAdvancedFeature=-1,r.calendarAuthLinstener=null,r.switchTabLinstener=null,r.isPersonal=!0,r.currentPageId='',r.pageListener=new c.Listener('MS-SHOP'),r.isFocus=!0,r.pageCatCode='',r.pageCatName='',r.refreshControl=null,r.e2eId={

}
,r.scroller=(0,l.createRef)(),r.handleAppShowPageChange=function(e){
var t;
'page'===(null==e?void 0:e.service)&&'pageLeave'===(null==e?void 0:e.action)&&r.props.uniqueId===(null==e||null==(t=e.param)?void 0:t.uniqueId)&&''!==String(e.param.isLeave)&&(r.isFocus=e.param.isLeave,r.pageListener.triggerEvent('pageShow',{
isPageShow:r.isFocus
}
),r.isFocus?c.CommonUtils.storeE2eId(c.PAGE_TYPE_E2EID.shop,!1,{
e2eId:r.e2eId
}
):c.CommonUtils.storeE2eId(c.PAGE_TYPE_E2EID.shop,!1))
}
,r.initStrategy=function(e,t){
var a=(e?JSON.parse(e):{

}
).showBox,n=void 0===a?'1':a;
c.PlatformUtils.isAndroid()&&'1'===String(n)&&!t&&c.RnBridge.invokeVmallNative('common','setCurrentPrdId',{
pageId:c.Service.pageId,from:'shop'
}
)
}
,r.openStrategyPopup=(function(){
var e=(0,a.default)((function*(e,t){
if(e===w.POP_TEMPLATE.car){
// 变量
var a: any = yield(0,_.getAdvancedFeature)();
'0'!==String(a)&&r.setState({
strategyActivityCode:t
}
)
}
[w.POP_TEMPLATE.coupon,w.POP_TEMPLATE.message,w.POP_TEMPLATE.media,w.POP_TEMPLATE.media3d,w.POP_TEMPLATE.point,w.POP_TEMPLATE.hoverImage,w.POP_TEMPLATE.hoverNPS].includes(e)&&c.RnBridge.invokeVmallNative('common','popStrategyDialog',{
popParams:{
activityCode:t,pageId:c.Service.pageId,from:'shop'
}

}
)
}
));
return function(t,a){
return e.apply(this,arguments)
}

}
)(),r.handleStrategy=function(e){
var t,a;
if((null==e||null==(t=e.param)?void 0:t.pageId)===c.Service.pageId){
var n=(null==e||null==(a=e.param)?void 0:a.popStrategies)&&JSON.parse(e.param.popStrategies)||{

}
,o=n.activityCode,i=void 0===o?'':o,s=n.template,l=void 0===s?'':s,p=n.strategyContent,h=n.strategyContent,v=(h=void 0===h?{
strategies:[]
}
:h).strategies;
'popStrategies'===(null==e?void 0:e.action)&&'RnProductDetail'===(null==e?void 0:e.service)&&i&&(u.default.isEmpty(p)?r.openStrategyPopup(l,i):v.forEach((function(e){
'event_rule'===e.type&&(r.timer=setTimeout((function(){
r.openStrategyPopup(l,i)
}
),1e3*e.timeSeconds))
}
))),r.strategyListener&&r.strategyListener.remove()
}

}
,r.handleAppStateChange=function(e){
c.RecordUtils.immediateOutputLog(e)
}
,r.onPressBack=function(){
if(r.eventTracingReportByLeave(),r.state.pageAlias){
// 变量
var e: any = r.props.navigation,t=e.canGoBack,a=e.goBack;
t&&t()&&a()
}
else c.DeviceUtils.goBack();
return!0
}
,r.eventTracingReportByLoad=function(e){
// 变量
var t: any = r.state,a=t.carrierCode,n=t.currentTab;
if(a&&c.Service.pageId){
// 变量
var o: any = '';
if(e||r.props.pn)o='100660011';
else{
// 变量
var i: any = n||r.props.tab||'index';
o=C.appReloadTab2EventType[i]
}
c.EventTracking.eventTracingReport({
actionCode:o,actionName:C.appReloadEventType2Name[o],eventType:c.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:c.Service.pageId,content:{
load:'1',CarrierCode:a
}
,pageCatCode:r.pageCatCode,pageCatName:r.pageCatName
}
),c.EventTracking.execReportData('',!0)
}

}
,r.eventTracingReportByLeave=function(){
// 变量
var e: any = r.state,t=e.carrierCode,a=e.pageAlias,n=e.currentTab,o='';
o=a||r.props.pn?'100660017':C.appLeaveTab2EventType[n],c.EventTracking.eventTracingReport({
actionCode:o,actionName:C.appLeaveEventType2Name[o],eventType:c.EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:c.Service.pageId,content:{
load:'1',CarrierCode:t
}
,pageCatName:r.pageCatName,pageCatCode:r.pageCatCode
}
),c.EventTracking.execReportData('',!0)
}
,r.onBackTop=function(){
// 变量
var e: any = r.scroller.current;
c.PlatformUtils.isIOS()?setTimeout((function(){
e&&e.scrollTo({
y:0,animated:!0
}
)
}
),0):e&&e.scrollTo({
y:0,animated:!0
}
)
}
,r.handleTitleStyle=function(e,t,a){
var n;
r.titleStyle={
cardId:e,styleChange:t?JSON.parse(t):'',groupStyleChanges:a?JSON.parse(a):''
}
,r.titleStyle.styleChange?c.SubTabsStore.onSubTabsUpdate(r.titleStyle.styleChange):null!=(n=r.titleStyle.groupStyleChanges)&&n.forEach&&r.titleStyle.groupStyleChanges.forEach((function(t){
var a;
null!=t&&null!=(a=t.cardIds)&&a.includes(String(e))&&(r.titleStyle.styleChange=t.styleChange,c.SubTabsStore.onSubTabsUpdate(t.styleChange))
}
))
}
,r.updateCmsData=function(){
var e,t,a,n,o,i,s=r.state.cmsData;
if(null!=s&&null!=(e=s.pageInfos)&&e.length){
var l,h,v,f,y,S,T,C,P=null==s?void 0:s.pageInfos[0],E=P.pageId,I=P.styleChange,L=P.groupStyleChanges;
r.handleTitleStyle(E,I,L),r.tabs=(null==s||null==(l=s.pageInfos[0])?void 0:l.tabInfos)||[],r.tabConfig=(null==s||null==(h=s.pageInfos[0])||null==(v=h.cards)?void 0:v.length)&&(null==s||null==(f=s.pageInfos[0])||null==(y=f.cards)?void 0:y.map((function(e){
if('sub_tab'===e.cardType)return r.cardId=e.cardId,e.configInfo
}
))),r.headStyle=r.state.cmsData.pageInfos[0].headerStyle?JSON.parse(r.state.cmsData.pageInfos[0].headerStyle):{

}
,r.pageType=null==(S=s.pageInfos[0])?void 0:S.pageType,r.otherParams.hasTabTop=(null==(T=r.tabs)?void 0:T.length)>1,r.otherParams.hasTitle=!(null==(C=r.headStyle)||!C.headStyle)
}
r.convertResult=(0,p.JsonConvert)(null==s?void 0:s.pageInfos[0],c.PAGE_TYPE.shop,void 0,!0,r.otherParams,'','',u.default.get(r.props.route,'params.keyWord'),r.props.searchId),(0,_.handlePopupLevel)(null!=(t=null==(a=r.convertResult)?void 0:a.children)?t:[]);
// 变量
var b: string = '';
null==s||null==(n=s.pageInfos[0])||null==(o=n.cards)||o.map((function(e){
'category'===e.cardType&&(b=e.cardId)
}
)),r.setState({
categoryCardId:b,category:null==(i=r.convertResult)?void 0:i.categoryList,tabLoading:!1
}
),r.closeLoading()
}
,r.apkNewData=function(e){
var t,a;
r.setState({
cmsData:e,configInfo:(null==e||null==(t=e.pageInfos)?void 0:t.length)&&(null!=e&&e.pageInfos[0].headerStyle?JSON.stringify(null==(a=JSON.parse(null==e?void 0:e.pageInfos[0].headerStyle))?void 0:a.attribute):{

}
)
}
,r.updateCmsData);
// 变量
var n: any = null==e?void 0:e.pageInfos[0].channel;
c.appIdStore.getAppId(n)
}
,r._getAndroidPageInfo=function(e){
if(!r.state.pageId&&!r.state.carrierCode)return Promise.reject();
// 变量
var t: any = r.state,a=t.pageId,n=t.carrierCode,o=t.pageAlias;
(r.props.pn||o)&&(a='',n='',o='shopSearchPage');
var i=new Promise((function(e){
e((0,L.getPageInfoListAsyncOfCMSForApk)(n,'3',a,o))
}
));
return c.CommonUtils.racePromise(i,1e4).then((function(t){
var a,n,i=(null==(a=t=c.DataHandleUtils.initCardsList(t,'app'))?void 0:a.pageInfos[0])||{

}
,s=i.pageCatCode,l=void 0===s?'':s,p=i.pageCatName,u=void 0===p?'':p,h=i.pageParam;
return r.pageCatCode=l,r.pageCatName=u,c.Service.pageId=String(t.pageInfos[0].pageId),c.Service.appid=t.pageInfos[0].channel,r.initStrategy(h,e),r.otherParams.carrierCode=r.state.carrierCode,r.otherParams.topSpuList=r.state.topSpuList,r.otherParams.pageAlias=o,r.eventTracingReportByLoad(),r.apkNewData(t),c.DataHandleUtils.oneTimeCallPageDataSource(null==(n=t)?void 0:n.pageInfos),Promise.resolve()
}
)).catch((function(t){
var a;
r.eventTracingReportByLoad(),r.closeLoading(),!e&&null!=t&&null!=(a=t.message)&&a.includes('Network Error')&&r.setState({
errorType:c.ERROR_TYPE.NETWORK_ERROR,error:!0
}
)
}
))
}
,r._potalCode=function(){
return'web'===v.Platform.OS?c.PlatformUtils.isWap(r.state.width)?'2':'1':c.PlatformUtils.isApp()?'3':'4'
}
,r.getCurrentPageId=function(e){
if('service'===e.cardTitle){
var t,a=r.state.shopInfo;
if(null!=(t=a.shopBaseInfoVo)&&t.customerServiceSystemUrl)return{
currentPageId:'',url:a.shopBaseInfoVo.customerServiceSystemUrl
}

}
// 变量
var n: any = '',o='',i=e.configInfo&&JSON.parse(e.configInfo);
switch(r._potalCode()){
case'1':r.haveScShop(i.webUrl)?n=c.UrlUtils.getQueryStrAll(i.webUrl.split('?')[1]).pageId:o=i.webUrl;
break;
case'2':r.haveScShop(i.wapUrl)?n=c.UrlUtils.getQueryStrAll(i.wapUrl.split('?')[1]).pageId:o=i.wapUrl;
break;
case'3':r.haveScShop(i.appUrl)?n=c.UrlUtils.getQueryStrAll(i.appUrl.split('?')[1]).pageId:o=i.appUrl
}
return{
currentPageId:n,url:o
}

}
,r.handleGetCmsPage=function(){
// 变量
var e: any = r.state,t=e.couponPageInfo.isShowCouponPage,a=e.pageAlias;
t&&!a||r._getPageInfo()
}
,r.dataProcess=function(e){
var t;
if(null!=e&&null!=(t=e.pageInfos)&&t.length){
c.Service.pageId=String(e.pageInfos[0].pageId),c.Service.appid=e.pageInfos[0].channel;
if([21,22,23].indexOf(e.pageInfos[0].pageType)>-1){
// 变量
var a: any = e.pageInfos[0].cards[0];
if('bottomNav'===a.cardType){
var n,o,i=a.configInfo&&JSON.parse(a.configInfo),s=null!=(n=null==i||null==(o=i.cards)?void 0:o.filter((function(e){
return Boolean(e)&&!u.default.isEmpty(e)
}
)))?n:[];
if((null==s?void 0:s.length)>0){
// 变量
var l: any = s,p=null,h=r.state.tab;
if(h){
var v=l.filter((function(e){
return e.cardTitle===h
}
));
p=v.length>0?v[0]:l[0]
}
else p=l[0];
var f,y=r.getCurrentPageId(p);
if(y.currentPageId)r.setState({
tabList:l,currentTab:h||l[0].cardTitle,pageId:y.currentPageId,tabPageId:String(e.pageInfos[0].pageId),shopInfo:(null==(f=e.pageInfos[0].pageData)?void 0:f.shopInfo)||{

}

}
,(function(){
r.handleGetCmsPage()
}
));
else c.RouterUtils.gotoPage(y.url)
}

}

}
else r.handleGetCmsPage()
}
else r.setState({
errorType:c.ERROR_TYPE.OTHER_ERROR,error:!0,loading:!1,isRefreshing:!1
}
)
}
,r._onMomentumScrollEnd=function(e){
v.DeviceEventEmitter.emit('onScrollEvent',e,'shop')
}
,r._onScrollBeginDrag=function(e){
v.DeviceEventEmitter.emit('onScrollBeginDragEvent',e,c.PAGE_TYPE.shop),r.scrollViewStartOffsetY=e.nativeEvent.contentOffset.y
}
,r._scrollEvent=function(){
v.Animated.event([{
nativeEvent:{
contentOffset:{
y:r.state.scrollY
}

}

}
],{
useNativeDriver:!0,listener:function(e){
v.DeviceEventEmitter.emit('onOutScrollViewScroll',e.nativeEvent.contentOffset.y,c.PAGE_TYPE.shop),'ios'===v.Platform.OS&&(r.timer&&clearTimeout(r.timer),r.timer=setTimeout((function(){
v.DeviceEventEmitter.emit('iosForOnScrollEvent',e,c.PAGE_TYPE.shop)
}
),1e3))
}

}
)
}
,r._onLayout=function(e){
var t,a,n,o;
(0,c.onLayout)(e),(0,c.layout)(e,c.PAGE_TYPE.shop),r.setState({
height:null==(t=e.nativeEvent)||null==(a=t.layout)?void 0:a.height,width:null==(n=e.nativeEvent)||null==(o=n.layout)?void 0:o.width
}
)
}
,r.goHome=function(){
c.RouterUtils.gotoPage('/',!0)
}
,r.goCustomerService=function(){
// 变量
var e: any = r.state.carrierCode;
(0,L.queryConsumerServiceInfo)({
carrierCode:e
}
).then((function(){
var t=(0,a.default)((function*(t){
if(null!=t&&t.success){
var a=(null==t?void 0:t.consumerConfigInfo)||{

}
,n=a.serviceType,r=a.serviceUrl;
if(r){
// 变量
var o: any = r+"&seCode="+e;
'1'===n&&(o+="&from=10"),c.RouterUtils.gotoPage(o)
}

}

}
));
return function(e){
return t.apply(this,arguments)
}

}
)())
}
,r.switchTab=function(e){
I.default.resetLayoutType(),I.default.setData(C.SHOP_TAB_KEY,e);
var t=r.state.tabList.filter((function(t){
return t.cardTitle===e
}
)),a=t.length>0?r.getCurrentPageId(t[0]):r.getCurrentPageId(r.state.tabList[0]);
if(a.currentPageId)r.eventTracingReportByLeave(),r.setState({
currentTab:e,pageId:a.currentPageId,scrollY:new v.Animated.Value(0),tabLoading:!0
}
,(function(){
r._getPageInfo(),r.onBackTop(),r.bottomNavEventClickByLoad(t,a.currentPageId)
}
));
else{
if(r.bottomNavEventClickByLoad(t,'',a.url),'service'===e)return r.eventTracingReportByLeave(),r.goCustomerService();
a.url&&r.eventTracingReportByLeave(),c.RouterUtils.gotoPage(a.url)
}

}
,r._refreshControl=function(e){
return'index'!==r.state.currentTab?null:'ios'===v.Platform.OS?(0,A.jsx)(v.RefreshControl,{
refreshing:r.state.isRefreshing,tintColor:e.C31.color,onRefresh:r._onRefresh
}
):(0,A.jsx)(p.LottieRefreshControl,{
ref:function(e){
return r.refreshControl=e
}
,onRefresh:r._onRefresh,primaryColor:e.C32.color,darkStyle:r.props.DarkStyle
}
)
}
,r._handleWindowHeight=function(){
return{
windowHeight:r.state.height-192-D-B
}

}
,r._pageBody=function(e){
var t,a,n,o,i,s=e.displayCouponPage,u=e.indexLoading,h=e.windowHeight,f=e.styles,y=e.viewStyle,C=e.theme,P=e.headStyle,E=r.state,I=E.couponPageInfo.batchCode,L=E.carrierCode;
return(0,A.jsxs)(A.Fragment,{
children:[!s&&(0,A.jsx)(v.View,{
style:[{
marginTop:56,marginBottom:12
}
,(!(null!=(t=r.state.category)&&t.length)||u)&&{
flex:1
}
],children:u?(0,A.jsx)(p.PlaceHolder,{

}
):(0,A.jsx)(v.Animated.ScrollView,{
ref:r.scroller,style:[f.commonStyle,y],onScroll:r._scrollEvent,scrollEventThrottle:1,showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,overScrollMode:'never',onScrollBeginDrag:r._onScrollBeginDrag,onMomentumScrollEnd:r._onMomentumScrollEnd,removeClippedSubviews:!0,scrollEnabled:!((null==(a=r.state.category)?void 0:a.length)>0),refreshControl:r._refreshControl(C),children:(0,A.jsx)(v.View,{
style:[{
marginBottom:56
}
,(null==(n=r.state.category)?void 0:n.length)&&{
marginBottom:0
}
],children:(0,l.createElement)(c.DynamicComponent,Object.assign({

}
,r.convertResult,{
navigation:r.props.navigation,mapComponents:T.MapComponents,stickyScrollY:r.state.scrollY,scroller:r.state.scroller,key:r.state.currentTabIndex||r.scrollViewKey
}
))
}
)
}
)
}
),(null==(o=r.state.category)?void 0:o.length)>0&&!u?(0,A.jsxs)(v.View,{
style:{
flex:1
}
,children:[(0,A.jsx)(p.CategoryMain,{
pageId:r.props.pageId||r.state.pageId,isHaveTitle:null==P?void 0:P.headStyle,cardId:r.state.categoryCardId,isShop:!0,categoryInfo:r.state.category,rightData:null==(i=r.props)?void 0:i.rightData,pageCatCode:r.pageCatCode,pageCatName:r.pageCatName,height:h,width:r.state.width,paddingTop:0
}
),(0,A.jsx)(v.View,{
style:{
height:56
}

}
)]
}
):null,s?(0,A.jsxs)(v.Animated.ScrollView,{
style:{
flex:1,marginTop:56
}
,onMomentumScrollEnd:r._onMomentumScrollEnd,children:[(0,A.jsx)(S.default,{
batchCode:I,carrierCode:L
}
),(0,A.jsx)(v.View,{
style:{
height:56
}

}
)]
}
):null]
}
)
}
,r._loadPage=function(e,t,a){
var n,o,i,s,l,h,S,T=r.state,C=T.couponPageInfo.isShowCouponPage,I=T.pageAlias,L=T.strategyActivityCode,b=a?(null==(n=r.props)||null==(o=n.mineData)||null==(i=o.pageInfos)?void 0:i.length)&&JSON.parse(null==(s=r.props)||null==(l=s.mineData)||null==(h=l.pageInfos[0])?void 0:h.headerStyle):r.headStyle,_=(0,c.ScreenSize)(r.props.width),w=r.state,O=w.tabLoading,k=w.currentTab,U=w.cmsData,N={
backgroundColor:t.C32.color
}
;
!u.default.isEmpty(r.convertResult.pageStyleChange)&&'1'===r.convertResult.pageStyleChange.bgFill&&r.convertResult.pageStyleChange.bgColor&&(N.backgroundColor=r.convertResult.pageStyleChange.bgColor);
var x=C&&!I&&'product'===k,j=(null==U||null==(S=U.pageInfos)?void 0:S.length)>0&&30===U.pageInfos[0].pageType||C&&'product'===k||I,Y=O&&'index'===k,V=(r._handleWindowHeight()||{

}
).windowHeight;
return(0,A.jsx)(v.SafeAreaView,{
onLayout:r._onLayout,children:(0,A.jsxs)(v.View,{
style:[{
marginTop:c.PlatformUtils.isAndroid()?D:0
}
,N],children:[(0,A.jsx)(E.default,Object.assign({

}
,r.props,{
isPrdList:j,shopInfo:r.state.shopInfo,pageId:r.props.pageId||r.state.pageId,carrierCode:r.state.carrierCode,pageTypeNum:r.pageType
}
)),(0,A.jsxs)(v.View,{
style:{
height:'100%'
}
,children:[r._pageBody({
displayCouponPage:x,indexLoading:Y,windowHeight:V,styles:e,viewStyle:N,theme:t,headStyle:b
}
),(0,A.jsxs)(v.Animated.View,{
pointerEvents:"box-none",style:{
position:'absolute',top:0,left:0
}
,children:[(0,A.jsx)(f.default,Object.assign({

}
,r.convertResult,{
randomId:c.CommonUtils.randomString()
}
)),(0,A.jsx)(y.default,Object.assign({

}
,r.convertResult,{
carrierCode:r.state.carrierCode,randomId:c.CommonUtils.randomString()
}
)),(0,A.jsx)(p.FixedButton,Object.assign({

}
,(0,p.JsonConvert)(r.state.cmsData.pageInfos[0],c.PAGE_TYPE.shop),{
fixedButton:!1,pageType:c.PAGE_TYPE.shop,pageId:r.state.pageId
}
))]
}
),(0,A.jsx)(v.Animated.View,{
style:{
position:'absolute',bottom:80+B,right:16,width:50,height:50
}
,children:(0,A.jsx)(p.FixedButton,Object.assign({

}
,(0,p.JsonConvert)(r.state.cmsData.pageInfos[0],c.PAGE_TYPE.shop),{
fixedButton:!0,onBackTop:r.onBackTop,pageType:c.PAGE_TYPE.shop,pageId:r.state.pageId
}
))
}
),'large'!==_&&0!==r.state.tabList.length?(0,A.jsx)(P.default,{
tabInfos:r.state.tabList,currentTab:r.state.currentTab,currentPageId:r.state.pageId,switchTab:r.switchTab,pageType:c.PAGE_TYPE.shop
}
):null,c.PlatformUtils.isAndroid()&&L?(0,A.jsx)(R.default,{
pageId:r.state.pageId,pageType:c.PAGE_TYPE.shop,pageCatCode:r.pageCatCode,pageCatName:r.pageCatName,activityCode:L,keyboardVerticalOffset:D
}
):null,(0,A.jsx)(p.Toast,{
pageType:c.PAGE_TYPE.shop
}
)]
}
)]
}
)
}
)
}
,r.state={
scrollY:new v.Animated.Value(0),pageId:e.pageId||'',cmsData:{
pageInfos:[]
}
,loading:!0,isRefreshing:!1,error:!1,configInfo:'',currentTabIndex:0,errorType:c.ERROR_TYPE.OTHER_ERROR,groupStyleChanges:'',styleChange:'',templateContent:'',width:c.CommonUtils.getWindowSize('shop').screenWidth,height:v.Dimensions.get('window').height,mergeStyle:null,previewDataSource:c.DataHandleUtils.initCardsList(r.props.mineData,'app'),isPrdList:!1,carrierCode:e.carrierCode,topSpuList:e.topSpuList||'',tabList:[],currentTab:'',tabPageId:'',tab:e.tab||I.default.getData(C.SHOP_TAB_KEY),shopInfo:{

}
,category:[],categoryCardId:'',pageAlias:u.default.get(r.props.route,'params.pageAlias'),tabLoading:!1,couponPageInfo:{
isShowCouponPage:'true'===String(e.showCouponPage),batchCode:e.batchCode
}
,strategyActivityCode:''
}
,c.CommonUtils.storeE2eId(c.PAGE_TYPE_E2EID.shop,!0),r.e2eId=c.E2EIdStore.pageTypeE2EIdSpanId[c.E2EIdStore.curPageType].e2eId,r.tabindex=Number(e.tabindex),r.tabname=e.tabname,r.otherParams.tabindex=r.tabindex,r.otherParams.tabname=r.tabname,r.props.abTest){
// 变量
var O: any = JSON.parse(r.props.abTest);
O instanceof Array&&r.setAbData(O)
}
return r._onRefresh=r._onRefresh.bind(r),r._scrollEvent=r._scrollEvent.bind(r),r.timeBegin=Date.now(),c.RecordUtils.printLongLog(r.timeBegin+'timeBegin'),r.getSwitchConfig(),r
}
return(0,s.default)(t,e),(0,r.default)(t,[{
key:"getSwitchConfig",value:function(){
void 0===c.configStore.couponUseConfig&&c.CommonUtils.getConfigByKey('is_open_rn_coupon_use',!0).then((function(e){
'boolean'==typeof e&&c.configStore.setCouponUseEnable(e)
}
))
}

}
,{
key:"componentDidMount",value:(O=(0,a.default)((function*(){
var e,t,a,n,r=this;
c.RecordUtils.logger("Shop",'componentDidMount'),this._isLogin(),this._getTabInfo(),c.TimeUtils.updateSystemTime(),this.listerBack=v.BackHandler.addEventListener('hardwareBackPress',this.onPressBack),this.appStateListener=v.DeviceEventEmitter.addListener('NativeCallAction',this.handleAppShowPageChange),this.navListener1=null==(e=this.props)||null==(t=e.navigation)?void 0:t.addListener('blur',(function(){
r.pageListener.triggerEvent('pageShow',{
isPageShow:!1
}
),r.eventTracingReportByLeave()
}
)),this.navListener=null==(a=this.props)||null==(n=a.navigation)?void 0:n.addListener('focus',(function(){
c.CommonUtils.storeE2eId(c.PAGE_TYPE_E2EID.shop,!1,{
e2eId:r.e2eId
}
),r.pageListener.triggerEvent('pageShow',{
isPageShow:!0
}
),r.eventTracingReportByLoad()
}
)),this.listerShopBack=v.DeviceEventEmitter.addListener('shopBack',(function(){
r.eventTracingReportByLeave()
}
)),c.PlatformUtils.isAndroid()&&(this.strategyListener=v.DeviceEventEmitter.addListener('NativeCallAction',this.handleStrategy)),this.changeListener=v.AppState.addEventListener('change',this.handleAppStateChange)
}
)),function(){
return O.apply(this,arguments)
}
)
}
,{
key:"UNSAFE_componentWillMount",value:function(){
this.animatedEvent=v.Animated.event([{
nativeEvent:{
contentOffset:{
y:this.state.scrollY
}

}

}
])
}

}
,{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentWillUnmount",value:function(){
var e,t;
this.eventListener&&this.eventListener.remove(),this.timer1&&clearTimeout(this.timer1),this.strategyTimer&&clearTimeout(this.strategyTimer),this.eventListenerLogin&&this.eventListenerLogin.remove(),null==(e=this.calendarAuthLinstener)||e.remove(),null==(t=this.switchTabLinstener)||t.remove(),this.listerBack&&this.listerBack.remove(),this.listerShopBack&&this.listerShopBack.remove(),this.state.scrollY&&this.state.scrollY.removeAllListeners(),this.strategyListener&&this.strategyListener.remove(),this.navListener1&&'function'==typeof this.navListener1&&this.navListener1(),this.navListener&&'function'==typeof this.navListener&&this.navListener(),this.pageListener&&this.pageListener.removeAllLisener(),this.appStateListener&&this.appStateListener.remove(),this.reportTimer&&clearTimeout(this.reportTimer),c.PlatformUtils.isIOS()?(this.refreshTimer&&clearTimeout(this.refreshTimer),this.timer&&clearTimeout(this.timer)):this.refreshTimerApk&&clearTimeout(this.refreshTimerApk),this.changeListener&&this.changeListener.remove(),I.default.removeData(C.SHOP_TAB_KEY),c.ShopStore.resetFolow()
}

}
,{
key:"_isLogin",value:(h=(0,a.default)((function*(){
var e,t=null!=(e=c.AppStore.isLogin)?e:yield c.LoginUtils.getLoginStatus();
c.AppStore.setIsLogin(t)
}
)),function(){
return h.apply(this,arguments)
}
)
}
,{
key:"setAbData",value:function(e){
var t=null==e?void 0:e.map((function(e){
return e.strategyId||''
}
));
this.strategyIdList=JSON.stringify(t)
}

}
,{
key:"haveScShop",value:function(e){
return(null==e?void 0:e.search('/sc/shop/'))>-1
}

}
,{
key:"_getTabInfo",value:function(){
// 变量
var e: any = this,t=this.state,a=t.pageId,n=t.carrierCode,r=t.pageAlias;
(this.props.pn||r)&&(a='',n='',r='shopSearchPage');
var o=new Promise((function(e){
return e((0,L.getPageInfoListAsyncOfCMSForApk)(n,'3',a,r))
}
));
return c.CommonUtils.racePromise(o,1e4).then((function(t){
return e.dataProcess(t),Promise.resolve()
}
)).catch((function(t){
var a;
null!=t&&null!=(a=t.message)&&a.includes('Network Error')&&e.setState({
errorType:c.ERROR_TYPE.NETWORK_ERROR,error:!0,loadState:2
}
)
}
))
}

}
,{
key:"_getPageInfo",value:function(e){
// 变量
var t: any = this;
return this._getAndroidPageInfo(e).catch((function(e){
var a;
null!=e&&null!=(a=e.message)&&a.includes('Network Error')?t.setState({
errorType:c.ERROR_TYPE.NETWORK_ERROR
}
):t.setState({
errorType:c.ERROR_TYPE.OTHER_ERROR
}
),t.closeLoading(),t.isPersonal=!1,t.setState({
error:!0
}
)
}
)).finally((function(){
t.setState({
loading:!1,isRefreshing:!1
}
);
// 变量
var e: any = (Date.now()-t.timeBegin)/1e3;
return c.RecordUtils.printLongLog(e+' time '),e>2&&c.RecordUtils.recordAGC({
exceptionType:2,time:e,requestAddress:'/shop',reason:'\u9aa8\u67b6\u5c4f\u52a0\u8f7d\u8d85\u8fc72s!',pageid:c.Service.pageId,comid:''
}
),Promise.resolve()
}
))
}

}
,{
key:"closeLoading",value:function(){
v.NativeModules.VmallNative.invokeNative({
service:'page',action:'loaded',params:{

}

}
)
}

}
,{
key:"_onRefresh",value:function(){
var e,t,a=this;
if(!1!==(null==(e=this.refreshControl)?void 0:e.isRefresh)&&(null==(t=this.state)||!t.isRefreshing)){
var n;
if(c.PlatformUtils.isIOS())this.setState({
isRefreshing:!0
}
),this.scrollViewKey=this.scrollViewKey+1,this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout((function(){
a.setState({
isRefreshing:!1
}
),a.onBackTop()
}
),600);
else this.scrollViewKey=this.scrollViewKey+1,null==(n=this.refreshControl)||null==n._countFun||n._countFun();
this._getPageInfo(!0),c.TimeUtils.updateSystemTime(),this.reportTimer&&clearTimeout(this.reportTimer),this.reportTimer=setTimeout((function(){
v.DeviceEventEmitter.emit('homeRefresh','homePage'),a.eventTracingReportByLoad(),a.eventTracingReportByLeave()
}
))
}

}

}
,{
key:"bottomNavEventClickByLoad",value:function(e,t){
var a,n,r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'',i=this.state.carrierCode;
c.EventTracking.eventTracingReport({
actionCode:'100660003',actionName:'\u5e97\u94fa\u5e95\u90e8\u5bfc\u822a\u70b9\u51fb\u4e0a\u62a5',eventType:c.EVENT_TYPE.EVENT_TYPE_CLICK,pageId:null!=(a=null==t?void 0:t.toString())?a:'',content:{
CarrierCode:i,click:'1',index:null!=(n=null==C.tab2index?void 0:C.tab2index[null==e||null==(r=e[0])?void 0:r.cardTitle])?n:1,URL:o
}
,pageCatCode:C.pageCategory.bottomNav.pageCatCode,pageCatName:(0,c.t)(C.pageCategory.bottomNav.pageCatName)
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,a=t.pageAlias,n=t.couponPageInfo.isShowCouponPage,r=t.isRefreshing,o=t.loading;
return(0,A.jsx)(c.WithTheme,{
themeStyles:b.default,children:function(t,i){
var s;
return e.props.mineData||a||n?e._loadPage(t,i,!0):!r&&o&&(0,A.jsx)(p.PlaceHolder,{

}
)||e.state.cmsData&&(null==(s=e.state.cmsData.pageInfos)?void 0:s.length)&&!e.state.error&&e._loadPage(t,i,!1)||(0,A.jsx)(p.CommonErrorPage,{
errorType:e.state.errorType,source:"home",homePageUrl:"vmall://com.vmall.client/home/main?tabIndex=0&from=rn"
}
)
}

}
)
}

}
]);
var h,O
}
)(l.default.Component))||t;
_e.default=U
}
),"7927a993b87ae53f6dde9af6eea78f8762cec2fd49fdea682ef0c9dd6fd162a0",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","c4dc40702581baef18993cf1409f2c9fa4a79065cb87b75145727ff9245f395a","a860614fdf64b19a5510afd332f4e2734055f84b07d3376fb4dcdffb6a4b1780","75a79305c81b9e255ac962ef199ae12ed5bf10d27a7c85a58b4705520cab8f7b","9c9a9dacf4e38e28f532beb58b1a9bc65c14b22314b9b816c6be7377bf5aa042","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","4e925b157583d4f3c0cab446237eb31b674166f0df74bf8fd577bdde148366fa","371d57e6f348eb4ebd44712381e1bada997ab824c27209f5ad724cc70810c8f9","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","031057ac28f7248a9a521c780132cbc79d781f0700f0636cee5ab1c44e53780c","9f193399d8839fbf4384f9e89936ab207ee1ea3f8c5506961e8d80e6d5e6f0bf","8bdaa3337852ee6c5d8e0a9b7a6bd0152b3ef782321e3332d6c9f3a3ef4b94f0","acf31e62475ffd15d6d5d9aae492248577cd6896f736f1d5e09f874989c8f40a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),o=e(r(d[2])),n=e(r(d[3])),s=e(r(d[4])),l=e(r(d[5])),c=e(r(d[6])),p=r(d[7]),u=r(d[8]),h=e(r(d[9])),f=r(d[10]),v=e(r(d[11])),y=e(r(d[12])),w=e(r(d[13])),x=r(d[14]),T=r(d[15]);
// 函数
function P(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(P=function(){
return!!e
}
)()
}
(0,p.EnvService)(p.env);
var S=(function(e){
// 函数
function h(e: any): any {
var t,n,c,v;
return(0,o.default)(this,h),n=this,c=h,v=[e],c=(0,l.default)(c),(t=(0,s.default)(n,P()?Reflect.construct(c,v||[],(0,l.default)(n).constructor):c.apply(n,v)))._toLogin=function(){
// 变量
var e: any = '';
if('web'===f.Platform.OS){
// 变量
var t: any = window.location.href;
e=p.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else p.PlatformUtils.isApp()?e='vmall://com.vmall.client/home/login':p.PlatformUtils.isMp()&&p.DeviceUtils.getUserProfile();
e&&p.RouterUtils.gotoPage(e)
}
,t.renderCloseIcon=function(e){
return p.PlatformUtils.isMp()?(0,T.jsx)(f.Image,{
source:{
uri:'/static/images/mpClose.png'
}
,style:{
width:24,height:24
}

}
):(0,T.jsx)(u.SvgIcon,{
normalCol:e.C25.color,opacity:1,iconName:"popup_close",width:24,height:24
}
)
}
,t.receiveNow=function(e,o){
// 变量
var n: any = t.props,s=n.width,l=n.pageType,c=n.randomId;
t.state.isLogin?p.HttpService.getCoupons(e,o).then((function(e){
if(e&&e.success){
switch(e.state){
case-1:case 4:if(p.PlatformUtils.isMp())wx.showToast({
title:e.wapReviceFinishTip||e.msg||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
);
else{
// 变量
var o: any = (p.PlatformUtils.isApp()?e.appReviceFinishTip:p.PlatformUtils.isWap(s)?e.wapReviceFinishTip:e.pcReviceFinishTip)||e.msg||(0,p.t)('operationFailed');
f.DeviceEventEmitter.emit('showToast',{
text:o,pageType:l,randomId:c
}
)
}
break;
case 1:case 2:if(!p.PlatformUtils.isMp()){
// 变量
var n: any = (p.PlatformUtils.isApp()?e.appReviceSuccTip:p.PlatformUtils.isWap(s)?e.wapReviceSuccTip:e.pcReviceSuccTip)||e.msg||(0,p.t)('operationFailed');
f.DeviceEventEmitter.emit('showToast',{
text:n,pageType:l,randomId:c
}
);
break
}
wx.showToast({
title:e.wapReviceSuccTip||e.msg||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
)
}
t.setState({
receiveStates:e.state
}
)
}
else if(p.PlatformUtils.isMp())wx.showToast({
title:e.errorTip||e.msg||e.wapReviceFinishTip||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
);
else{
// 变量
var u: any = (h=null,h=p.PlatformUtils.isApp()?e.appReviceFinishTip:p.PlatformUtils.isWap(s)?e.wapReviceFinishTip:e.pcReviceFinishTip,e.errorTip||e.msg||h||(0,p.t)('operationFailed'));
f.DeviceEventEmitter.emit('showToast',{
text:u,pageType:l,randomId:c
}
)
}
var h
}
)).finally((function(){
t.closePopup()
}
)):t._toLogin()
}
,t.state={
isShow:!1,couponInfo:{

}
,isLogin:!1
}
,t
}
return(0,c.default)(h,e),(0,n.default)(h,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this._isLogin(),this.initState(),this.showListener=f.DeviceEventEmitter.addListener('showNextPopUp',(function(t){
'coupon'===t&&e.initState()
}
)),p.PlatformUtils.isApp()&&(this.eventListener=f.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
'login'===t.service&&'isLogin'===t.action&&t&&'boolean'==typeof(null==t?void 0:t.param.isLogin)&&!0===Boolean(null==t?void 0:t.param.isLogin)&&e.setState({
isLogin:t.param.isLogin
}
)
}
))),this.mpLoginListener=f.DeviceEventEmitter.addListener('mpLoginSuccess',(function(){
e.setState({
isLogin:!0
}
)
}
)),this.mpLogoutListener=f.DeviceEventEmitter.addListener('mpLogoutSuccess',(function(){
e.setState({
isLogin:!1
}
)
}
))
}

}
,{
key:"componentWillUnmount",value:function(){
var e,t,o,n;
null==(e=this.showListener)||null==e.remove||e.remove(),null==(t=this.eventListener)||null==t.remove||t.remove(),null==(o=this.mpLoginListener)||null==o.remove||o.remove(),null==(n=this.mpLogoutListener)||null==n.remove||n.remove()
}

}
,{
key:"_isLogin",value:(S=(0,t.default)((function*(){
var e,t=null!=(e=p.AppStore.isLogin)?e:yield p.LoginUtils.getLoginStatus();
this.setState({
isLogin:t
}
)
}
)),function(){
return S.apply(this,arguments)
}
)
}
,{
key:"initState",value:function(){
var e,t,o,n,s,l=this.props.children;
if('0'===(p.PlatformUtils.isApp()||p.PlatformUtils.isMp()?p.GlobalProps.couponPopupStatus:window.sessionStorage.getItem('couponPopupStatus'))||'couponPopup'!==w.default.displayPopupType)return this.setState({
isShow:!1
}
),void(0,x.findNextLevel)(l,'coupon');
var c=null,u=null==l?void 0:l.find((function(e){
var t,o;
return'coupon'===e.type&&'true'===(null==(t=e.props)||null==(o=t.configInfo)?void 0:o.showBox)
}
));
null!=u&&null!=(e=u.props)&&null!=(t=e.dataSourceList)&&null!=(o=t[0])&&null!=(n=o.coupon)&&null!=(s=n.dataInfos)&&s.length&&(c=u.props.dataSourceList[0].coupon.dataInfos.find((function(e){
return(1===e.couponType||2===e.couponType)&&1===e.receiveStates&&1===e.reviceType
}
)))&&this.setState({
isShow:!!c,couponInfo:c
}
)
}

}
,{
key:"closePopup",value:function(){
p.PlatformUtils.isApp()||p.PlatformUtils.isMp()?p.GlobalProps.couponPopupStatus='0':window.sessionStorage.setItem('couponPopupStatus','0'),this.setState({
isShow:!1
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,o=t.isShow,n=t.couponInfo;
return o?(0,T.jsx)(p.WithTheme,{
themeStyles:y.default,children:function(t,o){
if('web'===f.Platform.OS)return(0,T.jsxs)(f.View,{
style:[t.view],children:[(0,T.jsx)(f.View,{
style:[t.bgAll,{
position:'fixed'
}
]
}
),(0,T.jsxs)(f.ImageBackground,{
source:v.default.couponPopupBg,style:t.bgImage,children:[(0,T.jsxs)(f.View,{
style:[t.couponInfoWarp],children:[(0,T.jsx)(f.Text,{
style:t.couponMoney,children:1===n.couponType?n.couponVal||n.amount:10*(n.couponRat||n.discount)
}
),(0,T.jsxs)(f.View,{
style:t.couponInfoInWarp,children:[(0,T.jsx)(f.Text,{
style:t.couponUnit,children:1===n.couponType?'RMB':(0,p.t)('discount')
}
),(0,T.jsx)(f.Text,{
style:t.couponType,children:(0,p.t)('coupons')
}
)]
}
)]
}
),(0,T.jsx)(f.View,{
style:t.couponConditionWrap,children:(0,T.jsx)(f.Text,{
style:t.couponCondition,children:n.description
}
)
}
),(0,T.jsx)(f.View,{
style:t.btnWrap,children:(0,T.jsx)(f.ImageBackground,{
source:v.default.couponPopupBtn,style:t.btnImage,children:(0,T.jsx)(f.TouchableOpacity,{
onPress:function(){
e.receiveNow(n.activityCode,n.batchCode)
}
,children:(0,T.jsx)(f.View,{
children:(0,T.jsx)(f.Text,{
style:t.btnText,children:(0,p.t)('receive_now_button')
}
)
}
)
}
)
}
)
}
)]
}
),(0,T.jsx)(f.View,{
style:t.closeBtn,children:(0,T.jsx)(f.TouchableOpacity,{
onPress:function(){
return e.closePopup()
}
,children:(0,T.jsx)(u.SvgIcon,{
normalCol:o.C25.color,opacity:1,iconName:"popup_close",width:24,height:24
}
)
}
)
}
)]
}
);
// 变量
var s: Function = p.PlatformUtils.isMp()?f.View:f.Modal;
return(0,T.jsx)(s,{
animationType:"fade",transparent:!0,visible:!0,statusBarTranslucent:!0,style:p.PlatformUtils.isMp()&&t.outModalMp,children:(0,T.jsx)(f.View,{
style:[t.clickWrap,{
top:p.PlatformUtils.isMp()?0:f.StatusBar.currentHeight
}
],children:(0,T.jsx)(f.View,{
style:[t.clickItem],children:(0,T.jsxs)(f.View,{
style:[t.view],children:[(0,T.jsxs)(f.ImageBackground,{
source:p.PlatformUtils.isMp()?{
uri:v.default.couponPopupBg
}
:v.default.couponPopupBg,style:t.bgImage||{

}
,children:[(0,T.jsxs)(f.View,{
style:[t.couponInfoWarp],children:[(0,T.jsx)(f.Text,{
style:t.couponMoney,children:1===n.couponType?n.couponVal||n.amount:10*(n.couponRat||n.discount)
}
),(0,T.jsxs)(f.View,{
style:t.couponInfoInWarp,children:[(0,T.jsx)(f.Text,{
style:t.couponUnit,children:1===n.couponType?'RMB':(0,p.t)('discount')
}
),(0,T.jsx)(f.Text,{
style:t.couponType,children:(0,p.t)('coupons')
}
)]
}
)]
}
),(0,T.jsx)(f.View,{
style:t.couponConditionWrap,children:(0,T.jsx)(f.Text,{
style:t.couponCondition,children:n.description
}
)
}
),(0,T.jsx)(f.View,{
style:t.btnWrap,children:(0,T.jsx)(f.ImageBackground,{
source:p.PlatformUtils.isMp()?{
uri:v.default.couponPopupBtn
}
:v.default.couponPopupBtn,style:t.btnImage,children:(0,T.jsx)(f.TouchableOpacity,{
onPress:function(){
e.receiveNow(n.activityCode,n.batchCode)
}
,children:(0,T.jsx)(f.View,{
style:t.btnView,children:(0,T.jsx)(f.Text,{
style:t.btnText,children:(0,p.t)('receive_now_button')
}
)
}
)
}
)
}
)
}
)]
}
),(0,T.jsx)(f.View,{
style:t.closeBtn,children:(0,T.jsx)(f.TouchableOpacity,{
onPress:function(){
e.closePopup()
}
,children:e.renderCloseIcon(o)
}
)
}
)]
}
)
}
)
}
)
}
)
}

}
):null
}

}
]);
var S
}
)(h.default.Component);
_e.default=(0,p.Componentautoscaling)(S)
}
),"c4dc40702581baef18993cf1409f2c9fa4a79065cb87b75145727ff9245f395a",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","449bd5f90f196e2daae5b4cb3b6247037c03626365b5930d0a59fd7d955ed4df","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","9f193399d8839fbf4384f9e89936ab207ee1ea3f8c5506961e8d80e6d5e6f0bf","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]),o=t.Dimensions.get('window').height,l=t.Dimensions.get('window').width,c=l>375?375:l,s=1*c,p=(0,n.ScreenSize)(l);
e.default=function(l){
return t.StyleSheet.create({
view:{
width:c,paddingLeft:'small'===p?16:24,paddingRight:'small'===p?16:24,position:'absolute',top:o/2-250,left:'50%',marginLeft:-c/2,elevation:10,zIndex:1e4
}
,bgAll:{
backgroundColor:'rgba(0,0,0,0.2)',width:'100%',height:o,left:0,top:0
}
,bgImage:{
height:s
}
,couponInfoWarp:{
display:'flex',flexDirection:'row',marginTop:165,justifyContent:'center'
}
,couponMoney:Object.assign({

}
,l.T16,l.C17,{
marginRight:10
}
),couponInfoInWarp:{
display:'flex',flexDirection:'column',justifyContent:'center'
}
,couponUnit:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,l.T8,l.C17),couponType:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,l.T12,l.C17),couponConditionWrap:{
marginTop:16,alignItems:'center'
}
,couponCondition:Object.assign({

}
,l.T7,l.C17),btnWrap:{
marginTop:45,alignItems:'center'
}
,btnImage:{
height:40,width:192
}
,btnText:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,l.T10,l.C18,{
lineHeight:40,textAlign:'center'
}
),closeBtn:{
marginTop:25,alignItems:'center'
}
,clickWrap:{
position:n.PlatformUtils.isMp()?'fixed':'absolute',top:24,right:0,width:'100%',height:'100%',zIndex:9998,elevation:9998,backgroundColor:'rgba(0,0,0,0.2)'
}
,outModalMp:{
zIndex:9999
}
,clickItem:{
width:'100%',height:'100%',alignItems:'flex-end'
}

}
)
}

}
),"449bd5f90f196e2daae5b4cb3b6247037c03626365b5930d0a59fd7d955ed4df",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var o,l,p,n,u,s,y,b,c,f,h,T=t(r(d[1])),w=t(r(d[2])),v=t(r(d[3])),O=t(r(d[4])),P=(t(r(d[5])),r(d[6])),V=r(d[7]),D=r(d[8]),M=(o=(function(){
return(0,v.default)((function t(){
(0,w.default)(this,t),(0,T.default)(this,"layoutType",l,this),(0,T.default)(this,"curTabTitle",p,this),(0,T.default)(this,"keyword",n,this),(0,T.default)(this,"brandModalVisible",u,this),(0,T.default)(this,"collectModalVisible",s,this),(0,T.default)(this,"tipVisible",y,this),(0,T.default)(this,"displayPopupType",b,this),(0,T.default)(this,"setData",c,this),(0,T.default)(this,"getData",f,this),(0,T.default)(this,"removeData",h,this),(0,P.makeObservable)(this)
}
),[{
key:"switchLayoutType",value:function(t){
this.layoutType=t
}

}
,{
key:"resetLayoutType",value:function(){
this.layoutType=0
}

}
,{
key:"reset",value:function(){
this.resetLayoutType(),this.resetPopupType(),this.removeData(D.SHOP_TAB_KEY)
}

}
,{
key:"setBrandModalVisible",value:function(t,o){
this.brandModalVisible.set(t,o)
}

}
,{
key:"setCollectModalVisible",value:function(t,o){
this.collectModalVisible.set(t,o)
}

}
,{
key:"setTipsVisible",value:function(t){
this.tipVisible=t
}

}
,{
key:"setPopupType",value:function(t){
this.displayPopupType=t
}

}
,{
key:"resetPopupType",value:function(){
this.displayPopupType=''
}

}
])
}
)(),l=(0,O.default)(o.prototype,"layoutType",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return 0
}

}
),p=(0,O.default)(o.prototype,"curTabTitle",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return'index'
}

}
),n=(0,O.default)(o.prototype,"keyword",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return''
}

}
),u=(0,O.default)(o.prototype,"brandModalVisible",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return new Map(null)
}

}
),s=(0,O.default)(o.prototype,"collectModalVisible",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return new Map(null)
}

}
),y=(0,O.default)(o.prototype,"tipVisible",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return'true'
}

}
),b=(0,O.default)(o.prototype,"displayPopupType",[P.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return''
}

}
),(0,O.default)(o.prototype,"switchLayoutType",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"switchLayoutType"),o.prototype),(0,O.default)(o.prototype,"resetLayoutType",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"resetLayoutType"),o.prototype),c=(0,O.default)(o.prototype,"setData",[P.action],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
// 变量
var t: any = this;
return function(o,l){
'web'===V.Platform.OS&&window.sessionStorage.setItem(o,JSON.stringify(l)),o===D.SHOP_TAB_KEY?t.curTabTitle=l:t.keyword=l
}

}

}
),f=(0,O.default)(o.prototype,"getData",[P.action],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
// 变量
var t: any = this;
return function(o){
// 变量
var l: any = o===D.SHOP_TAB_KEY?t.curTabTitle:t.keyword;
if('web'===V.Platform.OS){
var p=window.sessionStorage.getItem(o);
try{
l=p?JSON.parse(p):l
}
catch(t){

}

}
return l
}

}

}
),h=(0,O.default)(o.prototype,"removeData",[P.action],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
// 变量
var t: any = this;
return function(o){
'web'===V.Platform.OS?window.sessionStorage.removeItem(o):o===D.SHOP_TAB_KEY?t.curTabTitle='index':t.keyword=''
}

}

}
),(0,O.default)(o.prototype,"reset",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"reset"),o.prototype),(0,O.default)(o.prototype,"setBrandModalVisible",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"setBrandModalVisible"),o.prototype),(0,O.default)(o.prototype,"setCollectModalVisible",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"setCollectModalVisible"),o.prototype),(0,O.default)(o.prototype,"setTipsVisible",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"setTipsVisible"),o.prototype),(0,O.default)(o.prototype,"setPopupType",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"setPopupType"),o.prototype),(0,O.default)(o.prototype,"resetPopupType",[P.action],Object.getOwnPropertyDescriptor(o.prototype,"resetPopupType"),o.prototype),o);
e.default=new M
}
),"b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","0513c9aec1df8b193fb6e7118d38330920d6f86b6f168b15f210858e15b09551","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","238db300b8230394a7d5170f0b40f8df9292454df0796f0bcc766fd45e231b9f","e8b933b691eb434ae798f2ebfc685acb60972917ddcf03d73f892839d981c1a5","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43"]);

__d((function(g,r,i,a,m,e,d){
m.exports=function(l,n,t,b){
t&&Object.defineProperty(l,n,{
enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(b):void 0
}
)
}

}
),"0513c9aec1df8b193fb6e7118d38330920d6f86b6f168b15f210858e15b09551",[]);

__d((function(g,r,i,a,m,e,d){
m.exports=function(n,l,t,u,o){
var c={

}
;
return Object.keys(u).forEach((function(n){
c[n]=u[n]
}
)),c.enumerable=!!c.enumerable,c.configurable=!!c.configurable,('value'in c||c.initializer)&&(c.writable=!0),c=t.slice().reverse().reduce((function(t,u){
return u(n,l,t)||t
}
),c),o&&void 0!==c.initializer&&(c.value=c.initializer?c.initializer.call(o):void 0,c.initializer=void 0),void 0===c.initializer&&(Object.defineProperty(n,l,c),c=null),c
}

}
),"238db300b8230394a7d5170f0b40f8df9292454df0796f0bcc766fd45e231b9f",[]);

__d((function(g,r,i,a,m,e,d){
m.exports=function(o,s){
throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")
}

}
),"e8b933b691eb434ae798f2ebfc685acb60972917ddcf03d73f892839d981c1a5",[]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.tab2index=e.reloadTab2EventType=e.reloadEventType2Name=e.pageCategory=e.leaveTab2EventType=e.leaveEventType2Name=e.appReloadTab2EventType=e.appReloadEventType2Name=e.appLeaveTab2EventType=e.appLeaveEventType2Name=e.SHOP_TAB_KEY=void 0;
e.appReloadTab2EventType={
index:'100660001',product:'100660005',category:'100660007',dynamic:'100662002'
}
,e.appLeaveTab2EventType={
index:'100660013',product:'100660014',category:'100660015',dynamic:'100662001'
}
,e.appLeaveEventType2Name={
100660013:'\u5e97\u94fa\u9996\u9875\u79bb\u5f00\u4e0a\u62a5',100660014:'\u5e97\u94fa\u5168\u90e8\u5546\u54c1\u9875\u79bb\u5f00\u4e0a\u62a5',100660015:'\u5e97\u94fa\u5206\u7c7b\u9875\u79bb\u5f00\u4e0a\u62a5',100662001:'\u5e97\u94fa\u52a8\u6001\u9875\u79bb\u5f00\u4e0a\u62a5',100660017:'\u5e97\u94fa\u641c\u7d22\u7ed3\u679c\u9875\u79bb\u5f00\u4e0a\u62a5'
}
,e.appReloadEventType2Name={
100660001:'\u5e97\u94fa\u9996\u9875\u52a0\u8f7d\u4e0a\u62a5',100660005:'\u5e97\u94fa\u5168\u90e8\u5546\u54c1\u9875\u52a0\u8f7d\u4e0a\u62a5',100660007:'\u5e97\u94fa\u5206\u7c7b\u9875\u52a0\u8f7d\u4e0a\u62a5',100662002:'\u5e97\u94fa\u52a8\u6001\u9875\u52a0\u8f7d\u4e0a\u62a5',100660011:'\u5e97\u94fa\u641c\u7d22\u7ed3\u679c\u9875\u52a0\u8f7d\u4e0a\u62a5'
}
,e.reloadTab2EventType={
index:'200580001',product:'200580005',category:'200580007',dynamic:'100662002'
}
,e.leaveTab2EventType={
index:'200580013',product:'200580014',category:'200580015',dynamic:'100662001'
}
,e.leaveEventType2Name={
200580013:'\u5e97\u94fa\u9996\u9875\u79bb\u5f00\u4e0a\u62a5',200580014:'\u5e97\u94fa\u5168\u90e8\u5546\u54c1\u9875\u79bb\u5f00\u4e0a\u62a5',200580015:'\u5e97\u94fa\u5206\u7c7b\u9875\u79bb\u5f00\u4e0a\u62a5',100662001:'\u5e97\u94fa\u52a8\u6001\u9875\u79bb\u5f00\u4e0a\u62a5',200580017:'\u5e97\u94fa\u641c\u7d22\u7ed3\u679c\u9875\u79bb\u5f00\u4e0a\u62a5'
}
,e.reloadEventType2Name={
200580001:'\u5e97\u94fa\u9996\u9875\u52a0\u8f7d\u4e0a\u62a5',200580005:'\u5e97\u94fa\u5168\u90e8\u5546\u54c1\u9875\u52a0\u8f7d\u4e0a\u62a5',200580007:'\u5e97\u94fa\u5206\u7c7b\u9875\u52a0\u8f7d\u4e0a\u62a5',200580011:'\u5e97\u94fa\u641c\u7d22\u7ed3\u679c\u9875\u52a0\u8f7d\u4e0a\u62a5',100662002:'\u5e97\u94fa\u52a8\u6001\u9875\u52a0\u8f7d\u4e0a\u62a5'
}
,e.tab2index={
index:'1',product:'2',category:'3',service:'4',dynamic:'5'
}
,e.pageCategory={
searchPage:{
pageCatCode:'p_ShopSearchPage',pageCatName:'shop_search_page'
}
,shopInfo:{
pageCatCode:'p_ShopBaseinfoPage',pageCatName:'shop_info_page'
}
,bottomNav:{
pageCatCode:'p_ShopBottomNavigationBar',pageCatName:'shop_bottom_nav'
}
,followShop:{
pageCatCode:'p_ShopFollowListPage',pageCatName:'shop_follow_list'
}

}
,e.SHOP_TAB_KEY='shopTab'
}
),"4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43",[]);

__d((function(g,r,i,a,m,e,d){
// 变量
var n: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.showToast=e.handlePopupLevel=e.getAdvancedFeature=e.findNextLevel=e.cusRound=void 0;
var t=n(r(d[1])),o=n(r(d[2])),u=r(d[3]),l=r(d[4]),p='collectShop',c='coupon',f='shopBrand',v=[p,c],s=[p,c,f],h=e.handlePopupLevel=function(n){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];
if(null!=n&&n.length){
// 变量
var l: any = null,p=null;
t.some((function(t){
var c,s,h,T;
if(!(p=w(n,t))&&!(l=E(n,t)))return!1;
if(v.includes(null==(c=p)?void 0:c.type)){
var A,x,L,_,N;
if(null!=(A=p.props)&&null!=(x=A.dataSourceList)&&null!=(L=x[0])&&null!=(_=L.coupon)&&null!=(N=_.dataInfos)&&N.length)return!!P(p)&&(o.default.setPopupType(p.type+"Popup"),y(u,l),!0)
}
return(null==(s=l)?void 0:s.type)===f&&('1'===(null==(h=l.props)||null==(T=h.configInfo)?void 0:T.popup)&&(o.default.setPopupType(l.type+"Popup"),y(u,l),!0))
}
))
}

}
,y=function(n,t){
n&&u.DeviceEventEmitter.emit('showNextPopUp',t.type)
}
,T=function(n){
return(1===n.couponType||2===n.couponType)&&1===n.receiveStates&&1===n.reviceType
}
,P=function(n){
return n.props.dataSourceList[0].coupon.dataInfos.find((function(n){
return T(n)
}
))
}
,E=function(n,t){
return n.find((function(n){
return n.type===t
}
))
}
,w=function(n,t){
return n.find((function(n){
var o,u;
return n.type===t&&'true'===(null==n||null==(o=n.props)||null==(u=o.configInfo)?void 0:u.showBox)
}
))
}
;
e.findNextLevel=function(n,t){
var u,l,p=s.indexOf(t)+1,c=s.slice(p);
(null==(u=o.default.displayPopupType)?void 0:u.substring(0,(null==(l=o.default.displayPopupType)?void 0:l.length)-5))===t&&h(n,c,!0)
}
,e.showToast=function(){
var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{

}
,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.PAGE_TYPE.shop;
l.PlatformUtils.isMp()?wx.showToast({
title:n.errorTip||n.msg||n.info||(0,l.t)('collectionFailed'),icon:'none',duration:1500
}
):u.DeviceEventEmitter.emit('showToast',{
text:n.errorTip||n.msg||n.info||(0,l.t)('collectionFailed'),pageType:t,randomId:void 0
}
)
}
,e.getAdvancedFeature=(function(){
var n=(0,t.default)((function*(){
return new Promise((function(n){
l.RnBridge.invokeVmallNative('common','getSpValueAll',{
key:'ENABLE_ADVANCED_FEATURE',valueType:'String'
}
).then((function(t){
var o;
n(null!=(o=null==t?void 0:t.value)?o:'1')
}
))
}
))
}
));
return function(){
return n.apply(this,arguments)
}

}
)(),e.cusRound=function(n,t){
return Math.round(n+"e"+t)/Math.pow(10,t)
}

}
),"9f193399d8839fbf4384f9e89936ab207ee1ea3f8c5506961e8d80e6d5e6f0bf",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),o=e(r(d[2])),l=e(r(d[3])),n=e(r(d[4])),s=e(r(d[5])),c=e(r(d[6])),p=r(d[7]),u=r(d[8]),f=e(r(d[9])),h=e(r(d[10])),v=r(d[11]),w=e(r(d[12])),T=e(r(d[13])),y=e(r(d[14])),P=r(d[15]),x=r(d[16]),C=r(d[17]);
// 函数
function S(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(S=function(){
return!!e
}
)()
}
var I=p.PlatformUtils.isMp()?v.ImageBackground:u.ImageBackground,M=(function(e){
// 函数
function h(e: any): any {
var t,l,c,T;
return(0,o.default)(this,h),l=this,c=h,T=[e],c=(0,s.default)(c),(t=(0,n.default)(l,S()?Reflect.construct(c,T||[],(0,s.default)(l).constructor):c.apply(l,T))).originWidth=p.CommonUtils.getWindowSize(p.PAGE_TYPE.shop).screenWidth,t._toLogin=function(){
// 变量
var e: any = '';
if('web'===v.Platform.OS){
// 变量
var t: any = window.location.href;
e=p.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else e=(p.PlatformUtils.isAndroid(),'vmall://com.vmall.client/home/login');
p.RouterUtils.gotoPage(e)
}
,t.eventTracingReport=function(e,o){
var l,n,s,c,u,f,h,v=t.props,w=v.pageCatCode,T=v.pageCatName,y=t.state.couponInfo,P={
exposure:{
code:'338010001',eventType:p.EVENT_TYPE.EVENT_TYPE_EXPOSURE,name:'\u5173\u6ce8\u6709\u793c\u5f39\u7a97\u66dd\u5149'
}
,clickFollowBtn:{
code:'338010003',eventType:p.EVENT_TYPE.EVENT_TYPE_CLICK,name:'\u5173\u6ce8\u6709\u793c\u5f39\u7a97\u70b9\u51fb\u5173\u6ce8\u6709\u793c\u6309\u94ae'
}
,clickCloseBtn:{
code:'338010005',eventType:p.EVENT_TYPE.EVENT_TYPE_CLICK,name:'\u5173\u6ce8\u6709\u793c\u5f39\u7a97\u70b9\u51fb\u5173\u95ed\u6309\u94ae'
}

}
,x={
comId:'popup',activityCode:null!=(l=null==y?void 0:y.activityCode)?l:''
}
;
'exposure'===e?x.exposure='1':(x.buttonName=o,x.click='1'),p.Report.eventTracingReport({
actionCode:null!=(n=null==P||null==(s=P[e])?void 0:s.code)?n:'',actionName:null!=(c=null==P||null==(u=P[e])?void 0:u.name)?c:'',eventType:null!=(f=null==P||null==(h=P[e])?void 0:h.eventType)?f:'',content:x,pageCatCode:w,pageCatName:T
}
),p.Report.execReportData('',!0)
}
,t.receiveNow=function(e,o){
// 变量
var l: any = t.props,n=l.width,s=l.pageType,c=l.randomId,u=t.state.couponInfo;
p.HttpService.getCoupons(e,o).then((function(e){
if(e&&e.success){
switch(e.state){
case-1:case 4:p.PlatformUtils.isMp()?wx.showToast({
title:e.wapReviceFinishTip||e.msg||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
):v.DeviceEventEmitter.emit('showToast',{
text:t.getFinishTip(e),pageType:s,randomId:c
}
);
break;
case 1:case 2:if(!p.PlatformUtils.isMp()){
// 变量
var o: any = '';
o=p.PlatformUtils.isApp()?e.appReviceSuccTip:p.PlatformUtils.isWap(n)?e.wapReviceSuccTip:e.pcReviceSuccTip,v.DeviceEventEmitter.emit('showToast',{
text:o||e.msg||(0,p.t)('operationFailed'),pageType:s,randomId:c
}
);
break
}
wx.showToast({
title:e.wapReviceSuccTip||e.msg||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
)
}
t.setState({
receiveStates:e.state
}
),v.DeviceEventEmitter.emit('reLoadShopcoupon',{
cardId:u.cardId,receiveStates:e.state
}
)
}
else{
if(p.PlatformUtils.isMp())wx.showToast({
title:e.errorTip||e.msg||e.wapReviceFinishTip||(0,p.t)('operationFailed'),icon:'none',duration:1500
}
);
else{
// 变量
var l: any = (f=p.PlatformUtils.isApp()?e.appReviceFinishTip:p.PlatformUtils.isWap(n)?e.wapReviceFinishTip:e.pcReviceFinishTip,e.errorTip||e.msg||f||(0,p.t)('operationFailed'));
v.DeviceEventEmitter.emit('showToast',{
text:l,pageType:s,randomId:c
}
)
}
t.setState({
receiveStates:e.state
}
),v.DeviceEventEmitter.emit('reLoadShopcoupon',{
cardId:u.cardId,receiveStates:e.state
}
)
}
var f
}
)).finally((function(){
t.handleCountDownClose()
}
))
}
,t.followReceive=f.default.debounce((function(){
t.eventTracingReport('clickFollowBtn','\u5173\u6ce8\u9886\u53d6');
// 变量
var e: any = t.props.carrierCode||'',o=t.state,l=o.couponInfo,n=o.width,s=p.Service.openApiDomain+"sc/shop/followShop?lang=zh-CN&country=CN";
p.Http.post(s,{
followType:1,carrierCode:e,portal:(0,x.getPortalStr)(n)
}
).then((function(e){
null!=e&&e.success?(v.DeviceEventEmitter.emit('brandFollowShop'),p.ShopStore.setFollow('true'),t.receiveNow(l.activityCode,l.batchCode)):(0,P.showToast)(e)
}
))
}
),50),t.handleCountDownClose=function(){
t.showCloseTimer&&clearInterval(t.showCloseTimer),t.showCloseTimer=setInterval((function(){
// 变量
var e: any = t.state.closeTime;
if(1===e)return clearInterval(t.showCloseTimer),void t.closePopup();
t.setState({
closeTime:e-1
}
)
}
),1e3)
}
,t.modalContent=function(e,o,l,n){
// 变量
var s: Function = t.state,c=s.couponInfo,u=s.closeTime,f=s.receiveStates;
return(0,C.jsxs)(C.Fragment,{
children:[(0,C.jsxs)(I,{
localSource:e?w.default.collectPopupBgPc:w.default.collectPopupBg,source:p.PlatformUtils.isMp()&&{
uri:w.default.collectPopupBg
}
,resizeMode:'contain',style:[o.bgImageView,p.PlatformUtils.isMp()&&o.bgImageViewMp],imgViewStyle:o.bgImageView,imgStyle:[{
width:280,height:280
}
,e&&{
width:392,height:392
}
],children:[e?(0,C.jsx)(v.TouchableOpacity,{
onPress:t.handleClosePopup,style:[o.closeIcon,{
right:(l-392)/2+16
}
],children:(0,C.jsx)(v.Image,{
style:o.closeImg,source:w.default.collectPopupClose
}
)
}
):null,(0,C.jsxs)(v.View,{
style:[o.couponInfoWarp,e&&o.couponInfoWarpPc],children:[(0,C.jsx)(v.View,{
style:[o.couponLeftInfo,e&&o.couponLeftInfoPc],children:(0,C.jsx)(v.View,{
style:o.couponMoneyL,children:1===c.couponType?(0,C.jsxs)(C.Fragment,{
children:[(0,C.jsx)(v.Text,{
style:[o.currency,e&&o.currencyPc],children:'\xa5'
}
),(0,C.jsx)(v.Text,{
style:[o.couponMoney,e&&o.couponMoneyPc],numberOfLines:1,ellipsizeMode:'tail',children:c.couponVal||c.amount
}
)]
}
):(0,C.jsxs)(C.Fragment,{
children:[(0,C.jsx)(v.Text,{
style:[o.couponMoney,e&&o.couponMoneyPc],numberOfLines:1,ellipsizeMode:'tail',children:10*(c.couponRat||c.discount)
}
),(0,C.jsx)(v.Text,{
style:[o.currency,e&&o.currencyPc],children:(0,p.t)('discount')
}
)]
}
)
}
)
}
),(0,C.jsxs)(v.View,{
style:[o.couponRightInfo,e&&o.couponRightInfoPc],children:[(0,C.jsx)(v.Text,{
style:[o.couponType,e&&o.couponTypePc],children:1===c.couponType?(0,p.t)('coupons'):(0,p.t)('discount_coupon')
}
),(0,C.jsx)(v.Text,{
style:[o.couponCondition,e&&o.couponConditionPc],numberOfLines:1,ellipsizeMode:'tail',children:(0,p.t)('available').replace('%d',c.amtMin)
}
)]
}
)]
}
),(0,C.jsx)(v.View,{
style:[o.btnWrap,e&&o.btnWrapPc],children:(0,C.jsx)(I,{
localSource:1!==f?w.default.receivedBtnBg:w.default.couponPopupBtn,source:p.PlatformUtils.isMp()&&{
uri:1!==f?w.default.receivedBtnBg:w.default.couponPopupBtn
}
,style:[o.btnImage,e&&o.btnImagePc],children:(0,C.jsx)(v.TouchableOpacity,{
onPress:t.followReceive,children:(0,C.jsx)(v.View,{
children:(0,C.jsx)(v.Text,{
style:[o.btnText,1!==f&&o.btnReceivedText],children:1!==f?(0,p.t)('received'):(0,p.t)('followReceive')
}
)
}
)
}
)
}
)
}
),1!==Number(f)?(0,C.jsxs)(C.Fragment,{
children:[(0,C.jsx)(v.View,{
style:[o.closeTextL,e&&o.closeTextLPc],children:(0,C.jsx)(v.Text,{
style:o.closeText,children:(0,p.t)('close_after_s').replace('%1$d',String(u))
}
)
}
),(0,C.jsx)(v.Image,{
source:p.PlatformUtils.isMp()?{
uri:w.default.collectReceived
}
:e?w.default.collectReceivedPc:w.default.collectReceived,style:[o.receivedImg,e&&o.receivedImgPc,p.PlatformUtils.isApp()&&o.receivedImgApp]
}
)]
}
):null]
}
),e?null:(0,C.jsx)(v.View,{
style:o.closeBtn,children:(0,C.jsx)(v.TouchableOpacity,{
onPress:t.handleClosePopup,children:t.renderCloseIcon(n)
}
)
}
)]
}
)
}
,t.renderCloseIcon=function(e){
return p.PlatformUtils.isMp()?(0,C.jsx)(v.Image,{
source:{
uri:'/static/images/mpClose.png'
}
,style:{
width:24,height:24
}

}
):(0,C.jsx)(u.SvgIcon,{
normalCol:e.C25.color,opacity:1,iconName:"popup_close",width:24,height:24
}
)
}
,t.state={
isShow:!1,couponInfo:{

}
,isLogin:!1,closeTime:3,receiveStates:1
}
,t.followReceive=t.followReceive.bind(t),t.handleClosePopup=t.handleClosePopup.bind(t),t
}
return(0,c.default)(h,e),(0,l.default)(h,[{
key:"componentDidMount",value:function(){
this.initState()
}

}
,{
key:"componentWillUnmount",value:function(){
this.showCloseTimer&&clearInterval(this.showCloseTimer)
}

}
,{
key:"_isLogin",value:(j=(0,t.default)((function*(){
var e,t=null!=(e=p.AppStore.isLogin)?e:yield p.LoginUtils.getLoginStatus();
return this.setState({
isLogin:t
}
),t
}
)),function(){
return j.apply(this,arguments)
}
)
}
,{
key:"isFollowShop",value:function(){
// 变量
var e: any = this;
return new Promise((function(t){
// 变量
var o: any = p.Service.openApiDomain+"sc/shop/getIsFollow?lang="+p.MCP_LANG.CN+"&country=CN",l=e.props.carrierCode||'',n=e.state.width;
p.Http.get(o,{
carrierCodeList:l?"['"+l+"']":[''],portal:(0,x.getPortalStr)(n)
}
).then((function(e){
var o=e.data||{

}
;
o.followMap&&f.default.has(o.followMap,l)&&f.default.get(o.followMap,l)?t(f.default.get(o.followMap,l)):t(!1)
}
)).catch((function(){
t(!1)
}
))
}
))
}

}
,{
key:"initState",value:(M=(0,t.default)((function*(){
var e,t,o,l,n,s,c=this.props.carrierCode||'',u=p.PlatformUtils.isApp()||p.PlatformUtils.isMp()?(null==(e=y.default.collectModalVisible)?void 0:e.get(c))||'true':window.sessionStorage.getItem('collectModalVisible'),f=yield this._isLogin(),h=!1;
f&&(h=yield this.isFollowShop());
// 变量
var v: any = this.props.children;
if('false'===u||!f||h||'collectShopPopup'!==y.default.displayPopupType)return this.setState({
isShow:!1
}
),void(0,P.findNextLevel)(v,'collectShop');
var w=null,T=null==v?void 0:v.find((function(e){
var t,o;
return'collectShop'===e.type&&'true'===(null==(t=e.props)||null==(o=t.configInfo)?void 0:o.showBox)
}
));
null!=T&&null!=(t=T.props)&&null!=(o=t.dataSourceList)&&null!=(l=o[0])&&null!=(n=l.coupon)&&null!=(s=n.dataInfos)&&s.length&&(w=T.props.dataSourceList[0].coupon.dataInfos.find((function(e){
return(1===e.couponType||2===e.couponType)&&1===e.receiveStates&&1===e.reviceType
}
)))&&(this.setState({
isShow:!!w,couponInfo:w
}
),this.eventTracingReport('exposure'))
}
)),function(){
return M.apply(this,arguments)
}
)
}
,{
key:"closePopup",value:function(){
// 变量
var e: any = this.props.carrierCode;
p.PlatformUtils.isApp()||p.PlatformUtils.isMp()?y.default.setCollectModalVisible(e,'false'):window.sessionStorage.setItem('collectModalVisible','false'),this.setState({
isShow:!1
}
)
}

}
,{
key:"getFinishTip",value:function(e){
// 变量
var t: any = this.props.width;
return(p.PlatformUtils.isApp()?e.appReviceFinishTip:p.PlatformUtils.isWap(t)?e.wapReviceFinishTip:e.pcReviceFinishTip)||e.msg||(0,p.t)('operationFailed')
}

}
,{
key:"handleClosePopup",value:function(){
this.eventTracingReport('clickCloseBtn','\u5173\u95ed'),this.closePopup()
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
return this.state.isShow?(0,C.jsx)(p.WithTheme,{
themeStyles:T.default,children:function(t,o,l){
e.originWidth=l;
// 变量
var n: any = p.PlatformUtils.isPc(l);
if('web'===v.Platform.OS)return(0,C.jsxs)(v.View,{
style:[t.view,n&&t.viewPc],children:[(0,C.jsx)(v.View,{
style:[t.bgAll,t.bgAllWeb]
}
),e.modalContent(n,t,l,o)]
}
);
// 变量
var s: Function = p.PlatformUtils.isMp()?v.View:v.Modal;
return(0,C.jsx)(s,{
animationType:"fade",transparent:!0,statusBarTranslucent:!0,visible:!0,style:p.PlatformUtils.isMp()&&t.outModalMp,children:(0,C.jsx)(v.View,{
style:[t.clickWrap,{
top:p.PlatformUtils.isMp()?0:v.StatusBar.currentHeight
}
],children:(0,C.jsx)(v.View,{
style:[t.clickItem],children:(0,C.jsx)(v.View,{
style:[t.viewApp,p.PlatformUtils.isMp()&&t.viewMp],children:e.modalContent(n,t,l,o)
}
)
}
)
}
)
}
)
}

}
):null
}

}
]);
var M,j
}
)(h.default.Component);
_e.default=(0,p.Componentautoscaling)(M)
}
),"a860614fdf64b19a5510afd332f4e2734055f84b07d3376fb4dcdffb6a4b1780",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","09cd660ce2e07cb84f16e330a73679cb77ce8809a1cf241656b564cd40c10bbc","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","9f193399d8839fbf4384f9e89936ab207ee1ea3f8c5506961e8d80e6d5e6f0bf","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]),o=t.Dimensions.get('window').height;
e.default=function(c){
return t.StyleSheet.create({
view:{
position:'absolute',top:(o-328)/2,left:0,right:0,margin:'auto',elevation:10,zIndex:1e4
}
,viewApp:{
position:'absolute',elevation:10,zIndex:1e4
}
,viewMp:{
alignItems:'center'
}
,viewPc:{
top:(o-392)/2
}
,bgAll:{
backgroundColor:'rgba(0,0,0,0.2)',width:'100%',height:o,left:0,top:0
}
,bgAllWeb:{
position:'fixed'
}
,bgImageView:{
alignItems:'center',height:280
}
,bgImageViewMp:{
width:280
}
,bgImage:{
height:280,width:280
}
,bgImagePc:{
height:392,width:392
}
,couponInfoWarp:{
display:'flex',flexDirection:'row',marginTop:74,justifyContent:'center'
}
,couponInfoWarpPc:{
marginTop:109
}
,couponMoney:{
fontFamily:n.PublicFont.fontFamilyMedium,fontSize:24,color:'#AE7633',fontWeight:'700',lineHeight:59
}
,couponMoneyPc:{
fontSize:34,lineHeight:69
}
,couponInfoInWarp:{
display:'flex',flexDirection:'column',justifyContent:'center'
}
,couponUnit:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,c.T8,c.C17),couponType:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,c.T12,{
color:'#4C321E',textAlign:'center',marginBottom:2
}
),couponTypePc:{
fontSize:26,fontWeight:'500'
}
,couponConditionWrap:{
marginTop:16,alignItems:'center'
}
,btnWrap:{
marginTop:40,alignItems:'center'
}
,btnWrapPc:{
marginTop:63
}
,btnImage:{
height:40,width:184
}
,btnImagePc:{
width:200
}
,btnText:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,c.T10,c.C18,{
lineHeight:40,textAlign:'center'
}
),closeBtn:{
marginTop:24,alignItems:'center'
}
,clickWrap:{
position:n.PlatformUtils.isMp()?'fixed':'absolute',top:24,right:0,width:'100%',height:'100%',zIndex:9998,elevation:9998,backgroundColor:'rgba(0,0,0,0.2)'
}
,clickItem:{
width:'100%',height:'100%',alignItems:'center',justifyContent:'center'
}
,currency:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,c.T13,{
fontSize:16,color:'#AE7633',lineHeight:55
}
),currencyPc:{
fontSize:20,fontWeight:'700',lineHeight:60
}
,couponCondition:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,c.T7,{
color:'#4C321E',textAlign:'center'
}
),couponConditionPc:Object.assign({

}
,c.T11),couponMoneyL:{
flexDirection:'row',alignItems:'flex-end',width:'100%',justifyContent:'center'
}
,closeIcon:{
position:'absolute',top:16
}
,couponLeftInfo:{
justifyContent:'center',alignItems:'center',flexDirection:'row',width:104,height:96
}
,couponLeftInfoPc:{
width:140,height:134
}
,couponRightInfo:{
width:127,height:96,justifyContent:'center'
}
,couponRightInfoPc:{
width:178,height:134
}
,closeTextL:{
alignItems:'center',marginTop:6
}
,closeTextLPc:{
alignItems:'center',marginTop:12
}
,closeText:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,c.T3,c.C17),closeImg:{
width:24,height:24
}
,receivedImg:{
width:80,height:76,marginTop:74,position:'absolute',zIndex:1,marginLeft:144
}
,receivedImgPc:{
width:120,height:114,marginTop:109,marginLeft:188
}
,receivedImgApp:{
left:0
}
,btnReceivedText:{
opacity:.4
}
,outModalMp:{
zIndex:9999
}

}
)
}

}
),"09cd660ce2e07cb84f16e330a73679cb77ce8809a1cf241656b564cd40c10bbc",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),n=e(r(d[2])),l=e(r(d[3])),s=e(r(d[4])),u=e(r(d[5])),c=e(r(d[6])),h=r(d[7]),p=e(r(d[8])),f=r(d[9]),v=e(r(d[10])),S=r(d[11]),y=e(r(d[12])),P=e(r(d[13])),w=r(d[14]),C=e(r(d[15])),L=r(d[16]),b=e(r(d[17])),T=r(d[18]);
// 函数
function x(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(x=function(){
return!!e
}
)()
}
var k={
1:'l2r',0:'t2b'
}
,j=0;
h.DeviceUtils.getStatusBarHeight().then((function(e){
j=e
}
)).catch((function(){

}
));
var N=(0,f.observer)(t=(function(e){
// 函数
function t(e: any): any {
var l,c,f,v;
return(0,n.default)(this,t),c=this,f=t,v=[e],f=(0,u.default)(f),(l=(0,s.default)(c,x()?Reflect.construct(f,v||[],(0,u.default)(c).constructor):f.apply(c,v))).tid='',l.wapTimer3=null,l.loadMore=!0,l.loadMore1=!0,l.pageNum=1,l.pageNum1=1,l.pageSize1=18,l.id="search"+(1e6*Math.random()).toFixed(),l.canClick=!0,l.originWidth=h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenWidth,l.isPad=function(){
// 变量
var e: any = l.originWidth;
return'medium'===(0,h.ScreenSize)(e)||'large'===(0,h.ScreenSize)(e)&&e<h.variables.safety_area
}
,l.getSize=function(){
// 变量
var e: any = l.originWidth;
return(0,h.ScreenSize)(e)
}
,l.isPadHorizontal=function(){
// 变量
var e: any = l.originWidth,t=l.state.height;
return h.ScreenUtils.isPadHorizontal(e,t)
}
,l.onBackTop=function(){
// 变量
var e: any = l.props.scroller;
'ios'===S.Platform.OS?setTimeout((function(){
e&&e.scrollTo&&e.scrollTo({
y:0,animated:!0
}
)
}
),0):e&&e.scrollTo({
y:0,animated:!0
}
)
}
,l.getEmptyRecommendPrd=function(){
l.setState({
noEmpty:!0,loading:!1
}
,(function(){
l._getRecommendedPrd()
}
))
}
,l.handleSkuCodes=function(e){
// 变量
var t: any = null==e?void 0:e.split('|');
return l.setState({
skuCodeList:t
}
),t.length>100?(l.pageNum=1,t.slice(0,100).join(',')):null==e?void 0:e.replaceAll('|',',')
}
,l._getTotalPage=function(){
return Math.ceil(l.state.skuCodeList.length/100)
}
,l._getQueryPrd=(0,o.default)((function*(){
// 变量
var e: any = !0,t=[];
l.setState({
showLoading:e,loadState:1
}
);
var o={
batchCode:l.state.batchCode
}
;
h.PlatformUtils.isApp()&&(o.version=yield l.getVersion()),(0,L.queryCouponInfo)(o).then((function(o){
if(null!=o&&o.success){
var n,s,u,c=null!=(n=null==o||null==(s=o.couponInfos)||null==(u=s[0])?void 0:u.applySbomCode)?n:'';
if(c){
var h=l.handleSkuCodes(c);
(0,L.getShopSkuByCondition)({
skuCodesStr:h
}
).then((function(o){
var n,s;
null!=o&&o.success&&(t=null!=(n=null==(s=o.data)?void 0:s.skuList)?n:[],l.state.skuCodeList.length>100?(l.loadMore=!0,l.setState({
resultList:t,loading:!1,showLoading:e,noEmpty:!1,loadState:1
}
)):(l.loadMore=!1,l.setState({
resultList:t,loading:!1,showLoading:e,noEmpty:!1,loadState:3
}
,(function(){
l._getRecommendedPrd()
}
))))
}
)).catch((function(){
l.setState({
showLoading:!1,loadState:2
}
)
}
)).finally((function(){
0===l.state.resultList.length&&l.setState({
noEmpty:!0
}
)
}
))
}
else l.getEmptyRecommendPrd()
}

}
)).catch((function(){
l.setState({
showLoading:!1,loadState:2
}
)
}
)).finally((function(){
0===l.state.resultList.length&&l.setState({
noEmpty:!0
}
)
}
))
}
)),l._getRecommendedPrd=function(){
var e,t,o=l.state.recommendList,n=l.pageNum1,s=l.state.totalCount1;
l.setState({
showLoading1:!0,loadState1:1
}
);
var u={
pageNumber:null==(e=l.pageNum1)?void 0:e.toString(),pageSize:null==(t=l.pageSize1)?void 0:t.toString(),searchSortField:'0',searchSortType:l.state.searchSortType,tid:l.tid,sid:l.state.sid,searchFlag:l.state.searchFlag,carrierCode:l.state.carrierCode
}
;
(0,L.queryShopPrd)(u).then((function(e){
if(null!=e&&e.success){
var t,u,c,h,p,f,v,S=null!=(t=null==e?void 0:e.data)?t:{

}
,y=null!=(u=null==S?void 0:S.page)?u:{

}
;
1===(n=null!=(c=null==y?void 0:y.pageNumber)?c:l.pageNum1)&&(o=[]),o=null!=(h=null==(p=o)?void 0:p.concat(null!=(f=null==S?void 0:S.resultList)?f:[]))?h:[],s=(null==y?void 0:y.totalRow)||l.state.totalCount1,0===(null==(v=o)?void 0:v.length)||s>n*l.pageSize1?(l.loadMore1=!0,l.pageNum1+=1,l.setState({
showLoading1:1!==l.pageNum1,loadState1:1,recommendList:o,pageNum1:l.pageNum+1,sid:null==S?void 0:S.sid,totalCount1:s,ruleId:null==S?void 0:S.ruleId
}
)):(l.loadMore1=!1,l.setState({
showLoading1:!0,loadState1:3,recommendList:o,pageNum1:l.pageNum1+1,sid:null==S?void 0:S.sid,totalCount1:s,ruleId:null==S?void 0:S.ruleId
}
))
}

}
)).catch((function(){
l.setState({
showLoading1:!1,loadState1:2,totalCount1:0
}
)
}
))
}
,l._getMorePrds=function(){
var e,t,o=null==(e=l.state.skuCodeList)||null==(t=e.slice(100*l.pageNum,100*(l.pageNum+1)))?void 0:t.join(','),n=l.state.resultList;
(0,L.getShopSkuByCondition)({
skuCodesStr:o
}
).then((function(e){
if(null!=e&&e.success){
var t,o,s=p.default.uniqBy(n.concat(null!=(t=null==(o=e.data)?void 0:o.skuList)?t:[]),'productId');
l.pageNum+=1,l.pageNum<l._getTotalPage()?(l.loadMore=!0,l.setState({
resultList:s,loadState:1
}
)):(l.loadMore=!1,l.setState({
resultList:s,loadState:3
}
,(function(){
l._getRecommendedPrd()
}
)))
}

}
)).catch((function(){
l.setState({
showLoading:!1,loadState:2
}
)
}
))
}
,l._loadMore=p.default.debounce((function(){
l.loadMore&&(l.loadMore=!1,l._getMorePrds())
}
),200),l._loadMore1=p.default.debounce((function(){
l.loadMore1&&(l.loadMore1=!1,l._getRecommendedPrd())
}
),200),l.getPrdAppUrl=function(e,t){
// 变量
var o: any = "vmall://com.vmall.client/product/detail?prdId="+e;
return t?o.concat('&skuCode=').concat(t):o
}
,l.onClickPrd=function(e){
l.canClick&&(l.canClick=!1,setTimeout((function(){
l.canClick=!0
}
),500),l.wapTimer3&&clearTimeout(l.wapTimer3),l.wapTimer3=setTimeout((function(){
// 变量
var t: any = e.productPageType,o=void 0===t?'':t,n=e.productId,l=e.skuCode;
String(o)?h.RouterUtils.gotoProductDetailAllByType(String(o),n,l):h.RouterUtils.gotoProductDetailAll(n,l)
}
),150))
}
,l.renderFlatlist=function(e){
return'web'===S.Platform.OS?(0,T.jsx)(S.View,{
style:[e.productWrap],children:l.renderProductList(e)
}
):(0,T.jsx)(T.Fragment,{
children:l.renderProductList(e)
}
)
}
,l.colNum=function(e){
return'l2r'===e?l.isPad()?l.isPadHorizontal()?3:2:1:'t2b'===e?l.isPad()?l.isPadHorizontal()?4:3:2:void 0
}
,l.colGutter=function(){
return l.isPad()&&l.isPadHorizontal()?12:8
}
,l.boxWidth=function(){
// 变量
var e: any = l.isPad()?48:32;
return l.originWidth-e
}
,l._renderScroll=function(e){
return'web'===S.Platform.OS?(0,T.jsx)(S.View,Object.assign({

}
,e)):(0,T.jsx)(S.ScrollView,Object.assign({

}
,e,{
removeClippedSubviews:!1
}
))
}
,l.loadPage=function(e){
// 变量
var t: any = l.state.loading;
return'web'===S.Platform.OS&&(document.body.style.overflow=t?'hidden':''),t?'web'===S.Platform.OS?(0,T.jsx)(S.View,{
style:e.loadWrap,children:l.loadingCon(e)
}
):l.loadingCon(e):null
}
,l.loadingCon=function(e){
return(0,T.jsxs)(S.View,{
style:[e.loadPage,{
height:'web'===S.Platform.OS?'100%':l.state.height-112-j
}
],children:[(0,T.jsx)(S.Image,{
style:[e.loadPageImg],source:h.DarkStore.darkBool?w.ImageArray.loadingDark:w.ImageArray.loading
}
),(0,T.jsx)(S.Text,{
style:[e.loadPageText],children:(0,h.t)('loading')
}
)]
}
)
}
,l.renderProductList=function(e){
// 变量
var t: any = l.state.layoutType,o=l.colNum(t),n='l2r'===t?12:8,s=(l.boxWidth()-(o-1)*n)/o;
return l.state.resultList.length>0?(0,T.jsxs)(S.View,{
style:[e.productList,{
paddingHorizontal:l.isPad()?24:16
}
],children:[(0,T.jsx)(w.GridLO,{
col:o,rowGutter:'l2r'===t?12:8,colGutter:l.colGutter(),pageGutter:0,dataArray:l.state.resultList,boxWidth:l.boxWidth(),containerType:'ScrollView',renderScrollComponent:function(e){
return l._renderScroll(e)
}
,initialNumToRender:l.state.resultList.length,loadMore:l._loadMore,renderItem:function(t){
// 变量
var o: any = t.item,n=t.index;
return l.renderProduct(o,n,e,s)
}

}
),l.renderFooter(e)]
}
):l.state.noEmpty?(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsxs)(S.View,{
style:e.emptyC,children:[(0,T.jsx)(S.Image,{
source:y.default.notyet,style:e.emptyImg
}
),(0,T.jsx)(S.Text,{
style:[e.emptyT,l.isPad()?e.prdAreaPadR:e.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:(0,h.t)('no_offering')
}
)]
}
),l.renderRecommentPrd(e)]
}
):null
}
,l.handlePrdData=function(e){
var t,o,n={

}
;
n=Object.assign({

}
,e);
// 变量
var l: any = h.Service.cmsCndProdPath+n.photoPath+'428_428_'+n.photoName;
n.promotionRules=n.promoLabels,n.imgUrl=l,n.prdName=n.briefName,n.originPrice=n.price,n.salePrice=void 0!==n.promoPrice?n.promoPrice:n.price,n.reviewCount=n.remarkNumber,n.goodReviewRate=100*(null!=(t=null==(o=n)?void 0:o.goodRate)?t:0);
// 变量
var s: Function = n,u=s.productPageType,c=void 0===u?'':u,p=s.productId,f=String(c)?h.RouterUtils.getProductDetailUrlForWebAllByType(String(c),p):h.RouterUtils.getProductDetailUrlForWebAll(p);
return n.wapurl=f,n.weburl=f,Object.prototype.hasOwnProperty.call(n,'isInv')||(n.isInv=1),n.activityPromInfoList=n.activityPromList,n
}
,l.renderProduct=function(e,t,o,n){
// 变量
var s: Function = l.handlePrdData(e),u=l.state.layoutType;
return(0,T.jsx)(S.View,{
style:o.productItemWrap,children:(0,T.jsx)(w.ProductItem,{
data:s,structure:u,type:'base',config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2,promotionTextLineNum:'l2r'===u?2:1
}
,onClick:function(){
return l.onClickPrd(e)
}
,iWidth:n,iHeight:'l2r'===u?157:'auto'
}
,s.productId)
}
)
}
,l.renderFooter=function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=l.state,n=o.resultList,s=o.loadState,u=o.loadState1,c=o.showLoading1,h=o.showLoading,p=o.recommendList;
return(0,T.jsxs)(T.Fragment,{
children:[3!==s||t?(0,T.jsx)(w.LoadingView,{
showLoading:t?c:h,position:l.state.loadingPostion,loadState:t?u:s,errorCallback:t?l._getRecommendedPrd:l._getQueryPrd,height:56,iconSize:24,titleStyle:e.lodingTitle
}
):l.renderRecommentPrd(e),t?n.length>=10&&(0,T.jsx)(S.View,{
style:{
height:20
}

}
):p.length>=10&&(0,T.jsx)(S.View,{
style:{
height:20
}

}
)]
}
)
}
,l.renderRecommentPrd=function(e){
// 变量
var t: any = l.state,o=t.layoutType,n=t.recommendList,s=t.noEmpty,u=l.colNum(o),c='l2r'===o?12:8,h=(l.boxWidth()-(u-1)*c)/u;
return(0,T.jsx)(T.Fragment,{
children:(null==n?void 0:n.length)>0?(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(S.Text,{
style:[e.recommendShopPrdText,s&&{
paddingHorizontal:l.isPad()?24:16
}
],children:'\u6ca1\u6709\u4f18\u60e0\u5238\u53ef\u7528\u5546\u54c1\u4e86\uff0c\u7ee7\u7eed\u901b\u901b\u5e97\u5185\u5546\u54c1'
}
),(0,T.jsxs)(S.View,{
style:[e.productList,s&&{
paddingHorizontal:l.isPad()?24:16
}
],children:[(0,T.jsx)(w.GridLO,{
col:u,rowGutter:c,colGutter:l.colGutter(),pageGutter:0,dataArray:n,boxWidth:l.boxWidth(),containerType:'ScrollView',renderScrollComponent:function(e){
return l._renderScroll(e)
}
,loadMore:l._loadMore1,initialNumToRender:null==n?void 0:n.length,renderItem:function(t){
// 变量
var o: any = t.item,n=t.index;
return l.renderProduct(o,n,e,h)
}

}
),l.renderFooter(e,!0)]
}
)]
}
):null
}
)
}
,l.getEmptyHeight=function(){
return l.state.height-112
}
,l.state={
showLoading:!0,showLoading1:!0,loadState:1,loadState1:1,loadingPostion:'bottom',layoutType:k[C.default.layoutType||0],searchFlag:'0',searchSortField:0,searchSortType:'desc',sid:void 0,ruleId:'',resultList:[],noEmpty:!1,firstEmpty:!1,loading:!0,isLogin:!1,carrierCode:'',width:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenWidth,height:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenHeight,recommendList:[],totalCount1:0,skuCodeList:[],batchCode:''
}
,l.onClickPrd=l.onClickPrd.bind(l),l
}
return(0,c.default)(t,e),(0,l.default)(t,[{
key:"getVersion",value:function(){
return new Promise((function(e){
var t;
h.PlatformUtils.isApp()?null!=S.NativeModules&&null!=(t=S.NativeModules.VmallNative)&&t.invokeNative&&S.NativeModules.VmallNative.invokeNative({
service:'common',action:'getEnv',params:{

}

}
).then((function(t){
var o;
e(null==(o=JSON.parse(t.networkFields))?void 0:o.version)
}
)).catch((function(){
e(0)
}
)):e(0)
}
))
}

}
,{
key:"componentDidMount",value:(f=(0,o.default)((function*(){
var e,t=this,o=this.props,n=o.route,l=o.batchCode,s=void 0===l?h.UrlUtils.getQueryStr('batchCode'):l,u=o.carrierCode,c=void 0===u?h.UrlUtils.getQueryStr('carrierCode'):u;
this.setState({
batchCode:s,carrierCode:c,isLogin:null==n||null==(e=n.params)?void 0:e.isLogin
}
,(function(){
'large'!==t.getSize()&&t._getQueryPrd()
}
)),this.lister4=S.DeviceEventEmitter.addListener('switchOrderType_shop',(function(e){
t.setState({
layoutType:k[null!=e?e:1]
}
)
}
))
}
)),function(){
return f.apply(this,arguments)
}
)
}
,{
key:"componentWillUnmount",value:function(){
this.eventListener&&this.eventListener.remove(),this.lister4&&this.lister4.remove(),this.wapTimer3&&clearTimeout(this.wapTimer3),this.canClick=!0,'web'===S.Platform.OS&&document.removeEventListener('scroll',this._onScrollWeb)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,o=t.carrierCode,n=t.pageType,l=this.state,s=l.batchCode,u=l.height;
return(0,T.jsx)(h.WithTheme,{
themeStyles:P.default,children:function(t,l,c){
return e.originWidth=c,(0,T.jsx)(S.View,{
style:[t.productWrap,h.DarkStore.darkBool?t.wrap:null,'web'===S.Platform.OS&&t.wrap,{
minHeight:'web'===S.Platform.OS?window.innerHeight+'px':u-112-j
}
,'large'===e.getSize()&&{
minHeight:'auto'
}
],children:'web'===S.Platform.OS?(0,T.jsx)(T.Fragment,{
children:'large'===e.getSize()?(0,T.jsx)(b.default,{
styles:t,carrierCode:o,pageType:n,batchCode:s,onClickPrd:e.onClickPrd
}
):(0,T.jsxs)(T.Fragment,{
children:[e.loadPage(t),(0,T.jsx)(S.View,{
nativeID:e.id,children:e.state.loading?null:(0,T.jsx)(T.Fragment,{
children:e.renderFlatlist(t)
}
)
}
)]
}
)
}
):(0,T.jsxs)(T.Fragment,{
children:[e.loadPage(t),e.state.loading?null:(0,T.jsx)(T.Fragment,{
children:e.renderFlatlist(t)
}
)]
}
)
}
)
}

}
)
}

}
]);
var f
}
)(v.default.PureComponent))||t;
_e.default=(0,h.Componentautoscaling)(N)
}
),"75a79305c81b9e255ac962ef199ae12ed5bf10d27a7c85a58b4705520cab8f7b",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","2491bc0caedfb1b71b39cbeccbe7ce34164125b61355b7e202827de377c71a30","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","522227780a3bd9027030c2c0d166943474dcd4fd2df06241863d9e610d7b3504","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
wrap:Object.assign({

}
,n.S32),productWrap:{
width:'100%'
}
,productList:{
width:'100%',overflow:'hidden',marginTop:8
}
,productItemWrap:{
width:'100%',height:'auto'
}
,lodingTitle:{
color:n.C13.color
}
,emptyImg:{
width:96,height:96
}
,emptyC:{
width:'100%',justifyContent:'center',alignItems:'center',marginVertical:24
}
,emptyT:Object.assign({
textAlign:'center'
}
,n.C15,{
fontFamily:o.PublicFont.fontFamilyBase
}
),prdAreaR:{
paddingLeft:16,paddingRight:16
}
,prdAreaPadR:{
paddingLeft:24,paddingRight:24
}
,posiFix:{
position:'web'===t.Platform.OS?'fixed':'absolute',width:'100%',backgroundColor:n.C32.color,zIndex:8
}
,loadPage:{
position:'absolute',zIndex:99,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:n.C32.color
}
,loadPageImg:{
width:72,height:72
}
,loadPageText:{
fontSize:14,color:n.C13.color+'99'
}
,loadWrap:{
position:'web'===t.Platform.OS?'fixed':'relative',top:0,left:0,width:'100%',bottom:0,zIndex:1
}
,recommendShopPrdText:{
fontSize:n.T7.fontSize,color:n.C13.color,opacity:n.C13.opacity,textAlign:'center',marginTop:16,marginBottom:8
}
,pcItemBox:{
width:'100%',maxWidth:1200,marginLeft:'auto',marginRight:'auto',marginBottom:40,zIndex:3
}
,index2:{
zIndex:2
}
,empty:{
marginTop:64,marginBottom:64,textAlign:'center',alignItems:'center'
}
,emptyTextWrap:{
marginTop:8
}
,productNoData:{
width:96,height:96,marginLeft:'auto',marginRight:'auto'
}
,emptyText:Object.assign({
fontFamily:'HYQiHei-FES'
}
,n.T7,n.C15),footer:Object.assign({

}
,n.T3,n.C15,{
textAlign:'center',marginBottom:10,marginTop:10,height:40
}
),prodInner:{
zIndex:1
}
,recommendText:{
fontFamily:'HYQiHei-FES',fontSize:24,color:'#000000',lineHeight:34,height:34,fontWeight:'500'
}
,recommendBox:{
justifyContent:'center',height:64
}

}
)
}

}
),"2491bc0caedfb1b71b39cbeccbe7ce34164125b61355b7e202827de377c71a30",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var o: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.sign=e.removeProductMark=e.queryView=e.querySignInfo=e.queryShopPrd=e.queryShopInfo=e.queryShopCert=e.queryProdMarkInfo=e.queryMarkedProducts=e.queryCouponInfo=e.queryConsumerServiceInfo=e.queryBatchLikeCount=e.markProduct=e.getShopSkuByCondition=e.getShopProdInfoListWithPage=e.getShopHotSearchWord=e.getRecommendShopList=e.getRecommendShopDynamics=e.getPageInfoListOfCMSAsync=e.getPageInfoListAsyncOfCMSForApk=e.getFollowedShopList=e.getFollowedShopDynamics=void 0;
// 变量
var t: any = o(r(d[1])),n=r(d[2]),p=r(d[3]),c=r(d[4]);
e.queryShopCert=function(o){
var t;
t=Number((0,c.getPortalStr)());
var p=n.Service.openApiDomain+"sc/shop/getCarrierCert?&portal="+t+"&lang="+n.MCP_LANG.CN+"&country="+n.MCP_COUNTRY.CN+"&carrierCode="+o;
return n.Http.get(p)
}
,e.queryShopInfo=function(o){
var t;
t=Number((0,c.getPortalStr)());
var p=n.Service.openApiDomain+"sc/shop/getShopBaseInfo?&portal="+t+"&lang="+n.MCP_LANG.CN+"&country="+n.MCP_COUNTRY.CN+"&carrierCode="+o;
return n.Http.get(p)
}
,e.getPageInfoListAsyncOfCMSForApk=function(o){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'3',p=arguments.length>2?arguments[2]:void 0,c=arguments.length>3?arguments[3]:void 0,u=n.Service.openApiDomain+"cms/page/getPageInfoListAsync",l={

}
;
return l=c?{
pageAlias:c||'',lang:n.MCP_LANG.CN,country:n.MCP_COUNTRY.CN,portal:t
}
:{
pageId:p||'',lang:n.MCP_LANG.CN,country:n.MCP_COUNTRY.CN,portal:t,carrierCode:o
}
,n.Http.get(u,l)
}
,e.getPageInfoListOfCMSAsync=function(o,t,p,c,u,l){
var C=n.Service.openApiDomain+"cms/page/getPageInfoListAsync?carrierCode="+t+"&lang="+n.MCP_LANG.CN+"&portal="+o+"&country="+n.MCP_COUNTRY.CN;
return p&&(C+="&pageId="+p),c&&(C=n.Service.openApiDomain+"cms/page/getPageInfoListAsync?lang="+n.MCP_LANG.CN+"&portal="+o+"&country="+n.MCP_COUNTRY.CN+"&pageAlias="+c),u&&(C+="&preview="+u),l&&(C+="&previewToken="+l),n.Http.get(C)
}
,e.queryShopPrd=function(o){
var t,c=n.Service.openApiDomain+"sc/shop/queryProductByKeywordInShop";
o.country=o.country||n.MCP_COUNTRY.CN,o.lang=o.lang||n.MCP_LANG.CN,o.personalizeSearch=o.personalizeSearch||'2',o.searchFlag=o.searchFlag||'1','2'===(null==o?void 0:o.searchSortField)?o.searchSortField='3':'3'===(null==o?void 0:o.searchSortField)?o.searchSortField='2':o.searchSortField=o.searchSortField||'0',o.carrierCode=o.carrierCode||'',o.keyWord=o.keyWord||'';
o.searchSortType={
desc:'1',asc:'0'
}
[null!=(t=null==o?void 0:o.searchSortType)?t:'desc'],o.topSpuList=o.topSpuList?JSON.stringify(o.topSpuList):'';
// 变量
var u: any = 2;
return u='large'===(0,n.ScreenSize)(p.Dimensions.get('window').width)?n.SALE_CHANNEL.web:n.PlatformUtils.isApp()?n.SALE_CHANNEL.android:n.SALE_CHANNEL.wap,o.saleChannel=u,o.pageNumber=o.pageNumber||'1',o.pageSize=o.pageSize||'20',n.Http.post(c,o)
}
,e.getShopHotSearchWord=function(o){
// 变量
var t: any = n.Service.openApiDomain+"sc/shop/getHotSearchWord";
return o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.carrierCode=o.carrierCode||'',n.Http.get(t,o)
}
,e.getFollowedShopList=function(o){
// 变量
var t: any = n.Service.openApiDomain+"sc/shop/getFollowedShopList",p=Number((0,c.getPortalStr)());
return o.portal=o.portal||(null==p?void 0:p.toString()),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.pageNumber=o.pageNumber||1,o.pageSize=o.pageSize||20,n.Http.get(t,o)
}
,e.getRecommendShopList=function(){
var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{

}
,t=n.Service.openApiDomain+"sc/shop/getRecommendShopList";
return o.lang=n.MCP_LANG.CN,o.country=n.MCP_COUNTRY.CN,n.Http.get(t,o)
}
,e.getShopProdInfoListWithPage=function(o){
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'1',p=n.Service.openApiDomain+"cms/page/getProdInfoListWithPage",c={
dataSourceList:o,lang:n.MCP_LANG.CN,portal:t,country:'CN'
}
;
return n.Http.post(p,c)
}
,e.getFollowedShopDynamics=function(o,t){
var p=void 0!==t&&''!==t,u=n.Service.openApiDomain+"sc/shop/"+(p?'getSpecifyShopDynamics':'getFollowedShopDynamics'),l=Number((0,c.getPortalStr)());
return p&&(o.carrierCodeList=t),o.channelCode='bop',o.portal=o.portal||(null==l?void 0:l.toString()),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.pageNumber=o.pageNumber||1,o.pageSize=o.pageSize||20,n.Http.get(u,o)
}
,e.getRecommendShopDynamics=function(o){
// 变量
var t: any = n.Service.openApiDomain+"sc/shop/getRecommendShopDynamics",p=Number((0,c.getPortalStr)());
return o.channelCode='bop',o.portal=o.portal||(null==p?void 0:p.toString()),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.pageNumber=o.pageNumber||1,o.pageSize=o.pageSize||20,n.Http.get(t,o)
}
,e.queryView=function(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/content/queryView",p=Number((0,c.getPortalStr)());
return o.portal=o.portal||(null==p?void 0:p.toString()),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,n.Http.get(t,o)
}
,e.queryBatchLikeCount=(function(){
var o=(0,t.default)((function*(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/content/queryBatchLikeCount",u=Number((0,c.getPortalStr)()),l='';
if(n.PlatformUtils.isApp()){
var C=yield n.DeviceUtils.getDeviceInfo(n.APP_INFOS.DEVICE_INFO);
l=null==C?void 0:C.uid
}
else'web'===p.Platform.OS&&(l=n.Cookies.get('uid')||'630086000001529891');
return o.userID=l,o.portal=o.portal||(null==u?void 0:u.toString()),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.ccsItemType=o.ccsItemType||'1',n.Http.get(t,o)
}
));
return function(t){
return o.apply(this,arguments)
}

}
)(),e.queryConsumerServiceInfo=function(o){
// 变量
var t: any = n.Service.openApiDomain+"csc/queryConsumerServiceInfo",u=(0,c.getPortalStr)();
return'ios'===p.Platform.OS&&(u='10'),o.portal=o.portal||u,o.carrierCode=o.carrierCode||'',n.Http.get(t,o)
}
,e.markProduct=function(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/product/mark";
return o.disPrdId=String(o.disPrdId),o.carrierCode=o.carrierCode||'',o.markType=o.markType||'',n.Http.post(t,o)
}
,e.queryProdMarkInfo=function(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/product/queryMarkInfo";
return o.carrierCode=o.carrierCode||'',o.disPrdList=o.disPrdList?JSON.stringify(o.disPrdList):'',n.Http.post(t,o)
}
,e.queryMarkedProducts=function(o){
var t,p,c,u,l=n.Service.openApiDomain+"mcp/product/queryMyMarked";
return o.filter={
carrierCode:null!=(t=null==o||null==(p=o.filter)?void 0:p.carrierCode)?t:'',markType:null!=(c=null==o||null==(u=o.filter)?void 0:u.markType)?c:'1'
}
,o.pageSize=o.pageSize||'20',o.pageNum=o.pageNum||'1',n.Http.post(l,o)
}
,e.removeProductMark=function(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/product/removeMark";
return o.disPrdId=String(o.disPrdId),n.Http.post(t,o)
}
,e.querySignInfo=function(o){
// 变量
var t: any = n.Service.openApiDomain+"ams/newSignIn/querySignInfo";
return o.activityCode=String(o.activityCode),n.Http.post(t,o)
}
,e.sign=function(o){
// 变量
var t: any = n.Service.openApiDomain+"ams/newSignIn/newSign";
return o.activityCode=String(o.activityCode),n.Http.post(t,o)
}
,e.queryCouponInfo=function(o){
// 变量
var t: any = n.Service.openApiDomain+"mcp/coupon/queryCouponInfo",u=(0,c.getPortalStr)();
return'ios'===p.Platform.OS&&(u='10'),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.portal=o.portal||u,o.batchCode=o.batchCode?"['"+o.batchCode+"']":[''],n.Http.get(t,o)
}
,e.getShopSkuByCondition=function(o){
// 变量
var t: any = n.Service.openApiDomain+"sc/shop/getShopSkuByCondition",u=(0,c.getPortalStr)();
return'ios'===p.Platform.OS&&(u='10'),o.lang=o.lang||n.MCP_LANG.CN,o.country=o.country||n.MCP_COUNTRY.CN,o.portal=o.portal||u,o.skuCodesStr=o.skuCodesStr?""+o.skuCodesStr:'',n.Http.get(t,o)
}

}
),"896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),o=e(_r(d[3])),r=e(_r(d[4])),i=e(_r(d[5])),a=_r(d[6]),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = y(t);
if(n&&n.has(e))return n.get(e);
var o={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var a: any = r?Object.getOwnPropertyDescriptor(e,i):null;
a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]
}
return o.default=e,n&&n.set(e,o),o
}
)(_r(d[7])),u=_r(d[8]),l=e(_r(d[9])),c=_r(d[10]),h=_r(d[11]),p=e(_r(d[12])),f=_r(d[13]);
// 函数
function y(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(y=function(e){
return e?n:t
}
)(e)
}
// 函数
function v(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(v=function(){
return!!e
}
)()
}
var S=(function(e){
// 函数
function s(e: any): any {
var n,i,a,l;
return(0,t.default)(this,s),i=this,a=s,l=[e],a=(0,r.default)(a),(n=(0,o.default)(i,v()?Reflect.construct(a,l||[],(0,r.default)(i).constructor):a.apply(i,l))).pageIndex1=1,n.pageIndex=1,n.ruleId='',n.tid='',n.totalCount1=0,n.totalCount=0,n.handleSkuCodes=function(e){
// 变量
var t: any = null==e?void 0:e.split('|');
return n.setState({
skuCodeList:t
}
),t.length>100?(n.pageIndex=1,t.slice(0,100).join(',')):e.replaceAll('|',',')
}
,n._getTotalPage=function(){
return Math.ceil(n.state.skuCodeList.length/100)
}
,n._getMorePrds=function(){
var e,t,o=null==(e=n.state.skuCodeList)||null==(t=e.slice(100*(n.pageIndex-1),100))?void 0:t.join(','),r=n.state.itemList;
(0,h.getShopSkuByCondition)({
skuCodesStr:o
}
).then((function(e){
if(null!=e&&e.success){
var t,o,i=p.default.uniqBy(r.concat(null!=(t=null==(o=e.data)?void 0:o.skuList)?t:[]),'productId');
n.setState({
itemList:i
}
)
}

}
)).catch((function(){
n.pageIndex=1,n.setState({
itemList:[]
}
)
}
))
}
,n.itemlist=[],n.receiveRef=function(e,t){
e&&(e.exposeObj=t,n.itemlist.push(e))
}
,n.renderResult=function(e){
// 变量
var t: any = n.state,o=t.firstRenderResultEmpty,r=t.itemList;
return o?n.readerEmpty(e):(0,f.jsx)(u.View,{
style:e.prodInner,children:n.flatList(e,r)
}
)
}
,n.state={
sid:'',itemList:[],showLoading:!1,loadState:1,recommendList:[],isLoading:!1,isReaderEmpty:!1,firstRenderResultEmpty:!1,searchResultPageProdShow:'true',skuCodeList:[]
}
,n.getCurrentPage1=n.getCurrentPage1.bind(n),n
}
return(0,i.default)(s,e),(0,n.default)(s,[{
key:"getCurrentPage1",value:function(e){
this.pageIndex1=e,this.getRecommendResult(!0)
}

}
,{
key:"getCurrentPage",value:function(e){
this.pageIndex=e,this._getMorePrds()
}

}
,{
key:"getSeachResult",value:function(){
var e=this,t={
batchCode:this.props.batchCode||a.UrlUtils.getQueryStr('batchCode')
}
;
(0,h.queryCouponInfo)(t).then((function(t){
if(null!=t&&t.success){
var n,o,r,i=null!=(n=null==t||null==(o=t.couponInfos)||null==(r=o[0])?void 0:r.applySbomCode)?n:'';
if(i){
// 变量
var a: any = e.handleSkuCodes(i);
(0,h.getShopSkuByCondition)({
skuCodesStr:a
}
).then((function(t){
var n,o;
null!=t&&t.success&&e.setState({
itemList:e.handleProData(null!=(n=null==(o=t.data)?void 0:o.skuList)?n:[]),isLoading:!1,firstRenderResultEmpty:!1
}
)
}
)).catch((function(){
e.setState({
itemList:[],firstRenderResultEmpty:!0
}
)
}
)).finally((function(){
0===e.state.itemList.length&&e.setState({
firstRenderResultEmpty:!0
}
)
}
))
}
else e.setState({
itemList:[],firstRenderResultEmpty:!0
}
)
}

}
)).catch((function(){
e.setState({
itemList:[],firstRenderResultEmpty:!0
}
)
}
)).finally((function(){
0===e.state.itemList.length&&e.setState({
firstRenderResultEmpty:!0
}
)
}
))
}

}
,{
key:"getRecommendResult",value:function(){
// 变量
var e: any = this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
t||(this.pageIndex1=1,this.pageButtonChild1.resetPageNum(1));
var n=this.props.carrierCode,o={
pageNumber:this.pageIndex1,pageSize:20,searchSortField:'0',searchSortType:'1',tid:this.tid,sid:this.state.sid,searchFlag:this.state.searchFlag,carrierCode:n
}
;
(0,h.queryShopPrd)(o).then((function(n){
var o,r,i=null!=(o=null==n?void 0:n.data)?o:{

}
,a=null!=(r=null==i?void 0:i.page)?r:{

}
;
e.ruleId=i.ruleId,t&&(e.recommendList=[]),e.totalCount1=Math.ceil(a.totalRow/20),e.setState({
recommendList:e.handleProData(i.resultList,'1',null==i?void 0:i.sid),totalCount1:Math.ceil(a.totalRow/20)
}
)
}
)).catch((function(){
e.pageIndex1=1,e.setState({
recommendList:[]
}
)
}
))
}

}
,{
key:"handleProData",value:function(e,t,n){
// 变量
var o: any = this;
return 291,e.forEach((function(e,r){
e.promotionRules=e.promoLabels;
// 变量
var i: any = a.Service.cmsCndProdPath+e.photoPath+'428_428_'+e.photoName;
e.prdName=e.briefName,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.searchType=t,e.ruleId=o.ruleId,e.location=Math.floor(r)+1,e.sid=n,e.sellingPoint='',e.goodReviewRate=e.goodRate,e.reviewCount=e.rateCount,e.goodReviewRate=e.goodRate;
// 变量
var s: Function = (0,a.getBestFitImgUrl)(291,291,i);
e.imgUrl=s,Object.prototype.hasOwnProperty.call(e,'isInv')||(e.isInv=1),e.activityPromInfoList=e.activityPromList
}
)),e
}

}
,{
key:"flatList",value:function(e,t){
// 变量
var n: any = this;
return 291,(0,f.jsx)(u.View,{
style:e.prodInner,children:(0,f.jsx)(u.View,{
style:{
display:'flex',flexDirection:'row',width:1200,flexWrap:'wrap'
}
,children:null==t?void 0:t.map((function(e,t){
return(0,f.jsx)(u.View,{
style:{
width:291,marginRight:0!==t&&(t+1)%4==0?0:12,marginBottom:12
}
,children:(0,f.jsx)(c.ProductItem,{
receiveRef:function(t){
return n.receiveRef(t,e)
}
,structure:'base',type:'t2b',data:e,config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:1
}
,iWidth:291,onClick:function(){
return n.onPress(e,t)
}
,onClickButton:function(){
return n.onPress(e,t)
}

}
,e.productId)
}
,e.productId)
}
))
}
)
}
)
}

}
,{
key:"getRecommendList",value:function(e){
// 变量
var t: any = this.state.recommendList;
return t.length?(0,f.jsxs)(u.View,{
style:e.prodInner,children:[(0,f.jsx)(u.View,{
style:e.recommendBox,children:(0,f.jsx)(u.Text,{
style:e.recommendText,children:'\u6ca1\u6709\u4f18\u60e0\u5238\u53ef\u7528\u5546\u54c1\u4e86\uff0c\u7ee7\u7eed\u901b\u901b\u5e97\u5185\u5546\u54c1'
}
)
}
),(0,f.jsx)(u.View,{
style:e.prodInner,children:this.flatList(e,t)
}
)]
}
):null
}

}
,{
key:"readerEmpty",value:function(e){
return(0,f.jsxs)(u.View,{
style:e.empty,children:[(0,f.jsx)(u.Image,{
source:l.default.notyet,style:e.productNoData
}
),(0,f.jsx)(u.View,{
style:[e.emptyTextWrap,{
maxWidth:796
}
],children:(0,f.jsx)(u.Text,{
ellipsizeMode:'clip',numberOfLines:2,style:e.emptyText,children:(0,a.t)('no_offering')
}
)
}
)]
}
)
}

}
,{
key:"renderItemBox",value:function(e,t,n,o){
var r,i=this,s=this.props.width;
(0,a.ScreenSize)(s);
return 0,12,r=((s=s>1200?1200:s)-0-12*(n-1))/n,(0,f.jsx)(u.View,{
style:{
marginTop:12,marginLeft:12
}
,children:(0,f.jsx)(c.ProductItem,{
receiveRef:function(t){
return i.receiveRef(t,e)
}
,structure:'base',type:'t2b',data:e,config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2
}
,iWidth:r,onClick:function(){
return i.onPress(e,o)
}
,onClickButton:function(){
return i.onPress(e,o)
}

}
,e.productId)
}
)
}

}
,{
key:"onPress",value:function(e,t){
(0,this.props.onClickPrd)(e,t)
}

}
,{
key:"componentDidMount",value:function(){
this.tid=a.BuildParams.getTid(),this.getSeachResult(),this.getRecommendResult(!1)
}

}
,{
key:"componentWillUnmount",value:function(){

}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state.searchResultPageProdShow,n=this.props.styles;
return(0,f.jsxs)(u.View,{
style:n.pcItemBox,children:[this.renderResult(n),(0,f.jsx)(c.SearchPageButton,{
searchResultPageProdShow:t,ref:function(t){
e.pageButtonChild=t
}
,isSearch:!0,totalPage:this._getTotalPage(),pageCallbackFn:this.getCurrentPage
}
),this.getRecommendList(n),(0,f.jsx)(c.SearchPageButton,{
searchResultPageProdShow:t,ref:function(t){
e.pageButtonChild1=t
}
,isSearch:!0,totalPage:this.totalCount1,pageCallbackFn:this.getCurrentPage1
}
)]
}
)
}

}
])
}
)(s.Component);
S.defaultProps={
id:'6547'
}
;
_e.default=(0,a.Componentautoscaling)(S)
}
),"522227780a3bd9027030c2c0d166943474dcd4fd2df06241863d9e610d7b3504",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var o: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.MapComponents=void 0;
var n=r(d[1]),p=o(r(d[2])),t=o(r(d[3])),u=o(r(d[4])),s=o(r(d[5])),l=o(r(d[6])),c=o(r(d[7])),C=r(d[8]),h=(0,n.SubTabWrapper)(null,n.handleStyleChange,n.JsonConvert,C.MapComponents),b={
shopPicture:n.ShopPicture
}
,f=(0,n.getImageCard)(b);
e.MapComponents={
base:n.BaseComponent,blank:n.BlankComponent,groupComponent:n.groupComponent,ad:f,prod:n.Product,icon_grid:n.IconGrid,subTabSet:h,rushbuy:n.LimitBuy,coupon:n.Coupon,shop:p.default,prodRankList:n.prodRankList,shopProdList:t.default,collectShop:n.Coupon,shopBrand:u.default,quickSelect:s.default,shopDynamic:c.default,shopSignIn:l.default
}

}
),"9c9a9dacf4e38e28f532beb58b1a9bc65c14b22314b9b816c6be7377bf5aa042",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","b1f64471da748db7ce4a9a055df3f635d5d5e3ae7cccc681d73ca876236ae616","54bc0c7a14252b010395baec725c3a22c3d558d7b99faae7d8f8c69a27a27d97","ee7eae8b08625fb143d8ce18587c417e437c6469b5e6a45ed367ffcd9b5b3207","4e790fe8456e87da3aa62216fd0df141f7c4a672dd74bd06cc65285242e311e6","9952872f4c5292a04e18536b409279c69410bbcf584d253244d60b71d7abad11","6166d31860196716618663ea178e5e067e9fb54dd62a41333ece468a5f59f096","dc341e3a6e48889be1b4c3cd878559337c8c56fb10de43401816c02f315c28d7"]);

__d((function(g,r,_i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),i=e(r(d[2])),n=e(r(d[3])),l=e(r(d[4])),s=e(r(d[5])),u=e(r(d[6])),c=r(d[7]),h=r(d[8]),p=e(r(d[9])),f=e(r(d[10])),v=r(d[11]),y=r(d[12]),S=e(r(d[13])),w=r(d[14]),C=e(r(d[15])),I=e(r(d[16])),x=e(r(d[17])),b=r(d[18]),L=r(d[19]),R=r(d[20]),k=r(d[21]);
// 函数
function T(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(T=function(){
return!!e
}
)()
}
var P='function'==typeof p.default.round?p.default.round:b.cusRound;
(0,c.EnvService)(c.env);
var F=(0,v.observer)(t=(function(e){
// 函数
function t(e: any): any {
var o,n,u,p;
return(0,i.default)(this,t),n=this,u=t,p=[e],u=(0,s.default)(u),(o=(0,l.default)(n,T()?Reflect.construct(u,p||[],(0,s.default)(n).constructor):u.apply(n,p))).receiveRef='',o.itemlist=[],o.originWidth=c.CommonUtils.getWindowSize(o.props.pageType).screenWidth,o.isMp=c.PlatformUtils.isMp(),o.isPadHorizonta=function(){
// 变量
var e: any = o.originWidth;
return!(o.state.height>e)
}
,o._getLoginStatus=function(){
// 变量
var e: any = o.state.isLogin;
if(!e)if('web'===y.Platform.OS){
// 变量
var t: any = encodeURIComponent(window.location.href),i=c.PlatformUtils.isPc(o.originWidth)?c.env.webDomain+"account/login?url="+t:c.env.wapDomain+"account/applogin?url="+t;
c.RouterUtils.gotoPage(i)
}
else if(c.PlatformUtils.isMp())c.DeviceUtils.getUserProfile();
else if(c.PlatformUtils.isApp()){
c.RouterUtils.gotoPage('vmall://com.vmall.client/home/login')
}
return e
}
,o.setmergeStyle=function(){
// 变量
var e: any = o.props.styleChange,t=(0,c.ScreenSize)(o.originWidth);
return o.isPad()&&o.isPadHorizonta()&&(t='large'),c.CommonUtils.isEmpty(e)?'':c.CommonUtils.getChangeStyle(e,t)
}
,o.isShowHalfStar=function(e,t){
return e-t>0&&t+1-e>0
}
,o.renderStar=function(e,t,i,n){
// 变量
var l: any = o.state.starRanking;
return(0,k.jsx)(k.Fragment,{
children:o.isMp?(0,k.jsx)(y.Image,{
source:{
uri:n?x.default.starHalf:i<l?x.default.starRed:x.default.starLight
}
,style:{
width:16,height:16
}

}
,i):(0,k.jsx)(h.SvgIcon,{
normalCol:i<l?e.C35.color:t?e.C17.color:e.C38.color,opacity:i<l?1:t?.4:.1,iconName:n?'star_half':'ic_star',isDefault:n,width:16,height:16,order:t&&0,backCol:e.C17.color,backOpacity:.4
}
,i)
}
)
}
,o.isShopInfoPage=function(){
return o.props.pageCatCode===R.pageCategory.shopInfo.pageCatCode
}
,o.handleFollowData=function(e){
if(!o.isShopInfoPage()){
// 变量
var t: any = o.state,i=t.isFollow,n=t.followerCount,l='';
if(!o.state.isFollow||void 0!==e){
// 变量
var s: Function = o.isMp&&void 0!==e?e:1;
if((n=1===s?n+1:n-1)>=1e4)l=P(n/1e4,2).toFixed(2)+"\u4e07";
else l=""+n;
o.setState({
isFollow:!i,followerCount:n,followerCountShow:l
}
,(function(){
c.ShopStore.setFollow(String(o.state.isFollow))
}
)),o.followEventClickByLoad(s)
}

}

}
,o.handleCloseModal=function(){
o.setState({
showUnfollow:!1
}
)
}
,o.renderMoreIcon=function(e,t){
return o.isMp?(0,k.jsx)(y.Image,{
source:{
uri:x.default.arrowRight
}
,style:{
width:13,height:13
}

}
):(0,k.jsx)(h.SvgIcon,{
iconName:"ic_seedetail",normalCol:e.bgImg?t.C25.color:t.C24.color,opacity:e.bgImg?t.C25.opacity:t.C24.opacity,width:13,height:13
}
)
}
,o.state={
isFollow:!1,isLogin:!1,mergeStyle:null,shopName:'',shopAvatar:'',followerCount:null,followerCountShow:'',consignment:1,starRanking:0,isShow:!1,showUnfollow:!1,modalId:"modal-unfollow-"+c.CommonUtils.randomString(6)
}
,o.closeModal=o.closeModal.bind(o),o
}
return(0,u.default)(t,e),(0,n.default)(t,[{
key:"isPad",value:function(){
// 变量
var e: any = this.originWidth;
return'medium'===(0,c.ScreenSize)(e)||'large'===(0,c.ScreenSize)(e)&&e<c.variables.safety_area
}

}
,{
key:"_isLogin",value:(C=(0,o.default)((function*(){
var e,t=null!=(e=c.AppStore.isLogin)?e:yield c.LoginUtils.getLoginStatus();
return this.setState({
isLogin:t
}
),t
}
)),function(){
return C.apply(this,arguments)
}
)
}
,{
key:"isFollowShop",value:(v=(0,o.default)((function*(){
// 变量
var e: any = this;
if(yield this._isLogin()){
// 变量
var t: any = c.Service.openApiDomain+"sc/shop/getIsFollow?lang="+c.MCP_LANG.CN+"&country=CN",o=this.props.carrierCode||'';
c.Http.get(t,{
carrierCodeList:o?"['"+o+"']":[''],portal:(0,L.getPortalStr)(this.originWidth)
}
).then((function(t){
var i=t.data||{

}
;
i.followMap&&p.default.has(i.followMap,o)&&p.default.get(i.followMap,o)&&e.setState({
isFollow:p.default.get(i.followMap,o)
}
,(function(){
c.ShopStore.setFollow(String(e.state.isFollow))
}
))
}
))
}

}
)),function(){
return v.apply(this,arguments)
}
)
}
,{
key:"followEventClickByLoad",value:function(e){
var t,o,i,n,l,s=this.props,u=s.resSiteCode,h=void 0===u?'':u,p=s.resSiteName,f=void 0===p?'':p,v=s.pageCatCode,y=void 0===v?'':v,S=s.pageCatName,w=void 0===S?'':S;
c.EventTracking.eventTracingReport({
actionCode:c.PlatformUtils.isWap(this.originWidth)?'200580002':'100660002',actionName:'\u70b9\u51fb\u5173\u6ce8\u6309\u94ae\u4e0a\u62a5',eventType:c.EVENT_TYPE.EVENT_TYPE_CLICK,pageId:null!=(t=null==(o=this.props)||null==(i=o.pageId)?void 0:i.toString())?t:'',content:{
CarrierCode:null!=(n=null==(l=this.props)?void 0:l.carrierCode)?n:'',click:'1',type:0===e?'2':'1'
}
,resSiteCode:h,resSiteName:f,pageCatCode:y,pageCatName:w
}
),c.EventTracking.execReportData('',!0)
}

}
,{
key:"doFollowShop",value:function(e){
// 变量
var t: any = this;
if(this._getLoginStatus()){
// 变量
var o: any = c.Service.openApiDomain+"sc/shop/followShop?lang="+c.MCP_LANG.CN+"&country=CN",i=this.props.carrierCode||'';
c.Http.post(o,{
followType:e,carrierCode:i,portal:(0,L.getPortalStr)(this.originWidth)
}
).then((function(o){
if(null!=o&&o.success){
// 变量
var i: any = t.state,n=i.isFollow,l=i.followerCount,s='';
if((l=1===e?l+1:l-1)>=1e4)s=P(l/1e4,2).toFixed(2)+"\u4e07";
else s=""+l;
t.setState({
isFollow:!n,followerCount:l,followerCountShow:s
}
,(function(){
c.ShopStore.setFollow(String(t.state.isFollow)),t.isShopInfoPage()&&y.DeviceEventEmitter.emit('brandFollowShop',e)
}
))
}
else(0,b.showToast)(o);
t.followEventClickByLoad(e)
}
))
}

}

}
,{
key:"getUserId",value:(f=(0,o.default)((function*(){
// 变量
var e: any = '';
if(c.PlatformUtils.isApp()){
// 变量
var t: any = yield c.DeviceUtils.getDeviceInfo(c.APP_INFOS.DEVICE_INFO);
e=null==t?void 0:t.uid
}
else'web'===y.Platform.OS&&(e=c.Cookies.get('uid')||'');
return e
}
)),function(){
return f.apply(this,arguments)
}
)
}
,{
key:"handlershopInfo",value:function(){
// 变量
var e: any = this,t=this.props.carrierCode;
(0,w.queryShopInfo)(t).then((function(t){
if(t){
var o=t.data||{

}
;
if(o.shopBaseInfoVo){
// 变量
var i: any = o.shopBaseInfoVo.shopName||'',n=o.shopBaseInfoVo.shopAvatar||'',l=o.shopBaseInfoVo.followerCount||-1,s=o.shopBaseInfoVo.consignment||1,u=o.shopDSRVo&&o.shopDSRVo.starRanking>=0?o.shopDSRVo.starRanking:-1,c='';
if(l>=1e4)c=P(l/1e4,2).toFixed(2)+"\u4e07";
else c=""+l;
e.setState({
shopName:i,shopAvatar:n,followerCount:l,followerCountShow:c,consignment:s,starRanking:u,isShow:!0
}
)
}
else e.setState({
isShow:!1
}
)
}

}
))
}

}
,{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.isFollowShop(),this.handlershopInfo(),this.followListener=y.DeviceEventEmitter.addListener('brandFollowShop',this.handleFollowData),this.eventListener=y.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
'login'===t.service&&'isLogin'===t.action&&t&&'boolean'==typeof(null==t?void 0:t.param.isLogin)&&!0===Boolean(null==t?void 0:t.param.isLogin)&&e.setState({
isLogin:!!t.param.isLogin
}
)
}
)),this.mpLoginListener=y.DeviceEventEmitter.addListener('mpLoginSuccess',(function(){
e.setState({
isLogin:!0
}
)
}
)),this.mpLogoutListener=y.DeviceEventEmitter.addListener('mpLogoutSuccess',(function(){
e.setState({
isLogin:!1
}
)
}
))
}

}
,{
key:"componentWillUnmount",value:function(){
var e,t,o,i;
null==(e=this.followListener)||e.remove(),null==(t=this.eventListener)||t.remove(),null==(o=this.mpLoginListener)||o.remove(),null==(i=this.mpLogoutListener)||i.remove()
}

}
,{
key:"goShopInfo",value:function(){
if(!this.props.isShopInfo){
if(this.props.clickItem(),this.isMp){
var e={
configInfo:encodeURIComponent(this.props.configInfo),pageId:encodeURIComponent(this.props.pageId),pageType:encodeURIComponent(this.props.pageType),carrierCode:encodeURIComponent(this.props.carrierCode)
}
;
return c.RouterUtils.gotoPage("/packageRnShopBase/index?configInfo="+e.configInfo+"&pageId="+e.pageId+"&pageType="+e.pageType+"&carrierCode="+e.carrierCode)
}
(0,this.props.navigation.navigate)('ShopInfo',{
configInfo:this.props.configInfo,pageId:this.props.pageId,pageType:this.props.pageType,carrierCode:this.props.carrierCode||''
}
)
}

}

}
,{
key:"_renderStarSvg",value:function(e,t){
for(var o=[],i=this.state.starRanking,n=0;
n<5;
n++){
// 变量
var l: any = this.isShowHalfStar(i,n);
o.push(this.renderStar(e,t,n,l))
}
return o
}

}
,{
key:"closeModal",value:function(){
if('web'===y.Platform.OS){
// 变量
var e: any = document.getElementById(this.state.modalId);
p.default.isEmpty(e)||document.body.removeChild(e)
}
this.handleCloseModal()
}

}
,{
key:"bgImgRender",value:function(e){
// 变量
var t: any = e._styles,o=e.mergeStyle,i=e.width,n=e.margin,l=e.size;
return o.bgImg?(0,k.jsx)(y.View,{
style:[t.backImgStyle,t.maskLayer,c.PlatformUtils.isApp()&&{
width:i-2*n
}
,'large'===l&&{
borderRadius:0
}
]
}
):null
}

}
,{
key:"storeImgRender",value:function(e){
// 变量
var t: any = e._styles,o=e.size,i=this.state.shopAvatar;
return(0,k.jsx)(y.View,{
style:[t.imageWrap,'large'===o&&t.imageWrapLarge],children:(0,k.jsx)(h.FastImageView,{
imgUri:i,imgStyle:t.shopImage
}
)
}
)
}

}
,{
key:"infoWrapRender",value:function(e){
// 变量
var t: any = e._styles,o=e.mergeStyle,i=e.theme;
return(0,k.jsxs)(y.View,{
style:t.inforamtionWrap,children:[this.shopWrapRender({
_styles:t,mergeStyle:o,theme:i
}
),this.starWrapRender({
_styles:t,mergeStyle:o,theme:i
}
)]
}
)
}

}
,{
key:"shopWrapRender",value:function(e){
var t,o,i,n=e._styles,l=e.mergeStyle,s=e.theme,u=this.state,c=u.shopName,h=u.consignment;
return(0,k.jsxs)(y.View,{
style:n.shopWrap,children:[(0,k.jsx)(y.Text,{
style:[n.shopName,l.bgImg&&n.bgShopName,!l.bgImg&&(null==l||null==(t=l.textStyle)?void 0:t.color)&&(null==l?void 0:l.textStyle)],numberOfLines:1,ellipsizeMode:'tail',children:c
}
),!this.props.isShopInfo&&(0,k.jsx)(y.View,{
children:this.renderMoreIcon(l,s)
}
),0===h?(0,k.jsx)(S.default,{
start:{
x:0,y:0
}
,end:{
x:1,y:0
}
,colors:[null==s||null==(o=s.C40)?void 0:o.color[0],null==s||null==(i=s.C40)?void 0:i.color[1]],style:n.shopTag,children:(0,k.jsx)(y.View,{
children:(0,k.jsx)(y.Text,{
style:n.TagText,children:"\u81ea\u8425"
}
)
}
)
}
):(0,k.jsx)(k.Fragment,{

}
)]
}
)
}

}
,{
key:"starWrapRender",value:function(e){
var t,o=e._styles,i=e.mergeStyle,n=e.theme,l=this.state,s=l.starRanking,u=l.followerCount,c=l.followerCountShow;
return(0,k.jsxs)(y.View,{
style:o.starWrap,children:[s>-1&&this._renderStarSvg(n,null==i?void 0:i.bgImg),u>0?(0,k.jsx)(y.View,{
style:o.attentionsNum,children:(0,k.jsxs)(y.Text,{
style:[o.attentionsNumText,i.bgImg&&o.bgAttentionsNumText,!i.bgImg&&(null==i||null==(t=i.textStyle)?void 0:t.color)&&(null==i?void 0:i.textStyle)],numberOfLines:1,ellipsizeMode:'tail',children:[c,"\u4eba\u5173\u6ce8"]
}
)
}
):(0,k.jsx)(k.Fragment,{

}
)]
}
)
}

}
,{
key:"followedTextRender",value:function(e){
// 变量
var t: any = this,o=e._styles,i=e.mergeStyle;
return(0,k.jsx)(y.TouchableOpacity,{
style:[o.attentionsBtnY,i.bgImg&&o.bgAttentionsBtnY],onPress:function(){
t.setState({
showUnfollow:!0
}
)
}
,children:(0,k.jsx)(y.Text,{
style:[o.attentionsBtnYText,i.bgImg&&o.bgAttentionsBtnYText,c.PlatformUtils.isAndroid()&&o.lineHeight26],children:(0,c.t)('followed')
}
)
}
)
}

}
,{
key:"notFollowedTextRender",value:function(e){
// 变量
var t: any = this,o=e._styles,i=e.mergeStyle;
return(0,k.jsx)(y.TouchableOpacity,{
style:[o.attentionsBtnN,i.bgImg&&o.bgAttentionsBtnN],onPress:function(){
t.doFollowShop(1)
}
,children:(0,k.jsx)(y.Text,{
style:[o.attentionsBtnNText,i.bgImg&&o.bgAttentionsBtnNText,c.PlatformUtils.isAndroid()&&o.lineHeight26],children:(0,c.t)('not_follow')
}
)
}
)
}

}
,{
key:"followOrNotModalRender",value:function(e){
// 变量
var t: any = this,o=e._styles,i=this.state,n=i.modalId,l=i.showUnfollow;
return(0,k.jsx)(h.Modal,{
modalId:n,modalVisible:l,modalInnerStyle:o.modalInnerStyle,title:this.isMp?(0,c.t)('tips'):(0,k.jsx)(y.Text,{
style:o.modalTitle,children:(0,c.t)('tips')
}
),content:this.isMp?(0,c.t)('unfollowTips'):(0,k.jsx)(y.Text,{
style:o.modalContent,children:(0,c.t)('unfollowTips')
}
),onCancel:this.closeModal,buttonLine:!1,setDocOverflowY:!1,buttonList:[{
onPress:function(){
t.doFollowShop(0),t.closeModal()
}
,text:(0,c.t)('unfollow'),style:o.modalLeftBtn
}
,{
onPress:function(){
t.closeModal()
}
,text:(0,c.t)('thinkTwice'),style:o.modalRightBtn
}
]
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state.isFollow,o=c.ShopStore.isFollow;
if(!this.state.isShow)return null;
// 变量
var i: any = this.setmergeStyle();
return(0,k.jsx)(c.WithTheme,{
themeStyles:I.default,children:function(n,l,s){
var u;
e.originWidth=s,'collectFollow'===o&&e.handleFollowData();
var p=(0,c.ScreenSize)(s),f='small'===p?16:24;
return(0,k.jsxs)(y.View,{
ref:function(t){
e.receiveRef=t,t&&e.itemlist.push(t)
}
,children:[(0,k.jsxs)(h.ImageBackground,{
imgStyle:[i.bgImg&&Object.assign({

}
,n.backImgStyle,{
borderRadius:16
}
),'large'===p&&{
borderRadius:0
}
],style:[n.container,{
marginLeft:f,marginRight:f
}
,'large'===p&&n.largeContainer,null!=i&&null!=(u=i.imgStyle)&&u.backgroundColor?null==i?void 0:i.imgStyle:{

}
],imgViewStyle:['large'!==p&&Object.assign({

}
,n.bgBorder,{
width:s-2*f
}
)],imgUri:null==i?void 0:i.bgImg,resizeMode:"cover",children:[e.bgImgRender({
_styles:n,mergeStyle:i,width:s,margin:f,size:p
}
),(0,k.jsxs)(y.TouchableOpacity,{
style:{
flexDirection:'row',width:'80%'
}
,onPress:function(){
e.goShopInfo()
}
,children:[e.storeImgRender({
_styles:n,size:p
}
),e.infoWrapRender({
_styles:n,mergeStyle:i,theme:l
}
)]
}
),(0,k.jsx)(y.View,{
style:[n.attentionsWrap,'large'===p&&n.largeAttentionsWrap],children:t?e.followedTextRender({
_styles:n,mergeStyle:i
}
):e.notFollowedTextRender({
_styles:n,mergeStyle:i
}
)
}
)]
}
),e.followOrNotModalRender({
_styles:n
}
)]
}
)
}

}
)
}

}
]);
var f,v,C
}
)(f.default.PureComponent))||t;
_e.default=(0,c.Componentautoscaling)((0,c.monitor)(C.default)((0,c.ItemExposeHoc)(F)))
}
),"b1f64471da748db7ce4a9a055df3f635d5d5e3ae7cccc681d73ca876236ae616",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","fe594e084620d7c0e7659182ffde64bc92307d0d665c93f63da6921308f0af5b","1e8bcb551493f7a66ffb6836d2462e41a73800ec23cc070a74746cd9738a64e0","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","9f193399d8839fbf4384f9e89936ab207ee1ea3f8c5506961e8d80e6d5e6f0bf","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default={
exposeItem:function(){
// 变量
var o: any = this.props,n=o.id,p=o.pageId,C=o.carrierCode,s=o.resSiteCode,c=void 0===s?'':s,v=o.resSiteName,l=void 0===v?'':v,u=o.pageCatCode,N=void 0===u?'':u,S=o.pageCatName,f=void 0===S?'':S;
return{
data:{
actionCode:t.PlatformUtils.isApp()?'100660019':'200580019',actionName:'\u5e97\u94fa\u7ec4\u4ef6\u5361\u7247\u66dd\u5149',eventType:t.EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:p,content:{
comId:null==n?void 0:n.toString(),CarrierCode:C,exposure:'1'
}
,resSiteCode:c,resSiteName:l,pageCatCode:N,pageCatName:f
}

}

}
,clickItem:function(){
// 变量
var o: any = this.props,n=o.carrierCode,p=o.pageId,C=o.id,s=o.resSiteCode,c=void 0===s?'':s,v=o.resSiteName,l=void 0===v?'':v,u=o.pageCatCode,N=void 0===u?'':u,S=o.pageCatName,f=void 0===S?'':S;
return{
data:{
actionCode:t.PlatformUtils.isApp()?'100660019':'200580020',actionName:'\u5e97\u94fa\u7ec4\u4ef6\u5361\u7247\u70b9\u51fb',eventType:'2',pageId:null==p?void 0:p.toString(),content:{
comId:null==C?void 0:C.toString(),CarrierCode:n,click:'1'
}
,resSiteCode:c,resSiteName:l,pageCatCode:N,pageCatName:f
}

}

}

}

}
),"fe594e084620d7c0e7659182ffde64bc92307d0d665c93f63da6921308f0af5b",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]),o=t.Dimensions.get('window').width,l=(0,n.ScreenSize)(o);
e.default=function(o){
return t.StyleSheet.create({
container:{
backgroundColor:o.C33.color,marginLeft:'small'===l?16:24,marginRight:'small'===l?16:24,borderRadius:'large'===l?0:16,display:'flex',flex:1,flexDirection:'row',maxWidth:1200,justifyContent:'space-between',alignItems:'center',paddingRight:12
}
,largeContainer:{
width:1200,marginLeft:'auto',marginRight:'auto'
}
,bgBorder:{
borderRadius:16,overflow:'hidden'
}
,imageWrap:{
width:48,height:48,borderRadius:8,marginTop:16,marginBottom:16,marginLeft:12,marginRight:12
}
,imageWrapLarge:{
width:72,height:72
}
,shopImage:{
width:'100%',height:'100%',borderRadius:8
}
,inforamtionWrap:{
marginTop:18,marginBottom:19,flex:1,paddingRight:10
}
,shopWrap:{
display:'flex',flex:1,flexDirection:'row',alignItems:'center'
}
,shopName:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C11,o.T8,{
marginRight:4
}
),bgShopName:Object.assign({

}
,o.C17),shopTag:{
width:30,height:15,borderRadius:4,fontSize:o.T0.fontSize,marginLeft:4
}
,TagText:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T0,{
fontSize:o.T0.fontSize
}
,o.C17,{
textAlign:'center',lineHeight:15
}
),starWrap:{
display:'flex',flex:1,flexDirection:'row',marginTop:8,alignItems:'center'
}
,attentionsNum:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C13,o.T3,{
marginLeft:8,height:'100%',justifyContent:'center',flex:1
}
),attentionsNumText:Object.assign({

}
,o.C13,o.T3),bgAttentionsNumText:Object.assign({

}
,o.C17),attentionsWrap:{
marginTop:26,marginBottom:26
}
,largeAttentionsWrap:{
marginTop:'auto',marginBottom:'auto'
}
,attentionsBtnN:{
width:56,height:28,borderRadius:14,backgroundColor:o.C35.color,alignItems:'center',lineHeight:28
}
,bgAttentionsBtnN:{
backgroundColor:o.C33.color
}
,attentionsBtnNText:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C17,o.T4,{
lineHeight:28
}
),bgAttentionsBtnNText:Object.assign({

}
,o.C18),attentionsBtnY:{
width:56,height:28,borderRadius:14,backgroundColor:o.S13.backgroundColor,alignItems:'center'
}
,bgAttentionsBtnY:{
backgroundColor:o.C23.color+o.opacityMap[o.C23.opacity]
}
,attentionsBtnYText:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C15,o.T4,{
lineHeight:28
}
),bgAttentionsBtnYText:Object.assign({

}
,o.C13),modalInnerStyle:{
borderRadius:24
}
,modalTitle:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T12),modalContent:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,o.T9),modalLeftBtn:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T9,{
color:o.C35.color,height:40,lineHeight:40,width:'100%',textAlign:'center'
}
),modalRightBtn:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T9,{
backgroundColor:o.C35.color,color:o.C33.color,borderRadius:20,textAlign:'center',height:40,lineHeight:40,width:'100%',overflow:'hidden'
}
),backImgStyle:{
backgroundColor:o.C81.color+o.opacityMap[o.C81.opacity],borderRadius:16
}
,maskLayer:{
position:'absolute',top:0,left:0,width:'100%',height:'100%'
}
,lineHeight26:{
lineHeight:26
}

}
)
}

}
),"1e8bcb551493f7a66ffb6836d2462e41a73800ec23cc070a74746cd9738a64e0",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,_i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),i=e(r(d[2])),l=e(r(d[3])),n=e(r(d[4])),s=e(r(d[5])),u=e(r(d[6])),c=r(d[7]),p=e(r(d[8])),h=r(d[9]),S=e(r(d[10])),y=r(d[11]),v=e(r(d[12])),f=e(r(d[13])),P=r(d[14]),T=e(r(d[15])),b=r(d[16]),L=e(r(d[17])),w=e(r(d[18])),x=r(d[19]);
// 函数
function C(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(C=function(){
return!!e
}
)()
}
var I={
1:'l2r',0:'t2b'
}
,k=['asc','desc'],N=0;
c.DeviceUtils.getStatusBarHeight().then((function(e){
N=e
}
));
var F=(0,h.observer)(t=(function(e){
// 函数
function t(e: any): any {
var o,l,u,h;
return(0,i.default)(this,t),l=this,u=t,h=[e],u=(0,s.default)(u),(o=(0,n.default)(l,C()?Reflect.construct(u,h||[],(0,s.default)(l).constructor):u.apply(l,h))).tid='',o.wapTimer=null,o.wapTimer3=null,o.loadMore=!0,o.loadMore1=!0,o.pageNum=1,o.pageNum1=1,o.pageSize=18,o.pageSize1=18,o.id="search"+(1e6*Math.random()).toFixed(),o.attributeid=[],o.attributename=[],o.arry=[],o.canClick=!0,o.curWinTop=0,o.isReport=!1,o.originWidth=c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenWidth,o.isMp=c.PlatformUtils.isMp(),o._searchRegexp=function(e){
var t='',o=/^[\f\n\r\t\v<>"'\(\)%\\`=&]{
0,2048
}
$/;
if(e){
for(var i=0;
i<e.length;
i++)t+=e.substr(i,1).replace(o,'');
return t
}
return t
}
,o.isPad=function(){
// 变量
var e: any = o.originWidth;
return'medium'===(0,c.ScreenSize)(e)||'large'===(0,c.ScreenSize)(e)&&e<c.variables.safety_area
}
,o.getSize=function(){
// 变量
var e: any = o.originWidth;
return(0,c.ScreenSize)(e)
}
,o.isPadHorizontal=function(){
// 变量
var e: any = o.originWidth,t=o.state.height;
return c.ScreenUtils.isPadHorizontal(e,t)
}
,o._changeSortTap=function(e){
o.pageNum=1,o.itemlist=[],o.scrollListTop(),o.setState({
searchSortField:e.searchSortField?e.searchSortField:o.state.searchSortField,searchSortType:k[e.searchSortType?e.searchSortType:o.state.searchSortType],boFilter:!0,selectItem:e.index
}
,(function(){
o.batchReportFilter(),o._getQueryPrd_filter()
}
))
}
,o.onBackTop=function(){
// 变量
var e: any = o.props.scroller;
'ios'===y.Platform.OS?setTimeout((function(){
e&&e.scrollTo&&e.scrollTo({
y:0,animated:!0
}
)
}
),0):e&&e.scrollTo({
y:0,animated:!0
}
)
}
,o.scrollListTop=function(){
'web'===y.Platform.OS?window.scrollTo({
top:0
}
):c.PlatformUtils.isApp()?o.onBackTop():o.isMp&&wx.pageScrollTo({
scrollTop:0
}
)
}
,o._getQueryPrd=function(e){
var t,i,l,n={

}
;
''!==o.state.category&&void 0!==o.state.category&&(n.category=[o.state.category]);
// 变量
var s: Function = o.state.resultList,u=o.pageNum,c=o.state.totalCount;
o.setState({
showLoading:!0,loadState:1
}
);
var p={
pageNumber:null==(t=o.pageNum)?void 0:t.toString(),pageSize:null==(i=o.pageSize)?void 0:i.toString(),searchSortField:null==(l=o.state.searchSortField)?void 0:l.toString(),searchSortType:o.state.searchSortType,tid:o.tid,sid:o.state.sid,searchFlag:o.state.searchFlag,carrierCode:o.state.carrierCode,topSpuList:o.state.topSpuList,keyWord:o.state.keyword
}
;
(0,b.queryShopPrd)(p).then((function(t){
if(null!=t&&t.success){
var i,l,p,h,S,y,v,f,P,T,b=null!=(i=null==t?void 0:t.data)?i:{

}
,L=null!=(l=null==b?void 0:b.page)?l:{

}
;
if(1===(u=null!=(p=null==L?void 0:L.pageNumber)?p:o.pageNum)&&(s=[]),s=null!=(h=null==(S=s)?void 0:S.concat(null!=(y=null==b?void 0:b.resultList)?y:[]))?h:[],c=(null==L?void 0:L.totalRow)||o.state.totalCount,e?o.setState({
noEmpty:!e
}
):0===(s=s.map((function(e){
return e.sellingPoint='',e
}
))).length||2===(null==b?void 0:b.resultType)?o.setState({
noEmpty:!0
}
,(function(){
o._getRecommendedPrd()
}
)):o.setState({
noEmpty:!1
}
),0===s.length||c>u*o.pageSize)o.loadMore=!0,o.pageNum+=1,o.setState({
showLoading:1!==o.pageNum,loadState:1,resultList:s,labelList:null!=b&&b.labelList?null==b?void 0:b.labelList:[],labelListR:null!=b&&b.labelList?null==b?void 0:b.labelList:[],pageNum:o.pageNum+1,sid:null==b?void 0:b.sid,resultTypeR:null!=(v=null==b?void 0:b.resultType)?v:1,resultType:null!=(f=null==b?void 0:b.resultType)?f:1,totalCount:c,ruleId:null==b?void 0:b.ruleId,screenParams:n,sortFieldList:(null==b?void 0:b.sortFieldList)||[],loading:!1
}
);
else o.loadMore=!1,o.setState({
showLoading:!0,loadState:3,resultList:s,labelList:null!=b&&b.labelList?null==b?void 0:b.labelList:[],labelListR:null!=b&&b.labelList?null==b?void 0:b.labelList:[],pageNum:o.pageNum+1,sid:null==b?void 0:b.sid,resultTypeR:null!=(P=null==b?void 0:b.resultType)?P:1,resultType:null!=(T=null==b?void 0:b.resultType)?T:1,totalCount:c,ruleId:null==b?void 0:b.ruleId,screenParams:n,sortFieldList:(null==b?void 0:b.sortFieldList)||[],loading:!1
}
,(function(){
o._getRecommendedPrd()
}
))
}
else'10100'===t.resultCode&&o.setState({
showLoading:!1,loadState:1,resultTypeR:2,loading:!1,totalCount:0
}
)
}
)).catch((function(e){
var t;
'10100'===(null==e||null==(t=e.data)?void 0:t.resultCode)?o.setState({
showLoading:!1,loadState:1,resultTypeR:2,loading:!1,totalCount:0
}
):o.setState({
showLoading:!1,loadState:2,totalCount:0
}
)
}
)).finally((function(){
0===s.length&&o.setState({
noEmpty:!0,errorEmpty:!0
}
)
}
))
}
,o._getQueryPrd_filter=function(){
var e,t,i,l=o.state.resultList,n=[],s=o.pageNum,u=o.state.totalCount;
o.setState({
showLoading:!0,loadState:1
}
);
var c={
keyWord:o.state.keyword,pageNumber:null==(e=o.pageNum)?void 0:e.toString(),pageSize:null==(t=o.pageSize)?void 0:t.toString(),searchSortField:null==(i=o.state.searchSortField)?void 0:i.toString(),searchSortType:o.state.searchSortType,tid:o.tid,sid:o.state.sid,searchFlag:o.state.searchFlag,carrierCode:o.state.carrierCode,topSpuList:o.state.topSpuList
}
;
(0,b.queryShopPrd)(c).then((function(e){
if(null!=e&&e.success){
var t,i,c,p,h,S,y,v,f,P=null!=(t=null==e?void 0:e.data)?t:{

}
,T=null!=(i=null==P?void 0:P.page)?i:{

}
;
if(1===(s=null!=(c=null==T?void 0:T.pageNumber)?c:o.pageNum)&&(l=[]),l=null!=(p=null==(h=l)?void 0:h.concat(null!=(S=null==P?void 0:P.resultList)?S:[]))?p:[],u=(null==T?void 0:T.totalRow)||o.state.totalCount,null!=(y=l)&&y.length?o.setState({
noEmpty:!1
}
):o.setState({
noEmpty:!0
}
),0===l.length||u>s*o.pageSize)o.loadMore=!0,o.pageNum+=1,o.setState({
showLoading:1!==o.pageNum,loadState:1,resultList:l,labelList_r:n,pageNum:o.pageNum+1,sid:null==P?void 0:P.sid,resultType:null!=(v=null==P?void 0:P.resultType)?v:1,totalCount:u,ruleId:null==P?void 0:P.ruleId,loading:!1
}
);
else o.loadMore=!1,o.setState({
showLoading:!0,loadState:3,resultList:l,labelList_r:n,pageNum:o.pageNum+1,sid:null==P?void 0:P.sid,resultType:null!=(f=null==P?void 0:P.resultType)?f:1,totalCount:u,ruleId:null==P?void 0:P.ruleId,loading:!1
}
,(function(){
o._getRecommendedPrd()
}
))
}

}
)).catch((function(){
o.setState({
showLoading:!1,loadState:2,totalCount:0,loading:!1
}
)
}
))
}
,o._getRecommendedPrd=function(){
var e,t,i=o.state.recommendList,l=o.pageNum1,n=o.state.totalCount1;
o.setState({
showLoading1:!0,loadState1:1
}
);
var s={
pageNumber:null==(e=o.pageNum1)?void 0:e.toString(),pageSize:null==(t=o.pageSize1)?void 0:t.toString(),searchSortField:'0',searchSortType:o.state.searchSortType,tid:o.tid,sid:o.state.sid,searchFlag:o.state.searchFlag,carrierCode:o.state.carrierCode
}
;
(0,b.queryShopPrd)(s).then((function(e){
if(null!=e&&e.success){
var t,s,u,c,p,h,S,y=null!=(t=null==e?void 0:e.data)?t:{

}
,v=null!=(s=null==y?void 0:y.page)?s:{

}
;
1===(l=null!=(u=null==v?void 0:v.pageNumber)?u:o.pageNum1)&&(i=[]),i=null!=(c=null==(p=i)?void 0:p.concat(null!=(h=null==y?void 0:y.resultList)?h:[]))?c:[],n=(null==v?void 0:v.totalRow)||o.state.totalCount1,0===(null==(S=i)?void 0:S.length)||n>l*o.pageSize1?(o.loadMore1=!0,o.pageNum1+=1,o.setState({
showLoading1:1!==o.pageNum1,loadState1:1,recommendList:i,pageNum1:o.pageNum+1,sid:null==y?void 0:y.sid,totalCount1:n,ruleId:null==y?void 0:y.ruleId
}
)):(o.loadMore1=!1,o.setState({
showLoading1:!0,loadState1:3,recommendList:i,pageNum1:o.pageNum1+1,sid:null==y?void 0:y.sid,totalCount1:n,ruleId:null==y?void 0:y.ruleId
}
))
}

}
)).catch((function(){
o.setState({
showLoading1:!1,loadState1:2,totalCount1:0
}
)
}
))
}
,o._loadMore=p.default.debounce((function(){
o.loadMore&&(o.loadMore=!1,o.state.boFilter?o._getQueryPrd_filter(!0):o._getQueryPrd(!0))
}
),200),o._loadMore1=p.default.debounce((function(){
o.loadMore1&&(o.loadMore1=!1,o._getRecommendedPrd())
}
),200),o.searchSorts=function(){
// 变量
var e: any = o.state,t=e.searchSortField,i=e.searchSortType;
return 0===Number(t)?'relevance':2===Number(t)?'newes':3===Number(t)?'review':1===Number(t)?'desc'===i?'pricedown':'priceup':void 0
}
,o.getPrdAppUrl=function(e,t){
// 变量
var o: any = "vmall://com.vmall.client/product/detail?prdId="+e;
return t?o.concat('&skuCode=').concat(t):o
}
,o.onClickPrd=function(e,t){
var i,l,n,s;
if(o.canClick){
o.canClick=!1,setTimeout((function(){
o.canClick=!0
}
),500);
var u={
searchWord:o.state.keyword,searchSort:o.searchSorts()||'relevance',productId:null==(i=e.productId)?void 0:i.toString(),productname:null==(l=e.prdName)?void 0:l.toString(),SKUCode:null==(n=e.skuCode)?void 0:n.toString(),location:null==(s=t+1)?void 0:s.toString(),attributeid:o.attributeid||[],attributename:o.attributename||[],sid:o.state.sid||'',ruleId:o.state.ruleId||'',click:'1',type:'1'
}
;
o.props.clickItem(u,'productTap'),c.EventTracking.execReportData('',!0),o.wapTimer3&&clearTimeout(o.wapTimer3);
var p=e.productPageType,h=void 0===p?'':p,S=e.productId,y=e.skuCode;
o.wapTimer3=setTimeout((function(){
String(h)?c.RouterUtils.gotoProductDetailAllByType(String(h),S,y):c.RouterUtils.gotoProductDetailAll(S,y)
}
),150)
}

}
,o.renderFlatlist=function(e){
return'web'===y.Platform.OS?(0,x.jsx)(y.View,{
style:[e.productWrap],children:o.renderProductList(e)
}
):(0,x.jsx)(x.Fragment,{
children:o.renderProductList(e)
}
)
}
,o.getSingleWidth=function(e,t,i){
// 变量
var l: any = (e-(t-1)*i)/t;
o.setState({
singleWidthR:l
}
)
}
,o.colNum=function(e){
return'l2r'===e?o.isPad()?o.isPadHorizontal()?3:2:1:'t2b'===e?o.isPad()?o.isPadHorizontal()?4:3:2:void 0
}
,o.colGutter=function(){
return o.isPad()&&o.isPadHorizontal()?12:8
}
,o.boxWidth=function(){
// 变量
var e: any = o.isPad()?48:32;
return o.originWidth-e
}
,o._renderScroll=function(e){
return'web'===y.Platform.OS?(0,x.jsx)(y.View,Object.assign({

}
,e)):(0,x.jsx)(y.ScrollView,Object.assign({

}
,e,{
removeClippedSubviews:!1
}
))
}
,o.loadPage=function(e){
// 变量
var t: any = o.state.loading;
return'web'===y.Platform.OS&&(t?(document.body.addEventListener('touchmove',o.bodyScroll,!1),document.body.style.overflow='hidden'):(document.body.removeEventListener('touchmove',o.bodyScroll,!1),document.body.style.overflow='')),t?'web'===y.Platform.OS&&(0,x.jsx)(y.View,{
style:e.loadWrap,children:o.loadingCon(e)
}
)||o.loadingCon(e):null
}
,o.loadingCon=function(e){
// 变量
var t: any = c.DarkStore.darkBool?P.ImageArray.loadingDark:P.ImageArray.loading;
return(0,x.jsxs)(y.View,{
style:[e.loadPage,o.isMp&&e.loadPageMp],children:[(0,x.jsx)(y.Image,{
style:[e.loadPageImg],source:o.isMp?{
uri:t
}
:t
}
),(0,x.jsx)(y.Text,{
style:[e.loadPageText],children:(0,c.t)('loading')
}
)]
}
)
}
,o.renderProductList=function(e){
// 变量
var t: any = o.state.layoutType,i=o.props.pageAlias,l=o.colNum(t),n='l2r'===t?12:8,s=(o.boxWidth()-(l-1)*n)/l;
return o.state.resultList.length>0&&1===o.state.resultType?(0,x.jsxs)(y.View,{
style:[e.productList,{
paddingHorizontal:o.isPad()?24:16
}
,o.isMp&&e.productListMp],children:[(0,x.jsx)(P.GridLO,{
col:l,rowGutter:'l2r'===t?12:8,colGutter:o.colGutter(),pageGutter:0,dataArray:o.state.resultList,boxWidth:o.boxWidth(),containerType:'ScrollView',renderScrollComponent:function(e){
return o._renderScroll(e)
}
,typeuuid:o.isMp&&o.props.typeuuid,initialNumToRender:o.state.resultList.length,loadMore:o._loadMore,renderItem:function(t){
// 变量
var i: any = t.item,l=t.index;
return o.renderProduct(i,l,e,s)
}

}
),o.renderFooter(e)]
}
):(o.state.noEmpty||'2'===String(o.state.resultType))&&(0,x.jsxs)(x.Fragment,{
children:[(0,x.jsxs)(y.View,{
style:e.emptyC,children:[(0,x.jsx)(y.Image,{
source:o.isMp?{
uri:v.default.notyet
}
:v.default.notyet,style:e.emptyImg
}
),(0,x.jsx)(y.Text,{
style:[e.emptyT,o.isPad()?e.prdAreaPadR:e.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:(0,c.t)('no_offering')
}
)]
}
),i?o.renderRecommentPrd(e):null]
}
)||null
}
,o.renderProduct=function(e,t,i,l){
void 0!==e.originIndex&&e.originIndex;
var n,s=c.Service.cmsCndProdPath+e.photoPath+'428_428_'+e.photoName;
e.promotionRules=e.promoLabels,e.imgUrl=s,e.prdName=e.briefName,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.reviewCount=e.remarkNumber,e.goodReviewRate=100*(null!=(n=null==e?void 0:e.goodRate)?n:0);
// 变量
var u: any = e.productPageType,p=void 0===u?'':u,h=e.productId,S=String(p)?c.RouterUtils.getProductDetailUrlForWebAllByType(String(p),h):c.RouterUtils.getProductDetailUrlForWebAll(h);
e.wapurl=S,e.weburl=S,e.activityPromInfoList=e.activityPromList;
// 变量
var v: any = o.state.layoutType,f='l2r'===v?157:o.isMp?null:'auto';
return(0,x.jsx)(y.View,{
style:i.productItemWrap,children:o.state.showProduct?(0,x.jsx)(P.ProductItem,{
receiveRef:function(i){
return o.receiveRef(i,e,'product',t,!0)
}
,data:e,structure:v,type:'base',config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2,promotionTextLineNum:'l2r'===v?2:1
}
,onClick:function(){
return o.onClickPrd(e,t)
}
,iWidth:l,iHeight:f
}
,e.productId):null
}
)
}
,o.renderFooter=function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o.state,l=i.resultList,n=i.loadState,s=i.loadState1,u=i.showLoading1,c=i.showLoading,p=i.recommendList,h=o.props.pageAlias;
return(0,x.jsxs)(x.Fragment,{
children:[3===n&&h&&!t?o.renderRecommentPrd(e):(0,x.jsx)(P.LoadingView,{
showLoading:t?u:c,position:o.state.loadingPostion,loadState:t?s:n,errorCallback:t?o._getRecommendedPrd:o._getQueryPrd,height:56,iconSize:24,titleStyle:e.lodingTitle
}
),t?l.length>=10&&(0,x.jsx)(y.View,{
style:{
height:20
}

}
):p.length>=10&&(0,x.jsx)(y.View,{
style:{
height:20
}

}
)]
}
)
}
,o.renderRecommentPrd=function(e){
// 变量
var t: any = o.state,i=t.layoutType,l=t.recommendList,n=t.noEmpty,s=o.colNum(i),u='l2r'===i?12:8,p=(o.boxWidth()-(s-1)*u)/s;
return(0,x.jsx)(x.Fragment,{
children:(null==l?void 0:l.length)>0?(0,x.jsxs)(x.Fragment,{
children:[(0,x.jsx)(y.Text,{
style:e.recommendShopPrdText,children:(0,c.t)('no_more_prds')
}
),(0,x.jsxs)(y.View,{
style:[e.productList,n&&{
paddingHorizontal:o.isPad()?24:16
}
,o.isMp&&e.productListMp],children:[(0,x.jsx)(P.GridLO,{
col:s,rowGutter:u,colGutter:o.colGutter(),pageGutter:0,dataArray:l,boxWidth:o.boxWidth(),containerType:'ScrollView',renderScrollComponent:function(e){
return o._renderScroll(e)
}
,typeuuid:o.isMp&&o.props.typeuuid,loadMore:o._loadMore1,initialNumToRender:null==l?void 0:l.length,renderItem:function(t){
// 变量
var i: any = t.item,l=t.index;
return o.renderProduct(i,l,e,p)
}

}
),o.renderFooter(e,!0)]
}
)]
}
):null
}
)
}
,o.getTitleBarHeight=function(){
return 144
}
,o._onScrollWeb=function(){
// 变量
var e: any = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=156;
o.curWinTop<e?(t=0,document.getElementById('filterWrap').style.position=e>=156?'fixed':'absolute'):o.curWinTop>e&&(t=0,e<=156&&(document.getElementById('filterWrap').style.position='absolute',t=0)),document.getElementById('filterWrap').style.top=t+'px',o.curWinTop=e
}
,o.batchReportFilter=function(){
// 变量
var e: any = o.props.clickItem,t=o.state,i=t.labelList,l=t.moreItems,n=t.labelContentSelect,s=[],u=[];
(i.forEach((function(e,t){
o.state.category===e.category&&(s.push("1,"+(t+1)),u.push((0,c.t)('category')+','+e.categoryName))
}
)),l.forEach((function(e,t){
n[e.fieldName]&&n[e.fieldName].length>0&&e.itemEntryList.forEach((function(o,i){
n[e.fieldName].includes(o.key)&&(s.push(t+2+","+(i+1)),u.push(e.displayName+','+o.value))
}
))
}
)),o.attributeid=s,o.attributename=u,s.length>0)&&(e({
attributeid:s,attributename:u,click:'1'
}
,'condition'),c.EventTracking.execReportData('',!0))
}
,o.getEmptyHeight=function(){
// 变量
var e: any = o.getTitleBarHeight()+40,t=o.state.labelList.length>1?86:0;
return o.state.height-e-t
}
,o._onLayout=function(e){
o.setState({
stickyLayoutY:e.nativeEvent.layout.y
}
)
}
,o.itemlist=[],o.receiveRef=function(e,t,i,l){
// 变量
var n: any = !(arguments.length>4&&void 0!==arguments[4])||arguments[4];
e&&(e.exposeObj=t,e.exposeObj.type=i,e.exposeObj.attributeid=o.attributeid||[],e.exposeObj.attributename=o.attributename||[],e.exposeObj.index=l+1||'',e.exposeObj.searchWord=o.state.keyword,e.exposeObj.searchSort=o.searchSorts()||'relevance',e.exposeObj.ruleId=o.state.ruleId,e.exposeObj.onPrd=n,'ios'===y.Platform.OS&&o.state.resultList.length>0&&o.state.resultList.length<10&&1===o.state.resultType?o.itemlist[l]=e:o.itemlist.push(e))
}
,o.state={
scrollYWeb:0,ativeContentList:[],showLoading:!0,showLoading1:!0,loadState:1,loadState1:1,loadingPostion:'bottom',layoutType:I[T.default.layoutType||0],totalCount:0,searchFlag:'0',searchSortField:0,searchSortType:'desc',sid:void 0,ruleId:'',screenParams:void 0,sortFieldList:[],resultList:[],labelList:[],labelListR:[],productList:[],category:'',singleWidth:0,singleWidthR:160,noData:!1,resultType:1,resultTypeR:1,isWaterfall:'StaggeredLayout',titleBarHeight:new y.Animated.Value(0),cardItem:[],cardItemRemaining:[],showAll:!1,onShowAll:!1,moreItems:[],translateX:new y.Animated.Value(0),mininumPrice:'',maxinumPrice:'',mininumPriceFocus:!1,maxinumPriceFocus:!1,labelContentSelect:{

}
,labelContentList:[],boFilter:!1,noEmpty:!1,noEmpty1:!1,sTop:0,stickyLayoutY:0,loading:!0,keyword:o.props.keyWord,showProduct:!0,isLogin:!1,keywordText:'',errorEmpty:!1,fontSize:10,maxinumPricePlc:!0,mininumPricePlc:!0,screenHeight:0,titleTop:0,filterTop:0,isPadApk:!1,searchId:'',carrierCode:'',topSpuList:[],width:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenWidth,height:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenHeight,recommendList:[],totalCount1:0,selectItem:0
}
,o.onClickPrd=o.onClickPrd.bind(o),o
}
return(0,u.default)(t,e),(0,l.default)(t,[{
key:"componentDidMount",value:(h=(0,o.default)((function*(){
var e,t,o,i=this,l=this.props,n=l.route,s=l.carrierCode,u=void 0===s?c.UrlUtils.getQueryStr('carrierCode'):s,p=l.topSpuList,h=void 0===p?c.UrlUtils.getQueryStr('topSpuList'):p;
this.setState({
searchFlag:'0',isLogin:null==n||null==(e=n.params)?void 0:e.isLogin,carrierCode:u,topSpuList:null!=(t=null==h||null==(o=h.split(','))?void 0:o.filter(Boolean))?t:[]
}
,(function(){
'large'!==i.getSize()&&i._getQueryPrd()
}
)),c.PlatformUtils.isApp()?c.RnBridge.invokeVmallNative('device','isPad',{

}
).then((function(e){
null!=e&&e.pad&&'true'===(null==e?void 0:e.pad)?i.setState({
isPadApk:!0
}
):i.setState({
isPadApk:!1
}
)
}
)):'web'===y.Platform.OS&&'large'!==this.getSize()&&(this.tid=c.BuildParams.getTid(),document.addEventListener('scroll',this._onScrollWeb)),this.lister4=y.DeviceEventEmitter.addListener('switchOrderType_shop',(function(e){
i.setState({
layoutType:I[null!=e?e:1]
}
)
}
))
}
)),function(){
return h.apply(this,arguments)
}
)
}
,{
key:"componentWillUnmount",value:function(){
this.eventListener&&this.eventListener.remove(),this.lister1&&this.lister1.remove(),this.lister2&&this.lister2.remove(),this.lister3&&this.lister3.remove(),this.lister4&&this.lister4.remove(),this.wapTimer&&clearTimeout(this.wapTimer),this.wapTimer3&&clearTimeout(this.wapTimer3),this.canClick=!0,'web'===y.Platform.OS&&document.removeEventListener('scroll',this._onScrollWeb)
}

}
,{
key:"componentWillMount",value:function(){
this._panResponderIos=y.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(e,t){
return!0
}

}
),this._panResponder=y.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(e,t){
return!1
}

}
)
}

}
,{
key:"render",value:function(){
var e,t=this,o=this.state,i=o.sortFieldList,l=o.labelList,n=o.keyword,s=o.filterTop,u=o.stickyLayoutY,p=o.searchSortField,h=o.searchSortType,S=o.selectItem,v=o.height,T=this.props,b=T.topSpuList,L=T.carrierCode,C=T.pageType,I=T.pageAlias,k=u,F=this.props,R=F.stickyScrollY,W=F.clickItem,_=R.interpolate({
inputRange:[-1,0,k,k+1],outputRange:[0,0,0,1]
}
);
return e=i.length&&!this.isMp?40:null,(0,x.jsx)(c.WithTheme,{
themeStyles:f.default,children:function(o,f,T){
return t.originWidth=T,(0,x.jsx)(y.View,{
style:[o.productWrap,c.DarkStore.darkBool?o.wrap:null,'web'===y.Platform.OS&&o.wrap,{
minHeight:'web'===y.Platform.OS?window.innerHeight:v-u-(I?56:112)-N
}
,t.isMp&&o.productWrapMp,'large'===t.getSize()&&{
minHeight:'auto'
}
],onLayout:t._onLayout,children:'web'===y.Platform.OS||t.isMp?(0,x.jsx)(x.Fragment,{
children:'large'===t.getSize()?(0,x.jsx)(w.default,{
styles:o,keyword:n,carrierCode:L,topSpuList:b,pageType:C,clickItem:W,pageAlias:I,onClickPrd:t.onClickPrd
}
):(0,x.jsxs)(x.Fragment,{
children:[t.loadPage(o),(0,x.jsx)(y.View,{
nativeID:'filterWrap',style:[o.posiFix,{
position:t.isMp?'sticky':'absolute',top:s
}
],children:i.length&&!t.state.loading?(0,x.jsx)(P.SearchCategories,{
onChangesTap:t._changeSortTap,data:i,clickItem:W,searchWord:n,searchSortField:p,searchSortType:'desc'===h?'1':'0',selectItem:S,pageType:c.PAGE_TYPE.shop
}
):null
}
),(0,x.jsx)(y.View,{
nativeID:t.id,style:{
marginTop:e
}
,children:t.state.loading?null:(0,x.jsx)(x.Fragment,{
children:t.renderFlatlist(o)
}
)
}
)]
}
)
}
):(0,x.jsxs)(x.Fragment,{
children:[t.loadPage(o),(0,x.jsx)(y.Animated.View,{
style:[{
zIndex:9,elevation:9,transform:[{
translateY:_
}
]
}
],children:i.length&&!t.state.loading?(0,x.jsx)(y.View,{
style:{
zIndex:9,elevation:9
}
,children:(0,x.jsx)(P.SearchCategories,{
onChangesTap:t._changeSortTap,data:i,labelListLength:l.length,clickItem:W,searchWord:n,searchSortField:p,searchSortType:'desc'===h?'1':'0',selectItem:S,pageType:c.PAGE_TYPE.shop
}
)
}
):null
}
),t.state.loading?null:(0,x.jsx)(x.Fragment,{
children:t.renderFlatlist(o)
}
)]
}
)
}
)
}

}
)
}

}
]);
var h
}
)(S.default.PureComponent))||t;
_e.default=(0,c.Componentautoscaling)((0,c.monitor)(L.default)((0,c.ItemExposeHoc)(F)))
}
),"54bc0c7a14252b010395baec725c3a22c3d558d7b99faae7d8f8c69a27a27d97",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","30231718881a83f1f9ba872ccabf167cbf223d790688425dea1b32e537a237f8","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","6f4e4331feb5baa54fd56f1c1e284c2952ee6c1586310b2e484cf5c2e805fcff","b9ac09089415d995e51801124320ee1767f89fb13265bd4867814772f3a56abb","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
wrap:Object.assign({

}
,n.S32),productWrap:{
width:'100%'
}
,productList:{
width:'100%',overflow:'hidden',marginTop:8
}
,productListMp:{
paddingRight:0
}
,productItemWrap:{
width:'100%',height:'auto'
}
,lodingTitle:{
color:n.C13.color
}
,emptyImg:{
width:96,height:96
}
,emptyC:{
width:'100%',justifyContent:'center',alignItems:'center',marginTop:24,marginBottom:24
}
,emptyT:Object.assign({
textAlign:'center'
}
,n.C15,{
fontFamily:o.PublicFont.fontFamilyBase
}
),prdAreaR:{
paddingLeft:16,paddingRight:16
}
,prdAreaPadR:{
paddingLeft:24,paddingRight:24
}
,posiFix:{
position:'web'===t.Platform.OS?'fixed':'absolute',width:'100%',backgroundColor:n.C32.color,zIndex:8
}
,loadPage:{
position:'absolute',top:56,zIndex:99,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:n.C32.color,height:'100%'
}
,loadPageMp:{
top:0
}
,loadPageImg:{
width:72,height:72
}
,loadPageText:{
fontSize:14,color:n.C13.color+'99'
}
,loadWrap:{
position:'web'===t.Platform.OS?'fixed':'relative',top:0,left:0,width:'100%',bottom:0,zIndex:1
}
,recommendShopPrdText:{
fontSize:n.T7.fontSize,color:n.C13.color,opacity:n.C13.opacity,textAlign:'center',marginTop:24,marginBottom:16
}
,pcItemBox:{
width:'100%',maxWidth:1200,marginLeft:'auto',marginRight:'auto',marginBottom:40,zIndex:3
}
,index2:{
zIndex:2
}
,empty:{
marginTop:64,marginBottom:64,textAlign:'center',alignItems:'center'
}
,emptyTextWrap:{
marginTop:8
}
,productNoData:{
width:96,height:96,marginLeft:'auto',marginRight:'auto'
}
,emptyText:Object.assign({
fontFamily:'HYQiHei-FES'
}
,n.T7,n.C15),footer:Object.assign({

}
,n.T3,n.C15,{
textAlign:'center',marginBottom:10,marginTop:10,height:40
}
),prodInner:{
zIndex:1
}
,recommendText:{
fontFamily:'HYQiHei-FES',fontSize:24,color:'#000000',lineHeight:34,height:34,fontWeight:'500'
}
,recommendBox:{
justifyContent:'center',height:64,marginTop:24
}
,productWrapMp:{
flex:1,minHeight:'auto'
}

}
)
}

}
),"30231718881a83f1f9ba872ccabf167cbf223d790688425dea1b32e537a237f8",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var o=r(d[1]),n=r(d[2]),p=t(r(d[3])),c={
0:'1',2:'2',3:'3',1:'4'
}
;
e.default={
exposeItem_product:function(t){
var c=p.default.source,s={
array:null==t?void 0:t.map((function(t,o){
var n,p,s,E;
return'recommend'===t.type?{
Source:c,name:(null==(n=t[0])?void 0:n.type)||''
}
:'product'===t.type?{
Source:c,searchWord:t.searchWord,searchSort:t.searchSort||'relevance',SKUCode:[null==(p=t.skuCode)?void 0:p.toString()],productId:[null==(s=t.productId)?void 0:s.toString()],location:null==(E=t.index)?void 0:E.toString(),attributeid:t.attributeid||[],attributename:t.attributename||[],ruleId:t.ruleId||'',exposure:'1',type:t.onPrd?'1':'2'
}
:{

}

}
))
}
;
return{
isBatch:!0,commonData:{
actionCode:'web'===o.Platform.OS?'200090401':'100090401',actionName:'\u5546\u54c1\u66dd\u5149',eventType:n.EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:this.props.pageId
}
,content:s.array
}

}
,clickItem:function(t,s){
var E=this.props.carrierCode||n.UrlUtils.getQueryStr('carrierCode'),C=this.props,u=C.resSiteCode,T=void 0===u?'':u,l=C.resSiteName,I=void 0===l?'':l,N=C.pageCatCode,_=void 0===N?'':N,v=C.pageCatName,P=void 0===v?'':v;
return t.Source=p.default.source,'sort'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200580006':'100660006',actionName:'\u7528\u6237\u70b9\u51fb\u6392\u5e8f\u6309\u94ae\u70b9\u51fb\u7387',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:Object.assign({

}
,t,{
comId:this.props.id,type:'1',index:c[t.id],CarrierCode:E
}
),resSiteCode:T,resSiteName:I,pageCatCode:_,pageCatName:P,pageId:this.props.pageId
}

}
:'productTap'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200580006':'100660006',actionName:'\u70b9\u51fb\u5546\u54c1',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:Object.assign({

}
,t,{
comId:this.props.id,type:'2',CarrierCode:E
}
),resSiteCode:T,resSiteName:I,pageCatCode:_,pageCatName:P,pageId:this.props.pageId
}

}
:'cateCard'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200090203':'100090203',actionName:'\u4fbf\u6377\u5206\u7c7b\u70b9\u51fb\u7387',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:this.props.pageId
}

}
:'filter'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200090201':'100090201',actionName:'\u70b9\u51fb\u7b5b\u9009\u6309\u94ae',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:this.props.pageId
}

}
:'activity'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200090602':'100090602',actionName:'\u6d3b\u52a8\u6a21\u5757\u70b9\u51fb',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:this.props.pageId
}

}
:'condition'===s?{
data:{
actionCode:'web'===o.Platform.OS?'200090205':'100090205',actionName:'\u7b5b\u9009\u4fa7\u8fb9\u9875\u7528\u6237\u7b5b\u9009\u6761\u4ef6',eventType:n.EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:this.props.pageId
}

}
:{

}

}

}

}
),"6f4e4331feb5baa54fd56f1c1e284c2952ee6c1586310b2e484cf5c2e805fcff",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","48b6e7bc345a98d8013a8db07444a5ed336a313ddc0f6192846064832e4b42fd"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var o,u,n,l=t(r(d[1])),p=t(r(d[2])),s=t(r(d[3])),c=t(r(d[4])),f=(t(r(d[5])),r(d[6])),y=r(d[7]),b=(o=(function(){
return(0,s.default)((function t(){
(0,p.default)(this,t),(0,l.default)(this,"keyword",u,this),(0,l.default)(this,"source",n,this),(0,f.makeObservable)(this),'web'===y.Platform.OS&&(this.keyword=window.sessionStorage.getItem('keyword'))
}
),[{
key:"onUpdate",value:function(t){
this.keyword=t,'web'===y.Platform.OS&&t&&window.sessionStorage.setItem('keyword',t)
}

}
,{
key:"updateSource",value:function(t){
this.source=t
}

}
])
}
)(),u=(0,c.default)(o.prototype,"keyword",[f.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return''
}

}
),n=(0,c.default)(o.prototype,"source",[f.observable],{
configurable:!0,enumerable:!0,writable:!0,initializer:function(){
return''
}

}
),(0,c.default)(o.prototype,"onUpdate",[f.action],Object.getOwnPropertyDescriptor(o.prototype,"onUpdate"),o.prototype),(0,c.default)(o.prototype,"updateSource",[f.action],Object.getOwnPropertyDescriptor(o.prototype,"updateSource"),o.prototype),o);
e.default=new b
}
),"48b6e7bc345a98d8013a8db07444a5ed336a313ddc0f6192846064832e4b42fd",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","0513c9aec1df8b193fb6e7118d38330920d6f86b6f168b15f210858e15b09551","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","238db300b8230394a7d5170f0b40f8df9292454df0796f0bcc766fd45e231b9f","e8b933b691eb434ae798f2ebfc685acb60972917ddcf03d73f892839d981c1a5","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.ProductWebTest=void 0;
var t=e(_r(d[1])),r=e(_r(d[2])),i=e(_r(d[3])),o=e(_r(d[4])),n=e(_r(d[5])),a=_r(d[6]),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = y(t);
if(r&&r.has(e))return r.get(e);
var i={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var a: any = o?Object.getOwnPropertyDescriptor(e,n):null;
a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=e[n]
}
return i.default=e,r&&r.set(e,i),i
}
)(_r(d[7])),l=_r(d[8]),u=e(_r(d[9])),c=_r(d[10]),h=_r(d[11]),p=_r(d[12]);
// 函数
function y(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(y=function(e){
return e?r:t
}
)(e)
}
// 函数
function f(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(f=function(){
return!!e
}
)()
}
var v=(function(e){
// 函数
function s(e: any): any {
var r,n,u,c;
return(0,t.default)(this,s),n=this,u=s,c=[e],u=(0,o.default)(u),(r=(0,i.default)(n,f()?Reflect.construct(u,c||[],(0,o.default)(n).constructor):u.apply(n,c))).pageIndex=1,r.pageIndex1=1,r.attributename=[],r.isLoadFinished=!1,r.sessionCode='',r.ruleId='',r.tid='',r.totalCount=0,r.totalCount1=0,r.iswebCeilling=function(){
return'large'===(0,a.ScreenSize)(r.props.width)
}
,r.itemlist=[],r.receiveRef=function(e,t){
e&&(e.exposeObj=t,r.itemlist.push(e))
}
,r.renderResult=function(e,t){
// 变量
var i: any = r.state,o=i.firstRenderResultEmpty,n=i.categoryResultEmpty,a=i.itemList;
return o?r.readerEmpty(e):n&&0===(null==a?void 0:a.length)||t?r.renderFilterEmpty(e):(0,p.jsx)(l.View,{
style:e.prodInner,children:r.flatList(e,a)
}
)
}
,r.state={
sid:'',itemList:[],showLoading:!1,keyword:e.keyword,loadState:1,crossDressingStyle:[],recommendList:[],isLoading:!1,searchSortField:'',searchSortType:'',screenParams:'{

}
',priceLabel:[],isReaderEmpty:!1,firstRenderResultEmpty:!1,categoryResultEmpty:!1,resultType:1,configInfo:{

}
,requestSuccess:!1,exceptionRes:!1,searchResultPageProdShow:'true',showGuesslike:!1
}
,r.getCurrentPage=r.getCurrentPage.bind(r),r.getCurrentPage1=r.getCurrentPage1.bind(r),r
}
return(0,n.default)(s,e),(0,r.default)(s,[{
key:"getCurrentPage",value:function(e){
this.pageIndex=e,this.getSeachResult(!0)
}

}
,{
key:"getCurrentPage1",value:function(e){
this.pageIndex1=e,this.getRecommendResult(!0)
}

}
,{
key:"getRefreshData",value:function(){
this.pageIndex=1,this.getSeachResult()
}

}
,{
key:"getSeachResult",value:function(){
var e,t,r,i=this,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];
o||(this.pageIndex=1,this.pageButtonChild.resetPageNum(1));
var l=this.props,u=l.keyword,c=l.carrierCode,p=l.topSpuList,y=void 0===p?a.UrlUtils.getQueryStr('topSpuList'):p,f={
keyWord:u,pageNumber:this.pageIndex,pageSize:20,searchSortField:null==(e=this.state.searchSortField)?void 0:e.toString(),searchSortType:this.state.searchSortType,tid:this.tid,sid:this.state.sid,searchFlag:this.state.searchFlag,carrierCode:c,topSpuList:null!=(t=null==y||null==(r=y.split(','))?void 0:r.filter(Boolean))?t:[]
}
;
(0,h.queryShopPrd)(f).then((function(e){
i.shopPrdHandle({
res:e,isPageClick:o,isCategoryClick:n,isFirstRender:s,keyword:u
}
)
}
)).catch((function(e){
i.shopPrdErrHandle({
err:e,keyword:u
}
)
}
))
}

}
,{
key:"shopPrdHandle",value:function(e){
var t,r,i=e.res,o=e.isPageClick,n=e.isCategoryClick,a=e.isFirstRender,s=e.keyword,u=null!=(t=null==i?void 0:i.data)?t:{

}
,c=null!=(r=null==u?void 0:u.page)?r:{

}
;
this.handleNotPageClick({
isPageClick:o,isCategoryClick:n,isFirstRender:a,data:u
}
),this.handleTotalRow({
res:i,pageData:c,isFirstRender:a
}
),this.ruleId=u.ruleId,(o||n)&&(this.itemlist=[]),this.totalCount=Math.ceil(c.totalRow/20),this.setState({
sid:null==u?void 0:u.sid,itemList:this.handleProData(u.resultList,'1',null==u?void 0:u.sid),isLoading:!1,keyword:s,firstRenderResultEmpty:!1,totalCount:Math.ceil(c.totalRow/20),resultType:null==u?void 0:u.resultType
}
),(o||n)&&l.DeviceEventEmitter.emit('searchSwitch')
}

}
,{
key:"handleNotPageClick",value:function(e){
// 变量
var t: any = e.isPageClick,r=e.isCategoryClick,i=e.isFirstRender,o=e.data;
t||this.conditionChild.handleData({

}
,[],o.sortFieldList,r,i)
}

}
,{
key:"handleTotalRow",value:function(e){
// 变量
var t: any = e.res,r=e.pageData,i=e.isFirstRender;
'0'!==(null==t?void 0:t.resultCode)||void 0!==(null==r?void 0:r.totalRow)&&null!==(null==r?void 0:r.totalRow)||this.setState({
categoryResultEmpty:!0
}
),i&&0===(null==r?void 0:r.totalRow)&&null!=t&&t.success&&this.setState({
firstRenderResultEmpty:!0
}
)
}

}
,{
key:"shopPrdErrHandle",value:function(e){
var t,r,i,o=e.err,n=e.keyword;
'50008'!==(null==o||null==(t=o.data)?void 0:t.resultCode)&&'10100'!==(null==o||null==(r=o.data)?void 0:r.resultCode)||this.setState({
exceptionRes:!0
}
),'10100'===(null==o||null==(i=o.data)?void 0:i.resultCode)&&this.setState({
showGuesslike:!0
}
),this.pageIndex=1,this.setState({
itemList:[],firstRenderResultEmpty:!0,keyword:n
}
)
}

}
,{
key:"getRecommendResult",value:function(){
// 变量
var e: any = this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];
t||(this.pageIndex1=1,this.pageButtonChild1.resetPageNum(1));
var r=this.props.carrierCode,i={
pageNumber:this.pageIndex1,pageSize:20,searchSortField:'0',searchSortType:this.state.searchSortType,tid:this.tid,sid:this.state.sid,searchFlag:this.state.searchFlag,carrierCode:r
}
;
(0,h.queryShopPrd)(i).then((function(r){
var i,o,n=null!=(i=null==r?void 0:r.data)?i:{

}
,a=null!=(o=null==n?void 0:n.page)?o:{

}
;
e.ruleId=n.ruleId,t&&(e.recommendList=[]),e.totalCount1=Math.ceil(a.totalRow/20),e.setState({
recommendList:e.handleProData(n.resultList,'1',null==n?void 0:n.sid),totalCount1:Math.ceil(a.totalRow/20)
}
)
}
)).catch((function(){
e.pageIndex1=1,e.setState({
recommendList:[]
}
)
}
))
}

}
,{
key:"getSearchSort",value:function(){
// 变量
var e: any = this.state,t=e.searchSortField,r=e.searchSortType;
return t||r?'asc'===r?'priceup':['relevance','pricedown','newes','popularity'][t]:'relevance'
}

}
,{
key:"setParams",value:function(e,t){
// 变量
var r: any = this;
this.setState({
searchSortField:e.searchSortField,searchSortType:e.searchSortType,screenParams:e.screenParams,priceLabel:e.priceLabel
}
,(function(){
r.state.searchResultPageProdShow&&r.getSeachResult(!1,t)
}
))
}

}
,{
key:"handleProData",value:function(e,t,r){
// 变量
var i: any = this;
return 291,e.forEach((function(e,o){
e.promotionRules=e.promoLabels;
// 变量
var n: any = a.Service.cmsCndProdPath+e.photoPath+'428_428_'+e.photoName;
e.prdName=e.briefName,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.searchSort=i.getSearchSort(),e.attributename=i.attributename,e.searchType=t,e.searchWord=a.UrlUtils.getQueryStr('searchWord'),e.ruleId=i.ruleId,e.location=Math.floor(o)+1,e.sid=r,e.sellingPoint='',e.goodReviewRate=e.goodRate,e.reviewCount=e.rateCount,e.goodReviewRate=e.goodRate;
// 变量
var s: Function = (0,a.getBestFitImgUrl)(291,291,n);
e.imgUrl=s,e.activityPromInfoList=e.activityPromList
}
)),e
}

}
,{
key:"flatList",value:function(e,t){
// 变量
var r: any = this;
return 291,(0,p.jsx)(l.View,{
style:e.prodInner,children:(0,p.jsx)(l.View,{
style:{
display:'flex',flexDirection:'row',width:1200,flexWrap:'wrap'
}
,children:null==t?void 0:t.map((function(e,t){
return(0,p.jsx)(l.View,{
style:{
width:291,marginRight:0!==t&&(t+1)%4==0?0:12,marginBottom:12
}
,children:(0,p.jsx)(c.ProductItem,{
receiveRef:function(t){
return r.receiveRef(t,e)
}
,structure:'base',type:'t2b',data:e,config:{
bgColor:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,prodTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:1
}
,iWidth:291,onClick:function(){
return r.onPress(e,t)
}
,onClickButton:function(){
return r.onPress(e,t)
}

}
,e.productId)
}
)
}
))
}
)
}
)
}

}
,{
key:"getRecommendList",value:function(e){
// 变量
var t: any = this.state.recommendList;
return t.length?(0,p.jsxs)(l.View,{
style:e.prodInner,children:[(0,p.jsx)(l.View,{
style:e.recommendBox,children:(0,p.jsx)(l.Text,{
style:e.recommendText,children:(0,a.t)('no_more_prds')
}
)
}
),(0,p.jsx)(l.View,{
style:e.prodInner,children:this.flatList(e,t)
}
)]
}
):null
}

}
,{
key:"readerEmpty",value:function(e){
return 1===this.pageIndex&&(0,p.jsxs)(l.View,{
style:e.empty,children:[(0,p.jsx)(l.Image,{
source:u.default.notyet,style:e.productNoData
}
),(0,p.jsx)(l.View,{
style:[e.emptyTextWrap,{
maxWidth:796
}
],children:(0,p.jsx)(l.Text,{
ellipsizeMode:'clip',numberOfLines:2,style:e.emptyText,children:(0,a.t)('product_not_found').replace(/%[s]/,'"'+this.state.keyword+'"')
}
)
}
)]
}
)
}

}
,{
key:"renderFilterEmpty",value:function(e){
return(0,p.jsx)(l.View,{
style:e.empty,children:(0,p.jsxs)(p.Fragment,{
children:[(0,p.jsx)(l.Image,{
source:u.default.notyet,style:e.productNoData
}
),(0,p.jsx)(l.View,{
style:e.emptyTextWrap,children:(0,p.jsx)(l.Text,{
ellipsizeMode:'clip',numberOfLines:2,style:e.emptyText,children:(0,a.t)('noSuchProduct_tryAgain')
}
)
}
)]
}
)
}
)
}

}
,{
key:"renderItemBox",value:function(e,t,r,i){
var o,n=this,a=this.props.width;
return 0,12,o=((a=a>1200?1200:a)-0-12*(r-1))/r,(0,p.jsx)(l.View,{
style:{
marginTop:12,marginLeft:12
}
,children:(0,p.jsx)(c.ProductItem,{
receiveRef:function(t){
return n.receiveRef(t,e)
}
,structure:'base',type:'t2b',data:e,config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2
}
,iWidth:o,onClick:function(){
return n.onPress(e,i)
}
,onClickButton:function(){
return n.onPress(e,i)
}

}
,e.productId)
}
)
}

}
,{
key:"onPress",value:function(e,t){
(0,this.props.onClickPrd)(e,t)
}

}
,{
key:"componentDidMount",value:function(){
this.tid=a.BuildParams.getTid(),this.getSeachResult(!1,!1,!0),this.props.pageAlias&&this.getRecommendResult(!1)
}

}
,{
key:"componentWillUnmount",value:function(){

}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,r=t.exceptionRes,i=t.searchResultPageProdShow,o=(t.recommendList,this.props),n=o.styles,a=o.pageType,s=o.pageAlias;
return(0,p.jsxs)(l.View,{
style:n.pcItemBox,children:[(0,p.jsx)(l.View,{
style:n.index2,children:(0,p.jsx)(c.SearchCondition,{
pageType:a,onRef:function(t){
e.conditionChild=t
}
,setParams:function(t,r){
return e.setParams(t,r)
}

}
)
}
),this.renderResult(n,r),(0,p.jsx)(c.SearchPageButton,{
searchResultPageProdShow:i,ref:function(t){
e.pageButtonChild=t
}
,isSearch:!0,totalPage:this.totalCount,pageCallbackFn:this.getCurrentPage
}
),s?(0,p.jsxs)(p.Fragment,{
children:[this.getRecommendList(n),(0,p.jsx)(c.SearchPageButton,{
searchResultPageProdShow:i,ref:function(t){
e.pageButtonChild1=t
}
,isSearch:!0,totalPage:this.totalCount1,pageCallbackFn:this.getCurrentPage1
}
)]
}
):null]
}
)
}

}
])
}
)(s.Component);
v.defaultProps={
id:'6547'
}
;
_e.default=(0,a.Componentautoscaling)(v),_e.ProductWebTest=v
}
),"b9ac09089415d995e51801124320ee1767f89fb13265bd4867814772f3a56abb",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.GradientText=void 0;
var t=e(_r(d[1])),r=_r(d[2]),l=_r(d[3]),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = v(t);
if(r&&r.has(e))return r.get(e);
var l={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var n: any = i?Object.getOwnPropertyDescriptor(e,o):null;
n&&(n.get||n.set)?Object.defineProperty(l,o,n):l[o]=e[o]
}
return l.default=e,r&&r.set(e,l),l
}
)(_r(d[4])),o=_r(d[5]),n=e(_r(d[6])),a=e(_r(d[7])),s=e(_r(d[8])),u=e(_r(d[9])),c=e(_r(d[10])),p=e(_r(d[11])),f=e(_r(d[12])),h=e(_r(d[13])),y=_r(d[14]);
// 函数
function v(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(v=function(e){
return e?r:t
}
)(e)
}
var b=_e.GradientText=function(e){
return(0,y.jsx)(h.default,{
maskElement:(0,y.jsx)(o.Text,Object.assign({

}
,e)),children:(0,y.jsx)(s.default,{
colors:[r.CommonUtils.colorRgba('#B2925E',1),r.CommonUtils.colorRgba('#E1B36C',1),r.CommonUtils.colorRgba('#6B3F0E',1)],start:{
x:.1,y:.3
}
,end:{
x:.7,y:.8
}
,children:(0,y.jsx)(o.Text,Object.assign({

}
,e,{
style:[e.style,{
opacity:0
}
]
}
))
}
)
}
)
}
,S=(0,i.forwardRef)((function(e,s){
var p,h=[],v=(0,i.useRef)(null),S=o.DeviceEventEmitter.addListener('showNextPopUp',(function(e){
'shopBrand'===e&&te()
}
)),x=e.configInfo,P=e.configInfo,w=P.displayMode,T=P.popup,j=P.videoStyle,U=P.videoUrl,I=P.videoSurfaceUrl,C=P.videoActionApKUrl,B=P.videoActionWapUrl,A=P.title,k=P.desc,R=P.bgDisplay,V=P.bgImageUrl,O=P.bgActionApkUrl,_=P.bgActionWapUrl,z=P.slotSwitch,M=P.clickVideoAction,D=e.dataArray,E=(0,i.useState)(!1),W=(0,t.default)(E,2),L=W[0],H=W[1],F=(0,i.useState)(null),N=(0,t.default)(F,2),G=N[0],K=N[1],Y=r.CommonUtils.getWindowSize(r.PAGE_TYPE.shop).screenHeight,q=(0,i.useState)(0),J=(0,t.default)(q,2),Q=J[0],X=J[1],Z=function(t,l,i){
var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n='fold'===w,a=e.navigation,s=e.carrierCode,u=r.PlatformUtils.isApp()?t:l,c={
type:n?'2':'1',index:i,url:u
}
;
if(e.clickItem(c),u&&!n&&(!o||o&&'otherPage'===M))r.RouterUtils.gotoPage(u);
else{
var p,f,h,y={
configInfo:x,dataArray:D.filter((function(e){
return'prod'===e.dataType
}
)),carrierCode:s
}
;
if(!n)y.currentPlayTime=null!=(p=null==v||null==(f=v.current)||null==(h=f.state)?void 0:h.currentTime)?p:0;
a.navigate('ShopBrand',y)
}

}
,$=function(){
Z(O,_,'1')
}
,ee=function(e){
e.stopPropagation(),Z(O,_,'2')
}
,te=function(){
var t,l=e.carrierCode;
'false'!==(r.PlatformUtils.isApp()?(null==(t=f.default.brandModalVisible)?void 0:t.get(l))||'true':window.sessionStorage.getItem('brandModalVisible'))&&'shopBrandPopup'===f.default.displayPopupType?'1'===T&&H(!0):H(!1)
}
;
(0,i.useEffect)((function(){
return te(),function(){
null==S||S.remove()
}

}
),[]);
var re=function(){
'noAction'!==M&&Z(C,B,'1',!0)
}
,le=function(e,t){
// 变量
var r: any = "vmall://com.vmall.client/product/detail?prdId="+e;
return t?r.concat('&skuCode=').concat(t):r
}
,ie=function(t,l,i){
// 变量
var o: any = 'ad'===l.dataType,n='';
n=o?r.PlatformUtils.isApp()?l.adActionUrl:l.adActionUrlWeb:r.PlatformUtils.isApp()?le(String(l.prdId),String(l.skuCode)):l.wapurl,p&&clearTimeout(p),p=setTimeout((function(){
var t={
type:'fold'===w?'2':'1',index:String(i+3),url:n
}
;
if(e.clickItem(t),r.PlatformUtils.isApp()&&'prod'===l.dataType){
// 变量
var o: any = l.productPageType,a=void 0===o?'':o,s=l.prdId,u=l.skuCode;
String(a)?r.RouterUtils.gotoProductDetailAllByType(String(a),s,u):r.RouterUtils.gotoProductDetailAll(String(s),String(u))
}
else r.RouterUtils.gotoPage(n)
}
),150)
}
,oe=function(t){
var l,i=e.carrierCode;
(r.PlatformUtils.isApp()?f.default.setBrandModalVisible(i,'false'):window.sessionStorage.setItem('brandModalVisible','false'),H(!1),'fold'!==w)&&(r.PlatformUtils.isApp()?X(t):null==v||null==(l=v.current)||null==l.seek||l.seek(t))
}
,ne=function(e,t,r){
var l;
switch(null!=(l=null==D?void 0:D.length)?l:1){
case 1:return r?e.padH1:t?e.pad1:e.normal1;
case 2:return r?e.padH2:t?e.pad2:e.normal2;
case 3:return r?e.padH3:t?e.pad3:e.normal3;
case 4:return r?e.padH4:t?e.pad4:e.normal4
}

}
,ae=function(e,t){
var r;
switch(null!=(r=null==D?void 0:D.length)?r:1){
case 1:return t?93:e?62:34;
case 2:return t?42:e?28:27;
case 3:return t?34:e?23:8;
case 4:return t?42:e?28:9
}

}
,se=function(e,t,i,n,a){
if('ad'===e.dataType)e.imgUrl=""+r.Service.cmsCndProdPath+e.adImgUrl;
else{
// 变量
var s: Function = /(http|https):\/\/([\w.]+\/?)\S*/.test(e.photoPath),u=s?'':r.Service.cmsCndProdPath;
e.imgUrl=e.customImage?u+e.photoPath+(s?'':e.photoName):u+e.photoPath+(s?'':'428_428_'+e.photoName);
// 变量
var c: any = e.productPageType,p=void 0===c?'':c,f=e.prdId,h=String(p)?r.RouterUtils.getProductDetailUrlForWebAllByType(String(p),f):r.RouterUtils.getProductDetailUrlForWebAll(f);
e.wapurl=h,e.weburl=h
}
return(0,y.jsx)(o.TouchableOpacity,{
style:t.productItem,activeOpacity:1,onPress:function(t){
return ie(0,e,i)
}
,children:(0,y.jsx)(o.View,{
style:{
margin:n?6:3,borderRadius:8
}
,children:(0,y.jsx)(l.FastImageView,{
resizeMode:'cover',imgUri:e.imgUrl,imgStyle:ne(t,n,a)
}
)
}
)
}
)
}
;
(0,i.useImperativeHandle)(s,(function(){
return{
itemlist:h,props:e
}

}
));
var de=function(e){
K({
layout:e.nativeEvent.layout
}
)
}
;
return(0,y.jsx)(r.WithTheme,{
themeStyles:n.default,children:function(t,i,n){
var s,p,f,S=function(){
return(0,r.ScreenSize)(n)
}
;
if(r.PlatformUtils.isPc(n))return(0,y.jsx)(o.View,{
style:{
marginTop:-24
}

}
);
var x,P,T='small'===S()?n-32-24:n-48-24,C='large'===S()?76*n/324:'small'===S()?76*(n-32)/324:76*(n-48)/324,B='small'===S()?116*(n-32)/328:116*(n-48)/328,O=function(){
return'medium'===(0,r.ScreenSize)(n)||'large'===(0,r.ScreenSize)(n)&&n<r.variables.safety_area
}
,_=function(){
return!(Y>n)&&n>=1024
}
,M=function(){
return O()&&_()
}
,E=(x=e.styleChange,P=(0,r.ScreenSize)(n),O()&&_()&&(P='large'),r.CommonUtils.isEmpty(x)?'':r.CommonUtils.getChangeStyle(x,P)),W=function(){
return'large'===S()?n:'small'===S()?n-32:n-48
}
;
return(0,y.jsxs)(o.View,{
ref:function(e){
e,e&&h.push(e)
}
,onLayout:de,children:['fold'===w?(0,y.jsx)(o.TouchableOpacity,{
activeOpacity:1,onPress:$,children:(0,y.jsxs)(l.ImageBackground,{
imgStyle:[{
borderRadius:16
}
],style:[t.foldView,O()&&{
height:64
}
,'large'===S()&&t.largeView,'small'!==S()&&{
marginLeft:24,marginRight:24
}
],imgUri:null==E?void 0:E.bgImg,imgViewStyle:[null!=E&&null!=(s=E.imgStyle)&&s.backgroundColor?null==E?void 0:E.imgStyle:{

}
,'large'!==S()&&t.bgBorder,r.PlatformUtils.isApp()&&{
width:'small'===S()?n-32:n-48
}
],resizeMode:"cover",children:[(0,y.jsxs)(o.View,{
style:t.foldTitleBg,children:[(0,y.jsx)(o.Image,{
style:{
width:16,height:16
}
,source:c.default.shopPlay
}
),r.PlatformUtils.isApp()?(0,y.jsx)(b,{
style:t.foldTitle,children:null!=A?A:(0,r.t)('brand_impression')
}
):(0,y.jsx)(o.Text,{
style:t.foldTitle,nativeID:'shopBrandTitle',children:null!=A?A:(0,r.t)('brand_impression')
}
)]
}
),(0,y.jsx)(o.View,{
style:t.foldDecider
}
),(0,y.jsx)(o.View,{
style:t.foldDescL,children:(0,y.jsx)(o.Text,{
style:t.foldDesc,numberOfLines:1,ellipsizeMode:'tail',children:k
}
)
}
),(0,y.jsx)(o.View,{
style:t.attentionsWrap,children:(0,y.jsx)(l.SvgIcon,{
normalCol:r.DarkStore.darkBool?i.C25.color:i.C15.color,viewBox:'-300 0 1024 1024',opacity:r.DarkStore.darkBool?i.C25.color:i.C15.opacity,iconName:"ic24-more",width:12,height:24
}
)
}
)]
}
)
}
):(0,y.jsx)(o.TouchableOpacity,{
style:[t.default,'small'!==S()&&{
marginLeft:24,marginRight:24
}
,'large'===S()&&t.largeView],onPress:ee,activeOpacity:1,children:(0,y.jsxs)(l.ImageBackground,{
imgStyle:[{
borderRadius:16
}
,'large'===S()&&{
borderRadius:0
}
],style:{
width:'100%'
}
,imgUri:E.bgImg?E.bgImg:'1'===R?V:'',imgViewStyle:[null!=E&&null!=(p=E.imgStyle)&&p.backgroundColor?null==E?void 0:E.imgStyle:{

}
,'large'!==S()&&t.bgBorder],localSource:!E.bgImg&&!(null!=E&&null!=(f=E.imgStyle)&&f.backgroundColor)&&'1'!==R&&c.default.brandBgDefault,resizeMode:"cover",children:[(0,y.jsx)(l.ImageBackground,{
imgStyle:[{
width:W(),height:C,borderTopLeftRadius:16,borderTopRightRadius:16,borderColor:'transparent',borderWidth:2,borderBottomWidth:0
}
,'large'===S()&&{
borderTopLeftRadius:0,borderTopRightRadius:0
}
],localSource:c.default.brandTopBg,resizeMode:"cover",children:(0,y.jsxs)(o.View,{
style:{
height:C,justifyContent:'center'
}
,children:[(0,y.jsx)(o.View,{
style:[t.foldTitleBg,t.defaultTitleL,'small'!==S()&&{
marginBottom:32
}
],children:r.PlatformUtils.isApp()?(0,y.jsx)(b,{
style:[t.foldTitle,t.defaultTitle,O()&&t.padTitle],children:null!=A?A:(0,r.t)('brand_impression')
}
):(0,y.jsx)(o.Text,{
style:[t.foldTitle,t.defaultTitle,O()&&t.padTitle],nativeID:'shopBrandTitle',children:null!=A?A:(0,r.t)('brand_impression')
}
)
}
),(0,y.jsx)(o.View,{
children:(0,y.jsx)(o.Text,{
style:[t.foldDesc,t.defaultTitle,O()&&t.padDesc],numberOfLines:1,ellipsizeMode:'tail',children:null!=k?k:(0,r.t)('nut_smart_home')
}
)
}
)]
}
)
}
),(0,y.jsx)(o.TouchableOpacity,{
style:[t.video,{
width:T,height:'3:4'===j?4*T/3:'16:9'===j?9*T/16:T,zIndex:9e3
}
,('1'!==z||!D.length)&&{
marginBottom:32
}
],activeOpacity:1,onPress:re,children:(0,y.jsx)(a.default,{
ref:v,hideSlider:!0,width:'100%',height:'100%',sourceUrl:U,isPause:L,autoPlay:!L,repeat:!0,currentPlayTime:Q,aspectRatioWap:j,isVoice:!1,poster:I,playerParentStyle:t.videoPlayerStyle
}
)
}
),'1'===z&&D.length?(0,y.jsxs)(y.Fragment,{
children:[(0,y.jsx)(l.ImageBackground,{
imgStyle:[{
width:W(),height:B
}
],style:[{
height:B,position:'absolute',zIndex:8e3,bottom:1===D.length?12:42
}
],localSource:c.default.brandPartBorder,resizeMode:"cover"
}
),(0,y.jsx)(o.View,{
style:[{
height:O()?B+26+30:B+12+30,marginTop:-(ae(O(),M())+(O()?8:3)+10),zIndex:1e4
}
,'web'===o.Platform.OS&&{
zIndex:9e3
}
],children:(0,y.jsx)(o.FlatList,{
style:[t.middleLableLayout,{
width:T-18,zIndex:9100,flexGrow:0
}
],contentContainerStyle:[{
justifyContent:'space-around',width:'100%'
}
,1===D.length&&{
justifyContent:'center'
}
],horizontal:!0,data:D,renderItem:function(e){
// 变量
var r: any = e.item,l=e.index;
return se(r,t,l,O(),M())
}
,scrollEnabled:!1,initialNumToRender:20,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,keyExtractor:function(e,t){
return t.toString()
}

}
)
}
)]
}
):null]
}
)
}
),(0,y.jsx)(u.default,{
modalVisible:L,title:A,closeModal:oe,layout:G,videoStyle:j,videoUrl:U,videoSurfaceUrl:I,desc:k,topBgHeight:C,displayMode:w
}
)]
}
)
}

}
)
}
));
S.displayName='ShopBrand';
_e.default=(0,r.Componentautoscaling)((0,r.monitor)(p.default)((0,r.ItemExposeHoc)(S)))
}
),"ee7eae8b08625fb143d8ce18587c417e437c6469b5e6a45ed367ffcd9b5b3207",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","535345138ac61ffa5243d6383615fb573600e85eb01b6330559a78b9def4811f","ea31249652c74a92b5af97ef69ffbc31a8683b72fb3689add7cc686994489f26","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","ec07f85f76537444fa45f999ede8d8bad53b4049d951e24e96a23aaf4c13a4d8","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","6ccee2b291ea406d2190813776e8145bbd93eb896cd1e1269cb18180ee06b546","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","b779556ae734962d495fe508a0313f057835b69c318f1523de48522d3dafd0b4","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
backImgStyle:{
borderRadius:16,width:'100%'
}
,foldView:{
backgroundColor:n.C17.color,borderRadius:16,height:48,marginLeft:16,marginRight:16,flexDirection:'row',alignItems:'center',paddingHorizontal:12
}
,largeView:{
maxWidth:1200,width:1200,marginLeft:'auto',marginRight:'auto',borderRadius:0
}
,foldDecider:{
borderWidth:2,borderTopWidth:0,borderBottomWidth:0,borderLeftWidth:0,borderColor:'#E6B677',height:13,marginLeft:11,marginRight:7
}
,foldTitle:Object.assign({

}
,n.T10,{
marginLeft:10
}
),foldTitleBg:{
flexDirection:'row',alignItems:'center'
}
,foldDescL:{
flex:1
}
,foldDesc:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.C11,n.T8,{
fontWeight:'500'
}
),default:{
marginLeft:16,marginRight:16,alignItems:'center'
}
,desc:{
marginTop:12
}
,descText:{
opacity:.7,fontFamily:o.PublicFont.fontFamilyMedium,fontSize:14,color:'#000000',textAlign:'center',fontWeight:'500'
}
,productItem:{
zIndex:9100
}
,attentionsWrap:{
marginTop:26,marginBottom:26,marginLeft:'auto',width:12
}
,video:{
alignSelf:'center',marginTop:12
}
,defaultTitle:{
textAlign:'center',marginLeft:0
}
,defaultTitleL:{
marginBottom:12,justifyContent:'center'
}
,videoPlayerStyle:{
borderColor:'rgba(198,160,104,0.75)',borderWidth:2,borderRadius:16
}
,middleLableLayout:{
alignSelf:'center'
}
,normal1:{
width:109,height:109
}
,normal2:{
width:89,height:89
}
,normal3:{
width:73,height:73
}
,normal4:{
width:58,height:58
}
,pad1:{
width:206,height:206
}
,pad2:{
width:162,height:162
}
,pad3:{
width:128,height:128
}
,pad4:{
width:112,height:112
}
,padH1:{
width:309,height:309
}
,padH2:{
width:243,height:243
}
,padH3:{
width:192,height:192
}
,padH4:{
width:134,height:134
}
,padTitle:{
fontSize:32,lineHeight:38,fontWeight:'400',fontFamily:o.PublicFont.fontFamilyBase
}
,padDesc:Object.assign({

}
,n.T11),bgBorder:{
borderRadius:16,overflow:'hidden'
}

}
)
}

}
),"535345138ac61ffa5243d6383615fb573600e85eb01b6330559a78b9def4811f",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),i=e(_r(d[2])),a=e(_r(d[3])),s=e(_r(d[4])),n=e(_r(d[5])),o=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = P(t);
if(i&&i.has(e))return i.get(e);
var a={
__proto__:null
}
,s=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var o: any = s?Object.getOwnPropertyDescriptor(e,n):null;
o&&(o.get||o.set)?Object.defineProperty(a,n,o):a[n]=e[n]
}
return a.default=e,i&&i.set(e,a),a
}
)(_r(d[6])),r=_r(d[7]),l=e(_r(d[8])),u=_r(d[9]),c=e(_r(d[10])),h=e(_r(d[11])),p=e(_r(d[12])),f=_r(d[13]),y=_r(d[14]);
// 函数
function P(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(P=function(e){
return e?i:t
}
)(e)
}
// 函数
function v(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(v=function(){
return!!e
}
)()
}
var S=(function(e){
// 函数
function P(e: any): any {
var i,n,r,l,c,h;
return(0,t.default)(this,P),l=this,c=P,h=[e],c=(0,s.default)(c),(r=(0,a.default)(l,v()?Reflect.construct(c,h||[],(0,s.default)(l).constructor):c.apply(l,h))).player=o.default.createRef(),r.muted=null==(i=null==(n=r.props)?void 0:n.isMuted)||i,r.paused=!0,r.isLoaded=!1,r.loading=!1,r.reachEnd=!1,r.height=u.CommonUtils.getWindowSize(u.PAGE_TYPE.shop).screenHeight,r.originWidth=u.CommonUtils.getWindowSize(u.PAGE_TYPE.shop).screenWidth,r.pressPlay=function(){
// 变量
var e: any = r.props.isPlayPress;
setTimeout((function(){
e&&r.play()
}
),100)
}
,r.play=function(){
var e,t=r.props.isPlayPress;
u.PlatformUtils.isIOS()&&!t&&(r.reachEnd=!1,null==(e=r.player)||null==e.seek||e.seek(0));
r.setState({
loadVideo:!0,isPaused:!1
}
)
}
,r.playStart=function(){
var e;
null==(e=r.player)||null==e.seek||e.seek(0),r.setState({
loadVideo:!0,isPaused:!1
}
)
}
,r.pause=function(){
r.setState({
isPaused:!0,isLoaded:!1
}
)
}
,r.seek=function(e){
r.setState({
isPaused:!1,loadVideo:!0,currentTime:e
}
,(function(){
var t;
null==(t=r.player)||null==t.seek||t.seek(e)
}
))
}
,r.onEnd=function(){
var e,t=r.props;
t.isPlayPress;
t.repeat||(r.setState({
isPaused:!0,currentTime:r.state.duration
}
),u.PlatformUtils.isIOS()?r.reachEnd=!0:null==(e=r.player)||e.seek(0))
}
,r.isPad=function(){
// 变量
var e: any = r.originWidth;
return'medium'===(0,u.ScreenSize)(e)||'large'===(0,u.ScreenSize)(e)&&e<u.variables.safety_area
}
,r.isPadHorizontal=function(){
return!(r.height>r.originWidth)&&r.originWidth>=1024
}
,r.isPadH=function(){
return r.isPad()&&r.isPadHorizontal()
}
,r.onLoad=function(e){
var t;
(r.state.duration!==e.duration&&r.setState({
duration:e.duration
}
),r.props.currentPlayTime)&&(null==(t=r.player)||t.seek(r.props.currentPlayTime))
}
,r.state={
loadVideo:!1,isMuted:r.muted,isPaused:r.paused,isLoading:r.loading,isLoaded:r.isLoaded,currentTime:0,duration:0
}
,r.handleProcess=r.handleProcess.bind(r),r.seek=r.seek.bind(r),r
}
return(0,n.default)(P,e),(0,i.default)(P,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this.props,t=e.isPause;
e.currentPlayTime;
t?this.pause():this.play()
}

}
,{
key:"UNSAFE_componentWillReceiveProps",value:function(e){
e.currentPlayTime!==this.props.currentPlayTime&&e.currentPlayTime&&this.seek(e.currentPlayTime)
}

}
,{
key:"setPlayState",value:function(e){
this.paused=e,this.setState({
isPaused:e
}
)
}

}
,{
key:"handleProcess",value:function(e){
// 变量
var t: any = this,i=Number((this.state.duration*e).toFixed(2));
this.setState({
isPaused:!1,currentTime:i
}
,(function(){
var e;
null==(e=t.player)||null==e.seek||e.seek(i)
}
))
}

}
,{
key:"setMuteState",value:function(e){
this.muted=e,this.setState({
isMuted:e
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,i=t.sourceUrl,a=t.poster,s=t.width,n=t.height,o=(t.isPause,t.isVoice),P=t.isPlayPress,v=t.resizeMode,S=t.isHighQuality,k=t.playerParentStyle,x=t.hideSlider,w=t.repeat,j=t.videoWidth,T=t.aspectRatioWap,b=t.isFixScreen,L=u.DarkStore.darkBool;
return(0,y.jsx)(u.WithTheme,{
themeStyles:c.default,children:function(t,c,V){
return e.originWidth=V,(0,y.jsxs)(r.View,{
style:t.videobox,children:[(0,y.jsx)(r.View,{
style:[t.videoflex,{
width:s,height:n,backgroundColor:c.C34.color
}
,k&&{
borderRadius:16
}
],children:e.state.loadVideo?(0,y.jsx)(l.default,{
source:{
uri:i,cache:!0
}
,onEnd:e.onEnd,ref:function(t){
e.player=t
}
,onLoadStart:function(){
e.setState({
isLoading:!0
}
)
}
,onReadyForDisplay:function(){
e.setState({
isLoading:!1,isLoaded:!0
}
)
}
,onPlaybackStalled:function(){
e.setState({
isLoading:!0
}
)
}
,onPlaybackResume:function(){
e.setState({
isLoading:!1
}
)
}
,onProgress:function(t){
// 变量
var i: any = t.currentTime;
i>.01&&!e.state.isLoaded&&e.setState({
isLoaded:!0
}
),e.setState({
currentTime:i
}
)
}
,paused:e.state.isPaused,muted:e.state.isMuted,repeat:w,resizeMode:'cover',style:[{
width:s,height:n
}
,k],onLoad:e.onLoad
}
):null
}
),x?null:(0,y.jsxs)(r.View,{
style:[t.controls,e.isPad()&&'3:4'===T&&t.pad34SliderStyle,e.isPad()&&{
paddingHorizontal:24
}
,(e.isPadH()||e.isPad()&&b&&'16:9'!==T)&&t.pad34SliderStyle,(e.isPadH()||e.isPad()&&b&&'16:9'!==T)&&{
left:-((V-j)/2-24),width:V-48
}
],children:[(0,y.jsx)(p.default,{
height:40,min:0,max:e.state.duration,defaultValue:0,step:.01,onAfterChange:e.handleProcess,maximumTrackTintColor:u.CommonUtils.colorRgba('#fff',.2),minimumTrackTintColor:"#D20A2C",processHeight:5,isFixScreen:b,currentTime:e.state.currentTime,thumbImage:h.default.shopSlider
}
),o&&e.state.isLoaded&&(0,y.jsxs)(r.TouchableOpacity,{
onPress:function(){
e.setMuteState(!e.muted)
}
,children:[(0,y.jsx)(r.View,{
style:t.videoVoiceCircle
}
),(0,y.jsx)(r.View,{
style:t.absolutePosition,children:e.state.isMuted?(0,y.jsx)(f.SvgIcon,{
iconName:"muted",normalCol:'#fff',opacity:L?.86:1,width:24,height:24
}
):(0,y.jsx)(f.SvgIcon,{
iconName:"voice",normalCol:'#fff',opacity:L?.86:1,width:24,height:24
}
)
}
)]
}
)||null]
}
),e.state.isPaused||!e.state.isLoaded&&!e.state.isLoading?(0,y.jsxs)(y.Fragment,{
children:[a?(0,y.jsx)(r.View,{
style:[{
position:'absolute',width:s,height:n,backgroundColor:c.C33.color
}
,k],children:(0,y.jsx)(f.FastImageView,{
isHighQuality:S,useImageStyle:!0,imgUri:a,imgStyle:[{
width:s,height:n
}
,k&&{
borderRadius:16
}
],resizeMode:v||'cover'
}
)
}
):null,(0,y.jsx)(r.View,{
style:[t.videoPlay,{
zIndex:1
}
,t.appVideoPlayIcon],children:P?(0,y.jsx)(r.TouchableOpacity,{
onPress:e.pressPlay,children:(0,y.jsx)(f.SvgIcon,{
normalCol:'#fff',iconName:"play",width:24,height:24
}
)
}
):(0,y.jsx)(f.SvgIcon,{
normalCol:'#fff',iconName:"play",width:24,height:24
}
)
}
)]
}
):null,e.state.isLoading&&!e.state.isPaused?(0,y.jsx)(r.View,{
style:[{
position:'absolute',backgroundColor:'transparent'
}
,t.appVideoPlayIcon],children:(0,y.jsx)(r.ActivityIndicator,{
size:52,color:"#ddd"
}
)
}
):null,e.state.isPaused||!e.state.isLoaded&&!e.state.isLoading?(0,y.jsx)(r.View,{
style:[t.videoPlayCircle,t.appVideoPlayIcon]
}
):null]
}
)
}

}
)
}

}
])
}
)(o.PureComponent);
S.defaultProps={
sourceUrl:'',poster:'',width:'100%',height:'100%',isVoice:'true',repeat:!1,currentPlayTime:0
}
;
_e.default=S
}
),"ea31249652c74a92b5af97ef69ffbc31a8683b72fb3689add7cc686994489f26",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","47f4475fd8b7e7ae4cc30987cfec68cfc9a9c8a47cac41847672d982f8641b02","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","bf33c4459d72d18ff642ce50f0f4c665c7fa7f8a1b43a7774240096ad9236728","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","cad08ff06ee8afd5c92e687ab0643ab0ba3d6b17844044f017a85bb0dd3c3b61","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
videobox:{
justifyContent:'space-between',alignItems:'center'
}
,videoflex:{
justifyContent:'center',alignItems:'center'
}
,videoPlay:{
position:'absolute',backgroundColor:'transparent',width:52,height:52,borderRadius:26,paddingLeft:10,justifyContent:'center',alignItems:'center'
}
,videoPlayOne:{
backgroundColor:'transparent',width:12,height:12,borderRadius:26,paddingLeft:6,paddingBottom:2,justifyContent:'center',alignItems:'center'
}
,videoMarkText:Object.assign({
marginLeft:2,marginBottom:1,alignItems:'center',justifyContent:'center'
}
,n.T3,n.C17),videoPlayMini:{
position:'absolute',width:32,height:32,right:8,top:8
}
,videoPlayCircle:{
position:'absolute',backgroundColor:'#000',opacity:.38,width:52,height:52,borderRadius:26,borderColor:'#fff',borderWidth:2
}
,videopPlayCircleOne:{
top:8,left:8,position:'absolute',backgroundColor:'#000',opacity:.38,width:50,height:20,borderRadius:10,borderColor:'#fff',borderWidth:2
}
,oneLittleBlock:{
flexDirection:'row',justifyContent:'center',alignItems:'center',position:'absolute',top:10,left:12,zIndex:1
}
,videoVoiceCircle:{
backgroundColor:'#fff',opacity:.2,width:32,height:32,borderRadius:16
}
,absolutePosition:{
position:'absolute',top:0,left:0,bottom:0,right:0,justifyContent:'center',alignItems:'center'
}
,toast:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T4,{
color:'#FFFFFF',position:'absolute',top:6,left:8
}
),playBtn:{
paddingLeft:5,justifyContent:'center',alignItems:'center',width:52,height:52,borderRadius:26,backgroundColor:'rgba(0, 0, 0, 0.38)',borderWidth:2,borderColor:'rgba(255, 255, 255, 0.38)'
}
,playBtnOne:{
flexDirection:'row',paddingLeft:4,justifyContent:'center',alignItems:'center',width:50,height:20,borderRadius:10,backgroundColor:'rgba(0, 0, 0, 0.38)',borderWidth:2,borderColor:'rgba(255, 255, 255, 0.38)'
}
,playIconOne:{
width:10,height:10
}
,playIcon:{
width:17,height:20
}
,controls:{
flexDirection:'row',alignItems:'center',paddingHorizontal:16,height:40
}
,appVideoPlayIcon:{
top:'50%',marginTop:-26
}
,pad34SliderStyle:{
position:'absolute',bottom:160,width:'100%',paddingHorizontal:0
}

}
)
}

}
),"bf33c4459d72d18ff642ce50f0f4c665c7fa7f8a1b43a7774240096ad9236728",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),n=e(r(d[2])),o=e(r(d[3])),s=e(r(d[4])),u=e(r(d[5])),h=e(r(d[6])),c=r(d[7]),l=r(d[8]),p=e(r(d[9])),f=r(d[10]);
// 函数
function b(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(b=function(){
return!!e
}
)()
}
var v=c.StyleSheet.create({
time:{
fontFamily:l.PublicFont.fontFamilyBase,fontSize:10,color:'#FFFFFF',lineHeight:13,fontWeight:'400'
}
,centerContainer:{
flexDirection:'row',justifyContent:'center',alignItems:'center',flex:1
}

}
),x=c.Dimensions.get('window').width,y=c.Dimensions.get('window').height,P=58,S=_e.default=(function(e){
// 函数
function h(e: any): any {
var n,u,c,p;
return(0,t.default)(this,h),u=this,c=h,p=[e],c=(0,s.default)(c),(n=(0,o.default)(u,b()?Reflect.construct(c,p||[],(0,s.default)(u).constructor):c.apply(u,p))).onLayout=function(e){
// 变量
var t: any = n.props.thumbSize;
n.setState({
processWidth:e.nativeEvent.layout.width-t
}
)
}
,n.isPad=function(){
// 变量
var e: any = n.props.width;
return'medium'===(0,l.ScreenSize)(e)||'large'===(0,l.ScreenSize)(e)&&e<l.variables.safety_area
}
,n.isPadHorizontal=function(){
// 变量
var e: any = n.props.width;
return!(y>e)&&e>=1024
}
,n.isPadH=function(){
return n.isPad()&&n.isPadHorizontal()
}
,n.getTwoDecimals=function(e,t){
// 变量
var n: any = e.toFixed(2),o=t.toFixed(2);
return Number((n*o).toFixed(2))
}
,n.state={
process:0,processWidth:0
}
,n._onPanResponderEnd=n._onPanResponderEnd.bind(n),n._onPanResponderGrant=n._onPanResponderGrant.bind(n),n._onPanResponderMove=n._onPanResponderMove.bind(n),n
}
return(0,u.default)(h,e),(0,n.default)(h,[{
key:"UNSAFE_componentWillReceiveProps",value:function(e){
e.currentTime!==this.props.currentTime&&this.props.max&&this.setState({
process:e.currentTime/this.props.max
}
),e.max!==this.props.max&&e.max&&this.setState({
process:e.currentTime/e.max
}
)
}

}
,{
key:"UNSAFE_componentWillMount",value:function(){
this.panWatcher=c.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onPanResponderGrant:this._onPanResponderGrant,onPanResponderMove:this._onPanResponderMove,onPanResponderEnd:this._onPanResponderEnd
}
)
}

}
,{
key:"_onPanResponderGrant",value:function(e,t){
// 变量
var n: any = this.state.processWidth,o=this.props.thumbSize,s=(t.x0-o/2-P)/n;
this._changeProcess(s)
}

}
,{
key:"isFlowProcess",value:function(e,t){
// 变量
var n: any = this.state.processWidth;
return t.x0-t.dx<P||t.x0-t.dx>n+P
}

}
,{
key:"_onPanResponderMove",value:function(e,t){
// 变量
var n: any = this.props.thumbSize,o=this.state.processWidth,s=(t.x0-n/2-P+t.dx)/o;
this._changeProcess(s)
}

}
,{
key:"_onPanResponderEnd",value:function(e,t){
// 变量
var n: any = this.props,o=n.onAfterChange,s=n.thumbSize,u=this.state.processWidth,h=((t.x0-P>u+P?u+P:t.x0)-s/2-P+t.dx)/u;
h>=0&&h<=1&&o&&o(h)
}

}
,{
key:"_changeProcess",value:function(e){
// 变量
var t: any = this.props,n=t.disabled,o=t.min,s=t.max,u=t.step,h=t.onChange,c=this.state.process;
if(!n&&e>=0&&e<=1){
h(e);
// 变量
var l: any = s-o,p=e*l,f=Math.round(p/u)*u/l;
c!==f&&this.setState({
process:f
}
)
}

}

}
,{
key:"_getThumbView",value:function(){
// 变量
var e: any = this.state,t=e.process,n=e.processWidth,o=this.props,s=o.thumbImage,u=o.thumbSize,h=this.getTwoDecimals(t,n);
return s?(0,f.jsx)(c.Image,{
style:{
position:'absolute',left:isNaN(h)?0:h,width:u,height:u
}
,source:s
}
):(0,f.jsx)(c.View,{
style:{
position:'absolute',left:h,borderRadius:u/2,backgroundColor:'#808080',width:u,height:u
}

}
)
}

}
,{
key:"secs2MinSecs",value:function(e){
// 变量
var t: any = Math.round(e),n=Math.floor(t/60),o=t%60;
return this.padTo2Digits(n)+":"+this.padTo2Digits(o)
}

}
,{
key:"padTo2Digits",value:function(e){
return String(e).padStart(2,'0')
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this.state,t=e.process,n=e.processWidth,o=this.props,s=o.height,u=o.maximumTrackTintColor,h=o.minimumTrackTintColor,l=o.thumbSize,p=o.processHeight,b=o.max,x=o.currentTime,y=this.getTwoDecimals(t,n);
return(0,f.jsxs)(c.View,{
style:[v.centerContainer,{
height:s
}
],children:[(0,f.jsx)(c.Text,{
style:v.time,children:this.secs2MinSecs(x)
}
),(0,f.jsxs)(c.View,Object.assign({
style:[v.centerContainer,{
height:s
}
],onLayout:this.onLayout
}
,this.panWatcher.panHandlers,{
children:[(0,f.jsx)(c.View,{
style:[{
backgroundColor:h,width:isNaN(y)?0:y,height:p,marginLeft:l/2,borderRadius:12
}
,y?{
width:y
}
:{

}
]
}
),(0,f.jsx)(c.View,{
style:{
backgroundColor:u,flex:1,height:p,borderRadius:12,marginRight:l/2
}

}
),this._getThumbView()]
}
)),(0,f.jsx)(c.Text,{
style:[v.time,{
marginLeft:12,marginRight:16
}
],children:b?this.secs2MinSecs(b):'00:00'
}
)]
}
)
}

}
])
}
)(h.default.Component);
S.propTypes={
height:p.default.number,width:p.default.number,min:p.default.number.isRequired,max:p.default.number.isRequired,thumbSize:p.default.number,thumbImage:p.default.number,defaultValue:p.default.number,step:p.default.number.isRequired,disabled:p.default.bool,processHeight:p.default.number,maximumTrackTintColor:p.default.string,minimumTrackTintColor:p.default.string,onChange:p.default.func,onAfterChange:p.default.func
}
,S.defaultProps={
height:60,width:x,thumbSize:30,thumbImage:null,processHeight:7,currentTime:0,max:0,defaultValue:0,disabled:!1,maximumTrackTintColor:'#dcdbdb',minimumTrackTintColor:'#577BFF',onChange:function(){

}
,onAfterChange:function(){

}

}

}
),"cad08ff06ee8afd5c92e687ab0643ab0ba3d6b17844044f017a85bb0dd3c3b61",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","d1ff9184f8984b6ec3dce33282f881632d3eee074d9277a273e09978bdee2e6c","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=function(e){
var h,v=(0,n.useRef)(null),b=(0,n.useRef)(null),w=(0,n.useRef)(new i.Animated.Value(1)).current,S=l.CommonUtils.getWindowSize(l.PAGE_TYPE.shop).screenWidth,x=(0,n.useState)(!1),j=(0,t.default)(x,2),P=j[0],T=j[1],_=l.CommonUtils.getWindowSize(l.PAGE_TYPE.shop).screenHeight,O=(0,n.useState)(0),E=(0,t.default)(O,2),V=E[0],M=E[1],A=e.modalVisible,R=e.closeModal,z=e.videoStyle,U=e.videoUrl,W=e.videoSurfaceUrl,B=e.title,I=e.desc,C=e.layout,D=e.topBgHeight,L=e.displayMode,k=function(e){
v.current=e
}
,H=function(e){
M(e.nativeEvent.layout.height),h=setTimeout((function(){
Y(),h&&clearTimeout(h)
}
),5e3)
}
,Y=function(){
i.Animated.timing(w,{
toValue:0,duration:1e3,delay:500,useNativeDriver:!0
}
).start((function(e){
var t,n,l=e.finished;
('web'===i.Platform.OS&&setTimeout((function(){
document.documentElement.style.overflowY='scroll';
// 变量
var e: any = document.getElementById(y);
u.default.isEmpty(e)||document.body.removeChild(e)
}
),100),l)&&(null==R||R(null==(t=v.current)||null==(n=t.state)?void 0:n.currentTime))
}
))
}
;
(0,n.useEffect)((function(){
l.PlatformUtils.isApp()&&l.DeviceUtils.isFixScreen().then((function(e){
T(e)
}
))
}
),[S]);
var F=function(e,t,n,o,a,u){
var h,y,v=null!=(h=null==C||null==(y=C.layout)?void 0:y.height)?h:48,S='fold'===L?_/2-56-96-v/2:_/2-56-96-D-12-.1*(null!=u?u:0)/2,x='web'===i.Platform.OS?S-68:'ios'===i.Platform.OS?S-p+5:S+5;
return(0,f.jsx)(i.View,{
style:[e.mask,t&&{
paddingHorizontal:24
}
,(n||'web'===i.Platform.OS&&t||P&&t)&&{
paddingHorizontal:98,alignItems:'center'
}
],children:(0,f.jsx)(i.Animated.View,{
style:[e.bgAll,{
position:'absolute'
}
,{
transform:[{
translateY:w.interpolate({
inputRange:[0,1],outputRange:[-x,0]
}
)
}
,{
scale:w.interpolate({
inputRange:[0,1],outputRange:[.05,1]
}
)
}
]
}
],ref:b,children:(0,f.jsxs)(i.View,{
onLayout:H,children:[(0,f.jsx)(r.ImageBackground,{
style:{
height:40
}
,imgStyle:{
width:116,height:40
}
,localSource:s.default.brandModalTitle,resizeMode:"cover",imgViewStyle:e.imgViewStyle,children:(0,f.jsx)(i.View,{
style:e.titleLayout,children:(0,f.jsx)(i.Text,{
style:e.title,children:null!=B?B:(0,l.t)('brand_impression')
}
)
}
)
}
),(0,f.jsx)(i.TouchableOpacity,{
onPress:Y,style:e.closeIcon,children:(0,f.jsx)(r.SvgIcon,{
iconName:"popup_close",width:"24",height:"24",normalCol:"#FCDEA1",opacity:.9
}
)
}
),(0,f.jsx)(i.View,{
style:e.descLayout,children:(0,f.jsx)(i.Text,{
style:e.bottomText,numberOfLines:1,ellipsizeMode:'tail',children:null!=I?I:(0,l.t)('nut_smart_home')
}
)
}
),(0,f.jsx)(i.View,{
style:[e.video,{
width:o,height:a
}
],children:(0,f.jsx)(c.default,{
ref:k,hideSlider:!0,width:'100%',height:'100%',sourceUrl:U,repeat:!0,isPause:!1,aspectRatioWap:z,isVoice:!1,autoPlay:!0,poster:null!=W?W:'',playerParentStyle:e.videoPlayerStyle
}
)
}
),(0,f.jsxs)(i.View,{
style:e.bottom,children:[(0,f.jsx)(i.Text,{
style:e.bottomText,children:"\u2014\u2014\u2014 "+(0,l.t)('smart_living')+"
}
"
}
),(0,f.jsx)(i.Text,{
style:e.bottomText,children:'VMALL'
}
)]
}
)]
}
)
}
)
}
)
}
;
return(0,f.jsx)(l.WithTheme,{
themeStyles:o.default,children:function(e,t,n){
S=n;
var r=function(){
// 变量
var e: any = S;
return'medium'===(0,l.ScreenSize)(e)||'large'===(0,l.ScreenSize)(e)&&e<l.variables.safety_area
}
,o=function(){
return r()&&!(_>S)&&S>=1024
}
,s=function(){
if(o()||'web'===i.Platform.OS&&r()||P&&r()&&'16:9'!==z){
return'3:4'===z?295.5:'16:9'===z?700.4444444444445:394
}
return r()?'3:4'===z?S-48-172:S-48-32:S-32
}
,c=o()||'web'===i.Platform.OS&&r()||P&&r()?394:'3:4'===z?4*s()/3:'16:9'===z?9*s()/16:s();
if('web'===i.Platform.OS){
if(!A)return null;
var h=document.getElementById(y)||{

}
;
if(u.default.isEmpty(h)||V){
var p=document.createElement('div');
p.setAttribute('id',y),document.body.appendChild(p),a.default.render(F(e,r(),o(),s(),c,V),document.getElementById(y))
}
return null
}
return(0,f.jsx)(f.Fragment,{
children:(0,f.jsx)(i.Modal,{
animationType:"fade",transparent:!0,visible:A,statusBarTranslucent:!0,children:F(e,r(),o(),s(),c,V)
}
)
}
)
}

}
)
}
;
var t=e(_r(d[1])),n=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = h(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,l=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var o: any = l?Object.getOwnPropertyDescriptor(e,r):null;
o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[2])),i=_r(d[3]),l=_r(d[4]),r=_r(d[5]),o=e(_r(d[6])),a=e(_r(d[7])),u=e(_r(d[8])),s=e(_r(d[9])),c=e(_r(d[10])),f=_r(d[11]);
// 函数
function h(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(h=function(e){
return e?n:t
}
)(e)
}
var y='shopRuleModal',p=0;
l.DeviceUtils.getStatusBarHeight().then((function(e){
p=e
}
)).catch((function(){

}
))
}
),"ec07f85f76537444fa45f999ede8d8bad53b4049d951e24e96a23aaf4c13a4d8",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","3671d0ef59e6da8bdb6edbd1ac3e3f866a2e83ef73c4561b80f647e09d33c1dc","3333e4da975158a578269d7b903373061c90b2d73f044c48dc110568d51aa71f","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","ea31249652c74a92b5af97ef69ffbc31a8683b72fb3689add7cc686994489f26","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]),n=0,l='ios'===t.Platform.OS?n:t.StatusBar.currentHeight;
'ios'===t.Platform.OS&&o.DeviceUtils.getStatusBarHeight().then((function(t){
n=t
}
)).catch((function(){

}
));
e.default=function(n){
return t.StyleSheet.create({
bgAll:{
backgroundColor:n.C83.color+n.opacityMap[n.C83.opacity],borderRadius:16,borderWidth:2,paddingHorizontal:14,textAlign:'center',borderColor:'rgba(198,160,104,0.75)'
}
,mask:{
position:'web'===t.Platform.OS?'fixed':'absolute',top:'web'===t.Platform.OS?0:l,right:0,width:'100%',height:'100%',zIndex:9998,elevation:9998,backgroundColor:n.C73.color+n.opacityMap[n.C73.opacity],justifyContent:'center',alignItems:'center'
}
,bottom:{
height:42,flexDirection:'column',justifyContent:'center',alignItems:'flex-end',marginBottom:16
}
,bottomText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T10,{
color:'#FCDEA1',fontWeight:'500'
}
),descLayout:{
marginBottom:16,alignItems:'center'
}
,title:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T8,{
color:'#FCDEA1',fontWeight:'400'
}
),titleLayout:{
alignItems:'center',marginTop:-10
}
,imgViewStyle:{
alignItems:'center',marginTop:-18
}
,video:{
marginBottom:16,alignSelf:'center'
}
,closeIcon:{
position:'absolute',top:8,right:8
}
,videoPlayerStyle:{
borderColor:'rgba(198,160,104,0.75)',borderWidth:2,borderRadius:16
}

}
)
}

}
),"3671d0ef59e6da8bdb6edbd1ac3e3f866a2e83ef73c4561b80f647e09d33c1dc",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default={
exposeItem:function(){
// 变量
var o: any = this.props,n=o.id,l=o.pageCatCode,p=void 0===l?'':l,u=o.pageCatName,c=void 0===u?'':u;
return{
data:{
actionCode:'100660026',actionName:'\u54c1\u724c\u4e13\u533a\u66dd\u5149',eventType:t.EVENT_TYPE.EVENT_TYPE_EXPOSURE,content:{
comId:null==n?void 0:n.toString(),exposure:'1'
}
,pageCatCode:p,pageCatName:c
}

}

}
,clickItem:function(o){
var n,l,p,u=this.props,c=u.id,v=u.pageCatCode,C=void 0===v?'':v,E=u.pageCatName,N=void 0===E?'':E;
return{
data:{
actionCode:'100660024',actionName:'\u70b9\u51fb\u54c1\u724c\u4e13\u533a\u8df3\u8f6c',eventType:t.EVENT_TYPE.EVENT_TYPE_CLICK,content:{
comId:null==c?void 0:c.toString(),type:null!=(n=null==o?void 0:o.type)?n:'1',index:null!=(l=null==o?void 0:o.index)?l:'1',URL:null!=(p=null==o?void 0:o.url)?p:'',click:'1'
}
,pageCatCode:C,pageCatName:N
}

}

}

}

}
),"6ccee2b291ea406d2190813776e8145bbd93eb896cd1e1269cb18180ee06b546",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),i=_r(d[2]),r=_r(d[3]),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = h(t);
if(i&&i.has(e))return i.get(e);
var r={
__proto__:null
}
,l=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var o: any = l?Object.getOwnPropertyDescriptor(e,n):null;
o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]
}
return r.default=e,i&&i.set(e,r),r
}
)(_r(d[4])),n=_r(d[5]),o=e(_r(d[6])),s=e(_r(d[7])),a=e(_r(d[8])),u=_r(d[9]),c=e(_r(d[10])),p=_r(d[11]);
// 函数
function h(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(h=function(e){
return e?i:t
}
)(e)
}
(0,i.EnvService)(i.env);
var f,y,x,S,w=0,v=!1,T=(0,l.forwardRef)((function(e,s){
var h=e.configInfo,T=h.cardTitle,P=h.scoreStrip,j=h.originPriceShow,k=h.promotionTagShow,b=h.promotionShow,I=e.dataArray,_=e.navigation,V=e.carrierCode,U=null==I?void 0:I.filter(Boolean),L=i.CommonUtils.getWindowSize(i.PAGE_TYPE.shop).screenWidth,R=[],z=(0,l.useState)([]),C=(0,t.default)(z,2),O=C[0],D=C[1],M=(0,l.useState)({

}
),N=(0,t.default)(M,2),A=N[0],B=N[1],F=(0,l.useState)({

}
),E=(0,t.default)(F,2),H=E[0],W=E[1],q=(0,l.useState)(0),G=(0,t.default)(q,2),Q=G[0],X=G[1],Y=(0,l.useState)([]),J=(0,t.default)(Y,2),K=J[0],Z=J[1],$=(0,l.useState)(!1),ee=(0,t.default)($,2),te=ee[0],ie=ee[1],re=(0,l.useState)(!1),le=(0,t.default)(re,2),ne=le[0],oe=le[1],se=(0,l.useState)(''),ae=(0,t.default)(se,2),de=ae[0],ue=ae[1],ce=(0,l.useState)(!1),me=(0,t.default)(ce,2),pe=me[0],ge=me[1],he=(0,l.useRef)(new n.Animated.Value(1)).current,fe=function(e){
// 变量
var t: any = e._styles,i=e.prefix,r=e.width,l=e.btnText,s=e.onPress;
return(0,p.jsxs)(n.TouchableOpacity,{
style:[t.btn,{
width:r
}
],onPress:s,children:[i?(0,p.jsx)(n.Image,{
style:t.btnImg,source:o.default[i]
}
):null,(0,p.jsx)(n.Text,{
style:t.btnText,children:l
}
)]
}
)
}
,ye=function(e){
var t,l,s=e._styles,a=e.mergeStyle;
return(0,p.jsxs)(r.ImageBackground,{
style:[s.otherView,null!=a&&null!=(t=a.imgStyle)&&t.backgroundColor?null==a?void 0:a.imgStyle:{

}
],imgUri:null==a?void 0:a.bgImg,imgViewStyle:[null!=a&&null!=(l=a.imgStyle)&&l.backgroundColor?null==a?void 0:a.imgStyle:{

}
],resizeMode:"cover",children:[(0,p.jsxs)(n.View,{
style:s.otherTopText,children:[(0,p.jsx)(n.Text,{
style:s.otherTitle,children:(0,i.t)('choose_goods_vmall')
}
),(0,p.jsx)(n.Text,{
style:s.otherDesc,children:(0,i.t)('come_back_tomorrow')
}
)]
}
),(0,p.jsx)(n.View,{
style:s.otherBottomL,children:(0,p.jsx)(n.Image,{
style:s.prdsEmptyImg,source:o.default.prdsEmpty
}
)
}
)]
}
)
}
,xe=function(){
// 变量
var e: any = 'small'===(0,i.ScreenSize)(L)?16:24,t='small'===(0,i.ScreenSize)(L)?3:i.ScreenUtils.isPadHorizontal()?7:5;
return{
imgSize:(L-2*e-8-8*t)/t,nums:t
}

}
,Se=function(e){
var t,l=e._styles,o=e.mergeStyle,s=xe(),a=s.imgSize,u=s.nums,c=O.filter((function(e){
return"1"===String(e.markType)
}
)),h=c.length>u?null==c?void 0:c.slice(0,u):c;
return(0,p.jsxs)(r.ImageBackground,{
style:[l.otherView,null!=o&&null!=(t=o.imgStyle)&&t.backgroundColor?null==o?void 0:o.imgStyle:{

}
],imgUri:null==o?void 0:o.bgImg,resizeMode:"cover",children:[(0,p.jsxs)(n.View,{
style:l.otherTopText,children:[(0,p.jsx)(n.Text,{
style:l.otherTitle,children:(0,i.t)('choose_goods_vmall')
}
),(0,p.jsx)(n.Text,{
style:l.otherDesc,children:(0,i.t)('come_back_tomorrow')
}
)]
}
),(0,p.jsx)(n.View,{
style:[l.otherBottomTL,h.length<u&&l.otherBottomTLLess],children:h.map((function(e,t){
return e.imgUrl=Ue(e),(0,p.jsxs)(n.TouchableOpacity,{
style:[l.prdTouchT,{
width:a,height:a
}
],activeOpacity:1,onPress:function(){
t===h.length-1?Ve('7',!0):ze(e,'6',!0)
}
,children:[t===h.length-1?(0,p.jsxs)(p.Fragment,{
children:[(0,p.jsx)(n.View,{
style:l.maskLayer
}
),(0,p.jsxs)(n.View,{
style:l.maskTextL,children:[(0,p.jsx)(n.Text,{
style:l.maskText,children:"\u67e5\u770b"+c.length+"\u4ef6"
}
),(0,p.jsx)(n.Text,{
style:l.maskText,children:(0,i.t)('items_i_liked')
}
)]
}
)]
}
):null,(0,p.jsx)(r.FastImageView,{
resizeMode:'cover',imgUri:null==e?void 0:e.imgUrl,imgStyle:[l.prdTImg,{
width:a,height:a
}
]
}
)]
}
,t)
}
))
}
)]
}
)
}
,we=function(e){
te||(ie(!0),W(Object.assign({

}
,A,{
likeProportion:e
}
)),w=Q);
// 变量
var t: any = null;
'web'===n.Platform.OS&&((t=document.getElementById('shop_no_focus_outline')).style['overflow-x']='hidden'),S&&clearTimeout(S),S=setTimeout((function(){
n.Animated.timing(he,{
toValue:0,duration:300,easing:n.Easing.linear,useNativeDriver:!0
}
).start((function(e){
e.finished&&(ie(!1),null==he||null==he.setValue||he.setValue(1),v=!1,W({

}
),'web'===n.Platform.OS&&t&&(t.style['overflow-x']='auto'))
}
))
}
),100)
}
,ve=function(){
// 变量
var e: any = 'small'===(0,i.ScreenSize)(L)?L-32-24:i.ScreenUtils.isPadHorizontal()?304:(L-48-24-8)/2;
return{
width:e,height:9*e/16
}

}
,Te=function(){
return'small'===(0,i.ScreenSize)(L)?(L-32-48)/3:i.ScreenUtils.isPadHorizontal()?(Pe()/6*5-24)/3:(ve().width-24)/3
}
,Pe=function(){
return(L-48-24-12)/2
}
,je=function(t){
if(!v){
v=!0,t.stopPropagation();
var i={
prdName:A.prdName,prdId:A.prdId,index:'1'
}
;
e.clickItem(i,'1'),oe(!0),Ie(!0),be()
}

}
,ke=function(t){
if(!v){
v=!0,t.stopPropagation();
var i={
prdName:A.prdName,prdId:A.prdId,index:'2'
}
;
e.clickItem(i,'1'),oe(!1),Ie(!1),be()
}

}
,be=function(){
i.PlatformUtils.isApp()?c.default.setTipsVisible('false'):window.sessionStorage.setItem('quickSelectTipVisible','false')
}
,Ie=function(e){
var t=e?'1':'0',i={
disPrdId:A.prdId,markType:t,carrierCode:V
}
;
(0,u.markProduct)(i).then((function(e){
if(e.success){
var i;
ge(!0);
// 变量
var r: any = null!=(i=null==e?void 0:e.data)?i:1;
B(Object.assign({

}
,A,{
likeProportion:r
}
)),x&&clearTimeout(x),x=setTimeout((function(){
ge(!1);
var e=K.filter((function(e){
return e.prdId!==A.prdId
}
)),i=O.map((function(e){
return e.prdId===A.prdId&&(e.markType=t),e
}
));
if(we(r),D(i),Z(e),e.length)B(e[0]),X((function(e){
return e+1
}
));
else{
// 变量
var l: any = '';
l=O.some((function(e){
return"1"===String(e.markType)
}
))?'someLiked':'likeNothing',y&&clearTimeout(y),y=setTimeout((function(){
ue(l)
}
),150)
}

}
),1e3)
}

}
))
}
,Ve=function(t,r){
var l={
prdName:A.prdName,prdId:A.prdId,index:t
}
;
e.clickItem(l,r?'2':'1'),i.PlatformUtils.isApp()||i.CommonUtils.isHmshop()?_.navigate('FavoritesPrds',{
carrierCode:V
}
):i.RouterUtils.gotoPage(i.Service.wapDomain+"sc/shop/index.html?carrierCode="+V+"&targetRoute=FavoritesPrds")
}
,Ue=function(e){
// 变量
var t: any = /(http|https):\/\/([\w.]+\/?)\S*/.test(e.photoPath),r=t?'':i.Service.cmsCndProdPath;
return e.customImage?r+e.photoPath+(t?'':e.photoName):r+e.photoPath+(t?'':'428_428_'+e.photoName)
}
,Le=function(e){
var t,r=Object.assign({

}
,e);
r.imgUrl=Ue(r);
// 变量
var l: any = [];
if((null==r||null==(t=r.promotionLabels)?void 0:t.length)>0){
var n,o=(null==r||null==(n=r.promotionLabels)?void 0:n.split(';
'))||[];
null==o||o.forEach((function(e){
e&&l.push(e)
}
))
}
r.promotionRules=l;
// 变量
var s: Function = r.productPageType,a=void 0===s?'':s,u=r.prdId,c=String(a)?i.RouterUtils.getProductDetailUrlForWebAllByType(String(a),u):i.RouterUtils.getProductDetailUrlForWebAll(u);
r.wapurl=c,r.weburl=c;
var p=void 0!==r.promoPrice?r.promoPrice:r.originPrice;
return 2===Number(r.priceMode)?(r.newPrice=(0,i.t)('without_price'),r.oldPrice=''):p&&p!==r.originPrice?(r.newPrice=i.CommonUtils.priceFormat(p),r.oldPrice='1'!==r.priceEndWithQi?'\xa5'+i.CommonUtils.priceFormat(r.originPrice):''):(r.newPrice=r.originPrice||0===r.originPrice?i.CommonUtils.priceFormat(r.originPrice):'',r.oldPrice=''),{
item:r
}

}
,Re=function(e,t){
// 变量
var i: any = "vmall://com.vmall.client/product/detail?prdId="+e;
return t?i.concat('&skuCode=').concat(t):i
}
,ze=function(t,r,l){
// 变量
var n: any = t.productPageType,o=void 0===n?'':n,s=t.prdId,a=String(o)?i.RouterUtils.getProductDetailUrlForWebAllByType(String(o),s):i.RouterUtils.getProductDetailUrlForWebAll(s);
t.wapurl=a;
// 变量
var u: any = i.PlatformUtils.isApp()?Re(String(t.prdId),String(t.skuCode)):t.wapurl;
f&&clearTimeout(f),f=setTimeout((function(){
var n={
url:u,prdName:t.prdName,prdId:t.prdId,index:r
}
;
e.clickItem(n,l?'2':'1');
// 变量
var a: any = t.skuCode;
String(o)?i.RouterUtils.gotoProductDetailAllByType(String(o),s,a):i.RouterUtils.gotoProductDetailAll(s,a)
}
),150)
}
,Ce=function(e){
var t,l,s=e._styles,a=e.theme,u=e.isAnimated,h=e.prdInfo,f=e.mergeStyle,y=Le(h).item,x=ve(),S=x.width,v=x.height,I=u?w:Q,_=Math.floor(100*(y.likeProportion||0)),V=100-_,R=0===V||100===V,z=u?'false':i.PlatformUtils.isApp()?c.default.tipVisible:window.sessionStorage.getItem('quickSelectTipVisible')||'true';
return(0,p.jsx)(n.TouchableOpacity,{
style:s.outCard,activeOpacity:1,onPress:function(){
return ze(A,'5')
}
,children:(0,p.jsxs)(r.ImageBackground,{
style:[s.card,null!=f&&null!=(t=f.imgStyle)&&t.backgroundColor?null==f?void 0:f.imgStyle:{

}
],imgUri:null==f?void 0:f.bgImg,resizeMode:"cover",children:[(0,p.jsxs)(n.View,{
style:s.cardTitle,children:[(0,p.jsxs)(n.View,{
style:s.cardTitleLeft,children:[(0,p.jsx)(n.Text,{
style:s.cardTitleLeftText,ellipsizeMode:'tail',numberOfLines:1,children:null!=T?T:(0,i.t)('quick_card_selection')
}
),(0,p.jsx)(n.Text,{
style:s.cardTitleLeftText,children:I+"/"+U.length
}
)]
}
),(0,p.jsxs)(n.TouchableOpacity,{
style:s.cardMore,onPress:function(){
return Ve('4')
}
,children:[(0,p.jsx)(n.Text,{
style:s.cardTitleRightText,children:(0,i.t)('what_i_like')
}
),(0,p.jsx)(r.SvgIcon,{
normalCol:a.C24.color,opacity:a.C24.opacity,iconName:"ic24-more",width:12,height:20
}
)]
}
)]
}
),(0,p.jsxs)(n.Animated.View,{
style:['small'!==(0,i.ScreenSize)(L)&&s.padLayout,u&&{
opacity:he.interpolate({
inputRange:[0,.9,1],outputRange:[.4,1,1]
}
)
}
],children:[(0,p.jsxs)(n.View,{
style:[s.prdImgPart,'small'===(0,i.ScreenSize)(L)&&s.prdImgPartSmall,i.ScreenUtils.isPadHorizontal()&&{
width:Pe()
}
],children:[(0,p.jsx)(r.FastImageView,{
resizeMode:'contain',imgUri:y.imgUrl,imgStyle:[{
width:S,height:v
}
]
}
),'true'===String(b)&&y.prdPromotion?(0,p.jsx)(n.View,{
style:s.ImgRedLabel,children:(0,p.jsx)(n.Text,{
style:s.ImgRedLabelText,numberOfLines:1,ellipsizeMode:'tail',children:y.prdPromotion
}
)
}
):null]
}
),(0,p.jsxs)(n.Animated.View,{
style:[{
width:S
}
,'small'!==(0,i.ScreenSize)(L)&&s.padRightPartL,i.ScreenUtils.isPadHorizontal()&&{
width:Pe()/6*5
}
,i.ScreenUtils.isPadHorizontal()&&s.padRightPartMarginL,u&&{
opacity:he.interpolate({
inputRange:[0,.9,1],outputRange:[.4,1,1]
}
)
}
],children:[(0,p.jsx)(n.Text,{
style:s.prdName,numberOfLines:1,ellipsizeMode:'tail',children:y.prdName
}
),'true'===String(j)?(0,p.jsxs)(n.View,{
style:s.priceRow,children:[(0,p.jsx)(n.Text,{
style:s.priceSymbol,children:'\uffe5'
}
),(0,p.jsx)(n.Text,{
style:s.price,numberOfLines:1,ellipsizeMode:'tail',children:y.newPrice
}
),(0,p.jsx)(n.Text,{
style:s.oldPrice,numberOfLines:1,ellipsizeMode:'tail',children:y.oldPrice
}
)]
}
):null,'true'===String(k)&&null!=y&&null!=(l=y.promotionRules)&&l.length?(0,p.jsx)(n.View,{
style:s.promotionRow,children:y.promotionRules.map((function(e,t){
return t<(i.PlatformUtils.isPc(L)?3:2)&&(0,p.jsx)(n.Text,{
style:s.promotionLabel,numberOfLines:1,ellipsizeMode:"tail",children:e
}
,t)
}
))
}
):null,'1'===P&&(pe||u)?(0,p.jsxs)(n.View,{
style:s.scoreStrip,children:[(0,p.jsx)(n.Text,{
style:[s.score,s.leftScore],children:V+"%"
}
),(0,p.jsxs)(n.View,{
style:s.scoreMid,children:[(0,p.jsx)(n.View,{
style:[s.noInterested,{
width:V+"%"
}
,R&&s.noInterestedGap,i.DarkStore.darkBool&&{
backgroundColor:i.CommonUtils.colorRgba('#fff',.86)
}
]
}
),R?null:(0,p.jsx)(n.View,{
style:[s.scoreCut,{
left:V+"%"
}
]
}
),(0,p.jsx)(n.View,{
style:[s.like,{
width:_+"%"
}
,R&&s.likeNoGap]
}
)]
}
),(0,p.jsx)(n.Text,{
style:[s.score,s.rightScore],children:_+"%"
}
)]
}
):null,(0,p.jsxs)(n.View,{
style:s.bottomBtns,children:["-2"!==String(null==A?void 0:A.markType)?(0,p.jsxs)(p.Fragment,{
children:[(0,p.jsx)(fe,{
_styles:s,btnText:(0,i.t)('not_interested'),width:Te(),prefix:i.DarkStore.darkBool?'prdDislikeDark':'prdDislike',onPress:ke
}
),(0,p.jsxs)(n.View,{
children:[(0,p.jsx)(fe,{
_styles:s,btnText:(0,i.t)('liked'),width:Te(),prefix:'prdLike',onPress:je
}
),'true'===z?(0,p.jsx)(r.ImageBackground,{
localSource:o.default.bubbleTips,resizeMode:"cover",imgStyle:[{
width:152,height:39
}
],style:s.TipsBackView,children:(0,p.jsx)(n.View,{
style:s.tipsLayout,children:(0,p.jsx)(n.Text,{
style:s.tips,children:(0,i.t)('see_how_many_likes')
}
)
}
)
}
):null]
}
)]
}
):null,(0,p.jsx)(fe,{
_styles:s,btnText:(0,i.t)('check_it_out'),width:Te(),onPress:function(){
return ze(A,'3')
}

}
)]
}
)]
}
)]
}
),u?(0,p.jsx)(n.Animated.View,{
style:[s.maskImgLayer,{
transform:[{
scale:he.interpolate({
inputRange:[0,.9,1],outputRange:[1,1,0]
}
)
}
]
}
],children:(0,p.jsx)(n.Image,{
style:s.maskImg,source:ne?o.default.prdLike:i.DarkStore.darkBool?o.default.prdDislikeDark:o.default.prdDislike
}
)
}
):null]
}
)
}
)
}
,Oe=function(e){
// 变量
var t: any = 'likeNothing';
if(e.some((function(e){
return"-2"===String(e.markType)
}
)))return t='default',X(0),Z(e),B(e[0]),W(e[0]),w=0,void ue(t);
if(e.every((function(e){
return"-1"!==String(e.markType)
}
)))t=e.some((function(e){
return"1"===String(e.markType)
}
))?'someLiked':'likeNothing';
else{
var i=e.filter((function(e){
return"-1"===String(e.markType)
}
));
t='default',X(e.length-i.length),Z(i),B(i[0]),W(i[0]),w=e.length-i.length
}
ue(t)
}
;
return(0,l.useImperativeHandle)(s,(function(){
return{
itemlist:R,props:e
}

}
)),(0,l.useEffect)((function(){
return U.length>0&&(0,u.queryProdMarkInfo)({
disPrdList:null==U?void 0:U.map((function(e){
return e.prdId
}
)),carrierCode:V
}
).then((function(e){
if(e.success){
var t,i=[];
null==e||null==(t=e.data)||t.map((function(e){
var t=U.find((function(t){
return t.prdId===e.disPrdId
}
));
i.push(Object.assign({

}
,e,t))
}
)),D(i),Oe(i)
}

}
)),function(){
f&&clearTimeout(f),S&&clearTimeout(S),y&&clearTimeout(y)
}

}
),[]),(0,p.jsx)(i.WithTheme,{
themeStyles:a.default,children:function(t,r,l){
if(L=l,i.PlatformUtils.isPc(l))return null;
var o,s,a=(o=e.styleChange,s=(0,i.ScreenSize)(L),i.ScreenUtils.isPadHorizontal(l)&&(s='large'),i.CommonUtils.isEmpty(o)?'':i.CommonUtils.getChangeStyle(o,s)),u=ne?[L,0,0]:[-L,0,0],c=ne?['10deg','0deg']:['-10deg','0deg'],h='small'===(0,i.ScreenSize)(l),f=h?16:24;
return(0,p.jsxs)(n.View,{
style:[t.outterView,{
paddingHorizontal:f
}
,'default'!==de&&t.outterViewMargin0],ref:function(e){
e&&R.push(e)
}
,children:['likeNothing'===de&&(0,p.jsx)(ye,{
_styles:t,mergeStyle:a
}
),'someLiked'===de&&(0,p.jsx)(Se,{
_styles:t,mergeStyle:a
}
),'default'===de&&(0,p.jsxs)(p.Fragment,{
children:[(0,p.jsx)(n.View,{
style:[t.bottomLayer,{
width:l-2*f-48
}
,!h&&{
width:l-2*f-68
}
,i.DarkStore.darkBool&&t.bottomLayerDark]
}
),(0,p.jsx)(n.View,{
style:[t.midLayer,{
width:l-2*f-24
}
,i.DarkStore.darkBool&&t.midLayerDark]
}
),(0,p.jsx)(Ce,{
_styles:t,theme:r,prdInfo:A,mergeStyle:a
}
)]
}
),te?(0,p.jsx)(n.Animated.View,{
style:[t.animatedView,{
width:L-2*f
}
,h?{
transform:[{
translateX:he.interpolate({
inputRange:[0,.65,1],outputRange:u
}
)
}
,{
rotate:he.interpolate({
inputRange:[0,1],outputRange:c
}
)
}
]
}
:{
transform:[{
translateX:he.interpolate({
inputRange:[0,.65,1],outputRange:u
}
)
}
]
}
],children:(0,p.jsx)(Ce,{
_styles:t,theme:r,isAnimated:!0,prdInfo:H
}
)
}
):null]
}
)
}

}
)
}
));
T.displayName='QuickSelect';
_e.default=(0,i.Componentautoscaling)((0,i.Monitor)(s.default)((0,i.ItemExposeHoc)(T)))
}
),"4e790fe8456e87da3aa62216fd0df141f7c4a672dd74bd06cc65285242e311e6",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","06d2417916871f8ae8cee404df42dc2790aff83618c57be2878b3997b2a55162","f85d3d6895205072227b195798e0b5866bd762f46345a527ebc70a73f144e815","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default={
exposeItem:function(){
// 变量
var o: any = this.props,n=o.id,l=o.pageCatCode,u=void 0===l?'':l,p=o.pageCatName,c=void 0===p?'':p;
return{
data:{
actionCode:'100660027',actionName:'\u5feb\u9009\u5361\u7247\u66dd\u5149',eventType:t.EVENT_TYPE.EVENT_TYPE_EXPOSURE,content:{
comId:null==n?void 0:n.toString(),exposure:'1'
}
,pageCatCode:u,pageCatName:c
}

}

}
,clickItem:function(o,n){
var l,u,p,c,v,C=this.props,E=C.id,N=C.pageCatCode,T=void 0===N?'':N,_=C.pageCatName,s=void 0===_?'':_;
return{
data:{
actionCode:'100660028',actionName:'\u5feb\u9009\u5361\u7247\u70b9\u51fb',eventType:t.EVENT_TYPE.EVENT_TYPE_CLICK,content:{
type:n,comId:null==E?void 0:E.toString(),index:null!=(l=null==o?void 0:o.index)?l:'1',URL:null!=(u=null==o?void 0:o.url)?u:'',click:'1',productName:null!=(p=null==o?void 0:o.prdName)?p:'',ProductID:null!=(c=null==o||null==(v=o.prdId)?void 0:v.toString())?c:''
}
,pageCatCode:T,pageCatName:s
}

}

}

}

}
),"06d2417916871f8ae8cee404df42dc2790aff83618c57be2878b3997b2a55162",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
outterView:{
alignItems:'center',marginBottom:16,zIndex:100,elevation:100
}
,prdsEmptyImg:{
width:96,height:96
}
,btnImg:{
marginRight:8,width:14,height:14
}
,btn:{
borderRadius:14,height:28,overflow:'hidden',justifyContent:'center',flexDirection:'row',alignItems:'center',backgroundColor:n.C70.color+n.opacityMap[n.C70.opacity]
}
,btnText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T4,n.C11,{
textAlign:'center'
}
),otherTitle:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T10,n.C11,{
textAlign:'left'
}
),otherDesc:Object.assign({
fontFamily:o.PublicFont.fontFamilyBase
}
,n.T7,n.C13,{
textAlign:'left'
}
),otherTopText:{
marginBottom:8.5
}
,bottomLayer:{
backgroundColor:'#E1E3E5',borderRadius:16,marginTop:16,position:'absolute',height:'100%',zIndex:1
}
,midLayer:{
backgroundColor:'#EAECEF',borderRadius:16,marginTop:8,position:'absolute',height:'100%',zIndex:2
}
,card:Object.assign({

}
,n.S31,{
borderRadius:16,paddingHorizontal:12,paddingVertical:8,paddingBottom:12,width:'100%'
}
),outCard:{
zIndex:3,width:'100%'
}
,cardTitle:{
justifyContent:'space-between',flexDirection:'row',alignItems:'center',height:40,marginBottom:5
}
,cardTitleLeft:{
flexDirection:'row',maxWidth:'60%'
}
,cardTitleLeftText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T10,n.C11,{
marginRight:4
}
),cardTitleRightText:Object.assign({
fontFamily:o.PublicFont.fontFamilyBase
}
,n.T7,n.C13,{
textAlign:'right',marginRight:4,lineHeight:20
}
),ImgRedLabel:{
borderRadius:4,backgroundColor:'#FBE7EA',paddingHorizontal:4,paddingVertical:2,position:'absolute',bottom:0,maxWidth:'100%'
}
,ImgRedLabelText:Object.assign({
fontFamily:o.PublicFont.fontFamilyBase
}
,n.T0,{
color:'#CF0A2C',textAlign:'center'
}
),prdName:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.T10,n.C11),otherView:Object.assign({
borderRadius:16,overflow:'hidden'
}
,n.S31,{
padding:12,width:'100%'
}
),otherBottomL:{
alignItems:'center'
}
,otherBottomTL:{
alignItems:'center',justifyContent:'center',flexDirection:'row'
}
,prdTImg:{
borderRadius:8,backgroundColor:'#F1F3F5'
}
,prdTouchT:{
borderRadius:8,backgroundColor:'#F1F3F5',marginHorizontal:4
}
,lastPrdTouchT:{
backgroundColor:n.C15.color+n.opacityMap[n.C15.opacity],overflow:'hidden'
}
,maskLayer:{
backgroundColor:n.C81.color+n.opacityMap[n.C81.opacity],borderRadius:8,position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:1
}
,maskTextL:{
position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:2,justifyContent:'center'
}
,maskText:Object.assign({

}
,n.C17,n.T2,{
textAlign:'center'
}
),price:Object.assign({

}
,n.T8,n.C11,{
marginRight:4
}
),priceRow:{
flexDirection:'row',alignItems:'center',marginTop:2
}
,oldPrice:Object.assign({

}
,n.T1,n.C14,{
textDecorationLine:'line-through'
}
),cardMore:{
flexDirection:'row',alignItems:'center'
}
,priceSymbol:Object.assign({

}
,n.T4,n.C11),prdImgPart:{
alignItems:'center'
}
,prdImgPartSmall:{
marginBottom:8
}
,promotionLabel:Object.assign({

}
,n.T0,n.C18,{
borderWidth:.5,borderColor:n.S15.borderColor,borderStyle:'solid',borderRadius:4,textAlign:'center',textAlignVertical:'center',paddingLeft:4,paddingRight:4,overflow:'hidden',maxWidth:'100%',marginRight:4,paddingVertical:2
}
),promotionRow:{
flexDirection:'row',alignItems:'center',marginTop:4
}
,score:Object.assign({

}
,n.C13,n.T3),noInterested:{
height:4,backgroundColor:'#171717',borderTopLeftRadius:2,borderBottomLeftRadius:2
}
,like:{
height:4,backgroundColor:n.C75.color,borderTopRightRadius:2,borderBottomRightRadius:2
}
,scoreCut:Object.assign({
width:4,height:16
}
,n.S31,{
transform:[{
rotateZ:'45deg'
}
],position:'absolute',zIndex:2
}
),scoreStrip:{
flexDirection:'row',alignItems:'center',marginTop:8
}
,scoreMid:{
flexDirection:'row',flex:1,alignItems:'center'
}
,leftScore:{
marginRight:8
}
,rightScore:{
marginLeft:8
}
,bottomBtns:{
justifyContent:'space-between',alignItems:'center',flexDirection:'row',marginTop:10
}
,padLayout:{
flexDirection:'row',alignItems:'center'
}
,padRightPartL:{
marginLeft:8
}
,animatedView:{
position:'absolute',zIndex:3
}
,maskImgLayer:{
position:'absolute',alignItems:'center',justifyContent:'center',left:0,right:0,bottom:0,top:0
}
,maskImg:{
width:64,height:64
}
,tips:Object.assign({
fontFamily:o.PublicFont.fontFamilyBase
}
,n.T3,{
color:'#FFFFFF'
}
),tipsLayout:{
alignItems:'center',justifyContent:'center',zIndex:5,height:32
}
,outterViewMargin0:{
marginBottom:0
}
,bottomLayerDark:{
backgroundColor:'#131518'
}
,midLayerDark:{
backgroundColor:'#191B1D'
}
,noInterestedGap:{
borderRadius:2
}
,likeNoGap:{
borderRadius:2
}
,padRightPartMarginL:{
marginLeft:12
}
,TipsBackView:{
position:'absolute',top:-42,width:152
}
,otherBottomTLLess:{
justifyContent:'flex-start'
}

}
)
}

}
),"f85d3d6895205072227b195798e0b5866bd762f46345a527ebc70a73f144e815",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=_r(d[2]),i=_r(d[3]),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = v(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,l=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var a: any = l?Object.getOwnPropertyDescriptor(e,o):null;
a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[4])),o=_r(d[5]),a=e(_r(d[6])),s=e(_r(d[7])),r=e(_r(d[8])),u=_r(d[9]),c=_r(d[10]),p=e(_r(d[11])),f=_r(d[12]);
// 函数
function v(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(v=function(e){
return e?n:t
}
)(e)
}
var y,h={
minimumViewTime:300,viewAreaCoveragePercentThreshold:10,waitForInteraction:!0
}
,x={
9212:'4',9214:'3',9216:'5'
}
,S=7,T="modal-signin-"+n.CommonUtils.randomString(6),w=(0,l.forwardRef)((function(e,s){
var v,w=[],C=n.CommonUtils.randomString(),I=e.configInfo,b=I.cardTitle,P=I.showSetting,_=I.imgNormal,j=I.imgDarkMode,D=I.activityRule,E=I.titleShow,O=e.pageType,U=e.componentName,V=e.carrierCode,R=e.dataArray,L=e.clickItem,B=e.styleChange,k=(0,l.useState)(!1),M=(0,t.default)(k,2),N=M[0],z=M[1],A=(0,l.useState)(!1),F=(0,t.default)(A,2),H=F[0],W=F[1],Y=(0,l.useState)({

}
),q=(0,t.default)(Y,2),G=q[0],J=q[1],K=(0,l.useState)(0),Q=(0,t.default)(K,2),X=Q[0],Z=Q[1],$=(0,l.useState)({
isInterrupt:!1,signCalType:1,signTime:''
}
),ee=(0,t.default)($,2),te=ee[0],ne=ee[1],ie=(0,l.useState)([]),le=(0,t.default)(ie,2),oe=le[0],ae=le[1],se=(0,l.useState)(!1),re=(0,t.default)(se,2),ue=re[0],ce=re[1],de=(0,l.useState)({

}
),me=(0,t.default)(de,2),pe=me[0],fe=me[1],ge=(0,l.useState)({

}
),ve=(0,t.default)(ge,2),ye=ve[0],he=ve[1],xe=(0,l.useState)({
ruleType:'1',discountValue:0,days:0,stepId:0,expectSignDays:3
}
),Se=(0,t.default)(xe,2),Te=Se[0],we=Se[1],Ce=n.CommonUtils.getWindowSize(n.PAGE_TYPE.shop).screenWidth,Ie=n.CommonUtils.getWindowSize(n.PAGE_TYPE.shop).screenHeight,be=function(e,t){
// 变量
var n: any = p.default.cloneDeep(e),i=p.default.sortBy(n,'stepId');
return p.default.find(i,(function(e){
return e.expectSignDays>t
}
))
}
,Pe=function(e,t,n){
fe(Object.assign({

}
,e,{
index:n
}
)),t&&J(Object.assign({

}
,G,{
signItemInfo:e
}
))
}
,je=function(e,t,n,i){
// 变量
var l: any = [];
return new Array(n).fill(0).forEach((function(n,o){
var a,s=o+1,r=e.find((function(e){
return e.expectSignDays===s
}
)),u={
status:0
}
;
if(r&&(u=Object.assign({
type:1
}
,u,r)),s<i)u.status=r&&null!=(a=null==r?void 0:r.result)?a:1;
else if(s===i){
var c;
u.status=r&&null!=(c=null==r?void 0:r.result)?c:1,!t&&r&&Pe(u,r,o)
}
else s-i==1&&t?(u.status=0,Pe(u,r,o)):u.status=3;
l.push(u)
}
)),l
}
,De=function(e){
var t,n,i,l,o,a,s,r,u,c=String(null!=(t=null==e||null==(n=e.couponPrize)?void 0:n.ruleType)?t:'1');
we({
ruleType:c,discountValue:'1'===c?Number(null!=(i=null==e||null==(l=e.couponPrize)?void 0:l.amount)?i:0):1e4*(null!=(o=null==e||null==(a=e.couponPrize)?void 0:a.discount)?o:0)*10/1e4,days:null!=(s=null==e?void 0:e.expectSignDays)?s:0,stepId:null!=(r=null==e?void 0:e.stepId)?r:0,expectSignDays:null!=(u=null==e?void 0:e.expectSignDays)?u:3
}
)
}
,Ee=function(e,t,n){
var i,l=be(e,t),o=p.default.maxBy(e,'expectSignDays'),a=null!=(i=null==o?void 0:o.expectSignDays)?i:7;
l||(l=o),S=a;
// 变量
var s: Function = Ue(n),r=je(e,s,a,t);
ae(r),De(l),Z(t)
}
,Oe=function(){
// 变量
var e: any = '';
if('web'===o.Platform.OS){
// 变量
var t: any = window.location.href;
e=n.Service.webDomain+"account/login?url="+encodeURIComponent(t)
}
else n.PlatformUtils.isApp()&&(e='vmall://com.vmall.client/home/login');
n.RouterUtils.gotoPage(e)
}
,Ue=function(e){
return!e||!n.TimeUtils.isSameDay(new Date,Number(e))
}
,Ve=function(e,t){
// 变量
var n: any = p.default.cloneDeep(oe);
n.splice(pe.index,1,Object.assign({

}
,pe,{
status:null!=t?t:1
}
)),ae(n);
// 变量
var i: any = be(ye,X+1);
if(i&&De(i),Z((function(e){
return e+1
}
)),ne(Object.assign({

}
,te,{
signTime:e
}
)),pe.index<n.length-1&&Ue(e))fe(n[pe.index+1]);
else if(pe.index===n.length-1){
var l,o=null==(l=n[n.length-1])?void 0:l.status;
1===Number(o)&&Ue(e)?ce(!1):fe(n[pe.index])
}

}
,Re=function(e){
var t,i,l=null==G||null==(t=G.signItemInfo)?void 0:t.relActivityCode,a=null==G||null==(i=G.signItemInfo)?void 0:i.batchCode;
a&&l&&n.HttpService.getCoupons(l,a,V).then((function(t){
if(t&&t.success){
var i;
ze('success',{
text:(0,n.t)('successfully_signed_in'),title:(0,n.t)('congratulations_get_coupon')
}
,e,'2'),He(null!=(i=null==pe?void 0:pe.batchCode)?i:'',X);
// 变量
var l: any = p.default.cloneDeep(oe);
l.splice(pe.index,1,Object.assign({

}
,pe,{
status:1
}
)),ae(l),pe.index<l.length-1&&Ue(null==te?void 0:te.signTime)&&fe(l[pe.index+1])
}
else o.DeviceEventEmitter.emit('showToast',{
text:t.errorTip||t.msg||(0,n.t)('collectionFailed'),pageType:O,randomId:C
}
)
}
)).catch((function(t){
var i,l,a,s,r=(null==(i=t.data)?void 0:i.code)||(null==(l=t.data)?void 0:l.newCode);
['9212','9214','9216'].includes(r)?ze('collectionFailed',{
text:t.data.errorTip||t.data.msg,title:(0,n.t)('failed_to_claim')
}
,e,x[r]):o.DeviceEventEmitter.emit('showToast',{
text:(null==(a=t.data)?void 0:a.errorTip)||(null==(s=t.data)?void 0:s.msg)||(0,n.t)('collectionFailed'),pageType:O,randomId:C
}
)
}
))
}
,Le=function(){
var e=!1,t={

}
,n=Ue(te.signTime);
return 1!==(null==pe?void 0:pe.type)||n||(e=!0,t=pe),{
canReceive:e,couponInfo:t
}

}
,Be=function(){
var e,t=null==R||null==(e=R[0])?void 0:e.activityCode,i=Le(),l=i.canReceive,a=i.couponInfo;
if(l)return Re(a);
(0,u.sign)({
activityCode:t
}
).then((function(e){
var t,i;
null!=e&&e.success?(1===pe.type&&ze('success',{
text:(0,n.t)('successfully_signed_in'),title:(0,n.t)('congratulations_get_coupon')
}
,pe,'2'),o.DeviceEventEmitter.emit('showToast',{
text:(0,n.t)('sign_in_succeeded'),pageType:O,randomId:C
}
),He(null!=(t=null==pe?void 0:pe.batchCode)?t:'',X),Ve(null!=(i=null==e?void 0:e.signTime)?i:(new Date).getTime())):o.DeviceEventEmitter.emit('showToast',{
text:e.errorTip||e.msg||(0,n.t)('collectionFailed'),pageType:O,randomId:C
}
)
}
)).catch((function(e){
var t,i,l,a,s,r,u=(null==(t=e.data)?void 0:t.code)||(null==(i=e.data)?void 0:i.newCode);
['9212','9214','9216'].includes(u)?(ze('collectionFailed',{
text:e.data.errorTip||e.data.msg,title:(0,n.t)('failed_to_claim')
}
,pe,x[u]),Ve(null!=(l=null==(a=e.data)?void 0:a.signTime)?l:(new Date).getTime(),2)):o.DeviceEventEmitter.emit('showToast',{
text:(null==(s=e.data)?void 0:s.errorTip)||(null==(r=e.data)?void 0:r.msg)||(0,n.t)('collectionFailed'),pageType:O,randomId:C
}
)
}
))
}
,ke=function(){
// 变量
var e: any = n.Service.openApiDomain+"sc/shop/followShop?lang=zh-CN&country=CN";
We((0,n.t)('common_ok')),n.Http.post(e,{
followType:1,carrierCode:V,portal:(0,c.getPortalStr)(Ce)
}
).then((function(e){
null!=e&&e.success&&(o.DeviceEventEmitter.emit('brandFollowShop'),n.ShopStore.setFollow('true'),Fe(),Be())
}
))
}
,Me=function(){
var e;
if(e=Ue(te.signTime),X!==S||!e)if(n.AppStore.isLogin){
if('shopSignIn'===U&&'false'===n.ShopStore.isFollow)return ze('follow',{
text:(0,n.t)('be_store_fan'),title:(0,n.t)('tips')
}
,{

}
,'1');
v&&clearTimeout(v),v=setTimeout((function(){
Be()
}
),150)
}
else Oe()
}
;
(0,l.useEffect)((function(){
var e,t;
return(n.PlatformUtils.isApp()||'web'===o.Platform.OS)&&null===n.AppStore.isLogin&&n.AppStore.getIsLogin(),(t=null==R||null==(e=R[0])?void 0:e.activityCode)&&(0,u.querySignInfo)({
activityCode:t
}
).then((function(e){
if(null!=e&&e.success){
var t,n,i,l,o=null!=(t=null==e?void 0:e.signStep)?t:[],a=null==e?void 0:e.signTime;
he(o),Ee(o,null!=(n=null==e?void 0:e.signTotalValue)?n:0,a),ne({
isInterrupt:null!=(i=null==e?void 0:e.isInterrupt)&&i,signCalType:null!=(l=null==e?void 0:e.signCalType)?l:1,signTime:a
}
),S===e.signTotalValue&&Ue(null==e?void 0:e.signTime)?ce(!1):ce(!0)
}
else ce(!1)
}
)).catch((function(){
ce(!1)
}
)),y=o.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
'login'===e.service&&'isLogin'===e.action&&e&&'boolean'==typeof e.param.isLogin&&e.param.isLogin&&n.AppStore.setIsLogin(e.param.isLogin)
}
)),function(){
y&&y.remove()
}

}
),[]);
var Ne=function(){
z(!0)
}
,ze=function(e,t,n,i){
J({
type:e,text:t.text,title:t.title,signItemInfo:n
}
),W(!0),Ye(i)
}
,Ae=function(){
z(!1)
}
,Fe=function(){
if('follow'===(null==G?void 0:G.type)&&We((0,n.t)('common_cancel')),'web'===o.Platform.OS||n.PlatformUtils.isMp()){
// 变量
var e: any = document.getElementById(T);
p.default.isEmpty(e)||document.body.removeChild(e)
}
W(!1)
}
,He=function(e,t){
L({
batchCode:e,type:String(t)
}
,'clickSign'),n.Report.execReportData('',!0)
}
,We=function(e){
L({
buttonName:e
}
,'followModal'),n.Report.execReportData('',!0)
}
,Ye=function(e){
L({
type:e
}
,'showModal'),n.Report.execReportData('',!0)
}
,qe=function(e){
return'success'===G.type?[{
onPress:Fe,text:(0,n.t)('gotIt'),style:e.modalLeftBtn
}
,{
onPress:function(){
var e,t,i,l;
return t=null==G||null==(e=G.signItemInfo)?void 0:e.batchCode,l=Ce,i=n.PlatformUtils.isPc(l)?n.Service.webDomain+"product/coupon/queryPrdForCoupon":n.PlatformUtils.isWap(l)||n.PlatformUtils.isMp()?n.Service.wapDomain+"member/couponPrd/list?batchCode="+t:"vmall://com.vmall.client/product/coupon?couponBatchCode="+t,void(n.PlatformUtils.isApp()?(Fe(),setTimeout((function(){
n.RouterUtils.gotoPage(i)
}
),n.PlatformUtils.isIOS()?800:300)):n.RouterUtils.gotoPage(i))
}
,text:(0,n.t)('to_use'),style:e.modalLeftBtn
}
]:'follow'===G.type?[{
onPress:Fe,text:(0,n.t)('common_cancel'),style:e.modalLeftBtn
}
,{
onPress:ke,text:(0,n.t)('common_ok'),style:e.modalRightBtn
}
]:[{
onPress:Fe,text:(0,n.t)('gotIt'),style:e.modalLeftBtn
}
]
}
,Ge=function(e){
return e?e.split(' ')[0].replace(/-/g,'/'):e
}
,Je=function(e){
// 变量
var t: any = e._styles,n=e.width,l=e.theme,a=e.isPad;
if('success'===G.type){
var s,r,u,c,p,v,y=null!=(s=null==G||null==(r=G.signItemInfo)?void 0:r.couponPrize)?s:{

}
;
return(0,f.jsxs)(o.View,{
style:[t.modalContent,a&&t.modalPadContent],children:[(0,f.jsx)(o.Text,{
style:t.modalText,children:G.text
}
),(0,f.jsx)(i.CouponItem,{
isLogin:!0,pageType:O,cwidth:a?n:n-40,circleBackgroundColor:l.C33.color,item:Object.assign({

}
,y,{
couponName:null!=(u=y.couponName)?u:'',couponValidBgtime:Ge(null!=(c=y.beginDate)?c:''),couponValidEndtime:Ge(null!=(p=y.endDate)?p:''),couponType:Number(null!=(v=y.ruleType)?v:''),receiveStates:-2
}
)
}
)]
}
)
}
return(0,f.jsxs)(o.Text,{
style:t.modalText,children:[" ",G.text," "]
}
)
}
;
return(0,l.useImperativeHandle)(s,(function(){
return{
itemlist:w,props:e
}

}
)),(0,f.jsx)(n.WithTheme,{
themeStyles:a.default,children:function(e,t,l){
var a;
if(Ce=l>1200?1200:l,n.PlatformUtils.isPc(l)||!ue)return null;
var s,u,c=function(){
return'medium'===(0,n.ScreenSize)(l)||'large'===(0,n.ScreenSize)(l)&&l<n.variables.safety_area
}
,p=n.ScreenUtils.isPadHorizontal(l,Ie),v=p?81:c()?43:12,y=(s=(0,n.ScreenSize)(Ce),c()&&p&&(s='large'),n.CommonUtils.isEmpty(B)?'':n.CommonUtils.getChangeStyle(B,s));
return(0,f.jsxs)(o.View,{
ref:function(e){
e&&w.push(e)
}
,children:[(0,f.jsxs)(i.ImageBackground,{
imgUri:null==y?void 0:y.bgImg,style:e.bgView,imgViewStyle:[null!=y&&null!=(a=y.imgStyle)&&a.backgroundColor?null==y?void 0:y.imgStyle:{

}
,{
width:Ce
}
],resizeMode:"cover",children:[(0,f.jsx)(i.CardHeader,{
isDisplayTitleBar:'true'===E,title:b,showSetting:P,imgNormal:_,imgDarkMode:j,styleChange:B,pageType:O,boxWidth:l
}
),(0,f.jsx)(o.View,{
style:e.cardView,children:(0,f.jsxs)(o.View,{
style:e.card,children:[(0,f.jsxs)(o.View,{
style:e.titleRow,children:[(0,f.jsxs)(o.View,{
style:e.title,children:[(0,f.jsxs)(o.View,{
style:e.title,children:[(0,f.jsx)(o.Text,{
style:e.titleBlack,children:""+(1===te.signCalType?(0,n.t)('continuously'):(0,n.t)('cumulative'))+(0,n.t)('sign_in')
}
),(0,f.jsx)(o.Text,{
style:e.titleRed,children:Te.days
}
),(0,f.jsx)(o.Text,{
style:e.titleBlack,children:(0,n.t)('day_get')
}
),(0,f.jsx)(o.Text,{
style:e.titleRed,children:Te.discountValue
}
),(0,f.jsx)(o.Text,{
style:e.titleBlack,children:""+('1'===Te.ruleType?(0,n.t)('common_yuan'):(0,n.t)('discount'))+(0,n.t)('coupons')
}
)]
}
),(0,f.jsx)(o.TouchableOpacity,{
style:e.rule,activeOpacity:1,onPress:Ne,children:(0,f.jsx)(i.SvgIcon,{
normalCol:t.C15.color,viewBox:'0 0 1024 1024',opacity:t.C15.opacity,iconName:"help",width:12,height:12
}
)
}
)]
}
),te.isInterrupt?(0,f.jsx)(o.Text,{
style:e.titleBreak,children:(0,n.t)('a_new_round')
}
):null]
}
),(0,f.jsx)(o.TouchableOpacity,{
style:[e.signList,{
paddingHorizontal:v-12
}
],activeOpacity:1,onPress:Me,children:(0,f.jsx)(o.FlatList,{
style:e.scrollViewCls,horizontal:!0,data:oe,renderItem:function(e){
// 变量
var t: any = e.item,n=e.index;
return(0,f.jsx)(r.default,Object.assign({
index:n,isLast:n===oe.length-1
}
,t),n)
}
,initialNumToRender:7,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,viewabilityConfig:h,keyExtractor:function(e,t){
return t.toString()
}

}
)
}
)]
}
)
}
)]
}
),(0,f.jsx)(i.ShopRuleModal,{
modalVisible:N,ruleDesc:D,closeModal:Ae,title:(0,n.t)('sign_in_rule')
}
),(0,f.jsx)(i.Modal,{
modalId:T,isTextContent:!1,subContentStyle:e.tipModalSubContent,modalVisible:H,modalInnerStyle:e.modalInnerStyle,title:(0,f.jsx)(o.Text,{
style:e.modalTitle,children:G.title
}
),content:(0,f.jsx)(Je,{
width:(u=c()?48:32,(c()?l/2:l)-u),_styles:e,theme:t,isPad:c()
}
),onCancel:Fe,buttonLine:'success'===G.type,setDocOverflowY:!1,buttonList:qe(e)
}
)]
}
)
}

}
)
}
));
w.displayName='ShopSignIn';
_e.default=(0,n.Componentautoscaling)((0,n.monitor)(s.default)((0,n.ItemExposeHoc)(w)))
}
),"9952872f4c5292a04e18536b409279c69410bbcf584d253244d60b71d7abad11",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","b6a411d33e4d6763b85c31c7e4b6811e3d8b6248e64739ec28129ee42ad330b9","853ba780b1812d2085eca613d00209d0d8ec55098472603385b71291d6741a4b","3558e80fb8481c28f73cf7578ed7b9e316d21a916af3e255d14df14c31d00963","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]),o=t.Dimensions.get('window').width,l=(0,n.ScreenSize)(o);
e.default=function(o){
return t.StyleSheet.create({
card:Object.assign({

}
,o.S31,{
height:96,borderRadius:16,padding:12,width:'100%',flexDirection:'column'
}
),cardView:{
paddingHorizontal:'small'===l?16:24
}
,bgView:{
flexDirection:'column'
}
,title:{
flexDirection:'row',alignItems:'center'
}
,titleRow:{
flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:10
}
,titleRed:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C18,o.T4),titleBlack:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.C12,o.T4),titleBreak:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,o.C15,o.T0),rule:{
marginLeft:4
}
,signList:{
alignItems:'center'
}
,signItemBgImg:{
width:28,height:28
}
,signItem:{
flexDirection:'column',alignItems:'flex-start',justifyContent:'center'
}
,signLine:{
flexDirection:'row',alignItems:'center',justifyContent:'flex-start'
}
,line:{
height:2,backgroundColor:'#F1F3F5',width:16
}
,redLine:{
backgroundColor:'#FFC2B9'
}
,daysLayout:{
width:28,height:28,justifyContent:'center'
}
,days:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,o.T7,{
color:'#FFFFFF',textAlign:'center'
}
),bottom:{
marginTop:2,alignItems:'center',minWidth:28
}
,bottomText:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,o.T1,o.C15),redBackground:{
backgroundColor:o.C35.color,borderRadius:6,overflow:'hidden',paddingHorizontal:5
}
,sigedText:Object.assign({

}
,o.T1,o.C12),text9:Object.assign({

}
,o.T0,o.C17),scrollViewCls:{
display:'flex'
}
,modalTitle:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T12,o.C11),modalInnerStyle:{
borderRadius:24
}
,modalText:Object.assign({
fontFamily:n.PublicFont.fontFamilyBase
}
,o.T9,o.C11,{
marginBottom:12
}
),modalContent:{
flexDirection:'column',alignItems:'center',justifyContent:'center'
}
,modalPadContent:{
alignItems:'flex-start'
}
,modalLeftBtn:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T9,{
color:o.C35.color,height:40,lineHeight:40,width:'100%',textAlign:'center'
}
),modalRightBtn:Object.assign({
fontFamily:n.PublicFont.fontFamilyMedium
}
,o.T9,{
backgroundColor:o.C35.color,color:o.C33.color,borderRadius:20,textAlign:'center',height:40,lineHeight:40,width:'100%',overflow:'hidden'
}
),tipModalSubContent:{
marginTop:14
}

}
)
}

}
),"b6a411d33e4d6763b85c31c7e4b6811e3d8b6248e64739ec28129ee42ad330b9",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]);
e.default={
exposeItem:function(){
// 变量
var t: any = this.props,n=t.id,c=t.pageCatCode,p=void 0===c?'':c,l=t.pageCatName,C=void 0===l?'':l,E=t.carrierCode,u=void 0===E?'':E;
return{
data:{
actionCode:'910000100',actionName:'\u7b7e\u5230\u6709\u793c-\u7ec4\u4ef6\u66dd\u5149',eventType:o.EVENT_TYPE.EVENT_TYPE_EXPOSURE,content:{
comId:null==n?void 0:n.toString(),exposure:'1',carrier_code:u
}
,pageCatCode:p,pageCatName:C
}

}

}
,clickItem:function(t,n){
var c,p,l,C,E=this.props,u=E.pageCatCode,_=void 0===u?'':u,v=E.pageCatName,T=void 0===v?'':v,N=E.carrierCode,P=void 0===N?'':N;
return'showModal'===n?{
data:{
actionCode:'910000101',actionName:'\u7b7e\u5230\u6709\u793c-\u5f39\u7a97\u66dd\u5149',eventType:o.EVENT_TYPE.EVENT_TYPE_EXPOSURE,content:{
comId:'popup',exposure:'1',carrier_code:P,type:null!=(c=null==t?void 0:t.type)?c:''
}
,pageCatCode:_,pageCatName:T
}

}
:'clickSign'===n?{
data:{
actionCode:'910000102',actionName:'\u7b7e\u5230\u6709\u793c-\u70b9\u51fb\u7b7e\u5230',eventType:o.EVENT_TYPE.EVENT_TYPE_CLICK,content:{
carrier_code:P,batch_code:null!=(p=null==t?void 0:t.batchCode)?p:'',type:null!=(l=null==t?void 0:t.type)?l:'1',click:'1'
}
,pageCatCode:_,pageCatName:T
}

}
:'followModal'===n?{
data:{
actionCode:'910000103',actionName:'\u7b7e\u5230\u6709\u793c-\u70b9\u51fb\u5173\u6ce8\u5e76\u7b7e\u5230\u5f39\u7a97',eventType:o.EVENT_TYPE.EVENT_TYPE_CLICK,content:{
comId:'popup',carrier_code:P,button_name:null!=(C=null==t?void 0:t.buttonName)?C:'',click:'1'
}
,pageCatCode:_,pageCatName:T
}

}
:{

}

}

}

}
),"853ba780b1812d2085eca613d00209d0d8ec55098472603385b71291d6741a4b",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var n: any = r(d[1]),s=r(d[2]),l=t(r(d[3])),c=(t(r(d[4])),r(d[5])),o=r(d[6]),u=t(r(d[7])),v=r(d[8]),h=1,x=2;
e.default=function(t){
var y=[],f=n.CommonUtils.getWindowSize(n.PAGE_TYPE.shop).screenWidth,S=n.CommonUtils.getWindowSize(n.PAGE_TYPE.shop).screenHeight,w=t.type,I=t.status,j=void 0===I?0:I,_=t.waitSignImg,T=t.signedImg,V=t.notSignImg,R=t.waitReceiveImg,b=t.receivedImg,p=t.notReceivedImg,z=t.signedNotReceivedImg,L=t.index,P=t.isLast,B=void 0!==P&&P,E=function(t,s,l){
// 变量
var c: any = s?81:t?43:18;
return(l-2*(n.ScreenUtils.isSmall(l)?16:32)-2*c-196-2)/6
}
;
return(0,v.jsx)(n.WithTheme,{
themeStyles:l.default,children:function(t,l,I){
f=I;
var P=function(){
return'medium'===(0,c.getScreenSize)(I)||'large'===(0,c.getScreenSize)(I)&&I<n.variables.safety_area
}
;
return(0,v.jsx)(o.View,{
ref:function(t){
t&&y.push(t)
}
,children:(0,v.jsxs)(o.View,{
style:t.signItem,children:[(0,v.jsxs)(o.View,{
style:t.signLine,children:[(0,v.jsx)(s.ImageBackground,{
imgUri:1===w?{
0:R,1:b,3:p,2:z
}
[null!=j?j:1]:0===j?_:j===h?T:V,style:t.signItemBgImg,imgViewStyle:t.signItemBgImg,localSource:u.default[1===w?{
0:'waitReceive',1:'received',3:'notReceive',2:'signedNotReceive'
}
[null!=j?j:1]:0===j?'waitSign':j===h?'signed':'notSign'],resizeMode:"cover",children:1!==w&&j!==h?(0,v.jsx)(o.View,{
style:t.daysLayout,children:(0,v.jsx)(o.Text,{
style:t.days,children:L+1
}
)
}
):null
}
),B?null:(0,v.jsx)(o.View,{
style:[t.line,{
width:E(P(),P()&&!(S>f)&&f>=1024,I)
}
,[h,x].includes(j)&&t.redLine]
}
)]
}
),(0,v.jsx)(o.View,{
style:[t.bottom,0===j&&t.redBackground],children:(0,v.jsx)(o.Text,{
numberOfLines:1,style:[t.bottomText,0===j&&t.text9,j===h&&t.sigedText],children:1===w?{
0:(0,n.t)('receive'),1:L+1+"\u5929",3:(0,n.t)('receiving_gifts'),2:L+1+"\u5929"
}
[null!=j?j:0]:{
0:(0,n.t)('sign_in'),1:L+1+"\u5929",3:L+1+"\u5929"
}
[null!=j?j:0]
}
)
}
)]
}
)
}
)
}

}
)
}

}
),"3558e80fb8481c28f73cf7578ed7b9e316d21a916af3e255d14df14c31d00963",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","b6a411d33e4d6763b85c31c7e4b6811e3d8b6248e64739ec28129ee42ad330b9","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","77ca2b5a71baf97c7e63cc7c39636f9f66ca93b2ae44d607119e5bf255e14f29","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=function(e){
var p=e.carrierCode,v=void 0===p?'':p,x=''!==v,b=(0,n.useState)({
width:a.CommonUtils.getWindowSize(a.PAGE_TYPE.shop).screenWidth,height:a.CommonUtils.getWindowSize(a.PAGE_TYPE.shop).screenHeight
}
),D=(0,i.default)(b,2),M=D[0],T=D[1],P=(0,n.useState)(!0),E=(0,i.default)(P,2),_=E[0],O=E[1],W=(0,n.useState)(Object.assign({

}
,j)),R=(0,i.default)(W,2),A=R[0],U=R[1],k=(0,n.useState)(Object.assign({

}
,j)),z=(0,i.default)(k,2),I=z[0],C=z[1],N=(0,n.useState)(!1),V=(0,i.default)(N,2),F=V[0],G=V[1],q=(0,n.useRef)({
login:x,isFirstQuest:!0
}
);
(0,n.useEffect)((function(){
M.width!==a.CommonUtils.getWindowSize(a.PAGE_TYPE.shop).screenWidth&&T({
width:a.CommonUtils.getWindowSize(a.PAGE_TYPE.shop).screenWidth,height:a.CommonUtils.getWindowSize(a.PAGE_TYPE.shop).screenHeight
}
)
}
)),(0,n.useEffect)((function(){
ae();
var e;
return y&&(e=o.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
if('login'===(null==e?void 0:e.service)&&'isLogin'===(null==e?void 0:e.action)){
var t,i=null==e||null==(t=e.param)?void 0:t.isLogin;
'boolean'==typeof i&&(a.AppStore.setIsLogin(i),q.current.login=i,i?X():(B({
activityDynamicsList:[]
}
),Y({
activityDynamicsList:[]
}
)))
}

}
))),function(){
var t;
y&&(null==(t=e)||t.remove())
}

}
),[]);
var B=function(e){
U(Object.assign({

}
,A,e))
}
,Y=function(e){
C(Object.assign({

}
,I,e))
}
,H=(0,n.useState)({
likeMap:{

}
,alreadyLiked:{

}
,itemCountMap:{

}

}
),Q=(0,i.default)(H,2),J=Q[0],K=Q[1],X=(function(){
var e=(0,t.default)((function*(){
// 变量
var e: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=$(e),i=t.state,n=t.setState,o=t.quest;
if(q.current.login){
var a,r=i.activityDynamicsList,l=i.pageNumber,s=i.pageSize,u=i.totalRow,c={
pageNumber:l,pageSize:s
}
;
if(!e&&q.current.isFirstQuest)c.lastUpdateTime=null!=(a=w?window.localStorage.getItem('followUpdateLastUpdateTime'+v):L[v])?a:0;
Z({
isRec:e,params:c,setState:n,quest:o,activityDynamicsList:r,totalRow:u,pageNumber:l,pageSize:s
}
)
}
else ne(n)
}
));
return function(){
return e.apply(this,arguments)
}

}
)(),Z=function(e){
// 变量
var t: any = e.isRec,i=e.params,n=e.setState,o=e.quest,a=e.activityDynamicsList,r=e.totalRow,l=e.pageNumber,s=e.pageSize,u=[];
o(i,v).then((function(e){
if(null!=e&&e.success){
var i;
ie();
var o=e.data,c=void 0===o?{

}
:o,f=c.page,h=void 0===f?{

}
:f;
l=null!=(i=null==h?void 0:h.pageNumber)?i:l,r=null==h?void 0:h.totalRow,1===l&&(a=[]),te(c,a,u),t||1!==c.hasNewDynamics||F||G(!1),r>l*s?n({
loadState:1,activityDynamicsList:a,pageNumber:l+1,totalRow:r,loadMore:!0
}
):(n({
loadState:3,activityDynamicsList:a,pageNumber:l,totalRow:r,loadMore:!1
}
),!v&&!t&&X(!0)),(!t&&a.length>0||t||x)&&O(!1)
}

}
)).catch((function(){
n({
showLoading:!1,loadState:2,totalRow:0
}
)
}
)).finally((function(){
ee(u)
}
))
}
,$=function(e){
return e?{
state:I,setState:Y,quest:u.getRecommendShopDynamics
}
:{
state:A,setState:B,quest:u.getFollowedShopDynamics
}

}
,ee=function(e){
if(e.length>0){
var t=JSON.stringify(e.map((function(e){
return e.id
}
)));
Promise.all([(0,u.queryBatchLikeCount)({
likeIdList:t
}
),(0,u.queryView)({
itemIDList:t
}
)]).then((function(e){
var t=(0,i.default)(e,2),n=t[0],o=n.likeMap,a=void 0===o?{

}
:o,r=n.alreadyLiked,l=void 0===r?{

}
:r,s=t[1].itemCountMap,u=void 0===s?{

}
:s;
K({
likeMap:Object.assign({

}
,J.likeMap,a),alreadyLiked:Object.assign({

}
,J.alreadyLiked,l),itemCountMap:Object.assign({

}
,J.itemCountMap,u)
}
)
}
))
}
setTimeout((function(){
a.Report.execReportData('',!0)
}
),200)
}
,te=function(e,t,i){
var n;
null==e||null==(n=e.activityDynamicsList)||n.forEach((function(e){
var n=t.find((function(t){
return e.id===t.id
}
));
n?Object.assign(n,e):t.push(e),301===e.cardType&&i.push(e.cardDtlData)
}
))
}
,ie=function(){
if(q.current.isFirstQuest){
q.current.isFirstQuest=!1;
// 变量
var e: any = String(Date.now());
w?window.localStorage.setItem('followUpdateLastUpdateTime'+v,e):L[v]=e
}

}
,ne=function(e){
O(!1),e({
showLoading:!1,loadState:1,totalRow:0
}
),oe()
}
,oe=function(){
// 变量
var e: any = '';
if(w){
// 变量
var t: any = window.location.href;
e=a.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else e='vmall://com.vmall.client/home/login';
setTimeout((function(){
a.RouterUtils.gotoPage(e)
}
),500)
}
,ae=function(){
x?X():null===a.AppStore.isLogin?a.AppStore.getIsLogin().then((function(){
q.current.login=a.AppStore.isLogin,X()
}
)):(q.current.login=a.AppStore.isLogin,X())
}
,re=function(e){
o.DeviceEventEmitter.emit('onScrollBeginDragEvent',e)
}
,le=function(e){
o.DeviceEventEmitter.emit('onScrollEvent',e,a.PAGE_TYPE.shop)
}
,se=(0,n.useMemo)((function(){
// 变量
var e: any = M.width;
return'medium'===(0,a.ScreenSize)(e)||'large'===(0,a.ScreenSize)(e)
}
),[M.width]),ue=function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?I:A;
return(0,h.jsx)(r.LoadingView,{
position:"bottom",height:56,iconSize:24,titleStyle:e.lodingTitle,showLoading:i.showLoading,loadState:i.loadState,errorCallback:function(){
X(t)
}

}
)
}
,ce=(0,n.useMemo)((function(){
return w?'100%':x?M.height-230:M.height
}
),[x,M.height]),de=function(e){
return(0,h.jsxs)(o.View,{
style:[e.loadPage,{
height:ce
}
],children:[(0,h.jsx)(o.Image,{
style:[e.loadPageImg],source:a.DarkStore.darkBool?r.ImageArray.loadingDark:r.ImageArray.loading
}
),(0,h.jsx)(o.Text,{
style:[e.loadPageText],children:(0,a.t)('loading')
}
)]
}
)
}
,fe=function(e){
return w&&(document.body.style.overflow=_?'hidden':''),_?w&&(0,h.jsx)(o.View,{
style:e.loadWrap,children:de(e)
}
)||de(e):null
}
,me=function(t,i,n,a){
return(0,h.jsx)(o.View,{
style:n.productItemWrap,children:(0,h.jsx)(c.default,Object.assign({
width:a,data:t
}
,J,e))
}
,i)
}
,ge=(0,n.useMemo)((function(){
// 变量
var e: any = M.width;
return!(M.height>e)&&e>=1024
}
),[M]),he=(0,n.useMemo)((function(){
return se?ge?3:2:1
}
),[se,ge]),pe=(0,n.useMemo)((function(){
return se?24:16
}
),[se]),ve=(0,n.useMemo)((function(){
return Math.min(M.width,a.variables.safety_area)-2*pe
}
),[pe,M.width]),ye=function(){
// 变量
var e: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0];
return s.default.debounce((function(){
(e?I:A).loadMore&&X(e)
}
),200)
}
,we=(0,n.useMemo)((function(){
// 变量
var e: any = A.activityDynamicsList,t=2===he?8:12,i=(ve-(he-1)*t)/he;
return(0,h.jsx)(a.WithTheme,{
themeStyles:function(e){
return(0,f.default)(e,S,x)
}
,children:function(n){
return(null==e?void 0:e.length)>0?(0,h.jsxs)(h.Fragment,{
children:[F&&(0,h.jsxs)(o.View,{
style:n.newBox,children:[(0,h.jsx)(c.RedTab,{
text:"NEW"
}
),(0,h.jsx)(o.Text,{
style:n.newBoxText,children:(0,a.t)('shop_dynamic_update')
}
)]
}
),(0,h.jsx)(r.WaterFallLO,{
column:he,pageGutter:0,gutter:t,data:e,boxWidth:ve,onLoadMore:ye(),isLoading:A.loadMore,renderItem:function(e){
// 变量
var t: any = e.item,o=e.index;
return me(t,o,n,i)
}
,footer:function(){
return ue(n)
}

}
)]
}
):(0,h.jsxs)(o.View,{
style:[n.emptyC],children:[(0,h.jsx)(o.Image,{
source:l.default.notyet,style:n.emptyImg
}
),(0,h.jsx)(o.Text,{
style:[n.emptyT,se?n.prdAreaPadR:n.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:(0,a.t)('no_shop_dynamic')
}
)]
}
)
}

}
)
}
),[A,J,ve]),Se=(0,n.useMemo)((function(){
// 变量
var e: any = I.activityDynamicsList,t=2===he?8:12,i=(ve-(he-1)*t)/he;
return(0,h.jsx)(a.WithTheme,{
themeStyles:function(e){
return(0,f.default)(e,S,x)
}
,children:function(n){
return e.length>0?(0,h.jsx)(r.WaterFallLO,{
column:he,pageGutter:0,gutter:t,data:e,boxWidth:ve,onLoadMore:ye(!0),isLoading:I.loadMore,renderItem:function(e){
// 变量
var t: any = e.item,o=e.index;
return me(t,o,n,i)
}
,footer:function(){
return ue(n,!0)
}

}
):null
}

}
)
}
),[I,J,ve]),Le=function(e){
return(0,h.jsxs)(o.View,{
style:[e.productList,{
paddingHorizontal:pe,maxWidth:a.variables.safety_area,alignSelf:'center'
}
],children:[we,!v&&I.activityDynamicsList.length>0&&(0,h.jsxs)(h.Fragment,{
children:[(0,h.jsx)(o.View,{
style:{
height:20
}

}
),(0,h.jsx)(o.Text,{
style:[e.recommendationTitle,{
paddingHorizontal:se?8:0
}
],children:(0,a.t)('recommend_shop_dynamic')
}
),Se]
}
)]
}
)
}
;
return(0,h.jsx)(a.WithTheme,{
themeStyles:function(e){
return(0,f.default)(e,S,x)
}
,children:function(e){
return(0,h.jsxs)(h.Fragment,{
children:[fe(e),x&&_&&(0,h.jsx)(o.View,{
style:{
height:ce
}

}
),w?!_&&Le(e):!_&&(0,h.jsx)(o.Animated.ScrollView,{
onMomentumScrollEnd:le,onScrollBeginDrag:re,style:!x&&{
height:M.height-104-S
}
,children:Le(e)
}
)]
}
)
}

}
)
}
,_e.followUpdateLastUpdateTime=void 0;
// 变量
var t: any = e(_r(d[1])),i=e(_r(d[2])),n=v(_r(d[3])),o=_r(d[4]),a=_r(d[5]),r=_r(d[6]),l=e(_r(d[7])),s=e(_r(d[8])),u=_r(d[9]),c=v(_r(d[10])),f=e(_r(d[11])),h=_r(d[12]);
// 函数
function p(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(p=function(e){
return e?i:t
}
)(e)
}
// 函数
function v(e: any, t: any): any {
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = p(t);
if(i&&i.has(e))return i.get(e);
var n={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var r: any = o?Object.getOwnPropertyDescriptor(e,a):null;
r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]
}
return n.default=e,i&&i.set(e,n),n
}
var y=a.PlatformUtils.isApp(),w='web'===o.Platform.OS,S=0;
'ios'===o.Platform.OS&&a.DeviceUtils.getStatusBarHeight().then((function(e){
S=e
}
)).catch((function(){
S=0
}
));
var L=_e.followUpdateLastUpdateTime={

}
,j={
activityDynamicsList:[],showLoading:!0,loadState:1,loadMore:!0,pageNumber:1,pageSize:10,totalRow:0
}

}
),"6166d31860196716618663ea178e5e067e9fb54dd62a41333ece468a5f59f096",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","c5092b28f167c78340787cd3e734225b28dfe28e80d4aa513a2aa891fec7e2a3","6b69f085c6f8c27709af96f3578d0d69a731d6d8a3d8fa150c47e409bf33a4c7","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.RedTab=void 0;
var t=e(_r(d[1])),o=e(_r(d[2])),i=e(_r(d[3])),r=e(_r(d[4])),n=e(_r(d[5])),l=e(_r(d[6])),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = v(t);
if(o&&o.has(e))return o.get(e);
var i={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var l: any = r?Object.getOwnPropertyDescriptor(e,n):null;
l&&(l.get||l.set)?Object.defineProperty(i,n,l):i[n]=e[n]
}
return i.default=e,o&&o.set(e,i),i
}
)(_r(d[7])),s=e(_r(d[8])),c=_r(d[9]),u=e(_r(d[10])),h=_r(d[11]),x=e(_r(d[12])),p=_r(d[13]),y=_r(d[14]),f=_r(d[15]),j=_r(d[16]);
// 函数
function v(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,o=new WeakMap;
return(v=function(e){
return e?o:t
}
)(e)
}
// 函数
function T(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(T=function(){
return!!e
}
)()
}
var w='ios'===h.Platform.OS,P=function(){
// 变量
var e: any = h.Dimensions.get('window').width,t=(0,y.getScreenSize)(e);
return'medium'===t||'large'===t&&e<c.variables.safety_area
}
,D=864e5,C=36e5,b=function(e){
var t={
d:0,h:0,m:0,s:0
}
,o=new Date(e).getTime()-(new Date).getTime();
return o<0||(t.d=Math.floor(o/D),o-=t.d*D,t.h=Math.floor(o/C),o-=t.h*C,t.m=Math.floor(o/6e4),o-=6e4*t.m,t.s=Math.floor(o/1e3)),t
}
,V=function(e){
return String(e).padStart(2,'0')
}
,S=new Date('0').getTime(),B=function(e){
// 变量
var t: any = new Date(e),o=new Date,i=Math.floor((o.getTime()-S)/D)-Math.floor((t.getTime()-S)/D),r=(0,c.t)('common_year'),n=(0,c.t)('month'),l=(0,c.t)('date');
if(0===i)return(0,c.t)('published_today');
if(1===i)return(0,c.t)('published_yesterday');
if(i<7)return i+(0,c.t)('days_ago');
// 变量
var a: any = t.getFullYear();
return a===o.getFullYear()?""+(t.getMonth()+1)+n+t.getDate()+l:""+a+r+(t.getMonth()+1)+n+t.getDate()+l
}
,k=function(e,t){
for(var o='',i=0,r=0;
i<e.length;
i++){
// 变量
var n: any = r+(e.charCodeAt(i)>255?2:1);
if(!(n<=t))break;
o+=e[i],r=n
}
return o===e?e:o+'...'
}
,R=_e.RedTab=function(e){
var t=e.text,o=e.style,i=void 0===o?{

}
:o,r=e.textStyle,n=void 0===r?{

}
:r,l=(0,a.useMemo)((function(){
return k(t,20)
}
),[t]);
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
return(0,j.jsx)(s.default,{
start:{
x:0,y:0
}
,end:{
x:1,y:0
}
,colors:t.J2,style:[e.shopTag,i],children:(0,j.jsx)(h.Text,{
style:[e.tagText,n],children:l
}
)
}
)
}

}
)
}
,O=function(e){
var t=e.tabName,o=void 0===t?'':t,i=e.content,r=void 0===i?'':i,n=(0,a.useState)(2),s=(0,l.default)(n,2),x=s[0],y=s[1],f=(0,a.useRef)(!0),v=function(e){
return function(t){
f.current&&(f.current=!1,y(t.nativeEvent.layout.height<3*e.T5.lineHeight?-1:0))
}

}
,T=function(){
-1!==x&&y(0===x?1:0)
}
;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
return w?(0,j.jsxs)(h.Text,{
children:[(0,j.jsx)(h.View,{
style:e.tagWrap,children:(0,j.jsx)(R,{
text:o
}
)
}
),(0,j.jsx)(h.Text,{
style:e.describeText,children:r
}
)]
}
):(0,j.jsxs)(h.TouchableOpacity,{
style:x<1&&e.unexpanded,onPress:T,activeOpacity:-1===x?1:.3,onLayout:v(t),children:[(0,j.jsxs)(h.Text,{
children:[(0,j.jsx)(h.View,{
style:e.tagWrap,children:(0,j.jsx)(R,{
text:o
}
)
}
),(0,j.jsx)(h.Text,{
style:e.describeText,children:r
}
)]
}
),0===x&&(0,j.jsxs)(h.View,{
style:e.eclipsisExpand,children:[(0,j.jsx)(h.Text,{
style:[e.describeText,e.marginR4],children:"..."
}
),(0,j.jsx)(p.SvgIcon,{
normalCol:c.DarkStore.darkBool?t.C25.color:t.C24.color,viewBox:'300 -300 1340 1340',opacity:c.DarkStore.darkBool?t.C25.color:t.C24.opacity,iconName:"ic_public_arrow_down_0",width:16,height:16
}
)]
}
)]
}
)
}

}
)
}
,_=function(e){
var t,o=e.data,i=void 0===o?{

}
:o,r=e.goToPrd,n=void 0===r?void 0:r,x=i.cardType,p=i.endTime,y=103===x?'seckillPrice':104===x?'countDownAmount':106===x?'promoPrice':'',f=null!=(t=i.cardDtlData[y])?t:i.cardDtlData.photoVoList[0].promotionPrice,v=(0,a.useState)(103===x&&b(p)),T=(0,l.default)(v,2),w=T[0],P=T[1],D=(0,a.useMemo)((function(){
// 变量
var e: any = 106===x?i.cardDtlData.soldQuantity/i.cardDtlData.expectSoldQuantity:0;
return[e,e<=1?.5:e<=3?.7:1]
}
),[x,i]),C=(0,l.default)(D,2),S=C[0],B=C[1];
(0,a.useEffect)((function(){
if(103===x){
var e=setInterval((function(){
P(b(p))
}
),1e3);
return function(){
clearInterval(e)
}

}

}
),[p,x]);
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
return(0,j.jsxs)(h.View,{
style:[e.marginT12,e.goToBuyBar],children:[(0,j.jsxs)(h.View,{
style:[e.promotionPrice,e.flex1],children:[(0,j.jsxs)(h.View,{
style:e.promotionPrice,children:[(0,j.jsx)(h.Text,{
style:e.secKillPriceIcon,children:"\xa5"
}
),(0,j.jsx)(h.Text,{
style:e.secKillPrice,children:f
}
)]
}
),(0,j.jsx)(h.View,{
style:e.originalPrice,children:i.cardDtlData.photoVoList[0].originalPrice>f&&(0,j.jsxs)(h.Text,{
numberOfLines:1,style:e.secKillOldPrice,children:["\xa5",i.cardDtlData.photoVoList[0].originalPrice]
}
)
}
)]
}
),(0,j.jsxs)(h.View,{
style:e.flexDirectionRow,children:[103===x?(0,j.jsxs)(h.View,{
style:e.secKillCountLine,children:[0!==w.d&&(0,j.jsx)(h.Text,{
style:[e.secKillCountText,e.marginR4],children:""+w.d+(0,c.t)('date')
}
),(0,j.jsx)(h.Text,{
style:e.secKillCountBox,children:V(w.h)
}
),(0,j.jsx)(h.Text,{
style:[e.secKillCountText,e.marginL2],children:":"
}
),(0,j.jsx)(h.Text,{
style:[e.secKillCountBox,e.marginL2],children:V(w.m)
}
),(0,j.jsx)(h.Text,{
style:[e.secKillCountText,e.marginL2],children:":"
}
),(0,j.jsx)(h.Text,{
style:[e.secKillCountBox,e.marginL2],children:V(w.s)
}
)]
}
):106===x&&(0,j.jsxs)(h.View,{
style:e.supportLine,children:[(0,j.jsxs)(h.Text,{
style:e.supportText,children:[i.cardDtlData.soldQuantity,"\u4eba\u5df2\u652f\u6301"]
}
),(0,j.jsxs)(h.View,{
style:e.supportPercent,children:[(0,j.jsx)(h.View,{
style:e.supportPercentBarBox,children:(0,j.jsx)(s.default,{
start:{
x:0,y:0
}
,end:{
x:1,y:0
}
,colors:t.C45.color,style:[e.supportPercentBar,{
width:70*Math.min(S,1),opacity:B
}
]
}
)
}
),(0,j.jsxs)(h.Text,{
style:e.supportPercentText,children:[Math.round(100*S),"%"]
}
)]
}
)]
}
),(0,j.jsx)(h.TouchableOpacity,{
style:[e.goToBuyBtn,106===x&&e.goToBuyBtnBig],onPress:function(){
return null==n?void 0:n(i.cardDtlData.photoVoList[0],103===x||104===x?'3':106===x&&'7')
}
,children:(0,j.jsx)(h.Text,{
style:e.goToBuyBtnText,children:103===x?(0,c.t)('to_second_kill'):104===x?(0,c.t)('go_buy'):106===x&&(0,c.t)('support')
}
)
}
)]
}
)]
}
)
}

}
)
}
,L=function(e){
// 变量
var t: any = e.item,o=e.index,i=void 0===o?0:o,r=e.cardGutter,n=e.imgHeight,l=e.showRank,a=void 0!==l&&l,s=e.showPrice,x=void 0!==s&&s,y=e.goToPrd,f=void 0===y?void 0:y,v=e.backgroundStyle,T=void 0===v?void 0:v;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e){
var o;
return(0,j.jsxs)(h.TouchableOpacity,{
style:[e.flex1,0!==i&&{
marginLeft:r
}
,T],onPress:function(){
return null==f?void 0:f(t,'2')
}
,children:[(0,j.jsxs)(h.View,{
style:[e.imgBox,{
height:n
}
],children:[(0,j.jsx)(p.FastImageView,{
imgUri:null!=(o=t.path)?o:'',imgStyle:e.imgStyle
}
),a&&(0,j.jsx)(p.OrderNumber,{
number:i+1,originStyle:{

}

}
)]
}
),x&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(h.Text,{
numberOfLines:1,style:[e.marginT8,e.productName],children:t.displayPrdName
}
),(0,j.jsxs)(h.View,{
style:[e.marginT4,e.promotionPrice],children:[(0,j.jsxs)(h.Text,{
style:e.productNewPrice,children:["\xa5",t.promotionPrice]
}
),t.originalPrice>t.promotionPrice&&(0,j.jsx)(h.View,{
style:e.flex1,children:(0,j.jsxs)(h.Text,{
numberOfLines:1,style:e.productOldPrice,children:["\xa5",t.originalPrice]
}
)
}
)]
}
)]
}
)]
}
)
}

}
)
}
,N=function(e){
// 变量
var t: any = e.items,o=void 0===t?[]:t,i=e.showPrice,r=void 0!==i&&i,n=e.showRank,l=void 0!==n&&n,a=e.goToPrd,s=void 0===a?void 0:a,x=e.cardWidth,y=void 0===x?0:x;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
// 变量
var i: any = o.length,n=(y-24-8*(i-1))/i;
return(0,j.jsx)(h.View,{
style:e.marginT8,children:!r||i>=3?(0,j.jsx)(h.View,{
style:e.flexDirectionRow,children:o.slice(0,3).map((function(e,t){
return(0,j.jsx)(L,{
index:t,showRank:l,showPrice:r,goToPrd:s,item:e,cardGutter:8,imgHeight:n
}
,t)
}
))
}
):r&&2===i&&(0,j.jsx)(h.View,{
style:[e.flexDirectionRow,e.fitMarginB8],children:o.map((function(e,t){
return(0,j.jsx)(I,{
goToPrd:s,items:[e],backgroundStyle:!1,cardGutter:0===t?void 0:8,showRank:l?t+1:0
}
,t)
}
))
}
)||(0,j.jsxs)(h.TouchableOpacity,{
style:e.productCard,onPress:function(){
return null==s?void 0:s(o[0],'2')
}
,children:[l&&(0,j.jsx)(p.OrderNumber,{
number:1,originStyle:{
numberPosition:e.oneRank
}

}
),(0,j.jsx)(h.View,{
style:[e.imgBox,e.productCardImgBox],children:(0,j.jsx)(p.FastImageView,{
imgUri:o[0].path,imgStyle:e.imgStyle
}
)
}
),(0,j.jsxs)(h.View,{
style:e.productCardRight,children:[(0,j.jsx)(h.Text,{
numberOfLines:2,style:e.productCardName,children:o[0].displayPrdName
}
),(0,j.jsxs)(h.View,{
style:e.promotionPrice,children:[(0,j.jsxs)(h.Text,{
children:[(0,j.jsx)(h.Text,{
style:e.productPriceIcon,children:"\xa5"
}
),(0,j.jsx)(h.Text,{
style:e.productCardNewPrice,children:o[0].promotionPrice
}
)]
}
),o[0].originalPrice>o[0].promotionPrice&&(0,j.jsxs)(h.Text,{
style:e.productCardOldPrice,children:["\xa5",o[0].originalPrice]
}
)]
}
)]
}
)]
}
)
}
)
}

}
)
}
,I=function(e){
var t=e.cardGutter,o=void 0===t?0:t,i=e.height,r=void 0===i?70:i,n=e.items,l=void 0===n?[]:n,a=e.goToPrd,s=e.showRank,x=void 0===s?0:s,y=e.showArrow,f=void 0!==y&&y,v=e.showGift,T=void 0!==v&&v,w=e.backgroundStyle,P=void 0===w?void 0:w,D={
marginLeft:8
}
;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
var i,n;
return(0,j.jsxs)(h.View,{
style:[e.giftCardArrowBox,{
marginLeft:o-(f?8:0)
}
],children:[f&&(0,j.jsx)(h.View,{
style:e.giftCardArrow
}
),0!==x&&(0,j.jsx)(p.OrderNumber,{
number:x,originStyle:{

}

}
),(0,j.jsx)(h.View,{
style:[e.giftCardBox,{
height:r
}
],children:1===l.length?(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsxs)(h.TouchableOpacity,{
style:[e.imgBox,{
width:r-16,height:r-16
}
,null!=P?P:{
backgroundColor:c.DarkStore.darkBool?t.C13.color:t.C17.color
}
],onPress:function(){
return null==a?void 0:a(l[0],'2')
}
,children:[(0,j.jsx)(p.FastImageView,{
imgUri:null!=(i=null==(n=l[0])?void 0:n.path)?i:'',imgStyle:e.imgStyle
}
),T&&(0,j.jsx)(R,{
text:(0,c.t)('setIconNameG'),style:e.giftTab
}
)]
}
),(0,j.jsxs)(h.TouchableOpacity,{
style:e.giftCardRight,onPress:function(){
return null==a?void 0:a(l[0],'2')
}
,children:[(0,j.jsx)(h.Text,{
style:e.giftCardName,numberOfLines:2,children:l[0].displayPrdName
}
),(0,j.jsxs)(h.View,{
style:e.promotionPrice,children:[(0,j.jsxs)(h.View,{
style:e.promotionPrice,children:[(0,j.jsx)(h.Text,{
style:e.productPriceIcon,children:"\xa5"
}
),(0,j.jsx)(h.Text,{
style:e.productCardNewPrice,children:T?0:l[0].promotionPrice
}
)]
}
),(T||l[0].originalPrice>l[0].promotionPrice)&&(0,j.jsx)(h.View,{
style:e.flex1,children:(0,j.jsxs)(h.Text,{
numberOfLines:1,style:e.productCardOldPrice,children:["\xa5",l[0].originalPrice]
}
)
}
)]
}
)]
}
)]
}
):(0,j.jsx)(h.ScrollView,{
horizontal:!0,style:e.giftCardScroll,children:(0,j.jsx)(h.View,{
style:e.flexDirectionRow,children:l.map((function(o,i){
var n;
return(0,j.jsxs)(h.TouchableOpacity,{
style:[e.imgBox,{
width:r-16,height:r-16
}
,null!=P?P:{
backgroundColor:c.DarkStore.darkBool?t.C13.color:t.C17.color
}
,0!==i?D:e.giftCardThreeImg],onPress:function(){
return null==a?void 0:a(o,'2')
}
,children:[(0,j.jsx)(p.FastImageView,{
imgUri:null!=(n=null==o?void 0:o.path)?n:'',imgStyle:e.imgStyle
}
),T&&(0,j.jsx)(R,{
text:(0,c.t)('setIconNameG'),style:e.giftTab
}
)]
}
,i)
}
))
}
)
}
)
}
)]
}
)
}

}
)
}
,M=function(e){
var t=e.data,o=void 0===t?{

}
:t,i=e.goToPrd,r=void 0===i?void 0:i,n=o.mainPrdPhotoVo,s=void 0===n?{

}
:n,x=o.giftDtlVoList,y=void 0===x?[]:x,f=function(e){
return(0,j.jsxs)(h.View,{
style:e.goToBuyBar,children:[(0,j.jsx)(h.Text,{
style:e.goToBuyText,children:(0,c.t)('zero_yuan_gift')
}
),(0,j.jsx)(h.TouchableOpacity,{
style:e.goToBuyBtn,onPress:function(){
return null==r?void 0:r(s,'3')
}
,children:(0,j.jsx)(h.Text,{
style:e.goToBuyBtnText,children:(0,c.t)('go_buy')
}
)
}
)]
}
)
}
,v=(0,a.useMemo)((function(){
// 变量
var e: any = !P()&&2===y.length;
return[e,e?148:106]
}
),[y]),T=(0,l.default)(v,2),w=T[0],D=T[1];
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e){
var t;
return(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsxs)(h.View,{
style:[e.marginT8,e.flexDirectionRow],children:[(0,j.jsx)(h.TouchableOpacity,{
style:[e.imgBox,{
width:D,height:D,marginRight:8
}
],onPress:function(){
return null==r?void 0:r(s,'2')
}
,children:(0,j.jsx)(p.FastImageView,{
imgUri:null!=(t=s.path)?t:'',imgStyle:e.imgStyle
}
)
}
),(0,j.jsxs)(h.View,{
style:e.productGiftCardRight,children:[w?(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(I,{
cardGutter:8,goToPrd:r,items:[y[0]],showArrow:!0,showGift:!0
}
),(0,j.jsx)(I,{
cardGutter:8,goToPrd:r,items:[y[1]],showArrow:!0,showGift:!0
}
)]
}
):(0,j.jsx)(I,{
cardGutter:8,goToPrd:r,items:y,showArrow:!0,showGift:!0
}
),!w&&f(e)]
}
)]
}
),w&&f(e)]
}
)
}

}
)
}
,U=function(e){
var t=e.receiveRef,o=e.data,i=void 0===o?{

}
:o,r=e.likeMap,n=void 0===r?{

}
:r,s=e.alreadyLiked,x=void 0===s?{

}
:s,y=e.itemCountMap,f=void 0===y?{

}
:y,v=e.goToPrd,T=void 0===v?void 0:v,w=e.gotoArtical,D=void 0===w?void 0:w,C=e.toggleLike,b=void 0===C?void 0:C,V=e.likeNum,S=void 0===V?void 0:V,B=e.isLiked,k=void 0===B?void 0:B,R=e.width,O=i.photoVoList,_=void 0===O?[]:O,L=2===i.contentType,N=function(e,t){
var o,r,l,a,s,u,y;
return(0,j.jsxs)(h.View,{
style:t.thumbBar,children:[(0,j.jsxs)(h.View,{
style:[t.thumbBar,t.marginR16],children:[(0,j.jsx)(h.TouchableOpacity,{
style:[t.marginR4],onPress:function(){
var e;
(null!=k?k:x[null!=(e=null==i?void 0:i.id)?e:''])?null==b||b('dislike',null==i?void 0:i.id):null==b||b('like',null==i?void 0:i.id)
}
,children:(null!=k?k:x[null!=(o=null==i?void 0:i.id)?o:''])?(0,j.jsx)(p.SvgIcon,{
iconName:"thumbs-up-fill",width:"16",height:"16",normalCol:'#CF0A2C'
}
):(0,j.jsx)(p.SvgIcon,{
iconName:"thumbs-up",width:"16",height:"16",opacity:e.C15.opacity,normalCol:e.C15.color
}
)
}
),(0,j.jsx)(h.Text,{
style:t.thumbBarText,children:null!=(r=null!=(l=null!=S?S:n[null!=(a=null==i?void 0:i.id)?a:''])?l:null==i?void 0:i.likeNum)?r:0
}
)]
}
),(0,j.jsxs)(h.View,{
style:t.thumbBar,children:[(0,j.jsx)(h.View,{
style:[t.marginR4],children:(0,j.jsx)(p.SvgIcon,{
iconName:"read",width:"22",height:"10",normalCol:c.DarkStore.darkBool?'rgba(255,255,255,0.40)':'rgba(0,0,0,0.40)'
}
)
}
),(0,j.jsx)(h.Text,{
style:t.thumbBarText,children:null!=(s=null!=(u=f[null!=(y=null==i?void 0:i.id)?y:''])?u:null==i?void 0:i.viewNum)?s:0
}
)]
}
)]
}
)
}
,M=function(e){
return function(){
return null==T?void 0:T(Object.assign({

}
,e,{
contentId:i.id
}
),'0')
}

}
,U=(0,a.useMemo)((function(){
// 变量
var e: any = P()?2*(R-28)/3:1===_.length?184:146;
return[e,(e-8)/2]
}
),[R,_]),F=(0,l.default)(U,2),W=F[0],G=F[1];
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,o){
var r,n,l,a,s;
return(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsxs)(h.View,{
style:[e.marginT8,e.flexDirectionRow],children:[(0,j.jsx)(h.TouchableOpacity,{
style:[e.imgBox,e.marginB8,{
width:W,height:W,marginRight:8
}
],onPress:function(){
return D(i.contentType,i.id)
}
,children:L?(0,j.jsx)(p.VideoPlayer,{
ref:function(e){
t&&(t.player=e)
}
,isPause:!0,width:'100%',height:'100%',sourceUrl:null!=(r=null!=(n=null==i?void 0:i.videoPreviewUri)?n:null==i?void 0:i.videoUri)?r:'',poster:null!=(l=null==i?void 0:i.coverUri)?l:'',aspectRatio_wap:"1:1",isVoice:!1,type:3
}
):(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(h.View,{
style:e.articalIcon,children:(0,j.jsx)(h.Text,{
style:e.articalIconText,children:"\u6587\u7ae0"
}
)
}
),(0,j.jsx)(p.FastImageView,{
imgUri:null!=(a=null==i?void 0:i.coverUri)?a:'',imgStyle:e.imgStyle
}
)]
}
)
}
),(0,j.jsx)(h.View,{
style:e.productGiftCardRight,children:1===_.length?(0,j.jsxs)(h.TouchableOpacity,{
style:[e.marginB8,e.articalPrdBox,e.flex1],onPress:M(_[0]),children:[(0,j.jsx)(h.View,{
style:[e.imgBox,e.articalImg],children:(0,j.jsx)(p.FastImageView,{
imgUri:null!=(s=_[0].path)?s:'',imgStyle:e.imgStyle
}
)
}
),(0,j.jsxs)(h.View,{
style:e.flex1,children:[(0,j.jsx)(h.Text,{
numberOfLines:2,style:[e.flex1,e.marginT8,e.productName],children:_[0].displayPrdName
}
),(0,j.jsxs)(h.View,{
style:e.promotionPrice,children:[(0,j.jsxs)(h.Text,{
style:e.productCardNewPrice,children:["\xa5",_[0].promotionPrice]
}
),_[0].originalPrice>_[0].promotionPrice&&(0,j.jsx)(h.View,{
style:e.flex1,children:(0,j.jsxs)(h.Text,{
numberOfLines:1,style:e.productCardOldPrice,children:["\xa5",_[0].originalPrice]
}
)
}
)]
}
)]
}
)]
}
):_.slice(0,2).map((function(e,t){
return(0,j.jsx)(I,{
height:G,goToPrd:M(e),items:[e]
}
,t)
}
))
}
)]
}
),N(o,e)]
}
)
}

}
)
}
,F=function(e){
var t=e.data,o=void 0===t?{

}
:t,i=e.onSuccess,r=void 0===i?void 0:i,n=e.beforeGoToCoupon,l=void 0===n?void 0:n,a=e.width;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,t){
return(0,j.jsx)(h.View,{
style:e.marginT8,children:(0,j.jsx)(p.CouponItem,{
isLogin:!0,pageType:"shop",cwidth:a-24,circleBackgroundColor:t.C33.color,item:Object.assign({

}
,o.cardDtlData,{
couponValidBgtime:o.startTime,couponValidEndtime:o.endTime
}
),beforeGetCoupon:r,beforeGoToCoupon:l
}
)
}
)
}

}
)
}
,W=function(e){
// 变量
var t: any = e.text,o=e.onPress,i=void 0===o?void 0:o,r=e.showMore,n=void 0!==r&&r;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e,o){
return(0,j.jsxs)(h.View,{
style:e.moreBarBox,children:[(0,j.jsx)(h.Text,{
style:e.moreBarText,children:t
}
),n&&(0,j.jsxs)(h.TouchableOpacity,{
style:e.moreBarBtn,onPress:function(){
return null==i?void 0:i()
}
,children:[(0,j.jsx)(h.Text,{
style:e.moreBarBtnText,children:"\u66f4\u591a"
}
),(0,j.jsx)(p.SvgIcon,{
normalCol:c.DarkStore.darkBool?o.C25.color:o.C24.color,viewBox:'-300 0 1024 1024',opacity:c.DarkStore.darkBool?o.C25.color:o.C24.opacity,iconName:"ic24-more",width:12,height:24
}
)]
}
)]
}
)
}

}
)
}
,G=function(e){
var t=e.data,o=void 0===t?{

}
:t,i=e.gotoOrder,r=void 0===i?void 0:i,n={
1:(0,c.t)('discount_on_orders'),2:(0,c.t)('order_full_minus')
}
[o.cardDtlData.promoOrderRuleType];
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(e){
return(0,j.jsxs)(h.View,{
style:[e.marginT8,e.couponBox,{
backgroundColor:c.DarkStore.darkBool?'#2E0E15':'#FEF6F8'
}
],children:[(0,j.jsx)(h.View,{
style:e.couponBoxLeft,children:(0,j.jsx)(h.Text,{
style:e.couponBoxLeftBottomText,children:n
}
)
}
),(0,j.jsx)(h.Image,{
source:c.DarkStore.darkBool?p.ImageArray.dashR:p.ImageArray.dashB,style:e.dashline
}
),(0,j.jsxs)(h.View,{
style:e.couponBoxRight,children:[(0,j.jsx)(h.View,{
style:e.couponBoxRightTextWrap,children:(0,j.jsx)(h.Text,{
numberOfLines:1,style:e.couponBoxRightTopText,children:o.cardDtlData.mainTitle
}
)
}
),!w&&(0,j.jsx)(h.TouchableOpacity,{
onPress:function(){
return null==r?void 0:r()
}
,style:e.couponBoxRightBtn,children:(0,j.jsx)(h.Text,{
style:e.couponBoxRightBtnText,children:(0,c.t)('get_the_order')
}
)
}
)]
}
)]
}
)
}

}
)
}
,A=(function(e){
// 函数
function l(e: any): any {
var o,n,a,s;
return(0,t.default)(this,l),n=this,a=l,s=[e],a=(0,r.default)(a),(o=(0,i.default)(n,T()?Reflect.construct(a,s||[],(0,r.default)(n).constructor):a.apply(n,s))).itemlist=[],o.isSelf=!1,o.receiveRef=null,o.state={
likeNum:void 0,isLiked:void 0
}
,o.clickReport=function(e,t,i){
o.props.clickItem({
button_name:'0'===e?void 0:e,URL:t,sku_code:null==i?void 0:i.skuCode,product_name:null==i?void 0:i.displayPrdName,product_id:null==i?void 0:i.displayPrdId,batch_code:null==i?void 0:i.batchCode,content_id:null==i?void 0:i.contentId
}
),c.Report.execReportData('',!0)
}
,o.gotoShop=function(){
// 变量
var e: any = o.props.data,t=e.shopH5Url,i=void 0===t?'':t,r=e.shopMobileUrl,n=void 0===r?'':r,l='';
l=c.PlatformUtils.isApp()?n:i,o.clickReport('1',l,{

}
),l&&c.RouterUtils.gotoPage(l)
}
,o.goToPrd=function(e,t){
// 变量
var i: any = e.productPageType,r=void 0===i?'':i,n=e.displayPrdId,l=e.skuCode;
(String(r)?c.RouterUtils.getProductDetailUrlAllByType(String(r),n,l):c.RouterUtils.getProductDetailUrlAll(n,l)).then((function(i){
o.clickReport(t,i,e),i&&c.RouterUtils.gotoPage(i)
}
))
}
,o.gotoOrder=function(){
var e,t=null==(e=o.props.data.cardDtlData.promotionPrdDtlVoList)?void 0:e[0],i=c.Service.wapDomain+"addon/detail?refSbomCode="+(null==t?void 0:t.skuCode);
o.clickReport('5',i,t),c.RouterUtils.gotoPage(i)
}
,o.gotoCoupon=function(e){
var t,i=o.props.data.cardDtlData.batchCode;
t=c.PlatformUtils.isPc(e)?c.Service.webDomain+"product/coupon/queryPrdForCoupon":c.PlatformUtils.isWap(e)||c.PlatformUtils.isMp()?c.Service.wapDomain+"member/couponPrd/list?batchCode="+i:"vmall://com.vmall.client/product/coupon?couponBatchCode="+i,o.clickReport('4',t,{
batchCode:i
}
),c.RouterUtils.gotoPage(t)
}
,o.beforeGetCoupon=function(){
o.clickReport('6',void 0,{
batchCode:o.props.data.cardDtlData.batchCode,activityCode:o.props.data.cardDtlData.activityCode
}
)
}
,o.beforeGoToCoupon=function(e,t){
o.clickReport('8',e,{
batchCode:t
}
)
}
,o.gotoArtical=function(){
var e=o.props.data.cardDtlData,t=void 0===e?{

}
:e,i=0===t.contentType?'longContent':1===t.contentType?'shortContent':'video',r='android'===h.Platform.OS?"vmall://com.vmall.client/discoverNew/"+i+"?contentId="+t.id:c.Service.wapDomain+"newContent/detail?contentId="+t.id;
o.clickReport('0',r,{
contentId:t.id
}
),c.RouterUtils.gotoPage(r)
}
,o.toggleLike=function(e,t){
c.HttpService[e]({
portal:(0,f.getPortalStr)(null,!0),country:c.MCP_COUNTRY.CN,lang:c.MCP_LANG.CN,version:'',beCode:c.MCP_COUNTRY.CN,itemID:t,ccsItemType:'1'
}
).then((function(t){
void 0!==t.count&&o.setState({
likeNum:t.count,isLiked:'like'===e
}
)
}
))
}
,o.isSelf=void 0!==o.props.carrierCode&&''!==o.props.carrierCode,o
}
return(0,n.default)(l,e),(0,o.default)(l,[{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,o=t.data,i=t.likeMap,r=t.alreadyLiked,n=t.itemCountMap;
return(0,j.jsx)(c.WithTheme,{
themeStyles:u.default,children:function(t,l,a){
var s,u,x,y,f;
return[102,103,104,105,106,107,201,301].includes(o.cardType)?(0,j.jsxs)(h.View,{
style:{
width:e.props.width
}
,children:[e.isSelf&&(0,j.jsx)(h.View,{
style:t.timeHeader,children:(0,j.jsx)(h.Text,{
style:t.timeHeaderText,children:B(o.startTime)
}
)
}
),(0,j.jsxs)(h.View,{
style:t.container,ref:function(t){
t&&(e.receiveRef=t,e.itemlist.push(t))
}
,children:[!e.isSelf&&(0,j.jsxs)(h.TouchableOpacity,{
style:[t.topInfo,t.marginB8],onPress:e.gotoShop,activeOpacity:.3,children:[(0,j.jsx)(h.View,{
style:[t.imgBox,t.imageWrap],children:(0,j.jsx)(p.FastImageView,{
imgUri:null!=(s=o.shopPhoto.path)?s:'',imgStyle:t.imgStyle
}
)
}
),(0,j.jsxs)(h.View,{
style:t.infoWrap,children:[(0,j.jsx)(h.View,{
style:t.infoItem,children:(0,j.jsx)(h.Text,{
style:t.shopName,numberOfLines:1,children:o.shopName
}
)
}
),(0,j.jsx)(h.View,{
style:t.infoItem,children:(0,j.jsx)(h.Text,{
style:t.updateTime,numberOfLines:1,children:B(o.startTime)
}
)
}
)]
}
),(0,j.jsx)(h.View,{
style:t.infoArrow,children:(0,j.jsx)(p.SvgIcon,{
normalCol:c.DarkStore.darkBool?l.C25.color:l.C24.color,viewBox:'-300 0 1024 1024',opacity:c.DarkStore.darkBool?l.C25.color:l.C24.opacity,iconName:"ic24-more",width:12,height:24
}
)
}
)]
}
),102===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:(0,c.t)('coupons'),content:o.cardDtlData.mainTitle
}
),(0,j.jsx)(F,{
data:o,width:e.props.width,onSuccess:e.beforeGetCoupon,beforeGoToCoupon:e.beforeGoToCoupon
}
),(0,j.jsx)(W,{
text:(0,c.t)('coupon_available_products'),showMore:(null==(u=o.cardDtlData.couponPrdDtlVoList)?void 0:u.length)>=3,onPress:function(){
return e.gotoCoupon(a)
}

}
),(0,j.jsx)(N,{
goToPrd:e.goToPrd,items:o.cardDtlData.couponPrdDtlVoList,showPrice:!0,cardWidth:e.props.width
}
)]
}
),103===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:(0,c.t)('timelimit_seckill'),content:o.cardDtlData.mainTitle
}
),(0,j.jsx)(N,{
goToPrd:e.goToPrd,cardWidth:e.props.width,items:null==(x=o.cardDtlData)?void 0:x.photoVoList
}
),(0,j.jsx)(_,{
data:o,goToPrd:e.goToPrd
}
)]
}
),104===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:o.cardDtlData.promotionTag,content:o.cardDtlData.mainTitle
}
),(0,j.jsx)(N,{
cardWidth:e.props.width,goToPrd:e.goToPrd,items:null==(y=o.cardDtlData)?void 0:y.photoVoList
}
),(0,j.jsx)(_,{
data:o,goToPrd:e.goToPrd
}
)]
}
),105===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:(0,c.t)('giveaway_event'),content:(0,c.t)('limited_to_grab')
}
),(0,j.jsx)(M,{
goToPrd:e.goToPrd,data:o.cardDtlData
}
)]
}
),106===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:(0,c.t)('goods_crowdtesting'),content:o.cardDtlData.mainTitle
}
),(0,j.jsx)(N,{
goToPrd:e.goToPrd,items:null==(f=o.cardDtlData)?void 0:f.photoVoList,cardWidth:e.props.width
}
),(0,j.jsx)(_,{
data:o,goToPrd:e.goToPrd
}
)]
}
),107===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:o.cardDtlData.promotionTag,content:(0,c.t)('selected_items_discount')
}
),(0,j.jsx)(G,{
data:o,gotoOrder:e.gotoOrder
}
),(0,j.jsx)(N,{
goToPrd:e.goToPrd,items:o.cardDtlData.promotionPrdDtlVoList,showPrice:!0,cardWidth:e.props.width
}
)]
}
),301===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:2===o.cardDtlData.contentType?'\u89c6\u9891':0===o.cardDtlData.shopContentCategory?'\u79cd\u8349':'\u65b0\u54c1',content:o.cardDtlData.title
}
),(0,j.jsx)(U,Object.assign({
width:e.props.width,receiveRef:e.receiveRef,toggleLike:e.toggleLike,goToPrd:e.goToPrd,gotoArtical:e.gotoArtical,data:o.cardDtlData,likeMap:i,alreadyLiked:r,itemCountMap:n
}
,e.state))]
}
),e.isSelf&&201===o.cardType&&(0,j.jsxs)(j.Fragment,{
children:[(0,j.jsx)(O,{
tabName:(0,c.t)('hot_sell_recommend'),content:(0,c.t)('have_a_look')
}
),(0,j.jsx)(N,{
goToPrd:e.goToPrd,items:o.cardDtlData.hotRecommendSkuDtlVoList,showPrice:!0,showRank:!0,cardWidth:e.props.width
}
)]
}
)]
}
)]
}
):null
}

}
)
}

}
])
}
)(a.default.PureComponent);
_e.default=(0,c.Componentautoscaling)((0,c.Monitor)(x.default)((0,c.ItemExposeHoc)(A)))
}
),"c5092b28f167c78340787cd3e734225b28dfe28e80d4aa513a2aa891fec7e2a3",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","90ba1fa09cba78d002321aabb449b3df6e9ac24a9b8e7c049a8e1a607c6506d8","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","dbefd705b6ed89140fae64c773662545ae839aa7d600f5ff84ed3a14873eda98","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","77ca2b5a71baf97c7e63cc7c39636f9f66ca93b2ae44d607119e5bf255e14f29","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
flexDirectionRow:{
flexDirection:'row'
}
,flex1:{
flex:1
}
,marginL2:{
marginLeft:2
}
,marginL8:{
marginLeft:8
}
,marginR2:{
marginRight:2
}
,marginR4:{
marginRight:4
}
,marginR16:{
marginRight:16
}
,marginB0:{
marginBottom:0
}
,marginB8:{
marginBottom:8
}
,marginT4:{
marginTop:4
}
,marginT8:{
marginTop:8
}
,marginT12:{
marginTop:12
}
,fitMarginB8:{
marginBottom:-8
}
,imgBox:{
backgroundColor:n.C32.color,borderRadius:8,overflow:'hidden'
}
,imgStyle:{
flex:1,height:'100%'
}
,timeHeader:{
paddingLeft:12,paddingVertical:4
}
,timeHeaderText:Object.assign({

}
,n.T1,n.C15),container:{
backgroundColor:n.C33.color,borderRadius:16,padding:12
}
,topInfo:{
flexDirection:'row'
}
,imageWrap:{
width:48,height:48,marginRight:12
}
,infoWrap:{
flex:1
}
,infoItem:{
flex:1,justifyContent:'center'
}
,shopName:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C11,n.T8),updateTime:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C13,n.T3),infoArrow:{
justifyContent:'center'
}
,unexpanded:{
overflow:'hidden',maxHeight:2*n.T5.lineHeight
}
,tagWrap:{
height:9,justifyContent:'center'
}
,shopTag:{
height:13,borderRadius:4,marginRight:4,paddingHorizontal:2
}
,tagText:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.T0,n.C17,{
lineHeight:13
}
),describeText:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.T5,n.C12,{
wordBreak:'break-all'
}
),eclipsisExpand:{
flexDirection:'row',position:'absolute',right:0,bottom:0,backgroundColor:n.C33.color,paddingLeft:4,height:n.T5.lineHeight
}
,secKillCard:{
borderRadius:8,flexDirection:'row',height:56,overflow:'hidden'
}
,secKillCardLeft:{
flex:1,padding:10,alignItems:'flex-end',flexDirection:'row'
}
,flashSaleCardLeft:{
flex:1,paddingHorizontal:20,paddingVertical:8
}
,secKillImgBox:{
marginRight:8,width:36,height:36,borderRadius:8,backgroundColor:'#FF6067'
}
,secKillImg:{
width:36,height:36
}
,secKillText:Object.assign({
paddingHorizontal:4,height:16,borderRadius:4,backgroundColor:'#FF6067'
}
,n.C17,n.T1,{
lineHeight:16
}
),secKillPriceBox:{
flex:1,height:36,alignItems:'flex-end',flexDirection:'row'
}
,promotionPrice:{
alignItems:'flex-end',flexDirection:'row'
}
,originalPrice:{
flex:1,justifyContent:'flex-end',paddingBottom:1
}
,secKillPriceText:Object.assign({
height:26
}
,n.C17),secKillPriceTextOther:{
textAlignVertical:'bottom',position:'relative',bottom:-6
}
,flashSalePriceBox:{
height:26,alignItems:'flex-end',flexDirection:'row'
}
,secKillPrice:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C18,n.T12,{
position:'relative'
}
),secKillPriceIcon:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C18,n.T8,{
position:'relative',bottom:3,marginRight:2
}
),secKillOldPrice:Object.assign({

}
,n.C14,n.T3,{
textDecorationLine:'line-through',marginLeft:5,position:'relative',bottom:2
}
),secKillCountText:Object.assign({

}
,n.C35,n.T1),secKillCountLine:{
flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',marginRight:12
}
,secKillCountBox:Object.assign({
width:16,height:16,backgroundColor:n.C35.color
}
,n.C17,n.T1,{
textAlign:'center',lineHeight:16,borderRadius:2
}
),productCard:{
backgroundColor:n.C32.color,height:104,borderRadius:16,flexDirection:'row',padding:12
}
,productCardImgBox:{
width:80,height:80,marginRight:12
}
,productCardRight:{
flex:1,justifyContent:'space-between'
}
,productCardName:Object.assign({

}
,n.T6,n.C12),productName:Object.assign({

}
,n.T3,n.C11),productNewPrice:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.T4,n.C18),productOldPrice:Object.assign({

}
,n.T0,n.C15,{
textDecorationLine:'line-through',marginLeft:3,marginBottom:1
}
),productPriceIcon:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C35,n.T4,{
marginRight:2
}
),productCardNewPrice:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C35,n.T10,{
position:'relative',bottom:-1.5
}
),productCardOldPrice:Object.assign({
fontFamily:o.fontFamily.base
}
,n.C14,n.T1,{
textDecorationLine:'line-through',marginLeft:3
}
),productGiftCardRight:{
flex:1,justifyContent:'space-between'
}
,giftCardArrowBox:{
flex:1,flexDirection:'row',marginBottom:8
}
,withArrow:{
marginLeft:-8
}
,giftCardArrow:{
width:0,height:0,borderWidth:4,borderTopColor:'transparent',borderBottomColor:'transparent',borderLeftColor:'transparent',borderRightColor:n.C32.color,position:'absolute',top:10,left:-4
}
,giftCardBox:{
flex:1,backgroundColor:n.C32.color,borderRadius:8,padding:8,flexDirection:'row',overflow:'hidden'
}
,giftCardScroll:{
flex:1,borderRadius:8,flexDirection:'row'
}
,giftTab:{
position:'absolute',top:4,right:4,marginRight:0
}
,giftCardThreeImg:{
marginLeft:-2
}
,giftCardRight:{
flex:1,justifyContent:'space-between',marginLeft:8
}
,goToBuyBar:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,goToBuyText:Object.assign({

}
,n.C12,n.T4),goToBuyBtn:{
width:56,height:28,borderRadius:14,backgroundColor:n.C35.color,alignItems:'center',justifyContent:'center'
}
,goToBuyBtnBig:{
width:64
}
,goToBuyBtnText:Object.assign({

}
,n.C17,n.T3),giftCardName:Object.assign({

}
,n.C12,n.T1),moreBarBox:{
marginTop:18,flexDirection:'row',justifyContent:'space-between'
}
,moreBarText:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C11,n.T10),moreBarBtn:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,moreBarBtnText:Object.assign({

}
,n.C13,n.T7,{
marginRight:3
}
),couponBox:{
flexDirection:'row',alignItems:'center',overflow:'hidden',borderRadius:8,width:'100%',height:45
}
,couponBoxLeft:{
height:'100%',width:72,justifyContent:'center',alignItems:'center'
}
,couponBoxLeftBottomText:Object.assign({
color:'#E64566'+n.opacityMap[.9]
}
,n.T1),couponTopCircle:{
width:10,height:5,borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:5,borderBottomRightRadius:5,position:'absolute',top:0,right:-5,backgroundColor:n.C33.color
}
,couponBottomCircle:{
width:10,height:5,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomLeftRadius:0,borderBottomRightRadius:0,position:'absolute',bottom:0,right:-5,backgroundColor:n.C33.color
}
,dashline:{
width:1,height:56
}
,couponBoxRight:{
flexDirection:'row',alignItems:'center',height:'100%',flex:1,paddingLeft:8,paddingRight:10
}
,couponBoxRightTextWrap:{
justifyContent:'center',flex:1
}
,couponBoxRightTopText:Object.assign({
fontFamily:o.fontFamily.medium
}
,n.C12,n.T4),couponBoxRightBtn:{
width:56,height:28,alignItems:'center',justifyContent:'center',marginLeft:10,backgroundColor:n.C35.color,borderRadius:14
}
,couponBoxRightBtnText:Object.assign({

}
,n.C17,n.T3),oneRank:{
position:'absolute',top:0,left:16,zIndex:1,width:16,display:'flex',alignItems:'center',justifyContent:'center'
}
,thumbBar:{
flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginTop:-10,marginBottom:-12,height:48
}
,thumbBarText:Object.assign({

}
,n.C15,n.T1,{
fontFamily:o.fontFamily.base
}
),articalIcon:{
position:'absolute',top:8,right:8,paddingHorizontal:2,height:13,textAlignVertical:'center',backgroundColor:n.C51.color+n.opacityMap[.6],zIndex:1,borderRadius:4
}
,articalIconText:Object.assign({
fontFamily:o.fontFamily.base
}
,n.T0,n.C12),articalPrdBox:{
paddingHorizontal:8,paddingVertical:8,backgroundColor:n.C32.color,borderRadius:8,overflow:'hidden'
}
,articalIma:{
height:85,width:85,alignSelf:'center'
}
,supportLine:{
alignSelf:'center',marginRight:12
}
,supportText:Object.assign({

}
,n.T1,n.C14),supportPercent:{
flexDirection:'row',alignItems:'center'
}
,supportPercentText:Object.assign({

}
,n.T1,n.C18),supportPercentBarBox:{
width:70,backgroundColor:n.C39.color+n.opacityMap[.05],borderRadius:3.5,height:6,flexDirection:'row',overflow:'hidden',marginRight:8
}
,supportPercentBar:{
height:6,borderRadius:3.5
}

}
)
}

}
),"90ba1fa09cba78d002321aabb449b3df6e9ac24a9b8e7c049a8e1a607c6506d8",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","8d2945de6ddd674209efce87f68c108331e3f76c1c41e91dc580520077caf831"]);

__d((function(g,r,i,a,_m,e,_d){
// 变量
var t: any = r(_d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.createOrder=e.canQuitCustomerVpro=e.TAG_TYPE=e.EQUITY_LIST=void 0,e.dateToString=function(t){
// 变量
var o: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;
if(!t)return'';
t instanceof Date||(t='ios'===l.Platform.OS&&'string'==typeof t?new Date(t.replace(/-/g,'/')):new Date(t));
// 变量
var n: any = t.getFullYear(),u=t.getMonth()+1;
u<10&&(u='0'+u);
// 变量
var s: Function = t.getDate();
s<10&&(s='0'+s);
if(1===o)return n+"-"+u+"-"+s;
var p=t.getHours(),c=t.getMinutes(),m=t.getSeconds();
if(2===o)return n+"-"+u+"-"+s+" "+p+"-"+c+"-"+m;
if(3===o)return n+"."+u+"."+s
}
,e.envWidgets=void 0,e.eventReport=function(t){
// 变量
var u: any = t.actionCode,l=t.actionName,p=t.eventType,m=(0,n.default)(t,c);
if(u.indexOf('/')>0){
var d=u.split('/');
u=s.PlatformUtils.isApp()?d[0]:d[1]
}
var f={
actionName:l,actionCode:u,eventType:P[p],content:Object.assign((0,o.default)({

}
,p,'1'),m)
}
;
s.Report.eventTracingReport(f)
}
,e.getDataSource=e.getCustomerVproInfo=e.getCrateOrderParams=e.getCouponDataSource=e.getCoupon=e.getCheckUserAuth=e.fontFamily=void 0,e.getLogin=d,e.getRecommend=e.getProductParam=e.getNoThresholdCoupon=void 0,e.getWapPersonalUrl=function(){
return s.Cookies.get('rnpersonalurlwap')&&s.Cookies.get('rnpersonalurlwap').length?s.Cookies.get('rnpersonalurlwap'):s.Service.wapDomain+'personal'
}
,e.goToPay=function(t,o,n){
if(!t)return;
// 变量
var u: any = document.createElement('form');
document.body.appendChild(u),n&&Object.keys(n).forEach((function(t){
// 变量
var o: any = document.createElement('input');
u.appendChild(o),o.name=t,o.value=n[t]
}
));
u.action=t,u.method=o||'post',window.sessionStorage.setItem('vproPayProcessing','true'),u.submit()
}
,e.gotoScorePage=function(){
// 变量
var t: any = 'https://msale.vmall.com/points.html';
s.PlatformUtils.isApp()?(t='vmall://com.vmall.client/home/activity?isShowLayout=false&pn=pointmall',s.RouterUtils.gotoPage(t)):(t=s.Service.wapDomain+"portal/activity/index.html?isShowLayout=false&pn=pointmall",s.RouterUtils.gotoPage(t))
}
,e.sideMargine=e.request=e.quitCustomerVpro=e.queryVproRecord=e.queryVproPrice=e.queryVproInEffect=e.queryVproDiscountdetail=e.queryVproBbdConfig=e.queryVplusPointDetail=e.queryUserPointBalanceDetail=e.isSmall=e.isPad=void 0;
var o=t(r(_d[1])),n=t(r(_d[2])),u=t(r(_d[3])),l=r(_d[4]),s=r(_d[5]),p=r(_d[6]),c=["actionCode","actionName","eventType"],m=e.request=(function(){
var t=(0,u.default)((function*(t,o,n){
return yield s.Http[t](o,n).then((function(t){
return t
}
)).catch((function(t){
var o,n=t.data||(null==(o=t.response)?void 0:o.data),u=null==n?void 0:n.resultCode;
return 200===u?Promise.resolve(n):'200917'!==u?Promise.reject(t):void d()
}
))
}
));
return function(o,n,u){
return t.apply(this,arguments)
}

}
)();
// 函数
function d(): any {
// 变量
var t: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0],o='';
if('android'===l.Platform.OS||'ios'===l.Platform.OS)o='vmall://com.vmall.client/home/login',s.RouterUtils.gotoPage(o);
else if('web'===l.Platform.OS){
if(t)o='/account/login?url='+encodeURIComponent(window.location.href)+'&_t='+(new Date).getTime();
else{
// 变量
var n: any = window.location.href;
n.indexOf('?')>0?n+='&memberlogin=yes':n+='?memberlogin=yes',o=s.Service.wapDomain+'account/applogin?url='+encodeURIComponent((0,p.getPureUrl)(n))+'&_t='+(new Date).getTime()
}
s.RouterUtils.gotoPage(o)
}

}
e.getCrateOrderParams=function(t){
// 变量
var o: any = 1,n='',u='',p='',c='',m='';
return'android'===l.Platform.OS||'ios'===l.Platform.OS?(o=3,n='4',u='3',p='3.1',c=t['returnUrl.app'],m=t['errorReturnUrl.app']):'large'===(0,s.ScreenSize)(l.Dimensions.get('window').width)?(o=1,n='1',u='1',p='1.1',c=t['returnUrl.wap'],m=t['errorReturnUrl.wap']):(o=2,n='3',u='2',p='2.1',c=t['returnUrl.wap'],m=t['errorReturnUrl.wap']),{
orderItemReqArgs:[{
itemId:t.itemId,itemType:'S0',qty:1,gifts:[],subOrderItemReqArgs:[]
}
],carrierInvoiceVOs:{
invoiceType:'50',carrierCode:t.carrierCode,invoiceTitle:'\u4e2a\u4eba'
}
,orderType:'28N',lang:'zh-CN',country:'CN',returnUrl:c,errorReturnUrl:m,orderSouce:n,salePortal:u,orderSubPortal:p,portal:o
}

}
;
var f=function(t){
// 变量
var o: any = '1,',n=3;
return'android'===l.Platform.OS?o="1,1,41,410"+t:'ios'===l.Platform.OS?o="1,5,41,410"+t:(o="1,3,41,410"+t,n=2),{
sceneId:o,portal:n
}

}
;
e.getProductParam=(function(){
var t=(0,u.default)((function*(t,o,n,u){
var p,c=f(t),m=c.sceneId,d=c.portal,v='';
return'android'===l.Platform.OS||'ios'===l.Platform.OS?yield s.DeviceUtils.getDeviceInfo(s.APP_INFOS.DEVICE_INFO).then((function(t){
v=null==t?void 0:t.uid,p=null==t?void 0:t.tid
}
)).finally((function(){

}
)):'web'===l.Platform.OS&&(v=s.Cookies.get('uid')||'',p=s.BuildParams.getTid()),{
uid:v,country:s.MCP_COUNTRY.CN,isRecommended:!0,lang:s.MCP_LANG.CN,pageNum:o,pageSize:n||20,portal:d,recommendScope:'2',sceneId:m,sid:'',tagProcess:2,tid:p,cmsTags:u
}

}
));
return function(o,n,u,l){
return t.apply(this,arguments)
}

}
)(),e.createOrder=function(t){
// 变量
var o: any = s.Service.openApiDomain+"mcp/v2/createOrder";
return s.Http.post(o,t)
}
,e.queryVproInEffect=function(){
// 变量
var t: any = s.Service.openApiDomain+"uc/queryVproInEffectByUserId";
return m('post',t)
}
,e.queryVproPrice=function(){
// 变量
var t: any = '2';
'android'!==l.Platform.OS&&'ios'!==l.Platform.OS||(t='3');
// 变量
var o: any = s.Service.openApiDomain+"mcp/iVipPlus/queryVplusPriceByLoginUser";
return m('post',o,{
portal:t,version:1e3,lang:'zh-CN',country:'CN',beCode:'CN'
}
)
}
,e.queryVproRecord=function(){
// 变量
var t: any = s.Service.openApiDomain+"uc/queryVproRecordByUserId";
return m('post',t)
}
,e.quitCustomerVpro=function(t){
return m('post',s.Service.openApiDomain+"mcp/iVipPlus/applyForQuitCustomerVpro",t||{

}
)
}
,e.canQuitCustomerVpro=function(t){
return m('post',s.Service.openApiDomain+"mcp/iVipPlus/judgmentQuitCustomerVpro",t||{

}
)
}
,e.queryVproBbdConfig=function(){
return m('post',s.Service.openApiDomain+"uc/queryVproBbdConfig")
}
,e.getCustomerVproInfo=function(){
return m('post',s.Service.openApiDomain+"uc/getCustomerVproInfo",{
country:'CN'
}
)
}
,e.getRecommend=function(t){
return m('post',s.Service.openApiDomain+"mcp/recommend/getRecommend",Object.assign({

}
,t))
}
,e.getDataSource=function(t){
// 变量
var o: any = '2';
'android'!==l.Platform.OS&&'ios'!==l.Platform.OS||(o='2');
// 变量
var n: any = t.pageNum,u=t.pageSize,p=t.tags;
return m('get',s.Service.openApiDomain+"sg/content/realtime/getPageDataSource?dataSourceList="+p+"&portal="+o+"&lang=zh_CN&country=CN&version=1&pageSize="+u+"&pageIndex="+n)
}
,e.queryVproDiscountdetail=function(t){
return m('post',s.Service.openApiDomain+"uc/queryVproDiscountdetail",{
userId:t,areaCode:'CN'
}
)
}
,e.queryUserPointBalanceDetail=function(){
// 变量
var t: any = 1;
return t='android'===l.Platform.OS||'ios'===l.Platform.OS?3:'large'===(0,s.ScreenSize)(l.Dimensions.get('window').width)?1:2,m('post',s.Service.openApiDomain+"mcp/queryUserPointBalanceDetail",{
portal:t,lang:'zh_CN',country:'CN',version:1
}
)
}
,e.getCouponDataSource=function(t){
// 变量
var o: any = 1;
return o='android'===l.Platform.OS?3:'ios'===l.Platform.OS?10:'large'===(0,s.ScreenSize)(l.Dimensions.get('window').width)?1:2,m('get',s.Service.openApiDomain+"sg/content/realtime/getPageDataSource?isRecommended=false&dataSourceList="+t+"&filterType=2&portal="+o+"&lang=zh_CN&country=CN&version=1")
}
,e.getCoupon=function(t){
return m('post',s.Service.openApiDomain+"ams/coupon/receive",{
receiveChannel:4,batchCode:t.batchCode,activityCode:t.activityCode
}
)
}
,e.getNoThresholdCoupon=function(){
// 变量
var t: any = 1;
return t='android'===l.Platform.OS||'ios'===l.Platform.OS?3:'large'===(0,s.ScreenSize)(l.Dimensions.get('window').width)?1:2,m('get',s.Service.openApiDomain+"mcp/queryUserCouponList?portal="+t+"&lang=zh-CN&pageNo=1&pageSize=10&country=CN&type=1&version=1")
}
,e.getCheckUserAuth=function(){
// 变量
var t: any = Number((0,p.getPortalStr)());
return m('get',s.Service.openApiDomain+"mcp/user/checkUserAuth?portal="+t+"&lang=zh-CN&country=CN")
}
,e.queryVplusPointDetail=function(t){
// 变量
var o: any = t.pageNum,n=t.pageSize,u=Number((0,p.getPortalStr)());
return m('post',s.Service.openApiDomain+"uc/queryVplusPointDetail",{
pageSize:n,pageNum:o,portal:u,country:'CN',lang:'zh-CN'
}
)
}
;
var v=e.isSmall=function(){
// 变量
var t: any = l.Dimensions.get('window').width;
return'small'===(0,s.ScreenSize)(t)
}
,S=(e.sideMargine=v()?16:24,e.isPad=function(){
// 变量
var t: any = l.Dimensions.get('window').width;
return'medium'===(0,s.ScreenSize)(t)
}
,e.envWidgets={
isH5:(0,p.isH5)(),isApp:s.PlatformUtils.isApp(),isWap:s.PlatformUtils.isWap(l.Dimensions.get('window').width),isAndroid:'android'===l.Platform.OS,isIos:'ios'===l.Platform.OS
}
);
e.fontFamily={
base:S.isAndroid?'HarmonyHeiTi':null,medium:S.isAndroid?'HarmonyHeiTi-Medium':null
}
;
var P={
load:s.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,click:s.EVENT_TYPE.EVENT_TYPE_CLICK,exposure:s.EVENT_TYPE.EVENT_TYPE_EXPOSURE
}
;
e.EQUITY_LIST=[[{
name:'priorityQueuing',title:'vplus_benifit1',subtitle:'vplus_benefit_detail1',img:'priorityQueuing',index:0
}
,{
name:'priorityShip',title:'vplus_benifit2',subtitle:'vplus_benefit_detail2',img:'priorityShip',index:1
}
,{
name:'fastRefund',title:'vplus_benifit3',subtitle:'vplus_benefit_detail3',img:'fastRefund',index:2
}
],[{
name:'coupon',title:'vplus_benifit4',subtitle:'vplus_benefit_detail4',img:'memberCoupon',index:3
}
,{
name:'rebate',title:'vplus_benifit5',subtitle:'vplus_benefit_detail5',img:'tenTimesRebate',index:4
}
,{
name:'discount',title:'vplus_benifit6',subtitle:'vplus_benefit_detail6',img:'discountOnDiscount',index:5
}
],[{
name:'service',title:'vplus_benifit7',subtitle:'vplus_benefit_detail7',img:'hCustomerService',index:6
}
,{
name:'noWorries',title:'vplus_benifit8',subtitle:'vplus_benefit_detail8',img:'noWorries',index:7
}
,{
name:'returnFreight',title:'vplus_benifit9',subtitle:'vplus_benefit_detail9',img:'returnFreight',index:8
}
]],e.TAG_TYPE=['priority','offers','premium']
}
),"8d2945de6ddd674209efce87f68c108331e3f76c1c41e91dc580520077caf831",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","598dd5411f5356eab137e972eb6cee59f0eaeb909657cad20b7b3811ffae9612","9a46dd7eba1ef94d625ba748404e4e5a055539131c11189441e75277cd25a48a","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=r(d[0]),o={
102:'4',103:'2',104:'1',105:'3',106:'6',107:'5',201:'7'
}
,c={
1:'\u70b9\u51fb\u5e97\u94fa\u533a\u57df\uff0c\u8fdb\u5165\u5e97\u94fa\u9996\u9875',2:'\u70b9\u51fb\u201c\u5546\u54c1\u5361\u7247\u201d\u533a\u57df\u3001\u201c\u53bb\u8d2d\u4e70\u201d\u6309\u94ae\uff0c\u8df3\u8f6c\u8fdb\u5165\u5546\u8be6\u9875',3:'\u70b9\u51fb\u201c\u5546\u54c1\u5361\u7247\u201d\u533a\u57df\u3001\u201c\u53bb\u8d2d\u4e70\u201d\u6309\u94ae\uff0c\u8df3\u8f6c\u8fdb\u5165\u5546\u8be6\u9875',4:'\u70b9\u51fb\u201c\u66f4\u591a\u201d\u6309\u94ae\u3001\u201c\u53bb\u51d1\u5355\u201d\u3001\u201c\u53bb\u4f7f\u7528\u201d\u6309\u94ae\uff0c\u8df3\u8f6c\u5176\u4ed6\u914d\u7f6e\u9875\u9762',5:'\u70b9\u51fb\u201c\u66f4\u591a\u201d\u6309\u94ae\u3001\u201c\u53bb\u51d1\u5355\u201d\u3001\u201c\u53bb\u4f7f\u7528\u201d\u6309\u94ae\uff0c\u8df3\u8f6c\u5176\u4ed6\u914d\u7f6e\u9875\u9762',6:'\u70b9\u51fb\u201c\u9886\u53d6\u201d\u6309\u94ae\uff0c\u9886\u53d6\u4f18\u60e0\u5238',7:'\u70b9\u51fb\u201c\u652f\u6301\u9879\u76ee\u201d\u6309\u94ae',8:'\u70b9\u51fb\u201c\u66f4\u591a\u201d\u6309\u94ae\u3001\u201c\u53bb\u51d1\u5355\u201d\u3001\u201c\u53bb\u4f7f\u7528\u201d\u6309\u94ae\uff0c\u8df3\u8f6c\u5176\u4ed6\u914d\u7f6e\u9875\u9762'
}
;
e.default={
exposeItem:function(){
// 变量
var c: any = this.props,n=c.pageCatCode,C=void 0===n?'':n,p=c.pageCatName,s=void 0===p?'':p,E=c.resSiteCode,N=void 0===E?'':E,T=c.resSiteName,_=void 0===T?'':T,v=c.data,l=v.cardType,u=v.carrierCode,y=v.cardDtlData;
return{
data:{
actionCode:301===l?'910000089':'910000053',actionName:301===l?'\u5e97\u94fa\u52a8\u6001\u5185\u5bb9\u5361\u7247-\u66dd\u5149':'\u5e97\u94fa\u52a8\u6001\u5361\u7247-\u66dd\u5149',eventType:t.EVENT_TYPE.EVENT_TYPE_EXPOSURE,content:{
carrier_code:u,type:301===l?2===y.contentType?3:0===y.shopContentCategory?1:2:o[l],exposure:'1'
}
,pageCatCode:C,pageCatName:s,resSiteCode:N,resSiteName:_
}

}

}
,clickItem:function(n){
var C,p=this.props,s=p.pageCatCode,E=void 0===s?'':s,N=p.pageCatName,T=void 0===N?'':N,_=p.resSiteCode,v=void 0===_?'':_,l=p.resSiteName,u=void 0===l?'':l,y=p.data,S=y.cardType,P=y.carrierCode,f=y.cardDtlData,V=o[S],Y=n.button_name,k=c[Y];
if('1'===Y)C={
actionCode:t.PlatformUtils.isApp()?'100661003':'200581003',actionName:k,eventType:t.EVENT_TYPE.EVENT_TYPE_CLICK,content:{
carrier_code:P,click:'1',URL:n.URL
}
,pageCatCode:E,pageCatName:T,resSiteCode:v,resSiteName:u
}
;
else if('2,3,4,5,6,7'.includes(Y))C={
actionCode:'910000052',actionName:k,eventType:t.EVENT_TYPE.EVENT_TYPE_CLICK,content:Object.assign({
carrier_code:P,type:V,click:'1'
}
,n),pageCatCode:E,pageCatName:T,resSiteCode:v,resSiteName:u
}
;
else{
if(301!==S)return{

}
;
C={
actionCode:'910000088',actionName:n.sku_code?'\u70b9\u51fb\u5546\u54c1\u5361\u7247\u533a\u57df\uff0c\u6761\u8f6c\u5546\u8be6\u9875':'\u70b9\u51fb\u201c\u5c01\u9762\u56fe\u201d\u8df3\u8f6c\u5185\u5bb9\u8be6\u60c5\u9875',eventType:t.EVENT_TYPE.EVENT_TYPE_CLICK,content:Object.assign({
carrier_code:P,type:2===f.contentType?3:0===f.shopContentCategory?1:2,click_type:n.sku_code?2:1
}
,n),pageCatCode:E,pageCatName:T,resSiteCode:v,resSiteName:u
}

}
return{
data:C
}

}

}

}
),"dbefd705b6ed89140fae64c773662545ae839aa7d600f5ff84ed3a14873eda98",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
// 变量
var l: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];
return t.StyleSheet.create({
wrap:Object.assign({

}
,n.S32),productWrap:{
width:'100%'
}
,onLayout:{
position:'absolute',width:'100%',height:'100%',top:'-100%'
}
,titleBar:{
marginBottom:0,marginLeft:0,height:56,width:'100%',flexDirection:'row',alignItems:'center',backgroundColor:n.C32.color
}
,titleBarLeft:{
marginBottom:0,marginLeft:0,marginRight:18,flexDirection:'row',alignItems:'center'
}
,titleBarText:{
fontFamily:o.PublicFont.fontFamilyMedium,fontSize:n.T12.fontSize,color:n.C11.color,textAlign:'left',lineHeight:28
}
,posiFix:{
position:'web'===t.Platform.OS?'fixed':'absolute',width:'100%',backgroundColor:n.C32.color,zIndex:8
}
,prdAreaR:{
paddingLeft:16,paddingRight:16
}
,prdAreaPadR:{
paddingLeft:24,paddingRight:24
}
,emptyC:{
width:'100%',justifyContent:'center',alignItems:'center',marginTop:60,marginBottom:78
}
,emptyT:Object.assign({
textAlign:'center'
}
,n.C15,{
fontFamily:o.PublicFont.fontFamilyBase
}
),emptyImg:{
width:120,height:120
}
,category:{
width:'100%',height:78,marginTop:96,paddingLeft:16,marginBottom:8
}
,loadWrap:{
position:'web'===t.Platform.OS?'fixed':'relative',top:0,left:0,width:'100%',bottom:0,zIndex:1
}
,loadPage:{
position:c?'relative':'absolute',top:c?0:'android'===t.Platform.OS?(-t.StatusBar.currentHeight-144)/2:'ios'===t.Platform.OS?(-l-144)/2:0,zIndex:99,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:n.C32.color
}
,loadPageImg:{
width:72,height:72
}
,loadPageText:{
fontSize:14,color:n.C13.color+'99'
}
,productList:{
width:'100%'
}
,followProductList:{
width:'100%'
}
,lodingTitle:{
color:n.C13.color
}
,productItemWrap:{
width:'100%',height:'auto',marginBottom:12
}
,recommendationTitle:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.C11,n.T11,{
marginBottom:12
}
),recommendUpdateList:{
paddingBottom:0
}
,newBox:{
flexDirection:'row',alignItems:'center',backgroundColor:n.C33.color,borderRadius:16,padding:12,marginBottom:12
}
,newBoxText:Object.assign({
marginLeft:6
}
,n.C13,n.T5)
}
)
}

}
),"6b69f085c6f8c27709af96f3578d0d69a731d6d8a3d8fa150c47e409bf33a4c7",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.MapComponents=void 0;
var o=r(d[0]),n={
shopPicture:o.ShopPicture
}
,p=(0,o.getImageCard)(n);
e.MapComponents={
base:o.BaseComponent,blank:o.BlankComponent,groupComponent:o.groupComponent,ad:p,prod:o.Product,icon_grid:o.IconGrid,prodRankList:o.prodRankList
}

}
),"dc341e3a6e48889be1b4c3cd878559337c8c56fb10de43401816c02f315c28d7",["1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),n=e(r(d[2])),o=e(r(d[3])),l=e(r(d[4])),c=e(r(d[5])),s=e(r(d[6])),u=r(d[7]),f=e(r(d[8])),p=r(d[9]),h=r(d[10]),v=r(d[11]);
// 函数
function y(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(y=function(){
return!!e
}
)()
}
var b=(function(e){
// 函数
function s(e: any): any {
var n,c,f,b,T,w;
return(0,t.default)(this,s),b=this,T=s,w=[e],T=(0,l.default)(T),(f=(0,o.default)(b,y()?Reflect.construct(T,w||[],(0,l.default)(b).constructor):T.apply(b,w))).originWidth=p.CommonUtils.getWindowSize(f.props.pageType).screenWidth,f.refreshCartNum=function(){
f.setState({
cartNum:p.AppStore.cartNum
}
)
}
,f.tabList=function(e,t){
var n,o=f.props.tabInfos,l=f.originWidth,c=(0,p.ScreenSize)(l);
return n='small'===c?l/o.length:(l-48)/o.length,o.map((function(o,l){
var s,p,y=o.configInfo&&JSON.parse(o.configInfo);
switch(o.tabType){
case'homepage':default:s='home',p='home_actived';
break;
case'category':s='category',p='category_actived';
break;
case'discovery':s='discovery',p='discovery_actived';
break;
case'cart':s='cart',p='cart_actived';
break;
case'personal_center':s='personalCenter',p='personalCenter_actived'
}
var b=f.props.currentTab===o.cardTitle,T=function(e,o){
var l,c,f;
return'small'===o?(l=c=24,f='contain'):'medium'===o?(l=n,c=48,f='contain'):(l=n,c=60,f='contain'),e?(0,v.jsx)(u.Image,{
source:{
uri:e
}
,style:{
width:l,height:c
}
,resizeMode:f
}
):(0,v.jsx)(u.View,{
style:{
width:l,height:c
}
,children:(0,v.jsx)(h.SvgIcon,{
iconName:b?p:s,width:l,height:c,isActive:b,normalCol:t.C15.color,activeCol:t.C18.color
}
)
}
)
}
,w=(0,v.jsxs)(u.View,{
style:[{
flexDirection:'small'===c?'column':'row',justifyContent:'small'===c?'flex-start':'center',paddingLeft:'small'===c?4:8,paddingRight:'small'===c?4:8,paddingTop:'small'===c?8:0
}
,e.tabViewSmall],children:[T(b?y.selectedIcon:null==y?void 0:y.defaultIcon,'small'),(0,v.jsx)(u.Text,{
numberOfLines:2,style:[{
marginTop:'small'===c?2:0,marginBottom:'small'===c?4:0,marginLeft:'small'===c?0:8,textAlign:'small'===c?'center':'left'
}
,e.tabText,b?e.tabTextActive:null],children:o.cardName
}
),'cart'===o.tabType&&f.state.cartNum?(0,v.jsx)(u.Text,{
style:[e.cartNumItem,'small'===c?e.smallCart:{
top:6,right:66
}
,f.state.cartNum<10?e.lowerNum:e.higherNum,{
lineHeight:16
}
],children:f.state.cartNum>99?'99+':f.state.cartNum
}
):(0,v.jsx)(v.Fragment,{

}
)]
}
);
return(0,v.jsx)(u.TouchableOpacity,{
activeOpacity:1,style:[{
width:n
}
,e.tabView],onPress:function(){
o.cardTitle!==f.props.currentTab&&f.navigateByTab(o.cardTitle)
}
,children:w
}
,l)
}
))
}
,f.state={
index:(null==(n=f.props)||null==(c=n.tabInfos)?void 0:c.findIndex((function(e){
return e.tabType===f.props.pageType
}
)))||0,default:{

}
,cartNum:p.AppStore.cartNum
}
,f
}
return(0,c.default)(s,e),(0,n.default)(s,[{
key:"componentDidMount",value:function(){
this.refreshCartNumListener=u.DeviceEventEmitter.addListener('refreshCartNum',this.refreshCartNum)
}

}
,{
key:"componentWillUnmount",value:function(){
this.refreshCartNumListener&&this.refreshCartNumListener.remove(),this.listener1&&this.listener1.remove()
}

}
,{
key:"navigateByTab",value:function(e){
this.props.switchTab(e)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
return(0,v.jsx)(p.WithTheme,{
themeStyles:f.default,children:function(t,n,o){
e.originWidth=o;
// 变量
var l: any = (0,p.ScreenSize)(o);
return(0,v.jsx)(u.View,{
style:[e.state.default,'web'===u.Platform.OS||p.PlatformUtils.isMp()?{
position:'fixed'
}
:{
position:'absolute'
}
,{
paddingLeft:'small'===l?0:24,paddingRight:'small'===l?0:24
}
,t.container],onLayout:function(e){
p.FooterNavigationStore.setBarHeight(e.nativeEvent.layout.height)
}
,children:e.tabList(t,n)
}
)
}

}
)
}

}
])
}
)(s.default.PureComponent);
b.defaultProps={
templateType:'3',tabInfos:[{
relatedPage:'6547',relatedPageType:'1',tabId:10399,tabName:(0,p.t)('home'),tabType:'homepage',templateId:2075,nameShow:!0,iconDefaultOverflow:!1,iconSelectedOverflow:!1
}
,{
relatedPage:'6547',relatedPageType:'1',tabId:10399,tabName:(0,p.t)('category'),tabType:'category',templateId:2075,nameShow:!0,iconDefaultOverflow:!0,iconSelectedOverflow:!0
}
,{
relatedPage:'6547',relatedPageType:'1',tabId:10399,tabName:(0,p.t)('discover'),tabType:'discovery',templateId:2075,nameShow:!1,iconDefaultOverflow:!1,iconSelectedOverflow:!1
}
,{
relatedPage:'6547',relatedPageType:'1',tabId:10399,tabName:(0,p.t)('shortcut_cart'),tabType:'cart',templateId:2075,nameShow:!1,iconDefaultOverflow:!1,iconSelectedOverflow:!1
}
,{
relatedPage:'6547',relatedPageType:'1',tabId:10399,tabName:(0,p.t)('service'),tabType:'personal_center',templateId:2075,nameShow:!0,iconDefaultOverflow:!1,iconSelectedOverflow:!1
}
]
}
;
_e.default=(0,p.Componentautoscaling)(b)
}
),"4e925b157583d4f3c0cab446237eb31b674166f0df74bf8fd577bdde148366fa",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","e489fb05d5a93b11a244aca7fa84eb7ad53d6ae083ebf499871b8343f6b9a0f5","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
container:{
width:'100%',minHeight:56,backgroundColor:o.C32.color,flexDirection:'row',justifyContent:'space-between',overflow:'hidden',bottom:0,marginBottom:0,zIndex:9990,borderTopWidth:.5,borderTopColor:o.C39.color+o.opacityMap[o.C39.opacity]
}
,tabView:{
backgroundColor:o.C32.color,overflow:'visible'
}
,tabViewSmall:{
height:'100%',alignItems:'center'
}
,tabViewMedium:{
flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:4,paddingBottom:4
}
,tabViewLarge:{
flexDirection:'column',justifyContent:'center',alignItems:'center',height:60
}
,tabText:Object.assign({

}
,o.T1,o.C15),tabTextActive:Object.assign({

}
,o.T2,o.C18),cartNumItem:Object.assign({
height:16,lineHeight:16,borderRadius:8,position:'absolute'
}
,o.T1,o.C17,{
backgroundColor:o.C35.color
}
),lowerNum:{
width:16,textAlign:'center'
}
,higherNum:{
paddingLeft:6,paddingRight:6
}
,smallCart:{
top:0,right:7
}
,mediumCart:{
top:0,right:0
}

}
)
}

}
),"e489fb05d5a93b11a244aca7fa84eb7ad53d6ae083ebf499871b8343f6b9a0f5",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),n=e(r(d[2])),s=e(r(d[3])),l=e(r(d[4])),c=e(r(d[5])),u=r(d[6]),h=r(d[7]),p=e(r(d[8])),y=r(d[9]),f=e(r(d[10])),v=r(d[11]),S=e(r(d[12])),x=e(r(d[13])),w=r(d[14]),T=e(r(d[15])),C=r(d[16]),B=r(d[17]),W=e(r(d[18])),k=e(r(d[19])),j=r(d[20]);
// 函数
function I(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(I=function(){
return!!e
}
)()
}
var P=(0,y.observer)(t=(function(e){
// 函数
function t(e: any): any {
var n,c,y,f,w,B,W,k;
(0,o.default)(this,t),B=this,W=t,k=[e],W=(0,l.default)(W),(w=(0,s.default)(B,I()?Reflect.construct(W,k||[],(0,l.default)(B).constructor):W.apply(B,k))).isMp=u.PlatformUtils.isMp(),w._getShopHotWords=function(){
(0,C.getShopHotSearchWord)({
carrierCode:w.props.carrierCode||u.UrlUtils.getQueryStr('carrierCode')
}
).then((function(e){
var t,o=null!=(t=null==e?void 0:e.data)?t:{

}
,n=o.defaultKeyWord,s=void 0===n?(0,u.t)('enter_a_keyword'):n,l=o.hotSearchWord,c=void 0===l?[]:l;
w.setState({
default:s,hotSearchWord:c
}
)
}
)).catch((function(){

}
))
}
,w.listenToClose=function(){
w.state.isShowListBar&&w.closeModal()
}
,w.handleMpGoPage=function(){
if(w.props.pageAlias)wx.setStorageSync('keyWord',encodeURIComponent(w.state.routeKeyWord)),wx.navigateBack();
else{
var e={
carrierCode:encodeURIComponent(w.props.carrierCode),default:encodeURIComponent(w.state.default),keyWord:encodeURIComponent(w.props.keyWord),hotSearchWord:encodeURIComponent(w.state.hotSearchWord),shopInfo:w.props.shopInfo
}
;
u.RouterUtils.gotoPage("/packageRnShopSearch/index?carrierCode="+e.carrierCode+"&default="+e.default+"&hotSearchWord="+e.hotSearchWord+"&keyWord="+e.keyWord+"&shopInfo="+w.props.shopInfo)
}

}
,w.goSearchPage=function(){
w.isMp?w.handleMpGoPage():(0,w.props.navigation.navigate)('SearchPage',{
shopInfo:w.props.shopInfo,carrierCode:w.props.carrierCode,default:w.state.default,hotSearchWord:w.state.hotSearchWord,keyWord:w.state.routeKeyWord
}
)
}
,w._onLayout=function(e){
w.setState({
stickyLayoutY:e.nativeEvent.layout.y
}
)
}
,w.onClick=function(){
u.RouterUtils.gotoPage('/',!0)
}
,w.onHoverChange=function(e){
w.setState({
hoverStatus:e
}
)
}
,w.renderBarMore=function(e){
return(0,j.jsx)(j.Fragment,{
children:w.isMp?(0,j.jsx)(v.Image,{
source:{
uri:x.default.shopMore
}
,style:{
width:24,height:24
}

}
):(0,j.jsx)(h.SvgIcon,{
iconName:'more',width:"24",height:"24",normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)
}
,w.renderSearchIcon=function(e){
return(0,j.jsx)(j.Fragment,{
children:w.isMp?(0,j.jsx)(v.Image,{
source:{
uri:x.default.search
}
,style:{
width:16,height:16
}

}
):(0,j.jsx)(h.SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)
}
,w.renderLayoutIcon=function(e){
return(0,j.jsx)(j.Fragment,{
children:w.isMp?(0,j.jsx)(v.Image,{
source:{
uri:0===T.default.layoutType?x.default.listLayout:x.default.gridLayout
}
,style:{
width:24,height:24
}

}
):(0,j.jsx)(h.SvgIcon,{
iconName:0===T.default.layoutType?'layOut-OneByeTwo':'category',width:"24",height:"24",normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)
}
,w.renderPcSearch=function(e,t){
var o=w.state,n=o.hoverStatus,s=o.routeKeyWord,l=o.hotSearchWord,c={
imgUri:x.default.logoPc,imgProportion:1.3918918918918919,actionUrl:'',actionUrlWeb:u.Service.webDomain,actionUrlWap:u.Service.wapDomain
}
,p=w.props,y=p.navigation,f=p.route,T=p.configInfo;
return(0,j.jsx)(v.Animated.View,{
onLayout:w._onLayout,nativeID:'navShopSearchBar',style:[e.searchWeb,w.state.navTop&&{
position:'fixed',top:0,width:'100%',margin:'auto'
}
],children:(0,j.jsx)(v.View,{
style:[w.state.navTop?e.layoutBottom:e.layout,e.layoutSearch],children:(0,j.jsx)(u.Layout,{
type:'autoPadding',style:e.layoutPadding,children:(0,j.jsxs)(v.View,{
style:[e.pcContainer,{
paddingLeft:(t-1200)/2
}
],children:[(0,j.jsx)(v.View,{
style:e.imgBox,children:(0,j.jsx)(h.Image,Object.assign({

}
,c,{
isRadius:!1
}
))
}
),(0,j.jsx)(v.TouchableOpacity,{
activeOpacity:1,onPress:w.onClick,style:e.vmallHome,children:(0,j.jsx)(u.Hoverable,{
onHoverIn:function(){
return w.onHoverChange(!0)
}
,onHoverOut:function(){
return w.onHoverChange(!1)
}
,children:(0,j.jsx)(v.View,{
style:e.menuSubContainer,children:(0,j.jsx)(v.Text,{
style:[e.menuTitle,n&&e.menuTitleChoose],children:(0,u.t)('mall_home_page')
}
)
}
)
}
)
}
),(0,j.jsx)(S.default,{
hotSearchWord:l,navigation:y,keyWord:s,configInfo:T,default:w.state.default,route:f
}
)]
}
)
}
)
}
)
}
)
}
;
var P=!1;
if('web'===v.Platform.OS){
var M=u.BROWSER_CONF.UA_LIST.some((function(e){
var t,o,n;
return-1!==(null==(t=navigator)||null==(o=t.userAgent)||null==(n=o.toLowerCase())?void 0:n.indexOf(e))
}
)),L=u.BROWSER_CONF.CID_LIST.includes(u.Cookies.get('cps_id'));
P=M||L
}
return w.state={
width:u.CommonUtils.getWindowSize('shop').screenWidth,sreachValue:'',iosFlag:'ios'!==v.Platform.OS||null!=(n=null==(c=w.props)||null==(y=c.route)||null==(f=y.params)?void 0:f.iosFlag)&&n,placeholder:(0,u.t)('enter_a_keyword'),default:(0,u.t)('enter_a_keyword'),routeKeyWord:p.default.get(w.props.route,'params.keyWord')||w.props.keyWord,layoutType:T.default.layoutType,isShowListBar:!1,hotSearchWord:[],isH5:P,hoverStatus:!1,stickyLayoutY:0,navTop:!1,addBarZindex:!1
}
,w.listenToClose=w.listenToClose.bind(w),w
}
return(0,c.default)(t,e),(0,n.default)(t,[{
key:"goBack",value:function(){
var e,t=this.props.navigation,o=t.canGoBack,n=t.goBack;
this.props.isSearch?v.DeviceEventEmitter.emit('shopInfoBack','shop'):v.DeviceEventEmitter.emit('shopBack','shop'),'ShopDefault'===(null==(e=this.props.route)?void 0:e.name)?(v.DeviceEventEmitter.emit('shopGoBack','shop'),'web'===v.Platform.OS?(T.default.removeData(w.SHOP_TAB_KEY),(0,B.returnWebLastPage)(!1)):u.DeviceUtils.goBack()):o&&o()&&n()
}

}
,{
key:"popMenu",value:function(){
// 变量
var e: any = this.state,t=e.isShowListBar,o=e.addBarZindex,n=!0,s=!0;
this.isMp&&(this.mpTimer=(new Date).getTime(),n=!t,s=!o),this.setState({
isShowListBar:n,addBarZindex:s
}
)
}

}
,{
key:"switchOrderType",value:function(){
// 变量
var e: any = 0===T.default.layoutType?1:0;
v.DeviceEventEmitter.emit('switchOrderType_shop',e),T.default.switchLayoutType(e),e===T.default.layoutType&&this.setState({
layoutType:e
}
)
}

}
,{
key:"closeModal",value:function(){
// 变量
var e: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime();
this.isMp?(t-this.mpTimer>=1e3||e)&&this.setState({
isShowListBar:!1,addBarZindex:!1
}
):this.setState({
isShowListBar:!1,addBarZindex:!1
}
)
}

}
,{
key:"componentDidMount",value:function(){
this._getShopHotWords(),u.PlatformUtils.isPc(this.state.width)&&window.addEventListener('scroll',this.handleScroll.bind(this)),this.isMp&&(this.listener1=v.DeviceEventEmitter.addListener('clickOtherArea',this.listenToClose))
}

}
,{
key:"componentWillUnmount",value:function(){
var e;
(u.PlatformUtils.isPc(this.state.width)&&window.removeEventListener('scroll',this.handleScroll.bind(this)),this.isMp)&&(null==(e=this.listener1)||null==e.remove||e.remove());
this.listerNavigation&&this.listerNavigation.remove()
}

}
,{
key:"handleScroll",value:function(){
(document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop)>110?(u.NavigationStore.setNavTop(!0),this.setState({
navTop:!0
}
)):(u.NavigationStore.setNavTop(!1),this.setState({
navTop:!1
}
))
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=u.DarkStore.darkBool;
return(0,j.jsx)(u.WithTheme,{
themeStyles:k.default,children:function(o,n,s){
if(u.PlatformUtils.isPc(s))return e.renderPcSearch(o,s);
// 变量
var l: any = 'small'===(0,u.ScreenSize)(s),c=l?16:24,p=l?11:8;
return(0,j.jsxs)(v.View,{
style:[o.titleBar,e.state.isH5&&o.h5TitleBar,e.isMp&&e.state.addBarZindex&&o.titelBarMp,e.props.isFixed&&o.mpFixedTitleBar],children:[e.state.isH5||e.isMp?null:(0,j.jsx)(v.TouchableOpacity,{
onPress:function(){
e.goBack()
}
,children:(0,j.jsx)(h.SvgIcon,{
iconName:"ic24-back",normalCol:n.C31.color,opacity:t?n.C12.opacity:n.C11.opacity,width:24,height:24
}
)
}
),e.props.isSearch?(0,j.jsx)(v.View,{
style:o.title,children:(0,j.jsx)(v.Text,{
style:o.titleTetx,children:e.props.title
}
)
}
):(0,j.jsx)(v.TouchableOpacity,{
style:[o.searchBox,e.isMp&&o.mpSearchBox],onPress:e.goSearchPage,children:(0,j.jsxs)(v.View,{
style:o.searchImgBox,children:[e.renderSearchIcon(n),(0,j.jsx)(v.Text,{
numberOfLines:1,ellipsizeMode:'clip',style:[o.searchText,e.state.routeKeyWord?Object.assign({

}
,n.T9,n.C11):null,{
width:s-2*c-16-p-48-24-16
}
],children:e.state.routeKeyWord||e.state.default
}
)]
}
)
}
),e.props.isPrdList?(0,j.jsx)(v.TouchableOpacity,{
onPress:function(){
return e.switchOrderType()
}
,children:e.renderLayoutIcon(n)
}
):(0,j.jsx)(v.TouchableOpacity,{
onPress:function(){
return e.popMenu()
}
,children:e.renderBarMore(n)
}
),e.state.isShowListBar?(0,j.jsx)(W.default,{
changeShowStatus:e.closeModal.bind(e),isModalShow:!0,width:s,pageId:e.props.pageId,pageTypeNum:e.props.pageTypeNum
}
):(0,j.jsx)(j.Fragment,{

}
)]
}
)
}

}
)
}

}
])
}
)(f.default.Component))||t;
_e.default=(0,u.Componentautoscaling)(P)
}
),"371d57e6f348eb4ebd44712381e1bada997ab824c27209f5ad724cc70810c8f9",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","aa74360f4e5e78905730b09db6a07fa5f31f55c8d5d8bea4ec6da01eba506000","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","b34d4437b8f0f5ae6bcf1a2b7dcb1f77b5c277dfd27b703730f70e73be352a75","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","ac2f10e8f1316aba3c1dd8c3704ef314653e238c83fee7596efa04a93d376f22","401a21a76a56b4799a7539f16f7b239524419aa4df15d5ed18d4046449532ae6","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),n=e(r(d[2])),o=e(r(d[3])),l=e(r(d[4])),s=e(r(d[5])),u=r(d[6]),c=e(r(d[7])),h=r(d[8]),f=r(d[9]),y=e(r(d[10])),v=r(d[11]),p=r(d[12]);
// 函数
function w(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(w=function(){
return!!e
}
)()
}
(0,u.EnvService)(u.env);
var x=(function(e){
// 函数
function c(e: any): any {
var n,s,f,v,x,S;
return(0,t.default)(this,c),v=this,x=c,S=[e],x=(0,l.default)(x),(f=(0,o.default)(v,w()?Reflect.construct(x,S||[],(0,l.default)(v).constructor):x.apply(v,S))).hotWords=[],f.arrLabels=[],f.showBox=function(){
if(f.isLogin(),setTimeout((function(){
f.setState({
visible:!0
}
)
}
),500),f.setScrollStyle(),'web'===h.Platform.OS){
// 变量
var e: any = document.querySelector('#searchMask'),t=f.state.banScroll,n=f.convertUndefined(t);
n+='overflow-y:hidden;
',null==e||e.setAttribute('style',""+n)
}

}
,f.hideBox=function(){
if(f.setState({
visible:!1,showSearch:!0,value:''
}
),f.setScrollStyle('show'),'web'===h.Platform.OS){
// 变量
var e: any = document.querySelector('#searchMask'),t=f.state.initialStyle;
null==e||e.setAttribute('style',""+f.convertUndefined(t))
}

}
,f._onLayout=function(e,t){
// 变量
var n: any = 0,o=e.nativeEvent.layout.width;
void 0===f.arrLabels[t]&&(f.arrLabels[t]=[]),f.arrLabels[t].push(o),f.arrLabels.map((function(e){
n+=e.length
}
)),f.count===n&&f.setState({
labelsShow:!1
}
)
}
,f._labelsListShow=function(e,t,n,o){
var l=null==t?void 0:t.map((function(t){
return(0,p.jsx)(h.TouchableOpacity,{
style:[e.labelView],onLayout:function(e){
f._onLayout(e,o)
}
,children:(0,p.jsx)(h.Text,{
style:[e.labelText],children:t
}
)
}
)
}
));
return l
}
,f._labelsListShowOther=function(e,t,n,o){
return null==t?void 0:t.map((function(l,s){
return o<f.arrLabels.length&&f.arrLabels[o]&&f.arrLabels[o][0]<=296?(0,p.jsx)(u.Hoverable,{
children:function(o){
return(0,p.jsx)(h.TouchableOpacity,{
style:[e.labelView],onPress:f.turnToPage.bind(f,n+t[s]),children:(0,p.jsx)(h.Text,{
style:[e.labelText,o?y.default.relationHover:{

}
],children:l
}
)
}
)
}

}
):null
}
))
}
,f.itemlist=[],f.receiveRef=function(e){
e&&f.itemlist.push(e)
}
,f.state={
openApiDomain:'',searchConDomain:'',showSearch:!1,showBor:!1,value:null!=(n=e.keyWord)?n:'',visible:!1,isPostList:!1,keyword:'',searchHistory:[],hotTagsArr:null!=(s=e.hotSearchWord)?s:[],relationArr:[],searchIconList:{

}
,initialStyle:'',banScroll:'',slide:0,count:0,plAnim:new h.Animated.Value(200),spinValue:new h.Animated.Value(0),freshValue:new h.Animated.Value(1),labelsShow:!0,default:e.default||(0,u.t)('in_store_search')+"..."
}
,f
}
return(0,s.default)(c,e),(0,n.default)(c,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
if(this.setState({
openApiDomain:u.Service.openApiDomain,searchConDomain:u.Service.searchConDomain
}
,(function(){
e.isLogin(),e.fadeIn(),e.hideOutline()
}
)),'web'===h.Platform.OS){
var t,n,o=document.querySelector('#searchMask'),l=document.createElement('div');
l.style.cssText='width: 99px;
 height: 99px;
 overflow: scroll;
 position: absolute;
 top: -9999px;
',document.body.appendChild(l);
// 变量
var s: Function = l.offsetWidth-l.clientWidth;
this.setState({
initialStyle:null==o||null==(t=o.getAttribute('style'))?void 0:t.valueOf(),banScroll:null==o||null==(n=o.getAttributeNode('style'))?void 0:n.value,slide:s
}
)
}

}

}
,{
key:"UNSAFE_componentWillReceiveProps",value:function(e){
this.props.default!==e.default&&e.default&&this.setState({
default:e.default
}
),this.props.hotSearchWord.length!==e.hotSearchWord.length&&e.hotSearchWord.length&&this.setState({
hotTagsArr:e.hotSearchWord
}
)
}

}
,{
key:"fadeIn",value:function(){
h.Animated.timing(this.state.plAnim,{
toValue:0,duration:500,useNativeDriver:!0
}
).start()
}

}
,{
key:"hideOutline",value:function(){
if('web'===h.Platform.OS){
// 变量
var e: any = document.getElementsByTagName('input')||[];
e&&Array.from(e).map((function(e){
e.style.outline='none'
}
))
}

}

}
,{
key:"componentWillUnmount",value:function(){
this.setScrollStyle('show')
}

}
,{
key:"isLogin",value:function(){
null===u.AppStore.isLogin&&u.AppStore.getIsLogin()
}

}
,{
key:"convertUndefined",value:function(e){
return''==e||null==e||'undefined'==e?'':e
}

}
,{
key:"setScrollStyle",value:function(e){
if('web'===h.Platform.OS){
// 变量
var t: any = '100%',n='hidden',o='scroll';
if('show'===e&&(t='auto',n='auto',o=''),'web'===h.Platform.OS&&document.body){
// 变量
var l: any = document.body;
if(l.style.height=t,l.style.overflowY=n,l.style.overflowX=n,l.parentNode){
// 变量
var s: Function = l.parentNode;
s.style&&(s.style.height=t,s.style.overflowY=o)
}

}

}

}

}
,{
key:"onChangeTextKeyword",value:function(){
// 变量
var e: any = this.state.value.trim();
this.turnToPage(e)
}

}
,{
key:"spin",value:function(){
// 变量
var e: any = this;
h.Animated.timing(this.state.spinValue,{
toValue:this.state.count,duration:1e3,easing:h.Easing.linear,useNativeDriver:!0
}
).start(),Promise.all([this.inAndOut(),this._getHotWords()]).then((function(){
e.inAndOut(!1)
}
))
}

}
,{
key:"inAndOut",value:function(){
// 变量
var e: any = this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?0:1;
return new Promise((function(n){
h.Animated.timing(e.state.freshValue,{
toValue:t,duration:750,easing:h.Easing.linear,useNativeDriver:!0
}
).start((function(){
n(0)
}
))
}
))
}

}
,{
key:"_rotateHistory",value:function(){
// 变量
var e: any = this;
this.setState({
count:this.state.count+1
}
,(function(){
e.spin()
}
))
}

}
,{
key:"_getHotWords",value:function(){
// 变量
var e: any = this;
(0,v.getShopHotSearchWord)({
carrierCode:this.props.carrierCode||u.UrlUtils.getQueryStr('carrierCode')
}
).then((function(t){
var n,o=null!=(n=null==t?void 0:t.data)?n:{

}
,l=o.defaultKeyWord,s=void 0===l?(0,u.t)('in_store_search'):l,c=o.hotSearchWord,h=void 0===c?[]:c;
e.setState({
default:s,hotTagsArr:h
}
)
}
)).catch((function(){
e.setState({
hotTagsArr:[]
}
)
}
))
}

}
,{
key:"turnToPage",value:function(e){
// 变量
var t: any = this.props,n=t.navigation,o=t.route,l='';
l=''===this.state.value?this.state.defaultKeyWord:this.state.value,e&&(l=e),this.hideBox();
var s={
keyWord:l,pageAlias:'shopSearchPage'
}
;
'shopResultPage'===o.name?n.replace('shopResultPage',s):n.navigate('shopResultPage',s)
}

}
,{
key:"searchValue",value:function(e){
this.setState({
value:e,labelsShow:!0
}
),this.arrLabels=[],e?this.getAssociationWordList(e):this.setState({
isPostList:!1,relationArr:[]
}
)
}

}
,{
key:"getAssociationWordList",value:function(e){
// 变量
var t: any = this,n=this.state.openApiDomain+"mcp/v1/queryAssociationWordInfo";
u.Http.post(n,{
brandType:0,keyword:e,country:'CN',lang:u.MCP_LANG.CN,portal:'1'
}
).then((function(n){
n.wordList.length>0?(t.setState({
isPostList:!0,relationArr:n.wordList||[],keyword:e,labelsShow:!0
}
),t.count=0,n.wordList.map((function(e){
var n;
t.count+=null==e||null==(n=e.labels)?void 0:n.length
}
)),t.arrLabels=[]):t.setState({
isPostList:!1,keyword:'',relationArr:[]
}
)
}
))
}

}
,{
key:"queryPosListData",value:function(){
var e=this,t=this.state.relationArr,n=(t.length,t.map((function(t,n){
// 变量
var o: any = t.keyword.indexOf(e.state.keyword);
return(0,p.jsxs)(h.View,{
children:[(0,p.jsx)(u.Hoverable,{
children:function(n){
return(0,p.jsxs)(h.TouchableOpacity,{
style:[y.default.wordItem],onPress:e.turnToPage.bind(e,t.keyword),activeOpacity:1,children:[(0,p.jsx)(h.View,{
style:[y.default.word],children:o>=0?(0,p.jsxs)(h.Text,{
style:[y.default.relationItem,n?y.default.relationHover:{

}
],numberOfLines:1,ellipsizeMode:'clip',children:[t.keyword.substr(0,o),(0,p.jsx)(h.Text,{
style:n?y.default.relationHover:y.default.keywords,children:e.state.keyword
}
),t.keyword.substr(o+e.state.keyword.length)]
}
):(0,p.jsx)(h.Text,{
style:[y.default.relationItem,n?y.default.relationHover:{

}
],numberOfLines:1,ellipsizeMode:'clip',children:t.keyword
}
)
}
,t.keyword),(0,p.jsx)(h.View,{
style:[y.default.wordLabels]
}
)]
}
)
}

}
),(0,p.jsx)(h.View,{
style:[y.default.wordLabelsPosition],children:e.state.labelsShow?e._labelsListShow(y.default,t.labels,t.keyword,n):e._labelsListShowOther(y.default,t.labels,t.keyword,n)
}
)]
}
)
}
)));
return(0,p.jsx)(h.View,{
style:[y.default.box,{
paddingBottom:16
}
],children:(0,p.jsx)(h.View,{
style:y.default.relationList,children:n
}
)
}
)
}

}
,{
key:"showBarStyle",value:function(){
this.showBox(),this.setState({
showBor:!0
}
)
}

}
,{
key:"hideBarStyle",value:function(){
this.setState({
showBor:!1
}
)
}

}
,{
key:"render",value:function(){
var e=this,t=this.state,n=t.spinValue,o=t.freshValue,l=n.interpolate({
inputRange:[0,1],outputRange:['0deg','360deg']
}
),s=u.UrlUtils.getQueryStr('searchHistoryShow');
return s||(s=this.props.configInfo&&this.props.configInfo.searchHistoryShow?this.props.configInfo.searchHistoryShow:'true'),(0,p.jsx)(h.View,{
style:y.default.searchItem,children:(0,p.jsxs)(h.Animated.View,{
style:{
zIndex:11
}
,nativeID:"searchMask",children:[(0,p.jsx)(h.View,{
style:y.default.center,children:(0,p.jsxs)(h.View,{
children:[(0,p.jsx)(h.View,{
style:y.default.bar,children:(0,p.jsxs)(h.Animated.View,{
style:[y.default.inputBox,this.state.showBor&&y.default.inputBor],children:[(0,p.jsx)(u.Hoverable,{
children:function(t){
return(0,p.jsx)(h.View,{
style:[y.default.inputIconLeft,y.default.inputIcon],children:(0,p.jsx)(h.View,{
style:t?y.default.inputImageChoose:y.default.inputImage,children:(0,p.jsx)(h.TouchableOpacity,{
activeOpacity:.3,onPress:e.turnToPage.bind(e,e.state.value),children:(0,p.jsx)(f.SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:'#000'
}
)
}
)
}
)
}
)
}

}
),(0,p.jsx)(h.View,{
nativeID:"textInput",style:{
flex:1,marginLeft:-11
}
,ref:this.receiveRef,children:(0,p.jsx)(h.TextInput,{
style:y.default.inputText,autoCapitalize:"none",value:this.state.value,onChangeText:this.searchValue.bind(this),onSubmitEditing:this.onChangeTextKeyword.bind(this),returnKeyType:"done",placeholder:this.state.default,placeholderTextColor:'rgba(25,25,25,0.38)',underlineColorAndroid:"transparent",clearButtonMode:"never",onFocus:function(){
return e.showBarStyle()
}
,onBlur:function(){
return e.hideBarStyle()
}
,keyboardType:"default",autoFocus:!1
}
)
}
),this.state.visible&&(0,p.jsx)(u.Hoverable,{
children:function(t){
var n,o,l;
return(0,p.jsx)(h.View,{
style:[y.default.inputIconRight,y.default.inputIcon],children:(0,p.jsx)(h.View,{
style:t?y.default.inputImageChoose:y.default.inputImage,children:(0,p.jsx)(h.TouchableOpacity,{
activeOpacity:.3,onPress:function(){
'web'!==h.Platform.OS&&e.hideBox()
}
,onFocus:function(){
'web'===h.Platform.OS&&e.hideBox()
}
,children:(0,p.jsx)(f.SvgIcon,{
iconName:"cancel1",width:"16",height:"16",normalCol:null!=(n=e.props)&&null!=(o=n.color)&&null!=(l=o.textStyle)&&l.color?e.props.color.textStyle.color:'#000'
}
)
}
)
}
)
}
)
}

}
)]
}
)
}
),this.state.visible?this.state.isPostList&&this.queryPosListData()||(0,p.jsx)(h.Animated.View,{
style:[y.default.box,{
paddingLeft:this.state.plAnim
}
],children:(0,p.jsx)(h.ScrollView,{
children:(0,p.jsxs)(p.Fragment,{
children:[(0,p.jsxs)(h.View,{
style:y.default.headFind,children:[(0,p.jsx)(h.Text,{
style:[y.default.nearText],children:(0,u.t)('search_discovery')
}
),(0,p.jsx)(u.Hoverable,{
children:function(t){
var n,o,s;
return(0,p.jsx)(h.TouchableOpacity,{
activeOpacity:.3,onPress:function(){
e._rotateHistory()
}
,children:(0,p.jsx)(h.Animated.View,{
style:[t?y.default.inputImageChoose:y.default.inputImage,{
transform:[{
rotate:l
}
]
}
],testID:"refreshImage",children:(0,p.jsx)(f.SvgIcon,{
iconName:"rotate",width:"16",height:"16",normalCol:null!=(n=e.props)&&null!=(o=n.color)&&null!=(s=o.textStyle)&&s.color?e.props.color.textStyle.color:'#000'
}
)
}
)
}
)
}

}
)]
}
),this.state.hotTagsArr.length>0?(0,p.jsx)(h.Animated.View,{
style:[y.default.queryList],children:this.state.hotTagsArr.map((function(t){
return(0,p.jsx)(u.Hoverable,{
children:function(n){
return(0,p.jsx)(h.Animated.View,{
nativeID:"searchFindArr",style:{
opacity:o
}
,children:(0,p.jsx)(h.TouchableOpacity,{
onPress:e.turnToPage.bind(e,t),activeOpacity:.3,children:(0,p.jsx)(h.Text,{
numberOfLines:1,style:[y.default.queryItem,n&&y.default.hoverItem],children:t
}
)
}
)
}
,t.id)
}

}
)
}
))
}
):(0,p.jsx)(h.View,{
style:{
paddingBottom:32
}

}
)]
}
)
}
)
}
):null]
}
)
}
),this.state.visible?(0,p.jsx)(h.TouchableHighlight,{
activeOpacity:.3,onPress:function(){
'web'!==h.Platform.OS&&e.hideBox()
}
,onFocus:function(){
'web'===h.Platform.OS&&e.hideBox()
}
,children:(0,p.jsx)(h.View,{
style:[y.default.fullScreen,{
width:window.innerWidth<1200?window.screen.width:window.innerWidth
}
],nativeID:"fullScreen"
}
)
}
):null]
}
)
}
)
}

}
])
}
)(c.default.Component);
_e.default=(0,u.Componentautoscaling)(x)
}
),"aa74360f4e5e78905730b09db6a07fa5f31f55c8d5d8bea4ec6da01eba506000",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","48b2c34ca63a25bfe29449a126971acc08c8402d8fee9b82bbc6fa31b397b96f","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=t.StyleSheet.create({
searchItem:{
position:'absolute',left:0,right:0,bottom:0,top:0,zIndex:11
}
,fullScreen:{
opacity:.3,height:'100vh',position:'relative',top:0,left:0,zIndex:9999,backgroundColor:'#000'
}
,center:{
position:'relative',justifyContent:'center',alignItems:'center',zIndex:1e4,backgroundColor:'transparent'
}
,bar:{
paddingLeft:24,paddingRight:24,marginTop:19,marginBottom:19
}
,box:{
paddingBottom:24,paddingTop:4,width:640,backgroundColor:'#ffffff',borderBottomEndRadius:16,borderBottomStartRadius:16,position:'absolute',top:70
}
,inputBox:Object.assign({
height:36,width:592,display:'flex',flexDirection:'row'
}
,o.SuitStyle.S13,{
borderRadius:18
}
),inputBor:{
borderWidth:1,borderColor:'rgba(0,0,0,0.05)',backgroundColor:'rgba(241,243,245,0.40)'
}
,inputIcon:{
display:'flex',justifyContent:'center',alignItems:'center'
}
,inputIconLeft:{
paddingLeft:2,paddingRight:10
}
,inputIconRight:{
paddingRight:5
}
,inputImage:Object.assign({

}
,o.SuitStyle.C23,{
width:36,height:36,alignItems:'center',justifyContent:'center'
}
),inputImageChoose:Object.assign({

}
,o.SuitStyle.C71,{
width:36,height:36,alignItems:'center',justifyContent:'center'
}
),inputText:Object.assign({
flex:1
}
,o.SuitStyle.T5,{
fontFamily:'Microsoft YaHeiUI',color:'#191919',textAlignVertical:'center',borderWidth:0,borderColor:'transparent'
}
),placeholderTextColor:{
opacity:.38,fontFamily:'Microsoft YaHeiUI',color:'#191919'
}
,headNear:{
marginTop:13,marginBottom:4,paddingHorizontal:24,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:24,lineHeight:24
}
,headFind:{
marginTop:12,marginBottom:4,paddingHorizontal:24,flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:24,lineHeight:24
}
,nearText:Object.assign({
height:24,fontSize:o.SuitStyle.T10.fontSize,lineHeight:24,fontWeight:o.SuitStyle.T10.fontWeight,fontFamily:'HYQiHei-FES'
}
,o.SuitStyle.C11),queryList:{
marginTop:12,marginHorizontal:24,flexDirection:'row',flexWrap:'wrap',overflow:'hidden',maxHeight:108,alignItems:'center',backgroundColor:'#fff'
}
,recentSearch:{
marginBottom:11
}
,queryItem:Object.assign({
flex:1,fontFamily:'HYQiHei-EES'
}
,o.SuitStyle.S13,{
minHeight:28,lineHeight:28,fontSize:o.SuitStyle.T3.fontSize
}
,o.SuitStyle.C12,{
paddingHorizontal:8,borderRadius:14,marginRight:8,marginBottom:12,minWidth:44,maxWidth:592,textAlign:'center'
}
),hoverItem:Object.assign({

}
,o.SuitStyle.C18),listView:{
flex:1,flexDirection:'row',justifyContent:'center',marginLeft:0,marginRight:0,marginTop:10
}
,relationList:{
marginLeft:24,marginRight:24
}
,relationItem:Object.assign({

}
,o.SuitStyle.T7,{
color:o.SuitStyle.C11.color+o.SuitStyle.opacityMap[o.SuitStyle.C11.opacity]
}
),relationOrder:{
borderBottomColor:'rgba(0,0,0,0.05)',borderBottomWidth:1
}
,relationHover:Object.assign({

}
,o.SuitStyle.C18),keywords:Object.assign({

}
,o.SuitStyle.C14),wordItem:{
height:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomColor:o.SuitStyle.C39.color+o.SuitStyle.opacityMap[o.SuitStyle.C39.opacity],borderStyle:'solid',borderBottomWidth:1,overflow:'hidden'
}
,word:{
flexDirection:'row',justifyContent:'flex-start',flex:1,maxHeight:19,overflow:'hidden'
}
,wordLabels:{
flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flexWrap:'wrap',height:28,overflow:'hidden',marginRight:-8,marginLeft:8
}
,wordLabelsPosition:{
position:'absolute',maxWidth:320,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flexWrap:'wrap',height:28,overflow:'hidden',marginRight:-8,marginLeft:8,right:0,top:10
}
,labelView:{
borderRadius:20,backgroundColor:o.SuitStyle.C39.color+o.SuitStyle.opacityMap[o.SuitStyle.C39.opacity],paddingHorizontal:8,paddingVertical:6,height:28,marginRight:8
}
,labelText:Object.assign({

}
,o.SuitStyle.T3,{
color:o.SuitStyle.C21.color+o.SuitStyle.opacityMap[o.SuitStyle.C21.opacity]
}
)
}
)
}
),"48b2c34ca63a25bfe29449a126971acc08c8402d8fee9b82bbc6fa31b397b96f",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),i=e(_r(d[4])),o=e(_r(d[5])),a=_r(d[6]),l=_r(d[7]),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = f(t);
if(n&&n.has(e))return n.get(e);
var r={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var a: any = i?Object.getOwnPropertyDescriptor(e,o):null;
a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[8])),c=_r(d[9]),h=e(_r(d[10])),u=e(_r(d[11])),p=_r(d[12]);
// 函数
function f(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(f=function(e){
return e?n:t
}
)(e)
}
// 函数
function y(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(y=function(){
return!!e
}
)()
}
// 变量
var v: any = [24,25,31],w=0;
a.DeviceUtils.getStatusBarHeight().then((function(e){
w=e
}
));
var x=(function(e){
// 函数
function s(e: any): any {
var n,o,h,f;
return(0,t.default)(this,s),o=this,h=s,f=[e],h=(0,i.default)(h),(n=(0,r.default)(o,y()?Reflect.construct(h,f||[],(0,i.default)(o).constructor):h.apply(o,f))).shareInfo=null,n.isMp=a.PlatformUtils.isMp(),n.getShareInfo=function(){
var e;
a.HttpService.getShareLinkInfo(null==(e=n.props)?void 0:e.pageId,'').then((function(e){
var t,r=(null==e||null==(t=e.shareIcons)?void 0:t.length)&&(null==e?void 0:e.shareIcons[0]);
n.shareInfo=r,r&&'{

}
'!==JSON.stringify(r)&&n.setState({
showShareIcon:!0
}
)
}
))
}
,n.goShare=function(){
var e=n.shareInfo,t=e.weixinShareIcon,r=e.shareTitle,i=e.sharePoster,o=e.shareEarnTitle,l=e.shareContent,s=e.shareWapLink,c={
shareType:'1',sharePosition:'shopHome',shareTips:o,linkShareTo:'101,102,103,104,105,106,108',posterShareTo:'201,202,204,206,207',otherShareTo:'',shortTitle:r,shortContent:l,longContent:l,picUrl:""+a.Service.cmsCdnPath+t,wechatMpPicUrl:'',wechatMpPicData:{

}
,shareWapUrl:s,shareMpUrl:'',clientPosterMethodType:'',clientPosterParam:{

}

}
;
i&&(c.clientPosterMethodType='1',c.clientPosterParam={
activityPicUrl:""+a.Service.cmsCdnPath+i,scanCodeType:'1',wapUrl:s
}
),a.CommonUtils.pullShareDialog(JSON.stringify(c))
}
,n.handleClose=function(){
n.props.changeShowStatus(!0)
}
,n.renderAppMpIcons=function(e,t,r){
return(0,p.jsx)(p.Fragment,{
children:n.isMp?(0,p.jsx)(c.Image,{
source:{
uri:t.mpImgUri
}
,style:{
width:24,height:24
}

}
):(0,p.jsx)(l.SvgIcon,{
normalCol:e,iconName:t.iconUrl,width:24,height:24,opacity:r.C13.opacity
}
)
}
)
}
,n.isShowAppMpIcon=function(e){
if(n.isMp)return'homePageShow'===e.iconUrl;
// 变量
var t: any = n.state.showShareIcon;
return'share'!==e.iconUrl||'share'===e.iconUrl&&t
}
,n.state={
showShareIcon:!1,iconList:[{
actionUrl:{
wapUrl:'https://www.vmall.com/index.html',appUrl:'vmall://com.vmall.client/home/main?tabIndex=0',mpUrl:'/pages/index/index'
}
,iconText:(0,a.t)('home'),iconUrl:'homePageShow',mpImgUri:u.default.home
}
,{
actionUrl:'',iconText:(0,a.t)('share'),iconUrl:'share'
}
,{
actionUrl:{
wapUrl:'https://m.vmall.com/sc/message/index.html',appUrl:'vmall://com.vmall.client/shop/message'
}
,iconText:(0,a.t)('message'),iconUrl:'messageShow'
}
]
}
,n
}
return(0,o.default)(s,e),(0,n.default)(s,[{
key:"iconGoPage",value:function(e){
// 变量
var t: any = this;
if('share'===e.iconUrl)return this.goShare();
// 变量
var n: any = e.actionUrl,r='web'===c.Platform.OS?n.wapUrl:t.isMp?n.mpUrl:n.appUrl;
r&&(c.DeviceEventEmitter.emit('shopBack','shop'),'web'===c.Platform.OS?a.RouterUtils.gotoPage(r):(this.handleClose(),setTimeout((function(){
t.isMp&&'homePageShow'===e.iconUrl?wx.switchTab({
url:r
}
):a.RouterUtils.gotoPage(r)
}
),a.PlatformUtils.isIOS()?800:300)))
}

}
,{
key:"componentDidMount",value:function(){
// 变量
var e: any = this.props,t=e.pageTypeNum,n=e.pageId;
'web'===c.Platform.OS||this.isMp||!n||!v.includes(t)&&32!==t||this.getShareInfo()
}

}
,{
key:"renderList",value:function(e,t){
// 变量
var n: any = this;
return(0,p.jsx)(a.WithTheme,{
themeStyles:h.default,children:function(t,r){
var i,o=n.props.mergeStyle,a=null!=o&&null!=(i=o.textStyle)&&i.color?'#fff':r.C13.color;
if('web'===c.Platform.OS)return(0,p.jsxs)(c.View,{
style:[t.view,{
width:e
}
],children:[(0,p.jsx)(c.TouchableOpacity,{
style:[t.bgAll,'web'===c.Platform.OS?{
position:'fixed'
}
:{
position:'absolute'
}
],onPress:function(){
n.handleClose()
}

}
),(0,p.jsx)(c.ImageBackground,{
source:{
uri:null==o?void 0:o.bgImg
}
,style:t.bgImage||{

}
,children:n.state.iconList.map((function(e,i){
return(0,p.jsx)(p.Fragment,{
children:'share'!==e.iconUrl?(0,p.jsx)(c.View,{
style:{
height:48
}
,children:(0,p.jsx)(c.View,{
style:{
flex:1
}
,children:(0,p.jsxs)(c.TouchableOpacity,{
activeOpacity:1,onPress:function(){
n.iconGoPage(e)
}
,style:[t.item],children:[(0,p.jsx)(c.View,{
style:[t.icon],children:(0,p.jsx)(l.SvgIcon,{
normalCol:a,iconName:e.iconUrl,opacity:r.C13.opacity,width:24,height:24
}
)
}
),(0,p.jsx)(c.Text,{
numberOfLines:1,style:[t.text,i===n.state.iconList.length-1?t.borderNone:t.border,{
paddingTop:2
}
],children:e.iconText
}
)]
}
)
}
)
}
,i):null
}
)
}
))
}
)]
}
);
// 变量
var s: Function = n.isMp?c.View:c.Modal;
return(0,p.jsx)(s,{
animationType:"fade",transparent:!0,visible:n.props.isModalShow,statusBarTranslucent:!0,children:(0,p.jsx)(c.TouchableOpacity,{
activeOpacity:0,style:[t.clickWrap,{
top:w
}
,n.isMp&&t.clickWrapMp],onPress:function(){
n.handleClose()
}
,children:(0,p.jsx)(c.View,{
style:[t.clickItem],children:(0,p.jsx)(c.View,{
style:[t.view,{
width:e
}
],children:(0,p.jsx)(c.ImageBackground,{
source:{
uri:null==o?void 0:o.bgImg
}
,style:t.bgImage||{

}
,children:n.state.iconList.map((function(e,i){
return(0,p.jsx)(p.Fragment,{
children:n.isShowAppMpIcon(e)?(0,p.jsx)(c.TouchableOpacity,{
onPress:function(){
n.iconGoPage(e)
}
,children:(0,p.jsx)(c.View,{
style:{
flex:1
}
,children:(0,p.jsxs)(c.View,{
style:[t.item],children:[(0,p.jsx)(c.View,{
style:[t.icon],children:n.renderAppMpIcons(a,e,r)
}
),(0,p.jsx)(c.Text,{
numberOfLines:1,style:[t.text,i===n.state.iconList.length-1||n.isMp&&'homePageShow'===e.iconUrl?t.borderNone:t.border],children:e.iconText
}
)]
}
)
}
)
}
,i):null
}
)
}
))
}
)
}
)
}
)
}
)
}
)
}

}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this.props.width,t='medium'===(0,a.screenSize)(e)?366:156;
return(0,p.jsx)(p.Fragment,{
children:this.renderList(t,e)
}
)
}

}
])
}
)(s.Component);
_e.default=(0,a.Componentautoscaling)(x)
}
),"ac2f10e8f1316aba3c1dd8c3704ef314653e238c83fee7596efa04a93d376f22",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","a247d6c148c47633d01c9e4af8db57c92e0bf7e5bc1fa31a5c89cbddef669230","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var o,t=r(d[0]),n=r(d[1]),l=(o=t.Dimensions.get('window').width,'small'===(0,n.ScreenSize)(o)?16:24);
e.default=function(o){
return t.StyleSheet.create({
view:{
position:'absolute',backgroundColor:o.C33.color,borderRadius:16,right:l,top:56,elevation:10,zIndex:9999,shadowColor:o.C31.color,shadowOffset:{
width:0,height:0
}
,shadowOpacity:.2,shadowRadius:60,overflow:'hidden'
}
,item:{
height:48,flex:1,flexDirection:'row',alignItems:'center',overflow:'hidden'
}
,border:{
borderBottomColor:o.C31.color+'0D',borderStyle:'solid',borderBottomWidth:1
}
,borderNone:{
borderBottomWidth:0
}
,icon:{
width:24,height:24,marginRight:6,position:'relative'
}
,text:{
fontSize:16,color:o.C11.color,fontFamily:n.PublicFont.fontFamilyBase,flex:1,height:48,lineHeight:48
}
,topIcon:{
width:16,height:16,color:'white',position:'absolute',top:-4,right:-4,backgroundColor:o.C35.color,borderRadius:8
}
,topText:{
fontSize:10,fontWeight:'400',lineHeight:16,color:o.C17.color,textAlign:'center'
}
,topIconMore:{
width:24
}
,hidden:{
display:'none',position:'relative'
}
,clickWrap:{
position:'absolute',top:24,right:0,width:'100%',height:'100%',zIndex:9998,elevation:9998
}
,clickWrapMp:{
right:-16,top:-28
}
,clickItem:{
width:'100%',height:'100%',alignItems:'flex-end'
}
,bgImage:{
paddingTop:4,paddingBottom:4,paddingLeft:16,paddingRight:16
}
,bgAll:{
backgroundColor:'transparent',width:'100%',height:'100%',left:0,top:0
}

}
)
}

}
),"a247d6c148c47633d01c9e4af8db57c92e0bf7e5bc1fa31a5c89cbddef669230",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=r(d[0]),n=r(d[1]),o=function(){
// 变量
var o: any = t.Dimensions.get('window').width;
return'small'===(0,n.ScreenSize)(o)
}
,l=o()?16:24,c=o()?11:8;
e.default=function(o){
return t.StyleSheet.create({
titleBar:{
marginBottom:0,paddingLeft:l,paddingRight:l,height:56,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:o.C32.color,position:'absolute',top:0,left:0,zIndex:9999
}
,titelBarMp:{
zIndex:1e4
}
,mpFixedTitleBar:{
position:'fixed'
}
,h5TitleBar:{
paddingLeft:0,paddingRight:0
}
,searchBox:Object.assign({
height:40,marginLeft:16,marginRight:c,flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,o.S31,{
borderRadius:20,marginVertical:8,flex:1
}
),mpSearchBox:{
marginLeft:0
}
,searchImgBox:{
height:40,flexDirection:'row',alignItems:'center',paddingLeft:12,paddingRight:8
}
,inputBox:{
height:40,flex:1
}
,inputText:Object.assign({
height:40
}
,o.T9,o.C11,{
paddingVertical:9
}
),otherText:Object.assign({

}
,o.T9,o.C15),crossImgBox:{
height:40,flexDirection:'row',alignItems:'center',paddingRight:16
}
,searchText:Object.assign({

}
,o.T9,o.C15,{
paddingLeft:8
}
),title:{
marginLeft:16,marginRight:11,flex:1
}
,titleTetx:Object.assign({

}
,o.T12,o.C31),layoutBottom:{
zIndex:200,backgroundColor:o.S31.backgroundColor,borderColor:'rgba(0, 0, 0, 0.05)'
}
,layout:{
zIndex:200,backgroundColor:o.S31.backgroundColor
}
,layoutSearch:{
margin:'unset',width:'unset',fontWeight:o.T11.fontWeight
}
,imgBox:{
width:103,height:74
}
,menuSubContainer:{
flexDirection:'row',alignItems:'center'
}
,menuTitle:{
display:'flex',position:'relative',alignItems:'center',flexDirection:'column',fontSize:o.T9.fontSize,lineHeight:16,marginLeft:56,color:o.C12.color,fontFamily:n.PublicFont.fontFamilyBase
}
,pcContainer:{
display:'flex',position:'relative',height:o.navigationHeight,alignItems:'center',flexDirection:'row'
}
,layoutPadding:{
paddingHorizontal:0
}
,menuTitleChoose:{
color:o.C18.color,fontSize:o.T10.fontSize
}
,vmallHome:{
zIndex:9999
}
,searchWeb:{
zIndex:11
}

}
)
}

}
),"401a21a76a56b4799a7539f16f7b239524419aa4df15d5ed18d4046449532ae6",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]),t=r(d[1]);
e.default=function(n){
return o.StyleSheet.create({
viewStyle:{
backgroundColor:n.C32.color
}
,breadcrumb:{
alignItems:'center',display:'flex',flexDirection:'row',height:16,maxWidth:1200,marginLeft:'auto',marginRight:'auto',marginTop:24,width:'100%'
}
,home:Object.assign({
fontSize:n.T4.fontSize,lineHeight:15,fontWeight:'300',fontFamily:'HYQiHei-EES'
}
,n.C11),wordHover:{
color:'#CF0A2C'
}
,keyword:Object.assign({
fontSize:n.T4.fontSize,lineHeight:15,fontWeight:'500',fontFamily:'HYQiHei-FES'
}
,n.C11,{
maxWidth:1162
}
),lodingTitle:{
fontSize:n.T7.fontSize,color:n.C13.color,opacity:n.C13.opacity
}
,commonStyle:{
backgroundColor:n.S32.backgroundColor
}
,titleWrapper:{
width:1200,paddingVertical:24,flexDirection:'row',margin:'auto'
}
,dayu:Object.assign({

}
,n.T3,n.C12,{
marginHorizontal:2
}
),myshop:Object.assign({
fontFamily:t.PublicFont.fontFamilyMedium
}
,n.T4,n.C11,{
fontWeight:'500'
}
),largerCategory:{
maxWidth:1200,width:1200,margin:'auto'
}
,toolbar:{
zIndex:12
}
,category:{
marginTop:12
}

}
)
}

}
),"031057ac28f7248a9a521c780132cbc79d781f0700f0636cee5ab1c44e53780c",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.FollowShopPageTest=void 0;
var t,o=e(r(d[1])),n=e(r(d[2])),s=e(r(d[3])),l=e(r(d[4])),c=e(r(d[5])),p=e(r(d[6])),u=e(r(d[7])),h=r(d[8]),f=r(d[9]),v=r(d[10]),E=r(d[11]),S=r(d[12]),P=e(r(d[13])),T=e(r(d[14])),w=e(r(d[15])),y=r(d[16]),C=e(r(d[17])),_=r(d[18]),L=r(d[19]);
// 函数
function A(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(A=function(){
return!!e
}
)()
}
// 变量
var b: string = (0,E.SubTabWrapper)(null,E.handleStyleChange,E.JsonConvert,S.MapComponents),I=0;
'ios'===v.Platform.OS&&h.DeviceUtils.getStatusBarHeight().then((function(e){
I=e
}
));
var W=(0,f.observer)(t=(function(e){
// 函数
function t(e: any): any {
var s,p,u,f;
return(0,n.default)(this,t),p=this,u=t,f=[e],u=(0,c.default)(u),(s=(0,l.default)(p,A()?Reflect.construct(u,f||[],(0,c.default)(p).constructor):u.apply(p,f))).wapTimerWidth=null,s.headStyle={

}
,s.titleStyle={

}
,s.strategyIdList='',s.bgColor='',s.pageType=1,s.convertResult={

}
,s.currentTime=(new Date).getTime(),s.pageNum=1,s.pageSize=18,s.loadMore=!0,s.curWinTop=0,s._onScrollWeb=function(){
// 变量
var e: any = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t=56;
s.curWinTop<e?(t=0,document.getElementById('titleSearch').style.position=e>=56?'fixed':'absolute'):s.curWinTop>e&&(t=0,e<=56&&(t=0)),document.getElementById('titleSearch').style.top=t+'px',s.curWinTop=e
}
,s.handlePrivacy=(0,o.default)((function*(){
if(yield h.AppStore.getIsLogin(),h.AppStore.isLogin){
// 变量
var e: any = (0,_._queryUserInfo)();
s.setState({
userInfo:e
}
)
}

}
)),s.handleAppPageChange=function(e){
'page'===(null==e?void 0:e.service)&&'pageLeave'===(null==e?void 0:e.action)&&''!==String(e.param.isLeave)&&(e.param.isLeave?h.CommonUtils.storeE2eId(h.PAGE_TYPE_E2EID.shopFollow,!1,{
e2eId:s.e2eId
}
):h.CommonUtils.storeE2eId(h.PAGE_TYPE_E2EID.shopFollow,!1))
}
,s.eventTracingReportByLoading=function(){
h.Report.eventTracingReport({
actionCode:h.PlatformUtils.isApp()?'100661001':'200581001',actionName:'\u52a0\u8f7d\u5173\u6ce8\u5e97\u94fa\u9875\u9762',eventType:h.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,content:{
load:'1'
}
,pageCatCode:y.pageCategory.followShop.pageCatCode,pageCatName:(0,h.t)(y.pageCategory.followShop.pageCatName)
}
),h.Report.execReportData('',!0)
}
,s.eventTracingReportByLeave=function(){
h.Report.eventTracingReport({
actionCode:h.PlatformUtils.isApp()?'100661002':'200581002',actionName:'\u79bb\u5f00\u5173\u6ce8\u5e97\u94fa\u9875\u9762\u4e0a\u62a5',eventType:h.EVENT_TYPE.EVENT_TYPE_LEAVE,content:{
load:'1'
}
,pageCatCode:y.pageCategory.followShop.pageCatCode,pageCatName:(0,h.t)(y.pageCategory.followShop.pageCatName)
}
),h.Report.execReportData('',!0)
}
,s._scrollEnable=function(e){
s.setState({
scrollLocked:e
}
)
}
,s.handleAddListeners=function(){
window.addEventListener('scroll',s._onMomentumScrollEnd),window.addEventListener('unload',s.eventTracingReportByLeave)
}
,s.onBackTop=function(){
s.appScrollView&&s.appScrollView.scrollTo({
y:0,animated:!0
}
)
}
,s._onMomentumScrollEnd=function(e){
v.DeviceEventEmitter.emit('onScrollEvent',e,h.PAGE_TYPE.shop)
}
,s.onPressBack=C.default.debounce((function(){
return'web'===v.Platform.OS?(0,_.returnWebLastPage)(!0):v.NativeModules.VmallNative.invokeNative({
service:'page',action:'finished'
}
),s.eventTracingReportByLeave(),!0
}
)),s.isPad=function(){
// 变量
var e: any = s.state.width;
return'medium'===(0,h.ScreenSize)(e)||'large'===(0,h.ScreenSize)(e)&&e<h.variables.safety_area
}
,s.isPadHorizontal=function(){
// 变量
var e: any = s.state,t=e.width,o=e.height;
return h.ScreenUtils.isPadHorizontal(t,o)
}
,s.colNum=function(){
return s.isPad()?s.isPadHorizontal()?3:2:1
}
,s.colGutter=function(){
return s.isPad()&&s.isPadHorizontal()?12:8
}
,s.boxWidth=function(){
// 变量
var e: any = s.isPad()?48:32;
return(s.isPadH()?s.state.width/12*8:s.state.width)-e
}
,s.isPadH=function(){
// 变量
var e: any = s.state.width,t=h.CommonUtils.getWindowSize('shop').screenHeight,o='small'===(0,h.ScreenSize)(t)&&'small'!==(0,h.ScreenSize)(e);
return s.isPad()&&s.isPadHorizontal()&&!o
}
,s.renderTabs=function(){
var e;
return(0,L.jsx)(b,{
isFixed:!1,pageId:0,pageType:h.PAGE_TYPE.shop,tabScrollViewHeight:(e=h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenHeight,'android'===v.Platform.OS?e-v.StatusBar.currentHeight+104:e-('ios'===v.Platform.OS?I+104:0)),subTabSet:[{
tabName:(0,h.t)('dynamic'),cards:[{
cardType:'custom',children:(0,L.jsx)(T.default,{
pageCatCode:y.pageCategory.followShop.pageCatCode,pageCatName:(0,h.t)(y.pageCategory.followShop.pageCatName)
}
)
}
]
}
,{
tabName:(0,h.t)('shop'),cards:[{
cardType:'custom',children:(0,L.jsx)(P.default,{

}
)
}
]
}
]
}
)
}
,s._loadPage=function(){
// 变量
var e: any = s.state,t=e.titleTop,o=e.userInfo,n=(0,_.getCurOrderType)(E.dialogOrderStore.curDialogOrder),l=E.dialogOrderStore.curDialogOrder!==E.dialogOrderManager.Order.ORDER_NONE&&n&&(0,_.getDialogViewByOrder)(E.dialogOrderStore.curDialogOrder,'followShop');
return(0,L.jsxs)(L.Fragment,{
children:[l&&(0,L.jsx)(E.Privacy,{
info:n.info,pageId:'followShop',userInfo:o,setSaleInfoCfgOff:h.HttpService.setSaleInfoCfgOff,setSaleInfoCfgOn:h.HttpService.setSaleInfoCfgOn,signingResults:h.HttpService.signingResults
}
),(0,L.jsx)(h.WithTheme,{
themeStyles:function(e){
return(0,w.default)(e,I)
}
,children:function(e,o,n){
return(0,L.jsx)(v.SafeAreaView,{
style:[e.productWrap,e.wrap,h.PlatformUtils.isApp()?{
flex:1
}
:{
minHeight:window.innerHeight
}
],onLayout:function(e){
(0,h.layout)(e,h.PAGE_TYPE.shop)
}
,children:'web'===v.Platform.OS?(0,L.jsxs)(L.Fragment,{
children:[(0,L.jsx)(v.View,{
nativeID:'titleSearch',style:[e.posiFix,{
position:'absolute',top:t
}
],children:(0,L.jsx)(E.TitleBar,{
onPress:s.onPressBack,titleName:(0,h.t)('shop_of_interest')
}
)
}
),(0,L.jsx)(v.View,{
nativeID:'',style:{
marginTop:56
}
,children:s.renderTabs()
}
),(0,L.jsx)(E.FixedButton,{
pageType:h.PAGE_TYPE.shop
}
)]
}
):(0,L.jsxs)(L.Fragment,{
children:[(0,L.jsx)(v.Animated.View,{
ref:function(e){
s.appScrollView=e
}
,style:[{
zIndex:9,elevation:9,transform:[{
translateY:0
}
],marginTop:h.PlatformUtils.isAndroid()?v.StatusBar.currentHeight:0
}
],children:(0,L.jsx)(E.TitleBar,{
onPress:s.onPressBack,disabledMarginTop:!0,titleName:(0,h.t)('shop_of_interest')
}
)
}
),s.renderTabs()]
}
)
}
)
}

}
),(0,L.jsx)(E.Toast,{
pageType:h.PAGE_TYPE.shop
}
)]
}
)
}
,s.state={
appState:v.AppState.currentState,cartNum:0,error:!1,followedShopVoList:[],height:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenHeight,isRefreshing:!1,isLogin:!1,loading:!0,loadingPostion:'bottom',scrollLocked:!0,loadState:1,recommendationShopVoList:[],scrollY:new v.Animated.Value(0),showLoading:!0,titleTop:0,totalCount:0,width:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenWidth,userInfo:null
}
,s.eventTracingReportByLoading(),h.CommonUtils.storeE2eId(h.PAGE_TYPE_E2EID.shopFollow,!0),s.e2eId=h.E2EIdStore.pageTypeE2EIdSpanId[h.E2EIdStore.curPageType].e2eId,s
}
return(0,p.default)(t,e),(0,s.default)(t,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.handlePrivacy(),this.eventTracingReportByLoading(),'web'===v.Platform.OS&&(this.wapTimerWidth=v.DeviceEventEmitter.addListener('switchScreenDir',(function(){
e.wapTimerWidth&&clearTimeout(e.wapTimerWidth),e.wapTimerWidth=setTimeout((function(){
e.setState({
width:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenWidth,height:h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop).screenHeight
}
)
}
),150)
}
))),'web'===v.Platform.OS?(document.addEventListener('scroll',this._onScrollWeb),this.handleAddListeners()):(this.lister1=v.DeviceEventEmitter.addListener('scrollEnable',(function(t){
e._scrollEnable(t)
}
)),this.listerBack=v.BackHandler.addEventListener('hardwareBackPress',this.onPressBack)),h.PlatformUtils.isApp()&&(this.eventListener=v.DeviceEventEmitter.addListener('NativeCallAction',this.handleAppPageChange))
}

}
,{
key:"componentDidUpdate",value:function(){
// 变量
var e: any = h.CommonUtils.getWindowSize(h.PAGE_TYPE.shop),t=e.screenWidth,o=e.screenHeight;
this.state.width!==t&&this.setState({
width:t,height:o
}
)
}

}
,{
key:"componentWillUnmount",value:function(){
this.listerExpBack&&this.listerExpBack.remove(),this.state.scrollY&&this.state.scrollY.removeAllListeners(),'web'===v.Platform.OS?(document.removeEventListener('scroll',this._onScrollWeb),window.removeEventListener('scroll',this._onMomentumScrollEnd),window.removeEventListener('unload',this.eventTracingReportByLeave),this.listerWidth&&this.listerWidth.remove(),this.wapTimerWidth&&clearTimeout(this.wapTimerWidth)):(this.listerBack&&this.listerBack.remove(),'ios'===v.Platform.OS&&this.timer&&clearTimeout(this.timer),this.lister1&&this.lister1.remove()),h.PlatformUtils.isApp()&&this.eventListener&&this.eventListener.remove()
}

}
,{
key:"render",value:function(){
return this._loadPage()
}

}
])
}
)(u.default.Component))||t;
_e.FollowShopPageTest=W,_e.default=(0,h.Componentautoscaling)(W)
}
),"bee67c5c8d0aa9de358424ebf9c433d3d13ec3a4830e039155bba744b818ab86",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","dc341e3a6e48889be1b4c3cd878559337c8c56fb10de43401816c02f315c28d7","7f3ff4064766cb1909c7e8af9ac8a2be57b1b373d000cc628c1d377335498deb","6166d31860196716618663ea178e5e067e9fb54dd62a41333ece468a5f59f096","6b69f085c6f8c27709af96f3578d0d69a731d6d8a3d8fa150c47e409bf33a4c7","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),n=e(r(d[2])),l=e(r(d[3])),s=e(r(d[4])),u=e(r(d[5])),c=r(d[6]),h=r(d[7]),p=e(r(d[8])),f=r(d[9]),S=e(r(d[10])),w=e(r(d[11])),v=r(d[12]),y=e(r(d[13])),L=r(d[14]),P=r(d[15]),x=r(d[16]);
// 函数
function C(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(C=function(){
return!!e
}
)()
}
var _=0;
c.DeviceUtils.getStatusBarHeight().then((function(e){
_=e
}
)).catch((function(){
_=0
}
));
var V=(0,f.observer)(t=(function(e){
// 函数
function t(e: any): any {
var n,u,p,f;
return(0,o.default)(this,t),u=this,p=t,f=[e],p=(0,s.default)(p),(n=(0,l.default)(u,C()?Reflect.construct(p,f||[],(0,s.default)(u).constructor):p.apply(u,f))).pageNum=1,n.pageSize=18,n.loadMore=!0,n._queryFollowShop=function(e){
if(c.AppStore.isLogin){
n.setState({
showLoading:!0,loadState:1
}
);
var t={
pageNumber:n.pageNum,pageSize:n.pageSize
}
;
n._handleFollowedShopList(t,e)
}
else n.setState({
showLoading:!1,loadState:1,noEmpty:!0,loading:!1,totalCount:0
}
,(function(){
n.goLogin()
}
))
}
,n._handleFollowedShopList=function(e,t){
// 变量
var o: any = n.state.followedShopVoList,l=n.pageNum,s=n.state.totalCount;
(0,L.getFollowedShopList)(e).then((function(e){
if(null!=e&&e.success){
var u,c,h,p,f,S,w=null!=(u=null==e?void 0:e.data)?u:{

}
,v=null!=(c=null==w?void 0:w.page)?c:{

}
;
1===(l=null!=(h=null==v?void 0:v.pageNumber)?h:n.pageNum)&&(o=[]),o=null!=(p=null==(f=o)?void 0:f.concat(null!=(S=null==w?void 0:w.followedShopVoList)?S:[]))?p:[],s=null==v?void 0:v.totalRow,t&&n.setState({
noEmpty:!t,firstEmpty:!1
}
);
var y=0===o.length;
s>l*n.pageSize?(n.loadMore=!0,n.pageNum+=1,n.setState({
showLoading:1!==n.pageNum,loadState:1,followedShopVoList:o,pageNum:n.pageNum+1,totalCount:s,loading:y
}
)):(n.loadMore=!1,n.setState({
showLoading:!0,loadState:3,followedShopVoList:o,pageNum:n.pageNum+1,totalCount:s,loading:y
}
,(function(){
n._queryRecommendShop()
}
)))
}

}
)).catch((function(){
n.setState({
showLoading:!1,loadState:2,totalCount:0
}
)
}
)).finally((function(){
0===n.state.followedShopVoList.length&&n.setState({
noEmpty:!0
}
)
}
))
}
,n._queryRecommendShop=function(){
(0,L.getRecommendShopList)().then((function(e){
if(null!=e&&e.success){
var t,o=(null!=(t=null==e?void 0:e.data)?t:{

}
).recommendShopVoList,l=void 0===o?[]:o;
n.setState({
recommendationShopVoList:l,loading:!1
}
)
}

}
)).catch((function(){
n.setState({
recommendationShopVoList:[]
}
)
}
))
}
,n.goLogin=function(){
// 变量
var e: any = '';
if('web'===v.Platform.OS){
// 变量
var t: any = window.location.href;
e=c.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else e='vmall://com.vmall.client/home/login';
setTimeout((function(){
c.RouterUtils.gotoPage(e)
}
),500)
}
,n._onMomentumScrollEnd=function(e){
v.DeviceEventEmitter.emit('onScrollEvent',e,c.PAGE_TYPE.shop)
}
,n._onScrollBeginDrag=function(e){
v.DeviceEventEmitter.emit('onScrollBeginDragEvent',e)
}
,n.isPad=function(){
// 变量
var e: any = n.state.width;
return'medium'===(0,c.ScreenSize)(e)||'large'===(0,c.ScreenSize)(e)&&e<c.variables.safety_area
}
,n.renderFooter=function(e,t){
// 变量
var o: any = n.state,l=o.followedShopVoList,s=o.recommendationShopVoList;
return(0,x.jsxs)(x.Fragment,{
children:[(0,x.jsx)(h.LoadingView,{
showLoading:n.state.showLoading,position:n.state.loadingPostion,loadState:n.state.loadState,errorCallback:n._queryFollowShop,height:56,iconSize:24,titleStyle:e.lodingTitle
}
),l.length>=10&&(0,x.jsx)(v.View,{
style:{
height:20
}

}
),s.length>0?(0,x.jsx)(v.Text,{
style:[e.recommendationTitle,{
paddingHorizontal:n.isPad()?8:0
}
],children:"\u63a8\u8350\u5e97\u94fa"
}
):null,n.renderRecommendCards(e)]
}
)
}
,n.loadPage=function(e){
// 变量
var t: any = n.state.loading;
return'web'===v.Platform.OS&&(document.body.style.overflow=t?'hidden':''),t?'web'===v.Platform.OS&&(0,x.jsx)(v.View,{
style:e.loadWrap,children:n.loadingCon(e)
}
)||n.loadingCon(e):null
}
,n.loadingCon=function(e){
return(0,x.jsxs)(v.View,{
style:[e.loadPage,{
height:'web'===v.Platform.OS?'100%':n.state.height
}
],children:[(0,x.jsx)(v.Image,{
style:[e.loadPageImg],source:c.DarkStore.darkBool?h.ImageArray.loadingDark:h.ImageArray.loading
}
),(0,x.jsx)(v.Text,{
style:[e.loadPageText],children:(0,c.t)('loading')
}
)]
}
)
}
,n.followItem=function(e,t,o,n){
return(0,x.jsx)(v.View,{
style:o.productItemWrap,children:(0,x.jsx)(h.ShopCard,{
data:e,pageCatCode:P.pageCategory.followShop.pageCatCode,pageCatName:(0,c.t)(P.pageCategory.followShop.pageCatName),pageType:c.PAGE_TYPE.shop
}
)
}
,t)
}
,n.isPadHorizontal=function(){
// 变量
var e: any = n.state,t=e.width;
return!(e.height>t)&&t>=1024
}
,n.colNum=function(){
return n.isPad()?n.isPadHorizontal()?3:2:1
}
,n.colGutter=function(){
return n.isPad()&&n.isPadHorizontal()?12:8
}
,n.boxWidth=function(){
// 变量
var e: any = n.isPad()?48:32;
return(n.isPadH()?n.state.width/12*8:n.state.width)-e
}
,n.isPadH=function(){
// 变量
var e: any = n.state.width,t=c.CommonUtils.getWindowSize('shop').screenHeight,o='small'===(0,c.ScreenSize)(t)&&'small'!==(0,c.ScreenSize)(e);
return n.isPad()&&n.isPadHorizontal()&&!o
}
,n._renderScroll=function(e){
return'web'===v.Platform.OS?(0,x.jsx)(v.View,Object.assign({

}
,e)):(0,x.jsx)(v.ScrollView,Object.assign({

}
,e,{
removeClippedSubviews:!1
}
))
}
,n._loadMore=y.default.debounce((function(){
n.loadMore&&(n.loadMore=!1,n._queryFollowShop(!0))
}
),200),n.renderFollowCards=function(e){
var t,o=n.state,l=o.followedShopVoList,s=o.width,u=n.colNum(),c='l2r'===n.state.layoutType?12:8,p=(n.boxWidth()-(u-1)*c)/u;
return(0,x.jsx)(v.View,{
style:[e.followProductList,{
paddingHorizontal:n.isPad()?24:16
}
,n.isPadH()&&{
paddingHorizontal:(s-n.boxWidth())/2
}
],children:(null==l?void 0:l.length)>0?(0,x.jsxs)(x.Fragment,{
children:[(0,x.jsx)(h.GridLO,{
col:1,rowGutter:12,colGutter:0,pageGutter:0,dataArray:n.state.followedShopVoList,boxWidth:n.boxWidth(),renderScrollComponent:function(e){
return n._renderScroll(e)
}
,initialNumToRender:null==(t=n.state.followedShopVoList)?void 0:t.length,loadMore:n._loadMore,renderItem:function(t){
// 变量
var o: any = t.item,l=t.index;
return n.followItem(o,l,e,p)
}

}
),n.renderFooter(e,p)]
}
):n.renderEmpty(e)
}
)
}
,n.renderRecommendCards=function(e){
var t,o=n.state.recommendationShopVoList,l=n.colNum(),s='l2r'===n.state.layoutType?12:8,u=(n.boxWidth()-(l-1)*s)/l;
return o.length>0?(0,x.jsx)(v.View,{
style:[e.followProductList,(null==(t=n.state.followedShopVoList)?void 0:t.length)>0&&e.recommendUpdateList],children:(0,x.jsx)(h.GridLO,{
col:1,rowGutter:12,colGutter:0,pageGutter:0,mainStyle:e.gridloMainStyle,dataArray:o,boxWidth:n.boxWidth(),initialNumToRender:null==o?void 0:o.length,renderItem:function(t){
// 变量
var o: any = t.item,l=t.index;
return n.followItem(o,l,e,u)
}

}
)
}
):null
}
,n.renderEmpty=function(e){
// 变量
var t: any = n.state.recommendationShopVoList;
return(0,x.jsxs)(x.Fragment,{
children:[(0,x.jsxs)(v.View,{
style:[e.emptyC],children:[(0,x.jsx)(v.Image,{
source:w.default.notyet,style:e.emptyImg
}
),(0,x.jsx)(v.Text,{
style:[e.emptyT,n.isPad()?e.prdAreaPadR:e.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:'\u60a8\u8fd8\u6ca1\u6709\u5173\u6ce8\u7684\u5e97\u94fa'
}
)]
}
),t.length>0?(0,x.jsxs)(v.View,{
children:[(0,x.jsx)(v.Text,{
style:[e.recommendationTitle,{
paddingHorizontal:n.isPad()?8:0
}
],children:"\u63a8\u8350\u5e97\u94fa"
}
),n.renderRecommendCards(e)]
}
):null]
}
)
}
,n._loadPage=function(){
// 变量
var e: any = n.state.height;
return(0,x.jsx)(c.WithTheme,{
themeStyles:function(e){
return(0,S.default)(e,_)
}
,children:function(t){
return(0,x.jsxs)(x.Fragment,{
children:[n.loadPage(t),'web'===v.Platform.OS?!n.state.loading&&n.renderFollowCards(t):!n.state.loading&&(0,x.jsx)(v.Animated.ScrollView,{
onMomentumScrollEnd:n._onMomentumScrollEnd,onScrollBeginDrag:n._onScrollBeginDrag,style:{
height:e-104-_
}
,children:n.renderFollowCards(t)
}
)]
}
)
}

}
)
}
,n.state={
loading:!0,isRefreshing:!1,error:!1,width:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenWidth,height:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenHeight,titleTop:0,followedShopVoList:[],recommendationShopVoList:[],totalCount:0,showLoading:!0,loadState:1,isLogin:!1,loadingPostion:'bottom'
}
,n
}
return(0,u.default)(t,e),(0,n.default)(t,[{
key:"componentDidMount",value:function(){
this._isLogin()
}

}
,{
key:"componentDidUpdate",value:function(){
this.state.width!==c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenWidth&&this.setState({
width:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenWidth,height:c.CommonUtils.getWindowSize(c.PAGE_TYPE.shop).screenHeight
}
)
}

}
,{
key:"componentWillUnmount",value:function(){
this.eventListener&&this.eventListener.remove()
}

}
,{
key:"_isLogin",value:function(){
// 变量
var e: any = this;
(c.PlatformUtils.isApp()||'web'===v.Platform.OS)&&(null===c.AppStore.isLogin?c.AppStore.getIsLogin().then((function(){
e._queryFollowShop(!1)
}
)):this._queryFollowShop(!1),c.PlatformUtils.isApp()&&(this.eventListener=v.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var o;
'login'===(null==t?void 0:t.service)&&'isLogin'===(null==t?void 0:t.action)&&('boolean'==typeof(null==t||null==(o=t.param)?void 0:o.isLogin)&&(c.AppStore.setIsLogin(t.param.isLogin),t.param.isLogin?e._queryFollowShop():e.setState({
followedShopVoList:[],recommendationShopVoList:[]
}
)))
}
))))
}

}
,{
key:"render",value:function(){
return this._loadPage()
}

}
])
}
)(p.default.Component))||t;
_e.default=(0,c.Componentautoscaling)(V)
}
),"7f3ff4064766cb1909c7e8af9ac8a2be57b1b373d000cc628c1d377335498deb",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6b69f085c6f8c27709af96f3578d0d69a731d6d8a3d8fa150c47e409bf33a4c7","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.SearchPageTest=void 0;
var t,a,o=e(_r(d[1])),r=e(_r(d[2])),n=e(_r(d[3])),i=e(_r(d[4])),s=e(_r(d[5])),l=e(_r(d[6])),c=_r(d[7]),u=_r(d[8]),p=e(_r(d[9])),h=_r(d[10]),f=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var a: any = I(t);
if(a&&a.has(e))return a.get(e);
var o={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var i: any = r?Object.getOwnPropertyDescriptor(e,n):null;
i&&(i.get||i.set)?Object.defineProperty(o,n,i):o[n]=e[n]
}
return o.default=e,a&&a.set(e,o),o
}
)(_r(d[11])),v=_r(d[12]),S=e(_r(d[13])),y=e(_r(d[14])),w=_r(d[15]),C=e(_r(d[16])),P=_r(d[17]),L=e(_r(d[18])),b=_r(d[19]);
// 函数
function I(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,a=new WeakMap;
return(I=function(e){
return e?a:t
}
)(e)
}
// 函数
function T(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(T=function(){
return!!e
}
)()
}
// 变量
var x: any = 0,A=0;
'ios'===v.Platform.OS&&(c.DeviceUtils.getStatusBarHeight().then((function(e){
x=e
}
)),c.DeviceUtils.getSafeAreaBottomHeight().then((function(e){
A=e
}
)));
var k=(0,h.observer)((a=(function(e){
// 函数
function t(e: any): any {
var a,n,l,h,f,C,P,L,I,x,A,k,W,U,_,O,R,E,j,B;
(0,r.default)(this,t),E=this,j=t,B=[e],j=(0,s.default)(j),(R=(0,i.default)(E,T()?Reflect.construct(j,B||[],(0,s.default)(E).constructor):j.apply(E,B))).wapTimer=null,R.wapBlurTimer=null,R.arrLabels=[],R.count=0,R.isMp=c.PlatformUtils.isMp(),R.handleEventCallBack=function(e){
switch(e){
case'onHide':case'onUnload':wx.removeStorageSync('keyWord'),R.goMpBack();
break;
case'onShow':R.setMpdata()
}

}
,R.setMpdata=function(){
var e,t,a,o=getCurrentPages();
o.length&&(a=o[o.length-1]),R.setState({
value:decodeURIComponent((null==(e=a)||null==(t=e.options)?void 0:t.keyWord)||wx.getStorageSync('keyWord')||'')
}
)
}
,R.leaveDapReport=function(){
'web'===v.Platform.OS?R.unload():(R.eventTracingReportByLeave(),c.EventTracking.execReportData('',!0))
}
,R._update=function(e){
R.setState({
value:e||'',isAssWordShow:!1
}
,(function(){
R.state.value?R.setState({
isAssWordShow:!0
}
,(function(){
R._queryAssociationWordInfo(R.state.value)
}
)):R.setState({
isAssWordShow:!1,relationArr:[]
}
)
}
)),R.wapTimer&&clearTimeout(R.wapTimer),R.wapTimer=setTimeout((function(){
R.textInput&&R.textInput.focus()
}
),50)
}
,R.unload=function(){
var e;
if('function'==typeof(null==(e=navigator)?void 0:e.sendBeacon)){
var t=[c.BuildParams.buildWebWapPostParams({
actionCode:'200580016',actionName:(0,c.t)('shop_search_left'),eventType:c.EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:R.props.pageId,content:{
load:'1',CarrierCode:R.carrierCode
}
,pageCatCode:w.pageCategory.searchPage.pageCatCode,pageCatName:(0,c.t)(w.pageCategory.searchPage.pageCatName)
}
)],a={
type:'application/json',language:c.MCP_LANG.CN,encoding:'gzip',data:(new Date).getTime()
}
,o=new Blob([JSON.stringify(t)],a);
navigator.sendBeacon(c.Service.reportBatchUrl+'?'+(new Date).getTime(),o)
}

}
,R.handleAddListeners=function(){
var e,t;
v.BackHandler.addEventListener('hardwareBackPress',R.handleApkBack),R.navListener1=null==(e=R.props)||null==(t=e.navigation)||null==t.addListener?void 0:t.addListener('blur',(function(){
R.eventTracingReportByLeave()
}
))
}
,R.handleApkBack=function(){
if(c.PlatformUtils.isApp())if(''!==R.state.value)R.setState({
value:'',isAssWordShow:!1
}
);
else{
// 变量
var e: any = R.props.navigation,t=e.canGoBack,a=e.goBack;
t&&t()&&a()
}
return!0
}
,R.updateValue=function(e){
R.setState({
value:e
}
)
}
,R.getLocalSearchId=function(){
c.RnBridge.invokeVmallNative('common','getSearchId',{

}
).then((function(e){
e&&(e.searchId?R.setState({
searchId:e.searchId
}
):R.getSearchId())
}
))
}
,R.getSearchId=(0,o.default)((function*(){
// 变量
var e: any = yield c.DeviceUtils.getDeviceInfo(c.APP_INFOS.DEVICE_INFO);
c.HttpService.queryPrd({
keyword:' ',pageNum:'1',pageSize:'18',searchSortField:'0',searchSortType:'desc',tid:null==e?void 0:e.tid,sid:void 0,searchFlag:'0',screenParams:void 0,portal:'3',lang:c.MCP_LANG.CN,country:'CN',version:'1'
}
).then((function(e){
null!=e&&e.success&&(R.state.searchId||(R.setState({
searchId:e.searchId
}
),R._deleteQueryHis(e.searchId)))
}
)).catch((function(){

}
))
}
)),R._deleteQueryHis=function(e){
'web'===v.Platform.OS&&window.localStorage.setItem('searchHistoryList','');
var t=c.PlatformUtils.isApp()?{
version:'1',searchId:e
}
:null;
c.HttpService.deleteQueryHis(t)
}
,R.reportInit=function(){
c.EventTracking.eventTracingReport({
actionCode:c.PlatformUtils.isApp()?'100660010':'200580010',actionName:'\u5e97\u94fa\u641c\u7d22\u9875\u52a0\u8f7d\u4e0a\u62a5',eventType:c.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:R.props.pageId,content:{
load:'1',CarrierCode:R.carrierCode
}
,pageCatCode:w.pageCategory.searchPage.pageCatCode,pageCatName:(0,c.t)(w.pageCategory.searchPage.pageCatName)
}
),c.EventTracking.execReportData('',!0)
}
,R.eventTracingReportByLeave=function(){
// 变量
var e: any = c.PlatformUtils.isApp()?'100660016':'200580016';
c.EventTracking.eventTracingReport({
actionCode:e,actionName:(0,c.t)('shop_search_left'),eventType:c.EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:R.props.pageId,content:{
load:'1',CarrierCode:R.carrierCode
}
,pageCatCode:w.pageCategory.searchPage.pageCatCode,pageCatName:(0,c.t)(w.pageCategory.searchPage.pageCatName)
}
),c.EventTracking.execReportData('',!0)
}
,R.apkAndIosIsLogin=function(){
null===c.AppStore.isLogin?c.AppStore.getIsLogin().then((function(){
R.setState({
isLogin:c.AppStore.isLogin
}
),c.AppStore.isLogin||R.getLocalSearchId()
}
)):(R.setState({
isLogin:c.AppStore.isLogin
}
),c.AppStore.isLogin||R.getLocalSearchId())
}
,R.wapIsLogin=function(){
null===c.AppStore.isLogin?c.AppStore.getIsLogin().then((function(){
R.setState({
isLogin:c.AppStore.isLogin
}
)
}
)):R.setState({
isLogin:c.AppStore.isLogin
}
)
}
,R.isSmall=function(){
// 变量
var e: any = c.CommonUtils.getWindowSize('searchPage').screenWidth;
return'small'===(0,c.ScreenSize)(e)
}
,R._queryAssociationWordInfo=function(e){
c.HttpService.queryAssociationWordInfo(e).then((function(e){
var t;
(null==e||null==(t=e.wordList)?void 0:t.length)>0?(R.count=0,e.wordList.map((function(e){
var t;
R.count+=null==e||null==(t=e.labels)?void 0:t.length
}
)),R.arrLabels=[],R.setState({
assWordList:e.wordList||[],isAssWordShow:!0,labelsShow:!0
}
)):R.setState({
assWordList:[],isAssWordShow:!1
}
)
}
))
}
,R._onLayout=function(e,t,a){
// 变量
var o: any = 0;
if(c.PlatformUtils.isAndroid()){
// 变量
var r: any = e.nativeEvent.lines.length;
void 0===R.arrLabels[t]&&(R.arrLabels[t]=[]),R.arrLabels[t].push(r)
}
else if(c.PlatformUtils.isIOS()){
// 变量
var n: any = e.nativeEvent.layout.width;
void 0===R.arrLabels[t]&&(R.arrLabels[t]=[]),R.arrLabels[t].push({
width:n,index:a
}
)
}
else{
// 变量
var i: any = e.nativeEvent.layout.width;
void 0===R.arrLabels[t]&&(R.arrLabels[t]=[]),R.arrLabels[t].push(i)
}
R.arrLabels.map((function(e){
o+=e.length
}
)),R.count===o&&(c.PlatformUtils.isIOS()&&R.arrLabels.map((function(e){
e.sort((function(e,t){
return e.index-t.index
}
))
}
)),R.setState({
labelsShow:!1
}
))
}
,R._labelsListShow=function(e,t,a){
var o=null==t?void 0:t.map((function(t,o){
return(0,b.jsx)(v.TouchableOpacity,{
style:[e.labelView,c.PlatformUtils.isIOS()&&{
flexWrap:'wrap'
}
],children:(0,b.jsx)(v.Text,{
style:e.labelText,onTextLayout:function(e){
c.PlatformUtils.isAndroid()&&R._onLayout(e,a)
}
,onLayout:function(e){
!c.PlatformUtils.isAndroid()&&R._onLayout(e,a,o)
}
,children:t
}
)
}
)
}
));
return o
}
,R._labelsListShowOther=function(e,t,a,o,r,n){
// 变量
var i: any = (r-2*n)/2-24;
return null==t?void 0:t.map((function(r,n){
return o<R.arrLabels.length&&R.arrLabels[o]&&(c.PlatformUtils.isAndroid()&&1===R.arrLabels[o][0]||c.PlatformUtils.isIOS()&&R.arrLabels[o][0].width<=i||!c.PlatformUtils.isApp()&&R.arrLabels[o][0]<=i)?(0,b.jsx)(v.TouchableOpacity,{
style:[e.labelView],onPress:function(){
return R.goToSearchAss(a+t[n])
}
,children:(0,b.jsx)(v.Text,{
style:e.labelText,children:r
}
)
}
,n):null
}
))
}
,R._assWordListShow=function(e,t,a,o){
return R.state.assWordList.map((function(r,n){
// 变量
var i: any = r.keyword.indexOf(R.state.value);
return(0,b.jsxs)(v.View,{
style:[e.wordItem,{
marginHorizontal:t
}
],children:[(0,b.jsxs)(v.TouchableOpacity,{
style:[e.word],onPress:function(){
return R.goToSearchAss(r.keyword)
}
,children:[i>=0?(0,b.jsxs)(v.Text,{
style:e.wordText,children:[r.keyword.substr(0,i),(0,b.jsx)(v.Text,{
style:e.wordTextAss,children:R.state.value
}
),r.keyword.substr(i+R.state.value.length)]
}
):(0,b.jsx)(v.Text,{
style:e.wordText,children:r.keyword
}
),(0,b.jsx)(v.View,{
style:e.maskGray,children:(0,b.jsx)(S.default,{
start:{
x:0,y:0
}
,end:{
x:1,y:0
}
,colors:a?[c.CommonUtils.colorRgba('#000000',0),c.CommonUtils.colorRgba('#000000',1)]:[c.CommonUtils.colorRgba('#F1F3F5',0),c.CommonUtils.colorRgba('#F1F3F5',1)],style:{
height:48,width:32
}
,children:(0,b.jsx)(v.Text,{

}
)
}
)
}
)]
}
),(0,b.jsx)(v.View,{
style:[e.wordLabels],children:R.state.labelsShow?R._labelsListShow(e,r.labels,n):R._labelsListShowOther(e,r.labels,r.keyword,n,o,t)
}
)]
}
,n)
}
))
}
,R.clear=function(){
''!==R.state.value&&R.setState({
value:'',isAssWordShow:!1
}
)
}
,R.goToSearch=function(e){
// 变量
var t: any = R.props.navigation,a='';
if(a=''===R.state.value?R.state.defaultKeyWord:R.state.value,e&&(a=e),R.isMp){
var o={
carrierCode:encodeURIComponent(R.carrierCode),keyWord:encodeURIComponent(a)
}
;
return c.RouterUtils.gotoPage("/packageRnShop/index?carrierCode="+o.carrierCode+"&keyWord="+o.keyWord+"&pageAlias=shopSearchPage")
}
R.state.isLogin||R.setLocalHistory(a),null==t||null==t.navigate||t.navigate('shopResultPage',{
keyWord:a,pageAlias:'shopSearchPage'
}
),R.leaveDapReport()
}
,R.getUrl=function(){
if(c.PlatformUtils.isApp()){
var e,t,a=(null==(e=R.state.shopInfo.shopBaseInfoVo)||null==(t=e.shopMobileUrl)?void 0:t.split('?'))||[];
R.gotoUrl=a[0]+"?carrierCode="+R.carrierCode+"&pn=shopSearchPage&searchId="+R.state.searchId
}
else{
var o,r,n,i=(null==(o=R.state.shopInfo)||null==(r=o.shopBaseInfoVo)||null==(n=r.shopH5Url)?void 0:n.split('?'))||[];
R.gotoUrl=i[0]+"?carrierCode="+R.carrierCode+"&pageAlias=shopSearchPage"
}
return R.gotoUrl
}
,R.goToSearchAss=function(e){
if(R.isMp){
var t={
carrierCode:encodeURIComponent(R.carrierCode),assWord:encodeURIComponent(e)
}
;
return c.RouterUtils.gotoPage("/packageRnShop/index?carrierCode="+t.carrierCode+"&keyWord="+t.assWord+"&pageAlias=shopSearchPage")
}
R.state.isLogin||R.setLocalHistory(e),R.setState({
value:e
}
),R.props.navigation.navigate('shopResultPage',{
keyWord:e,pageAlias:'shopSearchPage'
}
),R.leaveDapReport()
}
,R.blur=function(){
R.textInput.blur()
}
,R.goMpBack=function(){
''!==R.state.value&&R.setState({
value:'',isAssWordShow:!1
}
)
}
,R.goback=function(){
var e,t=R.props.navigation,a=t.navigate,o=t.canGoBack,r=t.goBack;
''===R.state.value?('web'===v.Platform.OS&&R.unload(),'SearchPage'===(null==(e=R.props.route)?void 0:e.name)?a('ShopDefault'):o&&o()&&r()):R.setState({
value:'',isAssWordShow:!1
}
)
}
,R.renderSearchIcon=function(e){
return(0,b.jsx)(b.Fragment,{
children:R.isMp?(0,b.jsx)(v.Image,{
source:{
uri:y.default.search
}
,style:{
width:16,height:16
}

}
):(0,b.jsx)(u.SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)
}
,R.renderCancelIcon=function(e){
return(0,b.jsx)(b.Fragment,{
children:R.isMp?(0,b.jsx)(v.Image,{
source:{
uri:y.default.clearClose
}
,style:{
width:24,height:24
}

}
):(0,b.jsx)(u.SvgIcon,{
iconName:'cancel1',width:"16",height:"16",normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)
}
;
var V=!1;
if('web'===v.Platform.OS){
var M=c.BROWSER_CONF.UA_LIST.some((function(e){
var t,a,o;
return-1!==(null==(t=navigator)||null==(a=t.userAgent)||null==(o=a.toLowerCase())?void 0:o.indexOf(e))
}
)),N=c.BROWSER_CONF.CID_LIST.includes(c.Cookies.get('cps_id'));
V=M||N
}
var D,H=R.props.route;
if(R.carrierCode=p.default.get(H,'params.carrierCode'),c.PlatformUtils.isMp()){
var F,z,G,q=getCurrentPages();
q.length&&(D=q[q.length-1]),R.carrierCode=decodeURIComponent(null!=(F=null==(z=D)||null==(G=z.options)?void 0:G.carrierCode)?F:'')
}
return R.state={
value:null!=(a=p.default.get(H,'params.keyWord'))?a:decodeURIComponent(null!=(n=null==(l=D)||null==(h=l.options)?void 0:h.keyWord)?n:''),assWordList:[],isAssWordShow:!1,isLogin:void 0,searchId:void 0,labelsShow:!0,gotoUrl:'',shopInfo:'',iosFlag:'ios'!==v.Platform.OS||null!=(f=null==(C=R.props)||null==(P=C.route)||null==(L=P.params)?void 0:L.iosFlag)&&f,defaultKeyWord:null!=(I=p.default.get(H,'params.default'))?I:decodeURIComponent(null!=(x=null==(A=D)||null==(k=A.options)?void 0:k.default)?x:''),hotSearchWord:null!=(W=p.default.get(H,'params.hotSearchWord'))?W:decodeURIComponent(null!=(U=null==(_=D)||null==(O=_.options)?void 0:O.hotSearchWord)?U:''),isH5:V
}
,R
}
return(0,l.default)(t,e),(0,n.default)(t,[{
key:"componentWillMount",value:function(){
// 变量
var e: any = this;
this._gestureHandlers=v.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onStartShouldSetPanResponderCapture:function(){
return!1
}
,onMoveShouldSetPanResponder:function(e,t){
return Math.abs(t.dx)>10||Math.abs(t.dy)>10
}
,onMoveShouldSetPanResponderCapture:function(){
return!1
}
,onPanResponderMove:function(){
e.textInput.blur()
}

}
)
}

}
,{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
'ios'!==v.Platform.OS||this.state.iosFlag||(this.iosTimer&&clearTimeout(this.iosTimer),this.iosTimer=setTimeout((function(){
e.setState({
iosFlag:!0
}
)
}
),500)),this.reportInit(),c.PlatformUtils.isApp()?this.apkAndIosIsLogin():c.PlatformUtils.isWap(c.CommonUtils.getWindowSize('searchPage').screenWidth)&&this.wapIsLogin(),c.PlatformUtils.isApp()&&this.handleAddListeners(),this.subscription=v.DeviceEventEmitter.addListener('UPDATE_USER_DATA',(function(t){
e._update(t)
}
)),c.SearchResultStore.keyword&&this._update(c.SearchResultStore.keyword||''),(0,P.queryShopInfo)(this.carrierCode).then((function(t){
t&&e.setState({
shopInfo:null==t?void 0:t.data
}
)
}
)),this.state.value&&this._queryAssociationWordInfo(this.state.value),'web'===v.Platform.OS&&window.addEventListener('unload',this.unload),this.search2ResListener=v.DeviceEventEmitter.addListener('shopSearch2Res',(function(){
e.leaveDapReport()
}
)),this.props.setEventCallBack&&this.props.setEventCallBack(this.handleEventCallBack)
}

}
,{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentWillUnmount",value:function(){
var e,t;
c.PlatformUtils.isAndroid()&&this.wapBlurTimer&&clearTimeout(this.wapBlurTimer),null==(e=this.subscription)||e.remove(),null==(t=this.search2ResListener)||t.remove(),this.navListener1&&'function'==typeof this.navListener1&&this.navListener1(),this.wapTimer&&clearTimeout(this.wapTimer),this.iosTimer&&clearTimeout(this.iosTimer),c.PlatformUtils.isApp()&&v.BackHandler.removeEventListener('hardwareBackPress',this.handleApkBack),'web'===v.Platform.OS&&window.removeEventListener('unload',this.unload)
}

}
,{
key:"searchValue",value:function(e){
// 变量
var t: any = this;
this.setState({
value:e,labelsShow:!0
}
,(function(){
t.arrLabels=[],t.state.value?t._queryAssociationWordInfo(t.state.value):t.setState({
isAssWordShow:!1,relationArr:[]
}
)
}
))
}

}
,{
key:"setLocalHistory",value:function(e){
if(''!==e){
// 变量
var t: any = 'searchHistoryList',a=[];
try{
'web'===v.Platform.OS&&(a=JSON.parse(window.localStorage.getItem(t)||'[]').filter((function(t){
return t!==e
}
)))
}
catch(e){

}
a.unshift(e),a.splice(10),'web'===v.Platform.OS&&window.localStorage.setItem(t,JSON.stringify(a))
}

}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
if('large'===(0,c.ScreenSize)(c.CommonUtils.getWindowSize('searchPage').screenWidth))return null;
// 变量
var t: any = this.isSmall()?16:24,a=this.isSmall()?11:8,o=c.DarkStore.darkBool,r=c.CommonUtils.getWindowSize('searchPage').screenWidth,n=c.CommonUtils.getWindowSize('searchPage').screenHeight;
return(0,b.jsx)(c.WithTheme,{
themeStyles:L.default,children:function(i,s){
var l;
return(0,b.jsxs)(b.Fragment,{
children:['ios'===v.Platform.OS&&(0,b.jsx)(v.View,{
style:{
backgroundColor:s.C32.color,width:'100%',height:x
}

}
),(0,b.jsxs)(v.View,{
style:[i.onLayout,c.PlatformUtils.isApp()?{
flex:1
}
:{

}
],onLayout:function(e){
(0,c.layout)(e,'searchPage')
}
,children:[(0,b.jsxs)(v.View,{
style:i.titleBarStyle,children:[e.state.isH5||e.isMp?null:(0,b.jsx)(v.TouchableOpacity,{
style:{
marginLeft:t
}
,onPress:e.goback,children:(0,b.jsx)(u.SvgIcon,{
iconName:"ic24-back",normalCol:s.C31.color,opacity:o?s.C12.opacity:s.C11.opacity,width:24,height:24
}
)
}
),(0,b.jsxs)(v.View,{
style:[i.searchBox,{
marginRight:a
}
],children:[(0,b.jsx)(v.TouchableOpacity,{
activeOpacity:.3,style:i.searchImgBox,children:e.renderSearchIcon(s)
}
),(0,b.jsxs)(v.View,{
style:[i.inputBox,''===e.state.value&&{
marginRight:12
}
],children:['ios'!==v.Platform.OS||e.state.iosFlag?(0,b.jsx)(v.TextInput,{
style:[i.inputText,e.isMp&&i.inputTextMp],autoCapitalize:'none',value:e.state.value,placeholder:c.PlatformUtils.isApp()?'':e.state.defaultKeyWord,placeholderTextColor:s.C15.color+s.opacityMap[s.C15.opacity],autoFocus:!0,keyboardType:'default',onChangeText:e.searchValue.bind(e),selectionColor:s.C35.color,onSubmitEditing:function(){
return e.goToSearch()
}
,ref:function(t){
e.textInput=t
}
,returnKeyType:'search',allowFontScaling:!1,multiline:!1,disableFullscreenUI:!0,keyboardAppearance:o?'dark':'default'
}
):null,c.PlatformUtils.isApp()&&''===e.state.value&&(0,b.jsx)(v.View,{
style:{
position:'absolute',zIndex:-2,left:5,top:9
}
,children:(0,b.jsx)(v.Text,{
numberOfLines:1,ellipsizeMode:'clip',style:i.otherText,children:e.state.defaultKeyWord
}
)
}
)]
}
),''===e.state.value?null:(0,b.jsx)(v.TouchableOpacity,{
activeOpacity:.3,style:i.crossImgBox,onPress:e.clear,children:e.renderCancelIcon(s)
}
)]
}
),(0,b.jsx)(v.TouchableOpacity,{
onPress:function(){
return e.goToSearch()
}
,children:(0,b.jsx)(v.Text,{
style:[i.searchText,{
marginRight:t
}
],children:'\u641c\u672c\u5e97'
}
)
}
)]
}
),(0,b.jsx)(v.View,{
style:[i.viewAll,c.PlatformUtils.isApp()?{
flex:1
}
:{

}
],children:e.state.isAssWordShow?'web'===v.Platform.OS&&(0,b.jsx)(v.ScrollView,{
showsVerticalScrollIndicator:!1,style:c.PlatformUtils.isApp()?{
flexGrow:1
}
:{
height:n-56
}
,contentContainerStyle:i.contentContainerStyle,onScrollBeginDrag:function(){
return e.blur()
}
,children:e._assWordListShow(i,t,o,r)
}
)||(0,b.jsx)(v.View,Object.assign({
style:{
height:n-56
}

}
,e._gestureHandlers.panHandlers,{
children:e._assWordListShow(i,t,o,r)
}
)):(0,b.jsx)(v.ScrollView,{
showsVerticalScrollIndicator:!1,style:c.PlatformUtils.isApp()?{
flexGrow:1
}
:{
height:n-56
}
,contentContainerStyle:i.contentContainerStyle,onScrollBeginDrag:function(){
return e.blur()
}
,keyboardShouldPersistTaps:'handled',bounces:!1,children:(0,b.jsx)(C.default,{
margin:t,width:r,navigation:e.props.navigation,configInfo:null==(l=e.props)?void 0:l.configInfo,searchId:e.state.searchId,isLogin:e.state.isLogin,blur:e.blur,updateValue:e.updateValue,carrierCode:e.carrierCode,searchFindList:e.state.hotSearchWord
}
)
}
)
}
)]
}
),'ios'===v.Platform.OS&&A>0&&(0,b.jsx)(v.View,{
style:{
backgroundColor:s.C32.color,width:'100%',height:A
}

}
)]
}
)
}

}
)
}

}
])
}
)(f.Component),a.defaultProps={
configInfo:{
searchHistoryShow:'true',searchHotListShow:'true'
}

}
,t=a))||t;
_e.SearchPageTest=k,_e.default=k
}
),"9b5592a50094674b2891b96412c72bd19173af335e0cf03cb727d031d985911f",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","4f07e73a9e2165e1638fd6b9832e0852a4d6f22242066978c95aad4487683e0b","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","9ad8f1ddc8345501d736be9fd99ea565ca653f36064bf96e9ee1bea70a254de0","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),n=e(r(d[2])),o=e(r(d[3])),s=e(r(d[4])),l=e(r(d[5])),u=r(d[6]),c=e(r(d[7])),h=r(d[8]),p=e(r(d[9])),f=r(d[10]);
// 函数
function y(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(y=function(){
return!!e
}
)()
}
var v=(function(e){
// 函数
function c(e: any): any {
var n,l,h,p;
return(0,t.default)(this,c),l=this,h=c,p=[e],h=(0,s.default)(h),(n=(0,o.default)(l,y()?Reflect.construct(h,p||[],(0,s.default)(l).constructor):h.apply(l,p))).wapBlurTimer=null,n.arr=[],n.isMp=u.PlatformUtils.isMp(),n.goToSearch=function(e){
if(n.isMp){
var t={
carrierCode:encodeURIComponent(n.props.carrierCode),keyWord:encodeURIComponent(e)
}
;
u.RouterUtils.gotoPage("/packageRnShop/index?carrierCode="+t.carrierCode+"&keyWord="+t.keyWord+"&pageAlias=shopSearchPage")
}
else{
// 变量
var o: any = n.props,s=o.navigation;
(0,o.updateValue)(e),s.navigate('shopResultPage',{
keyWord:e,pageAlias:'shopSearchPage'
}
)
}

}
,n.state={
searchFindList:[]
}
,n
}
return(0,l.default)(c,e),(0,n.default)(c,[{
key:"componentWillMount",value:function(){
// 变量
var e: any = this;
this._gestureHandlers=h.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onStartShouldSetPanResponderCapture:function(){
return!1
}
,onMoveShouldSetPanResponder:function(e,t){
return Math.abs(t.dx)>10||Math.abs(t.dy)>10
}
,onMoveShouldSetPanResponderCapture:function(){
return!1
}
,onPanResponderMove:function(){
e.props.blur()
}

}
)
}

}
,{
key:"componentWillUnmount",value:function(){
'web'!==h.Platform.OS&&this.wapBlurTimer&&clearTimeout(this.wapBlurTimer)
}

}
,{
key:"setLocalHistory",value:function(e){
if(''!==e){
// 变量
var t: any = 'searchHistoryList',n=[];
try{
'web'===h.Platform.OS&&(n=JSON.parse(window.localStorage.getItem(t)||'[]').filter((function(t){
return t!==e
}
)))
}
catch(e){

}
n.unshift(e),n.splice(10),'web'===h.Platform.OS&&window.localStorage.setItem(t,JSON.stringify(n))
}

}

}
,{
key:"render",value:function(){
var e,t=this,n=this.props.searchFindList,o=this.props.width-2*this.props.margin,s=function(e,n){
// 变量
var s: Function = [];
return null==n||n.forEach((function(n,l){
return s.push((0,f.jsx)(h.TouchableOpacity,{
onPress:function(){
return t.goToSearch(n)
}
,style:[e.hisItemBox,{
maxWidth:o
}
],children:(0,f.jsx)(h.Text,{
style:e.hisItemText,children:n
}
)
}
,l))
}
)),s
}
;
return this.isMp&&(n=n?n.split(','):[]),0!==(null==(e=n)?void 0:e.length)?(0,f.jsx)(u.WithTheme,{
themeStyles:p.default,children:function(e){
return(0,f.jsxs)(h.View,{
style:{
marginHorizontal:t.props.margin
}
,children:[(0,f.jsx)(h.View,{
style:e.searchHisBox,children:(0,f.jsx)(h.Text,{
style:e.hisText,children:(0,u.t)('search_discovery')
}
)
}
),u.PlatformUtils.isApp()?(0,f.jsx)(h.View,Object.assign({
style:e.hisTextBox
}
,t._gestureHandlers.panHandlers,{
children:s(e,n)
}
)):(0,f.jsx)(h.View,{
style:e.hisTextBox,children:s(e,n)
}
)]
}
)
}

}
):null
}

}
])
}
)(c.default.Component);
_e.default=v
}
),"4f07e73a9e2165e1638fd6b9832e0852a4d6f22242066978c95aad4487683e0b",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3783e661ede3c49d299113f305e60b9cf6c29562055bed92613f21a74ad08e0e","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
onLayout:{
backgroundColor:n.C32.color,width:'100%'
}
,titleBarStyle:{
marginBottom:0,marginLeft:0,height:56,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:n.C32.color,position:'web'===t.Platform.OS?'fixed':'absolute',top:0,left:0
}
,searchBox:Object.assign({
height:40,marginLeft:16,flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,n.S31,{
borderRadius:20,marginVertical:8,flex:1
}
),searchImgBox:{
height:40,flexDirection:'row',alignItems:'center',paddingLeft:12,paddingRight:8
}
,inputBox:{
height:40,flex:1
}
,inputText:Object.assign({
height:40
}
,n.T9,n.C11,{
paddingVertical:9
}
),otherText:Object.assign({

}
,n.T9,n.C15),crossImgBox:{
height:40,flexDirection:'row',alignItems:'center',paddingRight:16
}
,searchText:Object.assign({

}
,n.T8,n.C11,{
width:29
}
),viewAll:{
paddingTop:56,width:'100%',zIndex:-1
}
,contentContainerStyle:{
flexGrow:1,flexDirection:'column',justifyContent:'flex-start'
}
,searchHisBox:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:18,marginBottom:8.5
}
,hisText:Object.assign({

}
,n.T10,n.C11,{
textAlign:'left'
}
),hisTextBox:{
flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',alignItems:'center',marginRight:-8
}
,hisItemBox:Object.assign({
marginRight:8,marginBottom:8,borderRadius:20
}
,n.S13,{
paddingHorizontal:8,paddingVertical:6,height:28
}
),hisItemText:Object.assign({

}
,n.T3,n.C12,{
textAlign:'center'
}
),hotRedBox:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,hotRedBottom:{
flexDirection:'column',marginBottom:4
}
,hotRedItemBox:{
flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingVertical:4
}
,indexText:Object.assign({

}
,n.C15,{
fontSize:12,fontWeight:'900',fontFamily:'Roboto-BlackItalic',fontStyle:'italic',marginRight:30
}
),hotRedItemNum:{
marginRight:8
}
,hotRedItemImgView:{
marginRight:12
}
,hotRedItemImg:{
width:48,height:48,borderRadius:4
}
,hotRedItemText:Object.assign({

}
,n.T5,n.C11),wordItem:{
height:48,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomColor:n.C39.color+n.opacityMap[n.C39.opacity],borderStyle:'solid',borderBottomWidth:'ios'===t.Platform.OS?.5:1,overflow:'hidden'
}
,word:{
flexDirection:'row',justifyContent:'flex-start',flex:1,maxHeight:21,overflow:'hidden'
}
,wordLabels:{
flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flexWrap:'wrap',height:28,overflow:'hidden',marginRight:-8,marginLeft:8
}
,labelView:{
borderRadius:20,backgroundColor:n.C39.color+n.opacityMap[n.C39.opacity],paddingHorizontal:8,paddingVertical:6,height:28,marginRight:8
}
,labelText:Object.assign({

}
,n.T3,{
color:n.C21.color+n.opacityMap[n.C21.opacity]
}
),maskGray:{
width:32,height:48,position:'absolute',top:-13.5,right:0
}
,wordText:Object.assign({

}
,n.T9,{
color:n.C11.color+n.opacityMap[n.C11.opacity]
}
),wordTextAss:{
color:n.C14.color+n.opacityMap[n.C14.opacity]
}
,hotBorderView:{
marginLeft:4,borderRadius:4,borderColor:n.C95.color+'80',borderStyle:'solid',borderWidth:.5,backgroundColor:n.C95.color+'0D',height:14,alignItems:'center',justifyContent:'center',width:14
}
,hotBorderViewWap:{
padding:1.5
}
,newBorderView:{
borderColor:n.C91.color+'80',backgroundColor:n.C91.color+'0D'
}
,hotText:{
textAlign:'center',color:n.C95.color,fontSize:10,fontWeight:'600',lineHeight:14,fontFamily:o.PublicFont.fontFamilyMedium
}
,newText:{
color:n.C91.color
}
,hotTextApp:{
lineHeight:13
}
,hotTextWap:{
transform:[{
scale:.8333333333333334
}
],fontSize:12,lineHeight:12
}

}
)
}

}
),"3783e661ede3c49d299113f305e60b9cf6c29562055bed92613f21a74ad08e0e",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
onLayout:{
backgroundColor:n.C32.color,width:'100%',minHeight:t.Dimensions.get('window').height
}
,titleBarStyle:{
alignItems:'center',backgroundColor:n.C32.color,flexDirection:'row',height:56,left:0,marginBottom:0,marginLeft:0,justifyContent:'space-between',position:'web'===t.Platform.OS?'fixed':'absolute',top:'web'!==t.Platform.OS&&t.StatusBar.currentHeight,width:'100%'
}
,searchBox:Object.assign({
alignItems:'center',borderRadius:20,height:40,flex:1,flexDirection:'row',justifyContent:'space-between',marginLeft:16,marginVertical:8
}
,n.S31),searchImgBox:{
alignItems:'center',flexDirection:'row',height:40,paddingLeft:12,paddingRight:8
}
,inputBox:{
height:40,flex:1
}
,inputText:Object.assign({
height:40,paddingVertical:9
}
,n.T9,n.C11),inputTextMp:{
height:0
}
,otherText:Object.assign({

}
,n.T9,n.C15),crossImgBox:{
alignItems:'center',flexDirection:'row',height:40,paddingRight:16
}
,searchText:Object.assign({
width:50
}
,n.T8,n.C11),viewAll:{
paddingTop:'web'===t.Platform.OS||o.PlatformUtils.isMp()?56:56+(null==t.StatusBar?void 0:t.StatusBar.currentHeight),width:'100%',zIndex:-1
}
,contentContainerStyle:{
flexDirection:'column',flexGrow:1,justifyContent:'flex-start'
}
,searchHisBox:{
alignItems:'center',flexDirection:'row',justifyContent:'space-between',marginBottom:8.5,marginTop:18
}
,hisText:Object.assign({
textAlign:'left'
}
,n.T10,n.C11),hisTextBox:{
alignItems:'center',flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',marginRight:-8
}
,hisItemBox:Object.assign({
borderRadius:20,height:28,marginRight:8,marginBottom:8,paddingHorizontal:8,paddingVertical:6
}
,n.S13),hisItemText:Object.assign({
textAlign:'center'
}
,n.T3,n.C12),hotRedBox:{
alignItems:'center',flexDirection:'row',justifyContent:'space-between'
}
,hotRedBottom:{
flexDirection:'column',marginBottom:4
}
,hotRedItemBox:{
alignItems:'center',flexDirection:'row',justifyContent:'flex-start',paddingVertical:4
}
,indexText:Object.assign({
marginRight:30
}
,n.C15,{
fontSize:12,fontWeight:'900',fontFamily:'Roboto-BlackItalic',fontStyle:'italic'
}
),hotRedItemNum:{
marginRight:8
}
,hotRedItemImgView:{
marginRight:12
}
,hotRedItemImg:{
width:48,height:48,borderRadius:4
}
,hotRedItemText:Object.assign({

}
,n.T5,n.C11),wordItem:{
alignItems:'center',borderBottomColor:n.C39.color+n.opacityMap[n.C39.opacity],borderBottomWidth:'ios'===t.Platform.OS?.5:1,borderStyle:'solid',flexDirection:'row',height:48,justifyContent:'space-between',overflow:'hidden'
}
,word:{
flex:1,flexDirection:'row',justifyContent:'flex-start',maxHeight:21,overflow:'hidden'
}
,wordLabels:{
alignItems:'center',flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-end',height:28,marginLeft:8,marginRight:-8,overflow:'hidden'
}
,labelView:{
backgroundColor:n.C39.color+n.opacityMap[n.C39.opacity],borderRadius:20,height:28,marginRight:8,paddingHorizontal:8,paddingVertical:6
}
,labelText:Object.assign({

}
,n.T3,{
color:n.C21.color+n.opacityMap[n.C21.opacity]
}
),maskGray:{
height:48,position:'absolute',right:0,top:-13.5,width:32
}
,wordText:Object.assign({

}
,n.T9,{
color:n.C11.color+n.opacityMap[n.C11.opacity]
}
),wordTextAss:{
color:n.C14.color+n.opacityMap[n.C14.opacity]
}

}
)
}

}
),"9ad8f1ddc8345501d736be9fd99ea565ca653f36064bf96e9ee1bea70a254de0",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(_r(d[1])),i=e(_r(d[2])),n=e(_r(d[3])),r=e(_r(d[4])),s=e(_r(d[5])),a=e(_r(d[6])),l=_r(d[7]),c=e(_r(d[8])),h=_r(d[9]),p=L(_r(d[10])),u=_r(d[11]),f=e(_r(d[12])),v=_r(d[13]),y=e(_r(d[14])),S=e(_r(d[15])),w=_r(d[16]),C=e(_r(d[17])),P=e(_r(d[18])),x=_r(d[19]),I=L(_r(d[20])),j=_r(d[21]),T=_r(d[22]);
// 函数
function E(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,o=new WeakMap;
return(E=function(e){
return e?o:t
}
)(e)
}
// 函数
function L(e: any, t: any): any {
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = E(t);
if(o&&o.has(e))return o.get(e);
var i={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var s: Function = n?Object.getOwnPropertyDescriptor(e,r):null;
s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]
}
return i.default=e,o&&o.set(e,i),i
}
// 函数
function k(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(k=function(){
return!!e
}
)()
}
var B=u.StatusBar.currentHeight;
'ios'===u.Platform.OS&&l.DeviceUtils.getStatusBarHeight().then((function(e){
B=e
}
)).catch((function(){

}
));
var U=(0,h.observer)(t=(function(e){
// 函数
function t(e: any): any {
var n,a,h,p,y,S,C,P,E,L,B,U,b,O,M,V,N,R,_,A,D,H,W,F;
(0,i.default)(this,t),H=this,W=t,F=[e],W=(0,s.default)(W),(D=(0,r.default)(H,k()?Reflect.construct(W,F||[],(0,s.default)(H).constructor):W.apply(H,F))).isMp=l.PlatformUtils.isMp(),D.handlePrivacy=(0,o.default)((function*(){
if(yield l.AppStore.getIsLogin(),l.AppStore.isLogin){
// 变量
var e: any = (0,j._queryUserInfo)();
D.setState({
userInfo:e
}
)
}

}
)),D.handleAddListeners=function(){
l.PlatformUtils.isMp()&&(D.props.setEventCallBack&&D.props.setEventCallBack(D.handleEventCallBack),D.showPrivacyLister=u.DeviceEventEmitter.addListener('showPrivacy',(function(e){
D.pageShow&&(v.PrivacyStore.setAgreementInfo(e),v.PrivacyStore.agreementInfo&&D.setState({
privacyKey:D.state.privacyKey+1
}
))
}
)))
}
,D.pageShow=!0,D.handleEventCallBack=function(e){
switch(e){
case'onShow':D.pageShow=!0;
break;
case'onHide':case'onUnload':D.pageShow=!1,'onUnload'===e&&v.PrivacyStore.setAgreementInfo(null);
break;
default:D.pageShow=!1
}

}
,D.getShopCert=function(e){
(0,x.queryShopCert)(e).then((function(e){
var t,o=null==e||null==(t=e.data)?void 0:t.carrierCertList;
o&&Promise.all(o.map((function(e){
return new Promise((function(t,o){
// 变量
var i: any = e.certUrl;
u.Image.getSize(i,(function(o,i){
t(Object.assign({

}
,e,{
imgProportion:i/o
}
))
}
),o)
}
))
}
))).then((function(e){
D.setState({
carrierCertList:e
}
)
}
)).finally((function(){
D.setState({
isLoading:!1
}
)
}
))
}
))
}
,D.getShopInfo=function(e){
(0,x.queryShopInfo)(e).then((function(e){
if(e){
var t,o,i=null==e||null==(t=e.data)?void 0:t.shopDSRVo,n=null==e||null==(o=e.data)?void 0:o.shopBaseInfoVo;
D.setState({
isShowPageInfo:!0,commentScore:null==i?void 0:i.commentScore,logisticsCommentScore:null==i?void 0:i.logisticsCommentScore,postSalesServiceScore:null==i?void 0:i.postSalesServiceScore,shopIntroduction:null==n?void 0:n.shopIntroduction,shopH5QRCodeUrl:null==n?void 0:n.shopH5QRCodeUrl,shopH5Url:null==n?void 0:n.shopH5Url,shopMobileUrl:null==n?void 0:n.shopMobileUrl,shopName:null==n?void 0:n.shopName,isShowScore:!c.default.isEmpty(i)
}
)
}

}
))
}
,D.getWidthAndHeight=function(e,t){
D.state.height!==t&&D.setState({
height:t
}
)
}
,D.onPressBack=function(){
if(D.leaveDapReport(),l.PlatformUtils.isApp()){
// 变量
var e: any = D.props.navigation,t=e.canGoBack,o=e.goBack;
t&&t()&&o()
}
return!0
}
,D.leaveDapReport=function(){
'web'===u.Platform.OS?D.unload():D.eventTracingReportByLeave()
}
,D.unload=function(){
var e;
if('function'==typeof(null==(e=navigator)?void 0:e.sendBeacon)){
var t=[l.BuildParams.buildWebWapPostParams({
actionCode:'200580018',actionName:'\u5e97\u94fa\u4fe1\u606f\u9875\u79bb\u5f00\u4e0a\u62a5',eventType:l.EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:D.pageId,content:{
load:'1',CarrierCode:D.carrierCode
}
,pageCatCode:w.pageCategory.shopInfo.pageCatCode,pageCatName:(0,l.t)(w.pageCategory.shopInfo.pageCatName)
}
)],o={
type:'application/json',language:l.MCP_LANG.CN,encoding:'gzip',data:(new Date).getTime()
}
,i=new Blob([JSON.stringify(t)],o);
navigator.sendBeacon(l.Service.reportBatchUrl+'?'+(new Date).getTime(),i)
}

}
,D.eventTracingReportByLoad=function(){
// 变量
var e: any = l.PlatformUtils.isApp()?'100660012':'200580012';
l.EventTracking.eventTracingReport({
actionCode:e,actionName:'\u5e97\u94fa\u4fe1\u606f\u9875\u52a0\u8f7d\u4e0a\u62a5',eventType:l.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:D.pageId,content:{
load:'1',CarrierCode:D.carrierCode
}
,pageCatCode:w.pageCategory.shopInfo.pageCatCode,pageCatName:(0,l.t)(w.pageCategory.shopInfo.pageCatName)
}
),l.EventTracking.execReportData('',!0)
}
,D.eventTracingReportByLeave=function(){
// 变量
var e: any = l.PlatformUtils.isApp()?'100660018':'200580018';
l.EventTracking.eventTracingReport({
actionCode:e,actionName:'\u5e97\u94fa\u4fe1\u606f\u9875\u79bb\u5f00\u4e0a\u62a5',eventType:l.EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:D.pageId,content:{
load:'1',CarrierCode:D.carrierCode
}
,pageCatCode:w.pageCategory.shopInfo.pageCatCode,pageCatName:(0,l.t)(w.pageCategory.shopInfo.pageCatName)
}
),l.EventTracking.execReportData('',!0)
}
,D.drawLinear=function(e,t,o,i,n){
var r,s,a=l.PlatformUtils.isPc(n)?600:120,c=t/5*a;
return(0,T.jsxs)(u.View,{
style:o.item,children:[(0,T.jsx)(u.View,{
style:o.textBlock,children:(0,T.jsx)(u.Text,{
style:o.text,children:e
}
)
}
),(0,T.jsx)(u.View,{
style:o.lineblock,children:(0,T.jsx)(u.View,{
style:[o.linebgr,{
width:a
}
],children:(0,T.jsx)(f.default,{
start:{
x:0,y:0
}
,end:{
x:.3,y:0
}
,style:[o.progressBar,{
width:c
}
],colors:[null==i||null==(r=i.C45)?void 0:r.color[0],null==i||null==(s=i.C45)?void 0:s.color[1]]
}
)
}
)
}
),(0,T.jsx)(u.View,{
style:o.scoreBlock,children:(0,T.jsx)(u.Text,{
style:o.score,children:t
}
)
}
)]
}
)
}
,D.goShop=function(){
// 变量
var e: any = D.state,t=e.shopH5Url,o=e.shopMobileUrl,i='';
l.PlatformUtils.isApp()?(i=o,D.eventTracingReportByLeave()):D.isMp?(D.eventTracingReportByLeave(),wx.navigateBack()):(i=t,D.unload()),i&&l.RouterUtils.gotoPage(i)
}
,D.showCodePhoto=function(){
D.setState({
isShowCode:!0
}
)
}
,D.closeCodePhoto=function(){
D.setState({
isShowCode:!1
}
)
}
,D.showShopPhoto=function(){
D.setState({
isShopPhoto:!0
}
)
}
,D.closeShopPhoto=function(){
D.setState({
isShopPhoto:!1
}
)
}
,D.onLayout=function(e){
(0,l.layout)(e,I.SHOP_INFO_PAGE)
}
;
var G,Y=D.props.route;
if(l.PlatformUtils.isMp()){
var z=getCurrentPages();
z.length&&(G=z[z.length-1])
}
return D.carrierCode=null!=(n=null!=(a=c.default.get(Y,'params.carrierCode'))?a:null==(h=G)||null==(p=h.options)?void 0:p.carrierCode)?n:'',D.configInfo=null!=(y=c.default.get(Y,'params.configInfo'))?y:decodeURIComponent(null!=(S=null==(C=G)||null==(P=C.options)?void 0:P.configInfo)?S:''),D.pageId=null!=(E=c.default.get(Y,'params.pageId'))?E:decodeURIComponent(null!=(L=null==(B=G)||null==(U=B.options)?void 0:U.pageId)?L:''),D.pageType=null!=(b=c.default.get(Y,'params.pageType'))?b:decodeURIComponent(null!=(O=null==(M=G)||null==(V=M.options)?void 0:V.pageType)?O:''),D.shopInfo=null!=(N=c.default.get(Y,'params.shopInfo'))?N:decodeURIComponent(null!=(R=null==(_=G)||null==(A=_.options)?void 0:A.shopInfo)?R:''),D.state={
isShowCode:!1,isShopPhoto:!1,isShowPageInfo:!1,commentScore:'',logisticsCommentScore:'',postSalesServiceScore:'',shopIntroduction:'',shopH5QRCodeUrl:'',shopH5Url:'',shopMobileUrl:'',carrierCertList:[],shopName:'',isShowScore:!1,imgHeihtList:[],hoverStatus:!1,hoverShopStatus:!1,height:l.CommonUtils.getWindowSize(I.SHOP_INFO_PAGE).screenHeight,userInfo:null,privacyKey:0,isLoading:!0
}
,D.props.setEventCallBack&&D.props.setEventCallBack(D.handleEventCallBack),D
}
return(0,a.default)(t,e),(0,n.default)(t,[{
key:"componentWillMount",value:function(){

}

}
,{
key:"componentDidMount",value:function(){
var e,t,o,i,n=this;
this.handlePrivacy();
// 变量
var r: any = this.carrierCode;
this.getShopInfo(r),this.getShopCert(r),this.navListener1=null==(e=this.props)||null==(t=e.navigation)?void 0:t.addListener('focus',(function(){
n.eventTracingReportByLoad()
}
)),this.listerBack=u.BackHandler.addEventListener('hardwareBackPress',this.onPressBack),this.listerExpBack=u.DeviceEventEmitter.addListener('shopInfoBack',(function(){
n.leaveDapReport()
}
)),this.navListener1=null==(o=this.props)||null==(i=o.navigation)?void 0:i.addListener('blur',(function(){
n.leaveDapReport()
}
)),'web'===u.Platform.OS&&window.addEventListener('unload',this.unload),l.PlatformUtils.isAndroid()&&(this.listenerSwitch=l.DeviceUtils.getWidthHeightChange(this.getWidthAndHeight,l.PAGE_TYPE.shop)),this.handleAddListeners()
}

}
,{
key:"componentWillUnmount",value:function(){
this.listerExpBack&&this.listerExpBack.remove(),this.listerBack&&this.listerBack.remove(),this.listenerSwitch&&this.listenerSwitch.remove(),'web'===u.Platform.OS&&window.removeEventListener('unload',this.unload),this.navListener1&&'function'==typeof this.navListener1&&this.navListener1(),l.PlatformUtils.isMp()&&this.showPrivacyLister&&this.showPrivacyLister.remove()
}

}
,{
key:"shopCert",value:function(){
// 变量
var e: any = this,t=this.state.carrierCertList;
return t.map((function(o,i){
var n,r,s,a=l.CommonUtils.getWindowSize('shop').screenWidth-32;
e.isMp&&(a=(null==(r=wx)||null==r.getSystemInfoSync||null==(s=r.getSystemInfoSync())?void 0:s.windowWidth)-32);
// 变量
var c: any = a*(null!=(n=Number(o.imgProportion))?n:1);
return t&&(0,T.jsx)(v.FastImageView,{
mode:'aspectFit',imgUri:null==o?void 0:o.certUrl,imgStyle:{
width:a,height:c
}
,imgWidth:a,resizeMode:'contain'
}
,i)
}
))
}

}
,{
key:"renderQrCodeIcon",value:function(e){
return this.isMp?(0,T.jsx)(u.Image,{
style:{
width:24,height:24
}
,source:{
uri:y.default.shopQrCode
}

}
):(0,T.jsx)(v.SvgIcon,{
iconName:"ic_code",width:"24",height:"24",normalCol:e.C13.color
}
)
}

}
,{
key:"renderFloatLine",value:function(e){
return this.isMp?(0,T.jsx)(u.Image,{
style:{
width:64,height:24
}
,source:{
uri:y.default.floatLine
}

}
):(0,T.jsx)(v.SvgIcon,{
iconName:"normal",width:"132",height:"4",normalCol:e.C16.color,opacity:e.C16.opacity
}
)
}

}
,{
key:"render",value:function(){
var e,t,o=this,i=this.state,n=i.shopIntroduction,r=i.commentScore,s=i.logisticsCommentScore,a=i.postSalesServiceScore,c=i.shopH5QRCodeUrl,h=i.shopName,p=i.height,f=i.userInfo,x=i.privacyKey,E=this.props.navigation,L=this.isMp&&(null==(e=wx)||null==e.getSystemInfoSync||null==(t=e.getSystemInfoSync())?void 0:t.windowHeight),k=this.isMp?L:p,U=this.isMp?u.View:u.ScrollView,b=(0,j.getCurOrderType)(v.dialogOrderStore.curDialogOrder),O=v.dialogOrderStore.curDialogOrder!==v.dialogOrderManager.Order.ORDER_NONE&&b&&(0,j.getDialogViewByOrder)(v.dialogOrderStore.curDialogOrder,'followShop'),M=k-56-164;
return(0,T.jsxs)(T.Fragment,{
children:[O&&(0,T.jsx)(v.Privacy,{
info:b.info,pageId:'followShop',userInfo:f,setSaleInfoCfgOff:l.HttpService.setSaleInfoCfgOff,setSaleInfoCfgOn:l.HttpService.setSaleInfoCfgOn,signingResults:l.HttpService.signingResults
}
),(0,T.jsx)(l.WithTheme,{
themeStyles:I.default,children:function(e,t,i){
return(0,T.jsxs)(T.Fragment,{
children:[(0,T.jsx)(u.View,{
style:[{
backgroundColor:t.C32.color,width:'100%'
}
,'web'!==u.Platform.OS&&{
height:B
}
]
}
),(0,T.jsxs)(u.View,{
style:[e.onLayout,{
minHeight:p
}
,l.PlatformUtils.isApp()?{
flex:1
}
:{

}
,o.isMp&&{
minHeight:L
}
],onLayout:o.onLayout,children:[l.PlatformUtils.isPc(i)?(0,T.jsx)(v.ToolBar,{
style:e.toolbar
}
):null,o.isMp?null:(0,T.jsx)(C.default,Object.assign({

}
,o.props,{
isPrdList:!1,title:"\u5e97\u94fa\u4fe1\u606f",isSearch:!0
}
)),l.PlatformUtils.isPc(i)?(0,T.jsx)(P.default,{
shopName:h,thirdName:'\u5e97\u94fa\u4fe1\u606f',navigation:E
}
):null,o.state.isShowPageInfo&&(0,T.jsx)(u.ScrollView,{
showsVerticalScrollIndicator:!1,children:(0,T.jsxs)(u.View,{
style:[e.content,l.PlatformUtils.isPc(i)&&e.largeContent,o.isMp&&e.mpContent],children:[(0,T.jsx)(u.View,{
style:e.shopItem,children:(0,T.jsx)(S.default,{
configInfo:o.configInfo,pageId:o.pageId,pageType:o.pageType,shopInfo:o.shopInfo,isShopInfo:!0,pageCatCode:w.pageCategory.shopInfo.pageCatCode,pageCatName:(0,l.t)(w.pageCategory.shopInfo.pageCatName),carrierCode:o.carrierCode
}
)
}
),o.state.isShowScore&&(0,T.jsxs)(u.View,{
style:[e.block,l.PlatformUtils.isPc(i)&&e.largeBlock],children:[o.drawLinear("\u5546\u54c1",r,e,t,i),o.drawLinear("\u7269\u6d41",s,e,t,i),o.drawLinear("\u552e\u540e",a,e,t,i)]
}
),(0,T.jsxs)(u.View,{
style:[e.descriptionBlock,l.PlatformUtils.isPc(i)&&e.largeBlock],children:[(0,T.jsxs)(u.View,{
style:e.shopDescription,children:[(0,T.jsx)(u.View,{
style:{
width:70
}
,children:(0,T.jsx)(u.Text,{
style:[e.text],children:"\u5e97\u94fa\u7b80\u4ecb"
}
)
}
),(0,T.jsx)(u.Text,{
style:e.titleDes,children:n
}
)]
}
),(0,T.jsx)(u.TouchableOpacity,{
onPress:function(){
return o.showCodePhoto()
}
,children:(0,T.jsxs)(u.View,{
style:e.ImgBlock,children:[(0,T.jsx)(u.View,{
style:{
flex:1
}
,children:(0,T.jsx)(u.Text,{
style:[e.text],children:"\u5e97\u94fa\u4e8c\u7ef4\u7801"
}
)
}
),o.renderQrCodeIcon(t)]
}
)
}
),(0,T.jsx)(u.TouchableOpacity,{
onPress:function(){
return o.showShopPhoto()
}
,children:(0,T.jsxs)(u.View,{
style:e.ImgBlock,children:[(0,T.jsx)(u.View,{
style:{
flex:1
}
,children:(0,T.jsx)(u.Text,{
style:[e.text],children:"\u5e97\u94fa\u8bc1\u7167"
}
)
}
),(0,T.jsx)(u.Image,{
style:e.Img,source:o.isMp?{
uri:y.default.shopPhoto
}
:y.default.shopPhoto
}
)]
}
)
}
)]
}
),(0,T.jsx)(u.TouchableOpacity,{
style:[e.Wander,l.PlatformUtils.isPc(i)&&e.largeBlock],onPress:function(){
return o.goShop()
}
,children:(0,T.jsx)(u.Text,{
style:e.wanderText,children:"\u53bb\u901b\u901b"
}
)
}
)]
}
)
}
),l.PlatformUtils.isPc(i)?(0,T.jsx)(v.Footer,{

}
):null]
}
),o.state.isShowCode&&(0,T.jsx)(u.TouchableOpacity,{
style:[e.bgAll,{
height:k,width:i
}
,o.isMp&&Object.assign({

}
,e.mpModalPosition)],onPress:function(){
return o.closeCodePhoto()
}
,children:(0,T.jsxs)(u.View,{
style:[e.codeWindow,{
top:(p-286)/2,marginBottom:(p-286)/2
}
,l.PlatformUtils.isPc(i)&&e.largeCodeWindow,o.isMp&&e.codeWindowMp],children:[(0,T.jsx)(u.Text,{
style:e.windowTitle,numberOfLines:1,ellipsizeMode:'tail',children:h
}
),(0,T.jsx)(u.Text,{
style:e.share,children:"\u9080\u8bf7\u597d\u53cb\u6765\u626b\u4e00\u626b\u5206\u4eab\u5e97\u94fa\u7ed9TA"
}
),(0,T.jsx)(u.View,{
style:e.codeImgBlock,children:(0,T.jsx)(u.Image,{
style:e.codeImg,source:{
uri:c
}

}
)
}
)]
}
)
}
),o.state.isShopPhoto&&(0,T.jsxs)(u.View,{
style:[e.bgAll,{
height:k,width:i
}
,o.isMp&&Object.assign({

}
,e.mpModalPosition)],children:[(0,T.jsxs)(u.View,{
style:[e.shopWindow,{
height:k-88
}
],children:[(0,T.jsx)(u.View,{
style:[e.closebar,o.isMp&&e.closebarMp],children:(0,T.jsx)(u.TouchableOpacity,{
onPress:function(){
return o.closeShopPhoto()
}
,children:o.renderFloatLine(t)
}
)
}
),(0,T.jsxs)(u.View,{
style:{
flexDirection:'row',paddingLeft:16,paddingRight:16,height:28
}
,children:[(0,T.jsx)(u.Text,{
style:e.shopTitle,children:"\u5e97\u94fa\u8bc1\u7167"
}
),(0,T.jsx)(u.TouchableOpacity,{
onPress:function(){
return o.closeShopPhoto()
}
,children:(0,T.jsx)(u.Image,{
style:{
height:24,width:24
}
,source:o.isMp?{
uri:y.default.bottomsheetClose
}
:y.default.bottomsheetClose
}
)
}
)]
}
),(0,T.jsx)(u.View,{
style:[e.shopImgBlock,{
height:M
}
,o.isMp&&{
overflow:'auto',display:'block'
}
],children:(0,T.jsx)(U,{
style:[l.PlatformUtils.isApp()||o.isMp?{
flexGrow:1
}
:{
height:164
}
,o.isMp&&{
alignItems:'center'
}
],showsVerticalScrollIndicator:!1,children:o.state.isLoading?(0,T.jsx)(v.LoadingView,{
showLoading:!0,loadState:1,height:M,iconSize:56
}
):o.shopCert()
}
)
}
)]
}
),(0,T.jsx)(u.TouchableOpacity,{
style:[e.btn,{
width:i-32,bottom:0
}
],onPress:function(){
return o.closeShopPhoto()
}
,children:(0,T.jsx)(u.Text,{
style:e.yes,children:"\u786e\u8ba4"
}
)
}
)]
}
),v.PrivacyStore.agreementInfo&&o.pageShow&&(0,T.jsx)(v.Privacy,{
pageType:l.PAGE_TYPE.shop,agreementInfo:v.PrivacyStore.agreementInfo
}
,x)]
}
)
}

}
)]
}
)
}

}
])
}
)(p.Component))||t;
_e.default=U
}
),"db1f04441986657eeeb1fd4d0112294a69281e97af9cdfa6f7d23a1d482a90a0",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","b1f64471da748db7ce4a9a055df3f635d5d5e3ae7cccc681d73ca876236ae616","4fde0ec23f0a83d4630248afa78edfeb658db70fc471de42e1f50681c37b7d43","371d57e6f348eb4ebd44712381e1bada997ab824c27209f5ad724cc70810c8f9","58abfe69edc7bdc9aeb7a89c6be167e6864c287a48905ba0a1947afcdad41249","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","28fb6dc01de4b7374bb5980fb809e25de6bf41c1038d9ec45d993543faa60c03","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),o=e(_r(d[2])),n=e(_r(d[3])),r=e(_r(d[4])),u=e(_r(d[5])),i=_r(d[6]),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = f(t);
if(o&&o.has(e))return o.get(e);
var n={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var u in e)if("default"!==u&&{

}
.hasOwnProperty.call(e,u)){
// 变量
var i: any = r?Object.getOwnPropertyDescriptor(e,u):null;
i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]
}
return n.default=e,o&&o.set(e,n),n
}
)(_r(d[7])),s=_r(d[8]),h=e(_r(d[9])),l=_r(d[10]),c=_r(d[11]);
// 函数
function f(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,o=new WeakMap;
return(f=function(e){
return e?o:t
}
)(e)
}
// 函数
function p(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(p=function(){
return!!e
}
)()
}
_e.default=(function(e){
// 函数
function a(e: any): any {
var o,u,i,s;
return(0,t.default)(this,a),u=this,i=a,s=[e],i=(0,r.default)(i),(o=(0,n.default)(u,p()?Reflect.construct(i,s||[],(0,r.default)(u).constructor):i.apply(u,s))).timer=null,o.state={
hoverStatus:!1,hoverShopStatus:!1,hoverThirdStatus:!1,shopName:e.shopName
}
,o
}
return(0,u.default)(a,e),(0,o.default)(a,[{
key:"gotIndex",value:function(){
i.RouterUtils.gotoPage('/',!0)
}

}
,{
key:"goShopHome",value:function(){
// 变量
var e: any = this.props,t=e.thirdName,o=e.navigation.navigate;
t&&o('ShopDefault')
}

}
,{
key:"mouseinTab",value:function(){
this.setState({
hoverStatus:!0
}
)
}

}
,{
key:"_mouseinTab",value:function(){
this.setState({
hoverShopStatus:!0
}
)
}

}
,{
key:"mouseoutSubmitBtn",value:function(){
this.setState({
hoverStatus:!1
}
)
}

}
,{
key:"_mouseoutSubmitBtn",value:function(){
this.setState({
hoverShopStatus:!1
}
)
}

}
,{
key:"mouseinThirdTab",value:function(){
this.setState({
hoverThirdStatus:!0
}
)
}

}
,{
key:"mouseoutThirdTab",value:function(){
this.setState({
hoverThirdStatus:!1
}
)
}

}
,{
key:"handlershopInfo",value:function(){
// 变量
var e: any = this,t=this.props.carrierCode;
this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){
(0,l.queryShopInfo)(t).then((function(t){
if(t){
var o=t.data||{

}
;
if(null!=o&&o.shopBaseInfoVo){
// 变量
var n: any = o.shopBaseInfoVo.shopName||'';
e.setState({
shopName:n
}
)
}

}

}
))
}
),300)
}

}
,{
key:"UNSAFE_componentWillReceiveProps",value:function(e){
this.props.shopName!==e.shopName&&e.shopName?this.setState({
shopName:e.shopName
}
):this.props.shopName||e.shopName||this.state.shopName||!this.props.carrierCode||this.handlershopInfo()
}

}
,{
key:"componentWillUnmount",value:function(){
this.timer&&clearTimeout(this.timer)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,o=t.hoverStatus,n=t.hoverShopStatus,r=t.hoverThirdStatus,u=t.shopName,a=this.props.thirdName;
return(0,c.jsx)(i.WithTheme,{
themeStyles:h.default,children:function(t){
return(0,c.jsxs)(s.View,{
style:t.breadcrumb,children:[(0,c.jsx)(i.Hoverable,{
onHoverIn:function(){
return e._mouseinTab()
}
,onHoverOut:function(){
return e._mouseoutSubmitBtn()
}
,children:(0,c.jsx)(s.TouchableOpacity,{
onPress:function(){
return e.gotIndex()
}
,activeOpacity:.7,children:(0,c.jsx)(s.Text,{
style:[t.home,n?t.wordHover:null],children:(0,i.t)('tab_index')
}
)
}
)
}
),(0,c.jsx)(s.Text,{
style:t.home,children:"\xa0>\xa0"
}
),(0,c.jsx)(i.Hoverable,{
onHoverIn:function(){
return e.mouseinTab()
}
,onHoverOut:function(){
return e.mouseoutSubmitBtn()
}
,children:(0,c.jsx)(s.TouchableOpacity,{
onPress:function(){
return e.goShopHome()
}
,activeOpacity:.7,children:(0,c.jsx)(s.Text,{
numberOfLines:1,style:[t.keyword,o?t.wordHover:null],children:e.props.shopName||u
}
)
}
)
}
),a?(0,c.jsxs)(c.Fragment,{
children:[(0,c.jsx)(s.Text,{
style:t.home,children:"\xa0>\xa0"
}
),(0,c.jsx)(i.Hoverable,{
onHoverIn:function(){
return e.mouseinThirdTab()
}
,onHoverOut:function(){
return e.mouseoutThirdTab()
}
,children:(0,c.jsx)(s.TouchableOpacity,{
children:(0,c.jsx)(s.Text,{
numberOfLines:1,style:[t.keyword,r?t.wordHover:null],children:null!=a?a:''
}
)
}
)
}
)]
}
):null]
}
)
}

}
)
}

}
])
}
)(a.Component)
}
),"58abfe69edc7bdc9aeb7a89c6be167e6864c287a48905ba0a1947afcdad41249",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","98e30514db8a84ec761f66fc8bef108580b6c38985c3e4e8c12ee84e13c2fe7a","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
breadcrumb:{
width:'100%',maxWidth:1200,marginLeft:'auto',marginRight:'auto',display:'flex',flexDirection:'row',alignItems:'center',height:16,marginTop:24,marginBottom:24
}
,wordHover:{
color:'#CF0A2C'
}
,home:Object.assign({
fontSize:o.T4.fontSize,lineHeight:15,fontWeight:'300',fontFamily:'HYQiHei-EES'
}
,o.C11),keyword:Object.assign({
fontSize:o.T4.fontSize,lineHeight:15,fontWeight:'500',fontFamily:'HYQiHei-FES'
}
,o.C11,{
maxWidth:1162
}
)
}
)
}

}
),"98e30514db8a84ec761f66fc8bef108580b6c38985c3e4e8c12ee84e13c2fe7a",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=e.SHOP_INFO_PAGE=void 0;
var t,o=r(d[0]),n=r(d[1]),l=e.SHOP_INFO_PAGE='shopInfo',s='ios'===o.Platform.OS?0:null!=(t=null==o.StatusBar?void 0:o.StatusBar.currentHeight)?t:0,c='web'===o.Platform.OS?n.CommonUtils.getWindowSize(l).screenHeight:n.CommonUtils.getWindowSize(l).screenHeight-s,h='web'===o.Platform.OS||n.PlatformUtils.isMp()?88:s+88;
e.default=function(t){
return o.StyleSheet.create({
onLayout:{
backgroundColor:t.C32.color,width:'100%',minHeight:c
}
,progressBar:{
width:108,height:12,borderRadius:12
}
,linebgr:{
backgroundColor:t.C38.color+'1A',overflow:'hidden',width:120,borderRadius:12,height:12,opacity:.9
}
,lineblock:{
paddingLeft:28,paddingTop:18,flexDirection:'row'
}
,block:{
height:152,backgroundColor:t.C33.color,marginLeft:16,marginRight:16,borderRadius:16,marginTop:12,justifyContent:'space-between',flexDirection:'column'
}
,largeBlock:{
maxWidth:1200,width:1200,marginLeft:'auto',marginRight:'auto',borderRadius:0
}
,item:{
height:48,borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.03)',flexDirection:'row',marginLeft:12,marginRight:12
}
,text:Object.assign({

}
,t.T7,t.C13),textBlock:{
height:56,paddingTop:15,paddingBottom:14,width:68
}
,scoreBlock:{
paddingLeft:12,paddingTop:15
}
,score:Object.assign({

}
,t.T7,{
color:t.C35.color
}
),shopItem:{

}
,content:{
flexDirection:'column',paddingTop:56
}
,mpContent:{
paddingTop:12
}
,largeContent:{
paddingTop:24
}
,descriptionBlock:{
marginTop:12,marginLeft:16,marginRight:16,borderRadius:16,backgroundColor:t.C33.color,height:'auto'
}
,shopDescription:{
flexDirection:'row',paddingTop:17,marginRight:12,marginLeft:12,borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.03)',alignContent:'center',height:'auto'
}
,titleDes:Object.assign({

}
,t.T7,t.C11,{
marginLeft:12,marginBottom:13,width:n.CommonUtils.getWindowSize(l).screenWidth-138,flex:1
}
),ImgBlock:{
height:48,marginRight:12,marginLeft:12,paddingTop:15,paddingBottom:14,borderStyle:'solid',borderBottomWidth:1,borderBottomColor:'rgba(0,0,0,0.03)',flexDirection:'row'
}
,Img:{
width:24,height:24
}
,Wander:{
height:40,backgroundColor:t.C70.color+t.opacityMap[t.C70.opacity],opacity:.9,marginTop:12,marginLeft:16,marginBottom:16,marginRight:16,borderRadius:20,paddingBottom:9,paddingLeft:16,paddingRight:16,paddingTop:9,alignItems:'center',justifyContent:'center'
}
,wanderText:Object.assign({

}
,t.T10,t.C75,{
alignItems:'center',textAlign:'center',justifyContent:'center'
}
),bgAll:{
backgroundColor:'rgba(0,0,0,0.2)',height:n.CommonUtils.getWindowSize(l).screenHeight,width:n.CommonUtils.getWindowSize(l).screenWidth,left:0,top:0,position:'web'===o.Platform.OS?'fixed':'absolute',elevation:10,zIndex:1e3
}
,codeWindow:Object.assign({
height:286,top:(c-286)/2,marginBottom:(c-286)/2,marginLeft:32,marginRight:32
}
,t.S31,{
borderRadius:16,flexDirection:'column'
}
),codeWindowMp:{
width:286,margin:'auto',top:0
}
,largeCodeWindow:{
marginLeft:'auto',marginRight:'auto'
}
,codeImg:{
height:160,width:160
}
,windowTitle:Object.assign({

}
,t.T10,t.C11,{
marginTop:24,marginRight:16,marginLeft:16,height:21,textAlign:'center'
}
),share:Object.assign({

}
,t.C13,t.T3,{
marginTop:8,marginRight:16,marginLeft:16,textAlign:'center'
}
),codeImgBlock:{
alignItems:'center',justifyContent:'center',marginTop:24
}
,shopImgBlock:{
alignItems:'center',justifyContent:'center',marginTop:28,height:c-56-164
}
,shopWindow:Object.assign({
height:n.CommonUtils.getWindowSize(l).screenHeight-88,top:h
}
,t.S31,{
borderTopLeftRadius:16,borderTopRightRadius:16,flexDirection:'column'
}
),closebar:{
marginTop:10,alignItems:'center',justifyContent:'center'
}
,closebarMp:{
marginTop:0
}
,shopTitle:Object.assign({

}
,t.T10,t.C11,{
flex:1
}
),shopImg:{
width:328,height:494
}
,btn:{
bottom:8,marginRight:16,marginLeft:16,alignItems:'center',justifyContent:'center',backgroundColor:t.C18.color,height:40,borderRadius:20,position:'absolute',width:n.CommonUtils.getWindowSize(l).screenWidth-32
}
,yes:Object.assign({

}
,t.C17,t.T10),toolbar:{
zIndex:12
}
,mpModalPosition:{
position:'fixed'
}

}
)
}

}
),"28fb6dc01de4b7374bb5980fb809e25de6bf41c1038d9ec45d993543faa60c03",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = y(t);
if(i&&i.has(e))return i.get(e);
var l={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var n: any = o?Object.getOwnPropertyDescriptor(e,r):null;
n&&(n.get||n.set)?Object.defineProperty(l,r,n):l[r]=e[r]
}
return l.default=e,i&&i.set(e,l),l
}
)(_r(d[2])),l=_r(d[3]),o=e(_r(d[4])),r=e(_r(d[5])),n=_r(d[6]),a=_r(d[7]),s=_r(d[8]),u=e(_r(d[9])),c=e(_r(d[10])),p=e(_r(d[11])),v=e(_r(d[12])),h=_r(d[13]),f=_r(d[14]);
// 函数
function y(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(y=function(e){
return e?i:t
}
)(e)
}
(0,l.EnvService)(l.env);
var S=l.PlatformUtils.isApp()?{
wordBreak:'break-all'
}
:{

}
,P=n.StatusBar.currentHeight;
'ios'===n.Platform.OS&&(l.DeviceUtils.getStatusBarHeight().then((function(e){
P=e
}
)).catch((function(){

}
)),l.DeviceUtils.getSafeAreaBottomHeight().then((function(e){
e
}
)).catch((function(){

}
)));
_e.default=(0,l.Componentautoscaling)((function(e){
var y,x,w=(0,i.useRef)(null),T=(0,i.useState)(l.CommonUtils.getWindowSize(l.PAGE_TYPE.shop).screenWidth),j=(0,t.default)(T,2),U=j[0],b=j[1],A=l.CommonUtils.getWindowSize(l.PAGE_TYPE.shop).screenHeight,C=e.route,N=u.default.get(C,'params.configInfo'),_=u.default.get(C,'params.dataArray')||[],I=u.default.get(C,'params.currentPlayTime')||0,V=u.default.get(C,'params.carrierCode')||'',L=(0,i.useRef)(null),O=(0,i.useState)(!1),W=(0,t.default)(O,2),D=W[0],E=(W[1],(0,i.useState)('true'===l.ShopStore.isFollow)),H=(0,t.default)(E,2),M=H[0],R=H[1],B=(0,i.useState)(!1),k=(0,t.default)(B,2),F=k[0],z=k[1],G=(0,i.useState)({
shopName:'',shopAvatar:''
}
),Y=(0,t.default)(G,2),q=Y[0],K=Y[1],Q=(0,i.useState)(!1),J=(0,t.default)(Q,2),X=J[0],Z=J[1],$='3:4'===(null==N?void 0:N.videoStyle)?4*U/3:'16:9'===(null==N?void 0:N.videoStyle)?9*U/16:U,ee=function(e){
var t,i;
l.Report.eventTracingReport({
actionCode:'100660025',actionName:'\u70b9\u51fb\u54c1\u724c\u4e13\u533a\u4e8c\u5c42\u9875\u9762',eventType:l.EVENT_TYPE.EVENT_TYPE_CLICK,pageId:l.env.pageId,content:{
index:null!=(t=null==e?void 0:e.index)?t:'1',URL:null!=(i=null==e?void 0:e.url)?i:'',click:'1'
}
,pageCatCode:'',pageCatName:''
}
),l.EventTracking.execReportData('',!0)
}
,te=function(){
(0,e.navigation.navigate)('ShopDefault')
}
,ie=function(){
// 变量
var e: any = U;
return'medium'===(0,l.ScreenSize)(e)||'large'===(0,l.ScreenSize)(e)&&e<l.variables.safety_area
}
,le=function(){
return ie()&&!(A>U)&&U>=1024
}
,oe=function(){
// 变量
var e: any = '16:9'===(null==N?void 0:N.videoStyle)?9*(U-48)/16:A-48-12,t='3:4'===(null==N?void 0:N.videoStyle)?3*e/4:'16:9'===(null==N?void 0:N.videoStyle)?U-48:e;
return{
videoH:e,videoW:t
}

}
,re=function(){
// 变量
var e: any = '16:9'===(null==N?void 0:N.videoStyle)?9*U/16:'1:1'===(null==N?void 0:N.videoStyle)?U-72:A-48,t='3:4'===(null==N?void 0:N.videoStyle)?3*e/4:'16:9'===(null==N?void 0:N.videoStyle)?U:e;
return{
videoH:e,videoW:t
}

}
,ne=function(){
// 变量
var e: any = '';
if('web'===n.Platform.OS){
// 变量
var t: any = window.location.href;
e=l.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else e=(l.PlatformUtils.isAndroid(),'vmall://com.vmall.client/home/login');
l.RouterUtils.gotoPage(e)
}
,ae=function(){
if(l.AppStore.isLogin){
// 变量
var e: any = l.Service.openApiDomain+"sc/shop/followShop?lang="+l.MCP_LANG.CN+"&country=CN";
l.Http.post(e,{
followType:1,carrierCode:V,portal:(0,s.getPortalStr)()
}
).then((function(t){
null!=t&&t.success&&(R(!M),n.DeviceEventEmitter.emit('brandFollowShop'),ee({
url:e,index:'1'
}
))
}
))
}
else ne()
}
,se=function(){
ee({
index:'2',url:''
}
),L.current.state.isPaused?L.current.play():L.current.pause()
}
,de=function(e,t){
// 变量
var i: any = "vmall://com.vmall.client/product/detail?prdId="+e;
return t?i.concat('&skuCode=').concat(t):i
}
,ue=function(e){
y&&clearTimeout(y),y=setTimeout((function(){
if(ee({
index:'3',url:l.PlatformUtils.isApp()?de(String(e.prdId),String(e.skuCode)):e.wapurl
}
),l.PlatformUtils.isApp()){
// 变量
var t: any = e.productPageType,i=void 0===t?'':t,o=e.prdId,r=e.skuCode;
String(i)?l.RouterUtils.gotoProductDetailAllByType(String(i),String(o),String(r)):l.RouterUtils.gotoProductDetailAll(String(o),String(r))
}
else l.RouterUtils.gotoPage(e.wapurl)
}
),150)
}
,ce=function(e,t){
var i=e.filter((function(e){
return'prod'===e.dataType
}
));
if(!i.length)return null;
// 变量
var o: any = i[0],r=/(http|https):\/\/([\w.]+\/?)\S*/.test(o.photoPath),a=r?'':l.Service.cmsCndProdPath;
o.imgUrl=o.customImage?a+o.photoPath+(r?'':o.photoName):a+o.photoPath+(r?'':'428_428_'+o.photoName);
// 变量
var s: Function = o.productPageType,u=void 0===s?'':s,c=o.prdId,p=String(u)?l.RouterUtils.getProductDetailUrlForWebAllByType(String(u),c):l.RouterUtils.getProductDetailUrlForWebAll(c);
o.wapurl=p,o.weburl=p;
// 变量
var v: any = null!=o&&o.displayPrice||0===(null==o?void 0:o.displayPrice)?null==o?void 0:o.displayPrice:null!=o&&o.salePrice||0===(null==o?void 0:o.salePrice)?null==o?void 0:o.salePrice:'';
return 2===Number(o.priceMode)?(o.newPrice=(0,l.t)('without_price'),o.oldPrice=''):v&&v!==o.originPrice?(o.newPrice=l.CommonUtils.priceFormat(v),o.oldPrice='1'!==o.priceEndWithQi?'\xa5'+l.CommonUtils.priceFormat(o.originPrice):''):(o.newPrice=o.originPrice||0===o.originPrice?l.CommonUtils.priceFormat(o.originPrice):'',o.oldPrice=''),(0,f.jsxs)(n.TouchableOpacity,{
style:[t.prd,le()&&{
width:390
}
],onPress:function(){
return ue(o)
}
,children:[(0,f.jsx)(n.View,{
style:t.prdImgL,children:(0,f.jsx)(h.FastImageView,{
resizeMode:'contain',imgUri:o.imgUrl,imgStyle:t.prdImg
}
)
}
),(0,f.jsxs)(n.View,{
style:t.prdLeft,children:[(0,f.jsx)(n.Text,{
style:[t.prdName,l.PlatformUtils.isIOS()&&{
lineHeight:18
}
,S],numberOfLines:1,ellipsizeMode:'tail',children:o.prdName
}
),(0,f.jsxs)(n.View,{
style:[t.priceBox],children:[2!==Number(o.priceMode)&&(0,f.jsx)(n.Text,{
style:[t.priceMark],children:"\xa5"
}
),(0,f.jsx)(n.Text,{
style:[t.newPrice],children:2===Number(o.priceMode)?(0,l.t)('without_price'):o.newPrice
}
),''!==o.oldPrice?(0,f.jsx)(n.Text,{
style:[t.oldPrice],children:o.oldPrice
}
):null]
}
)]
}
)]
}
)
}
,pe=function(){
ee({
index:'4',url:''
}
),null!=_&&_.length&&(_.length>1?Z(!0):ue(null==_?void 0:_[0]))
}
,ve=function(){
Z(!1)
}
,he=function(e,t){
U!==e&&b(e)
}
;
(0,i.useEffect)((function(){
return l.PlatformUtils.isApp()?(null===l.AppStore.isLogin&&l.AppStore.getIsLogin(),x=n.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
'login'===e.service&&'isLogin'===e.action&&e&&'boolean'==typeof e.param.isLogin&&e.param.isLogin&&l.AppStore.setIsLogin(e.param.isLogin)
}
))):'web'===n.Platform.OS&&null===l.AppStore.isLogin&&l.AppStore.getIsLogin(),(0,a.queryShopInfo)(V).then((function(e){
if(e.success){
var t=(null!=e?e:{
shopBaseInfoVo:{

}

}
).data.shopBaseInfoVo,i=t.shopName,l=t.shopAvatar;
K({
shopName:i,shopAvatar:l
}
)
}

}
)),l.PlatformUtils.isApp()&&(w.current&&w.current.remove(),w.current=l.DeviceUtils.getWidthHeightChange(he,'shop'),l.DeviceUtils.isFixScreen().then((function(e){
z(e)
}
))),function(){
y&&clearTimeout(y),w.current&&w.current.remove(),x&&x.remove()
}

}
),[U]);
return(0,f.jsx)(l.WithTheme,{
themeStyles:r.default,children:function(e,t,i){
var r,a;
return(0,f.jsxs)(n.ScrollView,{
style:[e.bgAll,{
height:l.PlatformUtils.isApp()?A-P:A,marginTop:P
}
],contentContainerStyle:[e.scrollBgContentStyle,l.PlatformUtils.isApp()&&{
flexGrow:1,minHeight:'auto'
}
],children:[(0,f.jsxs)(n.View,{
style:e.shopBase,children:[(0,f.jsxs)(n.View,{
style:e.topLeft,children:[(0,f.jsx)(n.View,{
style:e.imageWrap,children:(0,f.jsx)(h.FastImageView,{
imgUri:q.shopAvatar,imgStyle:e.shopImage
}
)
}
),(0,f.jsx)(n.View,{
style:e.shopWrap,children:(0,f.jsx)(n.Text,{
style:e.shopName,numberOfLines:1,ellipsizeMode:"tail",children:q.shopName
}
)
}
)]
}
),(0,f.jsxs)(n.View,{
style:e.topRight,children:[M?null:(0,f.jsx)(n.TouchableOpacity,{
style:e.attentionsBtnN,onPress:ae,children:(0,f.jsx)(n.Text,{
style:e.attentionsBtnNText,children:"+"+(0,l.t)('not_follow')
}
)
}
),(0,f.jsx)(n.TouchableOpacity,{
onPress:te,children:(0,f.jsx)(h.SvgIcon,{
iconName:"cancel1",width:"20",height:"20",normalCol:'#fff',opacity:'1'
}
)
}
)]
}
)]
}
),le()||ie()&&F?null:(0,f.jsx)(n.View,{
style:e.middleTop,children:(0,f.jsx)(n.Text,{
style:e.middleTopText,numberOfLines:1,ellipsizeMode:"tail",children:null!=(r=null==N?void 0:N.desc)?r:(0,l.t)('surprises_every_meal')
}
)
}
),(0,f.jsx)(n.TouchableOpacity,{
style:[e.videoDefaultStyle,{
width:U,height:$+40
}
,ie()&&l.PlatformUtils.isApp()&&'3:4'===(null==N?void 0:N.videoStyle)&&{
height:$
}
,le()&&{
width:oe().videoW,height:oe().videoH
}
,ie()&&'16:9'!==(null==N?void 0:N.videoStyle)&&F&&{
width:re().videoW,height:re().videoH
}
],activeOpacity:1,onPress:se,children:(0,f.jsx)(o.default,{
ref:L,width:'100%',videoWidth:ie()&&F&&'16:9'!==(null==N?void 0:N.videoStyle)?re().videoW:le()?oe().videoW:'',height:ie()&&F&&'16:9'!==(null==N?void 0:N.videoStyle)?re().videoH:le()?oe().videoH:$,isFixScreen:F,sourceUrl:null==N?void 0:N.videoUrl,isPause:D,autoPlay:!0,isMuted:!1,aspectRatioWap:null==N?void 0:N.videoStyle,isPlayPress:!0,currentPlayTime:I
}
)
}
),(0,f.jsxs)(n.View,{
style:[e.bottom,ie()&&'3:4'===(null==N?void 0:N.videoStyle)&&l.PlatformUtils.isApp()&&e.pad34VideoStyle,le()&&e.pad34VideoStyle,le()&&e.padHorizontal24Style,ie()&&F&&'16:9'!==(null==N?void 0:N.videoStyle)&&e.pad34VideoStyle,ie()&&F&&'16:9'!==(null==N?void 0:N.videoStyle)&&e.padHorizontal24Style,!_.length&&e.bottomNoPrdCard],children:[_.length?ce(_,e):null,(0,f.jsx)(n.View,{
style:e.bottomRight,children:(0,f.jsxs)(n.TouchableOpacity,{
onPress:pe,children:[(0,f.jsx)(n.Image,{
style:{
height:36,width:36
}
,source:c.default.shopShoppingCart
}
),(0,f.jsx)(n.View,{
style:e.prdNumBg,children:(0,f.jsx)(n.Text,{
style:e.prdNumText,children:null!=(a=null==_?void 0:_.length)?a:0
}
)
}
)]
}
)
}
)]
}
),ie()&&'3:4'===(null==N?void 0:N.videoStyle)&&l.PlatformUtils.isApp()||le()||ie()&&F&&'16:9'!==(null==N?void 0:N.videoStyle)?(0,f.jsx)(v.default,{
colors:['rgba(0,0,0,0.00)','rgba(3,3,3,0.30)'],style:e.bottomLinearGradient
}
):null,(0,f.jsx)(p.default,{
closeModal:ve,modalVisible:X,dataArray:_
}
)]
}
)
}

}
)
}
))
}
),"90e4b15747084d342ca95d5c5cc122f5d56127ece3ac0f2c8def5b2b7d891859",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","ea31249652c74a92b5af97ef69ffbc31a8683b72fb3689add7cc686994489f26","df7301e716844a0811a2d533ccbb81a3063557f66cf17b34dbf3d4354600e888","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","186ff7af8be94e272294bc8425c0c786288f09d6954b22e22339a24f8e1e31ca","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
bgAll:{
backgroundColor:'#202224',width:'100%'
}
,scrollBgContentStyle:{
minHeight:'100%',justifyContent:'space-between'
}
,shopBase:{
justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:48,paddingHorizontal:16
}
,topLeft:{
flexDirection:'row',alignItems:'center',flex:1
}
,topRight:{
flexDirection:'row',alignItems:'center'
}
,imageWrap:{
width:36,height:36,marginRight:12
}
,shopImage:{
width:'100%',height:'100%',borderRadius:18
}
,shopWrap:{
flex:1
}
,shopName:Object.assign({
fontFamily:o.PublicFont.fontFamilyBase,color:'#FFFFFF'
}
,n.T4,{
fontWeight:'400'
}
),attentionsBtnN:{
width:60,height:26,borderRadius:13,alignItems:'center',borderWidth:1,borderColor:'#FFF',marginRight:16
}
,attentionsBtnNText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium,color:'#FFF'
}
,n.T4,{
lineHeight:24,fontWeight:'400'
}
),middleTopText:{
opacity:.8,fontFamily:o.PublicFont.fontFamilyMedium,fontSize:16,color:'#FFFFFF',textAlign:'center',fontWeight:'500'
}
,middleTop:{
marginBottom:4
}
,bottomLinearGradient:{
width:'100%',height:108,bottom:0,position:'absolute',zIndex:8e3
}
,bottom:{
flexDirection:'row',alignItems:'flex-end',paddingHorizontal:16,justifyContent:'space-between',paddingVertical:16,backgroundColor:'#202224',zIndex:9e3
}
,bottomNoPrdCard:{
justifyContent:'flex-end'
}
,bottomRightShare:{
marginBottom:28
}
,bottomRight:{

}
,prd:{
padding:6,width:244,height:64,backgroundColor:'#fff',borderRadius:8,flexDirection:'row'
}
,prdImgL:{
marginRight:8
}
,prdImg:{
width:48,height:48
}
,prdName:Object.assign({

}
,n.T6,n.C12,{
justifyContent:'center',fontWeight:'web'===t.Platform.OS?'bold':'600'
}
),priceBox:{
justifyContent:'flex-start',alignItems:'center',flexDirection:'row',flexShrink:1,paddingRight:12,paddingTop:2
}
,priceMark:Object.assign({
marginRight:2
}
,n.C18,{
fontSize:n.T4.fontSize,fontWeight:'600',lineHeight:18
}
),newPrice:Object.assign({

}
,n.C18,{
fontSize:n.T10.fontSize,fontWeight:'600',marginRight:4
}
),prdLeft:{
justifyContent:'space-between',flex:1
}
,oldPrice:Object.assign({
textDecorationLine:'line-through'
}
,n.C14,{
fontSize:n.T1.fontSize
}
),prdNumBg:{
width:25,height:16,backgroundColor:'#FF3366',borderRadius:8,position:'absolute',right:-5
}
,prdNumText:{
color:'#fff',fontSize:10,fontWeight:'400',lineHeight:16,textAlign:'center'
}
,pad34VideoStyle:{
position:'absolute',bottom:0,left:0,width:'100%',backgroundColor:'transparent'
}
,padHorizontal24Style:{
paddingHorizontal:24
}
,videoDefaultStyle:{
backgroundColor:'#202224',alignSelf:'center'
}

}
)
}

}
),"df7301e716844a0811a2d533ccbb81a3063557f66cf17b34dbf3d4354600e888",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=function(t){
var P=t.modalVisible,f=t.closeModal,x=t.dataArray,w=function(){
'web'===l.Platform.OS&&setTimeout((function(){
document.documentElement.style.overflowY='scroll';
// 变量
var t: any = document.getElementById(h);
c.default.isEmpty(t)||document.body.removeChild(t)
}
),100),f()
}
,v=function(t){
w(),setTimeout((function(){
if(o.PlatformUtils.isApp()){
// 变量
var l: any = t.productPageType,n=void 0===l?'':l,s=t.prdId,c=t.skuCode;
String(n)?o.RouterUtils.gotoProductDetailAllByType(String(n),String(s),String(c)):o.RouterUtils.gotoProductDetailAll(String(s),String(c))
}
else o.RouterUtils.gotoPage(t.wapurl)
}
),o.PlatformUtils.isIOS()?800:300)
}
,b=function(t,n,s){
// 变量
var c: any = /(http|https):\/\/([\w.]+\/?)\S*/.test(t.photoPath),h=c?'':o.Service.cmsCndProdPath;
t.imgUrl=t.customImage?h+t.photoPath+(c?'':t.photoName):h+t.photoPath+(c?'':'428_428_'+t.photoName);
var P=t.productPageType,f=void 0===P?'':P,x=t.prdId,w=String(f)?o.RouterUtils.getProductDetailUrlForWebAllByType(String(f),x):o.RouterUtils.getProductDetailUrlForWebAll(x);
t.wapurl=w,t.weburl=w,t.promotionRules=t.promoLabels;
// 变量
var b: string = null!=t&&t.displayPrice||0===(null==t?void 0:t.displayPrice)?null==t?void 0:t.displayPrice:null!=t&&t.salePrice||0===(null==t?void 0:t.salePrice)?null==t?void 0:t.salePrice:'';
return 2===Number(t.priceMode)?(t.newPrice=(0,o.t)('without_price'),t.oldPrice=''):b&&b!==t.originPrice?(t.newPrice=o.CommonUtils.priceFormat(b),t.oldPrice='1'!==t.priceEndWithQi?'\xa5'+o.CommonUtils.priceFormat(t.originPrice):''):(t.newPrice=t.originPrice||0===t.originPrice?o.CommonUtils.priceFormat(t.originPrice):'',t.oldPrice=''),(0,p.jsxs)(l.TouchableOpacity,{
style:n.prd,onPress:function(){
return v(t)
}
,children:[(0,p.jsx)(l.View,{
style:n.prdImgL,children:(0,p.jsx)(u.FastImageView,{
resizeMode:'contain',imgUri:t.imgUrl,imgStyle:n.prdImg
}
)
}
),(0,p.jsxs)(l.View,{
style:n.prdLeft,children:[(0,p.jsx)(l.Text,{
style:[n.prdName,o.PlatformUtils.isIOS()&&{
lineHeight:18
}
,y],numberOfLines:1,ellipsizeMode:'tail',children:t.prdName
}
),(0,p.jsxs)(l.View,{
style:[n.rightBottom],children:[(0,p.jsxs)(l.View,{
style:[n.priceBox],children:[2!==Number(t.priceMode)&&(0,p.jsx)(l.Text,{
style:[n.priceMark],children:"\xa5"
}
),(0,p.jsx)(l.Text,{
style:[n.newPrice],children:2===Number(t.priceMode)?(0,o.t)('without_price'):t.newPrice
}
),''!==t.oldPrice?(0,p.jsx)(l.Text,{
style:[n.oldPrice],children:t.oldPrice
}
):null]
}
),(0,p.jsx)(l.TouchableOpacity,{
style:n.attentionsBtnN,onPress:function(){
return v(t)
}
,children:(0,p.jsx)(l.Text,{
style:n.attentionsBtnNText,children:(0,o.t)('go_buy')
}
)
}
)]
}
)]
}
)]
}
)
}
,j=function(t,n){
return(0,p.jsx)(l.View,{
style:t.mask,children:(0,p.jsxs)(l.View,{
style:t.bgAll,children:[(0,p.jsxs)(l.View,{
style:t.top,children:[(0,p.jsx)(l.View,{
style:t.titleLayout,children:(0,p.jsx)(l.Text,{
style:t.title,children:(0,o.t)('recommend_prd')
}
)
}
),(0,p.jsx)(l.TouchableOpacity,{
onPress:w,style:t.closeIcon,children:(0,p.jsx)(u.SvgIcon,{
iconName:"cancel1",width:"24",height:"24",normalCol:n.C13.color,opacity:n.C13.opacity
}
)
}
)]
}
),(0,p.jsx)(l.FlatList,{
style:t.prdList,contentContainerStyle:{
justifyContent:'space-between',width:'100%'
}
,data:x,renderItem:function(l){
// 变量
var o: any = l.item;
l.index;
return b(o,t)
}
,scrollEnabled:!0,initialNumToRender:20,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,keyExtractor:function(t,l){
return l.toString()
}

}
)]
}
)
}
)
}
;
return(0,p.jsx)(o.WithTheme,{
themeStyles:n.default,children:function(t,o,n){
if('web'===l.Platform.OS){
if(!P)return null;
var u=document.getElementById(h)||{

}
;
if(c.default.isEmpty(u)){
var y=document.createElement('div');
y.setAttribute('id',h),document.body.appendChild(y),s.default.render(j(t,o),document.getElementById(h))
}
return null
}
return(0,p.jsx)(l.Modal,{
animationType:"fade",transparent:!0,visible:P,statusBarTranslucent:!0,children:j(t,o)
}
)
}

}
)
}
;
t(r(d[1]));
var l=r(d[2]),o=r(d[3]),n=t(r(d[4])),s=t(r(d[5])),c=t(r(d[6])),u=r(d[7]),p=r(d[8]),y=o.PlatformUtils.isApp()?{
wordBreak:'break-all'
}
:{

}
,h='video_prd_drawer'
}
),"186ff7af8be94e272294bc8425c0c786288f09d6954b22e22339a24f8e1e31ca",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","f314d7c41adfe09bfff269ba50a0fb12bfca125eb4b875b4d9e8b803714d2323","3333e4da975158a578269d7b903373061c90b2d73f044c48dc110568d51aa71f","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]),n=0,l='ios'===t.Platform.OS?n:t.StatusBar.currentHeight;
'ios'===t.Platform.OS&&o.DeviceUtils.getStatusBarHeight().then((function(t){
n=t
}
)).catch((function(){

}
));
// 变量
var f: any = o.CommonUtils.getWindowSize('shop').screenHeight;
e.default=function(n){
return t.StyleSheet.create({
bgAll:{
backgroundColor:n.C33.color+n.opacityMap[n.C33.opacity],height:.5*f,paddingTop:14,borderTopLeftRadius:8,borderTopRightRadius:8,marginBottom:'web'===t.Platform.OS?0:14
}
,mask:{
position:'web'===t.Platform.OS?'fixed':'absolute',top:'web'===t.Platform.OS?0:l,right:0,width:'100%',height:'100%',paddingHorizontal:8,bottom:0,zIndex:9998,elevation:9998,backgroundColor:n.C80.color+n.opacityMap[n.C80.opacity],justifyContent:'flex-end'
}
,title:Object.assign({

}
,n.T11,n.C11,{
fontWeight:'400',fontFamily:o.PublicFont.fontFamilyMedium
}
),titleLayout:{
height:28
}
,prdList:{
marginBottom:'web'===t.Platform.OS?0:24,height:28
}
,top:{
flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,marginBottom:14
}
,prd:{
padding:8,height:98,flexDirection:'row'
}
,prdImgL:{
marginRight:8
}
,prdImg:{
width:80,height:80
}
,prdName:Object.assign({

}
,n.T7,n.C12,{
justifyContent:'center',fontWeight:'web'===t.Platform.OS?'bold':'600'
}
),priceBox:{
justifyContent:'flex-start',alignItems:'center',flexDirection:'row',flexShrink:1,paddingRight:12,paddingTop:2
}
,priceMark:Object.assign({
marginRight:2
}
,n.C18,{
fontSize:n.T4.fontSize,fontWeight:'600',lineHeight:18
}
),newPrice:Object.assign({

}
,n.C18,{
fontSize:n.T11.fontSize,fontWeight:'600',marginRight:4
}
),attentionsBtnN:{
width:60,height:26,borderRadius:13,alignItems:'center',borderWidth:1,borderColor:'#rgb(207, 10, 44)',marginRight:16
}
,attentionsBtnNText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium,color:'#rgb(207, 10, 44)'
}
,n.T4,{
lineHeight:24,fontWeight:'400'
}
),rightBottom:{
flexDirection:'row',justifyContent:'space-between'
}
,prdLeft:{
justifyContent:'space-between',flex:1
}
,oldPrice:Object.assign({
textDecorationLine:'line-through'
}
,n.C14,{
fontSize:n.T3.fontSize
}
),prdNumBg:{
width:25,height:16,backgroundColor:'#FF3366',borderRadius:8,position:'absolute',right:-5
}
,prdNumText:{
color:'#fff',fontSize:10,fontWeight:'400',lineHeight:16,textAlign:'center'
}

}
)
}

}
),"f314d7c41adfe09bfff269ba50a0fb12bfca125eb4b875b4d9e8b803714d2323",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=_r(d[1]),r=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = c(t);
if(r&&r.has(e))return r.get(e);
var n={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var o: any = a?Object.getOwnPropertyDescriptor(e,i):null;
o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]
}
return n.default=e,r&&r.set(e,n),n
}
)(_r(d[2])),n=_r(d[3]),a=e(_r(d[4])),i=e(_r(d[5])),o=_r(d[6]),l=e(_r(d[7])),s=_r(d[8]),u=_r(d[9]);
// 函数
function c(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(c=function(e){
return e?r:t
}
)(e)
}
// 变量
var f: any = (0,o.SubTabWrapper)(null,o.handleStyleChange,o.JsonConvert,s.MapComponents),p=0;
t.DeviceUtils.getStatusBarHeight().then((function(e){
p=e
}
)).catch((function(){

}
));
_e.default=(0,t.Componentautoscaling)((function(e){
var s=e.route,c=e.navigation,h=i.default.get(s,'params.carrierCode')||t.UrlUtils.getQueryStr('carrierCode'),y=(0,r.useRef)(null),b=function(){
var e=c||{

}
,t=e.canGoBack,r=e.goBack,n=e.replace;
t&&t()?r():n('ShopDefault')
}
,v=function(){
if(t.CommonUtils.isHmshop())b();
else if('web'===n.Platform.OS)t.RouterUtils.gotoPage(t.Service.wapDomain+"sc/shop/index.html?carrierCode="+h);
else{
(0,c.replace)('ShopDefault')
}

}
,P=function(e){
return(0,u.jsx)(f,{
isFixed:!1,pageId:0,pageType:t.PAGE_TYPE.shop,subTabSet:[{
tabName:(0,t.t)('liked_it'),cards:[{
cardType:'custom',children:(0,u.jsx)(l.default,{
style:e,tab:'liked',route:s,ref:y
}
)
}
]
}
,{
tabName:(0,t.t)('not_interested'),cards:[{
cardType:'custom',children:(0,u.jsx)(l.default,{
style:e,tab:'noInterested',route:s,ref:y
}
)
}
]
}
]
}
)
}
;
return(0,u.jsx)(t.WithTheme,{
themeStyles:a.default,children:function(e){
return(0,u.jsxs)(n.TouchableOpacity,{
style:[e.outterView,t.PlatformUtils.isApp()?{
flex:1
}
:{
minHeight:window.innerHeight
}
],activeOpacity:1,onPress:function(){
var e;
null==(e=y.current)||null==e.resetClick||e.resetClick()
}
,children:[(0,u.jsx)(n.View,{
style:[{
marginTop:p
}
,'web'===n.Platform.OS&&e.webFixed],children:(0,u.jsx)(o.TitleBar,{
onPress:v,disabledMarginTop:!0,titleName:(0,t.t)('favorite_products_record')
}
)
}
),t.PlatformUtils.isApp()?P(e):(0,u.jsxs)(u.Fragment,{
children:[(0,u.jsx)(n.View,{
style:{
marginTop:56
}
,children:P(e)
}
),(0,u.jsx)(o.FixedButton,{
pageType:t.PAGE_TYPE.shop
}
)]
}
)]
}
)
}

}
)
}
))
}
),"98e1819f6d679d435e1705727cbda21d9ebb17a91aad8e09381e0ab5f29fa3a8",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","4730b9ceb0e546f187f92e1e762cb0535bcf3b688bc57a3f88ad394ef7ffa25c","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","3bc70cd0a02d17660f0a524210bd1dd731702ecd3775beb6976ba2ecea1b34b8","dc341e3a6e48889be1b4c3cd878559337c8c56fb10de43401816c02f315c28d7","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
outterView:Object.assign({

}
,n.S32),loadPage:{
position:'absolute',zIndex:99,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:n.C32.color
}
,loadPageImg:{
width:72,height:72
}
,loadPageText:{
fontSize:14,color:n.C13.color+'99'
}
,loadWrap:{
position:'web'===t.Platform.OS?'fixed':'relative',top:0,left:0,width:'100%',bottom:0,zIndex:1
}
,lodingTitle:{
color:n.C13.color
}
,prdAreaR:{
paddingLeft:16,paddingRight:16
}
,prdAreaPadR:{
paddingLeft:24,paddingRight:24
}
,emptyC:{
width:'100%',justifyContent:'center',alignItems:'center',marginTop:60,marginBottom:78
}
,emptyT:Object.assign({
textAlign:'center'
}
,n.C15,{
fontFamily:o.PublicFont.fontFamilyBase
}
),emptyImg:{
width:120,height:120
}
,productItemWrap:{
width:'100%',height:'auto'
}
,productItemTouch:{
position:'absolute',height:'100%',width:'100%',zIndex:10
}
,deleteView:{
borderRadius:28,backgroundColor:'#E84026',overflow:'hidden',height:56,width:56,margin:'auto',justifyContent:'center'
}
,deleteText:Object.assign({
fontFamily:o.PublicFont.fontFamilyMedium
}
,n.C17,n.T4,{
textAlign:'center'
}
),deleteBg:{
borderRadius:16,backgroundColor:n.C81.color+n.opacityMap[n.C81.opacity],position:'absolute',width:'100%',height:'100%',zIndex:11,justifyContent:'center',alignItems:'center'
}
,productList:{
width:'100%'
}
,webFixed:{
position:'web'===t.Platform.OS?'fixed':'relative',height:56,width:'100%',zIndex:3
}

}
)
}

}
),"4730b9ceb0e546f187f92e1e762cb0535bcf3b688bc57a3f88ad394ef7ffa25c",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),r=_r(d[2]),o=_r(d[3]),n=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = f(t);
if(r&&r.has(e))return r.get(e);
var o={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var l: any = n?Object.getOwnPropertyDescriptor(e,i):null;
l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]
}
return o.default=e,r&&r.set(e,o),o
}
)(_r(d[4])),i=_r(d[5]),l=e(_r(d[6])),a=e(_r(d[7])),u=_r(d[8]),c=e(_r(d[9])),s=_r(d[10]);
// 函数
function f(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(f=function(e){
return e?r:t
}
)(e)
}
var p=0;
r.DeviceUtils.getStatusBarHeight().then((function(e){
p=e
}
)).catch((function(){

}
));
var h,v=null,S=!0,P=1,y=(0,n.forwardRef)((function(e,f){
var y=e.route,w=e.tab,b=0,j=0,x=!0,T=c.default.get(y,'params.carrierCode')||r.UrlUtils.getQueryStr('carrierCode'),O=(0,n.useState)(!0),I=(0,t.default)(O,2),L=I[0],_=I[1],A=(0,n.useState)([]),D=(0,t.default)(A,2),U=D[0],k=D[1],C=(0,n.useState)(0),E=(0,t.default)(C,2),W=E[0],R=E[1],V=(0,n.useState)(1),M=(0,t.default)(V,2),N=M[0],z=M[1],B=(0,n.useState)(!0),F=(0,t.default)(B,2),H=F[0],G=F[1],q=(0,n.useState)(''),Q=(0,t.default)(q,2),Y=Q[0],J=Q[1],K=function(e){
i.DeviceEventEmitter.emit('onScrollEvent',e,r.PAGE_TYPE.shop)
}
,X=function(e){
J(''),i.DeviceEventEmitter.emit('onScrollBeginDragEvent',e)
}
,Z=function(){
// 变量
var e: any = '';
if('web'===i.Platform.OS){
// 变量
var t: any = window.location.href;
e=r.Service.wapDomain+"account/applogin?url="+encodeURIComponent(t)+'&_t='+(new Date).getTime()
}
else e='vmall://com.vmall.client/home/login';
setTimeout((function(){
r.RouterUtils.gotoPage(e)
}
),500)
}
,$=function(){
// 变量
var e: any = b;
return'medium'===(0,r.ScreenSize)(e)||'large'===(0,r.ScreenSize)(e)&&e<r.variables.safety_area
}
,ee=function(){
if(r.AppStore.isLogin){
// 变量
var e: any = U,t=P,o=W;
G(!0),z(1);
var n={
pageNum:String(P),pageSize:String(18),filter:{
carrierCode:T,markType:'liked'===w?'1':'0'
}

}
;
(0,u.queryMarkedProducts)(n).then((function(r){
if(null!=r&&r.success){
var n,i,l,a=null!=(n=null==r?void 0:r.rows)?n:[];
1===t&&(e=[]),e=null!=(i=null==(l=e)?void 0:l.concat(a))?i:[],o=null==r?void 0:r.total,!e.length||o>18*t?(S=!0,G(1!==(P+=1)),z(1),k(e),_(!1),R(o)):(S=!1,G(!0),z(3),k(e),_(!1),R(o))
}

}
)).catch((function(){
G(!1),z(2),R(0)
}
))
}
else G(!1),z(1),_(!1),R(0),Z()
}
,te=function(e){
return(0,s.jsxs)(s.Fragment,{
children:[(0,s.jsx)(o.LoadingView,{
showLoading:H,position:'bottom',loadState:N,errorCallback:ee,height:56,iconSize:24,titleStyle:e.lodingTitle
}
),U.length>=10?(0,s.jsx)(i.View,{
style:{
height:20
}

}
):null]
}
)
}
,re=function(e){
return(0,s.jsx)(s.Fragment,{
children:(0,s.jsxs)(i.View,{
style:[e.emptyC],children:[(0,s.jsx)(i.Image,{
source:a.default.notyet,style:e.emptyImg
}
),(0,s.jsx)(i.Text,{
style:[e.emptyT,$()?e.prdAreaPadR:e.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:'liked'===w?(0,r.t)('no_favorite_products'):(0,r.t)('not_interested_products')
}
)]
}
)
}
)
}
,oe=function(){
// 变量
var e: any = $()?48:32;
return b-e
}
,ne=function(e){
return'web'===i.Platform.OS?(0,s.jsx)(i.View,Object.assign({

}
,e)):(0,s.jsx)(i.ScrollView,Object.assign({

}
,e,{
removeClippedSubviews:!1
}
))
}
,ie=function(e){
(0,u.removeProductMark)({
disPrdId:e.disPrdId
}
).then((function(e){
'0'===e.code&&(_(!0),ee())
}
))
}
,le=function(e){
Y&&e.disPrdId===Y||J(e.disPrdId)
}
,ae=function(){
J('')
}
,ue=function(e){
x&&(ae(),x=!1,setTimeout((function(){
x=!0
}
),500),v&&clearTimeout(v),v=setTimeout((function(){
// 变量
var t: any = e.productPageType,o=void 0===t?'':t,n=e.disPrdId,i=e.skuCode;
String(o)?r.RouterUtils.gotoProductDetailAllByType(String(o),n,i):r.RouterUtils.gotoProductDetailAll(n,i)
}
),150))
}
,ce=function(e,t,n,l){
// 变量
var a: any = r.Service.cmsCndProdPath+e.photoPath+'428_428_'+e.photoName;
e.promotionRules=e.promoLabels,e.promotionInfo=e.promotionWord,e.imgUrl=a,e.prdName=e.disPrdName,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price;
// 变量
var u: any = e.productPageType,c=void 0===u?'':u,f=e.disPrdId,p=String(c)?r.RouterUtils.getProductDetailUrlForWebAllByType(String(c),f):r.RouterUtils.getProductDetailUrlForWebAll(f);
return e.wapurl=p,e.weburl=p,(0,s.jsxs)(s.Fragment,{
children:[(0,s.jsx)(i.TouchableOpacity,{
style:n.productItemTouch,onPress:function(){
return ue(e)
}
,onLongPress:function(){
return le(e)
}

}
),Y===e.disPrdId?(0,s.jsx)(i.TouchableOpacity,{
activeOpacity:1,style:n.deleteBg,onBlur:ae,onPress:ae,children:(0,s.jsx)(i.TouchableOpacity,{
style:n.deleteView,onPress:function(){
return ie(e)
}
,children:(0,s.jsx)(i.Text,{
style:n.deleteText,children:(0,r.t)('delete')
}
)
}
)
}
):null,(0,s.jsx)(i.View,{
style:n.productItemWrap,children:(0,s.jsx)(o.ProductItem,{
data:e,structure:'l2r',type:'base',config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2,promotionTextLineNum:1,imgWidth:108
}
,iWidth:l,iHeight:140
}
,e.disPrdId)
}
)]
}
)
}
,de=c.default.debounce((function(){
S&&(S=!1,ee())
}
),200),se=function(e){
// 变量
var t: any = $()?r.ScreenUtils.isPadHorizontal(b)?3:2:1,n=(oe()-12*(t-1))/t;
return(null==U?void 0:U.length)>0?(0,s.jsxs)(i.View,{
style:[e.productList,{
paddingHorizontal:$()?24:16
}
],onLayout:function(){
J('')
}
,children:[(0,s.jsx)(o.GridLO,{
col:t,rowGutter:12,colGutter:$()&&r.ScreenUtils.isPadHorizontal(b)?12:8,pageGutter:0,dataArray:U,boxWidth:oe(),renderScrollComponent:function(e){
return ne(e)
}
,initialNumToRender:null==U?void 0:U.length,loadMore:de,renderItem:function(t){
// 变量
var r: any = t.item;
t.index;
return ce(r,0,e,n)
}

}
),te(e)]
}
):re(e)
}
,fe=function(e){
return(0,s.jsxs)(i.View,{
style:[e.loadPage,{
height:'web'===i.Platform.OS?'100%':j
}
],children:[(0,s.jsx)(i.Image,{
style:[e.loadPageImg],source:r.DarkStore.darkBool?o.ImageArray.loadingDark:o.ImageArray.loading
}
),(0,s.jsx)(i.Text,{
style:[e.loadPageText],children:(0,r.t)('loading')
}
)]
}
)
}
,me=function(e,t){
return'web'===i.Platform.OS&&(document.body.style.overflow=t?'hidden':''),t?'web'===i.Platform.OS&&(0,s.jsx)(i.View,{
style:e.loadWrap,children:fe(e)
}
)||fe(e):null
}
,pe=function(){
J('')
}
;
return(0,n.useEffect)((function(){
return P=1,(r.PlatformUtils.isApp()||'web'===i.Platform.OS)&&(null===r.AppStore.isLogin?r.AppStore.getIsLogin().then((function(){
ee()
}
)):ee(),r.PlatformUtils.isApp()&&(h=i.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
var t;
'login'===(null==e?void 0:e.service)&&'isLogin'===(null==e?void 0:e.action)&&'boolean'==typeof(null==e||null==(t=e.param)?void 0:t.isLogin)&&(r.AppStore.setIsLogin(e.param.isLogin),e.param.isLogin?ee():k([]))
}
)))),'web'===i.Platform.OS&&document.addEventListener('scroll',pe),function(){
h&&h.remove(),v&&clearTimeout(v),'web'===i.Platform.OS&&document.removeEventListener('scroll',pe)
}

}
),[w]),(0,n.useImperativeHandle)(f,(function(){
return{
resetClick:pe
}

}
)),(0,s.jsx)(r.WithTheme,{
themeStyles:l.default,children:function(e,t,r,o){
return b=r,j=o,(0,s.jsxs)(s.Fragment,{
children:[me(e,L),'web'===i.Platform.OS?!L&&se(e):!L&&(0,s.jsx)(i.Animated.ScrollView,{
onMomentumScrollEnd:K,onScrollBeginDrag:X,style:{
height:o-p-56-48
}
,children:se(e)
}
)]
}
)
}

}
)
}
));
y.displayName='TabContent';
_e.default=y
}
),"3bc70cd0a02d17660f0a524210bd1dd731702ecd3775beb6976ba2ecea1b34b8",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","4730b9ceb0e546f187f92e1e762cb0535bcf3b688bc57a3f88ad394ef7ffa25c","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","896583200ecd0c667d8777c58c6c2fb99f25cdc3ab47f16293902a71f95d98a9","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(a,e,r,m,n,d,s){
n.exports={
CAR_DETAIL:{
name:"CarDetail",displayName:"CarDetail"
}
,CAR_ORDER_CONFIRM:{
name:"CarOrderConfirm",displayName:"CarOrderConfirm"
}
,CAR_BOOK:{
name:"CarBook",displayName:"CarBook"
}
,CAR_ORDER_DETAIL:{
name:"CarOrderDetail",displayName:"CarOrderDeatil"
}
,SHOP:{
name:"Shop",displayName:"vrn-Shop"
}
,MEMBER:{
name:"Member",displayName:"vrn-Member"
}
,MESSAGE:{
name:"Message",displayName:"vrn-Message"
}
,O2OGUIDE:{
name:"O2oGuide",displayName:"vrn-o2oguide"
}
,ADDRESS:{
name:"Address",displayName:"vrn-Address"
}
,DISPUTE:{
name:"Dispute",displayName:"vrn-Dispute"
}
,FEEDBACK:{
name:"Feedback",displayName:"vrn-Feedback"
}
,COMPANY:{
name:"Company",displayName:"vrn-Company"
}
,EXCHANGE:{
name:"Exchange",displayName:"vrn-Exchange"
}
,USER:{
name:"User",displayName:"vrn-User"
}

}

}
),"96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5",[]);

__r("a3388b1ba7925abc3ce147ef1044d0a78de8ff49daf295e7ea99ff28af791e3a");

__r("75fa714a720aebf8db05934fc1c96e526cdd3a0e1078bf2466e20190d390da4a");

//# sourceMappingURL=shop.android.bundle.map