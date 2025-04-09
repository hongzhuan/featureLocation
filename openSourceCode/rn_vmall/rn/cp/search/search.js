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
var t: any = r(d[0]),n=r(d[1])(r(d[2]));
(0,r(d[3]).configure)({
useProxies:'never'
}
),t.Text.defaultProps=Object.assign({

}
,t.Text.defaultProps,{
allowFontScaling:!1
}
),t.TextInput.defaultProps=Object.assign({

}
,t.TextInput.defaultProps,{
defaultProps:!1
}
),t.AppRegistry.registerComponent(r(d[4]).SEARCH.name,(function(){
return n.default
}
))
}
),"3cf24871150e99191b7410b825956622df18d0fc65647ac3054bd0b420958ec5",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","d36d24673b8543aaa3a49a37172792f9e2df0069ff40762356087cc787c82fc8","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),s=r(d[0])(r(d[3])),o=r(d[0])(r(d[4])),n=r(d[0])(r(d[5])),l=r(d[0])(r(d[6])),u=r(d[7]),p=r(d[0])(r(d[8]));
// 函数
function h(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(h=function(){
return!!t
}
)()
}
(0,r(d[9]).enableScreens)(!1),(0,r(d[10]).setCustomText)();
var c=(function(l){
// 函数
function c(e: any): any {
var n,l,p,f;
return(0,t.default)(this,c),l=this,p=c,f=[e],p=(0,o.default)(p),n=(0,s.default)(l,h()?Reflect.construct(p,f||[],(0,o.default)(l).constructor):p.apply(l,f)),r(d[10]).DeviceUtils.deviceStore(e),r(d[10]).AppStore.setIsLogin(e.isLogin),r(d[10]).appIdStore.setIsPreload(e.isPreInstalledPackage),n.state={
updateEnv:!1,defaultStyle:'default',DarkStyle:!1,width:u.Dimensions.get('window').width,isJump:!1,pageId:'',statusBarHeight:void 0!==e.statusBarHeight?e.statusBarHeight:u.StatusBar.currentHeight||0
}
,n._onLayout=n._onLayout.bind(n),(0,r(d[10]).captureException)('search'),n
}
return(0,n.default)(c,l),(0,e.default)(c,[{
key:"componentDidMount",value:function(){
if(!r(d[10]).PlatformUtils.isWeb()){
var t,e,s,o,n,l,u;
this.registerListeners();
// 变量
var p: any = this.props,h=p.apiEnv,c=p.darkConfigInfo,f=p.darkMode,v=p.fontSize,S=p.densityScale,y=p.networkFields;
r(d[10]).fontStore.setVersion(null==(t=JSON.parse(y))?void 0:t.version),(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())&&(v&&r(d[10]).fontStore.setFontMutiple(v),S&&r(d[10]).fontStore.setDensityScale(S));
var k=h&&JSON.parse(h)||{

}
,D=(null==(e=this.props)?void 0:e.userAbTest)&&JSON.parse(this.props.userAbTest)||[];
D=null==(s=D)||null==(o=s.map((function(t){
return t.strategyId||''
}
)))?void 0:o.join(','),k.strategies=D||'';
// 变量
var P: any = null==(n=this.props)||null==(l=n.pageId)?void 0:l.toString();
this.darkDate=c&&(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony()?JSON.parse(JSON.parse(c)):JSON.parse(c))||{

}
,(0,r(d[10]).getRnProductComponentSizeEnable)(),f&&JSON.parse(f)&&this.darkDate.darkMode&&'Y'===this.darkDate.darkMode?(this.setState({
defaultStyle:'huawei_dark',DarkStyle:!0
}
),r(d[10]).DarkStore.setDarkBool(f)):(this.setState({
defaultStyle:'default',DarkStyle:!1
}
),r(d[10]).DarkStore.setDarkBool(!1)),k.pageId=P,r(d[10]).appIdStore.deviceType||r(d[10]).appIdStore.getDeviceType(),r(d[10]).appIdStore.setApkPackageName(null==(u=this.props)?void 0:u.appPackageName),(0,r(d[10]).envService)(k),(0,r(d[11]).ImgArrayUpdata)(),this.setState({
updateEnv:!0,pageId:P
}
)
}

}

}
,{
key:"componentWillUnmount",value:function(){
this.statusBarListener&&this.statusBarListener.remove()
}

}
,{
key:"registerListeners",value:function(){
// 变量
var t: any = this;
this.statusBarListener=r(d[10]).PlatformUtils.isHarmony()&&r(d[10]).DeviceUtils.getBarHeight((function(e){
void 0!==e&&e!==t.state.statusBarHeight&&t.setState({
statusBarHeight:e
}
)
}
))
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
var t,e=this.props.RnPromptMsg,s=(0,r(d[10]).getLanguage)(this.props),o=(0,r(d[12]).handleI18nextNative)(e,s),n=r(d[10]).PlatformUtils.isIOS()?!r(d[10]).DarkStore.QMbool&&this.state.DarkStyle:this.props.darkMode&&'Y'===(null==(t=this.darkDate)?void 0:t.darkMode);
return r(d[10]).DarkStore.setDarkBool(n),this.state.updateEnv&&o?(0,r(d[13]).jsxs)(r(d[10]).Provider,{
theme:n?'huawei_dark':'default',width:this.state.width,children:[(0,r(d[13]).jsx)(r(d[14]).Provider,{
store:r(d[10]).AppStore,children:(0,r(d[13]).jsx)(r(d[15]).I18nextProvider,{
i18n:o,children:(0,r(d[13]).jsx)(p.default,Object.assign({

}
,this.props,{
statusBarHeight:this.state.statusBarHeight,searchParams:this.props.searchParams,pageId:this.props.pageId,pageAlias:this.props.pn,DarkStyle:n
}
))
}
)
}
),(0,r(d[13]).jsx)(u.View,{
onLayout:this._onLayout
}
)]
}
):(0,r(d[13]).jsx)(u.View,{
onLayout:this._onLayout
}
)
}

}
])
}
)(l.default.Component);
_e.default=c
}
),"d36d24673b8543aaa3a49a37172792f9e2df0069ff40762356087cc787c82fc8",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","26e9779721c856bb3e39c190d909fcfd3ee680ba3e4504d1379fd3a948c8c689","6310a04b881ed905f1bdf4c0f9d054035622e97f0fd28f13c5b95f073129ad55","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","26abed5e0338f4e7f6ab2c7c877c4313b45f687e86fa36e42d6072f91e82bfed","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),r=_r(d[0])(_r(d[3])),o=_r(d[0])(_r(d[4])),a=_r(d[0])(_r(d[5])),n=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = i(t);
if(r&&r.has(e))return r.get(e);
var o={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var l: any = a?Object.getOwnPropertyDescriptor(e,n):null;
l&&(l.get||l.set)?Object.defineProperty(o,n,l):o[n]=e[n]
}
return o.default=e,r&&r.set(e,o),o
}
)(_r(d[6])),l=_r(d[7]),u=_r(d[0])(_r(d[8]));
// 函数
function i(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(i=function(e){
return e?r:t
}
)(e)
}
// 函数
function s(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(s=function(){
return!!e
}
)()
}
var c='SearchDefault',f={

}
,p=0;
if(_r(d[9]).PlatformUtils.isWeb()){
var S=_r(d[9]).UrlUtils.getQueryStr('searchParams')||'{

}
';
f=JSON.parse(S),!_r(d[9]).CommonUtils.isEmpty(f)&&f.targetRoute?c=f.targetRoute:_r(d[9]).UrlUtils.getQueryStr('targetRoute')?(c=_r(d[9]).UrlUtils.getQueryStr('targetRoute'),f.routeParams={

}
,f.routeParams.searchWord=_r(d[9]).UrlUtils.getQueryStr('searchWord')||'\u641c\u7d22'):c='SearchDefault';
// 变量
var h: any = _r(d[9]).UrlUtils.getQueryStr('prodSearchScope'),v=_r(d[9]).UrlUtils.getQueryStr('searchScence');
_r(d[9]).SearchResultStore.setProdSearchScope(h),_r(d[9]).SearchResultStore.setSearchScence(v),p=window.screen.width
}
var y=(function(n){
// 函数
function i(t: any): any {
var a,n,l,u;
if((0,e.default)(this,i),n=this,l=i,u=[t],l=(0,o.default)(l),a=(0,r.default)(n,s()?Reflect.construct(l,u||[],(0,o.default)(n).constructor):l.apply(n,u)),_r(d[9]).PlatformUtils.isApp()){
var p,S,h,v,y=(null==t?void 0:t.searchParams)||'{

}
',U=_r(d[9]).PlatformUtils.isIOS()&&-1!==(null==y?void 0:y.indexOf('%'));
if(f=JSON.parse(U?decodeURIComponent(y):y),!_r(d[9]).CommonUtils.isEmpty(f)&&f.targetRoute)c=null==(v=f)?void 0:v.targetRoute;
else if(null!=(p=a.props)&&p.targetRoute){
var w;
c=null==(w=a.props)?void 0:w.targetRoute
}
else c='SearchDefault';
_r(d[9]).SearchResultStore.updateRouteName(c),_r(d[9]).SearchResultStore.setProdSearchScope(null==(S=a.props)?void 0:S.prodSearchScope),_r(d[9]).SearchResultStore.setSearchScence(null==(h=a.props)?void 0:h.searchScence)
}
return a
}
return(0,a.default)(i,n),(0,t.default)(i,[{
key:"componentDidMount",value:function(){
_r(d[9]).cacheUtils.refreshCacheStrategy(),_r(d[9]).PlatformUtils.isWeb()&&_r(d[9]).PlatformUtils.isWap(l.Dimensions.get('window').width)&&(this.resizeListener=window.addEventListener('resize',(function(){
Math.abs(window.screen.width-p)>200&&window.location.reload()
}
)))
}

}
,{
key:"componentWillUnmount",value:function(){
c='SearchDefault',_r(d[9]).PlatformUtils.isWeb()&&this.resizeListener&&window.removeEventListener('resize',(function(){

}
))
}

}
,{
key:"render",value:function(){
return(0,_r(d[10]).jsx)(u.default,Object.assign({
defaultRoute:c,searchParams:f
}
,this.props,{
pageId:''
}
))
}

}
])
}
)(n.Component);
_e.default=y
}
),"26e9779721c856bb3e39c190d909fcfd3ee680ba3e4504d1379fd3a948c8c689",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","0eb454fbdc71e0373e5d124a8b38057db9b85f23db7bead22d9557d5e490bcf2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),n=(r(d[0])(r(d[2])),r(d[0])(r(d[3]))),o=r(d[0])(r(d[4])),c=r(d[0])(r(d[5])),s=["searchParams","defaultRoute"];
e.default=function(l){
var u=l.searchParams,f=void 0===u?'{

}
':u,h=l.defaultRoute,S=(0,t.default)(l,s),p=(0,r(d[6]).createStackNavigator)(),j=function(){
return{
cardStyle:{
opacity:1
}

}

}
,v=r(d[7]).PlatformUtils.isIOS()&&-1!==(null==f?void 0:f.indexOf('%'));
return(0,r(d[8]).jsx)(r(d[9]).NavigationContainer,{
children:(0,r(d[8]).jsxs)(p.Navigator,{
initialRouteName:h||'SearchDefault',children:[(0,r(d[8]).jsx)(p.Screen,{
name:"SearchDefault",options:{
headerShown:!1,title:(0,r(d[7]).t)('search_page'),cardStyleInterpolator:j
}
,children:function(t){
return(0,r(d[8]).jsx)(n.default,Object.assign({

}
,t,f,S))
}

}
),(0,r(d[8]).jsx)(p.Screen,{
name:"SearchPage",options:{
headerShown:!1,title:(0,r(d[7]).t)('search_result_page'),cardStyleInterpolator:j
}
,children:function(t){
return(0,r(d[8]).jsx)(o.default,Object.assign({

}
,t,JSON.parse(v?decodeURIComponent(f):f),S))
}

}
),(0,r(d[8]).jsx)(p.Screen,{
name:"SearchAccessory",options:{
headerShown:!1,title:(0,r(d[7]).t)('accessories_center'),cardStyleInterpolator:j
}
,children:function(t){
return(0,r(d[8]).jsx)(c.default,Object.assign({

}
,t,JSON.parse(v?decodeURIComponent(f):f),S))
}

}
)]
}
)
}
)
}

}
),"0eb454fbdc71e0373e5d124a8b38057db9b85f23db7bead22d9557d5e490bcf2",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","9a46dd7eba1ef94d625ba748404e4e5a055539131c11189441e75277cd25a48a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","c15c1b131a2ed86be995365ca8a5d51215a2519f0708cb508b5162855e7571b0","7d92914a182ad3c9483edf5b5af0aa4d955b7bf2499fc483e5c6a316633453b9","e137367ee855f01021826755c24a89dc09f1ba03f2983f2ccb942b5bc4c52685","b59f5741143d747a6b7458314d550fc2033674c2475d4bcae93d5c5db8ca365c","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","58acbb2a11d12e39fd248a1b96db102c400867b55536474cd5eb8b47fc1caf0e"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e,t=r(d[0])(r(d[1])),o=r(d[0])(r(d[2])),n=r(d[0])(r(d[3])),s=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),u=r(d[0])(r(d[6])),c=r(d[7]),h=r(d[0])(r(d[8])),p=r(d[0])(r(d[9]));
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
var f='',v={

}
,y={

}
,P=(0,r(d[10]).observer)(e=(function(e){
// 函数
function u(e: any): any {
var o,l,P,w;
return(0,t.default)(this,u),l=this,P=u,w=[e],P=(0,s.default)(P),(o=(0,n.default)(l,S()?Reflect.construct(P,w||[],(0,s.default)(l).constructor):P.apply(l,w))).hasSubtabSet=!1,o.currentTime=(new Date).getTime(),o.showSearchBarTimer=null,o.handleAddListeners=function(){
c.BackHandler.addEventListener('hardwareBackPress',o.handleApkBack),o.tabListener=c.DeviceEventEmitter.addListener('TabsNavTop',o.compareFixed)
}
,o.handleApkBack=function(){
return r(d[11]).DeviceUtils.goBack(),!0
}
,o.handleAppStateChange=function(e){
r(d[11]).RecordUtils.immediateOutputLog(e)
}
,o._onMomentumScrollEnd=function(e){
c.DeviceEventEmitter.emit('onScrollEvent',e,r(d[11]).PAGE_TYPE.search)
}
,o._onScrollBeginDrag=function(e){
c.DeviceEventEmitter.emit('onScrollBeginDragEvent',e)
}
,o._onLayout=function(e){
(0,r(d[11]).onLayout)(e),(0,r(d[11]).layout)(e,o.props.pageType||r(d[11]).PAGE_TYPE.search)
}
,o._loadErrorPage=function(){
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:p.default,children:function(e){
return(0,r(d[12]).jsx)(r(d[12]).Fragment,{
children:(0,r(d[12]).jsx)(r(d[13]).CommonErrorPage,{
errorType:o.state.errorType
}
)
}
)
}

}
)
}
,o._loadPage=function(){
var e;
if(r(d[11]).PlatformUtils.isWeb()){
var t=r(d[11]).UrlUtils.getQueryStr('searchParams')||'{

}
';
y=JSON.parse(t),r(d[11]).CommonUtils.isEmpty(y)||r(d[11]).CommonUtils.isEmpty(y.routeParams)?(f=r(d[11]).UrlUtils.getQueryStr('searchWord')||'',v={
searchHistoryShow:r(d[11]).UrlUtils.getQueryStr('searchHistoryShow')||'true',searchHotListShow:r(d[11]).UrlUtils.getQueryStr('searchHotListShow')||'true',searchResultPageProdShow:r(d[11]).UrlUtils.getQueryStr('searchResultPageProdShow')||'true',searchResultPageActivityShow:r(d[11]).UrlUtils.getQueryStr('searchResultPageActivityShow')||'true',searchResultPageContentShow:r(d[11]).UrlUtils.getQueryStr('searchResultPageContentShow'),searchFindShow:r(d[11]).UrlUtils.getQueryStr('searchFindShow')||'true',relativeWordShow:r(d[11]).UrlUtils.getQueryStr('relativeWordShow')||'true',prodSearchScope:r(d[11]).UrlUtils.getQueryStr('prodSearchScope')||'all',searchScence:r(d[11]).UrlUtils.getQueryStr('searchScence')||''
}
):(f=o.getHotWord(),v=o.getConfigInfo())
}
else{
var n,s,l,u,c,p,S;
if(null!=(n=o.props)&&n.configInfo)f=null!=(s=o.props)&&s.searchWord&&'undefined'!==(null==(l=o.props)?void 0:l.searchWord)?null==(u=o.props)?void 0:u.searchWord:'',v=null!=(c=o.props)&&c.configInfo&&'undefined'!==(null==(p=o.props)?void 0:p.configInfo)?JSON.parse(null==(S=o.props)?void 0:S.configInfo):{

}
;
else f=o.props.searchWord||'',v={
searchHistoryShow:o.props.searchHistoryShow||'true',searchHotListShow:o.props.searchHotListShow||'true',searchResultPageProdShow:o.props.searchResultPageProdShow||'true',searchResultPageActivityShow:o.props.searchResultPageActivityShow||'true',searchResultPageContentShow:o.props.searchResultPageContentShow,searchFindShow:o.props.searchFindShow||'true',relativeWordShow:o.props.relativeWordShow||'true',prodSearchScope:o.props.prodSearchScope||'all',searchScence:o.props.searchScence||''
}

}
if(r(d[11]).PlatformUtils.isHarmony()&&!0===(null==(e=o.props.route.params)?void 0:e.showSearchBar)){
// 变量
var P: any = o.props.route.params.hideKeyBoard?500:5;
o.showSearchBarTimer&&clearTimeout(o.showSearchBarTimer),o.showSearchBarTimer=setTimeout((function(){
r(d[11]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!0,uniqueId:o.props.uniqueId
}
),r(d[11]).RnBridge.invokeVmallNative('search','refreshWord',{
content:'',uniqueId:o.props.uniqueId
}
)
}
),P)
}
var w={
uniqueId:o.props.uniqueId
}
;
return(0,r(d[12]).jsx)(h.default,{
navigation:o.props.navigation,placeholder:f,configInfo:v,route:o.props.route,otherParams:w,statusBarHeight:o.props.statusBarHeight
}
)
}
,o.state={
scrollY:new c.Animated.Value(0),error:!1,errorType:r(d[11]).ERROR_TYPE.OTHER_ERROR
}
,r(d[11]).CommonUtils.storeE2eId(r(d[11]).PAGE_TYPE_E2EID.search,!0),o
}
return(0,l.default)(u,e),(0,o.default)(u,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
r(d[11]).RecordUtils.logger("Search",'componentDidMount'),r(d[11]).TimeUtils.updateSystemTime().then((function(t){
e.currentTime=t
}
)).finally((function(){

}
)),this.portal=r(d[11]).MCP_PORTAL.APP,this.appStateListener=c.AppState.addEventListener('change',this.handleAppStateChange),r(d[11]).PlatformUtils.isWeb()&&(r(d[11]).CookieUtils.saveCpsToCookie(),r(d[11]).CookieUtils.querySystemConfigByCar())
}

}
,{
key:"compareFixed",value:function(){
this.hasSubtabSet=r(d[11]).TabsTopStore.tabsNavTop
}

}
,{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentWillUnmount",value:function(){
var e,t;
this.state.scrollY&&this.state.scrollY.removeAllListeners(),c.BackHandler.removeEventListener('hardwareBackPress',this.handleApkBack),null==(e=this.tabListener)||e.remove(),null==(t=this.appStateListener)||t.remove(),this.showSearchBarTimer&&clearTimeout(this.showSearchBarTimer)
}

}
,{
key:"render",value:function(){
return!this.state.error&&this._loadPage()||this._loadErrorPage()
}

}
,{
key:"getConfigInfo",value:function(){
var e,t,o;
return null!=(e=y.routeParams)&&e.configInfo&&'undefined'!==(null==(t=y.routeParams)?void 0:t.configInfo)?JSON.parse(decodeURIComponent(null==(o=y.routeParams)?void 0:o.configInfo)):{

}

}

}
,{
key:"getHotWord",value:function(){
var e,t,o;
return null!=(e=y.routeParams)&&e.searchWord&&'undefined'!==(null==(t=y.routeParams)?void 0:t.searchWord)?null==(o=y.routeParams)?void 0:o.searchWord:''
}

}
])
}
)(u.default.Component))||e;
_e.default=P
}
),"c15c1b131a2ed86be995365ca8a5d51215a2519f0708cb508b5162855e7571b0",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","130050afd3cbe989152ec12123f982fb1e346ae2af407403891894b34bd5fea7","160282cdd7666c784557522df833316038f171f95e273a5a1279d77094c8f002","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.SearchPageAppWapClass=void 0;
var e,t,a=_r(d[0])(_r(d[1])),i=_r(d[0])(_r(d[2])),s=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),o=_r(d[0])(_r(d[5])),n=_r(d[0])(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var a: any = b(t);
if(a&&a.has(e))return a.get(e);
var i={
__proto__:null
}
,s=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var o: any = s?Object.getOwnPropertyDescriptor(e,r):null;
o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]
}
return i.default=e,a&&a.set(e,i),i
}
)(_r(d[7])),c=_r(d[8]),u=_r(d[0])(_r(d[9])),h=_r(d[0])(_r(d[10])),p=_r(d[0])(_r(d[11])),f=_r(d[0])(_r(d[12])),S=_r(d[0])(_r(d[13])),v=_r(d[0])(_r(d[14])),y=_r(d[0])(_r(d[15])),w=_r(d[0])(_r(d[16])),P=_r(d[0])(_r(d[17])),I=_r(d[0])(_r(d[18]));
// 函数
function b(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,a=new WeakMap;
return(b=function(e){
return e?a:t
}
)(e)
}
// 函数
function L(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(L=function(){
return!!e
}
)()
}
var U=_r(d[19]).MpUtils.Input,x=0,T=0;
_r(d[19]).PlatformUtils.isIOS()&&(_r(d[19]).DeviceUtils.getStatusBarHeight().then((function(e){
x=e
}
)).catch((function(){

}
)),_r(d[19]).DeviceUtils.getSafeAreaBottomHeight().then((function(e){
T=e
}
)).catch((function(){

}
)));
var C=(0,_r(d[20]).observer)((t=(function(e){
// 函数
function t(e: any): any {
var s,n,l,h,S,P,b,U,x,T,C;
return(0,i.default)(this,t),x=this,T=t,C=[e],T=(0,o.default)(T),(U=(0,r.default)(x,L()?Reflect.construct(T,C||[],(0,o.default)(x).constructor):T.apply(x,C))).wapTimer=null,U.wapBlurTimer=null,U.arrLabels=[],U.cidTime=null,U.cidListener=null,U.isClickLabelName=!0,U.textInputValue='',U.searchWordListener=null,U.isWapDidMount=function(){
U.wapIsLogin(),window.sessionStorage.getItem('3rd_app_not_pullup_cid_list')?U.getShow():U.cidListener=c.DeviceEventEmitter.addListener('sendCid',(function(){
U.getShow()
}
))
}
,U.updataSetState=function(e){
e?U._queryAssociationWordInfo(e):U.setState({
isAssWordShow:!1,relationArr:[]
}
)
}
,U._update=function(e){
// 变量
var t: any = e||'',a=_r(d[19]).PlatformUtils.isWx();
U.textInputValue=t,a&&U.setState({
isUpdataValue:!0
}
),a?U.updataSetState(t):U.setState({
value:t,isAssWordShow:!1
}
,(function(){
U.updataSetState(t)
}
)),U.wapTimer&&clearTimeout(U.wapTimer),U.wapTimer=setTimeout((function(){
a&&U.setState({
value:t,isUpdataValue:!1
}
),U.textInput&&U.textInput.focus()
}
),a?200:50)
}
,U.handleAddListeners=function(){
c.BackHandler.addEventListener('hardwareBackPress',U.handleApkBack)
}
,U.handleApkBack=function(){
if(''===U.state.value)return!0===f.default.searchAccessoryRouter?U.props.navigation.replace('SearchAccessory'):_r(d[19]).DeviceUtils.goBack(),!0;
U.setState({
value:'',isAssWordShow:!1
}
)
}
,U.getLocalSearchId=(0,a.default)((function*(){
if(_r(d[19]).PlatformUtils.isHarmony()){
// 变量
var e: any = yield _r(d[19]).StorageUtil.getSpValueAll('rnSearchId','String');
e?U.setState({
searchId:e
}
):U.getSearchId()
}
else _r(d[19]).RnBridge.invokeVmallNative('common','getSearchId',{

}
).then((function(e){
e&&(e.searchId?U.setState({
searchId:e.searchId
}
):U.getSearchId())
}
))
}
)),U.getSearchId=(0,a.default)((function*(){
// 变量
var e: any = yield _r(d[19]).DeviceUtils.getDeviceInfo(_r(d[19]).APP_INFOS.DEVICE_INFO);
_r(d[19]).HttpService.queryPrd({
keyword:' ',pageNum:'1',pageSize:'18',searchSortField:'0',searchSortType:'desc',tid:null==e?void 0:e.tid,sid:void 0,searchFlag:'0',screenParams:void 0,portal:'3',lang:'zh_CN',country:'CN',version:'1'
}
).then((function(e){
null!=e&&e.success&&(U.state.searchId||(U.setState({
searchId:e.searchId
}
),_r(d[19]).PlatformUtils.isHarmony()&&_r(d[19]).StorageUtil.setSpValueAll('rnSearchId',e.searchId,'String'),U._deleteQueryHis(e.searchId)))
}
)).catch((function(){

}
))
}
)),U._deleteQueryHis=function(e){
_r(d[19]).PlatformUtils.isWeb()&&window.localStorage.setItem('searchHistoryList','');
var t=_r(d[19]).PlatformUtils.isApp()?{
version:'1',searchId:e
}
:null;
_r(d[19]).HttpService.deleteQueryHis(t)
}
,U.reportInit=function(){
// 变量
var e: any = _r(d[19]).PlatformUtils.isApp()?_r(d[19]).EVENT_ID.SEARCHPAGEINITAPK:_r(d[19]).EVENT_ID.SEARCHPAGEINITWAP;
_r(d[19]).EventTracking.eventTracingReportRightNow({
actionCode:_r(d[19]).PlatformUtils.isMp()?'100090001':e,actionName:'\u52a0\u8f7d\u9875\u9762\u62a5\u5168\u90e8\u5546\u54c1\u5217\u8868',eventType:_r(d[19]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageType:'Search',pageId:_r(d[21]).searchPage.pageId,pageCatCode:_r(d[21]).searchPage.pageCatCode,pageCatName:_r(d[21]).searchPage.pageCatName,content:{
load:'1'
}

}
)
}
,U.apkAndIosIsLogin=(0,a.default)((function*(){
// 变量
var e: any = 'boolean'==typeof _r(d[19]).AppStore.isLogin?_r(d[19]).AppStore.isLogin:yield _r(d[19]).LoginUtils.getLoginStatus();
U.setState({
isLogin:e
}
),e||_r(d[19]).PlatformUtils.isMp()||U.getLocalSearchId()
}
)),U.wapIsLogin=(0,a.default)((function*(){
// 变量
var e: any = 'boolean'==typeof _r(d[19]).AppStore.isLogin?_r(d[19]).AppStore.isLogin:yield _r(d[19]).LoginUtils.getLoginStatus();
U.setState({
isLogin:e
}
)
}
)),U.isSmall=function(){
// 变量
var e: any = _r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth;
return _r(d[19]).ScreenUtils.isSmall(e)
}
,U.isPadHorizontal=function(){
// 变量
var e: any = _r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth,t=_r(d[19]).CommonUtils.getWindowSize('searchPage').screenHeight;
return _r(d[19]).ScreenUtils.isPadHorizontal(e,t)
}
,U._queryAssociationWordInfo=function(e){
_r(d[19]).HttpService.queryAssociationWordInfo(e).then((function(e){
(null==e?void 0:e.wordList.length)>0?(U.count=0,e.wordList.map((function(e){
var t;
U.count+=null==e||null==(t=e.labels)?void 0:t.length
}
)),U.arrLabels=[],U.setState({
assWordList:e.wordList||[],isAssWordShow:!0,labelsShow:!0
}
)):U.setState({
assWordList:[],isAssWordShow:!1
}
)
}
))
}
,U._onLayout=function(e,t,a){
// 变量
var i: any = 0;
U.handleLabels(e,t,a),U.arrLabels.map((function(e){
i+=e.length
}
)),U.count===i&&(_r(d[19]).PlatformUtils.isIOS()&&U.arrLabels.map((function(e){
e.sort((function(e,t){
return e.index-t.index
}
))
}
)),U.setState({
labelsShow:!1
}
))
}
,U.onLayoutMp=function(e,t){
var a=function(e){
// 变量
var a: any = 0;
void 0===U.arrLabels[t]&&(U.arrLabels[t]=[]),U.arrLabels[t].push(e),U.arrLabels.map((function(e){
a+=e.length
}
)),U.count===a&&U.setState({
labelsShow:!1
}
)
}
,i=_r(d[19]).PlatformUtils.isWx()?wx:my;
setTimeout((function(){
U.mpSelectorQuery=i.createSelectorQuery().select(e).boundingClientRect(),U.mpSelectorQuery.exec((function(e){
var t,i=(null==(t=e[0])?void 0:t.width)||0;
a(i)
}
))
}
),5)
}
,U._labelsListShow=function(e,t,a,i){
var s=null==t?void 0:t.map((function(t,a){
return _r(d[19]).PlatformUtils.isMp()&&U.onLayoutMp('#myText'+i+a,i),(0,_r(d[22]).jsx)(c.TouchableOpacity,{
style:[e.labelView,_r(d[19]).PlatformUtils.isIOS()&&{
flexWrap:'wrap'
}
,{
marginRight:U.pageMargin().labelListMargin
}
],children:(0,_r(d[22]).jsx)(c.Text,{
style:e.labelText,onTextLayout:function(e){
_r(d[19]).PlatformUtils.isAndroid()&&U._onLayout(e,i)
}
,onLayout:function(e){
!_r(d[19]).PlatformUtils.isAndroid()&&U._onLayout(e,i,a)
}
,id:'myText'+i+a,children:t
}
)
}
)
}
));
return s
}
,U._labelsListShowOther=function(e,t,a,i,s,r){
// 变量
var o: any = (s-2*r)/2-24;
return null==t?void 0:t.map((function(s,r){
return U.isShowLabel(i,o)?(0,_r(d[22]).jsx)(c.TouchableOpacity,{
style:[e.labelView,{
marginRight:U.pageMargin().labelListMargin
}
],onPress:function(){
return U.goToSearchAss(a+t[r],'7',i,t[r])
}
,children:(0,_r(d[22]).jsx)(c.Text,{
style:e.labelText,children:s
}
)
}
,r):null
}
))
}
,U.isShowLabel=function(e,t){
return e<U.arrLabels.length&&!!U.arrLabels[e]&&(_r(d[19]).PlatformUtils.isAndroid()&&1===U.arrLabels[e][0]||(_r(d[19]).PlatformUtils.isIOS()||_r(d[19]).PlatformUtils.isHarmony())&&U.arrLabels[e][0].width<=t||!_r(d[19]).PlatformUtils.isApp()&&U.arrLabels[e][0]<=t)
}
,U._assWordListShow=function(e,t,a,i,s){
return U.state.assWordList.map((function(r,o){
// 变量
var n: any = r.keyword.indexOf(U.state.value);
return(0,_r(d[22]).jsxs)(_r(d[22]).Fragment,{
children:[(0,_r(d[22]).jsxs)(c.TouchableOpacity,{
style:[e.wordItem,{
marginHorizontal:t
}
],onPress:function(){
return U.goToSearchAss(r.keyword,'4',o)
}
,activeOpacity:1,testID:"search-"+o,nativeID:"search-"+o,children:[_r(d[19]).PlatformUtils.isMp()?(0,_r(d[22]).jsx)(_r(d[23]).FastImageView,{
imgUri:I.default.searchMp,imgStyle:e.searchImgMp
}
):(0,_r(d[22]).jsx)(_r(d[23]).SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:s.C13.color+s.opacityMap[s.C13.opacity]
}
),(0,_r(d[22]).jsxs)(c.View,{
style:[e.word],children:[n>=0?(0,_r(d[22]).jsxs)(c.Text,{
style:e.wordText,children:[r.keyword.substr(0,n),_r(d[19]).PlatformUtils.isAli()?(0,_r(d[22]).jsx)(c.View,{
children:(0,_r(d[22]).jsx)(c.Text,{
style:e.wordTextAss,children:U.state.value
}
)
}
):(0,_r(d[22]).jsx)(c.Text,{
style:e.wordTextAss,children:U.state.value
}
),r.keyword.substr(n+U.state.value.length)]
}
):(0,_r(d[22]).jsx)(c.Text,{
style:e.wordText,children:r.keyword
}
),(0,_r(d[22]).jsx)(c.View,{
style:e.maskGray,children:(0,_r(d[22]).jsx)(u.default,{
start:{
x:0,y:0
}
,end:{
x:1,y:0
}
,colors:a?[_r(d[19]).CommonUtils.colorRgba('#000000',0),_r(d[19]).CommonUtils.colorRgba('#000000',1)]:[_r(d[19]).CommonUtils.colorRgba('#F1F3F5',0),_r(d[19]).CommonUtils.colorRgba('#F1F3F5',1)],style:{
height:48,width:32
}
,children:(0,_r(d[22]).jsx)(c.Text,{
children:" "
}
)
}
)
}
)]
}
),(0,_r(d[22]).jsx)(c.View,{
style:[e.wordLabels,{
marginRight:-U.pageMargin().labelListMargin
}
],children:U.state.labelsShow?U._labelsListShow(e,r.labels,r.keyword,o):U._labelsListShowOther(e,r.labels,r.keyword,o,i,t)
}
)]
}
,o),(0,_r(d[22]).jsx)(c.View,{
style:[e.bottomLine,{
marginLeft:t+28,marginRight:t
}
]
}
)]
}
)
}
))
}
,U.goBackForMPResult=function(){
return!(!_r(d[19]).PlatformUtils.isMp()||!U.props.route.arrKeyWord)&&(U.props.navigation.goBack(),!0)
}
,U.clear=function(){
if(_r(d[19]).PlatformUtils.isWeb()&&(p.default.removeData('searchPage'),p.default.removeData('keyword')),U.eventTracingReportRightNow(U.state.value,U.state.assWordList),''!==U.state.value)return U.setState({
value:'',isAssWordShow:!1
}
),void U.goBackForMPResult();
U.doBack()
}
,U.doBack=function(){
// 变量
var e: any = U.props.onBack;
e&&e(),_r(d[19]).SearchResultStore.onUpdate(''),_r(d[19]).PlatformUtils.isWeb()?U.doWebBack():_r(d[19]).PlatformUtils.isMp()||(!0===f.default.searchAccessoryRouter?U.props.navigation.replace('SearchAccessory'):_r(d[19]).DeviceUtils.goBack())
}
,U.doWebBack=function(){
var e,t;
_r(d[19]).PlatformUtils.isSmartPhone()&&window&&window.override_back_btn_click?window.override_back_btn_click.jsBack():window.history.go('SearchPage'===(null==(e=U.props)||null==(t=e.navigation)?void 0:t.defaultRoute)?-2:-1)
}
,U.goToSearch=function(e,t){
// 变量
var a: any = U.props.clickItem;
U.eventTracingReportRightNow(U.state.value,U.state.assWordList);
// 变量
var i: any = '';
if(i=''===U.state.value?U.props.placeholder||'':U.state.value,e&&(i=e),!_r(d[19]).CommonUtils.isEmpty(i)){
if(_r(d[19]).PlatformUtils.isHarmony()){
// 变量
var s: any = U.props.otherParams.uniqueId;
_r(d[19]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!1,uniqueId:s
}
)
}
U.replaceNavigation(i,t),U.state.isLogin||!1===U.isContentSearch&&U.setLocalHistory(i),a(i,t||'1',U.isContentSearch),_r(d[19]).EventTracking.execReportData('',!0)
}

}
,U.goToSearchAss=function(e,t,a,i){
if(!_r(d[19]).PlatformUtils.isMp()||U.isClickLabelName){
if(_r(d[19]).PlatformUtils.isHarmony()){
var s,r=null==(s=U.props.otherParams)?void 0:s.uniqueId;
_r(d[19]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!1,uniqueId:r
}
)
}
_r(d[19]).CommonUtils.isEmpty(i)||(U.isClickLabelName=!1);
// 变量
var o: any = U.props,n=o.navigation,l=o.clickItem;
U.eventTracingReportRightNow(U.state.value,U.state.assWordList,String(a+1),i),U.eventTracingReportRightNow(U.state.value,U.state.assWordList),n.replace('SearchPage',{
keyword:e,configInfo:U.props.configInfo||{

}
,searchId:U.state.searchId,isLogin:U.state.isLogin
}
),U.state.isLogin||!1===U.isContentSearch&&U.setLocalHistory(e),l(e,t,U.isContentSearch),_r(d[19]).EventTracking.execReportData('',!0)
}
else U.isClickLabelName=!0
}
,U.blur=function(){
if(_r(d[19]).PlatformUtils.isHarmony()){
var e,t=null==(e=U.props.otherParams)?void 0:e.uniqueId;
_r(d[19]).RnBridge.invokeVmallNative('search','hideSoftKeyBoard',{
uniqueId:t
}
)
}
else U.textInput.blur()
}
,U.pageMargin=function(){
// 变量
var e: any = 16,t=8;
return U.isSmall()?(e=16,t=8):U.isPadHorizontal()?(e=32,t=16):(e=24,t=12),{
pageMargin:e,labelListMargin:t
}

}
,U.inputLayout=function(e,t,a,i){
// 变量
var s: any = !!_r(d[19]).PlatformUtils.isWx()&&U.state.isUpdataValue;
return _r(d[19]).PlatformUtils.isHarmony()?(0,_r(d[22]).jsx)(c.View,{

}
):(0,_r(d[22]).jsxs)(c.View,{
style:e.titleBarStyle,children:[U.state.showWapHeaderBackBtn&&!_r(d[19]).PlatformUtils.isMp()?(0,_r(d[22]).jsx)(c.TouchableOpacity,{
style:[{
marginLeft:U.pageMargin().pageMargin
}
,e.iconBackGround],onPress:U.clear,testID:'search-back',nativeID:'search-back',children:(0,_r(d[22]).jsx)(_r(d[23]).SvgIcon,{
iconName:"ic24-back",normalCol:t.C31.color,opacity:t.C12.opacity,width:24,height:24
}
)
}
):(0,_r(d[22]).jsx)(_r(d[22]).Fragment,{

}
),(0,_r(d[22]).jsxs)(c.View,{
style:[e.searchBox,{
marginRight:U.pageMargin().pageMargin
}
],children:[(0,_r(d[22]).jsx)(c.TouchableOpacity,{
activeOpacity:.3,style:e.searchImgBox,testID:'search-glass',nativeID:'search-glass',children:_r(d[19]).PlatformUtils.isMp()?(0,_r(d[22]).jsx)(_r(d[23]).FastImageView,{
imgUri:I.default.searchMp,imgStyle:e.searchImgMp
}
):(0,_r(d[22]).jsx)(_r(d[23]).SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:t.C13.color+t.opacityMap[t.C13.opacity]
}
)
}
),(0,_r(d[22]).jsxs)(c.View,{
style:[e.inputBox,''===U.state.value&&{
marginRight:12
}
,_r(d[19]).PlatformUtils.isHarmony()&&{
position:'relative',zIndex:0
}
],testID:'search-box',nativeID:'search-box',children:[U.renderInput(i,s,e,t,a),_r(d[19]).PlatformUtils.isApp()&&''===U.state.value&&(0,_r(d[22]).jsx)(c.View,{
style:{
position:'absolute',zIndex:-2,top:9,marginLeft:_r(d[19]).PlatformUtils.isAndroid()?5:0
}
,children:(0,_r(d[22]).jsx)(c.Text,{
numberOfLines:1,ellipsizeMode:'clip',style:e.otherText,children:U.props.placeholder||''
}
)
}
)]
}
),''===U.state.value?null:(0,_r(d[22]).jsx)(c.TouchableOpacity,{
activeOpacity:.3,style:e.crossImgBox,onPress:U.clear,testID:'search-del',nativeID:'search-del',children:_r(d[19]).PlatformUtils.isMp()?(0,_r(d[22]).jsx)(_r(d[23]).FastImageView,{
imgUri:I.default.searchClose,imgStyle:e.searchCloseMp
}
):(0,_r(d[22]).jsx)(_r(d[23]).SvgIcon,{
iconName:'cancel1',width:"18",height:"18",normalCol:t.C13.color+t.opacityMap[t.C13.opacity]
}
)
}
),(0,_r(d[22]).jsx)(c.View,{
style:e.line
}
),(0,_r(d[22]).jsx)(c.TouchableHighlight,{
style:e.searchButton,underlayColor:t.C38.color+t.opacityMap[t.C38.opacity],onPress:function(){
return U.goToSearch()
}
,testID:'search-btn',nativeID:'search-btn',children:(0,_r(d[22]).jsx)(c.Text,{
style:e.searchText,children:(0,_r(d[19]).t)('search')
}
)
}
)]
}
)]
}
)
}
,U.assWordListLayout=function(e,t,a,i,s,r,o){
return _r(d[19]).PlatformUtils.isWeb()?(0,_r(d[22]).jsx)(c.ScrollView,{
showsVerticalScrollIndicator:!1,style:e?{
flexGrow:1
}
:{
height:a-56
}
,contentContainerStyle:t.contentContainerStyle,onScrollBeginDrag:function(){
return U.blur()
}
,children:U._assWordListShow(t,i,s,r,o)
}
):_r(d[19]).PlatformUtils.isIOS()?(0,_r(d[22]).jsx)(c.View,Object.assign({
style:{
height:a-56
}

}
,U._gestureHandlers.panHandlers,{
children:U._assWordListShow(t,i,s,r,o)
}
)):(0,_r(d[22]).jsx)(c.ScrollView,{
showsVerticalScrollIndicator:!1,style:{
flexGrow:1
}
,contentContainerStyle:t.contentContainerStyle,onScrollBeginDrag:function(){
return U.blur()
}
,keyboardShouldPersistTaps:'handled',bounces:!1,children:(0,_r(d[22]).jsx)(c.View,Object.assign({

}
,U._gestureHandlers.panHandlers,{
children:U._assWordListShow(t,i,s,r,o)
}
))
}
)
}
,U.hotHisFind=function(e,t,a,i,s){
var r,o,n,l,u,h=(null==(r=U.props.configInfo)?void 0:r.searchHistoryShow)||'true',p=(null==(o=U.props.configInfo)?void 0:o.searchHotListShow)||'true',f='false'!==(null==(n=U.props.configInfo)?void 0:n.searchFindShow),S=_r(d[19]).PlatformUtils.isWeb()||_r(d[19]).PlatformUtils.isMp()||U.state.isLogin||void 0!==U.state.searchId;
return(0,_r(d[22]).jsxs)(c.ScrollView,{
showsVerticalScrollIndicator:!1,style:e?{
flexGrow:1
}
:{
height:a-56
}
,contentContainerStyle:t.contentContainerStyle,onScrollBeginDrag:function(){
return U.blur()
}
,keyboardShouldPersistTaps:'handled',bounces:_r(d[19]).PlatformUtils.isHarmony(),children:[_r(d[19]).PlatformUtils.isHarmony()&&(0,_r(d[22]).jsx)(c.Text,{
style:{
height:0
}

}
),'true'===h&&void 0!==U.state.isLogin&&S?(0,_r(d[22]).jsx)(w.default,{
margin:i,width:s,blur:U.blur,navigation:U.props.navigation,configInfo:U.props.configInfo,searchId:U.state.searchId,isLogin:U.state.isLogin,isContentSearch:U.isContentSearch,uniqueId:null==(l=U.props.otherParams)?void 0:l.uniqueId
}
):null,_r(d[19]).PlatformUtils.isHarmony()&&(0,_r(d[22]).jsx)(c.Text,{
style:{
height:0
}

}
),f?(0,_r(d[22]).jsx)(y.default,{
margin:i,width:s,navigation:U.props.navigation,configInfo:U.props.configInfo,searchId:U.state.searchId,isLogin:U.state.isLogin,blur:U.blur,isContentSearch:U.isContentSearch,labelMargin:U.pageMargin().labelListMargin,uniqueId:null==(u=U.props.otherParams)?void 0:u.uniqueId
}
):null,_r(d[19]).PlatformUtils.isHarmony()&&(0,_r(d[22]).jsx)(c.Text,{
style:{
height:0
}

}
),'true'===p?(0,_r(d[22]).jsx)(v.default,{
margin:i,width:s,navigation:U.props.navigation,blur:U.blur,isContentSearch:U.isContentSearch
}
):null]
}
)
}
,U.state={
isUpdataValue:!1,value:'',assWordList:[],isAssWordShow:!1,isLogin:void 0,searchId:void 0,labelsShow:!0,iosFlag:!_r(d[19]).PlatformUtils.isIOS()||null!=(s=null==(n=U.props.route)||null==(l=n.params)?void 0:l.iosFlag)&&s,showWapHeaderBackBtn:!(_r(d[19]).PlatformUtils.isWap(_r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth)&&window.location.search.includes('showheader=false'))
}
,U.isContentSearch='false'===(null==(h=U.props.configInfo)?void 0:h.searchResultPageProdShow)&&'true'===(null==(S=U.props.configInfo)?void 0:S.searchResultPageContentShow),U.pageSource=null==(P=U.props.route)||null==(b=P.params)?void 0:b.pageSource,U
}
return(0,n.default)(t,e),(0,s.default)(t,[{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentWillMount",value:function(){
// 变量
var e: any = this;
this._gestureHandlers=c.PanResponder.create({
onStartShouldSetPanResponderCapture:function(){
return!1
}
,onMoveShouldSetPanResponder:function(e,t){
return Math.abs(t.dx)>10||Math.abs(t.dy)>10
}
,onStartShouldSetPanResponder:function(){
return!0
}
,onMoveShouldSetPanResponderCapture:function(){
return!1
}
,onPanResponderMove:function(t,a){
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
_r(d[19]).PlatformUtils.isHarmony()&&(this.searchWordListener=c.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var a,i;
(null==(a=e.props.otherParams)?void 0:a.uniqueId)===(null==(i=t.param)?void 0:i.uniqueId)&&('search'===t.service&&'searchWord'===t.action&&e.searchValue(t.param.content),'search'===t.service&&'inputSearch'===t.action&&e.goToSearch())
}
))),_r(d[19]).PlatformUtils.isIOS()&&!this.state.iosFlag&&(this.iosTimer&&clearTimeout(this.iosTimer),this.iosTimer=setTimeout((function(){
e.setState({
iosFlag:!0
}
)
}
),500)),this.reportInit(),_r(d[19]).PlatformUtils.isApp()||_r(d[19]).PlatformUtils.isMp()?this.apkAndIosIsLogin():_r(d[19]).PlatformUtils.isWap(_r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth)&&this.isWapDidMount(),_r(d[19]).PlatformUtils.isApp()&&this.handleAddListeners(),this.updateKeyword()
}

}
,{
key:"updateKeyword",value:function(){
// 变量
var e: any = this;
this.subscription=c.DeviceEventEmitter.addListener('UPDATE_USER_DATA',(function(t){
e._update(t)
}
)),_r(d[19]).PlatformUtils.isMp()||!_r(d[19]).SearchResultStore.keyword||'searchResult'!==this.pageSource&&(_r(d[19]).PlatformUtils.isAndroid()||_r(d[19]).PlatformUtils.isHarmony())||this._update(_r(d[19]).SearchResultStore.keyword||''),_r(d[19]).PlatformUtils.isMp()&&this.props.route.arrKeyWord&&this._update(this.props.route.arrKeyWord)
}

}
,{
key:"getShow",value:function(){
var e,t=this;
this.cidTime=setTimeout((function(){
e=!(_r(d[19]).PlatformUtils.isWap(_r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth)&&window.location.search.includes('showheader=false')||_r(d[19]).CookieUtils.includeCidList()),t.setState({
showWapHeaderBackBtn:e
}
)
}
),10)
}

}
,{
key:"componentWillUnmount",value:function(){
_r(d[19]).PlatformUtils.isAndroid()&&this.wapBlurTimer&&clearTimeout(this.wapBlurTimer),this.subscription.remove(),this.wapTimer&&clearTimeout(this.wapTimer),this.iosTimer&&clearTimeout(this.iosTimer),this.searchWordListener&&this.searchWordListener.remove(),_r(d[19]).PlatformUtils.isApp()&&c.BackHandler.removeEventListener('hardwareBackPress',this.handleApkBack),this.cidTime&&clearTimeout(this.cidTime),this.cidListener&&this.cidListener.remove()
}

}
,{
key:"handleLabels",value:function(e,t,a){
if(_r(d[19]).PlatformUtils.isAndroid()){
// 变量
var i: any = e.nativeEvent.lines.length;
void 0===this.arrLabels[t]&&(this.arrLabels[t]=[]),this.arrLabels[t].push(i)
}
else if(_r(d[19]).PlatformUtils.isIOS()||_r(d[19]).PlatformUtils.isHarmony()){
// 变量
var s: any = e.nativeEvent.layout.width;
void 0===this.arrLabels[t]&&(this.arrLabels[t]=[]),this.arrLabels[t].push({
width:s,index:a
}
)
}
else{
// 变量
var r: any = e.nativeEvent.layout.width;
void 0===this.arrLabels[t]&&(this.arrLabels[t]=[]),this.arrLabels[t].push(r)
}

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
(t.arrLabels=[],t.state.value)?t._queryAssociationWordInfo(t.state.value):!t.goBackForMPResult()&&t.setState({
isAssWordShow:!1,relationArr:[]
}
)
}
))
}

}
,{
key:"replaceNavigation",value:function(e,t){
// 变量
var a: any = this.props.navigation;
_r(d[19]).PlatformUtils.isWeb()||_r(d[19]).PlatformUtils.isMp()?a.replace('SearchPage',{
keyword:e,configInfo:this.props.configInfo||{

}
,searchId:this.state.searchId,isLogin:this.state.isLogin
}
):a.replace('SearchPage',{
keyword:e,configInfo:this.props.configInfo||{

}
,searchId:this.state.searchId,isLogin:this.state.isLogin,searchFlag:'6'===t?'3':''
}
)
}

}
,{
key:"setLocalHistory",value:function(e){
if(''!==e){
// 变量
var t: any = 'searchHistoryList',a=this.refreshList(e);
_r(d[19]).PlatformUtils.isWeb()&&window.localStorage.setItem(t,JSON.stringify(a)),_r(d[19]).PlatformUtils.isMp()&&_r(d[19]).StorageUtil.setStorageSyncMp(t,JSON.stringify(a))
}

}

}
,{
key:"refreshList",value:function(e){
// 变量
var t: any = 'searchHistoryList',a=[];
try{
if(_r(d[19]).PlatformUtils.isWeb()||_r(d[19]).PlatformUtils.isMp()){
// 变量
var i: any = _r(d[19]).PlatformUtils.isWeb()?window.localStorage.getItem(t):_r(d[19]).StorageUtil.getStorageSyncMp(t);
a=JSON.parse(i||'[]').filter((function(t){
return t!==e
}
))
}

}
catch(e){

}
return a.unshift(e),a.splice(10),a
}

}
,{
key:"eventTracingReportRightNow",value:function(e,t,a,i){
if(!_r(d[19]).CommonUtils.isEmpty(t)){
// 变量
var s: any = [];
t.forEach((function(e){
s.push(e.keyword)
}
));
var r={
searchWord:e.replace(i,''),listname:s
}
,o=!_r(d[19]).CommonUtils.isEmpty(i)&&{
tagName:i
}
,n=Object.assign({

}
,r,o,{
click:'1',clicklocation:a
}
),l=_r(d[19]).CommonUtils.isEmpty(a),c={
actionCode:l?'920010058':'920010059',actionName:l?'\u8054\u60f3\u8bcd\u66dd\u5149':'\u8054\u60f3\u8bcd\u70b9\u51fb',eventType:l?_r(d[19]).EVENT_TYPE.EVENT_TYPE_EXPOSURE:_r(d[19]).EVENT_TYPE.EVENT_TYPE_CLICK,pageId:_r(d[21]).searchPage.pageIdAssociate,pageCatName:_r(d[21]).searchPage.pageCatNameAssociate,pageCatCode:_r(d[21]).searchPage.pageCatCodeAssociate,content:l?r:n,resSiteCode:_r(d[21]).searchPage.resSiteCodeAssociate,resSiteName:_r(d[21]).searchPage.resSiteNameAssociation
}
;
_r(d[19]).PlatformUtils.isMp()&&l||_r(d[19]).EventTracking.eventTracingReportRightNow(Object.assign({

}
,c))
}

}

}
,{
key:"renderInput",value:function(e,t,a,i,s){
// 变量
var r: any = this;
return _r(d[19]).PlatformUtils.isIOS()&&!this.state.iosFlag?null:_r(d[19]).PlatformUtils.isMp()?(0,_r(d[22]).jsxs)(c.View,{
style:{
width:e-146
}
,children:[(0,_r(d[22]).jsx)(U,{
value:this.state.value,placeholder:this.props.placeholder||'',focus:!0,onInput:function(e){
r.searchValue(e.detail.value)
}
,onConfirm:function(){
return r.goToSearch()
}
,confirmType:'search',style:a.inputBg
}
),t&&(0,_r(d[22]).jsx)(c.Text,{
numberOfLines:1,style:[a.inputTextMp,{
position:'absolute'
}
],children:this.textInputValue
}
)]
}
):(0,_r(d[22]).jsx)(c.TextInput,{
style:a.inputText,autoCapitalize:'none',value:this.state.value,placeholder:_r(d[19]).PlatformUtils.isApp()?'':this.props.placeholder||'',placeholderTextColor:i.C15.color+i.opacityMap[i.C15.opacity],autoFocus:!0,keyboardType:'default',onChangeText:this.searchValue.bind(this),selectionColor:'#CE0E2D',onSubmitEditing:function(){
return r.goToSearch()
}
,ref:function(e){
r.textInput=e
}
,returnKeyType:'search',allowFontScaling:!1,multiline:!1,disableFullscreenUI:!0,keyboardAppearance:s?'dark':'default'
}
)
}

}
,{
key:"checkStatusBarHeight",value:function(){
// 变量
var e: any = c.StatusBar.currentHeight;
return void 0!==this.props.statusBarHeight&&(e=this.props.statusBarHeight),e
}

}
,{
key:"render",value:function(){
var e,t=this;
if('large'===(0,_r(d[19]).screenSize)(_r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth))return null;
// 变量
var a: any = this.pageMargin().pageMargin,i=_r(d[19]).DarkStore.darkBool,s=_r(d[19]).CommonUtils.getWindowSize('searchPage').screenWidth,r=_r(d[19]).CommonUtils.getWindowSize('searchPage').screenHeight,o='false'!==(null==(e=this.props.configInfo)?void 0:e.relativeWordShow),n=_r(d[19]).PlatformUtils.isApp()||_r(d[19]).PlatformUtils.isMp();
return(0,_r(d[22]).jsx)(_r(d[19]).WithTheme,{
themeStyles:P.default,children:function(e,l){
return(0,_r(d[22]).jsxs)(_r(d[22]).Fragment,{
children:[_r(d[19]).PlatformUtils.isIOS()&&(0,_r(d[22]).jsx)(c.View,{
style:{
backgroundColor:l.C32.color,width:'100%',height:x
}

}
),_r(d[19]).PlatformUtils.isHarmony()&&(0,_r(d[22]).jsx)(c.View,{
style:{
backgroundColor:l.C32.color,width:'100%',height:t.checkStatusBarHeight()
}

}
),(0,_r(d[22]).jsxs)(c.View,{
style:[e.onLayout,n?{
flex:1
}
:{

}
,_r(d[19]).PlatformUtils.isMp()&&{
height:t.props.mpWindowHeight
}
],onLayout:function(e){
(0,_r(d[19]).layout)(e,'searchPage')
}
,children:[t.inputLayout(e,l,i,s),(0,_r(d[22]).jsxs)(c.View,{
style:[e.viewAll,n?{
flex:1
}
:{

}
],children:[_r(d[19]).PlatformUtils.isHarmony()&&(0,_r(d[22]).jsx)(c.Text,{
style:{
height:0
}

}
),t.state.isAssWordShow&&t.state.value&&o?t.assWordListLayout(n,e,r,a,i,s,l):t.hotHisFind(n,e,r,a,s)]
}
),_r(d[19]).PlatformUtils.isAndroid()&&!_r(d[19]).appIdStore.isPreload&&(0,_r(d[22]).jsx)(h.default,{
goToSearch:t.goToSearch,clearKeyword:t.clear,keyword:t.state.value
}
)]
}
),_r(d[19]).PlatformUtils.isIOS()&&T>0&&(0,_r(d[22]).jsx)(c.View,{
style:{
backgroundColor:l.C32.color,height:T,width:'100%'
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
)(l.Component),t.defaultProps={
configInfo:{
searchHistoryShow:'true',searchHotListShow:'true',searchFindShow:'true',relativeWordShow:'true'
}

}
,e=t))||e;
_e.SearchPageAppWapClass=C,_e.default=(0,_r(d[19]).componentautoscaling)((0,_r(d[19]).monitor)(S.default)((0,_r(d[19]).itemExposeHoc)(C)))
}
),"130050afd3cbe989152ec12123f982fb1e346ae2af407403891894b34bd5fea7",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","7ded2c686316356585b0d48104f3495a902614adf13228ff5f842da3dd161a09","b8ea7954ffd353f08eb3f2f456d07405bb53f9d5aafd552469a5bc3b2a71a3e1","0e4b4cf339c32c9adeb992be70cb3082d0c8cc2ee09cbb9318df2f7fbc8b8229","96f9f9b161c45c7c488092569dbfea63c082dff71b029c8e6821f05b67bff533","4b940fa55ed31f1a02f84443042c739ef4a05cba5274cabc5f8a4dfacfe1f876","7bca827f111956cd32bc219624757f24780ae1f94ec8320d2539b2498a32ef83","5853a73a19d63e39e9696730abccfae49060c6a8592de7537db30afb9b26fef4","e431913489ce240d6ca0eb0e55c4af2c8211326f6229a9fe720beba5dbd10ee1","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.SoundSearchClass=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),o=_r(d[0])(_r(d[3])),i=_r(d[0])(_r(d[4])),r=_r(d[0])(_r(d[5])),n=_r(d[0])(_r(d[6])),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = w(t);
if(o&&o.has(e))return o.get(e);
var i={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var a: any = r?Object.getOwnPropertyDescriptor(e,n):null;
a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=e[n]
}
return i.default=e,o&&o.set(e,i),i
}
)(_r(d[7])),s=_r(d[8]),l=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),h=_r(d[0])(_r(d[11])),u=_r(d[0])(_r(d[12])),f=_r(d[0])(_r(d[13])),p=_r(d[0])(_r(d[14]));
// 函数
function w(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,o=new WeakMap;
return(w=function(e){
return e?o:t
}
)(e)
}
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
var y=(function(a){
// 函数
function u(o: any): any {
var n,a,l,c;
return(0,t.default)(this,u),a=this,l=u,c=[o],l=(0,r.default)(l),(n=(0,i.default)(a,S()?Reflect.construct(l,c||[],(0,r.default)(a).constructor):l.apply(a,c))).timer=null,n.failTipsTimer=null,n.recRef=null,n._panResponder=null,n.keyboardDidShowListener=null,n.keyboardDidHideListener=null,n.voiceListener=null,n.startTouchTime=null,n.moveY=0,n.pressTimer=null,n.longPressFlag=!1,n.isSearching=!1,n.isStop=!1,n.hasAuth=!1,n.switchScreenListener=null,n.resultAnim=null,n.resultTimer=null,n.originWidth=s.Dimensions.get('window').width,n.originHeight=s.Dimensions.get('window').height,n.keybodyHeight=1,n.isTouch=!1,n.alwaysPress=!1,n.reportListener=null,n.isPadHorizontal=function(){
// 变量
var e: any = _r(d[15]).ScreenMode.width;
return _r(d[15]).ScreenUtils.isPadHorizontal(e,n.originWidth)
}
,n.isAPPPad=function(){
return _r(d[15]).PlatformUtils.isApp()&&_r(d[15]).ScreenUtils.isMedium(_r(d[15]).ScreenMode.width)
}
,n.keyboardTimer=null,n.watchVoice=function(e){
// 变量
var t: any = null==e?void 0:e.action,o=null==e?void 0:e.param,i=null==o?void 0:o.voiceState;
if('voiceProcess'===t){
if(4===i)return n.isStop=!0,void n.setState({
tips:'',loading:!0,recommedWordsShow:!1,showWave:!1,showCover:!1
}
,(function(){
setTimeout((function(){
n.handleVoiceSucc(n.state.keywordItem.keyword)
}
),1e3)
}
));
var r,a,s;
if(6===i||11204===i)n.isStop=!0,n.state.voiceTip&&(null==(r=n.recRef)||r.stopAnimation()),n.setState({
recommedWordsShow:!1,noVoiceTip:!1
}
,(function(){
n.handleVoiceFail()
}
));
if(11202===i)n.isStop=!0,n.state.voiceTip&&(null==(a=n.recRef)||a.stopAnimation()),n.setState({
noVoiceTips:(0,_r(d[15]).t)('errorNetwork'),recommedWordsShow:!1,noVoiceTip:!1
}
,(function(){
n.handleVoiceFail()
}
));
if(11203===i)n.isStop=!0,n.state.voiceTip&&(null==(s=n.recRef)||s.stopAnimation()),n.setState({
noVoiceTips:(0,_r(d[15]).t)('systemBusy'),recommedWordsShow:!1,noVoiceTip:!1
}
,(function(){
n.handleVoiceFail()
}
))
}
else if('voiceResult'===t){
var l;
if(n.state.keywordItem.keyword)n.handleVoiceSucc(n.state.keywordItem.keyword);
else n.state.voiceTip&&(null==(l=n.recRef)||l.stopAnimation()),n.setState({
recommedWordsShow:!1,noVoiceTip:!1
}
,(function(){
n.handleVoiceFail()
}
))
}

}
,n.handleClick=(0,e.default)((function*(){
n.state.recommedWordsShow||n.state.loading||n.setState({
tips:'',shortWordShow:!0,recommedWordsShow:!1,pressType:'short',showBg:!0,pageBackgroundColor:_r(d[15]).DarkStore.darkBool?'#000':'#f1f3f5'
}
,(function(){
n.hideShortWord()
}
))
}
)),n.handleLongPress=(0,e.default)((function*(){
var e;
n.alwaysPress=!0,n.isSearching=!0,n.isStop=!1,n.props.clickItem(),_r(d[15]).EventTracking.execReportData('',!0),n.state.keywordItem.keyword='',clearTimeout(n.timer),clearTimeout(n.failTipsTimer),n.state.voiceTip&&(null==(e=n.recRef)||e.stopAnimation()),n.props.keyword&&n.props.clearKeyword(),n.setState({
keywordItem:n.state.keywordItem,recommedWordsShow:!0,shortWordShow:!1,noVoiceTip:!1,showWave:!0,showBg:!0,pageBackgroundColor:_r(d[15]).DarkStore.darkBool?'#000':'#f1f3f5'
}
,(function(){
var e;
null==(e=n.recRef)||e.getRecommedSwitch(),_r(d[15]).RnBridge.invokeVmallNative('voice','startRecording',{

}
)
}
))
}
)),n.handleVoiceSucc=function(e){
n.state.keywordItem.keyword=e,n.setState({
keywordItem:n.state.keywordItem,loading:!1,noVoiceTip:!1,showWave:!1,recommedWordsShow:!1
}
,(function(){
n.isStop=!0,n.startAnimation(e)
}
))
}
,n.handleVoiceFail=function(){
n.isSearching=!1,n.setState({
loading:!1,recommedWordsShow:!0,showWave:!1,tips:'',noVoiceTip:!0
}
,(function(){
var e;
n.isTouch&&!n.isStop||(null==(e=n.recRef)||e.getRecommedSwitch(),n.backToSearch())
}
))
}
,n.backToSearch=function(){
clearTimeout(n.failTipsTimer),n.failTipsTimer=setTimeout((function(){
n.isStop=!1,n.setState({
noVoiceTip:!1,recommedWordsShow:!1,showWave:!1,loading:!1,pageBackgroundColor:'transparent',showBg:!1
}
)
}
),3e3)
}
,n.handlePressOut=function(){
n.isStop?n.setState({
tips:'',showCover:!1
}
):n.setState({
tips:'',recommedWordsShow:!1,showWave:!1,showCover:!1
}
,(function(){
n.setState({
loading:!0
}
)
}
))
}
,n.hideShortWord=function(){
n.state.keywordItem.keyword='',clearTimeout(n.timer),n.timer=setTimeout((function(){
n.setState({
shortWordShow:!1,recommedWordsShow:!1,pageBackgroundColor:'transparent',pressType:'',keywordItem:n.state.keywordItem,tip:'',showWave:!1,showBg:!1
}
)
}
),3e3)
}
,n.recWordsRef=function(e){
n.recRef=e
}
,n.onPanResponderGrant=(0,e.default)((function*(){
n.hasAuth=yield n.getVoicePermission(),n.hasAuth&&(n.isTouch=!0,n.startTouchTime=(new Date).getTime(),n.state.keywordItem.keyword='',n.setState({
keywordItem:n.state.keywordItem,showCover:!0,recommedWordsShow:!1,noVoiceTip:!1,loading:!1
}
))
}
)),n.onPanResponderMove=(function(){
var t=(0,e.default)((function*(e,t){
if(n.hasAuth&&n.isTouch){
// 变量
var o: any = t.dy;
if(n.moveY=o,(new Date).getTime()-n.startTouchTime>500){
if(n.isSearching);
else{
if(n.isStop||n.alwaysPress)return;
n.handleLongPress()
}
n.moveY<-20?n.setState({
tips:n.state.loading||n.state.keywordItem.keyword?'':(0,_r(d[15]).t)('get_off'),showCover:!1
}
):n.setState({
tips:n.state.loading||n.state.keywordItem.keyword?'':(0,_r(d[15]).t)('slide_up'),showCover:!0
}
)
}

}

}
));
return function(e,o){
return t.apply(this,arguments)
}

}
)(),n.onPanResponderEnd=function(){
n.hasAuth&&(n.isTouch=!1,n.alwaysPress=!1,n.setState({
tips:'',showCover:!1
}
),n.isStop||((new Date).getTime()-n.startTouchTime<500?n.handleClick():0===n.moveY||n.moveY>-20?(_r(d[15]).RnBridge.invokeVmallNative('voice','stopRecording',{

}
),n.handlePressOut()):n.cancelRecording()))
}
,n.cancelRecording=function(){
_r(d[15]).RnBridge.invokeVmallNative('voice','cancelRecording',{

}
),n.isSearching=!1,n.isStop=!1,n.setState({
noVoiceTip:!1,recommedWordsShow:!1,showWave:!1,loading:!1,pageBackgroundColor:'transparent',tips:'',showBg:!1,showCover:!1
}
)
}
,n.getVoicePermission=function(){
return new Promise((function(e,t){
_r(d[15]).RnBridge.invokeVmallNative('voice','authorizedRecording',{

}
).then((function(t){
e(t.authorizedVoice)
}
)).catch((function(){
t()
}
))
}
))
}
,n.startAnimation=function(e){
n.resultAnim=s.Animated.parallel(['fadeInOpacity','animatedValue'].map((function(e){
return s.Animated.timing(n.state.keywordItem[e],{
toValue:1,duration:240,delay:500,easing:s.Easing.linear,useNativeDriver:!0
}
)
}
))),n.resultAnim.start((function(){
n.setState({
showCover:!1
}
,(function(){
clearTimeout(n.resultTimer),n.resultTimer=setTimeout((function(){
n.searchAndGotoResult(e),n.isSearching=!1,n.isStop=!1
}
),1500)
}
))
}
))
}
,n.stopAnimation=function(){
var e;
null==(e=n.resultAnim)||e.stop()
}
,n._onLayOut=function(e){
n.isSearching=!1,n.isStop=!1,n.alwaysPress=!1,n.cancelRecording(),(0,_r(d[15]).onLayout)(e)
}
,n.getSoundBtnSize=function(){
var e,t;
return n.isAPPPad()||!_r(d[15]).PlatformUtils.isAndroid()?(e=n.isPadHorizontal()?_r(d[15]).ScreenMode.width-(_r(d[15]).ScreenStore.isFixScreen?500:708):191,t=40):n.isLargeFont()?(e=60+131*_r(d[15]).fontStore.fontMutiple,t=26+14*_r(d[15]).fontStore.fontMutiple,e>_r(d[15]).ScreenMode.width&&(e=_r(d[15]).ScreenMode.width)):(e=191,t=40),{
width:e,height:t
}

}
,n.getLargeFont=function(e){
return _r(d[15]).PlatformUtils.isAndroid()?_r(d[15]).CommonUtils.getFontSize(e):e
}
,n.isLargeFont=function(){
return _r(d[15]).fontStore.fontMutiple>_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_ONE&&_r(d[15]).fontStore.fontMutiple<=_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_SEVEN
}
,n.isTwiceLargeFont=function(){
return _r(d[15]).fontStore.fontMutiple>=_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_FIVE
}
,n.state={
shortWordShow:!1,recommedWordsShow:!1,tips:'',keywordItem:{
keyword:'',animatedValue:new s.Animated.Value(0),fadeInOpacity:new s.Animated.Value(0)
}
,noVoiceTip:!1,loading:!1,touchAble:!1,keyboardShow:!1,pageBackgroundColor:'transparent',pageHeight:_r(d[15]).ScreenMode.height-s.StatusBar.currentHeight,showWave:!1,pressType:'',isShowVoiceBtn:!1,noVoiceTips:(0,_r(d[15]).t)('retry_tips'),isDarkTheme:_r(d[15]).DarkStore.darkBool,showBg:!1,showCover:!1,visibleHeight:0
}
,n
}
return(0,n.default)(u,a),(0,o.default)(u,[{
key:"UNSAFE_componentWillMount",value:function(){
var e,t,o,i;
this._panResponder=s.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onMoveShouldSetPanResponder:function(){
return!0
}
,onPanResponderGrant:this.onPanResponderGrant,onPanResponderMove:this.onPanResponderMove,onPanResponderRelease:this.onPanResponderEnd
}
),null==(e=this.keyboardDidShowListener)||e.remove(),null==(t=this.keyboardDidHideListener)||t.remove(),null==(o=this.voiceListener)||o.remove(),null==(i=this.reportListener)||i.remove()
}

}
,{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.keyboardDidShowListener=s.Keyboard.addListener('keyboardDidShow',(function(t){
setTimeout((function(){
e.isPadHorizontal()?0!==e.keybodyHeight?(e.keybodyHeight>t.endCoordinates.height?e._keyboardDidHide():e.setState({
showCover:!1
}
),e.keybodyHeight=t.endCoordinates.height):(e.keybodyHeight&&e._keyboardDidHide(),e.keybodyHeight=t.endCoordinates.height):(e.keybodyHeight=t.endCoordinates.height,e.setState({
showCover:!1
}
))
}
),100)
}
)),this.keyboardDidHideListener=s.Keyboard.addListener('keyboardDidHide',(function(t){
e.keybodyHeight&&e._keyboardDidHide(),e.keybodyHeight=t.endCoordinates.height
}
)),this.initVoiceListener(),this.reportListener=s.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var o;
'authorizedVoice'===(null==t?void 0:t.action)&&'reported'===t.service&&e.props.clickAuth(null==(o=t.param)?void 0:o.isAuthorized)
}
)),this.keyboardDidShowListener=s.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
'getHeight'===(null==t?void 0:t.action)&&'screen'===t.service&&e._keyboardDidShow(t.param)
}
)),this.switchScreenListener=s.DeviceEventEmitter.addListener('switchScreenDir',this._onLayOut),_r(d[15]).HttpService.querySystemConfig(['IF_SHOW_VOICE_SEARCH']).then((function(t){
var o,i=t.systemConfigInfos&&'1'===(null==(o=t.systemConfigInfos.IF_SHOW_VOICE_SEARCH)?void 0:o.systemConfigValue);
e.setState({
isShowVoiceBtn:i
}
)
}
))
}

}
,{
key:"initVoiceListener",value:function(){
// 变量
var e: any = this;
this.voiceListener=s.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var o;
'{

}
'!==JSON.stringify(t)&&('voiceFrequency'!==(null==t?void 0:t.action)&&'voice'===t.service&&'voice'===(null==(o=t.param)?void 0:o.flag)&&(t.param.voiceData||t.param.voiceState?t.param.voiceData&&(e.state.keywordItem.keyword=t.param.voiceData):e.state.keywordItem.keyword='',e.setState({
keywordItem:e.state.keywordItem
}
,(function(){
e.watchVoice(t)
}
))))
}
))
}

}
,{
key:"_keyboardDidShow",value:function(e){
clearTimeout(this.keyboardTimer);
// 变量
var t: any = e.visibleHeight,o=_r(d[15]).CommonUtils.getWindowSize('searchPage').screenHeight;
this.setState({
keyboardShow:e.keyboadIsShow,visibleHeight:t||o
}
)
}

}
,{
key:"_keyboardDidHide",value:function(){
var e;
_r(d[15]).RnBridge.invokeVmallNative('voice','cancelRecording',{

}
),this.stopAnimation(),null==(e=this.recRef)||e.stopAnimation(),clearTimeout(this.resultTimer),clearTimeout(this.timer),this.isSearching=!1,this.isStop=!1,this.setState({
keyboardShow:!1,pageBackgroundColor:'transparent',noVoiceTip:!1,recommedWordsShow:!1,loading:!1,showWave:!1,shortWordShow:!1,tips:'',showBg:!1
}
)
}

}
,{
key:"searchAndGotoResult",value:function(e){
this.props.goToSearch(e,'6')
}

}
,{
key:"componentWillUnmount",value:function(){
var e,t,o,i,r;
clearTimeout(this.timer),clearTimeout(this.failTipsTimer),this.resultTimer&&clearTimeout(this.resultTimer),null==(e=this.switchScreenListener)||e.remove(),null==(t=this.keyboardDidShowListener)||t.remove(),null==(o=this.keyboardDidHideListener)||o.remove(),null==(i=this.voiceListener)||i.remove(),null==(r=this.reportListener)||r.remove()
}

}
,{
key:"render",value:function(){
var e=this,t=this.state.visibleHeight-56-64,o=this.state.visibleHeight-140,i=this.state.keywordItem.animatedValue.interpolate({
inputRange:[0,1],outputRange:[50,0]
}
),r=this.getSoundBtnSize(),n=this.isTwiceLargeFont(),a=n?73:56;
return(0,_r(d[16]).jsx)(_r(d[15]).WithTheme,{
themeStyles:function(t){
return(0,p.default)(t,r,e.getLargeFont)
}
,children:function(r){
return e.state.keyboardShow&&e.state.isShowVoiceBtn?(0,_r(d[16]).jsxs)(s.View,{
style:[r.pageContainer,{
backgroundColor:e.state.pageBackgroundColor,top:e.state.showBg?a:e.state.visibleHeight-64,height:e.state.showBg?e.state.visibleHeight-a:64
}
],children:[e.state.showWave?(0,_r(d[16]).jsx)(s.View,{
style:{
position:'absolute',left:0,zIndex:200
}
,children:(0,_r(d[16]).jsx)(h.default,{
waveWidth:_r(d[15]).CommonUtils.getWindowSize('searchPage').screenWidth,waveHeight:n?o-e.getLargeFont(14):o
}
)
}
):null,e.renderSearchLoading(t),e.renderShortWordsTips(r),e.state.noVoiceTip?(0,_r(d[16]).jsx)(s.View,{
style:{
marginTop:20
}
,children:(0,_r(d[16]).jsx)(s.Text,{
style:{
fontSize:18,color:'#CF0A2C'
}
,children:e.state.noVoiceTips
}
)
}
):null,e.state.recommedWordsShow?(0,_r(d[16]).jsx)(f.default,{
wordsHeight:t-(e.state.noVoiceTip?110:100),isLargeFont:e.isLargeFont(),isTwiceLargeFont:e.isTwiceLargeFont(),getLargeFont:e.getLargeFont,ref:e.recWordsRef
}
):null,e.renderKeyWord(t,i),(0,_r(d[16]).jsxs)(s.View,{
style:[r.soundBtnContainer,{
bottom:0
}
],children:[e.renderTips(r),(0,_r(d[16]).jsxs)(s.View,Object.assign({
style:[r.soundBtn,{
color:_r(d[15]).DarkStore.darkBool?'#fff':'#000',backgroundColor:e.getBgColor()
}
]
}
,e._panResponder.panHandlers,{
children:[(0,_r(d[16]).jsx)(s.View,{
style:{
display:'flex',justifyContent:'center'
}
,children:(0,_r(d[16]).jsx)(_r(d[17]).SvgIcon,{
iconName:"sound",width:24,height:24,isActive:!1,normalCol:_r(d[15]).DarkStore.darkBool?'#fff':'#000',activeCol:_r(d[15]).DarkStore.darkBool?'#fff':'#000',opacity:1
}
)
}
),(0,_r(d[16]).jsx)(s.Text,{
style:{
fontSize:e.getLargeFont(14),color:_r(d[15]).DarkStore.darkBool?'#fff':'#000',fontWeight:'500'
}
,children:(0,_r(d[15]).t)('press_tips')
}
),e.state.showCover?(0,_r(d[16]).jsx)(s.Text,{
style:{
position:'absolute',top:0,left:0,right:0,bottom:0,borderRadius:20,color:_r(d[15]).DarkStore.darkBool?'#fff':'#000',backgroundColor:_r(d[15]).DarkStore.darkBool?'rgba(255,255,255,0.10)':'rgba(0, 0, 0, 0.05)'
}

}
):null]
}
)),(0,_r(d[16]).jsx)(s.View,{
style:{
position:'absolute',top:0,left:0,width:'100%',height:64
}
,children:(0,_r(d[16]).jsx)(l.default,{
locations:[0,.49,1],colors:_r(d[15]).DarkStore.darkBool?['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.1)']:['rgba(246,246,246,0.00)','rgba(246,246,246,0.60)','#F6F6F6'],style:{
width:'100%',height:'100%',zIndex:-1
}
,children:(0,_r(d[16]).jsx)(s.Text,{
children:" "
}
)
}
)
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
,{
key:"getBgColor",value:function(){
return _r(d[15]).DarkStore.darkBool?this.state.showCover?'#000':'#202224':this.state.showCover?'#f1f2f3':'#fff'
}

}
,{
key:"renderTips",value:function(e){
return this.state.tips?(0,_r(d[16]).jsx)(s.View,{
style:[e.tipsWrap],children:(0,_r(d[16]).jsx)(s.Text,{
style:{
fontSize:this.getLargeFont(12),color:_r(d[15]).DarkStore.darkBool?'rgba(255,255,255,0.60)':'rgba(0,0,0,0.60)'
}
,children:this.state.tips
}
)
}
):null
}

}
,{
key:"renderKeyWord",value:function(e,t){
return this.state.keywordItem.keyword?(0,_r(d[16]).jsx)(s.View,{
style:{
height:e,display:'flex',justifyContent:'center'
}
,children:(0,_r(d[16]).jsx)(s.Animated.Text,{
style:{
width:_r(d[15]).ScreenMode.width-120,textAlign:'center',fontSize:this.getLargeFont(28),color:_r(d[15]).DarkStore.darkBool?'rgba(255, 255, 255, 0.9)':'rgba(0, 0, 0, 0.9)',opacity:this.state.keywordItem.fadeInOpacity,transform:[{
translateY:t
}
]
}
,numberOfLines:2,children:this.state.keywordItem.keyword
}
)
}
):null
}

}
,{
key:"renderSearchLoading",value:function(e){
return this.state.loading?(0,_r(d[16]).jsxs)(s.View,{
style:{
width:'100%',height:e,display:'flex',alignItems:'center',justifyContent:'center'
}
,children:[(0,_r(d[16]).jsx)(s.Image,{
style:{
width:72,height:72
}
,source:_r(d[15]).DarkStore.darkBool?_r(d[17]).ImageArray.loadingDark:_r(d[17]).ImageArray.loading
}
),(0,_r(d[16]).jsx)(s.Text,{
style:{
fontSize:this.getLargeFont(14),color:_r(d[15]).DarkStore.darkBool?'rgba(255, 255, 255, 0.6)':'rgba(0,0,0,0.6)'
}
,children:(0,_r(d[15]).t)('search_loading')
}
)]
}
):null
}

}
,{
key:"renderShortWordsTips",value:function(e){
return this.state.shortWordShow?(0,_r(d[16]).jsxs)(s.View,{
style:[e.shortWordWrap,{
height:(this.state.visibleHeight-52)/2-(this.isPadHorizontal()?70:48)
}
],children:[(0,_r(d[16]).jsx)(s.Image,{
style:e.shortWordImg,source:c.default.shortWord
}
),(0,_r(d[16]).jsx)(s.Text,{
style:[e.shortWordText,{
color:_r(d[15]).DarkStore.darkBool?'rgba(255, 255, 255, 0.4)':'rgba(0, 0, 0, 0.4)'
}
],children:(0,_r(d[15]).t)('short_words_tips')
}
)]
}
):null
}

}
])
}
)(a.Component);
_e.SoundSearchClass=y,_e.default=(0,_r(d[15]).componentautoscaling)((0,_r(d[15]).monitor)(u.default)((0,_r(d[15]).itemExposeHoc)(y)))
}
),"7ded2c686316356585b0d48104f3495a902614adf13228ff5f842da3dd161a09",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","f18b369aa9459e392f8f0fb8a85aaf310765c7b5ce4fc80f857f14f4d66c6aba","442629dfea64c678058312eb7a36ea8faa6970c126763a7e4937f468b5992377","611f39327356547e886ce724a9d9bf41d87e8e2b7d14f1b4c7637d28addd673d","3f4569ca397af35ede2b66c056073d964c097966b3628c81c71b7e402b675f6d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=_r(d[0])(_r(d[1])),e=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),i=_r(d[0])(_r(d[4])),a=_r(d[0])(_r(d[5])),r=(function(t,e){
if(!e&&t&&t.__esModule)return t;
if(null===t||"object"!=typeof t&&"function"!=typeof t)return{
default:t
}
;
// 变量
var n: any = u(e);
if(n&&n.has(t))return n.get(t);
var i={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in t)if("default"!==r&&{

}
.hasOwnProperty.call(t,r)){
// 变量
var o: any = a?Object.getOwnPropertyDescriptor(t,r):null;
o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=t[r]
}
return i.default=t,n&&n.set(t,i),i
}
)(_r(d[6])),o=_r(d[0])(_r(d[7])),l=_r(d[0])(_r(d[8])),s=_r(d[9]);
// 函数
function u(t: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var e: any = new WeakMap,n=new WeakMap;
return(u=function(t){
return t?n:e
}
)(t)
}
// 函数
function c(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(c=function(){
return!!t
}
)()
}
var h=s.Dimensions.get('window').width,f=s.Dimensions.get('window').height,v=_r(d[10]).ScreenStore.isFixScreen?220:h/3,w=_r(d[10]).ScreenStore.isFixScreen?220:h/3,p=_r(d[10]).ScreenStore.isFixScreen?220:h/3,y=_e.default=(function(o){
// 函数
function l(): any {
var e,a,r,o;
(0,t.default)(this,l);
for(var u=arguments.length,f=new Array(u),y=0;
y<u;
y++)f[y]=arguments[y];
return a=this,r=l,o=[].concat(f),r=(0,i.default)(r),(e=(0,n.default)(a,c()?Reflect.construct(r,o||[],(0,i.default)(a).constructor):r.apply(a,o))).interval=null,e.voiceListener=null,e.state={
baseXOne:new s.Animated.Value(0),baseXTwo:new s.Animated.Value(0),baseXThree:new s.Animated.Value(0),controlY:20,startY:0,up:!0
}
,e._changecontrolY=function(){
e.interval=setInterval((function(){
// 变量
var t: any = e.state,n=t.controlY,i=t.startY,a=t.up,r=n,o=i,l=a;
l=a?(r=n+.5)<=25:(r=n-.5)<20,e.setState({
controlY:r,startY:o,up:l
}
)
}
),100)
}
,e._startAnimation1=function(){
// 变量
var t: any = e.state.baseXOne;
t.setValue(-4*v),s.Animated.timing(t,{
toValue:0,duration:950-e.state.controlY,easing:s.Easing.linear,delay:0,useNativeDriver:!0
}
).start((function(){
e._startAnimation1()
}
))
}
,e._startAnimation2=function(){
// 变量
var t: any = e.state.baseXTwo;
t.setValue(-4*w),s.Animated.timing(t,{
toValue:0,duration:900-e.state.controlY,easing:s.Easing.linear,delay:0,useNativeDriver:!0
}
).start((function(){
e._startAnimation2()
}
))
}
,e._startAnimation3=function(){
// 变量
var t: any = e.state.baseXThree;
t.setValue(-4*p),s.Animated.timing(t,{
toValue:0,duration:850-e.state.controlY,easing:s.Easing.linear,delay:0,useNativeDriver:!0
}
).start((function(){
e._startAnimation3()
}
))
}
,e._getBezierPath=function(t,n){
for(var i=e.props.waveHeight,a=h/t+1,r=.9*i,o=-4*t,l="M"+o+" "+i+" L"+o+" "+r,s=0;
s<=a;
s++)l+="Q"+(o+(4*s+1)*t)+" "+(r-n)+", "+(o+(4*s+2)*t)+" "+r,l+="Q"+(o+(4*s+3)*t)+" "+(r+n)+", "+(o+(4*s+4)*t)+" "+r;
return l
}
,e
}
return(0,a.default)(l,o),(0,e.default)(l,[{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentDidMount",value:function(){
// 变量
var t: any = this;
this._changecontrolY(),this._startAnimation1(),this._startAnimation2(),this._startAnimation3(),this.voiceListener=s.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
var n;
if('voiceFrequency'===(null==e?void 0:e.action)&&'voice'===e.service&&'voice'===(null==(n=e.param)?void 0:n.flag)){
// 变量
var i: any = void 0===e.param.audioSize?20:e.param.audioSize;
i=i>40?40:i,t.setState({
controlY:i
}
)
}

}
))
}

}
,{
key:"componentWillUnmount",value:function(){
var t;
this.interval&&clearInterval(this.interval),null==(t=this.voiceListener)||t.remove()
}

}
,{
key:"render",value:function(){
// 变量
var t: any = this.props,e=t.waveHeight,n=t.waveWidth,i=(t.wave1Color,t.wave2Color,this.state),a=i.baseXOne,o=i.baseXTwo,l=i.baseXThree,u=i.controlY,c=this._getBezierPath(v,u/2),h=this._getBezierPath(w,u/2),f=this._getBezierPath(p,3*u/5);
return(0,_r(d[11]).jsx)(s.View,{
style:{
overflow:'hidden'
}
,children:(0,_r(d[11]).jsxs)(s.View,{
style:{
marginBottom:30,width:n,height:e
}
,children:[(0,_r(d[11]).jsx)(s.Animated.View,{
style:{
height:e,width:n+4*v,position:'absolute',transform:[{
translateX:a
}
]
}
,children:(0,_r(d[11]).jsx)(r.default,{
width:n+8*v,height:e,viewBox:"0 0 "+(n+8*v)+" "+e,children:(0,_r(d[11]).jsx)(r.Path,{
d:c,fill:'none',stroke:_r(d[10]).CommonUtils.colorRgba('#CF0A2C'),strokeWidth:1
}
)
}
)
}
),(0,_r(d[11]).jsx)(s.Animated.View,{
style:[{
transform:[{
translateX:o
}
],width:n+4*w,position:'absolute',height:e
}
],children:(0,_r(d[11]).jsx)(r.default,{
width:n+8*w,height:e,viewBox:"0 0 "+(n+8*w)+" "+e,children:(0,_r(d[11]).jsx)(r.Path,{
d:h,fill:'none',stroke:_r(d[10]).CommonUtils.colorRgba('#CF0A2C',.5),strokeWidth:1
}
)
}
)
}
),(0,_r(d[11]).jsx)(s.Animated.View,{
style:[{
height:e,width:n+4*p,position:'absolute',transform:[{
translateX:l
}
]
}
],children:(0,_r(d[11]).jsx)(r.default,{
width:n+8*p,height:e,viewBox:"0 0 "+(n+8*p)+" "+e,children:(0,_r(d[11]).jsx)(r.Path,{
d:f,fill:'none',stroke:_r(d[10]).CommonUtils.colorRgba('#CF0A2C',.2),strokeWidth:1
}
)
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
])
}
)(l.default.Component);
y.propTypes={
wave2Color:o.default.string,wave1Color:o.default.string,waveWidth:o.default.number,waveHeight:o.default.number
}
,y.defaultProps={
wave1Color:'#CF0A2C',wave2Color:'rgba(72,143,240,0.5)',waveWidth:h,waveHeight:Math.ceil(.15*f)
}

}
),"f18b369aa9459e392f8f0fb8a85aaf310765c7b5ce4fc80f857f14f4d66c6aba",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","74d4d29847482b9bba398d2e3ed596b0032ff6de272950d27b8703f14074a943","d1ff9184f8984b6ec3dce33282f881632d3eee074d9277a273e09978bdee2e6c","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(){
return{
data:t(!1)
}

}
,clickAuth:function(c){
return{
data:t(!0,c)
}

}

}
;
// 函数
function t(t: any, c: any): any {
return{
actionCode:t?'100090006':'100090005',actionName:t?'\u8bed\u97f3\u6388\u6743\u64cd\u4f5c':'\u70b9\u51fb\u8bed\u97f3\u6309\u94ae',content:t?{
click:'1',type:String(c)
}
:{
click:'1'
}
,pageType:'Search',pageCatName:r(d[0]).searchPage.pageCatName,pageCatCode:r(d[0]).searchPage.pageCatCode,pageId:r(d[0]).searchPage.pageId,resSiteName:r(d[0]).searchPage.resSiteNameVoice,resSiteCode:r(d[0]).searchPage.resSiteCodeVoice
}

}

}
),"442629dfea64c678058312eb7a36ea8faa6970c126763a7e4937f468b5992377",["6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=_r(d[0])(_r(d[1])),e=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),a=_r(d[0])(_r(d[5])),i=(function(t,e){
if(!e&&t&&t.__esModule)return t;
if(null===t||"object"!=typeof t&&"function"!=typeof t)return{
default:t
}
;
// 变量
var n: any = s(e);
if(n&&n.has(t))return n.get(t);
var r={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in t)if("default"!==i&&{

}
.hasOwnProperty.call(t,i)){
// 变量
var o: any = a?Object.getOwnPropertyDescriptor(t,i):null;
o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=t[i]
}
return r.default=t,n&&n.set(t,r),r
}
)(_r(d[6])),o=_r(d[7]),l=_r(d[0])(_r(d[8]));
// 函数
function s(t: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var e: any = new WeakMap,n=new WeakMap;
return(s=function(t){
return t?n:e
}
)(t)
}
// 函数
function c(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(c=function(){
return!!t
}
)()
}
var u=(function(i){
// 函数
function s(e: any): any {
var a,i,l,u;
return(0,t.default)(this,s),i=this,l=s,u=[e],l=(0,r.default)(l),(a=(0,n.default)(i,c()?Reflect.construct(l,u||[],(0,r.default)(i).constructor):l.apply(i,u))).switchTag=!1,a.originWidth=o.Dimensions.get('window').width,a.originHeight=o.Dimensions.get('window').height,a.startAnimation=function(){
var t,e;
(null==(t=a.state.words)?void 0:t.length)&&(null==(e=a.state.words)||e.forEach((function(t,e){
t.para=o.Animated.parallel(['fadeInOpacity','animatedValue'].map((function(n){
return o.Animated.timing(t[n],{
toValue:1,duration:240,delay:100+30*e,easing:o.Easing.linear,useNativeDriver:!0
}
)
}
))),t.para.start()
}
)))
}
,a.stopAnimation=function(t){
var e,n;
(null==(e=a.state.words)?void 0:e.length)&&(null==(n=a.state.words)||n.forEach((function(e){
e.para.stop((function(){
t&&t()
}
))
}
)))
}
,a.getRecommedSwitch=function(){
_r(d[9]).RnBridge.invokeVmallNative('common','getSpBoolean',{
key:'APM_RECOMEND_SWITCH'
}
).then((function(t){
t&&(a.switchTag=t.value?'1':'2',a.getRecommendList())
}
))
}
,a.getRecommedWords=function(t){
// 变量
var e: any = _r(d[9]).Cookies.get('euid'),n="lang="+_r(d[9]).MCP_LANG.CN+"&portal="+_r(d[9]).CommonUtils.getPortal()+"&country="+_r(d[9]).MCP_COUNTRY.CN+"&personalizeSearch="+t+"&euid="+e+"&pageNum=1&pageSize=8&version=1",r=""+_r(d[9]).Service.openApiDomain+_r(d[9]).URL_CONSTANTS.GET_RECOMMEND_WORDS+"?"+n;
return _r(d[9]).Http.get(r)
}
,a.getRecommendList=function(){
// 变量
var t: any = a.props.wordsHeight,e=a.isPadHorizontal()?9:Math.floor(t/28);
a.getRecommedWords(a.switchTag).then((function(t){
// 变量
var n: any = [],r=t.resultList;
(null==r?void 0:r.length)&&r.map((function(t){
n.push({
name:t,animatedValue:new o.Animated.Value(0),fadeInOpacity:new o.Animated.Value(0),para:null
}
)
}
)),n=n.slice(0,e-1),a.setState({
words:n
}
,(function(){
a.startAnimation()
}
))
}
))
}
,a.isPadHorizontal=function(){
// 变量
var t: any = _r(d[9]).ScreenMode.width;
return _r(d[9]).ScreenUtils.isPadHorizontal(t,a.originWidth)
}
,a.renderPhoneRec=function(){
return(0,_r(d[10]).jsxs)(o.View,{
style:{
display:'flex',alignItems:'center',marginTop:19,flexDirection:'column'
}
,children:[(0,_r(d[10]).jsx)(o.Text,{
style:{
fontSize:16,color:'rgba(0,0,0,0.9)',fontWeight:'500'
}
,children:(0,_r(d[9]).t)('try_tips')
}
),a.state.words.length&&a.state.words.map((function(t,e){
var n=t.animatedValue.interpolate({
inputRange:[0,1],outputRange:[-80,0]
}
);
return(0,_r(d[10]).jsx)(o.Animated.Text,{
style:{
opacity:t.fadeInOpacity,transform:[{
translateX:n
}
],marginTop:8,fontSize:14,color:e>3?'rgba(0,0,0,0.4)':"rgba(0,0,0,"+.01*(100-10*(e+2))+")",fontWeight:'400'
}
,children:t.name
}
,e)
}
))]
}
)
}
,a.renderPadRec=function(){
o.View,o.Text,(0,_r(d[9]).t)('try_tips'),a.state.words.length&&a.state.words.map((function(t,e){
return(0,_r(d[10]).jsx)(o.Animated.Text,{
style:{
marginLeft:8,fontSize:14,color:'rgba(0,0,0,0.4)',fontWeight:'400'
}
,children:t.name
}
,e)
}
))
}
,a.state={
words:[]
}
,a
}
return(0,a.default)(s,i),(0,e.default)(s,[{
key:"render",value:function(){
var t=this,e=(this.props||{

}
).isTwiceLargeFont?3:5;
return this.state.words.length?(0,_r(d[10]).jsx)(_r(d[9]).WithTheme,{
themeStyles:l.default,children:function(){
return t.isPadHorizontal()?(0,_r(d[10]).jsxs)(o.View,{
style:{
display:'flex',alignItems:'center',marginTop:19
}
,children:[(0,_r(d[10]).jsx)(o.Text,{
style:{
fontSize:t.props.getLargeFont(16),color:'rgba(0,0,0,0.9)',fontWeight:'500'
}
,children:(0,_r(d[9]).t)('try_tips')
}
),(0,_r(d[10]).jsx)(o.View,{
style:{
display:'flex',alignItems:'center',flexDirection:'row',marginTop:8
}
,children:t.state.words.length&&t.state.words.map((function(e,n){
return(0,_r(d[10]).jsx)(o.Animated.Text,{
style:{
marginLeft:8,fontSize:t.props.getLargeFont(14),color:'rgba(0,0,0,0.4)',fontWeight:'400'
}
,children:e.name
}
,n)
}
))
}
)]
}
):(0,_r(d[10]).jsxs)(o.View,{
style:{
display:'flex',alignItems:'center',marginTop:19,flexDirection:'column'
}
,children:[(0,_r(d[10]).jsx)(o.Text,{
style:{
fontSize:t.props.getLargeFont(16),color:'rgba(0,0,0,0.9)',fontWeight:'500'
}
,children:(0,_r(d[9]).t)('try_tips')
}
),t.state.words.length&&(t.props.isLargeFont?t.state.words.slice(0,e):t.state.words).map((function(e,n){
var r=e.animatedValue.interpolate({
inputRange:[0,1],outputRange:[-50,0]
}
);
return(0,_r(d[10]).jsx)(o.Animated.Text,{
style:{
opacity:e.fadeInOpacity,transform:[{
translateX:r
}
],marginTop:8,fontSize:t.props.getLargeFont(14),color:n>3?'rgba(0,0,0,0.4)':"rgba(0,0,0,"+.01*(100-10*(n+2))+")",fontWeight:'400'
}
,children:e.name
}
,n)
}
))]
}
)
}

}
):(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{

}
)
}

}
])
}
)(i.Component);
_e.default=u
}
),"611f39327356547e886ce724a9d9bf41d87e8e2b7d14f1b4c7637d28addd673d",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3f4569ca397af35ede2b66c056073d964c097966b3628c81c71b7e402b675f6d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n,o,l){
return t.StyleSheet.create({
pageContainer:{
width:'100%',height:64,position:'absolute',left:0,display:'flex',alignItems:'center',zIndex:100
}
,shortWordWrap:{
display:'flex',justifyContent:'center',alignItems:'center'
}
,shortWordText:{
width:'function'==typeof l?6*l(14)+2:86,lineHeight:'function'==typeof l?l(14)+5:19,fontSize:'function'==typeof l?l(14):14,color:'rgba(0,0,0,0.40)',textAlign:'center',fontWeight:'400',marginTop:16
}
,shortWordImg:{
width:96,height:96,marginTop:150
}
,soundBtnContainer:{
width:'100%',marginBottom:12,display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',left:0
}
,soundBtn:{
paddingHorizontal:16,paddingVertical:12,backgroundColor:'#fff',borderRadius:20,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',zIndex:200
}
,tipsWrap:{
width:'100%',display:'flex',alignItems:'center',marginBottom:16
}

}
)
}

}
),"3f4569ca397af35ede2b66c056073d964c097966b3628c81c71b7e402b675f6d",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=(0,r(d[0]).observable)({

}
);
t.setData=(0,r(d[0]).action)((function(o,s){
r(d[1]).PlatformUtils.isWeb()&&window.sessionStorage.setItem(o,JSON.stringify(s)),t=s
}
)),t.getData=(0,r(d[0]).action)((function(o){
if(r(d[1]).PlatformUtils.isWeb()){
// 变量
var s: any = window.sessionStorage.getItem(o);
t=s&&JSON.parse(s)
}
return t
}
)),t.removeData=(0,r(d[0]).action)((function(t){
r(d[1]).PlatformUtils.isWeb()&&window.sessionStorage.removeItem(t)
}
));
e.default=t
}
),"b8ea7954ffd353f08eb3f2f456d07405bb53f9d5aafd552469a5bc3b2a71a3e1",["51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,s,o){
// 变量
var c: any = o?'\u6267\u884c\u5185\u5bb9\u641c\u7d22\u52a8\u4f5c':'\u6267\u884c\u641c\u7d22\u52a8\u4f5c',C=r(d[0]).PlatformUtils.isApp()?r(d[0]).EVENT_ID.SEARCHCLICKAPK:r(d[0]).EVENT_ID.SEARCHCLICKWAP;
o?C=r(d[0]).PlatformUtils.isApp()?'100091003':'200091003':r(d[0]).PlatformUtils.isMp()&&(C='100090101');
// 变量
var p: any = r(d[1]).searchPage.resSiteNameAssociation,P=r(d[1]).searchPage.resSiteCodeAssociation;
return'1'===s?(p=r(d[1]).searchPage.resSiteNameBox,P=r(d[1]).searchPage.resSiteCodeBox):'6'===s&&(p=r(d[1]).searchPage.resSiteNameVoice,P=r(d[1]).searchPage.resSiteCodeVoice),{
data:{
actionName:c,actionCode:C,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_CLICK,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:p,resSiteCode:P,content:{
searchWord:t,type:String(s),urlType:'1',click:'1'
}

}

}

}

}

}
),"96f9f9b161c45c7c488092569dbfea63c082dff71b029c8e6821f05b67bff533",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),s=r(d[0])(r(d[6])),u=r(d[7]),h=r(d[0])(r(d[8])),c=r(d[0])(r(d[9])),f=r(d[0])(r(d[10]));
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
var y=(function(s){
// 函数
function f(t: any): any {
var l,s,u,c;
return(0,e.default)(this,f),s=this,u=f,c=[t],u=(0,n.default)(u),(l=(0,o.default)(s,p()?Reflect.construct(u,c||[],(0,n.default)(s).constructor):u.apply(s,c))).querySearchRanking=function(e){
// 变量
var t: any = r(d[11]).CommonUtils.getPortal();
e.portal=null==t?void 0:t.toString(),e.lang=e.lang||r(d[11]).MCP_LANG.CN,e.country=e.country||r(d[11]).MCP_COUNTRY.CN,e.version=e.version?e.version:1,e.pageNum=e.pageNum||1,e.pageSize=e.pageSize||10,e.searchChannel=e.searchChannel||1;
// 变量
var o: any = "lang="+e.lang+"&country="+e.country+"&portal="+e.portal+"&version="+e.version,n=r(d[11]).Service.openApiDomain+"mcp/search/querySearchRanking?"+o+"&pageNum="+e.pageNum+"&pageSize="+e.pageSize;
return r(d[11]).Http.get(n)
}
,l._getSearchHotRed=function(){
l.querySearchRanking({

}
).then((function(e){
// 变量
var t: any = e.resultList;
l.sid=e.sid,l.setState({
hotRedList:t
}
),!r(d[11]).PlatformUtils.isMp()&&l.exposeHotRed(e)
}
)).catch((function(){
l.setState({
hotRedList:[]
}
)
}
))
}
,l._gotoPage=function(e,t){
var o;
l.props.clickItem(e.title,'5',l.sid,null==(o=l.props)?void 0:o.isContentSearch,t),r(d[11]).EventTracking.execReportData('',!0),r(d[11]).PlatformUtils.isApp()?r(d[11]).RouterUtils.gotoPage(e.openURL):r(d[11]).PlatformUtils.isWap(r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth)?r(d[11]).RouterUtils.gotoPage(e.wapOpenURL):r(d[11]).PlatformUtils.isMp()&&r(d[11]).RouterUtils.gotoPage(e.mpOpenURL)
}
,l.hotNum=function(e){
switch(e){
case 0:return r(d[11]).PlatformUtils.isWeb()?h.default.hot01Wap:h.default.hot01Svg;
case 1:return r(d[11]).PlatformUtils.isWeb()?h.default.hot02Wap:h.default.hot02Svg;
case 2:return r(d[11]).PlatformUtils.isWeb()?h.default.hot03Wap:h.default.hot03Svg;
case 3:return h.default.hot04;
case 4:return h.default.hot05;
case 5:return h.default.hot06;
case 6:return h.default.hot07;
case 7:return h.default.hot08;
case 8:return h.default.hot09;
default:return h.default.hot10
}

}
,l.hotNumColor=function(e){
return 0===e?'#D9A972':1===e?'#858999':2===e?'#CD8870':'#B9B9B9'
}
,l.state={
hotRedList:[]
}
,l
}
return(0,l.default)(f,s),(0,t.default)(f,[{
key:"componentWillMount",value:function(){
// 变量
var e: any = this;
this._gestureHandlers=u.PanResponder.create({
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
,onPanResponderMove:function(t,o){
e.props.blur()
}

}
)
}

}
,{
key:"componentDidMount",value:function(){
this._getSearchHotRed()
}

}
,{
key:"componentWillUnmount",value:function(){

}

}
,{
key:"exposeHotRed",value:function(e){
var t=[],o={
word:[],sid:'',exposure:'1'
}
;
e.resultList.forEach((function(e){
t.push(e.title)
}
)),o.word=t,o.sid=e.sid,this.props.slideItem(o)
}

}
,{
key:"render",value:function(){
var e=this,t=this.state.hotRedList,o=(r(d[11]).DarkStore.darkBool,function(t,o){
// 变量
var n: any = [];
return null==o||o.forEach((function(o,l){
return n.push((0,r(d[12]).jsxs)(u.TouchableOpacity,{
onPress:function(){
return e._gotoPage(o,l)
}
,children:[(0,r(d[12]).jsxs)(u.View,{
style:t.hotRedItemBox,children:[(0,r(d[12]).jsx)(u.Text,{
style:[{
color:e.hotNumColor(l)
}
,t.hotNumText],children:l+1
}
),(0,r(d[12]).jsx)(u.View,{
style:t.hotRedItemImgView,children:(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:null==o?void 0:o.photoURL,imgStyle:t.hotRedItemImg
}
)
}
),(0,r(d[12]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:'tail',style:t.hotRedItemText,children:o.title
}
),(1===o.type||2===o.type)&&(0,r(d[12]).jsx)(u.View,{
style:[t.hotBorderView,r(d[11]).PlatformUtils.isWeb()&&t.hotBorderViewWap,1===o.type&&t.newBorderView],children:(0,r(d[12]).jsx)(u.Text,{
style:[t.hotText,r(d[11]).PlatformUtils.isApp()&&t.hotTextApp,r(d[11]).PlatformUtils.isWeb()&&t.hotTextWap,1===o.type&&t.newText],children:1===o.type?(0,r(d[11]).t)('new'):(0,r(d[11]).t)('hot')
}
)
}
)]
}
),(0,r(d[12]).jsx)(u.View,{
style:t.hotLine
}
)]
}
,l))
}
)),n
}
);
return 0!==(null==t?void 0:t.length)?(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:c.default,children:function(n){
// 变量
var l: any = r(d[11]).PlatformUtils.isWeb()?h.default.hotRecommendWap:h.default.hotRecommend;
return l=r(d[11]).PlatformUtils.isMp()?null:l,(0,r(d[12]).jsxs)(u.View,{
style:{
marginHorizontal:e.props.margin
}
,testID:'search-headlines',nativeID:'search-headlines',children:[(0,r(d[12]).jsx)(u.View,{
style:[n.searchHisBox],children:(0,r(d[12]).jsx)(u.Text,{
style:n.hisText,children:(0,r(d[11]).t)('search_hot')
}
)
}
),r(d[11]).PlatformUtils.isApp()&&!r(d[11]).PlatformUtils.isHarmony()?(0,r(d[12]).jsx)(u.View,Object.assign({
style:n.hotRedBottom
}
,e._gestureHandlers.panHandlers,{
children:o(n,t)
}
)):(0,r(d[12]).jsx)(u.View,{
style:n.hotRedBottom,children:o(n,t)
}
)]
}
)
}

}
):null
}

}
,{
key:"renderHotNum",value:function(e){
return r(d[11]).PlatformUtils.isWeb()||r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:this.hotNum(e),imgStyle:{
width:20,height:20
}

}
):r(d[11]).PlatformUtils.isIOS()?(0,r(d[12]).jsx)(u.Image,{
source:this.getSource(e),style:{
width:20,height:20
}

}
):(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
localSource:this.getSource(e),imgStyle:{
width:r(d[11]).CommonUtils.getScaleSize(20,2),height:r(d[11]).CommonUtils.getScaleSize(20,2)
}

}
)
}

}
,{
key:"getSource",value:function(e){
return 0===e?h.default.hot01:1===e?h.default.hot02:h.default.hot03
}

}
])
}
)(s.default.Component);
_e.default=(0,r(d[11]).monitor)(f.default)((0,r(d[11]).itemExposeHoc)(y))
}
),"4b940fa55ed31f1a02f84443042c739ef4a05cba5274cabc5f8a4dfacfe1f876",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","e431913489ce240d6ca0eb0e55c4af2c8211326f6229a9fe720beba5dbd10ee1","771fad6b60fb26d57488752cef394b03e069a16fb52c275a18dc07a543287533","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR,n=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_THREE;
e.default=function(l){
return t.StyleSheet.create({
onLayout:{
backgroundColor:l.C32.color,width:'100%'
}
,titleBarStyle:{
marginBottom:0,marginLeft:0,height:r(d[1]).CommonUtils.getScaleSize(22,n)+18+16,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:l.C32.color,position:r(d[1]).PlatformUtils.isWeb()?'fixed':'absolute',top:0,left:0
}
,searchBox:Object.assign({
height:r(d[1]).CommonUtils.getScaleSize(22,n)+18,marginLeft:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,l.S13,{
borderRadius:20,marginVertical:8,flex:1
}
),searchImgBox:{
height:r(d[1]).CommonUtils.getScaleSize(22,n)+18,flexDirection:'row',alignItems:'center',paddingLeft:12,paddingRight:8
}
,searchImgMp:{
width:16,height:16
}
,searchButton:{
width:56,height:36,justifyContent:'center',borderRadius:18,marginHorizontal:2
}
,searchCloseMp:{
width:16,height:16,marginLeft:8
}
,downUpImgMp:{
width:16,height:16
}
,inputBox:{
height:r(d[1]).CommonUtils.getScaleSize(22,n)+18,flex:1,justifyContent:'center'
}
,inputText:Object.assign({
height:r(d[1]).CommonUtils.getScaleSize(22,n)+18
}
,l.T9,l.C12,{
paddingVertical:9,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T9.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,n),fontWeight:'500'
}
),inputTextMp:Object.assign({

}
,l.T9,l.C12),inputBg:{
backgroundColor:'transparent'
}
,otherText:Object.assign({

}
,l.T9,l.C13,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T9.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,n)
}
),crossImgBox:{
height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,flexDirection:'row',alignItems:'center',justifyContent:'center',width:40
}
,searchText:Object.assign({

}
,l.T8,l.C12,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,n),fontWeight:'500',alignSelf:'center'
}
),viewAll:{
paddingTop:r(d[1]).CommonUtils.getScaleSize(22,n)+18+16,width:'100%',zIndex:-1
}
,contentContainerStyle:{
flexGrow:1,flexDirection:'column',justifyContent:'flex-start'
}
,searchHisBox:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:24
}
,hisText:Object.assign({

}
,l.T11,l.C11,{
textAlign:'left',fontSize:r(d[1]).CommonUtils.getScaleSize(l.T11.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T11.lineHeight,n),fontWeight:'bold'
}
),hisTextBox:{
flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'
}
,hisItemBox:Object.assign({
marginRight:8,marginTop:12,borderRadius:20
}
,l.S13,{
paddingHorizontal:8,paddingVertical:6
}
),hisItemBoxMore:Object.assign({
borderRadius:20
}
,l.S13,{
width:28,height:28,justifyContent:'center',alignItems:'center'
}
),hisViewMore:{
marginRight:8,marginTop:12,justifyContent:'center',alignItems:'center'
}
,hisItemBoxMp:Object.assign({
marginRight:8,marginBottom:8,borderRadius:20
}
,l.S13,{
paddingHorizontal:6,paddingVertical:6
}
),hisItemText:Object.assign({

}
,l.T3,l.C12,{
textAlign:'center',fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,o)
}
),hotRedBox:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,hotRedBottom:{
flexDirection:'column',marginVertical:12,backgroundColor:l.S31.backgroundColor,borderRadius:16,paddingTop:8,paddingBottom:8
}
,hotRedItemBox:{
flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingVertical:8,height:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)+45,marginHorizontal:12
}
,hotLine:{
height:.5,backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],marginLeft:80+r(d[1]).CommonUtils.getScaleSize(18,n),marginRight:12
}
,indexText:Object.assign({

}
,l.C15,{
fontSize:12,fontWeight:'900',fontFamily:'Roboto-BlackItalic',fontStyle:'italic',marginRight:30
}
),hotRedItemNum:{
marginLeft:12
}
,hotRedItemImgView:{
marginRight:12,marginLeft:8
}
,hotRedItemImg:{
width:48,height:48,borderRadius:12,borderColor:l.C38.color+l.opacityMap[l.C38.opacity],borderWidth:.5
}
,hotRedItemText:Object.assign({

}
,l.T7,l.C12,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o),flexShrink:1
}
),wordItem:{
height:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,o)+27,flexDirection:'row',justifyContent:'space-between',alignItems:'center',overflow:'hidden'
}
,bigFontWordItem:{
width:'100%',flexDirection:'row',flexWrap:'wrap',paddingTop:7,paddingBottom:7,alignItems:'center',marginLeft:12
}
,word:{
flexDirection:'row',justifyContent:'flex-start',flex:1,maxHeight:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,o),overflow:'hidden',marginLeft:12
}
,bottomLine:{
backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],height:.5,width:'auto'
}
,wordLabels:{
flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',flexWrap:'wrap',height:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,n)+12,overflow:'hidden',marginRight:-8,marginLeft:8
}
,labelView:{
borderRadius:20,backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],paddingHorizontal:8,paddingVertical:6,height:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,n)+12,marginRight:8
}
,labelText:Object.assign({

}
,l.T3,{
color:l.C12.color+l.opacityMap[l.C12.opacity],fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,n)
}
),maskGray:{
width:32,height:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,n)+27,position:'absolute',top:-13.5,right:0
}
,wordText:Object.assign({

}
,l.T9,{
color:l.C15.color+l.opacityMap[l.C15.opacity],fontSize:r(d[1]).CommonUtils.getScaleSize(l.T9.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T9.lineHeight,n)
}
),wordTextAss:Object.assign({

}
,l.T10,{
color:l.C11.color,fontWeight:'500',fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T10.lineHeight,n)
}
),hotBorderView:{
marginLeft:4,borderRadius:4,borderColor:l.C95.color+'80',borderStyle:'solid',borderWidth:.5,backgroundColor:l.C95.color+'0D',height:14,alignItems:'center',justifyContent:'center',width:14
}
,hotBorderViewWap:{
padding:1.5
}
,newBorderView:{
borderColor:l.C91.color+'80',backgroundColor:l.C91.color+'0D'
}
,hotText:{
textAlign:'center',color:l.C95.color,fontSize:10,fontWeight:'600',lineHeight:14,fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,newText:{
color:l.C91.color
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
,iconBackGround:{
backgroundColor:l.S13.backgroundColor,width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:40
}
,line:{
width:1,height:12,backgroundColor:l.S13.backgroundColor,marginLeft:2
}
,hotNumText:Object.assign({

}
,l.T8,{
fontWeight:'bold',width:r(d[1]).CommonUtils.getScaleSize(18,n),textAlign:'center',fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,n)
}
),deleteView:{
width:24,height:24,justifyContent:'center',alignItems:'center'
}

}
)
}

}
),"e431913489ce240d6ca0eb0e55c4af2c8211326f6229a9fe720beba5dbd10ee1",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
slideItem:function(t){
return{
data:{
actionName:'\u70ed\u641c\u699c\u66dd\u5149\u7387',actionCode:r(d[0]).PlatformUtils.isApp()||r(d[0]).PlatformUtils.isMp()?r(d[0]).EVENT_ID.SEARCHRANKEXPOSEAPK:r(d[0]).EVENT_ID.SEARCHRANKEXPOSEWAP,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:r(d[1]).searchPage.resSiteNameRank,resSiteCode:r(d[1]).searchPage.resSiteCodeRank,content:t
}

}

}
,clickItem:function(t,s,E,p,o){
var C,c=p?'\u6267\u884c\u5185\u5bb9\u641c\u7d22\u52a8\u4f5c':'\u6267\u884c\u641c\u7d22\u52a8\u4f5c';
return p?C=r(d[0]).PlatformUtils.isApp()?'100091003':'200091003':(C=r(d[0]).PlatformUtils.isApp()?r(d[0]).EVENT_ID.SEARCHCLICKAPK:r(d[0]).EVENT_ID.SEARCHCLICKWAP,C=r(d[0]).PlatformUtils.isMp()?'100090101':C),{
data:{
actionName:c,actionCode:C,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_CLICK,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:r(d[1]).searchPage.resSiteNameRank,resSiteCode:r(d[1]).searchPage.resSiteCodeRank,content:{
searchWord:t,type:String(s),index:String(o+1),urlType:'2',sid:E,click:'1'
}

}

}

}

}

}
),"771fad6b60fb26d57488752cef394b03e069a16fb52c275a18dc07a543287533",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),s=r(d[0])(r(d[5])),l=r(d[0])(r(d[6])),u=r(d[7]),c=r(d[0])(r(d[8])),h=r(d[0])(r(d[9]));
// 函数
function p(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(p=function(){
return!!t
}
)()
}
var f='searchHistoryList',v=(function(l){
// 函数
function h(e: any): any {
var s,l,u,c;
return(0,t.default)(this,h),l=this,u=h,c=[e],u=(0,n.default)(u),(s=(0,o.default)(l,p()?Reflect.construct(u,c||[],(0,n.default)(l).constructor):u.apply(l,c))).wapBlurTimer=null,s.arr=[],s._getHotWords=function(){
// 变量
var t: any = r(d[10]).Cookies.get('TID');
r(d[10]).HttpService.getHotWordForApk(t||'88888888888').then((function(t){
// 变量
var e: any = t.hotWordList||[];
s.setState({
searchFindList:e
}
)
}
)).catch((function(){
s.setState({
searchFindList:[]
}
)
}
))
}
,s.goToSearch=function(t,e,o){
var n,l,u,c=s.props,h=c.navigation,p=c.uniqueId;
(r(d[10]).PlatformUtils.isHarmony()&&r(d[10]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!1,uniqueId:p
}
),h.replace('SearchPage',{
keyword:t,configInfo:(null==(n=s.props)?void 0:n.configInfo)||{

}
,searchId:s.props.searchId,isLogin:s.props.isLogin
}
),s.props.clickItem(t,'2',e,null==(l=s.props)?void 0:l.isContentSearch,o),r(d[10]).EventTracking.execReportData('',!0),s.props.isLogin)||!1===(null==(u=s.props)?void 0:u.isContentSearch)&&s.setLocalHistory(t)
}
,s._onLayout=function(t){
// 变量
var e: any = 0,o=0,n=t.nativeEvent.layout.x;
s.arr.push(n),s.arr.length===s.state.searchFindList.length&&(s.arr.forEach((function(t,n){
0===t&&3===++e&&(o=n)
}
)),e>=3?s.exposeHotWords(s.state.searchFindList,o):s.exposeHotWords(s.state.searchFindList))
}
,s.state={
searchFindList:[]
}
,s
}
return(0,s.default)(h,l),(0,e.default)(h,[{
key:"componentWillMount",value:function(){
// 变量
var t: any = this;
this._gestureHandlers=u.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onStartShouldSetPanResponderCapture:function(){
return!1
}
,onMoveShouldSetPanResponder:function(t,e){
return Math.abs(e.dx)>10||Math.abs(e.dy)>10
}
,onMoveShouldSetPanResponderCapture:function(){
return!1
}
,onPanResponderMove:function(e,o){
t.props.blur()
}

}
)
}

}
,{
key:"componentDidMount",value:function(){
this._getHotWords()
}

}
,{
key:"componentWillUnmount",value:function(){
r(d[10]).PlatformUtils.isWeb()||this.wapBlurTimer&&clearTimeout(this.wapBlurTimer)
}

}
,{
key:"exposeHotWords",value:function(t,e){
// 变量
var o: any = [];
t.forEach((function(t){
o.push(t.word+','+t.wordType)
}
)),e?this.props.slideItem(o.slice(0,e)):this.props.slideItem(o)
}

}
,{
key:"setLocalHistory",value:function(t){
if(''!==t){
// 变量
var e: any = [];
try{
r(d[10]).PlatformUtils.isWeb()&&(e=JSON.parse(window.localStorage.getItem(f)||'[]').filter((function(e){
return e!==t
}
))),r(d[10]).PlatformUtils.isMp()&&(e=JSON.parse(r(d[10]).StorageUtil.getStorageSyncMp(f)||'[]').filter((function(e){
return e!==t
}
)))
}
catch(t){

}
e.unshift(t),e.splice(10),r(d[10]).PlatformUtils.isMp()&&r(d[10]).StorageUtil.setStorageSyncMp(f,JSON.stringify(e)),r(d[10]).PlatformUtils.isWeb()&&window.localStorage.setItem(f,JSON.stringify(e))
}

}

}
,{
key:"render",value:function(){
var t=this,e=this.state.searchFindList,o=this.props.width-2*this.props.margin,n=function(e,n){
// 变量
var s: any = [];
return null==n||n.forEach((function(n,l){
return s.push((0,r(d[11]).jsx)(u.TouchableOpacity,{
onPress:function(){
return t.goToSearch(n.word,n.wordType,l)
}
,style:[e.hisItemBox,{
maxWidth:o,marginRight:t.props.labelMargin
}
],onLayout:t._onLayout,children:(0,r(d[11]).jsx)(u.Text,{
style:e.hisItemText,children:n.word
}
)
}
,l))
}
)),s
}
;
return 0!==(null==e?void 0:e.length)?(0,r(d[11]).jsx)(r(d[10]).WithTheme,{
themeStyles:c.default,children:function(o){
return(0,r(d[11]).jsxs)(u.View,{
style:{
marginHorizontal:t.props.margin
}
,children:[(0,r(d[11]).jsx)(u.View,{
style:o.searchHisBox,children:(0,r(d[11]).jsx)(u.Text,{
style:o.hisText,children:'\u731c\u4f60\u60f3\u641c'
}
)
}
),r(d[10]).PlatformUtils.isApp()?(0,r(d[11]).jsx)(u.View,Object.assign({
style:[o.hisTextBox,{
maxHeight:48+r(d[10]).CommonUtils.getScaleSize(32,2),overflow:'hidden'
}
]
}
,t._gestureHandlers.panHandlers,{
children:n(o,e)
}
)):(0,r(d[11]).jsx)(u.View,{
style:[o.hisTextBox,{
maxHeight:80,overflow:'hidden'
}
],children:n(o,e)
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
)(l.default.Component);
_e.default=(0,r(d[10]).monitor)(h.default)((0,r(d[10]).itemExposeHoc)(v))
}
),"7bca827f111956cd32bc219624757f24780ae1f94ec8320d2539b2498a32ef83",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","e431913489ce240d6ca0eb0e55c4af2c8211326f6229a9fe720beba5dbd10ee1","97a08bdb0e081e05836a59c1c73e2fd9ecf7397ec1e274ee035a8097f3a820cc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
slideItem:function(t){
// 变量
var o: any = r(d[0]).PlatformUtils.isApp()?r(d[0]).EVENT_ID.SEARCHHOTEXPOSEAPK:r(d[0]).EVENT_ID.SEARCHHOTEXPOSEWAP;
return{
data:{
actionName:'\u70ed\u641c\u8bcd\u66dd\u5149\u7387',actionCode:r(d[0]).PlatformUtils.isMp()?'100090003':o,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:r(d[1]).searchPage.resSiteNameHot,resSiteCode:r(d[1]).searchPage.resSiteCodeHot,content:{
word:t
}

}

}

}
,clickItem:function(t,o,s,p,C){
// 变量
var c: any = p?'\u6267\u884c\u5185\u5bb9\u641c\u7d22\u52a8\u4f5c':'\u6267\u884c\u641c\u7d22\u52a8\u4f5c',P=r(d[0]).PlatformUtils.isApp()?'100091003':'200091003',E=r(d[0]).PlatformUtils.isApp()?r(d[0]).EVENT_ID.SEARCHCLICKAPK:r(d[0]).EVENT_ID.SEARCHCLICKWAP;
return E=r(d[0]).PlatformUtils.isMp()?'100090101':E,{
data:{
actionName:c,actionCode:p?P:E,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_CLICK,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:r(d[1]).searchPage.resSiteNameHot,resSiteCode:r(d[1]).searchPage.resSiteCodeHot,content:{
searchWord:t,type:String(o),index:String(C+1),urlType:'1',wordType:s,click:'1'
}

}

}

}

}

}
),"97a08bdb0e081e05836a59c1c73e2fd9ecf7397ec1e274ee035a8097f3a820cc",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,r,i,a,_m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),s=r(d[0])(r(d[3])),o=r(d[0])(r(d[4])),n=r(d[0])(r(d[5])),l=r(d[0])(r(d[6])),c=r(d[7]),u=r(d[0])(r(d[8])),h=r(d[0])(r(d[9])),p=r(d[0])(r(d[10]));
// 函数
function f(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(f=function(){
return!!t
}
)()
}
var m='searchHistoryList',y=(function(l){
// 函数
function h(e: any): any {
var n,l,u,y;
return(0,t.default)(this,h),l=this,u=h,y=[e],u=(0,o.default)(u),(n=(0,s.default)(l,f()?Reflect.construct(u,y||[],(0,o.default)(l).constructor):u.apply(l,y))).wapBlurTimer=null,n.arr=[],n.arrY=[],n.indexArry=[],n._update=function(){
n.setState({
searchHisList:[],hasMoreBtn:!1,xAll:[]
}
),n.arr=[],n.arrY=[],r(d[11]).PlatformUtils.isApp()?n._getSearchHis(n.props.isLogin,n.props.searchId):n._getSearchHis(n.props.isLogin)
}
,n.querySearchHis=function(t){
// 变量
var e: any = r(d[11]).CommonUtils.getPortal();
t.limit=t.limit||10,t.portal=t.portal||(null==e?void 0:e.toString()),t.lang=r(d[11]).MCP_LANG.CN,t.country=t.country||r(d[11]).MCP_COUNTRY.CN;
// 变量
var s: any = "portal="+t.portal+"&lang="+t.lang+"&country="+t.country,o=r(d[11]).Service.openApiDomain+"mcp/querySearchHis?"+s+"&limit="+t.limit;
return t.version&&(o+="&version="+t.version),t.searchId&&(o+="&searchId="+t.searchId),r(d[11]).Http.get(o)
}
,n.goToSearch=function(t){
if(r(d[11]).PlatformUtils.isHarmony()&&r(d[11]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!1,uniqueId:n.props.uniqueId
}
),n.props.isShop&&c.DeviceEventEmitter.emit('shopSearch2Res','shop'),n.props.gotoUrl){
// 变量
var e: any = n.props.gotoUrl+"&keyWord="+t;
r(d[11]).RouterUtils.gotoPage(e)
}
else{
var s,o;
n.props.navigation.replace('SearchPage',{
keyword:t,configInfo:(null==(s=n.props)?void 0:s.configInfo)||{

}
,searchId:n.props.searchId,isLogin:n.props.isLogin
}
),n.props.clickItem(t,'3',null==(o=n.props)?void 0:o.isContentSearch)
}
var l;
(r(d[11]).EventTracking.execReportData('',!0),n.props.isLogin)||!1===(null==(l=n.props)?void 0:l.isContentSearch)&&n.setLocalHistory(t)
}
,n._deleteQueryHis=function(t){
n.setState({
searchHisList:[]
}
),r(d[11]).PlatformUtils.isWeb()&&window.localStorage.setItem(m,''),r(d[11]).PlatformUtils.isMp()&&r(d[11]).StorageUtil.removeStorageSyncMp(m);
var e=r(d[11]).PlatformUtils.isApp()?{
version:'1',searchId:t
}
:null;
r(d[11]).HttpService.deleteQueryHis(e)
}
,n._onLayout=function(t,e){
var s,o=0,l=t.nativeEvent.layout,c=l.x,u=l.width;
(n.arr[e]=c,n.arrY[e]=u,n.indexArry[e]=e,n.setState({
xAll:n.arr
}
),n.arr.length===n.state.searchHisList.length)&&(null==(s=n.arr)||s.forEach((function(t){
0===t&&3===++o&&n.setState({
hasMoreBtn:!0
}
)
}
)))
}
,n.toggleHistoryData=function(t,e){
// 变量
var s: any = 0,o=0;
if(r(d[11]).PlatformUtils.isIOS()){
var l,c=[],u=[];
null==(l=n.indexArry)||l.forEach((function(t,e){
c[t]=n.arr[e],u[t]=n.arrY[e]
}
)),c.forEach((function(t,n){
0===t&&3===++o&&(s=e-c[n-1]-u[n-1]-8>=28?n:n-1)
}
))
}
else{
var h;
null==(h=n.state.xAll)||h.forEach((function(t,l){
if(0===t&&3===++o){
s=l;
// 变量
var c: any = e-n.arrY[l-1]-n.arr[l-1]-8;
c>=28&&(s=r(d[11]).PlatformUtils.isHarmony()&&28===c?l-1:l)
}

}
))
}
return!0===n.state.btnTop&&s>=1?t.slice(0,s):t
}
,n.toggleHis=function(){
!0===n.state.btnTop?n.setState({
btnTop:!1
}
):n.setState({
btnTop:!0
}
)
}
,n.onLayoutMp=function(t){
var e=function(e){
var s,o=0,l=e[0],c=l.left||0,u=l.width||0;
(n.arr.push(c-16),n.arrY.push(u),n.indexArry.push(t),n.arr.length===n.state.searchHisList.length)&&(n.setState({
xAll:n.arr
}
),null==(s=n.arr)||s.forEach((function(t){
t<10&&3===++o&&n.setState({
hasMoreBtn:!0
}
)
}
)))
}
,s=r(d[11]).PlatformUtils.isWx()?wx:my;
setTimeout((function(){
n.mpSelectorQuery=s.createSelectorQuery().select('#myTouchableOpacity'+t).boundingClientRect(),n.mpSelectorQuery.exec((function(t){
e(t)
}
))
}
),5)
}
,n.deleteHisLayout=function(t,e){
return(0,r(d[12]).jsxs)(c.View,{
style:t.searchHisBox,children:[(0,r(d[12]).jsx)(c.Text,{
style:t.hisText,children:(0,r(d[11]).t)('search_recent')
}
),(0,r(d[12]).jsx)(c.TouchableOpacity,{
onPress:function(){
return n._deleteQueryHis(n.props.searchId)
}
,testID:'search-delrecent',nativeID:'search-delrecent',style:t.deleteView,children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:p.default.searchHisDelete,imgStyle:t.searchImgMp
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
iconName:"delete",width:18,height:18,normalCol:e.C13.color+e.opacityMap[e.C13.opacity]
}
)
}
)]
}
)
}
,n.isSmall=function(){
// 变量
var t: any = r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth;
return r(d[11]).ScreenUtils.isSmall(t)
}
,n.isPadHorizontal=function(){
// 变量
var t: any = r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth,e=r(d[11]).CommonUtils.getWindowSize('searchPage').screenHeight;
return r(d[11]).ScreenUtils.isPadHorizontal(t,e)
}
,n.hisListMargin=function(){
return n.isSmall()?8:n.isPadHorizontal()?16:12
}
,n.hisListLayout=function(t,e,s){
// 变量
var o: any = n.props.width-2*n.props.margin;
return(0,r(d[12]).jsxs)(c.View,{
style:t.hisTextBox,children:[n.state.hasMoreBtn?n.toggleHistoryData(n.handleHis(t,e,o),o):n.handleHis(t,e,o),n.state.hasMoreBtn&&(0,r(d[12]).jsx)(c.View,{
style:t.hisViewMore,children:(0,r(d[12]).jsx)(c.TouchableOpacity,{
style:[t.hisItemBoxMore,r(d[11]).PlatformUtils.isMp()&&t.hisItemBoxMp],onPress:n.toggleHis,testID:'search-arrowhead',nativeID:'search-arrowhead',children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:n.state.btnTop?p.default.searchArrowDown:p.default.searchArrowUp,imgStyle:t.downUpImgMp
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
iconName:n.state.btnTop?'searchDown':'searchUp',width:20,height:20,normalCol:s.C12.color+s.opacityMap[s.C12.opacity]
}
)
}
)
}
)]
}
)
}
,n.handleHis=function(t,e,s){
// 变量
var o: any = [];
return null==e||e.forEach((function(e,l){
r(d[11]).PlatformUtils.isMp()&&n.onLayoutMp(l),o.push((0,r(d[12]).jsx)(c.TouchableOpacity,{
id:'myTouchableOpacity'+l,style:[t.hisItemBox,{
maxWidth:s
}
,{
marginRight:n.hisListMargin()
}
],onPress:function(){
return n.goToSearch(e.keyword)
}
,onLayout:function(t){
n._onLayout(t,l)
}
,children:(0,r(d[12]).jsx)(c.Text,{
numberOfLines:1,ellipsizeMode:'tail',style:t.hisItemText,children:e.keyword
}
)
}
,l))
}
)),o
}
,n.state={
searchHisList:[],xAll:[],hasMoreBtn:!1,btnTop:!0
}
,n
}
return(0,n.default)(h,l),(0,e.default)(h,[{
key:"componentWillMount",value:function(){
// 变量
var t: any = this;
this._gestureHandlers=c.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onStartShouldSetPanResponderCapture:function(){
return!1
}
,onMoveShouldSetPanResponder:function(t,e){
return Math.abs(e.dx)>10||Math.abs(e.dy)>10
}
,onMoveShouldSetPanResponderCapture:function(){
return!1
}
,onPanResponderMove:function(e,s){
t.props.blur()
}

}
)
}

}
,{
key:"componentDidMount",value:function(){
r(d[11]).PlatformUtils.isApp()?this._getSearchHis(this.props.isLogin,this.props.searchId):this._getSearchHis(this.props.isLogin),this.subscription=c.DeviceEventEmitter.addListener('UPDATE_USER_DATA',this._update)
}

}
,{
key:"componentWillUnmount",value:function(){
r(d[11]).PlatformUtils.isAndroid()&&(this.eventListener&&this.eventListener.remove(),this.wapBlurTimer&&clearTimeout(this.wapBlurTimer)),(r(d[11]).PlatformUtils.isApp()||r(d[11]).PlatformUtils.isMp())&&this.subscription&&this.subscription.remove()
}

}
,{
key:"_getSearchHis",value:function(t,e){
var s=this,o=r(d[11]).PlatformUtils.isApp()?{
version:1
}
:{

}
;
if(t)this.querySearchHis(o).then((function(t){
// 变量
var e: any = t.searchHistoryList;
s.setState({
searchHisList:e||[]
}
)
}
)).catch((function(){
s.setState({
searchHisList:[]
}
)
}
));
else if(r(d[11]).PlatformUtils.isMp()){
var n=(r(d[11]).StorageUtil.getStorageSyncMp(m)?JSON.parse(r(d[11]).StorageUtil.getStorageSyncMp(m)||'[]'):[]).map((function(t){
return{
keyword:t
}

}
));
this.setState({
searchHisList:n
}
)
}
else if(r(d[11]).PlatformUtils.isWeb()){
var l=(window.localStorage.getItem(m)?JSON.parse(window.localStorage.getItem(m)||'[]'):[]).map((function(t){
return{
keyword:t
}

}
));
this.setState({
searchHisList:l
}
)
}
else this.querySearchHis({
searchId:e,version:1
}
).then((function(t){
// 变量
var e: any = t.searchHistoryList;
s.setState({
searchHisList:e||[]
}
)
}
)).catch((function(){
s.setState({
searchHisList:[]
}
)
}
))
}

}
,{
key:"setLocalHistory",value:function(t){
if(''!==t){
// 变量
var e: any = [];
try{
r(d[11]).PlatformUtils.isWeb()&&(e=JSON.parse(window.localStorage.getItem(m)||'[]').filter((function(e){
return e!==t
}
))),r(d[11]).PlatformUtils.isMp()&&(e=JSON.parse(r(d[11]).StorageUtil.getStorageSyncMp(m)||'[]').filter((function(e){
return e!==t
}
)))
}
catch(t){

}
e.unshift(t),e.splice(10),r(d[11]).PlatformUtils.isWeb()&&window.localStorage.setItem(m,JSON.stringify(e)),r(d[11]).PlatformUtils.isMp()&&r(d[11]).StorageUtil.setStorageSyncMp(m,JSON.stringify(e))
}

}

}
,{
key:"render",value:function(){
// 变量
var t: any = this,e=this.state.searchHisList;
return 0!==(null==e?void 0:e.length)?(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:u.default,children:function(s,o){
return r(d[11]).PlatformUtils.isApp()?(0,r(d[12]).jsxs)(c.View,Object.assign({
style:{
marginHorizontal:t.props.margin
}

}
,t._gestureHandlers.panHandlers,{
children:[t.deleteHisLayout(s,o),t.hisListLayout(s,e,o)]
}
)):(0,r(d[12]).jsxs)(c.View,{
style:{
marginHorizontal:t.props.margin
}
,children:[t.deleteHisLayout(s,o),t.hisListLayout(s,e,o)]
}
)
}

}
):null
}

}
])
}
)(l.default.Component);
_e.default=(0,r(d[11]).monitor)(h.default)((0,r(d[11]).itemExposeHoc)(y))
}
),"5853a73a19d63e39e9696730abccfae49060c6a8592de7537db30afb9b26fef4",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","e431913489ce240d6ca0eb0e55c4af2c8211326f6229a9fe720beba5dbd10ee1","279c88419c14587719df4c15c83516702f0d5e79edc2246d9cf001eab9278b88","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,o,s){
return{
data:{
actionName:s?'\u6267\u884c\u5185\u5bb9\u641c\u7d22\u52a8\u4f5c':'\u6267\u884c\u641c\u7d22\u52a8\u4f5c',actionCode:s?r(d[0]).PlatformUtils.isApp()?'100091003':'200091003':r(d[0]).PlatformUtils.isMp()?'100090101':r(d[0]).PlatformUtils.isApp()?r(d[0]).EVENT_ID.SEARCHCLICKAPK:r(d[0]).EVENT_ID.SEARCHCLICKWAP,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_CLICK,pageType:'Search',pageCatName:r(d[1]).searchPage.pageCatName,pageCatCode:r(d[1]).searchPage.pageCatCode,pageId:r(d[1]).searchPage.pageId,resSiteName:r(d[1]).searchPage.resSiteNameHistory,resSiteCode:r(d[1]).searchPage.resSiteCodeHistory,content:{
searchWord:t,type:String(o),urlType:'1',click:'1'
}

}

}

}

}

}
),"279c88419c14587719df4c15c83516702f0d5e79edc2246d9cf001eab9278b88",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]);
e.default=function(t){
return o.StyleSheet.create({
container:{
backgroundColor:t.C32.color
}

}
)
}

}
),"160282cdd7666c784557522df833316038f171f95e273a5a1279d77094c8f002",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=_e.SearchResultClass=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),i=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),a=_r(d[0])(_r(d[5])),o=_r(d[0])(_r(d[6])),l=_r(d[0])(_r(d[7])),n=_r(d[0])(_r(d[8])),s=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[11]),p=_r(d[0])(_r(d[12])),h=_r(d[0])(_r(d[13])),f=_r(d[0])(_r(d[14])),y=_r(d[0])(_r(d[15])),v=_r(d[0])(_r(d[16])),S=_r(d[0])(_r(d[17])),P=_r(d[0])(_r(d[18])),C=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = I(t);
if(i&&i.has(e))return i.get(e);
var r={
__proto__:null
}
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var l: any = a?Object.getOwnPropertyDescriptor(e,o):null;
l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]
}
return r.default=e,i&&i.set(e,r),r
}
)(_r(d[19])),w=_r(d[0])(_r(d[20])),T=_r(d[0])(_r(d[21])),x=_r(d[0])(_r(d[22]));
// 函数
function I(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(I=function(e){
return e?i:t
}
)(e)
}
// 函数
function L(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(L=function(){
return!!e
}
)()
}
var b='l2r',R='t2b',F=['asc','desc'],E={
viewAreaCoveragePercentThreshold:50
}
,k=(function(c){
// 函数
function f(a: any): any {
var n,c,v,I;
(0,r.default)(this,f),c=this,v=f,I=[a],v=(0,l.default)(v),(n=(0,o.default)(c,L()?Reflect.construct(v,I||[],(0,l.default)(c).constructor):v.apply(c,I))).tid=_r(d[23]).PlatformUtils.isMp()?_r(d[23]).StorageUtil.getStorageSyncMp('tid'):'',n.wapTimer=null,n.canClickTimer=null,n.loadMore=!0,n.pageNum=1,n.pageSize=18,n.loadMoreR=!0,n.pageNumR=1,n.pageSizeR=18,n.id="search"+(1e6*Math.random()).toFixed(),n.customStyle=null,n.attributeid=[],n.attributename=[],n.arry=[],n.canClick=!0,n.isReport=!1,n.itemlist=[],n.isPadApk=!1,n.categoryIndex=-1,n.resultHeaderList=[1,2,3,4],n.itemListData=[],n.showLoading=!0,n.showLoadingR=!0,n.loadStateR=1,n.loadState=1,n.slideShow=!1,n.firstEmpty=!0,n.resultType=1,n.resultTypeR=1,n.loading=!0,n.searchId=void 0,n.scrollViewStartOffsetY=0,n.width=0,n.scrollDirection='',n.activityHeight=0,n.categoryCardHeight=0,n.filterUpSticky=!1,n.filterDownSticky=!1,n.categoryFilterIndex=-1,n.capsuleType='normal',n.showRecommendPrd=!1,n.cardKeyName='name',n.cardKeyVal='id',n.isPhysicalCategory=!1,n.wrapScrollStatus='end',n.e2eIdInfo={

}
,n.onBackTop=function(){
n.scrollListTop()
}
,n.setBarHeight=function(){
_r(d[23]).PlatformUtils.isIOS()&&_r(d[23]).DeviceUtils.getStatusBarHeight().then((function(e){
n.setState({
iosStatusBarHeight:e
}
)
}
))
}
,n.handleWaterFallStyle=function(){
n.state.isWaterfall&&(n.isPadHorizontal()?n.customStyle=C.customStyleWaterFallH:n.customStyle=C.customStyleWaterFall)
}
,n.isPadHorizontal=function(){
// 变量
var e: any = n.width,t=n.state.screenHeight;
return _r(d[23]).ScreenUtils.isPadHorizontal(e,t)
}
,n._searchRegexp=function(e){
// 变量
var t: any = '';
if(e){
for(var i=/^[\f\n\r\t\v'()%`=&]{
0,2048
}
$/,r=0;
r<e.length;
r++)t+=e.substr(r,1).replace(i,'');
return t
}
return t
}
,n.eventTracingReportByLoad=function(){
// 变量
var e: any = _r(d[24]).searchResult.pageId,t=_r(d[24]).searchResult.pageCatCode,i=_r(d[24]).searchResult.pageCatName;
n.isContentSearchResult&&(e=_r(d[24]).contentResult.pageId,t=_r(d[24]).contentResult.pageCatCode,i=_r(d[24]).contentResult.pageCatName);
// 变量
var r: any = _r(d[23]).PlatformUtils.isApp()?'100091001':'200091001',a=_r(d[23]).PlatformUtils.isApp()?_r(d[23]).EVENT_ID.SEARCHLISTAPK:_r(d[23]).EVENT_ID.SEARCHLISTWAP;
a=_r(d[23]).PlatformUtils.isMp()?'100090002':a,_r(d[23]).EventTracking.eventTracingReportRightNow({
actionCode:n.isContentSearchResult?r:a,actionName:n.isContentSearchResult?'\u5185\u5bb9\u7ed3\u679c\u9875-\u9875\u9762\u52a0\u8f7d':'\u641c\u7d22\u7ed3\u679c\u9875-\u9875\u9762\u52a0\u8f7d',eventType:_r(d[23]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:e,pageCatCode:t,pageCatName:i,pageType:'Search',content:n.isContentSearchResult?{
searchWord:n.state.keyword,load:'1'
}
:{
searchWord:n.state.keyword,load:'1',Source:n.source
}

}
)
}
,n._getQueryPrd=function(e){
var t,i,r,a,o,l,c=n.state.cardId,u={

}
,p=n.state.resultList,h=n.state.promofilterList,f=n.state.brandfilterList,y=n.state.contentbrandList,v=[],S=n.pageNum,P=n.state.totalCount,C=!0,w=1,T=n.state.categoryFilterList||[],x=n.state.offersData||{

}
,I=n.state.promoFilter.length>0?JSON.stringify(n.state.promoFilter):void 0,L=n.state.brandFilter?JSON.stringify(n.state.brandFilter):[],b=n.state.categoryId?null==(t=n.state.categoryId)?void 0:t.toString():void 0;
o=n._convertCategoryFilterList('pivotal'),l=n._convertCategoryFilterList('spec');
var R={
keyword:n.state.keyword,pageNum:String(n.pageNum),pageSize:String(n.pageSize),searchSortField:null==(i=n.state.searchSortField)?void 0:i.toString(),searchSortType:n.state.searchSortType,searchId:n.state.isLogin?null:n.searchId,tid:n.tid,sid:n.state.sid,specAttrFilter:(null==(r=l)?void 0:r.length)>0?JSON.stringify(l):void 0,searchFlag:n.state.searchFlag,brandFilter:L,categoryId:b,screenParams:_r(d[23]).CommonUtils.isEmpty(u)?void 0:JSON.stringify(u),promoFilter:I,pivotalAttrFilter:(null==(a=o)?void 0:a.length)>0?JSON.stringify(o):void 0
}
;
if(c){
var F={
parentPhysicalCategoryId:String(n.parentPhysicalCategoryId)
}
;
n.isPhysicalCategory?F.childPhysicalCategoryId=String(c):F.specAttrId=[String(c)],R.topPhysicalCategoryFilter=JSON.stringify(F)
}
'scence'===n.prodSearchScope&&(R.sceneCode=JSON.stringify([n.searchScence])),_r(d[23]).HttpService.queryPrd(R).then((function(t){
if(null!=t&&t.success){
var i,r,a,o=t.topPhysicalCategoryFilter;
if(1===(S=t.pageNum||n.pageNum)&&(p=[]),p=p.concat(t.resultList?t.resultList:[])||[],n.itemListData=n.resultHeaderList.concat(p),S=t.pageNum||n.pageNum,P=null!=(i=t.totalCount)?i:n.state.totalCount,v=t.labelList?t.labelList:[],s.default.isEmpty(x))x=(null==(r=v[0])||null==(a=r.labelContentList)?void 0:a.length)>0?v[0].labelContentList[0]:{

}
;
h=t.promofilterList||n.state.promofilterList,f=t.brandfilterList||n.state.brandfilterList,y=t.brandfilterList||n.state.contentbrandList,T=t.categoryFilterList||[];
// 变量
var l: any = n.getCardData(o),c=!0;
e?c=!1:0===(p=p.map((function(e){
return e.sellingPoint='',e
}
))).length||2===t.resultType?(n.showRecommendPrd=!0,n._getRecommend()):p.length>0&&p.length<=10&&(n.displayIds=[],p.map((function(e){
var t;
n.displayIds.push(null==e||null==(t=e.productId)?void 0:t.toString())
}
)),n.showRecommendPrd=!0,n._getRecommend()),n.searchId||(n.searchId=null==t?void 0:t.searchId),0===p.length||P>S*n.pageSize?(n.loadMore=!0,n.pageNum+=1,C=1!==n.pageNum,w=1):(n.loadMore=!1,C=!0,w=3),n.firstEmpty=c,n.showLoading=C,n.loadState=w,n.resultTypeR=t.resultType||n.resultTypeR,n.resultType=t.resultType||n.resultType,n.loading=!1;
var I={
resultList:p,pageNum:n.pageNum+1,sid:t.sid,ruleId:t.ruleId,screenParams:u,promofilterList:h,brandfilterList:f,contentbrandList:y,totalCount:t.totalCount,categoryFilterList:T,offersData:x,cardData:l
}
;
e||(I.sortFieldList=t.sortFieldList||[]),n.setState(I)
}
else'10100'===t.resultCode&&(n.showLoading=!1,n.loadState=1,n.resultTypeR=2,n.loading=!1,n.firstEmpty=!0,n.setState({
totalCount:0
}
),n.showRecommendPrd=!0,n._getRecommend())
}
)).catch((function(e){
var t;
n.showLoading=!1,n.loading=!1,n.loadState=2,n.setState({
totalCount:0,loadingContent:!1
}
),'10100'===(null==e||null==(t=e.data)?void 0:t.resultCode)&&(n.resultTypeR=2,n.firstEmpty=!0,n.showRecommendPrd=!0,n._getRecommend())
}
)).finally((function(){
n.loading=!1,n.setState({
loadingContent:!1
}
),0===n.state.resultList.length&&(n.firstEmpty=!0)
}
))
}
,n.getCardData=function(e){
// 变量
var t: any = [];
if(e){
n.parentPhysicalCategoryId=e.id;
// 变量
var i: any = e.specAttrList,r=void 0===i?[]:i,a=e.childCategoryList,o=void 0===a?[]:a;
return o.length>0?(t=o,n.cardKeyVal='id',n.cardKeyName='name',n.isPhysicalCategory=!0):r.length>0&&(t=r,n.cardKeyVal='id',n.cardKeyName='value',n.isPhysicalCategory=!1),t
}
return t
}
,n._convertCategoryFilterList=function(e){
var t,i,r=n.state,a=r.categoryFilterList,o=r.pivotalAttrSelect,l=r.specAttrSelect,c=r.categoryIndex,u='pivotal'===e?o:l,p=[];
if(-1===c)return[];
// 变量
var h: any = 'pivotal'===e?null==(t=a[c])?void 0:t.pivotalAttrList:null==(i=a[c])?void 0:i.specAttrList;
if(!s.default.isEmpty(u)&&h.length>0){
for(var f=0;
f<h.length;
f++){
var y;
(null==u||null==(y=u[h[f].attrId])?void 0:y.length)>0&&p.push(u[h[f].attrId].join(';
'))
}
return p
}
return[]
}
,n._updateContent=function(){
n.isContentSearchResult?(n.setState({
discoveryContentList:[],isGetRecommendContent:!1,totalCount:0,loadingContent:!0
}
),n._queryDiscoveryContent()):(n.pageNum=1,n._getQueryPrd());
var e={
searchWord:n.state.keyword,type:'1',urlType:'1',click:'1'
}
;
n.props.clickItem(e,'search')
}
,n._queryDiscoveryContent=(0,i.default)((function*(){
// 变量
var e: any = n.tid;
_r(d[23]).PlatformUtils.isApp()&&(e=(yield _r(d[23]).DeviceUtils.getDeviceInfo('getDeviceInfo')).tid);
// 变量
var t: any = n.state.keyword;
(0,_r(d[25]).queryDiscoveryContent)({
tid:e,keyword:t
}
).then((function(e){
if(null!=e&&e.discoveryContentList&&Array.isArray(null==e?void 0:e.discoveryContentList)){
0===(null==e?void 0:e.discoveryContentList.length)&&n.setState({
isGetRecommendContent:!0,loadingContent:!1
}
);
// 变量
var t: any = null==e?void 0:e.discoveryContentList;
n.setState({
discoveryContentList:t,isGetRecommendContent:t.length<=5,totalCountContent:null==e?void 0:e.totalCount,loadingContent:!1
}
)
}
else n.setState({
isGetRecommendContent:!0,loadingContent:!1
}
)
}
)).catch((function(){
n.setState({
isGetRecommendContent:!0,loadingContent:!1
}
)
}
))
}
)),n._getRecommend=function(){
var e,t,i=n.state.productList,r=n.pageNumR;
n.showLoadingR=!0,n.loadStateR=1,_r(d[23]).HttpService.getRecommend({
deviceType:_r(d[23]).appIdStore.deviceType,tid:n.tid,sceneId:_r(d[23]).PlatformUtils.isApp()?'1,1,12,1201':'1,4,12,1201',isRecommended:!0,pageNum:r,pageSize:20,keyword:n.state.keyword,platformType:3,displayIds:JSON.stringify(null==(e=n.displayIds)||null==(t=e.toString())?void 0:t.split(','))
}
).then((function(e){
var t;
e.success&&(i=i.concat(null!=e&&e.productList?e.productList:[])||[],r=e.pageNum||n.pageNumR,i=i.map((function(e){
return e.sellingPoint='',e
}
)),20===(null==(t=e.productList)?void 0:t.length)?(n.loadMoreR=!0,n.pageNumR+=1,n.showLoadingR=1!==n.pageNumR,n.loadStateR=1,n.setState({
productList:i,sid:null==e?void 0:e.sid
}
)):(n.loadMoreR=!1,n.showLoadingR=!0,n.loadStateR=3,n.setState({
productList:i,sid:null==e?void 0:e.sid
}
)))
}
)).catch((function(){
n.showLoadingR=!1,n.loadStateR=2
}
))
}
,n.getActiveContent=function(e){
var t,i=_r(d[23]).MCP_LANG.CN,r=_r(d[23]).MCP_COUNTRY.CN,a={
portal:_r(d[23]).CommonUtils.getPortal().toString(),lang:i,country:r,keyword:e.keyword,version:e.version||'1',pageNum:e.pageNum||'1',pageSize:e.pageSize||'1',tid:_r(d[23]).PlatformUtils.isMp()?n.tid:null==(t=e.tid)?void 0:t.toString()
}
,o=_r(d[23]).Service.openApiDomain+"mcp/search/queryActiveContent";
return _r(d[23]).Http.post(o,a)
}
,n._getActiveContent=function(){
var e={
version:'1',pageNum:'1',pageSize:'1',tid:n.tid,keyword:n.state.keyword
}
;
n.getActiveContent(e).then((function(e){
var t={
isGetActiveContent:!0
}
;
if(e.success){
var i,r=e.resultList;
if(null!=r&&r.length&&1===(null==(i=r[0])?void 0:i.isRedirect)){
if(_r(d[23]).PlatformUtils.isMp()){
var a;
_r(d[23]).RouterUtils.gotoPage(null==(a=r[0])?void 0:a.mpOpenURL,'redirectTo')
}
else{
var o,l,s=_r(d[23]).PlatformUtils.isApp()?null==(o=r[0])?void 0:o.openURL:null==(l=r[0])?void 0:l.wapOpenURL;
n.props.navigation.replace('SearchDefault',{
showSearchBar:_r(d[23]).PlatformUtils.isHarmony(),hideKeyBoard:_r(d[23]).PlatformUtils.isHarmony()
}
),_r(d[23]).RouterUtils.gotoPage(s)
}
return
}
Object.assign(t,{
ativeContentList:e.resultList||[]
}
)
}
n.setState(t)
}
)).catch((function(){
n.setState({
isGetActiveContent:!0
}
)
}
))
}
,n.getShopByKeyword=function(e){
// 变量
var t: any = _r(d[23]).CommonUtils.getPortal(),i=_r(d[23]).CommonUtils.getPortal(),r=e.version?e.version:'1',a="lang="+_r(d[23]).MCP_LANG.CN+"&country="+_r(d[23]).MCP_COUNTRY.CN+"&portal="+i;
(_r(d[23]).PlatformUtils.isAndroid()||_r(d[23]).PlatformUtils.isHarmony())&&(t=3),_r(d[23]).PlatformUtils.isIOS()&&(t=8);
// 变量
var o: any = _r(d[23]).Service.openApiDomain+"sc/shop/searchShopByKeyword?"+a+"&saleChannel="+t+"&keyword="+e.keyword+"&version="+r;
return _r(d[23]).Http.get(o)
}
,n.getSearchShop=function(){
var e={
keyword:n.state.keyword,version:'1'
}
;
n.getShopByKeyword(e).then((function(e){
if(e.success){
var t,i=(null==(t=e.data)?void 0:t.shopBaseInfos)||[];
i.length>0&&n.setState({
shopData:i
}
)
}

}
)).catch((function(){

}
))
}
,n.getVproLogo=(0,i.default)((function*(){
// 变量
var e: any = yield _r(d[23]).HttpService.getTemplate('vmall_vpro_logo');
if(null!=e&&e.success){
var t,i,r=e.templateMapping;
return null==r||null==(t=r.vmall_vpro_logo)||null==(i=t.content)?void 0:i.replace(/<.*?>/gi,'')
}

}
)),n.onPressBack=function(){
return _r(d[23]).SearchResultStore.onUpdate(''),n.eventTracingReportByLeave(),'SearchPage'===_r(d[23]).SearchResultStore.routeName?_r(d[23]).DeviceUtils.goBack():_r(d[23]).PlatformUtils.isIOS()?n.props.navigation.replace('SearchDefault',{
iosFlag:!0
}
):_r(d[23]).PlatformUtils.isMp()||n.props.navigation.replace('SearchDefault',{
showSearchBar:_r(d[23]).PlatformUtils.isHarmony()
}
),u.DeviceEventEmitter.emit('UPDATE_USER_DATA',''),!0
}
,n.reportPageLeave=function(){
n.eventTracingReportByLeave()
}
,n.eventTracingReportByLeave=function(){
// 变量
var e: any = _r(d[24]).searchResult.pageId,t=_r(d[24]).searchResult.pageCatCode,i=_r(d[24]).searchResult.pageCatName;
n.isContentSearchResult&&(e=_r(d[24]).contentResult.pageId,t=_r(d[24]).contentResult.pageCatCode,i=_r(d[24]).contentResult.pageCatName);
// 变量
var r: any = _r(d[23]).PlatformUtils.isMp()?'100090002':_r(d[23]).EVENT_ID.SEARCHLISTAPK;
_r(d[23]).EventTracking.eventTracingReport({
actionCode:n.isContentSearchResult?'100091002':r,actionName:n.isContentSearchResult?'\u5185\u5bb9\u7ed3\u679c\u9875\u79bb\u5f00':'\u641c\u7d22\u7ed3\u679c\u9875\u79bb\u5f00',eventType:_r(d[23]).EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:e,pageCatCode:t,pageCatName:i,pageType:'Search',content:n.isContentSearchResult?{
searchWord:n.state.keyword,load:'1'
}
:{
searchWord:n.state.keyword,load:'1',Source:n.source
}

}
)
}
,n.onPressChange=function(){
// 变量
var e: any = n.state.layoutType===b?R:b;
n.showLoading=!1,n.setState({
layoutType:e
}
,(function(){
n.showLoading=!0
}
))
}
,n.calWidth=function(){
// 变量
var e: any = n.width,t=n.marginValue(),i=t.colGutter,r=t.paddingValue;
if(n.isPad()){
// 变量
var a: any = n.isPadHorizontal()?12:8;
return(e-2*r-(a-1)*i)/a*4+3*i+r
}
return 296
}
,n.slideShowTap=function(e){
n.wapTimer&&clearTimeout(n.wapTimer),n.slideShow=e,n.wapTimer=setTimeout((function(){
// 变量
var t: any = n.state.currentCapsuleIndex;
n.setState({
translateX:new u.Animated.Value(n.calWidth()),currentCapsuleIndex:e?-1:t,scrollEnable:!0
}
,(function(){
if(e)u.Animated.timing(n.state.translateX,{
toValue:0,duration:200,easing:u.Easing.ease,useNativeDriver:!0
}
).start();
else{
// 变量
var t: any = n.calWidth();
n.setState({
translateX:new u.Animated.Value(t)
}
)
}
u.DeviceEventEmitter.emit('scrollEnable',!n.slideShow)
}
))
}
),50)
}
,n.slideShowCapsuleTap=function(e){
n.setState({
scrollEnable:!e
}
,(function(){
n.wapTimer&&clearTimeout(n.wapTimer),n.wapTimer=setTimeout((function(){
u.DeviceEventEmitter.emit('scrollEnable',!e)
}
),50)
}
))
}
,n.changeCategory=function(e){
n.pageNum=1,n.setState({
selectCardIndex:e.index,cardId:e.cardId
}
,(function(){
n.getQueryPrdFilter()
}
))
}
,n.renderHeader=function(e){
var t={
uniqueId:n.props.uniqueId
}
;
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(u.View,{
ref:function(e){
n.headerTitleViewObj=e
}
,style:e.headerTitleWrap,children:n.renderItemSearchTitle(e,t)
}
),n.renderItemSearchRecommend(e),n.renderItemSearchCategories(e),n.renderItemSearchCapsule(e,'normal'),n.renderItemSearchCategoriesCard(e),n.renderPrdEmpty(e)]
}
)
}
,n.renderItemSearchTitle=function(e,t){
// 变量
var i: any = n.state,r=i.layoutType,a=i.keywordText;
return(0,_r(d[26]).jsx)(P.default,{
onPress:n.onPressBack,isChange:!0,isInput:!0,layoutType:r,isPad:n.isPad(),isPadHorizontal:n.isPadHorizontal(),onPressChange:n.onPressChange,navigation:n.props.navigation,searchWord:a,reportPageLeave:n.reportPageLeave,deleClick:n.deleClick,scrollListTop:n.scrollListTop,searchClick:n._updateContent,otherParams:t
}
)
}
,n.getActivityLayout=function(e){
n.activityHeight=e.nativeEvent.layout.height
}
,n.renderItemSearchRecommend=function(e){
// 变量
var t: any = n.state,i=t.ativeContentList,r=t.configInfo,a=(null==r?void 0:r.searchResultPageActivityShow)||'true',o=n.props.clickItem;
if(_r(d[23]).PlatformUtils.isMp()){
// 变量
var l: any = _r(d[23]).PlatformUtils.isWx()?wx:my;
n.activityLayoutTimer=setTimeout((function(){
n.mpSelectorQuery=l.createSelectorQuery().select('#myActivityView').boundingClientRect(),n.mpSelectorQuery.exec((function(e){
var t;
this.activityHeight=(null==(t=e[0])?void 0:t.height)||0
}
))
}
),5)
}
return(0,_r(d[26]).jsx)(u.View,{
id:'myActivityView',onLayout:n.getActivityLayout,children:'true'===a&&i.length?(0,_r(d[26]).jsx)(u.View,{
testID:'searchresult-ad',nativeID:'searchresult-ad',children:(0,_r(d[26]).jsx)(S.default,{
isPadHorizontal:n.isPadHorizontal(),isPad:n.isPad(),data:i,DarkStore:_r(d[23]).DarkStore.darkBool,clickItem:o,pageId:n.props.pageId
}
)
}
):(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:n.renderShopCard(e)
}
)
}
)
}
,n.renderItemSearchCategories=function(e){
// 变量
var t: any = n.state,i=t.sortFieldList,r=t.keyword,a=t.selectItem,o=t.searchSortField,l=t.searchSortType,s=n.props.clickItem;
return i.length&&!n.loading?(0,_r(d[26]).jsx)(_r(d[27]).SearchCategories,{
onSlideShowTap:n.slideShowTap,onChangesTap:n._changeSortTap,data:i,clickItem:s,searchWord:r,selectItem:a,searchSortField:o,searchSortType:'desc'===l?'1':'0',pageType:'searchResult'
}
):null
}
,n.renderItemSearchCapsule=function(e,t){
// 变量
var i: any = n.state,r=i.categoryFilterList,a=i.brandfilterList,o=i.categoryIndex,l=i.currentCapsuleIndex,s=i.pivotalAttrSelect,c=i.specAttrSelect,u=i.brandFilter,p=i.ativeContentList,h=n.props.clickItem;
return n.getCapsuleNum()>=3&&!n.loading?(0,_r(d[26]).jsx)(y.default,{
onRef:n.onCapsuleRef,onSlideShowTap:n.slideShowCapsuleTap,categoryFilterList:r,currentCapsuleIndex:l,pivotalAttrSelect:s,specAttrSelect:c,brandFilter:u,updateCapsuleData:n.updateCapsuleData,brandfilterList:a,categoryIndex:o,clickItem:h,initCapsuleData:function(e){
var t;
null==(t=n.searchCapsuleModalView)||t.initCapsuleData(e)
}
,capsuleType:t,isPad:n.isPad(),isPadHorizontal:n.isPadHorizontal(),width:n.boxWidth(),height:n.state.screenHeight,scrollTop:n.scrollTop,activeContentLength:null==p?void 0:p.length
}
):null
}
,n.getCategoryCardLayout=function(e){
n.categoryCardHeight=e.nativeEvent.layout.height
}
,n.renderItemSearchCategoriesCard=function(e){
// 变量
var t: any = n.state,i=t.cardData,r=t.selectCardIndex,a=t.keyword;
return i.length>0?(0,_r(d[26]).jsx)(u.View,{
onLayout:n.getCategoryCardLayout,children:(0,_r(d[26]).jsx)(h.default,{
isPadHorizontal:n.isPadHorizontal(),onChangesCategory:n.changeCategory,isPad:n.isPad(),data:i,keyName:n.cardKeyName,valName:n.cardKeyVal,selectIndex:r,searchWord:a,isPhysicalCategory:n.isPhysicalCategory,type:'searchresult'
}
)
}
):null
}
,n.renderShopCard=function(e){
// 变量
var t: any = n.state.shopData,i=_r(d[24]).searchResult.pageId,r=_r(d[24]).searchResult.pageCatCode,a=_r(d[24]).searchResult.pageCatName,o=_r(d[24]).searchResult.resSiteNameCarrier,l=_r(d[24]).searchResult.resSiteCodeCarrier;
return t.length>0&&!_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(u.View,{
nativeID:"activityWrap",style:[e.shopWrap,e.prdAreaR],children:(0,_r(d[26]).jsx)(_r(d[27]).ShopCard,{
data:t[0],pageId:i,pageCatCode:r,pageCatName:a,resSiteName:o,resSiteCode:l
}
)
}
):null
}
,n.renderPrdEmpty=function(e){
if(!(0===n.state.resultList.length||2===n.resultType))return null;
// 变量
var t: any = n.getEmptyHeight(),i=t.emptyHeight,r=t.marginTopValue;
return(0,_r(d[26]).jsxs)(u.View,{
style:[e.emptyC,n.firstEmpty?null:{
height:i
}
,n.firstEmpty?{
marginTop:24,marginBottom:24,justifyContent:'center'
}
:null],children:[_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(_r(d[27]).FastImageView,{
imgUri:p.default.notyet,imgStyle:e.emptyImg
}
):(0,_r(d[26]).jsx)(u.Image,{
source:p.default.notyet,style:[e.emptyImg,!n.firstEmpty&&{
marginTop:r
}
]
}
),(0,_r(d[26]).jsx)(x.default,{
width:n.props.width,firstEmpty:n.firstEmpty,errorEmpty:n.state.errorEmpty,keywordText:n.state.keywordText,styles:e,isPad:n.isPad()
}
),'scence'===n.prodSearchScope?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:n.allSearchClick,style:e.mt16,children:(0,_r(d[26]).jsx)(u.View,{
style:[e.allSearchBtn],children:(0,_r(d[26]).jsx)(u.Text,{
style:e.allSearchTxt,children:(0,_r(d[23]).t)('allsearch')
}
)
}
)
}
):null]
}
)
}
,n.allSearchClick=function(){
n.searchScence='',n.showRecommendPrd=!1,n.prodSearchScope='all',_r(d[23]).SearchResultStore.setProdSearchScope('all'),_r(d[23]).SearchResultStore.setSearchScence(''),n.resetTap()
}
,n._changesTap=function(e){
n.pageNum=1,n.itemlist=[],n.setState({
searchSortField:e.searchSortField?e.searchSortField:n.state.searchSortField,pivotalAttrSelect:{

}
,categoryId:e.categoryId?e.categoryId:void 0,specAttrSelect:{

}
,boFilter:!0
}
,(function(){
n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.batchReportFilter=function(){
var e,t,i,r,a,o=n.props.clickItem,l=n.state,c=l.promofilterList,u=l.brandfilterList,p=l.labelContentSelect,h=l.categoryFilterList,f=l.pivotalAttrSelect,y=l.specAttrSelect,v=l.offersData,S=l.categoryIndex,P=[],C=[],w=1;
(c.forEach((function(e,t){
n.state.promoFilter.includes(e.promoLabelCode)&&(P.push(w+","+(t+1)),C.push('\u6d3b\u52a8\u7cbe\u9009,'+e.promoLabelName))
}
)),c.length>0&&w++,u.forEach((function(e,t){
n.state.brandFilter.includes(e.brandCode)&&(P.push(w+","+(t+1)),C.push('\u54c1\u724c,'+e.brandName))
}
)),u.length>0&&w++,s.default.isEmpty(v)||(null!=p&&p[null==v?void 0:v.fieldName]&&(null==p?void 0:p[null==v?void 0:v.fieldName].length)>0&&v.itemEntryList.forEach((function(e,t){
null!=p&&p[null==v?void 0:v.fieldName].includes(e.key)&&(C.push(v.displayName+','+e.value),P.push(w+","+(t+1)))
}
)),w++),s.default.size(h)>0&&-1!==S&&(C.push((0,_r(d[23]).t)('category')+','+h[S].categoryName),P.push(w+","+(S+1)),w++),s.default.size(h)>0)&&(null==(e=h[S])||null==(t=e.pivotalAttrList)||t.forEach((function(e){
var t,i;
(null==e||null==(t=e.attrEnumList)?void 0:t.length)>1&&(null==e||null==(i=e.attrEnumList)||i.forEach((function(t,i){
var r;
null!=(r=f[e.attrId])&&r.includes(t.id)&&(C.push(e.attrName+','+t.value),P.push(w+","+(i+1)))
}
)),w++)
}
)),null==(i=h[S])||null==(r=i.specAttrList)||r.forEach((function(e){
var t,i;
(null==e||null==(t=e.attrEnumList)?void 0:t.length)>1&&(null==e||null==(i=e.attrEnumList)||i.forEach((function(t,i){
var r;
null!=(r=y[e.attrId])&&r.includes(t.id)&&(C.push(e.attrName+','+t.value),P.push(w+","+(i+1)))
}
)),w++)
}
)));
(n.attributename=C,n.attributeid=P,P.length>0)&&(o({
attributeid:P,attributename:C,click:'1',categoryId:null==(a=h[S])?void 0:a.categoryId
}
,'condition'),_r(d[23]).EventTracking.execReportData('',!0))
}
,n._changeSortTap=function(e){
n.pageNum=1,n.itemlist=[],-1===n.state.currentCapsuleIndex&&n.scrollListTop(),n.setState({
searchSortField:e.searchSortField?e.searchSortField:n.state.searchSortField,searchSortType:F[e.searchSortType?e.searchSortType:n.state.searchSortType],categoryId:n.state.categoryId?n.state.categoryId:void 0,boFilter:!0,selectItem:e.index
}
,(function(){
n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.scrollListTop=function(){
_r(d[23]).PlatformUtils.isIOS()?(n.timerScroll&&clearTimeout(n.timerScroll),n.timerScroll=setTimeout((function(){
n.scroller&&n.scroller.scrollToOffset({
offset:0,animated:!1
}
)
}
),0)):n.scroller&&n.scroller.scrollToOffset({
offset:0,animated:!1
}
)
}
,n.scrollTop=function(e){
_r(d[23]).PlatformUtils.isIOS()?(n.timerScroll&&clearTimeout(n.timerScroll),n.timerScroll=setTimeout((function(){
n.scroller&&n.scroller.scrollToOffset({
offset:n.scrollViewStartOffsetY+e,animated:!1
}
)
}
),0)):n.scroller&&n.scroller.scrollToOffset({
offset:n.scrollViewStartOffsetY+e,animated:!1
}
)
}
,n.scrollPage=function(e){
_r(d[23]).PlatformUtils.isIOS()&&(n.timer&&clearTimeout(n.timer),n.timer=setTimeout((function(){
u.DeviceEventEmitter.emit('iosForOnScrollEvent',e,_r(d[23]).PAGE_TYPE.search)
}
),1e3));
// 变量
var t: any = Math.ceil(e.nativeEvent.contentOffset.y);
Math.ceil(n.scrollViewStartOffsetY)<t&&t>0?('up'!==n.scrollDirection&&(n.scrollDirection='up',n.titleViewObj.setNativeProps({
style:{
zIndex:-1,opacity:0
}

}
),n.headerTitleViewObj.setNativeProps({
style:{
zIndex:2,opacity:1
}

}
),n.capsuleType='normal'),t>=n.activityHeight+_r(d[23]).CommonUtils.getScaleSize(22,2)+34&&!1===n.filterUpSticky&&(n.filterUpSticky=!0,n.filterDownSticky=!1,n.filterViewObj.setNativeProps({
style:{
top:0,zIndex:2,opacity:1
}

}
),n.capsuleType='top')):Math.ceil(n.scrollViewStartOffsetY)>t&&('down'!==n.scrollDirection&&(n.scrollDirection='down',n.titleViewObj.setNativeProps({
style:{
zIndex:2,opacity:1
}

}
),n.headerTitleViewObj.setNativeProps({
style:{
zIndex:-1,opacity:0
}

}
),n.capsuleType='normal'),t>n.activityHeight+_r(d[23]).CommonUtils.getScaleSize(22,2)+34&&!1===n.filterDownSticky?(n.filterUpSticky=!1,n.filterDownSticky=!0,n.filterViewObj.setNativeProps({
style:{
top:_r(d[23]).CommonUtils.getScaleSize(22,_r(d[23]).FONT_MUTIPLE.FONT_LEVEL_THREE)+34,zIndex:2,opacity:1
}

}
),n.capsuleType='top'):t<=n.activityHeight&&(n.filterUpSticky||n.filterDownSticky)&&(n.filterUpSticky=!1,n.filterDownSticky=!1,n.filterViewObj.setNativeProps({
style:{
zIndex:-1,opacity:0
}

}
),n.capsuleType='normal')),0===t&&(n.capsuleType='normal'),n.scrollViewStartOffsetY=t,n.searchCapsuleView&&n.searchCapsuleView.changeCapsuleModalTop(n.capsuleType)
}
,n.onMomentumScrollEnd=function(e){
u.DeviceEventEmitter.emit('onScrollEvent',e,_r(d[23]).PAGE_TYPE.search)
}
,n.keyExtractorFn=function(e,t){
return String(e.productId+t)
}
,n.renderProductList=function(e){
var t,i,r=n.state,a=r.configInfo,o=r.resultList,l=r.scrollEnable,s=[];
'true'===((null==a?void 0:a.searchResultPageProdShow)||(null==(t=n.props)?void 0:t.searchResultPageProdShow)||'true')&&!n.loading&&o.length>0&&1===n.resultType&&(s=o);
// 变量
var c: any = (2===n.resultTypeR||o.length<=10)&&n.showRecommendPrd?n._loadMoreR:n._loadMore;
0===s.length&&s.push({
isEmpty:!0
}
);
return(0,_r(d[26]).jsx)(u.View,{
style:[e.productList,_r(d[23]).PlatformUtils.isApp()&&e.productListApk,_r(d[23]).PlatformUtils.isAli()&&{
height:n.props.mpWindowHeight,marginTop:0
}
,_r(d[23]).PlatformUtils.isWx()&&{
height:n.props.mpWindowHeight>0?n.props.mpWindowHeight:null==(i=wx.getWindowInfo())?void 0:i.windowHeight,marginTop:0
}
],children:(0,_r(d[26]).jsx)(u.FlatList,{
ref:function(e){
n.scroller=e
}
,style:{
flex:1
}
,data:s,renderItem:function(t){
// 变量
var i: any = t.item,r=t.index;
return i.isEmpty?(0,_r(d[26]).jsx)(u.View,{

}
):n.renderProduct(i,r,e)
}
,keyExtractor:n.keyExtractorFn,onEndReachedThreshold:_r(d[23]).PlatformUtils.isMp()?200:.1,onEndReached:c,initialNumToRender:n.pageSize,ListHeaderComponent:n.renderHeader(e),ListFooterComponent:n.renderFooterRec(e),scrollEnabled:l,showsVerticalScrollIndicator:!1,onScroll:n.scrollPage,viewabilityConfig:E,onMomentumScrollEnd:n.onMomentumScrollEnd,bounces:_r(d[23]).PlatformUtils.isHarmony(),removeClippedSubviews:!_r(d[23]).PlatformUtils.isIOS(),scrollEventThrottle:5,maxToRenderPerBatch:n.pageSize
}
)
}
)
}
,n.getEmptyHeight=function(){
// 变量
var e: any = n.state,t=e.sortFieldList,i=e.screenHeight,r=n.isPad()||n.isPadApk?i:n.props.height;
r=_r(d[23]).PlatformUtils.isMp()?n.props.mpWindowHeight:r;
// 变量
var a: any = t.length>0?40:0,o=n.getCapsuleNum()>=3?40:0,l='scence'===n.prodSearchScope?200:140,s=56+n.activityHeight+a+o+n.categoryCardHeight,c=r-s-(_r(d[23]).PlatformUtils.isHarmony()?n.checkStatusBarHeight():null==u.StatusBar?void 0:u.StatusBar.currentHeight),p=c<l?l:c;
return{
emptyHeight:p,marginTopValue:4*s>r?.5*p-68:.4*p-68
}

}
,n.getTitleBarHeight=function(){
var e,t=(null==(e=n.state.configInfo)?void 0:e.searchResultPageActivityShow)||'true',i=56,r=n.state,a=r.ativeContentList,o=r.shopData,l=r.shopCardHeight;
return a.length>0&&'true'===t?i=128:o.length>0&&(i=l+56),i
}
,n.renderFooterRec=function(e){
var t,i=n.state,r=i.configInfo,a=i.resultList,o=i.productCapsuleHeight,l=(null==r?void 0:r.searchResultPageProdShow)||(null==(t=n.props)?void 0:t.searchResultPageProdShow)||'true';
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:['true'===l&&a.length>0&&1===n.resultType?(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:n.slideShow&&1===n.loadState?null:(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(_r(d[27]).LoadingView,{
showLoading:n.showLoading,position:n.state.loadingPostion,loadState:n.loadState,errorCallback:n._getQueryPrd,height:_r(d[23]).CommonUtils.getScaleSize(19,2)+37,iconSize:24
}
),a.length>=10&&(0,_r(d[26]).jsx)(u.View,{
style:{
height:20
}

}
)]
}
)
}
):null,(2===n.resultTypeR||a.length<=10)&&!n.loading?(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:n.renderRecommemdlist(e)
}
):null,n.getCapsuleNum()>=3?(0,_r(d[26]).jsx)(u.View,{
style:{
width:'100%',height:o
}

}
):null]
}
)
}
,n._loadMore=function(){
// 变量
var e: any = n.state.resultList;
n.pageNum>1&&e.length>0&&n.loadPageData()
}
,n.loadPageData=s.default.debounce((function(){
n.loadMore&&(n.loadMore=!1,n.state.boFilter?n.getQueryPrdFilter():n._getQueryPrd(!0))
}
),200),n.getQueryPrdFilter=function(){
var e,t,i,r,a=n.state.cardId,o={

}
,l={

}
,c=n.state.promoFilter.length>0?JSON.stringify(n.state.promoFilter):void 0,u=n.state.brandFilter.length>0?JSON.stringify(n.state.brandFilter):void 0;
for(var p in n.state.labelContentSelect)n.state.labelContentSelect[p].length>0&&(o[p]=n.state.labelContentSelect[p]);
''!==n.state.maxinumPrice&&void 0!==n.state.maxinumPrice&&(l.lte=parseInt(n.state.maxinumPrice,10),0===n.state.mininumPrice||n.state.mininumPrice||(l.gt=0)),''!==n.state.mininumPrice&&void 0!==n.state.maxinumPrice&&(l.gt=parseInt(n.state.mininumPrice,10),0===n.state.maxinumPrice||n.state.maxinumPrice||(l.lte=99999999));
var h,f,y=n.state.categoryId?null==(e=n.state.categoryId)?void 0:e.toString():void 0,v=n.state.categoryFilterList||[],S=[],P=n.state.promofilterList,C=n.state.contentbrandList||[],w=n.state.offersData||{

}
,T=n.state.totalCount,x=n.state.resultList,I=n.pageNum;
h=n._convertCategoryFilterList('pivotal'),f=n._convertCategoryFilterList('spec'),n.showLoading=!0,n.loadState=1;
var L={
keyword:n.state.keyword,pageNum:null==(t=n.pageNum)?void 0:t.toString(),pageSize:null==(i=n.pageSize)?void 0:i.toString(),searchSortField:null==(r=n.state.searchSortField)?void 0:r.toString(),searchSortType:n.state.searchSortType,searchId:n.state.isLogin?null:n.searchId,tid:n.tid,sid:n.state.sid,priceLabel:s.default.isEmpty(l)?void 0:JSON.stringify([l]),searchFlag:n.state.searchFlag,screenParams:s.default.isEmpty(o)?void 0:JSON.stringify(o),promoFilter:c,brandFilter:u,categoryId:y,pivotalAttrFilter:s.default.size(h)>0?JSON.stringify(h):void 0,specAttrFilter:s.default.size(f)>0?JSON.stringify(f):void 0
}
;
if('scence'===n.prodSearchScope&&(L.sceneCode=JSON.stringify([n.searchScence])),a){
var b={
parentPhysicalCategoryId:String(n.parentPhysicalCategoryId)
}
;
n.isPhysicalCategory?b.childPhysicalCategoryId=String(a):b.specAttrId=[String(a)],L.topPhysicalCategoryFilter=JSON.stringify(b)
}
_r(d[23]).HttpService.queryPrd(L).then((function(e){
if(null!=e&&e.success){
var t,i,r,a;
if(1===(I=e.pageNum||n.pageNum)&&(x=[]),x=x.concat(e.resultList||[])||[],T=null!=(t=e.totalCount)?t:n.state.totalCount,S=e.labelList||[],s.default.isEmpty(w))w=(null==(i=S[0])||null==(r=i.labelContentList)?void 0:r.length)>0?null==(a=S[0])?void 0:a.labelContentList[0]:{

}
;
P=e.promofilterList||n.state.promofilterList,C=e.brandfilterList||n.state.contentbrandList,n.firstEmpty=!1,n.resultType=e.resultType||n.resultType,0===x.length||T>I*n.pageSize?(n.loadMore=!0,n.pageNum+=1,n.showLoading=1!==n.pageNum,n.loadState=1,n.loading=!1,n.setState({
resultList:x,pageNum:n.pageNum+1,sid:e.sid,ruleId:e.ruleId,screenParams:o,promofilterList:P,contentbrandList:C,totalCount:e.totalCount,categoryFilterList:v,offersData:w
}
)):(n.loadMore=!1,n.showLoading=!0,n.loadState=3,n.loading=!1,n.setState({
resultList:x,sid:e.sid,ruleId:e.ruleId,screenParams:o,pageNum:n.pageNum+1,promofilterList:P,contentbrandList:C,totalCount:e.totalCount,categoryFilterList:v,offersData:w
}
))
}

}
)).catch((function(){
n.showLoading=!1,n.loadState=2,n.loading=!1,n.setState({
totalCount:0
}
)
}
))
}
,n.renderProductItem=function(e,t,i,r){
// 变量
var a: any = void 0!==e.originIndex?e.originIndex:t,o='l2r'===n.state.layoutType;
e.promotionRules=e.promoLabels,e.imgUrl=_r(d[23]).Service.cmsCndProdPath+e.photoPath+'428_428_'+e.photoName,e.prdName=1===e.showSbomNameForSearch?e.skuName:e.name,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.reviewCount=e.rateCount,e.goodReviewRate=e.goodRate,e.wapurl=_r(d[23]).RouterUtils.getProductDetailUrlForWebAll(e.productId,e.skuCode),e.weburl=_r(d[23]).RouterUtils.getProductDetailUrlForWebAll(e.productId,e.skuCode),e.showShopName=_r(d[23]).PlatformUtils.isAli()?0:e.displayToCustomer,e.keyName=e.briefName+t;
// 变量
var l: any = n.state.contentbrandList.length>=6,s=n.state.resultList.length<=10,c=!n.isPad()&&o&&7===t,u=n.isPad()?o:!o,p=n.isPad()&&!o,h=n.isPad()?78:_r(d[23]).CommonUtils.getScaleSize(50,2)+75,f=o?157:0,y=(0,_r(d[23]).getBestFitImgUrl)(r,f,e.imgUrl,!0),v=e.originPrice!==e.salePrice&&String(e.originPrice).length>5&&_r(d[23]).fontStore.fontMutiple>=_r(d[23]).FONT_MUTIPLE.FONT_LEVEL_THREE?14:0;
e.imgUrl=y,e.activityPromInfoList=e.activityPromInfoList;
var S=o?C.l2rLatoutStyle:C.t2bStyle,P=(0,_r(d[26]).jsx)(_r(d[27]).ProductItem,{
receiveRef:function(i){
return n.receiveRef(i,e,'product',t,!0)
}
,data:e,structure:n.state.layoutType,type:'base',config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,buyIconShow:!1,commentCountShow:!0,originPriceShow:!0,prdNameNum:2,promotionTextLineNum:1,imgWrapWidth:o?140:0,imgWidth:o?108:0,promTagPriceTop:!0,imgFilled:!0,prdNameBtTextHAuto:!0,isShowEstPrice:!0,layoutType:o?'OneColumnLayout':''
}
,onClick:function(){
return n.onClickPrd(e,a,t)
}
,iWidth:r,iHeight:o?_r(d[23]).CommonUtils.getScaleSize(74+v,2)+84:0,txtAreaHeight:_r(d[23]).CommonUtils.getScaleSize(96,2)+57,onClickShopName:function(){
return n.intoShop(e)
}
,vproLogoUrl:n.state.vproLogo,pageType:'searchResult',isWrappedWithGesture:_r(d[23]).PlatformUtils.isAndroid()||_r(d[23]).PlatformUtils.isHarmony(),customPrdStyles:S
}
,e.productId),w=n.getPrdInfo(e);
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[_r(d[23]).PlatformUtils.isAndroid()?(0,_r(d[26]).jsx)(_r(d[28]).TapGestureHandler,{
prdUrl:w,numberOfTaps:1,maxDist:20,children:P
}
):(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:P
}
),!s&&l&&n.state.showProduct&&n.centralInterspersed(i,c,u,p,h,t)]
}
)
}
,n.getPrdInfo=function(e){
var t={
prdId:e.productId||'',skuCode:e.skuCode||'',photoPath:{
path:e.photoPath||'',name:e.photoName||''
}
,wapPoster:e.wapPoster||[],productPageType:e.productPageType
}
;
return JSON.stringify(t)
}
,n.centralItem=function(e,t){
return(0,_r(d[26]).jsx)(T.default,{
brandfilterList:e,_styles:t,widthItem:n.widthItem,isPad:n.isPad(),brandTextOnclick:n.brandTextOnclick,width:n.props.width,searchWord:n.state.keyword
}
)
}
,n.centralInterspersed=function(e,t,i,r,a,o){
// 变量
var l: any = n.state,s=l.layoutType,c=l.contentbrandList,p='l2r'===s;
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[t?(0,_r(d[26]).jsxs)(u.View,{
style:{
position:'relative'
}
,children:[7===o&&p?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,7===o&&n.centralItem(c,e)]
}
):null,i&&!n.isPadHorizontal()?(0,_r(d[26]).jsxs)(u.View,{
style:{
position:'relative'
}
,children:[6===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,7===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,8===o&&p&&n.isPadHorizontal()?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,6===o&&n.isPad()&&p&&n.centralItem(c,e),8===o&&p&&n.centralItem(c,e),6===o&&!n.isPad()&&!p&&n.centralItem(c,e)]
}
):null,i&&n.isPadHorizontal()?(0,_r(d[26]).jsxs)(u.View,{
style:{
position:'relative'
}
,children:[6===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,7===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,8===o&&p&&n.isPadHorizontal()?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,6===o&&p&&n.centralItem(c,e)]
}
):null,r?(0,_r(d[26]).jsxs)(u.View,{
style:{
position:'relative'
}
,children:[4===o&&n.isPadHorizontal()?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,5===o&&n.isPadHorizontal()?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,6===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,7===o?(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
):null,8!==o||n.isPadHorizontal()?null:(0,_r(d[26]).jsx)(u.View,{
style:{
height:a
}

}
),6===o&&!p&&!n.isPadHorizontal()&&n.centralItem(c,e),4===o&&!p&&n.isPadHorizontal()&&n.centralItem(c,e)]
}
):null]
}
)
}
,n.brandTextOnclick=function(e){
// 变量
var i: any = n.state.brandFilter;
i.includes(e.brandCode)?s.default.remove(i,(function(t){
return t===e.brandCode
}
)):i.push(e.brandCode),n.lister5=setTimeout((function(){
n.scrollListTop()
}
),500);
// 变量
var r: any = [];
(r=Array.isArray(n.state.keywordText)?[].concat((0,t.default)(n.state.keywordText),[e.brandName]):[n.state.keywordText,e.brandName]).length>2&&(r=s.default.filter(r,(function(e,t){
return 1!==t
}
))),n.setState({
keywordText:r,pageNum:'1',brandFilter:i
}
,(function(){
n.pageNum=1,n._getQueryPrd(!0)
}
));
var a={
searchWord:e.brandName,brandName:e.brandName,brandCode:e.brandCode
}
;
n.props.clickItem(a,'brand'),_r(d[23]).EventTracking.execReportData('',!0)
}
,n.renderProduct=function(e,t,i){
var r=n.colNum(),a=n.isPadHorizontal()?16:12,o=n.marginValue(),l=o.colGutter,s=o.paddingValue,c=(n.boxWidth()-(r-1)*a)/r,p=Array(r).fill('').map((function(e,r){
return(0,_r(d[26]).jsx)(u.View,{
style:[i.prdItemSt,{
marginLeft:0===r?0:l,marginTop:0===t?-4:0
}
],children:t+r<n.state.resultList.length&&n.renderProductItem(n.state.resultList[t+r],t+r,i,c)
}
)
}
));
return t%r==0?(0,_r(d[26]).jsx)(u.View,{
style:[i.productItemRow,{
marginTop:a,paddingHorizontal:s
}
],children:p
}
):null
}
,n.onClickPrd=function(e,t,i){
var r,a,o,l;
if(n.canClick){
n.canClick=!1,n.canClickTimer=setTimeout((function(){
n.canClick=!0
}
),500);
var s={
searchWord:n.state.keyword,searchSort:n.searchSorts()||'relevance',productId:null==(r=e.productId)?void 0:r.toString(),productname:null==(a=e.prdName)?void 0:a.toString(),SKUCode:null==(o=e.skuCode)?void 0:o.toString(),location:null==(l=i+1)?void 0:l.toString(),attributeid:n.attributeid||[],attributename:n.attributename||[],sid:n.state.sid||'',ruleId:n.state.ruleId||'',click:'1',type:'1'
}
;
if(n.props.clickItem(s,'productTap'),_r(d[23]).EventTracking.execReportData('',!0),!_r(d[23]).PlatformUtils.isAndroid()){
_r(d[23]).CommonUtils.delayGotoPage((function(){
var t=e||{

}
,i=t.productId,r=t.skuCode,a=t.productPageType,o=void 0===a?'':a;
_r(d[23]).RouterUtils.gotoProductDetailAllByType(String(o),String(i),String(r))
}
))
}

}

}
,n.intoShop=function(e){
if(n.canClick){
n.canClick=!1,n.canClickTimer=setTimeout((function(){
n.canClick=!0
}
),500);
// 变量
var t: any = _r(d[23]).PlatformUtils.isApp()?e.shopMobileUrl:e.shopH5Url;
if(!t)return!1;
_r(d[23]).PlatformUtils.isMp()&&(t='packageRnShop/index&'+t.substring(t.indexOf('carrierCode')));
var i={
URL:t,click:'1'
}
;
n.props.clickItem(i,'shopName'),_r(d[23]).EventTracking.execReportData('',!0);
_r(d[23]).CommonUtils.delayGotoPage((function(){
_r(d[23]).RouterUtils.gotoPage(t)
}
))
}

}
,n.receiveRef=function(e,t,i,r){
// 变量
var a: any = !(arguments.length>4&&void 0!==arguments[4])||arguments[4];
e&&(e.exposeObj=t,e.exposeObj.type=i,e.exposeObj.attributeid=n.attributeid||[],e.exposeObj.attributename=n.attributename||[],e.exposeObj.index=r+1||'',e.exposeObj.searchWord=n.state.keyword,e.exposeObj.searchSort=n.searchSorts()||'relevance',e.exposeObj.ruleId=n.state.ruleId,e.exposeObj.onPrd=a,n.addRefView(e,t))
}
,n.searchSorts=function(){
// 变量
var e: any = n.state,t=e.searchSortField,i=e.searchSortType;
return 0===t?'relevance':2===t?'newes':3===t?'review':1===t?'desc'===i?'pricedown':'priceup':void 0
}
,n.marginValue=function(){
// 变量
var e: any = 8,t=16,i=40,r=0;
return n.isPadHorizontal()?(e=16,t=32,i=80,r=-8):n.isPad()&&!n.isPadHorizontal()?(e=12,t=24,i=60,r=-4):(e=8,t=16,i=40,r=0),{
colGutter:e,paddingValue:t,slideBtnValue:i,marginTop:r
}

}
,n.colNum=function(){
return'l2r'===n.state.layoutType?n.isPad()?n.isPadHorizontal()?3:2:1:'t2b'===n.state.layoutType?n.isPad()?n.isPadHorizontal()?4:3:2:void 0
}
,n.isPad=function(){
// 变量
var e: any = n.width;
return _r(d[23]).ScreenUtils.isMedium(e)||_r(d[23]).ScreenUtils.isLarge(e)&&e<_r(d[23]).variables.safety_area
}
,n.boxWidth=function(){
// 变量
var e: any = 2*n.marginValue().paddingValue;
return n.width-e
}
,n.renderRecommemdlist=function(e){
return _r(d[23]).RecordUtils.logger('SearchResult','renderRecommemdlist'),_r(d[23]).PlatformUtils.isApp()?(0,_r(d[26]).jsx)(_r(d[28]).GestureHandlerRootView,{
children:n.renderRecList(e)
}
):(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:n.renderRecList(e)
}
)
}
,n.renderRecList=function(e){
var t;
n.handleWaterFallStyle();
// 变量
var i: any = n.isPadHorizontal()?4:3,r=n.isPad()?i:2,a=n.marginValue().colGutter,o=n.marginValue(),l=o.paddingValue,s=o.marginTop,c=n.width-2*l;
n.getSingleWidth(c,r,a),_r(d[23]).PlatformUtils.isIOS()&&n.state.productList.forEach((function(e,t){
n.state.productList[t].realIndex=t
}
)),n.calculateHeightObj={
itemWidth:n.state.singleWidthR,screenWidth:n.width,configData:{
promotionShow:!1,prodSellPoint:!0,promotionTagShow:!0,commentCountShow:!0,isProductComp:!0,isNewPrmoSwitchOn:!0,originPriceShow:!0,prodTagShow:!0,prdTagShowTop:!0
}
,isPadHorizontal:n.isPadHorizontal(),isSmall:_r(d[23]).ScreenUtils.isSmall(n.width)
}
;
return n.state.productList.length>0?(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(u.Text,{
style:[e.recommendTitle,{
paddingHorizontal:l
}
],testID:'searchresult-youlike-title',nativeID:'searchresult-youlike-title',children:n.state.isRecommended?(0,_r(d[23]).t)('maybe_like'):(0,_r(d[23]).t)('good_selection')
}
),(0,_r(d[26]).jsx)(u.View,{
style:[e.productList,{
paddingHorizontal:l,marginTop:s
}
],children:_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(u.FlatList,{
style:{
flex:1
}
,numColumns:r,data:n.state.productList,renderItem:function(e){
// 变量
var t: any = e.item,i=e.index;
return t.isEmpty?(0,_r(d[26]).jsx)(u.View,{

}
):n.renderSinglePrd(t,i,r,a)
}
,keyExtractor:n.keyExtractorFn,initialNumToRender:a,ListFooterComponent:n.renderFooter(e),scrollEnabled:!1,showsVerticalScrollIndicator:!1,viewabilityConfig:E,bounces:!1,removeClippedSubviews:!0,scrollEventThrottle:5,maxToRenderPerBatch:a
}
):(0,_r(d[26]).jsx)(_r(d[27]).RecyclerWaterfallList,{
style:{
height:'100%'
}
,columnCount:r,gutter:a,pageGutter:0,layoutProvider:n.layoutProvider,dataProvider:n.state.dataProvider.cloneWithRows(n.state.productList.slice(0,(null==(t=n.state.productList)?void 0:t.length)||18)),scrollViewProps:{
removeClippedSubviews:!_r(d[23]).PlatformUtils.isIOS(),showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,overScrollMode:'never',bounces:!_r(d[23]).PlatformUtils.isHarmony(),scrollEnabled:!_r(d[23]).PlatformUtils.isHarmony()
}
,rowRenderer:function(e,t,i){
return n.renderSinglePrd(t,_r(d[23]).PlatformUtils.isIOS()?t.realIndex:i)
}
,renderFooter:function(){
return n.renderFooter(e)
}

}
)
}
)]
}
):null
}
,n.renderFooter=function(e){
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(_r(d[27]).LoadingView,{
showLoading:n.showLoadingR,position:n.state.loadingPostion,loadState:n.loadStateR,errorCallback:n._getRecommend,height:_r(d[23]).CommonUtils.getScaleSize(19,2)+37,iconSize:24
}
),(0,_r(d[26]).jsx)(u.View,{
style:{
height:20
}

}
)]
}
)
}
,n._loadMoreR=s.default.debounce((function(){
n.loadMoreR&&(n.loadMoreR=!1,n._getRecommend())
}
),200),n.receiveRefAct=function(e,t,i,r){
// 变量
var a: any = arguments.length>4&&void 0!==arguments[4]&&arguments[4];
e&&(e.exposeObj=t,e.exposeObj.type=i,e.exposeObj.attributeid=n.attributeid||[],e.exposeObj.attributename=n.attributename||[],e.exposeObj.index=r+1||'',e.exposeObj.searchSort=n.searchSorts()||'relevance',e.exposeObj.searchWord=n.state.keyword,e.exposeObj.ruleId=n.state.ruleId,e.exposeObj.onPrd=a,e.exposeObj.searchPageWaterFol=!0,n.addRefView(e,t))
}
,n.renderSinglePrd=function(e,t,i,r){
// 变量
var a: any = n.state.singleWidthR,o=i&&(t+1)%i==0,l=void 0!==e.originIndex?e.originIndex:t;
e.itemIndex=String(l);
// 变量
var s: any = '';
s=_r(d[23]).PlatformUtils.isApp()&&e.photoNameMainWebp?e.photoPathMainWebp:e.photoPath,e.promotionRules=e.promoLabels,e.prdName=e.briefName,e.originPrice=e.price,e.imgUrl=s,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.reviewCount=e.rateCount,e.goodReviewRate=e.goodRate;
// 变量
var c: any = (0,_r(d[23]).getBestFitImgUrl)(a,a,e.imgUrl,!0);
e.imgUrl=c,e.keyName=e.briefName+t;
var p=n.getPrdInfo(e),h=_r(d[23]).PlatformUtils.isMp()?'TwoColumnLayout':'StaggeredLayout',f=(0,_r(d[26]).jsx)(_r(d[27]).ProductItem,{
receiveRef:function(i){
return n.receiveRefAct(i,e,'product',t,!1)
}
,data:e,config:{
bgColor:!0,prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,mutiTagTagShow:!0,promotionShow:!1,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:2,layoutType:h,promotionTextLineNum:2,promTagPriceTop:!0,imgFilled:!0,prdNameBtTextHAuto:!0,prdTagShowTop:!0
}
,iWidth:a,onClick:function(){
return n.onClickSinglePrd(e,l,t)
}
,structure:'t2b',type:'base',pageType:'searchResult',customPrdStyles:n.customStyle,vproLogoUrl:n.state.vproLogo,isWrappedWithGesture:_r(d[23]).PlatformUtils.isApp()
}
,e.productId);
return _r(d[23]).PlatformUtils.isApp()?(0,_r(d[26]).jsx)(_r(d[28]).TapGestureHandler,{
prdUrl:p,numberOfTaps:1,maxDist:20,children:f
}
):(0,_r(d[26]).jsx)(u.View,{
style:!o&&{
marginRight:r
}
,children:f
}
)
}
,n.onClickSinglePrd=function(e,t,i){
var r,a,o,l;
if(n.canClick){
n.canClick=!1,n.canClickTimer=setTimeout((function(){
n.canClick=!0
}
),500);
var s=n.state,c=s.keyword,u=s.sid,p=s.ruleId,h={
searchWord:c,searchSort:n.searchSorts()||'relevance',productId:null==(r=e.productId)?void 0:r.toString(),productname:null==(a=e.prdName)?void 0:a.toString(),SKUCode:null==(o=e.skuCode)?void 0:o.toString(),location:null==(l=i+1)?void 0:l.toString(),attributeid:n.attributeid||[],attributename:n.attributename||[],sid:u||'',ruleId:p||'',click:'1',type:'2'
}
;
if(n.props.clickItem(h,'productTap'),_r(d[23]).EventTracking.execReportData('',!0),!_r(d[23]).PlatformUtils.isApp()||_r(d[23]).PlatformUtils.isHarmony()){
_r(d[23]).CommonUtils.delayGotoPage((function(){
var t=e||{

}
,i=t.productId,r=t.skuCode,a=t.productPageType,o=void 0===a?'':a;
_r(d[23]).RouterUtils.gotoProductDetailAllByType(String(o),String(i),String(r))
}
))
}

}

}
,n.getSingleWidth=function(e,t,i){
// 变量
var r: any = (e-(t-1)*i)/t;
n.setState({
singleWidthR:r
}
)
}
,n.loadPage=function(e){
return n.isContentSearchResult?n.state.loadingContent?_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(_r(d[27]).PlaceHolder,{

}
):n.loadingCon(e):null:n.loading?_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(_r(d[27]).PlaceHolder,{

}
):n.loadingCon(e):null
}
,n.loadingCon=function(e){
// 变量
var t: any = n.state.screenHeight;
return(0,_r(d[26]).jsx)(u.View,{
style:[e.loadPage,{
height:(t||n.props.height)-(_r(d[23]).CommonUtils.getScaleSize(22,_r(d[23]).FONT_MUTIPLE.FONT_LEVEL_THREE)+34)
}
],children:(0,_r(d[26]).jsxs)(u.View,{
style:e.loadView,children:[_r(d[23]).PlatformUtils.isIOS()?(0,_r(d[26]).jsx)(_r(d[27]).FastImageView,{
localSource:_r(d[27]).ImageArray.loading,imgStyle:e.loadPageImg
}
):(0,_r(d[26]).jsx)(u.Image,{
style:[e.loadPageImg],source:_r(d[27]).ImageArray.loading
}
),(0,_r(d[26]).jsx)(u.Text,{
style:[e.loadPageText],children:(0,_r(d[23]).t)('loading')
}
)]
}
)
}
)
}
,n.showAllTap=s.default.debounce((function(t,i){
if('end'===n.wrapScrollStatus||_r(d[23]).PlatformUtils.isAli()){
var r=Object.assign({

}
,n.state.showAll,(0,e.default)({

}
,i,t));
n.setState({
showAll:r
}
)
}

}
),200),n.resetListTransform=function(){

}
,n.singleTap=function(e,t){
n.resetListTransform(),n.itemlist=[],t===n.state.categoryIndex?n.setState({
categoryIndex:-1,pivotalAttrSelect:{

}
,specAttrSelect:{

}

}
,(function(){
n._changesTap({
categoryId:void 0,index:-1
}
),u.DeviceEventEmitter.emit('changeFilters',{
categoryId:e.categoryId,index:-1
}
)
}
)):n.setState({
pivotalAttrSelect:{

}
,specAttrSelect:{

}
,categoryIndex:t
}
,(function(){
n._changesTap({
categoryId:e.categoryId,index:t
}
),u.DeviceEventEmitter.emit('changeFilters',{
categoryId:e.categoryId,index:t
}
)
}
))
}
,n.multipleTap=function(e,t){
var i,r=n.state.labelContentSelect;
n.itemlist=[],r[e.fieldName]||(r[e.fieldName]=[]),null!=(i=r[e.fieldName])&&i.includes(t.key)?s.default.remove(r[e.fieldName],(function(e){
return e===t.key
}
)):r[e.fieldName].push(t.key),n.resetListTransform(),n.pageNum=1,n.setState({
labelContentSelect:r,boFilter:!0
}
,(function(){
n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.multipleTapNew=function(e,t,i){
var r,a,o=n.state,l=o.categoryId,c=o.categoryIndex,p=n.state,h=p.categoryFilterList,f=p.pivotalAttrSelect,y=p.specAttrSelect;
n.itemlist=[],!l&&(null==h?void 0:h.length)>0&&(c=0,l=h[0].categoryId,u.DeviceEventEmitter.emit('changeFilters',{
index:0
}
));
var v='pivotal'!==i?y:f;
v[e.attrId]||(v[e.attrId]=[]),null!=(r=v[e.attrId])&&r.includes(t.id)?s.default.remove(v[e.attrId],(function(e){
return e===t.id
}
)):v[e.attrId].push(t.id),n.resetListTransform(),n.pageNum=1,n.setState({
pivotalAttrSelect:'pivotal'===i?v:f,specAttrSelect:'spec'===i?v:y,boFilter:!0,categoryId:l,categoryIndex:c,labelSelectSize:null==(a=v[e.attrId])?void 0:a.length
}
,(function(){
n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.onFocusValue=function(t){
n.setState((0,e.default)((0,e.default)({

}
,t+'Focus',!0),t+'Plc',!1))
}
,n.renderOffers=function(e,t,i){
var r,a=n.state,o=a.showAll,l=a.offersData,c=a.labelContentSelect,p=n.isPad()?48:32;
return s.default.isEmpty(l)?(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{

}
):(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
style:e.cateFlexRow,children:[(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:2,ellipsizeMode:"tail",style:[e.cateTitle,{
width:n.calWidth()-89-p
}
],children:l.displayName
}
),s.default.size(null==l?void 0:l.itemEntryList)>4?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:.3,style:[e.searchImgBox,e.cateFlexRow,e.allCenter],onPressOut:function(){
n.showAllTap(!o.offers,'offers')
}
,children:n.showAllTapView(e,o.offers,t)
}
):null]
}
,l.fieldName),(0,_r(d[26]).jsx)(u.View,{
style:[e.cateList,o.offers?null:e.optionMaxHeight],children:null==l||null==(r=l.itemEntryList)?void 0:r.map((function(t){
var r,a;
return(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
n.multipleTap(l,t)
}
,style:[null!=c&&null!=(r=c.offers)&&r.includes(t.key)?e.slideCateTap:e.slideCateTaped,{
width:i
}
],children:(0,_r(d[26]).jsx)(u.Text,{
ellipsizeMode:"tail",style:[null!=c&&null!=(a=c.offers)&&a.includes(t.key)?e.slideTextCated:e.slideTextCate,_r(d[23]).PlatformUtils.isMp()&&e.slideTextMp],numberOfLines:1,children:t.value
}
)
}
,t.key)
}
))
}
)]
}
)
}
,n.showAllTapView=function(e,t,i){
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:e.cateTitleAllApk,children:(0,_r(d[23]).t)('all')
}
),(0,_r(d[26]).jsx)(u.View,{
style:[{
marginTop:0,marginRight:-4
}
,_r(d[23]).PlatformUtils.isMp()&&e.cateTitleAllView],children:_r(d[23]).PlatformUtils.isMp()?(0,_r(d[26]).jsx)(_r(d[27]).FastImageView,{
imgStyle:e.cateTitleAllImg,imgUri:t?p.default.searchArrowUp:p.default.searchArrowDown
}
):(0,_r(d[26]).jsx)(_r(d[27]).SvgIcon,{
width:"24",height:"24",normalCol:i.C24.color+i.opacityMap[i.C24.opacity],iconName:t?'ic_public_arrow_up':'ic_public_arrow_down'
}
)
}
)]
}
)
}
,n.renderCategory=function(e,t,i){
// 变量
var r: any = n.state,a=r.showAll,o=r.categoryIndex,l=r.categoryFilterList;
return s.default.size(l)>0?(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
style:e.cateFlexRow,children:[(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:e.cateTitle,children:(0,_r(d[23]).t)('category_single_choice')
}
),s.default.size(l)>4?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:.3,style:[e.searchImgBox,e.cateFlexRow,e.allCenter],onPressOut:function(){
n.showAllTap(!a.category,'category')
}
,children:n.showAllTapView(e,a.category,t)
}
):null]
}
),(0,_r(d[26]).jsx)(u.View,{
style:[e.cateList,a.category?null:e.optionMaxHeight],children:null==l?void 0:l.map((function(t,r){
return(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
n.singleTap(t,r)
}
,style:[r===o?e.slideCateTap:e.slideCateTaped,{
width:i
}
],children:(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[r===o?e.slideTextCated:e.slideTextCate,_r(d[23]).PlatformUtils.isMp()&&e.slideTextMp],children:t.categoryName
}
)
}
,r)
}
))
}
),n.renderCategoryFilterList(e,i,t)]
}
):null
}
,n.renderCategoryFilterList=function(e,t,i){
n.categoryFilterIndex=-1;
// 变量
var r: any = n.state.categoryFilterList;
return s.default.size(r)<=0?null:(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:n.renderCategoryFilterListChild(e,i,t,'spec')
}
)
}
,n.renderCategoryFilterListChild=function(e,t,i,r){
// 变量
var a: any = n.state.categoryId,o=n.state,l=o.showAll,c=o.categoryFilterList,p=o.pivotalAttrSelect,h=o.specAttrSelect,f='pivotal'===r?p:h;
a=a||c[0].categoryId;
var y=s.default.find(c,(function(e){
return e.categoryId===a
}
))||{

}
;
return s.default.size(null==y?void 0:y[r+"AttrList"])>0?null==y?void 0:y[r+"AttrList"].map((function(a){
if(s.default.size(null==a?void 0:a.attrEnumList)>1){
var o;
n.categoryFilterIndex++;
// 变量
var c: any = n.isPad()?48:32,p=n.categoryFilterIndex>=3?e.optionHideHeight:e.optionMaxHeight;
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
style:e.cateFlexRow,children:[(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:2,ellipsizeMode:"tail",style:[e.cateTitleC,{
width:n.calWidth()-89-c
}
],children:a.attrName
}
),s.default.size(null==a?void 0:a.attrEnumList)>4||n.categoryFilterIndex>=3?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:.3,style:[e.searchImgBox,e.cateFlexRow,e.allCenter],onPress:function(){
_r(d[23]).PlatformUtils.isMp()&&n.showAllTap(!l["categoryFilter_"+a.attrId],"categoryFilter_"+a.attrId)
}
,onPressOut:function(){
n.showAllTap(!l["categoryFilter_"+a.attrId],"categoryFilter_"+a.attrId)
}
,children:n.showAllTapView(e,l["categoryFilter_"+a.attrId],t)
}
):null]
}
,a.attrId),(0,_r(d[26]).jsx)(u.View,{
style:[e.cateList,l["categoryFilter_"+a.attrId]?null:p],children:null==a||null==(o=a.attrEnumList)?void 0:o.map((function(t){
return n.renderItem(a,t,r,f,e,i)
}
))
}
)]
}
)
}
return null
}
)):null
}
,n.renderPromofilterList=function(e,t,i){
// 变量
var r: any = n.state,a=r.showAllPromo,o=r.promofilterList,l=r.promoFilter;
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(u.View,{
style:[e.cateFlexRow],children:s.default.size(o)>0?(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsx)(u.Text,{
ellipsizeMode:"tail",style:e.cateTitle,numberOfLines:1,children:"\u6d3b\u52a8\u7cbe\u9009"
}
),s.default.size(o)>4?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
style:[e.searchImgBox,e.cateFlexRow,e.allCenter],activeOpacity:.3,onPress:function(){
n.showAllPromoTap(!a)
}
,children:n.showAllTapView(e,a,t)
}
):null]
}
):null
}
),(0,_r(d[26]).jsx)(u.View,{
style:[e.cateList,a?null:e.optionMaxHeight],children:null==o?void 0:o.map((function(t,r){
return t.promoLabelCode?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
onPress:function(){
n.clickPromoLabel(t)
}
,activeOpacity:1,style:[l.includes(t.promoLabelCode)?e.slideCateTap:e.slideCateTaped,{
width:i
}
],children:(0,_r(d[26]).jsx)(u.Text,{
ellipsizeMode:"tail",numberOfLines:1,style:[l.includes(t.promoLabelCode)?e.slideTextCated:e.slideTextCate,_r(d[23]).PlatformUtils.isMp()&&e.slideTextMp],children:t.promoLabelName
}
)
}
,t.promoLabelCode+"_"+r.toString()+"_button"):null
}
))
}
)]
}
)
}
,n.renderBrandList=function(e,t,i){
// 变量
var r: any = n.state,a=r.brandFilter,o=r.brandShowAll,l=r.brandfilterList;
return s.default.size(l)>0?(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
style:[e.cateFlexRow],children:[(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:e.cateTitle,children:"\u54c1\u724c"
}
),l.length>4?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
style:[e.searchImgBox,e.cateFlexRow,e.allCenter],onPress:function(){
n.showAllBrandTap(!o)
}
,activeOpacity:.3,children:n.showAllTapView(e,o,t)
}
):null]
}
),(0,_r(d[26]).jsx)(u.View,{
style:[e.cateList,o?null:e.optionMaxHeight],children:null==l?void 0:l.map((function(t,r){
return t.brandCode?(0,_r(d[26]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
n.clickBarndLabel(t)
}
,style:[a.includes(t.brandCode)?e.slideCateTap:e.slideCateTaped,{
width:i
}
],children:(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[a.includes(t.brandCode)?e.slideTextCated:e.slideTextCate,_r(d[23]).PlatformUtils.isMp()&&e.slideTextMp],children:t.brandName
}
)
}
,t.brandCode+"_"+r.toString()+"_button"):null
}
))
}
)]
}
):null
}
,n.showAllBrandTap=function(e){
n.setState({
brandShowAll:e
}
)
}
,n.clickBarndLabel=function(e){
n.resetListTransform();
// 变量
var t: any = n.state.brandFilter;
n.itemlist=[],null!=t&&t.includes(e.brandCode)?s.default.remove(t,(function(t){
return t===e.brandCode
}
)):null==t||t.push(e.brandCode),n.setState({
brandFilter:t
}
,(function(){
n.pageNum=1,n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.showAllPromoTap=function(e){
n.setState({
showAllPromo:e
}
)
}
,n.clickPromoLabel=function(e){
n.resetListTransform();
// 变量
var t: any = n.state.promoFilter;
n.itemlist=[],t.includes(e.promoLabelCode)?s.default.remove(t,(function(t){
return t===e.promoLabelCode
}
)):t.push(e.promoLabelCode),n.setState({
promoFilter:t
}
,(function(){
n.pageNum=1,n.batchReportFilter(),n.getQueryPrdFilter()
}
))
}
,n.changeValue=function(t,i){
// 变量
var r: any = ''===i.replace(/\D/g,'')?'':parseInt(i,10);
n.setState((0,e.default)({

}
,t,String(r)))
}
,n.onBlurValue=function(t,i){
// 变量
var r: any = ''===i||void 0===i?'':parseInt(i,10),a=n.state,o=a.mininumPrice,l=a.maxinumPrice;
if(''===r){
if('maxinumPrice'===t){
if(''!==o&&''!==l&&l<parseInt(o,10)){
// 变量
var s: any = [l,o];
o=s[0],l=s[1]
}
''===l?n.setState((0,e.default)({

}
,t+'Plc',!0)):n.setState((0,e.default)({

}
,t+'Plc',!1))
}
else if('mininumPrice'===t){
if(''!==l&&''!==o&&o>parseInt(l,10)){
// 变量
var c: any = [o,l];
l=c[0],o=c[1]
}
n.setState((0,e.default)({

}
,t+'Plc',!(''!==o)))
}

}
else'mininumPrice'===t?(''!==l&&r>parseInt(l,10)&&(o=l,l=null==r?void 0:r.toString()),''!==o?n.setState((0,e.default)({

}
,t+'Plc',!1)):n.setState((0,e.default)({

}
,t+'Plc',!0))):'maxinumPrice'===t&&(''!==o&&r<parseInt(o,10)&&(l=o,o=null==r?void 0:r.toString()),n.setState((0,e.default)({

}
,t+'Plc',!(''!==l))));
n.setState((0,e.default)((0,e.default)({
mininumPrice:String(o),maxinumPrice:String(l)
}
,t+'Focus',!1),"boFilter",!0),(function(){
n.resetListTransform(),n.pageNum=1,n.getQueryPrdFilter()
}
))
}
,n.calculeTotalLayout=function(e){
// 变量
var t: any = n.state.fontSize,i=n.state.totalCount,r=void 0===i?0:i,a=e.nativeEvent.layout.width;
e.nativeEvent.layout.width>0&&0!==a&&9*r.toString().length-a>5&&(t>4&&(t-=2),n.setState({
fontSize:t
}
))
}
,n.getPrice=function(e){
// 变量
var t: any = n.state.totalCount,i=void 0===t?0:t,r=n.setCountFont(i),a=(0,_r(d[23]).t)('unit_piece').replace(' ','').split('%d');
return(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
style:e.confirmLeft,children:[(0,_r(d[26]).jsx)(u.Text,{
style:e.confirmText,numberOfLines:1,ellipsizeMode:'tail',children:(0,_r(d[23]).t)('confirm')
}
),(0,_r(d[26]).jsxs)(u.Text,{
style:e["T"+r],numberOfLines:1,ellipsizeMode:'tail',children:["(",a[0]]
}
)]
}
),(0,_r(d[26]).jsx)(u.View,{
style:e.confirmPrice,children:(0,_r(d[26]).jsx)(u.Text,{
style:e["T"+r],numberOfLines:1,ellipsizeMode:'tail',children:String(i)
}
)
}
),(0,_r(d[26]).jsx)(u.View,{
style:e.confirmRight,children:(0,_r(d[26]).jsxs)(u.Text,{
style:e["T"+r],numberOfLines:1,ellipsizeMode:'tail',children:[a[1],")"]
}
)
}
)]
}
)
}
,n.resetTap=function(){
n.resetListTransform(),n.pageNum=1,n.pageNumR=1,n.attributeid=[],n.attributename=[],u.DeviceEventEmitter.emit('changeFilters',{
index:-1
}
),n.setState({
searchSortField:0,searchSortType:'desc',categoryId:void 0,categoryIndex:-1,mininumPrice:'',maxinumPrice:'',labelContentSelect:{

}
,promoFilter:[],brandFilter:[],selectItem:0,pivotalAttrSelect:{

}
,specAttrSelect:{

}
,showAll:{
offers:!1,category:!1
}
,productList:[],selectCardIndex:-1,cardId:''
}
,(function(){
n._getQueryPrd()
}
))
}
,n.closeFilter=s.default.debounce((function(){
n.slideShow=!1,u.DeviceEventEmitter.emit('scrollEnable',!n.slideShow),n.slideShowTap(!1)
}
),200),n.deleClick=function(e){
n.setState({
brandFilter:[],keywordText:e
}
)
}
,n.onCapsuleRef=function(e){
n.searchCapsuleView=e
}
,n.onCapsuleModaLRef=function(e){
n.searchCapsuleModalView=e
}
,n.updateCapsuleData=function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2?arguments[2]:void 0,r=n.state,a=r.capsuleModalTop,o=r.pivotalAttrSelect,l=r.specAttrSelect,s=r.currentCapsuleIndex,c=r.brandFilter,u=r.categoryId,p=r.categoryIndex,h=r.categoryFilterList,f=r.isCapsuleModalHide,y=r.productCapsuleHeight,v=0===e.categoryIndex?h[0].categoryId:u;
n.setState({
currentCapsuleIndex:isNaN(e.currentCapsuleIndex)?s:e.currentCapsuleIndex,capsuleModalTop:isNaN(e.capsuleModalTop)?a:e.capsuleModalTop,pivotalAttrSelect:void 0!==e.pivotalAttrSelect?e.pivotalAttrSelect:o,specAttrSelect:void 0!==e.specAttrSelect?e.specAttrSelect:l,brandFilter:void 0!==e.brandFilter?e.brandFilter:c,categoryId:-1===e.categoryIndex?void 0:v,categoryIndex:isNaN(e.categoryIndex)?p:e.categoryIndex,isCapsuleModalHide:'boolean'==typeof e.isCapsuleModalHide?e.isCapsuleModalHide:f,productCapsuleHeight:isNaN(e.productCapsuleHeight)?y:e.productCapsuleHeight
}
,(function(){
i&&i(),t&&(n.pageNum=1,n.getQueryPrdFilter())
}
))
}
,n.getCapsuleNum=function(){
var e,t,i=n.state.categoryIndex,r=n.state,a=r.brandfilterList,o=r.categoryFilterList,l=0;
(s.default.size(a)>1&&l++,-1===i&&(i=0),s.default.size(o)>0)&&(null==(e=o[i])||null==(t=e.specAttrList)||t.forEach((function(e){
s.default.size(null==e?void 0:e.attrEnumList)>1&&l++
}
)));
return l>5?5:l
}
,n.initwidth=function(e){
n.width!==e&&n.searchCapsuleView&&n.searchCapsuleView.changeCapsuleModalTop(n.capsuleType)
}
,n.clickSureBtn=function(){
var e,t;
n.pageNum=1;
// 变量
var i: any = n.state,r=i.maxinumPrice,a=i.mininumPrice;
if(''!==a&&''!==r&&r<parseInt(a,10)){
// 变量
var o: any = [r,a];
a=o[0],r=o[1]
}
// 变量
var l: any = ''===a,s=''===r;
n.setState({
mininumPrice:null==(e=a)?void 0:e.toString(),maxinumPrice:null==(t=r)?void 0:t.toString(),mininumPriceFocus:l,maxinumPriceFocus:s,boFilter:!0
}
,(function(){
n.resetListTransform(),n.getQueryPrdFilter(),n.closeFilter()
}
))
}
,n.contentSearchResultPage=function(){
// 变量
var e: any = n.state,t=e.keyword,i=e.discoveryContentList,r=e.isGetRecommendContent,a=e.totalCountContent,o=e.iosStatusBarHeight;
return(0,_r(d[26]).jsx)(u.View,{
style:{
marginTop:-12
}
,children:(0,_r(d[26]).jsx)(w.default,{
keyword:t,discoveryContentList:i,isGetRecommendContent:r,totalCount:a,isPad:n.isPad(),Source:n.source,iosStatusBarHeight:_r(d[23]).PlatformUtils.isIOS()?o:0,mSafeAreaLayoutGuideBottom:_r(d[23]).PlatformUtils.isHarmony()?n.props.mSafeAreaLayoutGuideBottom:0
}
)
}
)
}
;
// 变量
var k: any = n.getInitParams(),j=k.keyword,N=k.keywordText,A=k.configInfo,U=k.isLogin;
return n.state={
labelSelectSize:0,ativeContentList:[],isGetActiveContent:!1,loadingPostion:'bottom',layoutType:b,searchFlag:'0',searchSortField:0,searchSortType:'desc',sid:void 0,ruleId:'',screenParams:void 0,sortFieldList:[],resultList:[],productList:[],category:'',singleWidth:0,singleWidthR:160,noData:!1,isWaterfall:'StaggeredLayout',titleBarHeight:new u.Animated.Value(0),searchSortFieldSlide:0,searchSortTypeSlide:'1',categoryIndex:-1,showAll:{
offers:!1,category:!1
}
,translateX:new u.Animated.Value(0),mininumPrice:'',maxinumPrice:'',mininumPriceFocus:!1,maxinumPriceFocus:!1,labelContentSelect:{

}
,labelContentList:[],boFilter:!1,sTop:0,keyword:j,configInfo:A,showProduct:!0,isLogin:U,keywordText:N,errorEmpty:!1,fontSize:10,maxinumPricePlc:!0,mininumPricePlc:!0,shopData:[],shopCardHeight:56,proLoadFinish:!1,scrollY:new u.Animated.Value(0),selectItem:0,screenHeight:_r(d[23]).PlatformUtils.isHarmony()?_r(d[23]).CommonUtils.getWindowSize(_r(d[23]).PAGE_TYPE.search).screenHeight:n.props.height,promofilterList:[],promoFilter:[],showAllPromo:!1,brandShowAll:!1,brandFilter:[],brandfilterList:[],contentbrandList:[],discoveryContentList:[],isGetRecommendContent:!1,totalCountContent:0,loadingContent:!0,iosStatusBarHeight:47,totalCount:0,categoryId:void 0,categoryFilterList:[],pivotalAttrSelect:{

}
,specAttrSelect:{

}
,offersData:{

}
,currentCapsuleIndex:-1,capsuleModalTop:0,isScrollWeb:!0,scrollEnable:!0,isCapsuleModalHide:!1,productCapsuleHeight:0,cardData:[],selectCardIndex:-1,cardId:'',vproLogo:'',isRecommended:!1,dataProvider:!_r(d[23]).PlatformUtils.isMp()&&new(_r(d[27]).DataProvider)((function(e,t){
return e!==t
}
)).cloneWithRows([])
}
,_r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!0),n.e2eIdInfo=_r(d[23]).E2EIdStore.pageTypeE2EIdSpanId[_r(d[23]).E2EIdStore.curPageType],n.isPadApk=_r(d[23]).ScreenStore.isPadApk,n.prodSearchScope=_r(d[23]).SearchResultStore.prodSearchScope,n.searchScence=_r(d[23]).SearchResultStore.searchScence,n.handleWaterFallStyle(),n.setBarHeight(),n.layoutProvider=!_r(d[23]).PlatformUtils.isMp()&&new(_r(d[27]).LayoutProvider)((function(){
return'WaterFall'
}
),(function(e,t,i){
// 变量
var r: any = n.state.productList[i];
t.height=(0,_r(d[27]).itemHeight)(r,i,n.calculateHeightObj),t.width=n.state.singleWidthR
}
)),n
}
return(0,n.default)(f,c),(0,a.default)(f,[{
key:"appListener",value:function(){
// 变量
var e: any = this;
_r(d[23]).PlatformUtils.isApp()&&(this.listerBack=u.BackHandler.addEventListener('hardwareBackPress',this.onPressBack),this.lister3=u.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var i,r,a=t.service,o=t.action;
'screen'===a&&'currentHeight'===o&&e.state.screenHeight!==(null==t||null==(i=t.param)?void 0:i.height)&&e.setState({
screenHeight:null==t||null==(r=t.param)?void 0:r.height
}
);
e.setE2eId(t,a,o)
}
)))
}

}
,{
key:"setE2eId",value:function(e,t,i){
var r;
if('page'===t&&'pageLeave'===i&&this.props.uniqueId===(null==e||null==(r=e.param)?void 0:r.uniqueId))if(e.param.isLeave){
var a={
e2eId:this.e2eIdInfo.e2eId
}
;
_r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!1,a)
}
else _r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!1)
}

}
,{
key:"mpListener",value:function(){
// 变量
var e: any = this;
_r(d[23]).PlatformUtils.isMp()&&(this.backTopLister=u.DeviceEventEmitter.addListener('scrollToTop',this.onBackTop)),_r(d[23]).PlatformUtils.isMp()&&this.props.pageLifetimes&&this.props.pageLifetimes.addPageEventListener((function(t){
if('onShow'===t){
var i={
e2eId:e.e2eIdInfo.e2eId
}
;
_r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!1,i)
}
else _r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!1)
}
))
}

}
,{
key:"lister",value:function(){
// 变量
var e: any = this;
this.lister1=u.DeviceEventEmitter.addListener('changeFilters_r',(function(t){
e.categoryIndex=t
}
)),this.lister4=u.DeviceEventEmitter.addListener('deleteKey',(function(t){
e.setState({
keyword:t,pageNum:'1'
}
,(function(){
e.pageNum=1,e.isContentSearchResult?e._updateContent():e._getQueryPrd()
}
))
}
))
}

}
,{
key:"iosTimeout",value:function(){
_r(d[23]).PlatformUtils.isIOS()&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){
u.DeviceEventEmitter.emit('iosForOnScrollEvent')
}
),1e3))
}

}
,{
key:"updataState",value:function(){
var e,t,i,r,a,o,l=(null==(e=this.state.configInfo)?void 0:e.searchResultPageActivityShow)||(null==(t=this.props)?void 0:t.searchResultPageActivityShow)||'true',n=(null==(i=this.state.configInfo)?void 0:i.searchResultPageProdShow)||(null==(r=this.props)?void 0:r.searchResultPageProdShow)||'true',s=(null==(a=this.state.configInfo)?void 0:a.searchResultPageContentShow)||(null==(o=this.props)?void 0:o.searchResultPageContentShow);
this.isContentSearchResult='false'===n&&'true'===s,this.isContentSearchResult&&this._queryDiscoveryContent(),!1===this.isContentSearchResult&&(n&&this._getQueryPrd(),l&&this._getActiveContent(),this.getSearchShop()),!this.isContentSearchResult&&l||this.setState({
isGetActiveContent:!0
}
)
}

}
,{
key:"getInitParams",value:function(){
// 变量
var e: any = this.props,t=e.keyword,i=e.isLogin,r=e.configInfo,a=e.route,o=e.routeParams;
if(_r(d[23]).PlatformUtils.isMp())return{
keyword:t,keywordText:[t],configInfo:r,isLogin:i
}
;
var l=(null==a?void 0:a.params)||{

}
,n=(null==o?void 0:o.searchWord)||this.props.searchWord;
return{
keyword:_r(d[23]).CommonUtils.isEmpty(l)?n:this._searchRegexp(l.keyword),keywordText:[_r(d[23]).CommonUtils.isEmpty(l)?n:l.keyword],configInfo:l.configInfo,isLogin:l.isLogin
}

}

}
,{
key:"componentDidMount",value:(I=(0,i.default)((function*(){
// 变量
var e: any = this,t=this.props,i=t.searchId,r=t.route,a=t.source,o=null==r?void 0:r.params;
if(_r(d[23]).PlatformUtils.isApp()){
// 变量
var l: any = yield _r(d[23]).DeviceUtils.getDeviceInfo(_r(d[23]).APP_INFOS.DEVICE_INFO);
this.tid=null==l?void 0:l.tid;
var n=o||{

}
;
this.source=Object.prototype.hasOwnProperty.call(n,'searchId')?'':a||'',_r(d[23]).SearchResultStore.updateSource(this.source)
}
_r(d[23]).PlatformUtils.isMp()&&(this.source=a||''),this.searchId=_r(d[23]).PlatformUtils.isMp()?i:null==o?void 0:o.searchId,this.updataState();
// 变量
var s: any = yield _r(d[23]).CommonUtils.getRecommendConfigRes(),c=yield this.getVproLogo();
this.setState({
isRecommended:s,vproLogo:c
}
,(function(){
e.eventTracingReportByLoad()
}
)),this.appListener(),this.lister(),this.mpListener(),this.iosTimeout()
}
)),function(){
return I.apply(this,arguments)
}
)
}
,{
key:"componentWillUnmount",value:function(){
var e;
this.backTopLister&&this.backTopLister.remove(),this.eventListener&&this.eventListener.remove(),this.lister1&&this.lister1.remove(),this.lister3&&this.lister3.remove(),this.lister4&&this.lister4.remove(),this.listerBack&&this.listerBack.remove(),this.lister5&&clearTimeout(this.lister5),this.wapTimer&&clearTimeout(this.wapTimer),this.timer&&clearTimeout(this.timer),this.activityLayoutTimer&&clearTimeout(this.activityLayoutTimer),this.timerScroll&&clearTimeout(this.timerScroll),this.canClick=!0,this.canClickTimer&&clearTimeout(this.canClickTimer),this.state.scrollY&&this.state.scrollY.removeAllListeners(),null==(e=this.props.pageLifetimes)||e.removePageEventListener(),_r(d[23]).CommonUtils.storeE2eId(_r(d[23]).PAGE_TYPE_E2EID.searchResult,!1)
}

}
,{
key:"componentDidUpdate",value:function(){
_r(d[23]).PlatformUtils.isMp()&&this.props.isOnUnload&&this.onPressBack()
}

}
,{
key:"addRefView",value:function(e,t){
// 变量
var i: any = 0;
this.itemlist.some((function(e,r){
return i=r,e.exposeObj.keyName===t.keyName
}
))?this.itemlist.splice(i,1,e):this.itemlist.push(e)
}

}
,{
key:"renderItem",value:function(e,t,i,r,a,o){
var l,n,s=this;
return(0,_r(d[26]).jsx)(u.TouchableOpacity,{
onPress:function(){
s.multipleTapNew(e,t,i)
}
,style:[null!=r&&null!=(l=r[e.attrId])&&l.includes(t.id)?a.slideCateTap:a.slideCateTaped,{
width:o
}
],activeOpacity:1,children:(0,_r(d[26]).jsx)(u.Text,{
ellipsizeMode:"tail",style:[null!=r&&null!=(n=r[e.attrId])&&n.includes(t.id)?a.slideTextCated:a.slideTextCate,_r(d[23]).PlatformUtils.isMp()&&a.slideTextMp],numberOfLines:1,children:t.value
}
)
}
,t.id)
}

}
,{
key:"setCountFont",value:function(e){
return e>999&&e<1e4?'8':e>9999?'4':'10'
}

}
,{
key:"checkStatusBarHeight",value:function(){
// 变量
var e: any = u.StatusBar.currentHeight;
return void 0!==this.props.statusBarHeight&&(e=this.props.statusBarHeight),e
}

}
,{
key:"render",value:function(){
var e,t,i=this,r=this.state,a=r.slideShow,o=r.layoutType,l=r.keywordText,n=r.iosStatusBarHeight,s=r.currentCapsuleIndex,c=r.capsuleModalTop,p=r.pivotalAttrSelect,h=r.specAttrSelect,f=r.brandFilter,y=r.promoFilter,S=r.labelContentSelect,w=r.totalCount,T=r.sortFieldList,x=r.isCapsuleModalHide,I=r.categoryIndex,L=r.isGetActiveContent,b=this.props.clickItem,R=this.state.configInfo,F=(null==R?void 0:R.searchResultPageProdShow)||(null==(e=this.props)?void 0:e.searchResultPageProdShow)||'true',E=(null==R?void 0:R.searchResultPageContentShow)||(null==(t=this.props)?void 0:t.searchResultPageContentShow);
this.isContentSearchResult='false'===F&&'true'===E;
var k=this.getCapsuleNum(),j=this.marginValue(),N=j.paddingValue,A=j.slideBtnValue,U=j.colGutter,O={
uniqueId:this.props.uniqueId
}
;
return(0,_r(d[26]).jsx)(_r(d[23]).WithTheme,{
themeStyles:C.default,children:function(e,t,r,C){
var R,F,E,j,V;
i.initwidth(r),i.width=r;
var H=i.calWidth(),M=(H-A)/2,_=(H-2*N-16-6)/2;
return i.widthItem=r-2*N,(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[_r(d[23]).PlatformUtils.isIOS()&&(0,_r(d[26]).jsx)(u.View,{
style:[{
width:'100%',height:n
}
,e.iosTitleBar]
}
),_r(d[23]).PlatformUtils.isHarmony()&&(0,_r(d[26]).jsx)(u.View,{
style:{
backgroundColor:t.C32.color,width:'100%',height:i.checkStatusBarHeight()
}

}
),i.isContentSearchResult?(0,_r(d[26]).jsx)(u.View,{
style:[e.productWrap,_r(d[23]).PlatformUtils.isIOS()?e.wrap:null,{
height:'100%'
}
],onLayout:function(e){
(0,_r(d[23]).layout)(e,_r(d[23]).PAGE_TYPE.search)
}
,children:(0,_r(d[26]).jsxs)(u.View,{
children:[(0,_r(d[26]).jsx)(u.Animated.View,{
style:[{
zIndex:9,elevation:9,position:'relative'
}
],children:(0,_r(d[26]).jsx)(P.default,{
isPad:i.isPad(),isPadHorizontal:i.isPadHorizontal(),onPress:i.onPressBack,isChange:!0,isInput:!0,layoutType:o,onPressChange:i.onPressChange,navigation:i.props.navigation,searchWord:l,reportPageLeave:i.reportPageLeave,searchClick:i._updateContent,isContentTitle:i.isContentSearchResult,deleClick:i.deleClick,scrollListTop:i.scrollListTop,otherParams:O
}
)
}
),i.loadPage(e),L?i.contentSearchResultPage():null]
}
)
}
):(0,_r(d[26]).jsxs)(u.View,{
style:[e.productWrap,_r(d[23]).PlatformUtils.isIOS()||_r(d[23]).PlatformUtils.isMp()?e.wrap:null,a?{
zIndex:2
}
:null,{
flex:1
}
],children:[(0,_r(d[26]).jsx)(u.View,{
ref:function(e){
i.titleViewObj=e
}
,style:e.titleWrap,children:i.renderItemSearchTitle(e,O)
}
),i.loadPage(e),L?(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[(0,_r(d[26]).jsxs)(u.View,{
ref:function(e){
i.filterViewObj=e
}
,style:e.filterStickyWrap,children:[i.renderItemSearchCategories(e),i.renderItemSearchCapsule(e,'top')]
}
),i.renderProductList(e),(0,_r(d[26]).jsx)(u.View,{
style:e.fixBtnWrap,testID:'searchresult-pinning',nativeID:'searchresult-pinning',children:(0,_r(d[26]).jsx)(_r(d[27]).FixedButton,{
fixedButton:!0,onBackTop:i.scrollListTop,pageType:_r(d[23]).PAGE_TYPE.search,pageId:i.state.pageId
}
)
}
),!i.slideShow&&s>=0&&k>=3?(0,_r(d[26]).jsx)(v.default,{
onSlideShowTap:i.slideShowCapsuleTap,onRef:i.onCapsuleModaLRef,currentCapsuleIndex:s,updateCapsuleData:i.updateCapsuleData,capsuleModalTop:c-(_r(d[23]).PlatformUtils.isHarmony()?i.checkStatusBarHeight():0),clickItem:b,pivotalAttrSelect:p,specAttrSelect:h,brandFilter:f,promoFilter:y,labelContentSelect:S,totalCount:w,sortFieldList:T,isPad:i.isPad(),isPadHorizontal:i.isPadHorizontal(),width:i.boxWidth(),categoryIndex:I,isCapsuleModalHide:x
}
):null,i.slideShow?(0,_r(d[26]).jsxs)(u.Animated.View,{
pointerEvents:"auto",style:[e.filterWrap,_r(d[23]).PlatformUtils.isHarmony()&&{
height:C,marginTop:-i.checkStatusBarHeight()
}
],children:[(0,_r(d[26]).jsx)(u.TouchableOpacity,{
onPress:function(){
i.slideShowTap(!1)
}
,activeOpacity:1,style:[e.searchSlide]
}
),(0,_r(d[26]).jsxs)(u.Animated.View,{
style:[e.searchSlideRight,{
width:H,paddingLeft:N,transform:[{
translateX:i.state.translateX
}
]
}
,_r(d[23]).PlatformUtils.isHarmony()&&{
paddingBottom:_r(d[23]).appIdStore.mSafeAreaLayoutGuideBottom
}
,_r(d[23]).PlatformUtils.isWx()&&{
paddingBottom:null!=(R=wx.getWindowInfo())&&R.safeArea?(null==(F=wx.getWindowInfo())?void 0:F.screenHeight)-wx.getWindowInfo().safeArea.bottom:0
}
,_r(d[23]).PlatformUtils.isAli()&&{
height:null==(E=my.getSystemInfoSync())?void 0:E.windowHeight,paddingBottom:null!=(j=my.getSystemInfoSync())&&j.safeArea?(null==(V=my.getSystemInfoSync())?void 0:V.screenHeight)-my.getSystemInfoSync().safeArea.bottom:0
}
],children:[(0,_r(d[26]).jsxs)(u.ScrollView,{
style:[e.slideTop,_r(d[23]).PlatformUtils.isWx()&&{
height:i.props.mpWindowHeight,flex:1
}
,{
paddingRight:N
}
],bounces:!1,onScrollEndDrag:function(){
i.wrapScrollStatus='end'
}
,onScrollBeginDrag:function(){
i.wrapScrollStatus='start'
}
,children:[(0,_r(d[26]).jsxs)(_r(d[26]).Fragment,{
children:[i.renderPromofilterList(e,t,M),(0,_r(d[26]).jsx)(u.View,{
children:(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:e.cateTitle,children:(0,_r(d[23]).t)('price_range')
}
)
}
),(0,_r(d[26]).jsxs)(u.View,{
style:e.cateInputBox,children:[(0,_r(d[26]).jsxs)(u.View,{
style:[e.plhBox,_r(d[23]).PlatformUtils.isMp()&&Object.assign({

}
,e.plhBoxMp,{
width:_
}
)],children:[(0,_r(d[26]).jsx)(u.TextInput,{
style:[e.cateInputText,_r(d[23]).PlatformUtils.isMp()&&e.cateInputTextMp,i.state.mininumPriceFocus||''===i.state.mininumPrice?e.priceInputing:e.priceInputComplete,{
width:_r(d[23]).PlatformUtils.isMp()?_-6:_
}
],selectionColor:'#CE0E2D',maxLength:8,value:i.state.mininumPrice,onChangeText:function(e){
return i.changeValue('mininumPrice',e)
}
,onFocus:function(){
i.onFocusValue('mininumPrice')
}
,allowFontScaling:!1,onBlur:function(e){
// 变量
var t: any = e.nativeEvent.text;
i.onBlurValue('mininumPrice',t)
}
,keyboardType:"numeric",disableFullscreenUI:!0
}
),(0,_r(d[26]).jsx)(u.Text,{
style:[e.plh,''!==i.state.mininumPrice?e.plhHide:null],children:(0,_r(d[23]).t)('mininum_price')
}
)]
}
),(0,_r(d[26]).jsx)(u.Text,{
style:[e.lines,_r(d[23]).PlatformUtils.isMp()&&e.linesMp,{
width:U
}
],children:"-"
}
),(0,_r(d[26]).jsxs)(u.View,{
style:[e.plhBox,_r(d[23]).PlatformUtils.isMp()&&Object.assign({

}
,e.plhBoxMp,{
width:_
}
)],children:[(0,_r(d[26]).jsx)(u.TextInput,{
style:[e.cateInputText,{
width:_r(d[23]).PlatformUtils.isMp()?_-6:_
}
,_r(d[23]).PlatformUtils.isMp()&&e.cateInputTextMp,i.state.maxinumPriceFocus||''===i.state.maxinumPrice?e.priceInputing:e.priceInputComplete],selectionColor:'#CE0E2D',maxLength:8,value:i.state.maxinumPrice,onFocus:function(){
i.onFocusValue('maxinumPrice')
}
,onBlur:function(e){
// 变量
var t: any = e.nativeEvent.text;
i.onBlurValue('maxinumPrice',t)
}
,onChangeText:function(e){
return i.changeValue('maxinumPrice',e)
}
,keyboardType:"numeric",allowFontScaling:!1,disableFullscreenUI:!0
}
),(0,_r(d[26]).jsx)(u.Text,{
style:[e.plh,''!==i.state.maxinumPrice?e.plhHide:null],children:(0,_r(d[23]).t)('maxinum_price')
}
)]
}
)]
}
)]
}
),(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:i.renderBrandList(e,t,M)
}
),(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:i.renderOffers(e,t,M)
}
),(0,_r(d[26]).jsx)(_r(d[26]).Fragment,{
children:i.renderCategory(e,t,M)
}
)]
}
),(0,_r(d[26]).jsxs)(u.View,{
style:[_r(d[23]).PlatformUtils.isMp()?e.slideBottomMp:e.slideBottom,{
marginRight:N
}
],children:[(0,_r(d[26]).jsx)(u.TouchableOpacity,{
onPress:function(){
i.resetTap()
}
,activeOpacity:1,style:[e.slideBottomTap,{
width:M
}
],children:(0,_r(d[26]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[e.slideTextC],children:(0,_r(d[23]).t)('reset')
}
)
}
),(0,_r(d[26]).jsx)(u.TouchableOpacity,{
onPress:i.clickSureBtn,style:[e.slideBottomTapRight,{
width:M,flexDirection:'row'
}
],activeOpacity:1,children:i.getPrice(e)
}
)]
}
)]
}
)]
}
):null]
}
):null]
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
var I
}
)(c.default.PureComponent);
_e.SearchResultClass=k,_e.default=(0,_r(d[23]).componentautoscaling)((0,_r(d[23]).monitor)(f.default)((0,_r(d[23]).itemExposeHoc)(k)))
}
),"7d92914a182ad3c9483edf5b5af0aa4d955b7bf2499fc483e5c6a316633453b9",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","598dd5411f5356eab137e972eb6cee59f0eaeb909657cad20b7b3811ffae9612","cc5f2b4289ed1f6f448a954d4a0509baa530c4619abf8715f5f45da12e35da83","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","5f32489d57e7e8e72322f964a34883e08cf3e437e2b856c79984210e0e2ce4fb","19febc502c7586312e952efafb6fd84d6d65074ffde488072f920050453b0e32","24748c9a2be27938d63185b5554cdf24a7c4c624adb17100904631e49191e5cd","02bc0776fb6b2131fb6170122f07b64405f7cd464a8717bf2ea745a517294b5a","ee8b2c580e2d63e0e36e058154be4aed1c50890d38825ade9daf3ca40d93f3f2","eb2f28d983fdf798d6bd1eda32bedd7f2758efe88d0d42b16eaaf9fd87de9e75","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","08068c2af252a05f22a03944e142578fa14969309c54b10ec1d5a9c93254bdf7","6b9f0049fa862fca850525facd4232a15773edcb1ad54610a8c921038ffe2ab7","bf1d5e342705e17e9203166253c01262434b4c82a131cb1fc21624410fb42345","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","9fe71cb61dad1c8b4ee71db59f8a7410818d4551a0e254c177c76dd492d6d42b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","eb1eec51ea9b0b6fc1c065fa646cc7a3d9846eeeca9feb03f6ec21346b7958d7"]);

__d((function(g,r,_i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),n=r(d[0])(r(d[3])),i=r(d[0])(r(d[4])),o=r(d[0])(r(d[5])),s=r(d[0])(r(d[6])),c=r(d[7]),l=r(d[0])(r(d[8])),u=r(d[0])(r(d[9])),h=r(d[0])(r(d[10]));
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
var f=(function(s){
// 函数
function h(t: any): any {
var o,s,u,f;
(0,e.default)(this,h),s=this,u=h,f=[t],u=(0,i.default)(u),(o=(0,n.default)(s,p()?Reflect.construct(u,f||[],(0,i.default)(s).constructor):u.apply(s,f))).itemlist=[],o.receiveRef=function(e){
// 变量
var t: any = o.state.cardData,n=o.props,i=n.isPhysicalCategory,s=n.searchWord,c=n.type;
o.itemlist=[],e&&(e.exposeObj={

}
,e.exposeObj.type=c,e.exposeObj.cardData=t,e.exposeObj.isPhysicalCategory=i,e.exposeObj.searchWord=s,o.itemlist.push(e))
}
,o.selectPic=l.default.debounce((function(e,t){
var n,i=o.props,s=i.selectIndex,c=i.searchWord,l=i.isPhysicalCategory,u=i.type;
t===s?o.props.onChangesCategory({
cardId:'',index:-1
}
):o.props.onChangesCategory({
cardId:e.categoryId,index:t
}
);
var h,p={
searchWord:c,categoryid:l?null==(n=e.categoryId)?void 0:n.toString():'',click:'1'
}
;
'searchresult'===u&&(p.attributeid=l?'':null==(h=e.categoryId)?void 0:h.toString());
o.props.clickItem(p,u),r(d[11]).EventTracking.execReportData('',!0)
}
),200),o.initWidth=function(e){
o.state.width!==e&&o.setState({
width:e,showTwoLineText:!1
}
)
}
,o.categoryStyle=function(){
// 变量
var e: any = o.props,t=e.isPad,n=e.isPadHorizontal,i=8,s=16,c=8,l=69;
return t&&!n?(i=12,s=24,c=16,l=(o.state.width-24-72)/6.5):t&&n?(i=16,s=32,c=24,l=(o.state.width-32-160)/10.5):(i=8,s=16,c=8,l=(o.state.width-16-32)/4.5),{
paddingRight:i,marginLeft:s,marginRight:c,cardWH:l
}

}
,o.renderItem=function(e){
var t,n=e.item,i=e.index,s=o.mstyles,l=o.state.cardData,u=o.props,h=u.isPad,p=u.selectIndex,f=o.categoryStyle(),y=f.paddingRight,x=f.marginLeft,v=f.marginRight,I=f.cardWH;
if(/(http|https):\/\/([\w.]+\/?)\S*/.test(n.photoPath))t=n.photoPath;
else{
// 变量
var w: Record<string, any> = r(d[11]).Service.cmsCndProdPath+n.photoPath+'428_428_'+n.photoName;
t=(0,r(d[11]).getBestFitImgUrl)(I,I,w)
}
// 变量
var S: any = i===p;
return(0,r(d[12]).jsxs)(c.TouchableOpacity,{
activeOpacity:1,onPress:function(){
o.selectPic(n,i)
}
,style:[{
paddingRight:y,marginLeft:0===i?x:null,marginRight:l&&l.length&&i===l.length-1?v:null,alignItems:'center'
}
],children:[(0,r(d[12]).jsx)(c.View,{
style:[{
width:I,height:I
}
,s.cardBgGray,h&&{
borderRadius:12
}
,S?s.cardBgSelected:s.cardBg],children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsxs)(r(d[12]).Fragment,{
children:[(0,r(d[12]).jsx)(c.View,{
style:[{
width:I,height:I
}
,i===p?s.borderStyleSelect:s.borderStyle]
}
),(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgStyle:s.codeImg,imgUri:t
}
)]
}
):(0,r(d[12]).jsxs)(r(d[12]).Fragment,{
children:[(0,r(d[12]).jsx)(r(d[13]).Animatable.View,{
duration:150,value:S,easing:r(d[13]).EasingCurve.FastOutSlowIn,transition:{
from:{
opacity:0
}
,to:{
opacity:1
}

}
,style:[{
width:I,height:I
}
,S?s.borderStyleSelect:s.borderStyle]
}
),(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgStyle:s.codeImg,imgUri:t
}
)]
}
)
}
),r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(c.Text,{
onLayout:function(e){
e.nativeEvent.layout.height-16>1&&o.setState({
showTwoLineText:!0
}
)
}
,numberOfLines:2,ellipsizeMode:"tail",style:[i===p?s.codeTextRed:s.codeText,{
maxWidth:I
}
],children:n.categoryName
}
):(0,r(d[12]).jsx)(r(d[13]).Animatable.Text,{
duration:150,value:S,easing:r(d[13]).EasingCurve.FastOutSlowIn,transition:{
from:{
opacity:.6
}
,to:{
opacity:.9
}

}
,numberOfLines:2,ellipsizeMode:"tail",style:[S?s.codeTextRed:s.codeText,{
maxWidth:I
}
],children:n.categoryName
}
)]
}
,i)
}
;
// 变量
var y: any = o.mapCardData();
return o.state={
cardData:y,width:r(d[11]).CommonUtils.getWindowSize(r(d[11]).PAGE_TYPE.categoryList).screenWidth,showTwoLineText:!1
}
,o
}
return(0,o.default)(h,s),(0,t.default)(h,[{
key:"componentDidMount",value:function(){

}

}
,{
key:"UNSAFE_componentWillMount",value:function(){
this.panResponder=c.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(){
return!0
}

}
),this.panResponderApk=c.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(){
return!1
}

}
)
}

}
,{
key:"mapCardData",value:function(){
// 变量
var e: any = this.props,t=e.data,n=e.keyName,i=e.valName,o=[];
return t.forEach((function(e,t){
o.push(Object.assign({

}
,e)),o[t].categoryId=e[i],o[t].categoryName=e[n]
}
)),o
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,n=t.isPad,i=t.cateIdIndex,o=this.state,s=o.cardData,l=o.showTwoLineText;
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:u.default,children:function(t,o,u){
return e.initWidth(u),e.mstyles=t,(0,r(d[12]).jsx)(c.View,Object.assign({
style:[t.container,t.categoryCardWrap,r(d[11]).PlatformUtils.isMp()&&{
height:e.categoryStyle().cardWH+16+(l?32:16)
}
]
}
,r(d[11]).PlatformUtils.isWeb()?e.panResponder.panHandlers:e.panResponderApk.panHandlers,{
ref:function(t){
return e.receiveRef(t)
}
,onLayout:function(){
setTimeout((function(){
i>0&&e._flatListRef.scrollToIndex({
index:i,viewPosition:.5
}
)
}
),100)
}
,children:r(d[11]).PlatformUtils.isIOS()?(0,r(d[12]).jsx)(c.FlatList,{
ref:function(t){
e._flatListRef=t
}
,keyExtractor:function(e){
return null==e?void 0:e.categoryId
}
,data:s,extraData:e.state,horizontal:!0,initialNumToRender:s.length,showsHorizontalScrollIndicator:!1,renderItem:e.renderItem,removeClippedSubviews:!1,bounces:!1,getItemLayout:function(e,t){
return{
length:n?76:64,offset:(n?78:66)*t,index:t
}

}

}
):(0,r(d[12]).jsx)(c.FlatList,{
ref:function(t){
e._flatListRef=t
}
,keyExtractor:function(e){
return null==e?void 0:e.categoryId
}
,data:s,extraData:e.state,horizontal:!0,bounces:!1,showsHorizontalScrollIndicator:!1,renderItem:e.renderItem,getItemLayout:function(e,t){
return{
length:n?76:64,offset:(n?78:66)*t,index:t
}

}

}
)
}
))
}

}
)
}

}
])
}
)(s.default.PureComponent);
_e.default=(0,r(d[11]).monitor)(h.default)((0,r(d[11]).itemExposeHoc)(f))
}
),"5f32489d57e7e8e72322f964a34883e08cf3e437e2b856c79984210e0e2ce4fb",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","be6a582bee00f274dcbf27f178ef3f08b0267b0697f39952b47cbb2f1692d869","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.t2bStyle=e.l2rStyle=e.l2rLatoutStyle=e.default=e.customStyleWaterFallH=e.customStyleWaterFallCommon=e.customStyleWaterFall=e.customListStyle=void 0;
var t=r(d[0]),o=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR,n=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_THREE,l=r(d[1]).PlatformUtils.isMp()?'400':'600',s=e.customStyleWaterFallCommon=function(t){
return{
promName:Object.assign({

}
,t.T3,t.C14,{
lineHeight:Math.min(r(d[1]).CommonUtils.getScaleSize(16,o),21),fontSize:Math.min(r(d[1]).CommonUtils.getScaleSize(t.T3.fontSize,o),16)
}
),sellPointInfo:{
marginTop:2
}
,sellingPointTxtMg:{
marginTop:0,paddingTop:0,opacity:1,height:Math.min(r(d[1]).CommonUtils.getScaleSize(16,o),21)
}
,sellingPointTxtMgPad:{
marginTop:0
}
,reviewAreaH:{
height:16
}
,prdTagApkOrIosText:Object.assign({

}
,t.T2,t.C15,{
textAlign:'left'
}
),prdNameBtTextH:{
height:Math.min(r(d[1]).CommonUtils.getScaleSize(16,o),21)+2
}
,sellingPointSplitLine:{
width:9,textAlign:'center',marginTop:1
}
,sellingPointSplitLinePad:{
marginTop:1
}
,priceMark:Object.assign({
marginRight:0,color:t.C11.color
}
,t.T10,{
fontWeight:'500',lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T10.lineHeight,o),fontSize:r(d[1]).CommonUtils.getScaleSize(t.T10.fontSize,o)
}
),newPrice:Object.assign({

}
,t.C11,{
fontSize:r(d[1]).CommonUtils.getScaleSize(t.T10.fontSize,o),marginRight:4,fontWeight:'500',lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T10.lineHeight,o)
}
),newPriceApkOrIos:{

}
,oldPrice:Object.assign({
textDecorationLine:'line-through'
}
,t.C15,{
fontSize:r(d[1]).CommonUtils.getScaleSize(t.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T3.lineHeight+2,o)
}
),estPrice:Object.assign({

}
,t.T1,t.C11,{
textAlign:'left',fontWeight:'400',marginRight:2,lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T1.lineHeight,o)+3
}
)
}

}
;
e.customStyleWaterFall=function(n){
return t.StyleSheet.create(Object.assign({

}
,s(n),{
imgNormal:{
width:'100%',height:'100%',borderRadius:8
}
,prdCont:{
paddingTop:8,paddingLeft:8,paddingRight:8,paddingBottom:12,borderBottomLeftRadius:8,borderBottomRightRadius:8
}
,prdContPad:{
paddingTop:8,paddingLeft:12,paddingRight:12,paddingBottom:12,borderBottomLeftRadius:8,borderBottomRightRadius:8
}
,priceBox:{
justifyContent:'flex-start',alignItems:'flex-end',flexDirection:'row',height:r(d[1]).CommonUtils.getScaleSize(21,o),marginTop:14
}
,priceBoxTwoLine:{
alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row',paddingTop:1,paddingBottom:1,height:r(d[1]).CommonUtils.getScaleSize(21,o)+r(d[1]).CommonUtils.getScaleSize(18,o),marginTop:6
}
,prdName:Object.assign({

}
,n.T6,n.C11,{
height:r(d[1]).CommonUtils.getScaleSize(36,o),justifyContent:'center',fontWeight:r(d[1]).PlatformUtils.isMp()?'400':'500',fontSize:r(d[1]).CommonUtils.getScaleSize(n.T6.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T6.lineHeight,o)
}
),prdBox:Object.assign({
width:'100%',flexGrow:1,height:'auto'
}
,n.S31,{
overflow:'hidden',borderRadius:8,marginTop:8
}
),prdBoxPad:{
marginTop:12
}
,prdTagApkOrIos:{
display:'flex',maxWidth:116,alignItems:'flex-start'
}
,prdTagApkOrIosText:Object.assign({

}
,n.T2,n.C15,{
textAlign:'left'
}
)
}
))
}
,e.customStyleWaterFallH=function(n){
return t.StyleSheet.create(Object.assign({

}
,s(n),{
imgNormal:{
width:'100%',height:'100%',borderRadius:8
}
,prdCont:{
paddingTop:8,paddingLeft:12,paddingRight:12,paddingBottom:12,borderBottomLeftRadius:8,borderBottomRightRadius:8
}
,prdName:Object.assign({

}
,n.T6,n.C11,{
height:r(d[1]).CommonUtils.getScaleSize(36,o),justifyContent:'center',fontWeight:l,fontSize:r(d[1]).CommonUtils.getScaleSize(n.T6.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T6.lineHeight,o)
}
),priceBox:{
justifyContent:'flex-start',alignItems:'flex-end',flexDirection:'row',height:r(d[1]).CommonUtils.getScaleSize(21,o),marginTop:14
}
,prdBox:Object.assign({
width:'100%',flexGrow:1,height:'auto'
}
,n.S31,{
overflow:'hidden',borderRadius:8,marginTop:12
}
),prdBoxPad:{
marginTop:16
}
,prdTagApkOrIos:{
display:'flex',alignItems:'flex-start'
}
,prdTagApkOrIosText:Object.assign({

}
,n.T2,n.C15,{
textAlign:'left'
}
)
}
))
}
,e.l2rStyle=function(n){
return t.StyleSheet.create({
priceMark:Object.assign({
marginRight:2
}
,n.C11,{
fontWeight:'600',fontSize:r(d[1]).CommonUtils.getScaleSize(n.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T4.lineHeight,o)+(r(d[1]).fontStore.fontMutiple>=o?8:2)
}
),priceMarkPc:Object.assign({
marginRight:0
}
,n.C11,{
fontSize:n.T10.fontSize,fontWeight:'400'
}
),newPrice:Object.assign({

}
,n.C11,{
fontWeight:'600',marginRight:4,fontSize:r(d[1]).CommonUtils.getScaleSize(n.T10.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T10.lineHeight,o)
}
),priceQi:Object.assign({
marginLeft:-2
}
,n.C11,{
fontWeight:r(d[1]).PlatformUtils.isWeb()?'bold':'600',fontSize:r(d[1]).CommonUtils.getScaleSize(n.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T4.lineHeight,o)+(r(d[1]).fontStore.fontMutiple>=o?10:-1)
}
),promTagsAreaH:{
height:r(d[1]).PlatformUtils.isQQWap()?15:14,marginTop:4
}
,prdCont:{
flexGrow:1,flexBasis:'0%',paddingLeft:8,paddingRight:12,paddingTop:12,paddingBottom:12,justifyContent:'space-between'
}
,reviewNum:Object.assign({

}
,n.T1,n.C14,{
marginRight:4,marginTop:2
}
),reviewRate:Object.assign({

}
,n.T1,n.C14,{
marginTop:2
}
),promName:Object.assign({
marginTop:2
}
,n.T3,n.C14,{
height:Math.min(r(d[1]).CommonUtils.getScaleSize(n.T3.lineHeight,o),21),fontSize:Math.min(r(d[1]).CommonUtils.getScaleSize(n.T3.fontSize,o),16),lineHeight:Math.min(r(d[1]).CommonUtils.getScaleSize(n.T3.lineHeight,o),21)
}
)
}
)
}
,e.t2bStyle=function(n){
return t.StyleSheet.create({
prdName:Object.assign({

}
,n.T6,n.C21,{
justifyContent:'center',fontWeight:r(d[1]).PlatformUtils.isWeb()?'bold':l,fontSize:r(d[1]).CommonUtils.getScaleSize(n.T6.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T6.lineHeight,o)
}
)
}
)
}
,e.l2rLatoutStyle=function(){
return t.StyleSheet.create({
priceBox:{
justifyContent:r(d[1]).fontStore.fontMutiple>=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE?'center':'flex-start',alignItems:r(d[1]).fontStore.fontMutiple>=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE?'flex-start':'center',flexDirection:r(d[1]).fontStore.fontMutiple>=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE?'column':'row',flexShrink:1,paddingRight:12,paddingTop:2
}

}
)
}
,e.customListStyle=function(n){
return t.StyleSheet.create({
promTagsAreaH:{
height:r(d[1]).PlatformUtils.isQQWap()?15:14,marginTop:4
}
,prdCont:{
flexGrow:1,flexBasis:'0%',paddingLeft:8,paddingRight:12,paddingTop:8,paddingBottom:12,justifyContent:'space-between'
}
,prdName:Object.assign({

}
,n.T6,n.C21,{
justifyContent:'center',fontWeight:r(d[1]).PlatformUtils.isWeb()?'bold':l,fontSize:r(d[1]).CommonUtils.getScaleSize(n.T6.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T6.lineHeight,o)
}
),prdContTop:{

}
,reviewAreaH:{

}
,reviewAreaHPad:{

}
,priceMark:Object.assign({
marginRight:2,color:n.C11.color
}
,n.T4,{
fontWeight:'600',lineHeight:18,fontSize:n.T4.fontSize
}
),priceMarkPc:{
marginRight:0,color:n.C18.color,fontSize:n.T7.fontSize,fontWeight:'400'
}
,newPrice:Object.assign({

}
,n.C11,{
fontSize:n.T10.fontSize,fontWeight:'600',marginRight:4,lineHeight:n.T10.lineHeight
}
),priceQi:Object.assign({
marginLeft:-2
}
,n.C11,{
fontSize:n.T4.fontSize,fontWeight:'bold',lineHeight:15
}
),withoutPrice:Object.assign({

}
,n.C11,n.T8,{
fontSize:r(d[1]).CommonUtils.getScaleSize(n.T8.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T8.lineHeight,o)
}
)
}
)
}
,e.default=function(l){
return t.StyleSheet.create({
wrap:Object.assign({

}
,l.S32),productWrap:{
width:'100%'
}
,productList:{
width:'100%',overflow:'hidden',marginTop:8
}
,productItemWrap:{
width:'100%',height:'auto'
}
,productItemRow:{
flexDirection:'row'
}
,lodingTitle:{
color:l.C13.color,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,2),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,2)
}
,emptyImg:{
width:96,height:96
}
,emptyC:{
width:'100%',alignItems:'center'
}
,emptyT:Object.assign({
textAlign:'center'
}
,l.C15,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)
}
),emptyText:{
alignSelf:'flex-end',height:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)
}
,emptyTextView:{
flexWrap:'wrap',flexDirection:'row',width:'100%',justifyContent:'center'
}
,container:{
display:'flex',flexDirection:'row'
}
,deviation:{
position:'relative',overflow:'hidden',flex:1,display:'flex',flexDirection:'row',flexWrap:'wrap'
}
,prdAreaR:{
paddingLeft:16,paddingRight:16
}
,prdAreaPadR:{
paddingLeft:24,paddingRight:24
}
,prdArea:{
paddingLeft:16
}
,prdAreaPad:{
paddingLeft:24
}
,prdAreaRight:{
paddingRight:16
}
,prdAreaPadRight:{
paddingRight:24
}
,slidePrdArea:{
paddingLeft:16
}
,slidepPrdAreaPad:{
paddingLeft:24
}
,codeTextC:Object.assign({
textAlign:'center'
}
,l.T7,l.C13,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),codeTextCed:Object.assign({
textAlign:'center'
}
,l.T8,l.C18,{
fontWeight:'bold',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),searchCategories:{
display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:l.C32.color
}
,searchCategoriesItem:{
display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:40,flex:1
}
,bordL:{
flex:1,borderLeftWidth:r(d[1]).PlatformUtils.isIOS()?0:1,borderColor:l.C39.color+'0c',height:16,lineHeight:17
}
,sortIcon:{
width:12,height:24,marginLeft:2,overflow:'hidden'
}
,spinnerUp:{
position:'absolute',width:12,height:24,top:0,left:0,overflow:'hidden'
}
,spinnerDown:{
position:'absolute',width:12,height:24,bottom:0,left:0,overflow:'hidden'
}
,cardBgGray:{
backgroundColor:l.C33.color+l.opacityMap[l.C33.opacity],borderRadius:8,marginBottom:4,marginTop:8,justifyContent:'center',alignItems:'center'
}
,cardBgSelected:{
shadowColor:l.C39.color,elevation:4,shadowOffset:{
width:0,height:1
}
,shadowOpacity:r(d[1]).PlatformUtils.isIOS()?.2:.1,shadowRadius:r(d[1]).PlatformUtils.isIOS()?3:4
}
,cardBg:{
shadowColor:l.C39.color
}
,borderStyle:{
position:'absolute',zIndex:1
}
,borderStyleSelect:{
borderColor:l.C72.color+'99',borderWidth:.5,borderRadius:8,position:'absolute',zIndex:1
}
,codeImg:{
overflow:'hidden',borderRadius:8,width:'100%',height:'100%',resizeMode:'cover'
}
,codeText:Object.assign({
flex:1,textAlign:'left'
}
,l.T3,l.C13,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,n)
}
),codeTextRed:Object.assign({
flex:1,textAlign:'left'
}
,l.T4,l.C12,{
fontWeight:'500',fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T4.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T4.lineHeight,n)
}
),recommend:{
paddingBottom:8,height:r(d[1]).CommonUtils.getScaleSize(39,o)+33,alignItems:'center'
}
,recommendImg:{
width:48,height:48,resizeMode:'cover',borderRadius:12
}
,right:{
flex:1,height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:16,borderColor:'#fff',borderBottomWidth:r(d[1]).PlatformUtils.isIOS()?.5:1
}
,middleC:{
flex:1
}
,imgArrow:{
width:16,height:16,opacity:.2,marginLeft:12
}
,titleN:Object.assign({

}
,l.C11,l.T10,{
fontWeight:'500',fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T10.lineHeight,n)
}
),titleC:Object.assign({
marginTop:2
}
,l.C13,l.T7,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,n)
}
),titleBar:{
marginBottom:0,marginLeft:0,height:r(d[1]).CommonUtils.getScaleSize(22,n)+34,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:l.C32.color
}
,titleBarLeft:{
marginBottom:0,marginLeft:0,flexDirection:'row',alignItems:'center'
}
,searchBox:Object.assign({
height:r(d[1]).CommonUtils.getScaleSize(22,n)+18,marginHorizontal:8,flexDirection:'row',alignItems:'center'
}
,l.S13,{
borderRadius:40,marginVertical:8,flex:1,justifyContent:'flex-start',overflow:'hidden'
}
),searchImgBox:{
marginLeft:12,marginRight:8
}
,bubblesBodyMp:{
alignSelf:'center',height:28,marginRight:6
}
,bubblesBody:{
backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],flexDirection:'row',marginRight:8,borderRadius:r(d[1]).CommonUtils.getScaleSize(14,n),alignItems:'center',overflow:'hidden'
}
,bubblesBodyDark:{
backgroundColor:'rgba(255,255,255,0.10)',flexDirection:'row',marginRight:8,borderRadius:14,alignItems:'center',overflow:'hidden'
}
,bubblesChil:{
flex:1,height:40,justifyContent:'center'
}
,inputBox:{
paddingTop:6,paddingBottom:6,paddingLeft:8
}
,inputText:Object.assign({
flex:1,height:40,justifyContent:'center'
}
,l.T3,l.C11),crossImgBox:{
paddingTop:6,paddingRight:8,paddingBottom:6,marginLeft:8
}
,closeImg:{
height:16,width:16
}
,closeBubblesImg:{
height:12,width:12
}
,searchClickText:Object.assign({

}
,l.T8,l.C11,{
textAlign:'center',fontFamily:r(d[1]).PublicFont.fontFamilyMedium,width:29
}
),searchText:Object.assign({

}
,l.T8,l.C12,{
width:56,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,n),fontWeight:'500',textAlign:'center'
}
),searchButton:{
width:56,height:36,justifyContent:'center',borderRadius:18,marginHorizontal:2
}
,viewAll:{
width:'100%',paddingTop:56
}
,filterWrap:{
position:r(d[1]).PlatformUtils.isWeb()?'fixed':'absolute',left:0,height:'100%',width:'100%',flexDirection:'row',zIndex:9,backgroundColor:l.C80.color+l.opacityMap[l.C80.opacity]
}
,contentContainerStyle:{
justifyContent:'flex-start',flexDirection:'column',flexGrow:1
}
,searchSlide:{
flexShrink:1,flexGrow:1,height:'100%',flexBasis:'auto'
}
,searchSlideRight:{
flexShrink:0,flexGrow:0,height:'100%',flexBasis:'auto',borderTopLeftRadius:16,borderBottomLeftRadius:16,overflow:'hidden',backgroundColor:'#F1F3F5'
}
,slideTop:{
height:'100%',marginTop:8
}
,slideBottom:{
display:'flex',flexDirection:'row',justifyContent:'space-between',height:40,marginBottom:16,marginTop:12
}
,slideBottomMp:{
flexDirection:'row',display:'flex',justifyContent:'space-between',marginBottom:8,marginTop:12
}
,slideBottomTap:{
height:40,borderRadius:20,backgroundColor:l.C39.color+'0c',alignItems:'center',justifyContent:'center'
}
,slideBottomTapRight:{
height:40,borderRadius:20,backgroundColor:l.C35.color+l.opacityMap[l.C35.opacity],display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',paddingRight:15,paddingLeft:16
}
,slideTextC:Object.assign({

}
,l.C11,l.T10,{
fontWeight:'500',paddingLeft:16,paddingRight:16,fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),slideTextCed:Object.assign({

}
,l.C17,l.T10,{
fontWeight:'bold',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),slideTextCedItem:Object.assign({

}
,l.T10,l.C17,{
fontWeight:'bold',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),slideTextCedItemOver:Object.assign({

}
,l.C17,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),slideTextCedItemOverNormall:Object.assign({

}
,l.T10,l.C17,{
fontWeight:'bold',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
),slideCateTap:{
height:11+r(d[1]).CommonUtils.getScaleSize(17,o),borderRadius:14,alignItems:'center',justifyContent:'center',backgroundColor:l.S31.backgroundColor,marginBottom:12
}
,slideCateTaped:{
height:11+r(d[1]).CommonUtils.getScaleSize(17,o),borderRadius:14,alignItems:'center',justifyContent:'center',backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],marginBottom:12
}
,slideTextCate:Object.assign({

}
,l.C12,l.T3,{
paddingHorizontal:8,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,o)
}
),slideTextCated:Object.assign({

}
,l.C11,l.T4,{
fontWeight:'500',paddingLeft:8,paddingRight:8,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T4.lineHeight,o)
}
),slideTextMp:{
width:'100%',textAlign:'center'
}
,cateList:{
display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'
}
,cateTitle:Object.assign({

}
,l.C13,l.T8,{
fontWeight:'500',marginTop:28,marginBottom:8,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,o)
}
),cateTitleC:Object.assign({

}
,l.C13,l.T8,{
fontWeight:'500',marginTop:28,marginBottom:8,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,o)
}
),cateTitleAll:Object.assign({

}
,l.C13,l.T7,{
marginTop:21,marginBottom:8,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)
}
),cateTitleAllApk:Object.assign({

}
,l.C13,l.T7,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)
}
),cateTitleAllImg:{
height:24,width:24,marginTop:-2,alignSelf:'center',opacity:.2
}
,cateTitleAllView:{
justifyContent:'center',alignItems:'center',marginRight:0,height:24,width:24
}
,cateInputBox:{
display:'flex',flexDirection:'row',height:11+r(d[1]).CommonUtils.getScaleSize(17,o),marginBottom:12,marginTop:4
}
,cateInputText:Object.assign({
height:'100%',padding:0,margin:0,borderRadius:14,textAlign:'center',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,l.T3,l.C15,{
backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,o)
}
),cateInputTextMp:{
backgroundColor:l.C39.color+l.opacityMap[0]
}
,priceInputing:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,l.T3,l.C11,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,o)
}
),priceInputComplete:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.T3,l.C11,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T4.lineHeight,o)
}
),lines:Object.assign({
flex:1,textAlign:'center',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,l.T7,l.C13,{
lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o),alignSelf:'center',justifyContent:'center',alignItems:'center',width:6,marginHorizontal:8
}
),linesMp:Object.assign({
flex:1,textAlign:'center'
}
,l.T7,l.C13,{
height:20,alignSelf:'center'
}
),cateFlexRow:{
display:'flex',justifyContent:'space-between',flexDirection:'row',marginBottom:4,marginTop:-8
}
,allCenter:{
marginRight:0,marginTop:28,marginBottom:8,alignItems:'center'
}
,recommendTitle:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,l.T11,l.C12,{
flexGrow:1,fontWeight:'bold',marginTop:24,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T11.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T11.lineHeight,o)
}
),posiFix:{
position:r(d[1]).PlatformUtils.isWeb()?'fixed':'absolute',width:'100%',backgroundColor:l.C32.color,zIndex:8
}
,loadPage:{
position:'absolute',top:r(d[1]).CommonUtils.getScaleSize(22,n)+34,zIndex:99,width:'100%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:l.C32.color
}
,loadView:{
alignItems:'center',justifyContent:'center',display:'flex'
}
,loadPageImg:{
width:72,height:72
}
,loadPageText:{
fontSize:r(d[1]).CommonUtils.getScaleSize(14,o),color:l.C13.color+'99'
}
,confirm:{
flexGrow:1,flexShrink:1,flexBasis:'auto',width:'50%',height:r(d[1]).fontStore.fontMutiple>r(d[1]).FONT_MUTIPLE.FONT_LEVEL_ONE?r(d[1]).CommonUtils.getScaleSize(22,o)+35:40,borderRadius:20,justifyContent:'center',alignItems:'center',marginLeft:6,paddingHorizontal:16,backgroundColor:l.C35.color+l.opacityMap[l.C35.opacity],flexDirection:'row'
}
,confirmCalcule:{
position:'absolute',top:-60,left:0,height:r(d[1]).fontStore.fontMutiple>r(d[1]).FONT_MUTIPLE.FONT_LEVEL_ONE?r(d[1]).CommonUtils.getScaleSize(22,o)+35:40,justifyContent:'center',alignItems:'center',paddingHorizontal:16,backgroundColor:l.C35.color+l.opacityMap[l.C35.opacity],flexDirection:'row'
}
,confirmUp:{
height:22,alignItems:'center'
}
,confirmDown:{
height:17,alignItems:'center',flexDirection:'row'
}
,confirmScale:{
height:17,flexGrow:0,flexShrink:0,flexBasis:'auto',flexDirection:'row',alignItems:'center'
}
,confirmScalePrice:{
height:17,flexGrow:0,flexShrink:1,flexBasis:'auto',flexDirection:'row',alignItems:'center'
}
,confirmLeft:{
height:40,flexGrow:0,flexShrink:0,flexBasis:'auto',flexDirection:'row',alignItems:'center'
}
,confirmRight:{
height:40,flexGrow:0,flexShrink:0,flexBasis:'auto',flexDirection:'row',alignItems:'center'
}
,confirmPrice:{
height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,flexGrow:0,flexShrink:1,flexBasis:'auto',flexDirection:'row',alignItems:'center'
}
,confirmText:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.C17,l.T10,{
fontWeight:'bold'
}
),T10:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.T10,l.C17,{
fontWeight:'bold'
}
),T8:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.T8,l.C17,{
fontWeight:'bold'
}
),T6:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.T6,l.C17,{
fontWeight:'bold'
}
),T4:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,l.T4,l.C17,{
fontWeight:'bold'
}
),plhBox:{
position:'relative'
}
,plhBoxMp:{
position:'relative',height:28,borderRadius:14,justifyContent:'center',backgroundColor:l.C39.color+l.opacityMap[l.C39.opacity],alignItems:'center'
}
,plh:Object.assign({

}
,l.C13,l.T3,{
height:r(d[1]).CommonUtils.getScaleSize(17,o)+11,lineHeight:r(d[1]).CommonUtils.getScaleSize(17,o)+11,position:'absolute',left:r(d[1]).fontStore.fontMutiple>r(d[1]).FONT_MUTIPLE.FONT_LEVEL_ONE?'40%':'50%',marginLeft:-18,zIndex:-1,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o)
}
),plhHide:{
opacity:0
}
,loadWrap:{
position:r(d[1]).PlatformUtils.isWeb()?'fixed':'relative',top:0,left:0,width:'100%',bottom:0,zIndex:1
}
,recommendShopPrdText:{
fontSize:l.T7.fontSize,color:l.C13.color,opacity:l.C13.opacity,textAlign:'center',marginTop:24,marginBottom:16
}
,shopWrap:{
paddingBottom:8
}
,paddingH8:{
paddingHorizontal:8
}
,titleWrap:{
position:'absolute',left:0,top:0,zIndex:2,opacity:1,width:'100%'
}
,headerTitleWrap:{
zIndex:-1,opacity:0,width:'100%'
}
,filterStickyWrap:{
position:'absolute',left:0,top:56,zIndex:-1,opacity:0,width:'100%',backgroundColor:l.C32.color,marginTop:-.5
}
,productListApk:{
marginTop:0,flex:1
}
,fixBtnWrap:{
position:'absolute',bottom:48,right:16,width:50,height:50
}
,optionHideHeight:{
height:0,overflow:'hidden'
}
,optionMaxHeight:{
maxHeight:r(d[1]).CommonUtils.getScaleSize(25,o)+55,overflow:'hidden'
}
,centralTextStyle:Object.assign({

}
,l.T10,l.C11,{
height:r(d[1]).CommonUtils.getScaleSize(21,o)+19,marginTop:8,lineHeight:r(d[1]).CommonUtils.getScaleSize(21,o)+19,marginLeft:8,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,o)
}
),centralItemStyle:Object.assign({

}
,l.T3,l.C11,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T3.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T3.lineHeight,o)
}
),centralView:{
backgroundColor:'rgba(24,24,26,0.05)',height:r(d[1]).CommonUtils.getScaleSize(17,o)+11,borderRadius:56,justifyContent:'center',alignItems:'center',marginBottom:12
}
,centralViewDark:{
backgroundColor:'rgba(255,255,255,0.10)',height:r(d[1]).CommonUtils.getScaleSize(17,o)+11,borderRadius:56,justifyContent:'center',alignItems:'center',marginBottom:12
}
,iosTitleBar:Object.assign({

}
,l.S32),prdItemSt:{
flex:1
}
,mt16:{
marginTop:16
}
,allSearchBtn:{
height:r(d[1]).CommonUtils.getScaleSize(21,o)+19,backgroundColor:'rgba(24, 24, 26, 0.05)',borderRadius:20,alignItems:'center',justifyContent:'center'
}
,allSearchBtnDark:{
backgroundColor:'rgba(255, 255, 255, 0.1)'
}
,allSearchTxt:Object.assign({

}
,l.C11,l.T10,{
fontWeight:'500',paddingLeft:16,paddingRight:16,fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T10.lineHeight,o)
}
),searchCapsule:{
display:'flex',flexDirection:'row',backgroundColor:l.C32.color,paddingTop:4,height:r(d[1]).CommonUtils.getScaleSize(16,o)+20
}
,searchCapsuleItem:Object.assign({
display:'flex',flexDirection:'row',height:r(d[1]).CommonUtils.getScaleSize(16,o)+12,width:'auto'
}
,l.S2,{
backgroundColor:r(d[1]).CommonUtils.colorRgba(l.C39.color,l.C39.opacity),borderColor:r(d[1]).CommonUtils.colorRgba(l.C39.color,l.C39.opacity),borderWidth:0,borderRadius:20,alignItems:'center',justifyContent:'center',alignContent:'center'
}
),searchCapsuleItemChecked:{
backgroundColor:r(d[1]).CommonUtils.colorRgba(l.C39.color,l.C39.opacity),borderColor:r(d[1]).CommonUtils.colorRgba(l.C11.color,l.C11.opacity),borderWidth:.5
}
,searchCapsuleItemChild:{
flex:1,marginLeft:8,marginRight:8
}
,searchCapsuleItemText:Object.assign({

}
,l.T4,l.C12,{
fontSize:r(d[1]).CommonUtils.getScaleSize(l.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T4.lineHeight,o),fontWeight:'500'
}
),searchCapsuleItemTextChecked:Object.assign({

}
,l.C12),searchCapsuleItemExpand:{
backgroundColor:r(d[1]).CommonUtils.colorRgba(l.C33.color,l.C33.opacity),height:r(d[1]).CommonUtils.getScaleSize(28,o)+8,borderColor:r(d[1]).CommonUtils.colorRgba(l.C33.color,l.C33.opacity),borderBottomRightRadius:0,borderBottomLeftRadius:0,borderWidth:0,paddingTop:0,paddingBottom:8
}
,searchCapsuleItemIcon:{
display:'flex',justifyContent:'center',alignItems:'center',right:6
}
,searchSmallImg:{
width:12,height:12
}
,searchCapsuleItemIconUp:{

}
,searchCapsuleItemIconDown:{

}
,filterCapsuleWrapWeb:{
position:r(d[1]).PlatformUtils.isWeb()?'fixed':'absolute',top:0,left:0,width:'100%',height:'100%',flexDirection:'row',zIndex:9
}
,filterCapsuleWrapAPk:{
position:'absolute',top:0,left:0,width:'100%',bottom:0,flexDirection:'row',zIndex:9
}
,filterCapsuleLowerHalf:{
position:'absolute',top:0,left:0,width:'100%',height:'100%',backgroundColor:r(d[1]).CommonUtils.colorRgba(l.C80.color,l.C80.opacity),flexDirection:'row'
}
,filterCapsuleUpperHalf:{
position:'absolute',top:0,left:0,width:'100%',bottom:0,flexDirection:'row'
}
,filterCapsuleAttrWrap:{
position:'absolute',top:0,left:0,width:'100%',height:'auto',backgroundColor:r(d[1]).CommonUtils.colorRgba(l.C33.color,l.C33.opacity),borderBottomRightRadius:20,borderBottomLeftRadius:20,paddingTop:16,display:'flex'
}
,filterCapsuleAttrFlatList:{
width:'100%',height:'auto',paddingRight:4
}
,capsuleModalRowWrap:{
height:'auto',maxHeight:160,overflow:'scroll'
}
,capsuleModalAttr:{
height:r(d[1]).CommonUtils.getScaleSize(19,o)+12,flexDirection:'row',alignItems:'center'
}
,capsuleModalAttrText:Object.assign({

}
,l.T7,l.C12,{
fontFamily:r(d[1]).PublicFont.fontFamilyBase,textAlign:'left',fontSize:r(d[1]).CommonUtils.getScaleSize(l.T7.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T7.lineHeight,o)
}
),capsuleModalAttrTextChecked:Object.assign({

}
,l.T8,l.C11,{
textAlign:'left',fontFamily:r(d[1]).PublicFont.fontFamilyBase,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T8.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T8.lineHeight,o),fontWeight:'500'
}
),capsuleModalAttrChosed:{
marginLeft:4,width:16,height:24,marginTop:5
}
,capsuleModalAttrChosedImg:{
width:18,height:18
}
,filterCapsuleButtonWrap:{
width:'100%',height:'auto',padding:16,flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',maxWidth:480
}
,filterCapsuleButtonNormal:{
flexGrow:1,flexShrink:1,flexBasis:'auto',width:'50%',marginTop:0
}
,filterCapsuleButtonPad:{
flexGrow:0,flexShrink:0,flexBasis:'auto',marginTop:0
}
,filterCapsuleButtonLeftText:Object.assign({

}
,l.C11,l.T10,{
fontFamily:r(d[1]).PublicFont.fontFamilyMedium,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T10.lineHeight,o),fontWeight:'500'
}
),filterCapsuleButtonConfirmText:Object.assign({

}
,l.C17,l.T10,{
fontFamily:r(d[1]).PublicFont.fontFamilyMedium,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T10.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T10.lineHeight,o),fontWeight:'500'
}
),filterCapsuleButtonConfirmTextMin:Object.assign({

}
,l.C17,l.T4,{
fontFamily:r(d[1]).PublicFont.fontFamilyMedium,fontSize:r(d[1]).CommonUtils.getScaleSize(l.T4.fontSize,o),lineHeight:r(d[1]).CommonUtils.getScaleSize(l.T4.lineHeight,o),fontWeight:'500'
}
),filterCapsuleButtonConfirmLeft:{
flexGrow:0,flexShrink:0,flexBasis:'auto',height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,flexDirection:'row',alignItems:'center'
}
,filterCapsuleButtonConfirmRight:{
flexGrow:0,flexShrink:0,flexBasis:'auto',height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,flexDirection:'row',alignItems:'flex-end',marginBottom:22
}
,filterCapsuleButtonConfirmPrice:{
flexGrow:0,flexShrink:1,flexBasis:'auto',height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,flexDirection:'row',alignItems:'flex-end',marginBottom:22
}
,filterCapsuleButtonSlideBottomTap:{
height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,borderRadius:20,marginTop:8,backgroundColor:l.C39.color+'0c',alignItems:'center',justifyContent:'center'
}
,filterCapsuleButtonSlideBottomTapRight:{
height:r(d[1]).CommonUtils.getScaleSize(22,o)+18,borderRadius:20,marginTop:8,backgroundColor:l.C35.color+l.opacityMap[l.C35.opacity],alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'row',paddingRight:15,paddingLeft:16
}
,categoryCardWrap:{
paddingBottom:4,backgroundColor:'rgba(0, 0, 0, 0)'
}
,iconBackGround:{
backgroundColor:l.S13.backgroundColor,width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:40
}
,line:{
width:1,height:12,backgroundColor:l.S13.backgroundColor
}

}
)
}

}
),"3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
exposeItem_product:function(s){
// 变量
var c: any = t(s);
if('accessory'===s[0].type){
// 变量
var o: any = r(d[0]).accessory.pageId,n=r(d[0]).accessory.pageCatCode,C=r(d[0]).accessory.pageCatName,p=r(d[0]).accessory.resSiteCodeNav,u=r(d[0]).accessory.resSiteNameNav;
return{
isBatch:!0,commonData:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200092006':'100092006',actionName:'\u914d\u4ef6\u7ed3\u679c\u9875\u9876\u90e8\u5bfc\u822a\u6a21\u5757\u66dd\u5149',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:o,pageCatCode:n,pageCatName:C,resSiteCode:p,resSiteName:u
}
,content:c.array
}

}
var N=r(d[0]).searchResult.pageId,y=r(d[0]).searchResult.pageCatCode,E=r(d[0]).searchResult.pageCatName,l=r(d[0]).searchResult.resSiteCodeGuide,T=r(d[0]).searchResult.resSiteNameGuide;
return{
isBatch:!0,commonData:{
actionCode:'920010061',actionName:'\u641c\u7d22\u7ed3\u679c\u9875\u9876\u90e8\u5bfc\u822a\u66dd\u5149',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:N,pageCatCode:y,pageCatName:E,resSiteCode:l,resSiteName:T,pageType:'Search'
}
,content:c.array
}

}
,clickItem:function(t,s){
var c={

}
;
if('accessory'===s){
// 变量
var o: any = r(d[0]).accessory.pageId,n=r(d[0]).accessory.pageCatCode,C=r(d[0]).accessory.pageCatName,p=r(d[0]).accessory.resSiteCodeNav,u=r(d[0]).accessory.resSiteNameNav;
c={
actionCode:r(d[1]).PlatformUtils.isWeb()?'200092005':'100092005',actionName:'\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\u6a21\u5757',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:o,pageCatCode:n,pageCatName:C,resSiteCode:p,resSiteName:u
}

}
else{
var N=r(d[0]).searchResult.pageId,y=r(d[0]).searchResult.pageCatCode,E=r(d[0]).searchResult.pageCatName,l=r(d[0]).searchResult.resSiteNameGuide,T=r(d[0]).searchResult.resSiteCodeGuide;
c={
actionCode:'920010062',actionName:'\u641c\u7d22\u7ed3\u679c\u9875\u9876\u90e8\u5bfc\u822a\u70b9\u51fb',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:t,pageId:N,pageCatCode:y,pageCatName:E,resSiteCode:T,resSiteName:l,pageType:'Search'
}

}
return{
data:c
}

}

}
;
// 函数
function t(t: any): any {
var s;
return{
array:null==t?void 0:t.map((function(c,o){
s={
searchWord:c.searchWord,categoryid:[]
}
,'searchresult'===t[0].type&&(s.attributeid=[]);
var n=c.cardData&&c.cardData.map((function(t){
return String(t.categoryId)
}
));
return c.isPhysicalCategory?s.categoryid=n:'searchresult'===t[0].type&&(s.attributeid=n),s
}
))
}

}

}
),"be6a582bee00f274dcbf27f178ef3f08b0267b0697f39952b47cbb2f1692d869",["6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=r(d[0]).searchResult.pageId,o=r(d[0]).searchResult.pageCatCode,n=r(d[0]).searchResult.pageCatName,s=r(d[0]).searchResult.resSiteNameSort,c=r(d[0]).searchResult.resSiteCodeSort,l=r(d[0]).searchResult.resSiteNameGuide,p=r(d[0]).searchResult.resSiteCodeGuide,u=r(d[0]).searchResult.resSiteNameActivity,C=r(d[0]).searchResult.resSiteCodeActivity,N=r(d[0]).searchResult.resSiteNameFilter,T=r(d[0]).searchResult.resSiteCodeFilter,E=r(d[0]).searchResult.resSiteNameResult,S=r(d[0]).searchResult.resSiteCodeResult,v=r(d[0]).searchResult.resSiteNameBrand,P=r(d[0]).searchResult.resSiteCodeBrand,y=r(d[0]).searchResult.resSiteNameRecommend,h=r(d[0]).searchResult.resSiteCodeRecommend,f=r(d[0]).searchResult.resSiteNameCapsule,_=r(d[0]).searchResult.resSiteCodeCapsule,I=function(t,o){
'shopName'!==t&&(o.Source=r(d[1]).SearchResultStore.source)
}
,R=function(s,c){
var l,p,u,C=r(d[1]).PlatformUtils.isWeb()?'200090401':'100090401';
return{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090401':C,actionName:'\u5546\u54c1\u66dd\u5149',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:s.onPrd?S:h,resSiteName:s.onPrd?E:y,pageType:'Search',content:{
Source:c,searchWord:s.searchWord,searchSort:s.searchSort||'relevance',SKUCode:[null==(l=s.skuCode)?void 0:l.toString()],productId:[null==(p=s.productId)?void 0:p.toString()],location:null==(u=s.index)?void 0:u.toString(),attributeid:s.attributeid||[],attributename:s.attributename||[],ruleId:s.ruleId||'',exposure:'1',type:s.onPrd?'1':'2'
}

}

}
,b={
sort:function(l){
// 变量
var p: any = r(d[1]).PlatformUtils.isWeb()?'200090206':'100090206';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090206':p,actionName:'\u7528\u6237\u70b9\u51fb\u6392\u5e8f\u6309\u94ae\u70b9\u51fb\u7387',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:l,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:c,resSiteName:s,pageType:'Search'
}

}

}
,productTap:function(s){
// 变量
var c: any = S,l=E;
'2'===s.type&&(c=h,l=y);
// 变量
var p: any = r(d[1]).PlatformUtils.isWeb()?'200090102':'100090102';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090102':p,actionName:'\u70b9\u51fb\u5546\u54c1',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:s,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:c,resSiteName:l,pageType:'Search'
}

}

}
,cateCard:function(s){
// 变量
var c: any = r(d[1]).PlatformUtils.isWeb()?'200090203':'100090203';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'400090203':c,actionName:'\u4fbf\u6377\u5206\u7c7b\u70b9\u51fb\u7387',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:s,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:p,resSiteName:l,pageType:'Search'
}

}

}
,filter:function(l){
// 变量
var p: any = r(d[1]).PlatformUtils.isWeb()?'200090201':'100090201';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090201':p,actionName:'\u70b9\u51fb\u7b5b\u9009\u6309\u94ae',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:l,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:c,resSiteName:s,pageType:'Search'
}

}

}
,activity:function(s){
// 变量
var c: any = r(d[1]).PlatformUtils.isWeb()?'200090602':'100090602';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090602':c,actionName:'\u6d3b\u52a8\u6a21\u5757\u70b9\u51fb',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:s,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:C,resSiteName:u,pageType:'Search'
}

}

}
,condition:function(s){
// 变量
var c: any = r(d[1]).PlatformUtils.isWeb()?'200090205':'100090205';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090205':c,actionName:'\u7b5b\u9009\u4fa7\u8fb9\u9875\u7528\u6237\u7b5b\u9009\u6761\u4ef6',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:s,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:T,resSiteName:N,pageType:'Search',categoryid:s.categoryId
}

}

}
,shopName:function(s){
return{
data:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200090304':'100090304',actionName:'\u5e97\u94fa\u540d\u79f0\u70b9\u51fb',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:s,pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:S,resSiteName:E,pageType:'Search'
}

}

}
,brand:function(s){
return{
data:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200090802':'100090802',actionName:'\u4e2d\u90e8\u7cbe\u9009\u54c1\u724c\u70b9\u51fb',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:{
searchWord:null==s?void 0:s.searchWord,brandName:null==s?void 0:s.brandName,brandCode:null==s?void 0:s.brandCode,click:1
}
,pageType:'Search',pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:P,resSiteName:v
}

}

}
,capsule:function(s){
// 变量
var c: any = r(d[1]).PlatformUtils.isWeb()?'200090202':'100090202';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090202':c,actionName:'\u70b9\u51fb\u641c\u7d22\u7ed3\u679c\u9875\u9876\u90e8\u7b5b\u9009\u80f6\u56ca\u65f6\u4e0a\u62a5',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:{
type:null==s?void 0:s.type,typename:null==s?void 0:s.typename,click:'1',Source:null==s?void 0:s.Source,attrId:null==s?void 0:s.attrId
}
,pageType:'Search',pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:_,resSiteName:f
}

}

}
,capsuleItem:function(s){
// 变量
var c: any = r(d[1]).PlatformUtils.isWeb()?'200090204':'100090204';
return{
data:{
actionCode:r(d[1]).PlatformUtils.isMp()?'100090204':c,actionName:'\u70b9\u51fb\u641c\u7d22\u7ed3\u679c\u9875\u9876\u90e8\u7b5b\u9009\u80f6\u56ca\u91cc\u9762\u7684\u679a\u4e3e\u503c\u65f6\u4e0a\u62a5',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:{
type:null==s?void 0:s.type,Source:null==s?void 0:s.Source,typename:null==s?void 0:s.typename,id:null==s?void 0:s.id,idname:null==s?void 0:s.idname,click:'1',attrId:null==s?void 0:s.attrId,brandcode:null==s?void 0:s.brandcode
}
,pageType:'Search',pageId:t,pageCatCode:o,pageCatName:n,resSiteCode:_,resSiteName:f
}

}

}
,search:function(t){
return{
data:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200091003':'100091003',actionName:'\u70b9\u51fbtitle\u641c\u7d22\u6309\u94ae',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:{
searchWord:null==t?void 0:t.searchWord,type:null==t?void 0:t.type,urlType:null==t?void 0:t.urlType,click:null==t?void 0:t.click
}
,pageType:'Search',pageId:r(d[0]).contentResult.pageId,pageCatCode:r(d[0]).contentResult.pageCatCode,pageCatName:r(d[0]).contentResult.pageCatName,resSiteCode:r(d[0]).contentResult.resSiteCodeBox,resSiteName:r(d[0]).contentResult.resSiteNameBox
}

}

}

}
;
e.default={
exposeItem_product:function(t){
// 变量
var o: any = r(d[1]).SearchResultStore.source;
return{
isBatch:!0,content:{
array:null==t?void 0:t.map((function(t,n){
var s;
return'recommend'===t.type?{
Source:o,name:(null==(s=t[0])?void 0:s.type)||''
}
:'product'===t.type?R(t,o):void 0
}
))
}
.array
}

}
,clickItem:function(t,o){
I(o,t);
// 变量
var n: any = b[o];
if(n)return n(t)
}

}

}
),"19febc502c7586312e952efafb6fd84d6d65074ffde488072f920050453b0e32",["6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,_i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),i=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),o=r(d[0])(r(d[6])),s=r(d[7]),p=r(d[0])(r(d[8])),u=r(d[0])(r(d[9])),c=r(d[0])(r(d[10]));
// 函数
function h(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(h=function(){
return!!e
}
)()
}
var f={
viewAreaCoveragePercentThreshold:95,waitForInteraction:!0
}
,v=0;
r(d[11]).PlatformUtils.isIOS()&&r(d[11]).DeviceUtils.getStatusBarHeight().then((function(e){
v=e||0
}
));
var C=256,y=(function(y){
// 函数
function I(t: any): any {
var l,p,c,f;
(0,e.default)(this,I),p=this,c=I,f=[t],c=(0,n.default)(c),(l=(0,i.default)(p,h()?Reflect.construct(c,f||[],(0,n.default)(p).constructor):c.apply(p,f))).wapTimer=null,l.wapTimer2=null,l._dealCapsuleData=function(e){
var t,i,n=e.categoryIndex,l=e.categoryFilterList,o=e.brandfilterList,s=[];
if(u.default.size(o)>1){
var p={
type:'brandFilter',name:'\u54c1\u724c',child:o.map((function(e){
return{
id:e.brandCode,value:e.brandName
}

}
))
}
;
s.push(p)
}
(-1===n&&(n=0),u.default.size(l)>0)&&(null==(t=l[n])||null==(i=t.specAttrList)||i.forEach((function(e){
if(u.default.size(null==e?void 0:e.attrEnumList)>1){
var t={
type:'specAttr',name:null==e?void 0:e.attrName,attrId:null==e?void 0:e.attrId,child:null==e?void 0:e.attrEnumList
}
;
s.push(t)
}

}
)));
return s.slice(0,5)
}
,l.clickCapsule=u.default.debounce((function(e,t){
l.props.updateCapsuleData({
productCapsuleHeight:2e3
}
,!1,(function(){
if(r(d[11]).PlatformUtils.isMp()){
var n,o=71*(null==(n=l.props)?void 0:n.activeContentLength);
(r(d[11]).PlatformUtils.isWx()?wx:my).createSelectorQuery().select('#myView').boundingClientRect().exec((function(n){
// 变量
var l: any = n[0],s=l.top,p=l.height;
i((s||0)+o,p||0,t,e)
}
))
}
l.myView.measure((function(n,l,o,s,p,u){
i(u,s,t,e)
}
))
}
));
var i=function(e,t,i,n){
var o,s=l.getMapsuleModalTop(e,t),p={
type:String(i+1),typename:n.name||'',attrId:(null==(o=n.attrId)?void 0:o.toString())||''
}
;
l.props.clickItem(p,'capsule'),l.props.height-s-v-C<20?(l.props.scrollTop&&'function'==typeof l.props.scrollTop&&l.props.scrollTop(s+v+C+20-l.props.height),l.wapTimer&&clearTimeout(l.wapTimer),l.wapTimer=setTimeout((function(){
r(d[11]).PlatformUtils.isMp()&&(r(d[11]).PlatformUtils.isWx()?wx:my).createSelectorQuery().select('#myView').boundingClientRect().exec((function(e){
var t,l,o=(null==(t=e[0])?void 0:t.top)||0,s=(null==(l=e[0])?void 0:l.height)||0,p=this.getMapsuleModalTop(o,s);
this.clickCapsuleCommon(i,p,n)
}
));
l.myView.measure((function(e,t,o,s,p,u){
// 变量
var c: any = l.getMapsuleModalTop(u,s);
l.clickCapsuleCommon(i,c,n)
}
))
}
),r(d[11]).PlatformUtils.isWeb()?600:300)):l.clickCapsuleCommon(i,s,n)
}

}
),200),l.clickCapsuleCommon=function(e,t,i){
var n;
r(d[11]).PlatformUtils.isHarmony()||r(d[11]).PlatformUtils.isWeb()?l.props.updateCapsuleData({
currentCapsuleIndex:e,capsuleModalTop:t,isScrollWeb:!1
}
,!1,(function(){
l.props.initCapsuleData(i)
}
)):(l.props.updateCapsuleData({
currentCapsuleIndex:e,capsuleModalTop:t,isScrollWeb:!1
}
),l.props.initCapsuleData(i)),l.props.onSlideShowTap(!0),null==(n=l.searchSapsuleView.current)||n.scrollToIndex({
index:e,animated:!0,viewPosition:1
}
)
}
,l.getMapsuleModalTop=function(e,t){
return r(d[11]).PlatformUtils.isApp()?e+t-v:r(d[11]).PlatformUtils.isMp()?e+t:e+t-1
}
,l.changeCapsuleModalTop=function(e){
// 变量
var t: any = l.props,i=t.currentCapsuleIndex,n=t.capsuleType;
-1!==i&&e===n&&l.props.updateCapsuleData({
isCapsuleModalHide:!0
}
,!1,(function(){
l.wapTimer&&clearTimeout(l.wapTimer),l.wapTimer=setTimeout((function(){
l.myView.measure((function(e,t,i,n,o,s){
// 变量
var p: any = l.getMapsuleModalTop(s,n);
l.props.height-p-v-C<20?(l.props.scrollTop&&l.props.scrollTop(p+v+C+20-l.props.height),l.wapTimer2&&clearTimeout(l.wapTimer2),l.wapTimer2=setTimeout((function(){
l.myView.measure((function(e,t,i,n,o,s){
// 变量
var p: any = l.getMapsuleModalTop(s,n);
l.props.updateCapsuleData({
capsuleModalTop:p,isCapsuleModalHide:!1
}
)
}
))
}
),300)):l.props.updateCapsuleData({
capsuleModalTop:p,isCapsuleModalHide:!1
}
)
}
))
}
),300)
}
))
}
,l._getCapsuleItemWidth=function(){
return(l.props.width-4*(l.props.isPad?12:8))/5
}
,l.getStingSize=function(e){
for(var t=0,i=0;
i<e.length;
i++){
new RegExp("[\\u4E00-\\u9FFF]+",'g').test(e[i])?t+=2:t+=1
}
return t
}
,l.splitSting=function(e,t){
for(var i=0,n=[],l=0;
l<e.length;
l++){
if(new RegExp("[\\u4E00-\\u9FFF]+",'g').test(e[l])?i+=2:i+=1,n.push(e[l]),i>=t)break
}
return n.join('')
}
,l.isChecked=function(e){
var t=l.props,i=t.specAttrSelect,n=void 0===i?{

}
:i,o=t.brandFilter,s=void 0===o?[]:o,p=t.pivotalAttrSelect,u=void 0===p?{

}
:p,c=[];
return'brandFilter'===e.type?c=s:'pivotalAttr'===e.type?c=u[null==e?void 0:e.attrId]||[]:'specAttr'===e.type&&(c=n[null==e?void 0:e.attrId]||[]),c.length>0
}
,l.getAttrSelectName=function(e,t){
var i,n,o=l.props,s=o.specAttrSelect,p=void 0===s?{

}
:s,u=o.brandFilter,c=void 0===u?[]:u,h=o.pivotalAttrSelect,f=void 0===h?{

}
:h,v=l.state.data,C=[];
if('brandFilter'===e.type?C=c:'pivotalAttr'===e.type?C=f[null==e?void 0:e.attrId]||[]:'specAttr'===e.type&&(C=p[null==e?void 0:e.attrId]||[]),0===C.length)return e.name;
// 变量
var y: any = [],I='';
null==(i=v[t])||null==(n=i.child)||n.forEach((function(e){
C.includes(e.id)&&y.push(e.value)
}
)),I=y.join(',');
// 变量
var w: Record<string, any> = l.getStingSize(e.name);
return l.getStingSize(I)>w&&(I=l.splitSting(I,w-2),I+='...'),I
}
,l.marginValue=function(){
// 变量
var e: any = 16,t=8,i=l.props,n=i.isPad,o=i.isPadHorizontal;
return o?(e=32,t=16):n&&!o?(e=24,t=12):(e=16,t=8),{
pageMarginValue:e,marginRightValue:t
}

}
,l.renderItem=function(e,t,i){
// 变量
var n: any = e.item,o=e.index,p=l.state.data,u=l.props.currentCapsuleIndex,c=l.isChecked(n)?t.searchCapsuleItemChecked:null,h=l.marginValue().pageMarginValue,f=l.marginValue().marginRightValue;
return(0,r(d[12]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
l.clickCapsule(n,o)
}
,style:[t.searchCapsuleItem,u===o?t.searchCapsuleItemExpand:c,{
marginLeft:0===o?h:0,marginRight:o!==p.length-1?f:h
}
],testID:"searchresult-"+o,nativeID:"searchresult-"+o,children:[(0,r(d[12]).jsx)(s.View,{
style:t.searchCapsuleItemChild,children:(0,r(d[12]).jsx)(s.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[t.searchCapsuleItemText,u===o||l.isChecked(n)?t.searchCapsuleItemTextChecked:null],children:u!==o&&l.isChecked(n)?l.getAttrSelectName(n,o):n.name
}
)
}
),l.renderSpinnerIcon(o,t,i,n)]
}
,"searchSapsule_"+o.toString()+"_button")
}
;
// 变量
var y: any = l._dealCapsuleData(t);
return l.state={
data:y
}
,l.searchSapsuleView=o.default.createRef(),l
}
return(0,l.default)(I,y),(0,t.default)(I,[{
key:"UNSAFE_componentWillMount",value:function(){
r(d[11]).PlatformUtils.isMp()||(this._panResponder=s.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(){
return!0
}

}
),this._panResponderApk=s.PanResponder.create({
onMoveShouldSetPanResponderCapture:function(){
return!1
}

}
))
}

}
,{
key:"componentDidMount",value:function(){
this.props.onRef&&this.props.onRef(this)
}

}
,{
key:"componentDidUpdate",value:function(e){
// 变量
var t: any = this;
if(e.categoryIndex!==this.props.categoryIndex||e.brandfilterList!==this.props.brandfilterList||e.categoryFilterList!==this.props.categoryFilterList){
// 变量
var i: any = this._dealCapsuleData(this.props);
this.setState({
data:i
}
,(function(){
var e;
-1===t.props.currentCapsuleIndex&&(null==(e=t.searchSapsuleView.current)||e.scrollToOffset({
offset:0,animated:!1
}
))
}
))
}

}

}
,{
key:"componentWillUnmount",value:function(){
this.wapTimer&&clearTimeout(this.wapTimer),this.wapTimer2&&clearTimeout(this.wapTimer2)
}

}
,{
key:"renderSpinnerIcon",value:function(e,t,i,n){
return this.props.currentCapsuleIndex===e?(0,r(d[12]).jsx)(s.View,{
style:[t.searchCapsuleItemIcon,t.searchCapsuleItemIconUp],children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:c.default.searchSmallUpRed,imgStyle:t.searchSmallImg
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
normalCol:i.C23.color,opacity:i.C23.opacity,iconName:'ic_spinner_small_up',width:12,height:12
}
)
}
):this.isChecked(n)?(0,r(d[12]).jsx)(s.View,{
style:[t.searchCapsuleItemIcon,t.searchCapsuleItemIconDown],children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:c.default.searchSmallDownRed,imgStyle:t.searchSmallImg
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
normalCol:i.C23.color,opacity:i.C23.opacity,iconName:'ic_spinner_small_down',width:12,height:12
}
)
}
):(0,r(d[12]).jsx)(s.View,{
style:[t.searchCapsuleItemIcon,t.searchCapsuleItemIconDown],children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:c.default.searchSmallDown,imgStyle:t.searchSmallImg
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
normalCol:i.C23.color,opacity:i.C23.opacity,iconName:'ic_spinner_small_down',width:12,height:12
}
)
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state.data;
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:p.default,children:function(i,n){
var l;
return l=r(d[11]).PlatformUtils.isMp()?{

}
:r(d[11]).PlatformUtils.isWeb()?e._panResponder.panHandlers:e._panResponderApk.panHandlers,(0,r(d[12]).jsx)(s.View,Object.assign({

}
,l,{
style:i.searchCapsule,ref:function(t){
return e.myView=t
}
,id:"myView",children:(0,r(d[12]).jsx)(s.FlatList,{
ref:e.searchSapsuleView,horizontal:!0,showsHorizontalScrollIndicator:!1,data:t,initialNumToRender:t.length,viewabilityConfig:f,keyExtractor:function(e,t){
return"searchSapsule_"+t.toString()+"_button"
}
,extraData:e.props,renderItem:function(t){
// 变量
var l: any = t.item,o=t.index;
return e.renderItem({
item:l,index:o
}
,i,n)
}
,onScrollToIndexFailed:function(t){
new Promise((function(e){
return setTimeout(e,500)
}
)).then((function(){
var i;
null==(i=e.searchSapsuleView.current)||i.scrollToIndex({
index:t.index,animated:!1,viewPosition:1
}
)
}
))
}

}
)
}
))
}

}
)
}

}
])
}
)(o.default.PureComponent);
_e.default=y
}
),"24748c9a2be27938d63185b5554cdf24a7c4c624adb17100904631e49191e5cd",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),l=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),s=r(d[0])(r(d[5])),o=r(d[0])(r(d[6])),u=r(d[7]),p=r(d[0])(r(d[8])),c=r(d[0])(r(d[9])),f=r(d[0])(r(d[10]));
// 函数
function v(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(v=function(){
return!!t
}
)()
}
var h=(function(h){
// 函数
function y(e: any): any {
var s,p,h,C;
return(0,t.default)(this,y),p=this,h=y,C=[e],h=(0,n.default)(h),(s=(0,l.default)(p,v()?Reflect.construct(h,C||[],(0,n.default)(p).constructor):h.apply(p,C))).isUpdateCapsuleData=!0,s.initCapsuleData=function(t){
var e=t,l=[],n=s.props,o=n.pivotalAttrSelect,u=void 0===o?{

}
:o,p=n.specAttrSelect,c=void 0===p?{

}
:p,f=n.brandFilter,v=n.currentCapsuleIndex;
v>=0&&('brandFilter'===t.type?l=f||[]:'pivotalAttr'===t.type?l=u[null==t?void 0:t.attrId]||[]:'specAttr'===t.type&&(l=c[null==t?void 0:t.attrId]||[])),s.setState({
capsuleData:e,attrSelect:l
}
,(function(){
var t;
v>=0&&(null==(t=s.searchSapsuleFlatListView.current)||t.scrollToOffset({
offset:0,animated:!1
}
))
}
))
}
,s.selectAttr=function(t){
if(s.isUpdateCapsuleData){
s.isUpdateCapsuleData=!1,s.wapTimer&&clearTimeout(s.wapTimer),s.wapTimer=setTimeout((function(){
s.isUpdateCapsuleData=!0
}
),200);
// 变量
var e: any = s.state,l=e.attrSelect,n=e.capsuleData;
l.includes(t.id)?c.default.remove(l,(function(e){
return e===t.id
}
)):l.push(t.id);
// 变量
var o: any = JSON.parse(JSON.stringify(l));
s.setState({
attrSelect:o
}
),s.updateCapsuleData(n,o,t)
}

}
,s.updateCapsuleData=c.default.debounce((function(t,e,l){
var n,o,u,p,c,f,v=s.props,h=v.brandFilter,y=v.categoryIndex,C=s.props,x=C.pivotalAttrSelect,S=void 0===x?{

}
:x,T=C.specAttrSelect,b=void 0===T?{

}
:T,j=C.currentCapsuleIndex;
'brandFilter'===t.type?h=e:'pivotalAttr'===t.type?S[t.attrId]=e:'specAttr'===t.type&&(b[t.attrId]=e),-1===y&&(y=0),s.props.updateCapsuleData({
pivotalAttrSelect:S,specAttrSelect:b,brandFilter:h,categoryIndex:y
}
,!0);
var w={
type:null==(n=j+1)?void 0:n.toString(),typename:(null==(o=t.name)?void 0:o.toString())||'',id:(null==(u=l.id)?void 0:u.toString())||'',idname:(null==(p=l.value)?void 0:p.toString())||'',attrId:(null==(c=t.attrId)?void 0:c.toString())||'',brandcode:'brandFilter'===t.type?null==(f=l.id)?void 0:f.toString():''
}
;
s.props.clickItem(w,'capsuleItem')
}
),100),s.closeModal=function(){
s.wapTimer&&clearTimeout(s.wapTimer),s.wapTimer=setTimeout((function(){
s.props.updateCapsuleData({
currentCapsuleIndex:-1,productCapsuleHeight:0
}
),s.props.onSlideShowTap(!1)
}
),200)
}
,s.getPrice=function(t){
var e,l=s.props.totalCount,n=void 0===l?0:l;
return e=(0,r(d[11]).t)('unit_piece').replace(' ','').split('%d'),(0,r(d[12]).jsxs)(r(d[12]).Fragment,{
children:[(0,r(d[12]).jsx)(u.View,{
style:[t.filterCapsuleButtonConfirmLeft,{
marginRight:5
}
],children:(0,r(d[12]).jsx)(u.Text,{
style:t.filterCapsuleButtonConfirmText,ellipsizeMode:'tail',numberOfLines:1,children:(0,r(d[11]).t)('confirm')
}
)
}
),(0,r(d[12]).jsx)(u.View,{
style:[t.filterCapsuleButtonConfirmRight],children:(0,r(d[12]).jsxs)(u.Text,{
style:t.filterCapsuleButtonConfirmTextMin,ellipsizeMode:'tail',numberOfLines:1,children:["(",e[0]]
}
)
}
),(0,r(d[12]).jsx)(u.View,{
style:[t.filterCapsuleButtonConfirmPrice],children:(0,r(d[12]).jsx)(u.Text,{
style:t.filterCapsuleButtonConfirmTextMin,ellipsizeMode:'tail',numberOfLines:1,children:String(n)
}
)
}
),(0,r(d[12]).jsx)(u.View,{
style:[t.filterCapsuleButtonConfirmRight],children:(0,r(d[12]).jsxs)(u.Text,{
style:t.filterCapsuleButtonConfirmTextMin,ellipsizeMode:'tail',numberOfLines:1,children:[e[1],")"]
}
)
}
)]
}
)
}
,s.resetTap=function(){
var t=s.state.capsuleData,e=s.props,l=e.pivotalAttrSelect,n=void 0===l?{

}
:l,o=e.specAttrSelect,u=void 0===o?{

}
:o,p=e.labelContentSelect,c=void 0===p?{

}
:p,f=e.categoryIndex,v=s.props.brandFilter,h=void 0===v?[]:v,y=[];
s.setState({
attrSelect:y
}
,(function(){
'brandFilter'===t.type?h=y:'pivotalAttr'===t.type?n[null==t?void 0:t.attrId]=y:'specAttr'===t.type&&(u[null==t?void 0:t.attrId]=y);
var e={

}
;
s._isDataEmpty(n)&&s._isDataEmpty(u)&&s._isDataEmpty(c)&&0===f&&(e={
categoryIndex:-1
}
),s.props.updateCapsuleData(Object.assign({
pivotalAttrSelect:n,specAttrSelect:u,brandFilter:h
}
,e),!0)
}
))
}
,s._isDataEmpty=function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{

}
,e=!0;
for(var l in t)if(!c.default.isEmpty(t[l])){
e=!1;
break
}
return e
}
,s.renderItem=function(t,e,l,n,o){
// 变量
var p: any = s.state.attrSelect,c=(s.props.width-12*(o-1))/o;
return(0,r(d[12]).jsxs)(u.TouchableOpacity,{
style:[n.capsuleModalAttr,{
width:c,marginRight:(e+1)%o!=0?12:0
}
],onPress:function(){
s.selectAttr(t)
}
,activeOpacity:1,children:[(0,r(d[12]).jsx)(u.Text,{
ellipsizeMode:'tail',numberOfLines:1,style:null!=p&&p.includes(t.id)?[n.capsuleModalAttrTextChecked,{
maxWidth:c-24
}
]:n.capsuleModalAttrText,children:t.value
}
),null!=p&&p.includes(t.id)?(0,r(d[12]).jsx)(u.View,{
style:n.capsuleModalAttrChosed,children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:f.default.searchChosed,imgStyle:n.capsuleModalAttrChosedImg
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
normalCol:l.C11.color,opacity:l.C11.opacity,iconName:'ic-chosed',width:18,height:18
}
)
}
):null]
}
)
}
,s._renderScroll=function(t){
return r(d[11]).PlatformUtils.isWeb()?(0,r(d[12]).jsx)(u.View,Object.assign({

}
,t)):(0,r(d[12]).jsx)(u.ScrollView,Object.assign({

}
,t,{
removeClippedSubviews:!1
}
))
}
,s.marginValue=function(){
// 变量
var t: any = s.props,e=t.isPad,l=t.isPadHorizontal;
return l?32:e&&!l?24:16
}
,s.state={
capsuleData:[],attrSelect:[]
}
,s.searchSapsuleFlatListView=o.default.createRef(),s
}
return(0,s.default)(y,h),(0,e.default)(y,[{
key:"componentDidMount",value:function(){
this.props.onRef&&this.props.onRef(this)
}

}
,{
key:"componentWillUnmount",value:function(){
this.wapTimer&&clearTimeout(this.wapTimer)
}

}
,{
key:"render",value:function(){
// 变量
var t: any = this,e=this.state.capsuleData,l=this.props,n=l.sortFieldList,s=l.isPad,o=l.isPadHorizontal,c=l.isCapsuleModalHide,f=this.marginValue(),v=44;
null!=n&&n.length&&(v+=40);
// 变量
var h: any = this.getNumColumns(s,o);
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:p.default,children:function(l,n){
return c?null:(0,r(d[12]).jsxs)(r(d[12]).Fragment,{
children:[t.props.capsuleModalTop>v?(0,r(d[12]).jsx)(u.View,{
pointerEvents:"auto",style:[r(d[11]).PlatformUtils.isApp()?l.filterCapsuleWrapAPk:l.filterCapsuleWrapWeb,{
height:t.props.capsuleModalTop-v
}
],children:(0,r(d[12]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
t.closeModal()
}
,style:l.filterCapsuleUpperHalf
}
)
}
):null,(0,r(d[12]).jsxs)(u.View,{
pointerEvents:"auto",style:[r(d[11]).PlatformUtils.isApp()?l.filterCapsuleWrapAPk:l.filterCapsuleWrapWeb,{
top:t.props.capsuleModalTop
}
],children:[(0,r(d[12]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
t.closeModal()
}
,style:l.filterCapsuleLowerHalf
}
),(0,r(d[12]).jsxs)(u.View,{
style:l.filterCapsuleAttrWrap,children:[(0,r(d[12]).jsx)(u.View,{
style:[l.filterCapsuleAttrFlatList,{
paddingLeft:f
}
],children:(0,r(d[12]).jsx)(u.FlatList,{
ref:t.searchSapsuleFlatListView,horizontal:!1,initialNumToRender:(null==e||null==(s=e.child)?void 0:s.length)||0,style:l.capsuleModalRowWrap,numColumns:h,data:(null==e?void 0:e.child)||[],removeClippedSubviews:!0,renderItem:function(e){
// 变量
var s: any = e.item,o=e.index;
return t.renderItem(s,o,n,l,h)
}
,extraData:t.props,keyExtractor:function(t,e){
return"searchSapsuleModal_"+e.toString()+"_button"
}
,bounces:!1,overScrollMode:"never",indicatorStyle:"black"
}
,'grid'+h)
}
),(0,r(d[12]).jsxs)(u.View,{
style:[l.filterCapsuleButtonWrap],children:[(0,r(d[12]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:t.resetTap,style:[l.filterCapsuleButtonSlideBottomTap,l.filterCapsuleButtonNormal],children:(0,r(d[12]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[l.filterCapsuleButtonLeftText],children:(0,r(d[11]).t)('reset')
}
)
}
),(0,r(d[12]).jsx)(u.TouchableOpacity,{
activeOpacity:1,onPress:t.closeModal,style:[l.filterCapsuleButtonSlideBottomTapRight,l.filterCapsuleButtonNormal,{
marginLeft:12
}
],children:t.getPrice(l)
}
)]
}
)]
}
)]
}
)]
}
);
var s
}

}
)
}

}
,{
key:"getNumColumns",value:function(t,e){
// 变量
var l: any = 2;
return t&&(l=e?4:3),l
}

}
])
}
)(o.default.PureComponent);
_e.default=h
}
),"02bc0776fb6b2131fb6170122f07b64405f7cd464a8717bf2ea745a517294b5a",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),n=r(d[0])(r(d[3])),o=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),c=r(d[0])(r(d[6])),s=r(d[0])(r(d[7])),u=r(d[8]),f=r(d[0])(r(d[9])),p=r(d[0])(r(d[10]));
// 函数
function h(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(h=function(){
return!!e
}
)()
}
var y=(function(s){
// 函数
function p(t: any): any {
var l,c,s,f;
return(0,e.default)(this,p),c=this,s=p,f=[t],s=(0,o.default)(s),(l=(0,n.default)(c,h()?Reflect.construct(s,f||[],(0,o.default)(c).constructor):s.apply(c,f))).visiableItemList=[],l.itemlist=[],l._onScrollMomentEnd=function(){
l.scrollTimer&&clearTimeout(l.scrollTimer),l.scrollTimer=setTimeout((function(){
l.exposeItem_product(l.visiableItemList)
}
),500)
}
,l.recommendTap=function(e){
var t,n=r(d[11]).PlatformUtils.isMp()?e.mpOpenURL:e.wapOpenURL,o=(r(d[11]).PlatformUtils.isApp()?e.openURL:n)||'',c={
name:null==(t=e.name)?void 0:t.toString(),gotoUrl:null==o?void 0:o.toString()
}
;
l.props.clickItem(c,'activity'),r(d[11]).EventTracking.execReportData('',!0);
r(d[11]).CommonUtils.delayGotoPage((function(){
r(d[11]).RouterUtils.gotoPage(o)
}
))
}
,l.currRef=function(e){
'function'==typeof l.props.receiveRef&&l.props.receiveRef(e)
}
,l.receiveRef=function(e,t){
l.itemlist=[],e&&(e.exposeObj=t,l.itemlist.push(e))
}
,l.paddingValue=function(){
// 变量
var e: any = l.props,t=e.isPad,n=e.isPadHorizontal;
return n?32:t&&!n?24:16
}
,l.renderItem=function(e){
// 变量
var t: any = e.item,n=e.index,o=l.mstyles,c=l.props.DarkStore;
return(0,r(d[12]).jsx)(u.View,{
ref:function(e){
return l.receiveRef(e,t)
}
,style:{
backgroundColor:'rgba(0, 0, 0, 0)'
}
,children:(0,r(d[12]).jsxs)(u.TouchableOpacity,{
ref:l.currRef,onPress:function(){
l.recommendTap(t)
}
,style:[o.container,o.recommend,{
paddingHorizontal:l.paddingValue()
}
],children:[(0,r(d[12]).jsx)(r(d[12]).Fragment,{
children:(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgStyle:[o.recommendImg],imgUri:t.photoPath
}
)
}
),(0,r(d[12]).jsxs)(u.View,{
style:[o.right,{
borderColor:c?r(d[11]).SuitStyle.C17.color+'0c':r(d[11]).SuitStyle.C15.color+'0c'
}
],children:[(0,r(d[12]).jsxs)(u.View,{
style:[o.middleC,{
wordBreak:'break-all'
}
],children:[(0,r(d[12]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[o.titleN],children:t.name
}
),(0,r(d[12]).jsx)(u.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:[o.titleC],children:t.bewrite
}
)]
}
),(0,r(d[12]).jsx)(u.View,{
style:!r(d[11]).PlatformUtils.isMp()&&{
marginRight:-14
}
,children:r(d[11]).PlatformUtils.isMp()?(0,r(d[12]).jsx)(r(d[13]).FastImageView,{
imgUri:r(d[13]).ImageArray.arrowRightSvg,imgStyle:o.imgArrow
}
):(0,r(d[12]).jsx)(r(d[13]).SvgIcon,{
normalCol:c?r(d[11]).SuitStyle.C25.color:r(d[11]).SuitStyle.C24.color,opacity:r(d[11]).SuitStyle.C24.opacity,iconName:'ic_public_arrow_right_rec',width:24,height:24
}
)
}
)]
}
)]
}
,n)
}
)
}
,l.state={
receiveStates:-1,recData:[]
}
,l.handleViewableItemsChanged=l.handleVisiableChange.bind(l),l
}
return(0,l.default)(p,s),(0,t.default)(p,[{
key:"componentDidMount",value:function(){
this.setState({
recData:this.props.data||[]
}
)
}

}
,{
key:"handleVisiableChange",value:function(e){
var t=this,n=(e||{

}
).changed;
this.visiableItemList=c.default.filter(n,(function(e){
e.isViewable&&t.exposeItem_product([e])
}
))
}

}
,{
key:"exposeItem_product",value:function(e){

}

}
,{
key:"UNSAFE_componentWillMount",value:function(){
this.scrollTimer&&this.scrollTimer.remove()
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state.recData;
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:f.default,children:function(n){
return e.mstyles=n,(0,r(d[12]).jsx)(r(d[12]).Fragment,{
children:t.map((function(t,n){
return e.renderItem({
item:t,index:n
}
)
}
))
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
_e.default=(0,r(d[11]).componentautoscaling)((0,r(d[11]).monitor)(p.default)((0,r(d[11]).itemExposeHoc)(y)))
}
),"ee8b2c580e2d63e0e36e058154be4aed1c50890d38825ade9daf3ca40d93f3f2",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","3ee6f6dd0a3a35be40bf4e9cf96faf0791a51b342fef1888902258e2e3862a24","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
exposeItem_product:function(t){
var o=r(d[0]).SearchResultStore.source,s=r(d[1]).searchResult.pageId,c=r(d[1]).searchResult.pageCatCode,u=r(d[1]).searchResult.pageCatName,n=r(d[1]).searchResult.resSiteNameActivity,l=r(d[1]).searchResult.resSiteCodeActivity,p={
array:null==t?void 0:t.map((function(t,s){
return{
Source:o,name:(null==t?void 0:t.name)||''
}

}
))
}
,C=r(d[0]).PlatformUtils.isWeb()?'200090601':'100090601';
return{
isBatch:!0,commonData:{
actionCode:r(d[0]).PlatformUtils.isMp()?'100090601':C,actionName:'\u6d3b\u52a8\u6a21\u5757\u66dd\u5149',eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:s,pageCatCode:c,pageCatName:u,resSiteCode:l,resSiteName:n,pageType:'Search'
}
,content:p.array
}

}

}

}
),"3ee6f6dd0a3a35be40bf4e9cf96faf0791a51b342fef1888902258e2e3862a24",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),i=_r(d[0])(_r(d[3])),a=_r(d[0])(_r(d[4])),r=_r(d[0])(_r(d[5])),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = u(t);
if(i&&i.has(e))return i.get(e);
var a={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var s in e)if("default"!==s&&{

}
.hasOwnProperty.call(e,s)){
// 变量
var o: any = r?Object.getOwnPropertyDescriptor(e,s):null;
o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]
}
return a.default=e,i&&i.set(e,a),a
}
)(_r(d[6])),o=_r(d[7]),l=_r(d[0])(_r(d[8])),n=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10]));
// 函数
function u(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(u=function(e){
return e?i:t
}
)(e)
}
// 函数
function h(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(h=function(){
return!!e
}
)()
}
var p=(function(s){
// 函数
function u(t: any): any {
var r,s,l,p;
return(0,e.default)(this,u),s=this,l=u,p=[t],l=(0,a.default)(l),(r=(0,i.default)(s,h()?Reflect.construct(l,p||[],(0,a.default)(s).constructor):l.apply(s,p))).cidTime=null,r.cidListener=null,r.isMpClick=!1,r.isSeachButtonClick=!1,r.isSmall=function(){
// 变量
var e: any = _r(d[11]).PlatformUtils.isApp()?_r(d[11]).ScreenMode.width:o.Dimensions.get('window').width;
return'small'===(0,_r(d[11]).screenSize)(e)
}
,r.searchTap=function(){
var e,t;
if(r.isSeachButtonClick)r.isSeachButtonClick=!1;
else if(!_r(d[11]).PlatformUtils.isMp()||!r.isMpClick){
_r(d[11]).PlatformUtils.isMp()&&(r.isMpClick=!0);
// 变量
var i: any = r.props.searchWord,a=n.default.join(i,' ');
if(r.props.reportPageLeave(),_r(d[11]).PlatformUtils.isWeb()&&'SearchPage'!==(null==(e=r.props)||null==(t=e.navigation)?void 0:t.defaultRoute))window.history.go(-1);
else if(_r(d[11]).PlatformUtils.isMp())r.props.navigation.redirectTo('SearchDefault',{
arrKeyWord:a
}
);
else if(_r(d[11]).SearchResultStore.updateRouteName('SearchDefault'),_r(d[11]).PlatformUtils.isIOS())r.props.navigation.replace('SearchDefault',{
iosFlag:!0,pageSource:'searchResult'
}
);
else{
if(_r(d[11]).PlatformUtils.isHarmony()){
// 变量
var s: any = r.props.otherParams.uniqueId;
_r(d[11]).RnBridge.invokeVmallNative('search','refreshWord',{
content:a,uniqueId:s
}
),_r(d[11]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!0,uniqueId:s
}
)
}
r.props.navigation.replace('SearchDefault',{
pageSource:'searchResult'
}
)
}
_r(d[11]).SearchResultStore.onUpdate(a),!_r(d[11]).PlatformUtils.isMp()&&o.DeviceEventEmitter.emit('UPDATE_USER_DATA',a)
}

}
,r.updateContent=function(){
r.isSeachButtonClick=!0,r.props.searchClick()
}
,r.cancelClick=function(){
var e,t;
if(r.props.reportPageLeave(),_r(d[11]).PlatformUtils.isWeb()&&'SearchPage'!==(null==(e=r.props)||null==(t=e.navigation)?void 0:t.defaultRoute)?window.history.go(-1):_r(d[11]).PlatformUtils.isMp()?r.props.navigation.goBack():(_r(d[11]).SearchResultStore.updateRouteName('SearchDefault'),_r(d[11]).PlatformUtils.isIOS()?r.props.navigation.replace('SearchDefault',{
iosFlag:!0
}
):r.props.navigation.replace('SearchDefault')),_r(d[11]).PlatformUtils.isHarmony()){
// 变量
var i: any = r.props.otherParams.uniqueId;
_r(d[11]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!0,uniqueId:i
}
),_r(d[11]).RnBridge.invokeVmallNative('search','refreshWord',{
content:'',uniqueId:i
}
)
}
_r(d[11]).SearchResultStore.onUpdate(''),!_r(d[11]).PlatformUtils.isMp()&&o.DeviceEventEmitter.emit('UPDATE_USER_DATA','')
}
,r.cancelTap=function(e){
_r(d[11]).PlatformUtils.isMp()&&(r.isMpClick=!0),r.timelist=setTimeout((function(){
r.props.scrollListTop(),r._scrollView.scrollToEnd({
animated:!0
}
)
}
),100);
// 变量
var t: any = r.props,i=t.searchWord,a=t.deleClick,s=i;
if(1===s.length)r.cancelClick();
else{
var l=n.default.filter(s,(function(t){
return t!==e
}
));
l.length<1&&r.cancelClick();
// 变量
var c: any = n.default.join(l,' ');
a&&a(l),_r(d[11]).SearchResultStore.onUpdate(c),o.DeviceEventEmitter.emit('deleteKey',c)
}

}
,r.pageMargin=function(){
// 变量
var e: any = r.props,t=e.isPad,i=e.isPadHorizontal;
return i?32:t&&!i?24:16
}
,r.bubblesItem=function(e,t,i,a){
var s=n.default.map(i,(function(e){
return e
}
)),l=n.default.flattenDeep(s),u=a-2*r.pageMargin()-120-24-16-12-60-4;
return l.map((function(i){
return n.default.isEmpty(i)?null:(0,_r(d[12]).jsxs)(o.View,{
style:[e.bubblesBody,_r(d[11]).PlatformUtils.isMp()&&e.bubblesBodyMp],children:[(0,_r(d[12]).jsx)(o.TouchableOpacity,{
style:e.inputBox,onPress:function(){
r.searchTap()
}
,activeOpacity:1,children:_r(d[11]).PlatformUtils.isIOS()&&i?(0,_r(d[12]).jsx)(o.Text,{
numberOfLines:1,allowFontScaling:!1,ellipsizeMode:'clip',style:Object.assign({

}
,t.T3,t.C11,{
maxWidth:u
}
),children:i
}
):(0,_r(d[12]).jsx)(o.Text,{
numberOfLines:1,allowFontScaling:!1,ellipsizeMode:'tail',style:Object.assign({

}
,t.T3,t.C11,{
maxWidth:u,fontSize:Math.min(_r(d[11]).CommonUtils.getScaleSize(t.T3.fontSize,_r(d[11]).FONT_MUTIPLE.FONT_LEVEL_SIX),16),lineHeight:Math.min(_r(d[11]).CommonUtils.getScaleSize(t.T3.lineHeight,_r(d[11]).FONT_MUTIPLE.FONT_LEVEL_SIX),21)
}
),children:i
}
)
}
),(0,_r(d[12]).jsx)(o.TouchableOpacity,{
activeOpacity:.3,style:e.crossImgBox,onPress:function(){
return r.cancelTap(i)
}
,children:_r(d[11]).PlatformUtils.isMp()?(0,_r(d[12]).jsx)(_r(d[13]).FastImageView,{
imgUri:c.default.searchClose,imgStyle:e.closeBubblesImg
}
):(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"cancel1",width:"12",height:"12",normalCol:t.C23.color+t.opacityMap[t.C23.opacity]
}
)
}
)]
}
)
}
))
}
,r.state={
showWapHeaderBackBtn:!(_r(d[11]).PlatformUtils.isMp()||_r(d[11]).PlatformUtils.isWap(_r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth)&&window.location.search.includes('showheader=false'))
}
,r
}
return(0,r.default)(u,s),(0,t.default)(u,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
(this.liset=o.DeviceEventEmitter.addListener('brandScrollView',(function(){
e.timelist=setTimeout((function(){
e._scrollView.scrollToEnd({
animated:!0
}
)
}
),300)
}
)),_r(d[11]).PlatformUtils.isWap(_r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth))&&(window.sessionStorage.getItem('3rd_app_not_pullup_cid_list')?this.getShow():this.cidListener=o.DeviceEventEmitter.addListener('sendCid',(function(){
e.getShow()
}
)))
}

}
,{
key:"componentWillUnmount",value:function(){
this.timelist&&clearTimeout(this.timelist),this.liset&&this.liset.remove(),this.cidTime&&clearTimeout(this.cidTime),this.cidListener&&this.cidListener.remove()
}

}
,{
key:"getShow",value:function(){
var e,t=this;
this.cidTime=setTimeout((function(){
e=!(_r(d[11]).PlatformUtils.isWap(_r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth)&&window.location.search.includes('showheader=false')||_r(d[11]).CookieUtils.includeCidList()),t.setState({
showWapHeaderBackBtn:e
}
)
}
),10)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,i=t.onPress,a=t.isShare,r=t.isChange,s=t.isInput,n=t.onPressShare,u=t.titleBarStyle,h=[t.searchWord],p=this.pageMargin();
_r(d[11]).CommonUtils.getWindowSize('searchPage').screenWidth;
return(0,_r(d[12]).jsx)(_r(d[11]).WithTheme,{
themeStyles:l.default,children:function(t,l,f){
return(0,_r(d[12]).jsx)(_r(d[12]).Fragment,{
children:(0,_r(d[12]).jsxs)(o.View,{
style:[t.titleBar,u],children:[e.state.showWapHeaderBackBtn?(0,_r(d[12]).jsx)(o.View,{
style:[t.titleBarLeft],testID:'searchresult-back',nativeID:'searchresult-back',children:(0,_r(d[12]).jsx)(o.TouchableOpacity,{
style:[{
marginLeft:p
}
,t.iconBackGround],onPress:i,children:(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"ic24-back",normalCol:l.C12.color,opacity:l.C12.opacity,width:24,height:24
}
)
}
)
}
):(0,_r(d[12]).jsx)(_r(d[12]).Fragment,{

}
),s?(0,_r(d[12]).jsxs)(o.TouchableOpacity,{
style:[t.searchBox],activeOpacity:1,onPress:e.searchTap,testID:'searchresult-box',nativeID:'searchresult-box',children:[(0,_r(d[12]).jsx)(o.TouchableOpacity,{
activeOpacity:.3,style:t.searchImgBox,onPress:e.searchTap,testID:'searchresult-glass',nativeID:'searchresult-glass',children:_r(d[11]).PlatformUtils.isMp()?(0,_r(d[12]).jsx)(_r(d[13]).FastImageView,{
imgUri:c.default.searchMp,imgStyle:{
height:16,width:16
}

}
):(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"search",width:"16",height:"16",normalCol:l.C13.color+l.opacityMap[l.C13.opacity]
}
)
}
),_r(d[11]).PlatformUtils.isMp()?(0,_r(d[12]).jsx)(o.View,{
style:{
flex:1,height:28
}
,children:(0,_r(d[12]).jsxs)(o.ScrollView,{
ref:function(t){
e._scrollView=t
}
,horizontal:!0,scrollEnabled:!0,showsHorizontalScrollIndicator:!1,bouncesZoom:!0,keyboardShouldPersistTaps:!0,children:[e.bubblesItem(t,l,h,f),(0,_r(d[12]).jsx)(o.View,{
style:{
width:2
}

}
)]
}
)
}
):(0,_r(d[12]).jsx)(o.ScrollView,{
ref:function(t){
e._scrollView=t
}
,horizontal:!0,scrollEnabled:!0,showsHorizontalScrollIndicator:!1,bouncesZoom:!0,keyboardShouldPersistTaps:!0,style:{

}
,children:e.bubblesItem(t,l,h,f)
}
),(0,_r(d[12]).jsx)(o.View,{
style:t.line
}
),(0,_r(d[12]).jsx)(o.TouchableHighlight,{
style:t.searchButton,underlayColor:l.C38.color+l.opacityMap[l.C38.opacity],onPress:e.updateContent,children:(0,_r(d[12]).jsx)(o.Text,{
style:t.searchText,children:(0,_r(d[11]).t)('search')
}
)
}
)]
}
):null,a?(0,_r(d[12]).jsx)(o.TouchableOpacity,{
style:{
marginRight:p
}
,onPress:n,children:(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"share",normalCol:l.C31.color,width:24,height:24
}
)
}
):null,r?e.renderSearchBtn(p,t,l):null]
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
key:"renderSearchBtn",value:function(e,t,i){
// 变量
var a: any = this.props,r=a.layoutType,s=a.onPressChange;
return a.isContentTitle?(0,_r(d[12]).jsx)(o.View,{
style:{
marginRight:e-8
}

}
):(0,_r(d[12]).jsx)(o.TouchableOpacity,{
activeOpacity:.3,style:[{
marginRight:e
}
,t.iconBackGround],onPress:s,testID:'searchresult-style',nativeID:'searchresult-style',children:this.renderSearchListIcon(r,i)
}
)
}

}
,{
key:"renderSearchListIcon",value:function(e,t){
return e===_r(d[14]).LayoutType.oneByOne?_r(d[11]).PlatformUtils.isMp()?(0,_r(d[12]).jsx)(_r(d[13]).FastImageView,{
imgUri:c.default.searchTwoList,imgStyle:{
height:24,width:24
}

}
):(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"layOut-OneByeOne",normalCol:t.C31.color,width:24,height:24
}
):e===_r(d[14]).LayoutType.oneByTwo?_r(d[11]).PlatformUtils.isMp()?(0,_r(d[12]).jsx)(_r(d[13]).FastImageView,{
imgUri:c.default.searchOneList,imgStyle:{
height:24,width:24
}

}
):(0,_r(d[12]).jsx)(_r(d[13]).SvgIcon,{
iconName:"layOut-OneByeTwo",normalCol:t.C31.color,width:24,height:24
}
):null
}

}
])
}
)(s.Component);
_e.default=p
}
),"eb2f28d983fdf798d6bd1eda32bedd7f2758efe88d0d42b16eaaf9fd87de9e75",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","c30de7fd1ca6b3f98ef03da687a92f90e9332b4c65b8675c1f9dac512b5ac5cf"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),s=r(d[0])(r(d[6])),c=r(d[7]),u=r(d[0])(r(d[8])),p=r(d[0])(r(d[9])),f=r(d[0])(r(d[10]));
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
var y=(function(s){
// 函数
function y(t: any): any {
var l,s,f,S;
return(0,e.default)(this,y),s=this,f=y,S=[t],f=(0,n.default)(f),(l=(0,o.default)(s,v()?Reflect.construct(f,S||[],(0,n.default)(s).constructor):f.apply(s,S))).otherParams={

}
,l._onScrollBeginDrag=function(e){
c.DeviceEventEmitter.emit('onScrollBeginDragEvent',e),l.scrollViewStartOffsetY=e.nativeEvent.contentOffset.y
}
,l._onMomentumScrollEnd=function(e){
c.DeviceEventEmitter.emit('onScrollEvent',e,r(d[11]).PAGE_TYPE.search,l.otherParams.randomId)
}
,l._loadComponent=function(e){
var t={

}
,o={
moreVal:'4',layoutType:'verticalDoubleRow',titleShow:'true',cardTitle:l.state.isRecommend?(0,r(d[11]).t)('maybe_like'):(0,r(d[11]).t)('good_selection')
}
,n=new Array,s={
videoProportion:'1:1',longPicTextProportion:'1:1',shortPicTextProportion:'1:1'
}
,f=l.props,v=f.isPad,y=f.keyword,S=f.Source;
return(0,r(d[12]).jsxs)(r(d[12]).Fragment,{
children:[l.props.discoveryContentList.length>0?(0,r(d[12]).jsx)(u.default,{
dataArray:l.props.discoveryContentList,pageInfo:{
pageNum:2,pageSize:18
}
,styleChange:t,configData:{
moreVal:'4',layoutType:'verticalDoubleRow'
}
,pageType:r(d[11]).PAGE_TYPE.search,showUserName:'true',showTitleTag:'true',likeOrRead:'readNum',dataSourceCode:'',id:'',configInfo:s,pageCatCode:r(d[13]).contentResult.pageCatCode,pageCatName:r(d[13]).contentResult.pageCatName,resSiteCode:r(d[13]).contentResult.resSiteCodeResult,resSiteName:r(d[13]).contentResult.resSiteNameResult,pageId:r(d[13]).contentResult.pageId,isQueryDiscoveryContent:l.props.totalCount>18?'true':'false',keyword:y,Source:S
}
):(0,r(d[12]).jsxs)(c.View,{
style:[e.emptyC,{
marginTop:24,marginBottom:24
}
],children:[(0,r(d[12]).jsx)(c.Image,{
source:p.default.notyet,style:e.emptyImg
}
),(0,r(d[12]).jsx)(c.Text,{
style:[e.emptyT,v?e.prdAreaPadR:e.prdAreaR],ellipsizeMode:"tail",numberOfLines:2,children:(0,r(d[11]).t)('content_not_found').replace('%s','"'+y+'"')
}
)]
}
),l.props.isGetRecommendContent?(0,r(d[12]).jsx)(u.default,{
dataArray:n,pageInfo:{
pageNum:1,pageSize:18
}
,styleChange:t,configData:o,pageType:r(d[11]).PAGE_TYPE.search,showUserName:'true',showTitleTag:'true',likeOrRead:'readNum',dataSourceCode:'',id:'',configInfo:s,pageCatCode:r(d[13]).contentResult.pageCatCode,pageCatName:r(d[13]).contentResult.pageCatName,resSiteCode:r(d[13]).contentResult.resSiteCodeRecommend,resSiteName:r(d[13]).contentResult.resSiteNameRecommend,pageId:r(d[13]).contentResult.pageId,isGetRecommendContent:'true',keyword:y,discoveryContentList:l.props.discoveryContentList,Source:S
}
):null]
}
)
}
,l.state={
scrollY:new c.Animated.Value(0),isRecommend:!1
}
,l
}
return(0,l.default)(y,s),(0,t.default)(y,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
r(d[11]).CommonUtils.getRecommendConfigRes().then((function(t){
e.setState({
isRecommend:t
}
)
}
))
}

}
,{
key:"componentWillUnmount",value:function(){
this.timmer&&clearTimeout(this.timmer)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
return(0,r(d[12]).jsx)(r(d[11]).WithTheme,{
themeStyles:f.default,children:function(t){
return r(d[11]).PlatformUtils.isApp()?(0,r(d[12]).jsxs)(c.Animated.ScrollView,{
onScroll:c.Animated.event([{
nativeEvent:{
contentOffset:{
y:e.state.scrollY
}

}

}
],{
useNativeDriver:!0,listener:function(t){
e.iosEventY=t.nativeEvent.contentOffset.y,c.DeviceEventEmitter.emit('onOutScrollViewScroll',t.nativeEvent.contentOffset.y,r(d[11]).PAGE_TYPE.search,e.otherParams.randomId),r(d[11]).PlatformUtils.isIOS()&&(e.timmer&&clearTimeout(e.timmer),e.timmer=setTimeout((function(){
var t={
nativeEvent:{
contentOffset:{
x:0,y:e.iosEventY
}

}

}
;
c.DeviceEventEmitter.emit('iosForOnScrollEvent',t,r(d[11]).PAGE_TYPE.search)
}
),1e3))
}

}
),scrollEventThrottle:1,showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,onMomentumScrollEnd:e._onMomentumScrollEnd,overScrollMode:'never',onScrollBeginDrag:e._onScrollBeginDrag,removeClippedSubviews:!r(d[11]).PlatformUtils.isIOS(),bounces:!1,children:[e._loadComponent(t),(0,r(d[12]).jsx)(c.View,{
style:{
height:r(d[11]).PlatformUtils.isIOS()?112+e.props.iosStatusBarHeight||0:112+e.props.mSafeAreaLayoutGuideBottom+20
}

}
)]
}
):e._loadComponent(t)
}

}
)
}

}
])
}
)(s.default.PureComponent);
_e.default=y
}
),"08068c2af252a05f22a03944e142578fa14969309c54b10ec1d5a9c93254bdf7",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","b789b1f4d51c7c044494c23485e179ed27438b2a9915be0a6109d914a1ccd176","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","3bf097d13d02edd0f80651449631968da06285153402f9a3449f58ddd25e66dc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),r=_r(d[0])(_r(d[3])),n=_r(d[0])(_r(d[4])),i=_r(d[0])(_r(d[5])),o=_r(d[0])(_r(d[6])),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = u(t);
if(r&&r.has(e))return r.get(e);
var n={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var a: any = i?Object.getOwnPropertyDescriptor(e,o):null;
a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]
}
return n.default=e,r&&r.set(e,n),n
}
)(_r(d[7])),l=_r(d[8]),s=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10]));
// 函数
function u(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,r=new WeakMap;
return(u=function(e){
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
var p=(function(a){
// 函数
function c(t: any): any {
var i,a,s,u;
return(0,e.default)(this,c),a=this,s=c,u=[t],s=(0,n.default)(s),(i=(0,r.default)(a,f()?Reflect.construct(s,u||[],(0,n.default)(a).constructor):s.apply(a,u))).itemlist=[],i.brandRefAct=function(e,t,r){
if(e){
// 变量
var n: any = t.brandfilterList.slice(0,6),a=[],l=[];
o.default.map(n,(function(e){
a.push(e.brandCode),l.push(e.brandName)
}
));
e.isShop=!0,e.exposeObj=n,e.exposeObj.type=r,e.exposeObj.brandCode=a,e.exposeObj.brandName=l,e.exposeObj.searchWord=i.props.searchWord,i.addRefView(e,t)
}

}
,i.brandTextOnclick=function(e){
l.DeviceEventEmitter.emit('brandScrollView'),i.props.brandTextOnclick(e)
}
,i.refText=function(e){
var t,r=i.props.width*(parseInt(null==e||null==(t=e.props)?void 0:t.style[1].width,10)/100);
_r(d[11]).PlatformUtils.isWeb()&&i.props.refText(r)
}
,i.state={
refWidth:100
}
,i
}
return(0,i.default)(c,a),(0,t.default)(c,[{
key:"addRefView",value:function(e,t){
var r,n=0;
(null==(r=this.itemlist)?void 0:r.some((function(e,r){
return n=r,e.exposeObj.type===t.type
}
)))?this.itemlist.splice(n,1,e):this.itemlist.push(e)
}

}
,{
key:"render",value:function(){
var e=this,t=this.props,r=t.brandfilterList,n=t.isPad,i=t._styles,o=t.widthItem,a=n?'16%':'32%',c={
brandfilterList:r,type:'brand'
}
;
return(0,_r(d[12]).jsxs)(l.View,{
style:[{
position:'absolute'
}
,_r(d[11]).PlatformUtils.isWeb()&&{
width:'100%',left:-o/2
}
,!_r(d[11]).PlatformUtils.isWeb()&&{
width:o
}
],children:[(0,_r(d[12]).jsxs)(l.View,{
style:{
flexDirection:'row',alignItems:'center'
}
,children:[(0,_r(d[12]).jsx)(l.Image,{
style:{
width:16,height:16,marginTop:_r(d[11]).PlatformUtils.isWeb()?7:10
}
,source:s.default.icSearch
}
),(0,_r(d[12]).jsx)(l.Text,{
style:[i.centralTextStyle,{
height:_r(d[11]).CommonUtils.getScaleSize(21,2)+19,marginTop:8
}
],children:"\u7cbe\u9009\u54c1\u724c"
}
)]
}
),(0,_r(d[12]).jsx)(l.View,{
ref:function(t){
return e.brandRefAct(t,c,"brand")
}
,style:{
flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',backgroundColor:'transparent'
}
,children:null==r?void 0:r.slice(0,6).map((function(t){
return(0,_r(d[12]).jsx)(l.TouchableOpacity,{
activeOpacity:.6,style:[_r(d[11]).DarkStore.darkBool?i.centralViewDark:i.centralView,{
width:a
}
],ref:function(t){
return e.refText(t)
}
,onPress:function(){
return e.brandTextOnclick(t)
}
,children:(0,_r(d[12]).jsx)(l.Text,{
numberOfLines:1,ellipsizeMode:"tail",style:i.centralItemStyle,children:t.brandName
}
)
}
)
}
))
}
)]
}
)
}

}
])
}
)(a.Component);
_e.default=(0,_r(d[11]).componentautoscaling)((0,_r(d[11]).monitor)(c.default)((0,_r(d[11]).itemExposeHoc)(p)))
}
),"6b9f0049fa862fca850525facd4232a15773edcb1ad54610a8c921038ffe2ab7",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","3b8cf7b8f63921c5cda4d475189a23d4cc7faf76ec03e619fffa8f0a3c13eb62","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
exposeItem_product:function(t){
var o=r(d[0]).searchResult.pageId,n=r(d[0]).searchResult.pageCatCode,s=r(d[0]).searchResult.pageCatName,c=r(d[0]).searchResult.resSiteNameBrand,u=r(d[0]).searchResult.resSiteCodeBrand,p={
array:null==t?void 0:t.map((function(t,o){
return{
searchWord:t.searchWord,brandName:t.brandName,brandCode:t.brandCode,exposure:'1'
}

}
))
}
;
return{
isBatch:!0,commonData:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200090801':'100090801',actionName:'\u4e2d\u90e8\u7cbe\u9009\u54c1\u724c\u66dd\u5149',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:o,pageCatCode:n,pageCatName:s,resSiteCode:u,resSiteName:c,pageType:'Search'
}
,content:p.array
}

}

}

}
),"3b8cf7b8f63921c5cda4d475189a23d4cc7faf76ec03e619fffa8f0a3c13eb62",["6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),l=r(d[0])(r(d[4])),n=r(d[0])(r(d[5])),s=r(d[0])(r(d[6])),u=r(d[7]);
// 函数
function c(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(c=function(){
return!!t
}
)()
}
var y=(function(s){
// 函数
function y(e: any): any {
var n,s,u,p;
return(0,t.default)(this,y),s=this,u=y,p=[e],u=(0,l.default)(u),(n=(0,o.default)(s,c()?Reflect.construct(u,p||[],(0,l.default)(s).constructor):u.apply(s,p))).textOnlayout=function(t){
// 变量
var e: any = r(d[8]).CommonUtils.getScaleSize(r(d[8]).DarkStore.theme.T7.lineHeight,2);
t.nativeEvent.layout.height/e>2&&n.setState({
isShowEmptyText:!0
}
)
}
,n.state={
isShowEmptyText:!1
}
,n
}
return(0,n.default)(y,s),(0,e.default)(y,[{
key:"render",value:function(){
// 变量
var t: any = this,e=this.props,o=e.isPad,l=e.styles,n=e.keywordText,s=e.firstEmpty,c=e.errorEmpty,y=e.width,p=s||c;
r(d[8]).PlatformUtils.isMp()&&(r(d[8]).PlatformUtils.isWx()?wx:my).createSelectorQuery().select('#myEmptyText').boundingClientRect().exec((function(e){
var o,l=r(d[8]).CommonUtils.getScaleSize(r(d[8]).DarkStore.theme.T7.lineHeight,2);
((null==(o=e[0])?void 0:o.height)||0)/l>2&&t.setState({
isShowEmptyText:!0
}
)
}
));
return(0,r(d[9]).jsxs)(u.View,{
style:[l.emptyTextView,o?l.prdAreaPadR:l.prdAreaR,r(d[8]).PlatformUtils.isMp()&&{
maxWidth:y
}
],children:[(0,r(d[9]).jsx)(u.Text,{
id:'myEmptyText',onLayout:this.textOnlayout,style:[l.emptyT,this.state.isShowEmptyText&&{
flex:1
}
],ellipsizeMode:"tail",numberOfLines:this.state.isShowEmptyText?2:3,children:p?(0,r(d[8]).t)('product_not_found').replace('%s','"'+n+'"'):(0,r(d[8]).t)('product_no_data')
}
),this.state.isShowEmptyText&&p&&(0,r(d[9]).jsx)(u.View,{
style:l.emptyText,children:(0,r(d[9]).jsx)(u.Text,{
style:[l.emptyT],children:(0,r(d[8]).t)('emptyText')
}
)
}
)]
}
)
}

}
])
}
)(s.default.PureComponent);
_e.default=y
}
),"bf1d5e342705e17e9203166253c01262434b4c82a131cb1fc21624410fb42345",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),o=_r(d[0])(_r(d[3])),a=_r(d[0])(_r(d[4])),r=_r(d[0])(_r(d[5])),n=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = h(t);
if(o&&o.has(e))return o.get(e);
var a={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var i: any = r?Object.getOwnPropertyDescriptor(e,n):null;
i&&(i.get||i.set)?Object.defineProperty(a,n,i):a[n]=e[n]
}
return a.default=e,o&&o.set(e,a),a
}
)(_r(d[6])),i=_r(d[7]),c=_r(d[0])(_r(d[8])),s=_r(d[0])(_r(d[9])),l=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11])),y=_r(d[0])(_r(d[12])),p=_r(d[0])(_r(d[13]));
// 函数
function h(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,o=new WeakMap;
return(h=function(e){
return e?o:t
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
var v=i.Dimensions.get('window'),S=_r(d[14]).PlatformUtils.isWap(v.width),E=0,L=0;
_r(d[14]).PlatformUtils.isIOS()&&(_r(d[14]).DeviceUtils.getSafeAreaBottomHeight().then((function(e){
E=e
}
)).catch((function(){

}
)),_r(d[14]).DeviceUtils.getStatusBarHeight().then((function(e){
L=e
}
)).catch((function(){

}
)));
_e.default=(function(n){
// 函数
function h(t: any): any {
var r,n,v,A;
(0,e.default)(this,h),n=this,v=h,A=[t],v=(0,a.default)(v),(r=(0,o.default)(n,f()?Reflect.construct(v,A||[],(0,a.default)(n).constructor):v.apply(n,A))).showLoading=!0,r.canLoadMore=!0,r.pageNum=1,r.cateIdIndex=-1,r.e2eIdInfo={

}
,r.onScrollWeb=y.default.debounce((function(){
r.canLoadMore&&r.getScrollTop()+r.getWindowHeight()>=r.getScrollHeight()&&(r.canLoadMore=!1,r.state.cardId?r.slideMore(r.state.cardId):r.slideMore())
}
),300),r.setCardId=function(e){
r.setState({
cardId:e
}
)
}
,r.setCanLoadMore=function(e){
r.canLoadMore=e
}
,r.slideMore=function(e){
var t,o;
r.state.totalCount>(null==(t=r.state)||null==(o=t.resultList)?void 0:o.length)?(r.pageNum+=1,_r(d[14]).CommonUtils.isEmpty(e)?r.getSearchAccessory():r.getSearchAccessory(!0,e)):r.canLoadMore=!1
}
,r.handleApkBack=function(){
return r.eventTracingReportByLeave(),p.default.setAccessoryRouter('SearchDefault'),_r(d[14]).DeviceUtils.goBack(),!0
}
,r.eventTracingReportByLeave=function(){
_r(d[14]).EventTracking.eventTracingReportRightNow({
actionCode:_r(d[14]).PlatformUtils.isApp()?'100092002':'200092002',actionName:'\u914d\u4ef6\u641c\u7d22\u7ed3\u679c\u9875\u79bb\u5f00',eventType:_r(d[14]).EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:_r(d[15]).accessory.pageId,pageCatCode:_r(d[15]).accessory.pageCatCode,pageCatName:_r(d[15]).accessory.pageCatName,pageType:'SearchAccessory',content:{
searchWord:S?r.props.urlValue.keyWord:r.props.keyWord,load:'1'
}

}
)
}
,r.eventTracingReportByLoad=function(){
// 变量
var e: any = _r(d[15]).accessory.pageId,t=_r(d[15]).accessory.pageCatCode,o=_r(d[15]).accessory.pageCatName;
_r(d[14]).EventTracking.eventTracingReportRightNow({
actionCode:_r(d[14]).PlatformUtils.isApp()?'100092001':'200092001',actionName:'\u914d\u4ef6\u641c\u7d22\u7ed3\u679c\u9875\u52a0\u8f7d',eventType:_r(d[14]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:e,pageCatCode:t,pageCatName:o,pageType:'SearchAccessory',content:{
searchWord:S?r.props.urlValue.keyWord:r.props.keyWord,load:'1'
}

}
)
}
,r.getAccessoryError=function(e){
1===r.pageNum?r.setState({
isShowEmpty:_r(d[14]).CommonUtils.isEmpty(e),loading:!1,categoryFilterList:e
}
):r.setState({
isShowEmpty:!1,loadState:2
}
)
}
,r.checkCategoryId=function(){
_r(d[14]).CommonUtils.isEmpty(r.cateId)?r.getSearchAccessory():r.getSearchAccessoryAxios().then((function(e){
if(null!=e&&e.categoryFilterList){
for(var t=!1,o=0;
o<e.categoryFilterList.length;
o++)if(!_r(d[14]).CommonUtils.isEmpty(String(e.categoryFilterList[o].id))&&String(r.cateId)===String(e.categoryFilterList[o].id)){
r.cateIdIndex=o,t=!0;
break
}
t?r.getSearchAccessory(!0,r.cateId,e.categoryFilterList):(r.cateId='',r.handleSearchAccessoryResult(e),e.categoryFilterList&&1===r.pageNum&&r.setState({
categoryFilterList:e.categoryFilterList
}
))
}
else r.getAccessoryError()
}
)).catch((function(){
r.getAccessoryError()
}
))
}
,r.getSearchAccessory=function(e,t,o){
// 变量
var a: any = 1===r.pageNum;
r.showLoading=!0;
try{
r.getSearchAccessoryAxios(e,t).then((function(e){
null!=e&&e.resultList?r.handleSearchAccessoryResult(e):r.getAccessoryError(o),e.categoryFilterList&&a&&r.setState({
categoryFilterList:t?o:e.categoryFilterList
}
)
}
)).catch((function(){
r.getAccessoryError(o)
}
))
}
catch(e){
r.getAccessoryError(o)
}

}
,r.handleSearchAccessoryResult=function(e){
var t,o,a=r.state.resultList;
r.showLoading=!0;
// 变量
var n: any = (null==(t=a=a.concat(e.resultList))?void 0:t.length)===e.totalCount;
r.setState({
resultList:a,loadState:n?3:1,totalCount:e.totalCount,isShowEmpty:0===(null==e||null==(o=e.resultList)?void 0:o.length),loading:!1
}
,(function(){
r.canLoadMore=!n
}
))
}
,r.getSearchAccessoryFilter=function(e){
r.pageNum=1,r.showLoading=!0,r.getSearchAccessoryAxios(!0,e).then((function(e){
r.setState({
resultList:e.resultList,loading:!1,totalCount:e.totalCount
}
,(function(){
var e,t,o;
(null==(e=r.state)||null==(t=e.resultList)?void 0:t.length)===(null==(o=r.state)?void 0:o.totalCount)?r.setState({
loadState:3
}
):r.setState({
loadState:1
}
)
}
))
}
)).catch((function(){
r.setState({
resultList:[],loading:!1
}
)
}
))
}
,r.getSearchAccessoryAxios=function(e,t){
var o,a,n={
lang:_r(d[14]).MCP_LANG.CN,country:_r(d[14]).MCP_COUNTRY.CN,keyword:r.state.keyWord,pageNum:null==(o=r.pageNum)?void 0:o.toString(),pageSize:null==(a=r.state.pageSize)?void 0:a.toString(),portal:_r(d[14]).CommonUtils.getPortal(),version:'1',isAccurate:r.state.isAccurate
}
;
e&&t&&(n.categoryFilter=JSON.stringify([""+t]));
// 变量
var i: any = _r(d[14]).Service.openApiDomain+"sg/search/queryAccessory";
return _r(d[14]).Http.get(i,n)
}
,r.emptyPage=function(e){
return(0,_r(d[16]).jsx)(_r(d[16]).Fragment,{
children:(0,_r(d[16]).jsxs)(i.View,{
style:e.emptyStyle,children:[(0,_r(d[16]).jsx)(_r(d[17]).FastImageView,{
localSource:l.default.serachNoShopping,imgStyle:{
width:120,height:120
}

}
),(0,_r(d[16]).jsx)(i.Text,{
style:e.emptyText,children:(0,_r(d[14]).t)('noAccessory')
}
)]
}
)
}
)
}
,r._loadPage=function(){
// 变量
var e: any = r.state,t=e.categoryFilterList,o=e.resultList,a=e.isShowEmpty,n=e.keyWord,l=e.pageName,y=e.isShowKey,p=e.totalCount,h=e.loadState,f=e.loading;
return(0,_r(d[16]).jsx)(_r(d[14]).WithTheme,{
themeStyles:u.default,children:function(e,u,v,S){
return(0,_r(d[16]).jsxs)(i.View,{
style:[{
flex:1
}
,_r(d[14]).PlatformUtils.isWeb()&&{
minHeight:window.innerHeight
}
,_r(d[14]).PlatformUtils.isIOS()&&{
backgroundColor:u.C32.color,paddingTop:L,paddingBottom:-E
}
,_r(d[14]).PlatformUtils.isHarmony()&&{
paddingTop:r.props.statusBarHeight
}
],children:[(0,_r(d[16]).jsx)(s.default,Object.assign({
reportPageLeave:r.eventTracingReportByLeave
}
,r.props,{
keyWord:n,pageName:l,isShowKey:y,pageType:'SearchAccessory'
}
)),a?r.emptyPage(e):(0,_r(d[16]).jsx)(c.default,{
categoryFilterList:t,resultList:o,keyWord:n,totalCount:p,getSearchAccessoryFilter:r.getSearchAccessoryFilter,getSearchAccessory:r.getSearchAccessory,slideMore:r.slideMore,setCardId:r.setCardId,showLoading:r.showLoading,loadState:h,loading:f,setCanLoadMore:r.setCanLoadMore,height:S,cateId:r.cateId,cateIdIndex:r.cateIdIndex
}
)]
}
)
}

}
)
}
;
var I=r.props,C=I.urlValue,k=I.keyWord,w=I.pageName,P=I.isAccurate,T=I.categoryId;
return r.cateId=S?null==C?void 0:C.categoryId:T,r.state={
categoryFilterList:[],resultList:[],pageSize:20,loading:!0,isShowEmpty:!1,keyWord:S?null==C?void 0:C.keyWord:k,pageName:S?null==C?void 0:C.pageName:w,isAccurate:S?null==C?void 0:C.isAccurate:P,isShowKey:0,totalCount:0,loadState:1
}
,_r(d[14]).CommonUtils.storeE2eId(_r(d[14]).PAGE_TYPE_E2EID.searchAccessory,!0),r.e2eIdInfo=_r(d[14]).E2EIdStore.pageTypeE2EIdSpanId[_r(d[14]).E2EIdStore.curPageType],r
}
return(0,r.default)(h,n),(0,t.default)(h,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
_r(d[14]).PlatformUtils.isApp()&&(this.eventListener=i.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var o;
if('page'===(null==t?void 0:t.service)&&'pageLeave'===(null==t?void 0:t.action)&&e.props.uniqueId===(null==t||null==(o=t.param)?void 0:o.uniqueId))if(t.param.isLeave){
var a={
e2eId:e.e2eIdInfo.e2eId
}
;
_r(d[14]).CommonUtils.storeE2eId(_r(d[14]).PAGE_TYPE_E2EID.searchAccessory,!1,a)
}
else _r(d[14]).CommonUtils.storeE2eId(_r(d[14]).PAGE_TYPE_E2EID.searchAccessory,!1)
}
))),this.checkCategoryId(),this.listerBack=i.BackHandler.addEventListener('hardwareBackPress',this.handleApkBack),_r(d[14]).StorageUtil.getStorage('showAccessoryFlag').then((function(t){
e.setState({
isShowKey:t
}
)
}
)),this.eventTracingReportByLoad(),_r(d[14]).PlatformUtils.isWeb()&&document.addEventListener('scroll',this.onScrollWeb),_r(d[14]).PlatformUtils.isHarmony()&&_r(d[14]).RnBridge.invokeVmallNative('search','showSearchBar',{
isShow:!1,uniqueId:this.props.uniqueId
}
)
}

}
,{
key:"componentWillUnmount",value:function(){
var e;
this.listerBack&&this.listerBack.remove(),null==(e=this.eventListener)||e.remove()
}

}
,{
key:"getScrollTop",value:function(){
var e,t,o=(null==(e=document.body)?void 0:e.scrollTop)||0,a=(null==(t=document.documentElement)?void 0:t.scrollTop)||0;
return o-a>0?o:a
}

}
,{
key:"getWindowHeight",value:function(){
return'CSS1Compat'===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight
}

}
,{
key:"getScrollHeight",value:function(){
var e,t,o=(null==(e=document.body)?void 0:e.scrollHeight)||0,a=(null==(t=document.documentElement)?void 0:t.scrollHeight)||0;
return(o-a>0?o:a)-400
}

}
,{
key:"render",value:function(){
return this.state.loading?(0,_r(d[16]).jsx)(_r(d[17]).PlaceHolder,{

}
):this._loadPage()
}

}
])
}
)(n.Component)
}
),"e137367ee855f01021826755c24a89dc09f1ba03f2983f2ccb942b5bc4c52685",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","5b51ead8b3e3a482934b084bd3777cf62335b18f97e6981e0bc4150e4a66c351","8a41ee549bee1c223dc6ce0dc09ca230794c78ab8e067005c096d44a58134a40","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","3d5a528bd2e4b7a8235602215ebae2f940c3a948d3c51a3b16d8a8d5e8d9b6ef","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","0e4b4cf339c32c9adeb992be70cb3082d0c8cc2ee09cbb9318df2f7fbc8b8229","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),o=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),n=_r(d[0])(_r(d[5])),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var o: any = f(t);
if(o&&o.has(e))return o.get(e);
var r={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var l: any = n?Object.getOwnPropertyDescriptor(e,i):null;
l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]
}
return r.default=e,o&&o.set(e,r),r
}
)(_r(d[6])),l=_r(d[7]),a=_r(d[0])(_r(d[8])),s=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11])),p=_r(d[0])(_r(d[12]));
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
function h(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(h=function(){
return!!e
}
)()
}
var v={
viewAreaCoveragePercentThreshold:50
}
,y='l2r',P=(function(i){
// 函数
function s(t: any): any {
var n,i,a,f;
return(0,e.default)(this,s),i=this,a=s,f=[t],a=(0,r.default)(a),(n=(0,o.default)(i,h()?Reflect.construct(a,f||[],(0,r.default)(i).constructor):a.apply(i,f))).itemlist=[],n.onScrollWeb=function(){
_r(d[13]).PlatformUtils.isWeb()&&(n.scrollTimer&&clearTimeout(n.scrollTimer),n.scrollTimer=setTimeout((function(){
l.DeviceEventEmitter.emit('onScrollEvent')
}
),300))
}
,n._loadMore=u.default.debounce((function(){
_r(d[13]).PlatformUtils.isApp()&&n.props.slideMore(n.state.cardId)
}
),200),n.getVproLogo=function(){
_r(d[13]).HttpService.getTemplate('vmall_vpro_logo').then((function(e){
if(null!=e&&e.success){
var t,o,r=null==e?void 0:e.templateMapping,i=null==r||null==(t=r.vmall_vpro_logo)||null==(o=t.content)?void 0:o.replace(/<.*?>/gi,'');
n.setState({
vproLogo:i
}
)
}

}
))
}
,n.renderHeader=function(e){
// 变量
var t: any = n.props,o=t.categoryFilterList,r=t.keyWord,i=t.cateIdIndex,l=n.state.selectCardIndex;
return(null==o?void 0:o.length)>0?(0,_r(d[14]).jsx)(c.default,{
isPadHorizontal:n.isPadHorizontal(),onChangesCategory:n.changeCategory,isPad:n.isPad(),data:o,keyName:'name',valName:'id',selectIndex:l,searchWord:r,isPhysicalCategory:!0,type:'accessory',cateIdIndex:i
}
):null
}
,n.changeCategory=function(e){
n.setState({
selectCardIndex:e.index,cardId:e.cardId
}
),n.props.setCanLoadMore(!0),n.props.setCardId(e.cardId),n.props.getSearchAccessoryFilter(e.cardId)
}
,n.onMomentumScrollEnd=function(e){
_r(d[13]).PlatformUtils.isHarmony()||l.DeviceEventEmitter.emit('onScrollEvent',e,_r(d[13]).PAGE_TYPE.search)
}
,n.scrollPage=function(e){
if(_r(d[13]).PlatformUtils.isIOS()||_r(d[13]).PlatformUtils.isHarmony()){
// 变量
var t: any = e.nativeEvent.contentOffset.y;
n.timer&&clearTimeout(n.timer),n.timer=setTimeout((function(){
if(_r(d[13]).PlatformUtils.isHarmony()){
var o={
nativeEvent:{
contentOffset:{
x:0,y:t
}

}

}
;
l.DeviceEventEmitter.emit('onScrollEvent',o,_r(d[13]).PAGE_TYPE.search)
}
else l.DeviceEventEmitter.emit('iosForOnScrollEvent',e,_r(d[13]).PAGE_TYPE.search)
}
),1e3)
}

}
,n.isPad=function(){
return _r(d[13]).ScreenUtils.isMedium(n.width)
}
,n.isPadHorizontal=function(){
return _r(d[13]).ScreenUtils.isPadHorizontal(n.width,n.height)
}
,n.colGutter=function(){
return n.isPad()&&!n.isPadHorizontal()?12:n.isPad()&&n.isPadHorizontal()?16:8
}
,n.boxWidth=function(){
return n.width-2*n.productPaddingHorizontal()
}
,n.colNum=function(){
return _r(d[13]).ScreenUtils.isSmall(n.width)?1:n.isPadHorizontal()?3:2
}
,n.receiveRef=function(e,t,o,r){
e&&(e.exposeObj=t,e.exposeObj.type=o,e.exposeObj.index=r+1||'',e.exposeObj.searchWord=n.props.keyWord,n.addRefView(e,t))
}
,n.onClickPrd=function(e){
n.props.clickItem(e);
var t=e||{

}
,o=t.productId,r=t.skuCode,i=t.productPageType,l=void 0===i?'':i;
_r(d[13]).RouterUtils.gotoProductDetailAllByType(String(l),String(o),String(r))
}
,n.getCallback=function(){
n.props.getSearchAccessory()
}
,n.renderFooter=function(e){
var t,o=n.props,r=o.showLoading,i=o.loadState,a=n.height-140;
return(null==(t=n.props.resultList)?void 0:t.length)>0?(0,_r(d[14]).jsx)(_r(d[14]).Fragment,{
children:(0,_r(d[14]).jsx)(_r(d[15]).LoadingView,{
showLoading:r,position:n.state.loadingPostion,loadState:i,errorCallback:n.getCallback,height:56,iconSize:24
}
)
}
):(0,_r(d[14]).jsx)(l.View,{
style:{
height:a
}
,children:(0,_r(d[14]).jsxs)(l.View,{
style:[e.emptyStyle],children:[(0,_r(d[14]).jsx)(_r(d[15]).FastImageView,{
localSource:p.default.serachNoShopping,imgStyle:{
width:120,height:120
}

}
),(0,_r(d[14]).jsx)(l.Text,{
style:e.emptyText,children:(0,_r(d[13]).t)('noAccessory')
}
)]
}
)
}
)
}
,n.renderProductItem=function(e,t,o,r){
// 变量
var i: any = 2;
e.promotionRules=e.promoLabels,e.prdName=e.briefName,e.originPrice=e.price,e.salePrice=void 0!==e.promoPrice?e.promoPrice:e.price,e.reviewCount=e.rateCount,e.goodReviewRate=e.goodRate,e.showShopName='0','1'===e.showShopName&&e.shopName&&(i=1),e.keyName=e.briefName+t;
var l={
customImg:e.customImage,photoPath:e.photoPath,photoName:e.photoName,webps:e.displayPhotoWebpPathMap
}
;
e.imgUrl=(0,_r(d[13]).handleImgUrl)(l);
// 变量
var a: any = (0,_r(d[13]).getBestFitImgUrl)(r,157,e.imgUrl);
return e.searchWord=n.props.keyWord,e.imgUrl=a,(0,_r(d[14]).jsx)(_r(d[14]).Fragment,{
children:(0,_r(d[14]).jsx)(_r(d[15]).ProductItem,Object.assign({
receiveRef:function(o){
return n.receiveRef(o,e,'product',t)
}
,data:e,structure:n.state.layoutType,type:'base',config:{
prodTagShow:!0,outOfStockTagShow:!0,promotionTagShow:!0,bgColor:!0,mutiTagTagShow:!0,promotionShow:!0,prodSellPoint:!0,originPriceShow:!0,buyIconShow:!1,commentCountShow:!0,prdNameNum:i,imgWrapWidth:140,imgWidth:108,isShowEstPrice:!0
}
,onClick:function(){
return n.onClickPrd(e)
}
,iWidth:r
}
,_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE?{

}
:{
iHeight:157
}
,{
txtAreaHeight:153,vproLogoUrl:n.state.vproLogo
}
),e.productId)
}
)
}
,n.productPaddingHorizontal=function(){
return n.isPad()&&!n.isPadHorizontal()?24:n.isPad()&&n.isPadHorizontal()?32:16
}
,n.renderProduct=function(e,t){
var o=n.colNum(),r=(n.boxWidth()-(o-1)*n.colGutter())/o,i=n.colGutter(),a=Array(o).fill('').map((function(o,a){
var s,c;
return(0,_r(d[14]).jsx)(l.View,{
style:[t.prdItemSt,{
marginLeft:0===a?0:i
}
],children:e+a<(null==(s=n.props)||null==(c=s.resultList)?void 0:c.length)&&n.renderProductItem(n.props.resultList[e+a],e+a,t,r)
}
)
}
));
return e%o==0?(0,_r(d[14]).jsx)(l.View,{
style:[t.productItemRow,{
marginTop:8,paddingHorizontal:n.productPaddingHorizontal()
}
],children:a
}
):null
}
,n.onBackTop=function(){
n.timerScroll=setTimeout((function(){
n.scroller&&n.scroller.scrollToOffset({
offset:0,animated:!0
}
)
}
),0)
}
,n.onLayout=function(e){
n.height=e.nativeEvent.layout.height
}
,n.renderProductList=function(e){
// 变量
var t: any = n.props,o=t.resultList,r=[];
!t.loading&&(null==o?void 0:o.length)>0&&(r=o),0===r.length&&r.push({
isEmpty:!0
}
);
return(0,_r(d[14]).jsx)(l.View,{
style:[e.productList,_r(d[13]).PlatformUtils.isWeb()&&{
marginTop:56
}
],onLayout:n.onLayout,children:(0,_r(d[14]).jsx)(l.FlatList,{
ref:function(e){
n.scroller=e
}
,style:{
flex:1
}
,data:r,renderItem:function(t){
// 变量
var o: any = t.item,r=t.index;
return o.isEmpty?(0,_r(d[14]).jsx)(l.View,{

}
):n.renderProduct(r,e)
}
,keyExtractor:function(e,t){
return String(e.productId)+String(t)
}
,onEndReachedThreshold:.1,onEndReached:n._loadMore,initialNumToRender:20,maxToRenderPerBatch:20,ListHeaderComponent:n.renderHeader(e),ListFooterComponent:n.renderFooter(e),scrollEnabled:!0,onScroll:n.scrollPage,showsVerticalScrollIndicator:!1,viewabilityConfig:v,onMomentumScrollEnd:n.onMomentumScrollEnd,bounces:_r(d[13]).PlatformUtils.isHarmony(),removeClippedSubviews:!_r(d[13]).PlatformUtils.isIOS()
}
)
}
)
}
,n.renderDom=function(e){
return(0,_r(d[14]).jsx)(l.View,{
style:e.fixBtnWrap,children:(0,_r(d[14]).jsx)(_r(d[15]).FixedButton,{
fixedButton:!0,onBackTop:n.onBackTop,pageType:_r(d[13]).PAGE_TYPE.search,pageId:'p_accessoriesResult'
}
)
}
)
}
,n.state={
index:0,layoutType:y,loadingPostion:'bottom',cardId:_r(d[13]).CommonUtils.isEmpty(t.cateId)?'':t.cateId,selectCardIndex:t.cateIdIndex
}
,n
}
return(0,n.default)(s,i),(0,t.default)(s,[{
key:"componentDidMount",value:function(){
this.getVproLogo(),_r(d[13]).PlatformUtils.isWeb()&&document.addEventListener('scroll',this.onScrollWeb)
}

}
,{
key:"componentWillUnmount",value:function(){
this.timer&&clearTimeout(this.timer),this.scrollTimer&&clearTimeout(this.scrollTimer),_r(d[13]).PlatformUtils.isWeb()&&document.removeEventListener('scroll',this.onScrollWeb)
}

}
,{
key:"addRefView",value:function(e,t){
// 变量
var o: any = 0;
this.itemlist.some((function(e,r){
return o=r,e.exposeObj.keyName===t.keyName
}
))?this.itemlist.splice(o,1,e):this.itemlist.push(e)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
return(0,_r(d[14]).jsx)(_r(d[13]).WithTheme,{
themeStyles:a.default,children:function(t,o,r,n){
return e.width=r,e.height=n,(0,_r(d[14]).jsxs)(_r(d[14]).Fragment,{
children:[e.renderProductList(t),e.renderDom(t)]
}
)
}

}
)
}

}
])
}
)(i.Component);
_e.default=(0,_r(d[13]).monitor)(s.default)((0,_r(d[13]).itemExposeHoc)(P))
}
),"5b51ead8b3e3a482934b084bd3777cf62335b18f97e6981e0bc4150e4a66c351",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","5f93f4f3e00cfcd6cdeb4f5509be43cb08675fab839c789701e61d4d5f628434","83f60dd4ea5ecc97a75280d340cfedbd7eb62853c5758aa32b64715ba7bbc3be","5f32489d57e7e8e72322f964a34883e08cf3e437e2b856c79984210e0e2ce4fb","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
lodingTitle:{
fontSize:r(d[1]).CommonUtils.getScaleSize(o.T7.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_SIX),lineHeight:r(d[1]).CommonUtils.getScaleSize(o.T7.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_SIX),color:o.C13.color,opacity:o.C13.opacity
}
,title:{
justifyContent:'space-between',alignContent:'center',flexDirection:'row',height:28,marginLeft:18,marginRight:16,backgroundColor:o.S32.backgroundColor
}
,leftText:{
fontSize:20,color:'#000000',fontWeight:'500',marginLeft:18
}
,cardBg:{
width:56,height:96,padding:8,borderRadius:8,marginRight:8,justifyContent:'space-between'
}
,cardBgCh:{
width:56,height:56,padding:8,borderRadius:8,marginRight:8,justifyContent:'space-between',backgroundColor:o.C34.color,opacity:o.C33.opacity
}
,codeImg:{
width:40,height:40,resizeMode:'cover',justifyContent:'center',alignItems:'center'
}
,codeText:Object.assign({
fontSize:12,color:'#CF0A2C',textAlign:'center'
}
,o.T4,o.C18),productList:{
width:'100%',overflow:'hidden',flex:1,backgroundColor:o.S32.backgroundColor,zIndex:-1,marginTop:0
}
,prdItemSt:{
flex:1
}
,productItemRow:{
flexDirection:'row'
}
,emptyStyle:{
width:'100%',flex:1,margin:'auto',justifyContent:'center',alignItems:'center',backgroundColor:o.S32.backgroundColor,zIndex:-1
}
,emptyText:Object.assign({

}
,o.T10,o.C15,{
paddingTop:8
}
),fixBtnWrap:{
position:'absolute',bottom:48,right:16,width:50,height:50
}

}
)
}

}
),"5f93f4f3e00cfcd6cdeb4f5509be43cb08675fab839c789701e61d4d5f628434",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
exposeItem_product:function(o){
// 变量
var t: any = r(d[0]).accessory.pageId,c=r(d[0]).accessory.pageCatCode,s=r(d[0]).accessory.pageCatName,n=r(d[0]).accessory.resSiteCode,p=r(d[0]).accessory.resSiteName;
return{
isBatch:!0,content:{
array:null==o?void 0:o.map((function(o,u){
var l,C,S;
return{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200092008':'100092008',actionName:'\u914d\u4ef6\u641c\u7d22\u7ed3\u679c\u9875\u5546\u54c1\u5217\u8868\u4e2d\u7684\u5546\u54c1\u66dd\u5149',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_EXPOSURE,pageId:t,pageCatCode:c,pageCatName:s,resSiteCode:n,resSiteName:p,pageType:'Search-accessory',content:{
searchWord:o.searchWord,SKUCode:[null==(l=o.skuCode)?void 0:l.toString()],productId:[null==(C=o.productId)?void 0:C.toString()],location:null==(S=o.index)?void 0:S.toString()
}

}

}
))
}
.array
}

}
,clickItem:function(o){
var t,c,s=r(d[0]).accessory.pageId,n=r(d[0]).accessory.pageCatCode,p=r(d[0]).accessory.pageCatName,u=r(d[0]).accessory.resSiteCode,l=r(d[0]).accessory.resSiteName;
return{
data:{
actionCode:r(d[1]).PlatformUtils.isWeb()?'200092007':'100092007',actionName:'\u70b9\u51fb\u914d\u4ef6\u641c\u7d22\u7ed3\u679c\u9875\u5546\u54c1\u5217\u8868\u7684\u5546\u54c1\u65f6\u4e0a\u62a5',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,content:{
searchWord:o.searchWord,productId:(null==(t=o.productId)?void 0:t.toString())||'',SKUCode:o.skuCode.toString()||'',productname:o.name,location:(null==(c=o.index)?void 0:c.toString())||'',click:'1'
}
,pageId:s,pageCatCode:n,pageCatName:p,resSiteCode:u,resSiteName:l
}

}

}

}

}
),"83f60dd4ea5ecc97a75280d340cfedbd7eb62853c5758aa32b64715ba7bbc3be",["6b76351b00151fee394141a9d68eb24d28ec2738552de4782b84c3d7cd8ed1cc","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=_r(d[0])(_r(d[1])),e=_r(d[0])(_r(d[2])),i=_r(d[0])(_r(d[3])),o=_r(d[0])(_r(d[4])),r=_r(d[0])(_r(d[5])),n=_r(d[0])(_r(d[6])),a=(function(t,e){
if(!e&&t&&t.__esModule)return t;
if(null===t||"object"!=typeof t&&"function"!=typeof t)return{
default:t
}
;
// 变量
var i: any = h(e);
if(i&&i.has(t))return i.get(t);
var o={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in t)if("default"!==n&&{

}
.hasOwnProperty.call(t,n)){
// 变量
var a: any = r?Object.getOwnPropertyDescriptor(t,n):null;
a&&(a.get||a.set)?Object.defineProperty(o,n,a):o[n]=t[n]
}
return o.default=t,i&&i.set(t,o),o
}
)(_r(d[7])),l=_r(d[8]),s=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11]));
// 函数
function h(t: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var e: any = new WeakMap,i=new WeakMap;
return(h=function(t){
return t?i:e
}
)(t)
}
// 函数
function p(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(p=function(){
return!!t
}
)()
}
var f=(function(a){
// 函数
function u(e: any): any {
var r,n,a,l;
return(0,t.default)(this,u),n=this,a=u,l=[e],a=(0,o.default)(a),(r=(0,i.default)(n,p()?Reflect.construct(a,l||[],(0,o.default)(n).constructor):a.apply(n,l))).height=_r(d[12]).CommonUtils.getWindowSize(r.props.pageType).screenHeight,r.setFloatLayerTime=function(){
r.state.isShowFloat&&(r.timer=setTimeout((function(){
_r(d[12]).StorageUtil.setStorage('showAccessoryFlag',1,0),r.setState({
isShowFloat:!1
}
)
}
),3e3))
}
,r.onClickBack=function(){
var t;
_r(d[12]).PlatformUtils.isApp()?(t='vmall://com.vmall.client/home/category?pn=peijianzhongxin',_r(d[12]).RouterUtils.gotoPage(t)):t=_r(d[12]).Service.wapDomain+"portal/category/index.html?pn=peijianzhongxin&showNavigation=false",_r(d[12]).RouterUtils.gotoPage(t),r.props.clickItem(!1),r.props.reportPageLeave(),_r(d[12]).EventTracking.execReportData('',!0)
}
,r.onSearch=function(){
r.props.navigation.replace('SearchDefault',{
showSearchBar:_r(d[12]).PlatformUtils.isHarmony()
}
),c.default.setAccessoryRouter('Search-accessory'),r.props.clickItem(!0),_r(d[12]).EventTracking.execReportData('',!0),r.props.reportPageLeave()
}
,r.onPressBack=function(){
c.default.setAccessoryRouter('SearchDefault'),r.props.reportPageLeave(),_r(d[12]).PlatformUtils.isApp()?_r(d[12]).DeviceUtils.goBack():window.history.go(-1)
}
,r.initWidth=function(t,e){
r.width=t,r.height=e,r.state.width!==t&&r.setState({
width:t
}
),r.widthClip=t-(2*r.titleStyle().paddingHorizontal+136)
}
,r.isPad=function(){
return _r(d[12]).ScreenUtils.isMedium(r.width)
}
,r.isPadHorizontal=function(){
return _r(d[12]).ScreenUtils.isPadHorizontal(r.width,r.height)
}
,r.titleStyle=function(){
// 变量
var t: any = 16,e=71,i=53;
return r.isPad()&&!r.isPadHorizontal()?(t=24,e=79,i=60):r.isPad()&&r.isPadHorizontal()?(t=32,e=87,i=67):(t=16,e=71,i=53),{
paddingHorizontal:t,right:e,textFloatRight:i
}

}
,r.state={
isShowFloat:1!==r.props.isShowKey,width:_r(d[12]).CommonUtils.getWindowSize(r.props.pageType).screenWidth
}
,r
}
return(0,r.default)(u,a),(0,e.default)(u,[{
key:"componentDidMount",value:function(){
this.state.isShowFloat&&this.setFloatLayerTime()
}

}
,{
key:"componentWillUnmount",value:function(){
this.timer&&clearTimeout(this.timer),_r(d[12]).StorageUtil.setStorage('showAccessoryFlag',1,0)
}

}
,{
key:"filterCharacter",value:function(t){
var e=new RegExp("[`~!@#$^&*()=|{

}
':;
',\\[\\]<>/?~\uff01@#\uffe5\u2026\u2026&*\uff08\uff09\u2014\u2014|{

}
\u3010\u3011\u2018\uff1b\uff1a\u201d\u201c'\u3002\uff0c\u3001\uff1f%]"),i='';
if(!t)return'';
for(var o=0;
o<t.length;
o++)i+=t.substr(o,1).replace(e,'');
return i
}

}
,{
key:"render",value:function(){
// 变量
var t: any = this,e=this.state.isShowFloat,i=this.props,o=i.pageName,r=i.keyWord,a=this.filterCharacter(o),c=this.filterCharacter(r);
return(0,_r(d[13]).jsx)(_r(d[12]).WithTheme,{
themeStyles:s.default,children:function(i,o,r,s){
return t.initWidth(r,s),(0,_r(d[13]).jsxs)(l.View,{
style:[_r(d[12]).PlatformUtils.isApp()?i.titleApk:i.title,{
width:r,paddingHorizontal:t.titleStyle().paddingHorizontal
}
],children:[(0,_r(d[13]).jsxs)(l.View,{
style:i.returnStyle,children:[(0,_r(d[13]).jsx)(l.TouchableOpacity,{
style:i.iconBackGround,onPress:t.onPressBack,children:(0,_r(d[13]).jsx)(n.default,{
iconName:"ic24-back",normalCol:o.C31.color,opacity:o.C12.opacity,width:24,height:24
}
)
}
),(0,_r(d[13]).jsx)(l.View,{
style:{
justifyContent:'center',width:t.widthClip
}
,children:(0,_r(d[13]).jsx)(l.Text,{
numberOfLines:1,style:[i.leftText],ellipsizeMode:'tail',children:a||c+(0,_r(d[12]).t)('accessoryServices')
}
)
}
)]
}
),(0,_r(d[13]).jsxs)(l.View,{
style:{
flexDirection:'row'
}
,children:[(0,_r(d[13]).jsx)(l.TouchableOpacity,{
style:[i.accessClick,i.iconBackGround],onPress:t.onClickBack,children:(0,_r(d[13]).jsx)(n.default,{
iconName:"ic_Accessories",width:"24",height:"24",normalCol:o.C31.color,opacity:o.C12.opacity
}
)
}
),(0,_r(d[13]).jsx)(l.TouchableOpacity,{
style:[i.accessMargin,i.iconBackGround],onPress:t.onSearch,children:(0,_r(d[13]).jsx)(n.default,{
iconName:"search",width:"24",height:"24",normalCol:o.C31.color,opacity:o.C12.opacity
}
)
}
)]
}
),e?(0,_r(d[13]).jsxs)(_r(d[13]).Fragment,{
children:[(0,_r(d[13]).jsx)(l.View,{
style:[i.textFloat,_r(d[12]).PlatformUtils.isHarmony()&&i.zIndexHarmony,{
right:t.titleStyle().textFloatRight
}
],children:(0,_r(d[13]).jsx)(l.Text,{
style:i.textTolt,children:"\u67e5\u770b\u5176\u4ed6\u673a\u578b"
}
)
}
),(0,_r(d[13]).jsx)(l.View,{
style:[i.iconText,{
right:t.titleStyle().right,zIndex:-1
}
,_r(d[12]).PlatformUtils.isHarmony()&&i.zIndexHarmony],children:(0,_r(d[13]).jsx)(n.default,{
iconName:"menu-corner",width:"25",height:"25",normalCol:_r(d[12]).CommonUtils.colorRgba(o.C17.color,.8)
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
)(a.Component);
_e.default=(0,_r(d[12]).monitor)(u.default)((0,_r(d[12]).itemExposeHoc)(f))
}
),"8a41ee549bee1c223dc6ce0dc09ca230794c78ab8e067005c096d44a58134a40",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","3d5167fc74308e17233415971da6e239c4744b6cafd64309265846c2a6c393c9","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","017509f8ac92156ebcc079bc3bec882394bb664b591623ee7425bdf6faf3d8fe","0e4b4cf339c32c9adeb992be70cb3082d0c8cc2ee09cbb9318df2f7fbc8b8229","ce40b26e2d2c2fd8cbf08aad953dd41009a2cc08e9132e712e70dd9cb84dcf17","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
title:{
position:'fixed',top:0,zIndex:2,justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:56,backgroundColor:o.S32.backgroundColor
}
,titleApk:{
justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:56,backgroundColor:o.S32.backgroundColor
}
,leftText:Object.assign({
marginLeft:8
}
,o.C12,o.T12,{
fontWeight:'bold'
}
),textTolt:Object.assign({

}
,o.T7,o.C71,{
fontSize:r(d[1]).CommonUtils.getScaleSize(o.T7.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR),lineHeight:r(d[1]).CommonUtils.getScaleSize(o.T7.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR)
}
),iconBackGround:{
backgroundColor:o.S13.backgroundColor,width:40,height:40,alignItems:'center',justifyContent:'center',borderRadius:40
}
,accessClick:{
marginLeft:8
}
,accessMargin:{
marginLeft:8
}
,textFloat:{
position:'absolute',bottom:-34-r(d[1]).CommonUtils.getScaleSize(o.T7.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR),right:53,height:r(d[1]).CommonUtils.getScaleSize(o.T7.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR)+26,backgroundColor:o.C17.color,paddingHorizontal:12,paddingVertical:13,borderRadius:18,alignItems:'center',shadowColor:'rgba(0, 0, 0, 0.2)',shadowOpacity:.8,shadowRadius:60,shadowOffset:{
width:0,height:10
}

}
,zIndexHarmony:{
zIndex:1
}
,iconText:{
position:'absolute',bottom:-8
}
,returnStyle:{
flexDirection:'row',position:'relative'
}

}
)
}

}
),"017509f8ac92156ebcc079bc3bec882394bb664b591623ee7425bdf6faf3d8fe",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t){
// 变量
var s: any = t?'\u70b9\u51fb\u641c\u7d22\u6309\u94ae':'\u70b9\u51fb\u67e5\u770b\u5176\u5b83\u8bbe\u5907\u914d\u4ef6\u6309\u94ae';
return{
data:{
actionCode:r(d[0]).PlatformUtils.isApp()?t?'100090101':'100092003':t?'200090101':'200092003',actionName:s,eventType:r(d[0]).EVENT_TYPE.EVENT_TYPE_CLICK,pageId:this.props.pageId,content:{
click:'1'
}
,pageCatCode:'p_accessoriesResult',pageCatName:'\u914d\u4ef6\u641c\u7d22\u7ed3\u679c\u9875',resSiteCode:'p_accessoriesResult_result',resSiteName:'\u914d\u4ef6\u7ed3\u679c\u9875'
}

}

}

}

}
),"ce40b26e2d2c2fd8cbf08aad953dd41009a2cc08e9132e712e70dd9cb84dcf17",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n){
return t.StyleSheet.create({
bodyStyle:{

}
,emptyStyle:{
width:'100%',flex:1,margin:'auto',justifyContent:'center',alignItems:'center',backgroundColor:n.S32.backgroundColor,zIndex:-1
}
,emptyText:Object.assign({

}
,n.T10,n.C15,{
paddingTop:8,fontSize:r(d[1]).CommonUtils.getScaleSize(n.T10.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T10.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR)
}
)
}
)
}

}
),"3d5a528bd2e4b7a8235602215ebae2f940c3a948d3c51a3b16d8a8d5e8d9b6ef",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.handleI18nextNative=e.handleI18next=void 0;
// 变量
var n: any = r(d[0])(r(d[1]));
e.handleI18nextNative=function(t,u){
if(u){
var l=n.default.getModule(u),o={

}
;
return o[u]={
translation:l.default
}
,r(d[2]).i18n.init(o,u,r(d[2]).BussinessDomain.CP,t)
}

}
,e.handleI18next=function(){
// 变量
var t: any = r(d[2]).env.defaultLang;
if(t){
var u=n.default.getModule(t),l={

}
;
return l[t]={
translation:u.default
}
,r(d[2]).i18n.init(l,t,r(d[2]).BussinessDomain.CP)
}

}

}
),"26abed5e0338f4e7f6ab2c7c877c4313b45f687e86fa36e42d6072f91e82bfed",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","b9be7067bc2d2842b523cb5be207b1a3585e8dfddca1d0b5ff594f0fe582d194","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(e,a,m,i,n,r,l){
n.exports={
HOME_PAGE:{
name:"HomePage",displayName:"vrn-homepage"
}
,SEC_Kill:{
name:"SecKill",displayName:"vrn-seckillpage"
}
,ACTIVITY:{
name:"Activity",displayName:"vrn-activity"
}
,PREVIEW:{
name:"Preview",displayName:"vrn-preview"
}
,CATEGORY:{
name:"Category",displayName:"vrn-Category"
}
,SEARCH:{
name:"Search",displayName:"vrn-search"
}
,PERSONAL:{
name:"Personal",displayName:"vrn-personal"
}
,SP_ACTIVITY:{
name:"SimpleActivity",displayName:"vrn-sp-activity"
}
,COMMENT:{
name:"Comment",displayName:"vrn-comment"
}
,MEMBER:{
name:"Member",displayName:"vrn-member"
}
,DISCOVER_NEW:{
name:"DiscoverNew",displayName:"vrn-discoverNew"
}

}

}
),"96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5",[]);

__r("a3388b1ba7925abc3ce147ef1044d0a78de8ff49daf295e7ea99ff28af791e3a");

__r("3cf24871150e99191b7410b825956622df18d0fc65647ac3054bd0b420958ec5");

//# sourceMappingURL=search.android.bundle.map