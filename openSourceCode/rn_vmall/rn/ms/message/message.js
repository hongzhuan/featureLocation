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
),o.AppRegistry.registerComponent(u.MESSAGE.name,(function(){
return s.default
}
))
}
),"a8865d635c188d8286e98fb2cc9fafbc721b1378ad269cbadc04556feb6e7248",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","2cf7b9ce8ace121eb77ae1df31d7795a4bfa603de7c233acd85ff565dc56c702","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = t(r(d[1])),s=t(r(d[2])),o=t(r(d[3])),n=t(r(d[4])),l=t(r(d[5])),u=t(r(d[6])),h=r(d[7]),p=r(d[8]),v=r(d[9]),c=r(d[10]),f=r(d[11]),S=t(r(d[12])),y=r(d[13]),k=r(d[14]),D=r(d[15]);
// 函数
function P(): any {
try{
var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(t){

}
return(P=function(){
return!!t
}
)()
}
(0,y.enableScreens)(!1);
var w=h.StyleSheet.create({
layoutViewStyle:{
position:'absolute',width:'100%',height:'100%',backgroundColor:'transparent',zIndex:-1e3,pointerEvents:'none'
}

}
),I=(function(t){
// 函数
function u(t: any): any {
var s,l,p,c;
return(0,e.default)(this,u),l=this,p=u,c=[t],p=(0,n.default)(p),s=(0,o.default)(l,P()?Reflect.construct(p,c||[],(0,n.default)(l).constructor):p.apply(l,c)),v.DeviceUtils.deviceStore(t),s.state={
updateEnv:!1,pageId:'',defaultStyle:'default',DarkStyle:!1,width:h.Dimensions.get('window').width,height:h.Dimensions.get('window').height,i18next:null,msgStatusBarHeight:s.getStatusBarHegiht()
}
,s._onLayout=s._onLayout.bind(s),(0,v.captureException)('message'),s
}
return(0,l.default)(u,t),(0,s.default)(u,[{
key:"componentDidMount",value:function(){
// 变量
var t: any = this;
if('web'!==h.Platform.OS){
var e,s,o,n,l,u,p,c=this.props,f=c.apiEnv,S=c.darkConfigInfo,y=c.darkMode,D=c.fontSize;
'android'===h.Platform.OS&&v.fontStore.setFontMutiple(D);
// 变量
var P: any = this.props,w=P.tabname,I=P.tabindex;
I=Number(I),isNaN(I)&&(I=0),v.TabsTopStore.setTabNameIndex(w||'',I);
var B=f&&JSON.parse(f)||{

}
,b=(null==(e=this.props)?void 0:e.userAbTest)&&JSON.parse(this.props.userAbTest)||[];
b=null==(s=b)||null==(o=s.map((function(t){
return t.strategyId||''
}
)))?void 0:o.join(','),B.strategies=b||'';
// 变量
var N: any = null==(n=this.props)||null==(l=n.pageId)?void 0:l.toString();
this.darkDate=S&&('android'===h.Platform.OS?JSON.parse(JSON.parse(S)):JSON.parse(S))||{

}
,y&&JSON.parse(y)&&this.darkDate.darkMode&&'Y'===this.darkDate.darkMode?(this.setState({
defaultStyle:'huawei_dark',DarkStyle:!0
}
),v.DarkStore.setDarkBool(y)):(this.setState({
defaultStyle:'default',DarkStyle:!1
}
),v.DarkStore.setDarkBool(!1)),B.pageId=N,v.PlatformUtils.isHarmony()&&(B.platform='harmony'),v.appIdStore.setApkPackageName(null==(u=this.props)?void 0:u.appPackageName),v.appIdStore.setIsPreload(this.props.isPreInstalledPackage),(0,v.envService)(B),(0,k.ImgArrayUpdata)(null==(p=this.props)?void 0:p.isPreInstalledPackage,B.cmsCdnPath),this.setState({
updateEnv:!0,pageId:N
}
),v.PlatformUtils.isHarmony()&&(this.listenerNative=h.DeviceEventEmitter.addListener('NativeCallAction',(function(e){
var s=e||{

}
,o=s.service,n=s.action,l=s.param;
'screen'===o&&'avoidAreaChange'===n&&'number'==typeof(null==l?void 0:l.statusBarHeight)&&l.statusBarHeight!==t.state.msgStatusBarHeight&&t.setState({
msgStatusBarHeight:l.statusBarHeight
}
)
}
)))
}

}

}
,{
key:"componentWillUnmount",value:function(){
this.listenerNative&&this.listenerNative.remove()
}

}
,{
key:"getStatusBarHegiht",value:function(){
// 变量
var t: any = this.props,e=t.statusBarHeight,s=t.statusBarHegiht;
return v.PlatformUtils.isIOS()?s||e||0:v.PlatformUtils.isHarmony()&&'number'==typeof e?e:h.StatusBar.currentHeight||0
}

}
,{
key:"_onLayout",value:function(t){
// 变量
var e: any = t.nativeEvent.layout,s=e.width,o=e.height;
Math.floor(this.state.width)!==Math.floor(s)&&this.setState({
width:s,height:o
}
)
}

}
,{
key:"render",value:function(){
var t,e=this.props.RnPromptMsg,s=(0,v.getLanguage)(this.props),o=(0,f.handleI18nextNative)(e,s),n=v.PlatformUtils.isIOS()?!v.DarkStore.QMbool&&this.state.DarkStyle:this.props.darkMode&&'Y'===(null==(t=this.darkDate)?void 0:t.darkMode);
return v.DarkStore.setDarkBool(n),this.state.updateEnv&&o?(0,D.jsx)(v.Provider,{
theme:n?'huawei_dark':'default',width:this.state.width,height:this.state.height,children:(0,D.jsx)(p.Provider,{
store:v.AppStore,children:(0,D.jsxs)(D.Fragment,{
children:[(0,D.jsx)(c.I18nextProvider,{
i18n:o,children:(0,D.jsx)(S.default,Object.assign({

}
,this.props,{
pageId:this.props.pageId,pageAlias:this.props.pn,DarkStyle:n,msgStatusBarHeight:this.state.msgStatusBarHeight
}
))
}
),(0,D.jsx)(h.View,{
onLayout:this._onLayout,style:w.layoutViewStyle
}
)]
}
)
}
)
}
):(0,D.jsx)(h.View,{
onLayout:this._onLayout,style:w.layoutViewStyle
}
)
}

}
])
}
)(u.default.Component);
_e.default=I
}
),"2cf7b9ce8ace121eb77ae1df31d7795a4bfa603de7c233acd85ff565dc56c702",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41","bb16bf2e4a3383c96b69077535dc96abdd0a92662cb2545d5c24a875a69b4a96","340b1502b641727bf22f27c95a0baff36a6b527a30ee3d0d0864f72ab925d200","6310a04b881ed905f1bdf4c0f9d054035622e97f0fd28f13c5b95f073129ad55","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

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
var t=e(_r(d[1])),n=e(_r(d[2])),r=e(_r(d[3])),o=e(_r(d[4])),u=e(_r(d[5])),a=(function(e,t){
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
var a: any = o?Object.getOwnPropertyDescriptor(e,u):null;
a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[6])),i=_r(d[7]),l=e(_r(d[8])),f=_r(d[9]),s=_r(d[10]);
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
var v='MessageCenter',w={

}
,y=0,O=function(){
return'web'===i.Platform.OS
}
;
O()&&(f.UrlUtils.getQueryStr('targetRoute')?(w=f.UrlUtils.getQueryStrAll()).targetRoute&&(v=w.targetRoute):v='MessageCenter',y=window.screen.width);
var h=(function(e){
// 函数
function a(e: any): any {
var n,u,l,f;
if((0,t.default)(this,a),u=this,l=a,f=[e],l=(0,o.default)(l),n=(0,r.default)(u,p()?Reflect.construct(l,f||[],(0,o.default)(u).constructor):l.apply(u,f)),'android'===i.Platform.OS||'ios'===i.Platform.OS){
// 变量
var s: any = null==e?void 0:e.targetRoute;
v=s||'MessageCenter'
}
return n
}
return(0,u.default)(a,e),(0,n.default)(a,[{
key:"componentDidMount",value:function(){
O()&&f.PlatformUtils.isWap(i.Dimensions.get('window').width)&&(this.resizeListener=window.addEventListener('resize',(function(){
Math.abs(window.screen.width-y)>200&&window.location.reload()
}
)))
}

}
,{
key:"componentWillUnmount",value:function(){
v='MessageCenter',O()&&this.resizeListener&&window.removeEventListener('resize',(function(){

}
))
}

}
,{
key:"render",value:function(){
return(0,s.jsx)(l.default,Object.assign({
defaultRoute:v,queryParams:w
}
,this.props))
}

}
])
}
)(a.Component);
_e.default=h
}
),"340b1502b641727bf22f27c95a0baff36a6b527a30ee3d0d0864f72ab925d200",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","22da091045b0a7b548871e4357f84fa9f43bcf7db420e74729f3173ac62e80ab","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),i=e(_r(d[3])),r=e(_r(d[4])),o=e(_r(d[5])),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = k(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var a: any = r?Object.getOwnPropertyDescriptor(e,o):null;
a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=e[o]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[6])),s=_r(d[7]),l=_r(d[8]),u=_r(d[9]),c=_r(d[10]),f=_r(d[11]),p=e(_r(d[12])),v=_r(d[13]),h=_r(d[14]);
// 函数
function k(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(k=function(e){
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
var P=(function(e){
// 函数
function a(e: any): any {
var n,o,l,u;
return(0,t.default)(this,a),o=this,l=a,u=[e],l=(0,r.default)(l),(n=(0,i.default)(o,y()?Reflect.construct(l,u||[],(0,r.default)(o).constructor):l.apply(o,u))).handleApkBack=function(){
return c.DeviceUtils.goBack(),!0
}
,n._isLogin=function(){
if(c.PlatformUtils.isApp()){
n.props.isLogin||n.state.isLogin||n.getLogin()
}
else{
// 变量
var e: any = c.Service.openApiDomain+"mcp/user/queryUserLoginStatus";
c.Http.get(e,{
portal:c.CommonUtils.getPortal(),country:'CN',lang:'zh-CN'
}
).then((function(e){
e.login||n.getLogin()
}
))
}

}
,n.getLogin=function(){
(0,f.goLogin)(n.isPc())
}
,n.getSize=function(){
// 变量
var e: any = n.originWidth;
return(0,c.ScreenSize)(e)
}
,n.isPc=function(){
return'large'===n.getSize()
}
,n.tipErrorInfo=function(e){
var t,n=(null==(t=e.data)?void 0:t.info)||(null==e?void 0:e.info)||(null==e?void 0:e.msg);
n&&s.DeviceEventEmitter.emit('showToast',{
text:n,pageType:'userPage'
}
)
}
,n.state={
initialRoute:e.defaultRoute||'MessageCenter',errorType:c.ERROR_TYPE.OTHER_ERROR,loading:!0,isRefreshing:!1,error:!1,customerVproInfoInited:!1,isLogin:!1,userAgentType:0,mctMessageLink:'',unreadMsgNum:0
}
,n
}
return(0,o.default)(a,e),(0,n.default)(a,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
'web'===s.Platform.OS?c.Cookies.set('_areacode','CN',{
domain:'.vmall.com'
}
):this.listenerNative=s.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var n,i,r=null==t?void 0:t.action,o=null==t?void 0:t.param;
e.state.isLogin||'isLogin'!==r||(null==(n=e.child)||n.setVProService(),null==(i=e.child)||i._queryUnreadMsgNum(!0));
e.setState({
isLogin:Boolean(Number(null==o?void 0:o.isLogin))
}
)
}
)),this._isLogin(),c.PlatformUtils.isApp()&&s.BackHandler.addEventListener('hardwareBackPress',this.handleApkBack)
}

}
,{
key:"componentDidUpdate",value:function(e){
this.props.defaultRoute!==e.defaultRoute&&this.setState({
initialRoute:this.props.defaultRoute
}
)
}

}
,{
key:"componentWillUnmount",value:function(){
'web'===s.Platform.OS&&c.Cookies.set('_areacode',null,{
domain:'.vmall.com'
}
),c.PlatformUtils.isApp()&&(s.BackHandler.removeEventListener('hardwareBackPress',this.handleApkBack),this.listenerNative&&this.listenerNative.remove()),this.timer&&clearInterval(this.timer)
}

}
,{
key:"render",value:function(){
var e=this,t=this.props,n=(0,l.createStackNavigator)(),i=this.state.initialRoute,r=Object.assign({

}
,u.DefaultTheme,{
colors:Object.assign({

}
,u.DefaultTheme.colors,{
background:'transparent'
}
)
}
);
return(0,h.jsxs)(u.NavigationContainer,{
theme:r,children:[(0,h.jsx)(n.Navigator,{
initialRouteName:i,detachInactiveScreens:!c.PlatformUtils.isApp(),children:(0,h.jsx)(n.Screen,{
name:"MessageCenter",options:{
headerShown:!1,title:(0,c.t)('message_center')
}
,children:function(n){
return(0,h.jsx)(p.default,Object.assign({
handleError:e.tipErrorInfo,ref:function(t){
e.child=t
}

}
,n,t,e.state))
}

}
)
}
),(0,h.jsx)(v.Toast,{
pageType:"userPage"
}
)]
}
)
}

}
])
}
)(a.Component);
_e.default=P
}
),"22da091045b0a7b548871e4357f84fa9f43bcf7db420e74729f3173ac62e80ab",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","b59f5741143d747a6b7458314d550fc2033674c2475d4bcae93d5c5db8ca365c","58acbb2a11d12e39fd248a1b96db102c400867b55536474cd5eb8b47fc1caf0e","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","6cf6cde1ad3056c51131464f60a10e760add564bbda68b8ce65cc72bcfab2e3e","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,i=e(_r(d[1])),o=e(_r(d[2])),s=e(_r(d[3])),n=e(_r(d[4])),a=e(_r(d[5])),r=e(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = P(t);
if(i&&i.has(e))return i.get(e);
var o={
__proto__:null
}
,s=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var n in e)if("default"!==n&&{

}
.hasOwnProperty.call(e,n)){
// 变量
var a: any = s?Object.getOwnPropertyDescriptor(e,n):null;
a&&(a.get||a.set)?Object.defineProperty(o,n,a):o[n]=e[n]
}
return o.default=e,i&&i.set(e,o),o
}
)(_r(d[7])),c=_r(d[8]),u=_r(d[9]),f=_r(d[10]),p=_r(d[11]),y=_r(d[12]),h=e(_r(d[13])),S=e(_r(d[14])),v=e(_r(d[15])),M=e(_r(d[16])),N=e(_r(d[17])),C=e(_r(d[18])),T=_r(d[19]),_=_r(d[20]),w=_r(d[21]);
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
function E(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(E=function(){
return!!e
}
)()
}
var I=(0,u.observer)(t=(function(e){
// 函数
function t(e: any): any {
var s,r,l,u;
return(0,o.default)(this,t),r=this,l=t,u=[e],l=(0,a.default)(l),(s=(0,n.default)(r,E()?Reflect.construct(l,u||[],(0,a.default)(r).constructor):l.apply(r,u))).originWidth=f.CommonUtils.getWindowSize().screenWidth,s.originHeight=f.CommonUtils.getWindowSize().screenHeight,s.doNotDisturbDays=30,s.sysNoticeShow=!1,s.handleIosStateChange=function(e){
'active'===e&&s.getNotifyInfo()
}
,s.handleAppPageChange=function(e){
var t,i;
('page'===(null==e?void 0:e.service)&&'msgRefresh'===(null==e?void 0:e.action)&&s.handleAppStateChange('active'),'page'===(null==e?void 0:e.service)&&'pageLeave'===(null==e?void 0:e.action)&&s.props.uniqueId===(null==(t=e.param)?void 0:t.uniqueId)&&(f.PlatformUtils.isAndroid()||f.PlatformUtils.isHarmony()))&&(null!=(i=e.param)&&i.isLeave?(f.CommonUtils.storeE2eId(f.PAGE_TYPE_E2EID.message,!1,{
e2eId:s.e2eId
}
),s.getNotifyInfo()):f.CommonUtils.storeE2eId(f.PAGE_TYPE_E2EID.message,!1))
}
,s.handleAppStateChange=function(e){
var t;
'active'===e&&(s._queryUnreadMsgNum(),s._getUserHisSessionNoticeNum(),null==(t=s.refMessage)||t._getUserHisSessionChatList(),s.emitTimer&&(clearTimeout(s.emitTimer),s.emitTimer=null,s.emitMessageNumberChange()))
}
,s.emitMessageNumberChange=function(){
f.PlatformUtils.isApp()&&f.RnBridge.invokeVmallNative('common','shopMessageNumberChange',{

}
)
}
,s.emitTimer=null,s.delayEmit=function(){
f.PlatformUtils.isApp()&&(s.emitTimer&&clearTimeout(s.emitTimer),s.emitTimer=setTimeout((function(){
s.emitMessageNumberChange()
}
),5e3))
}
,s.login=(0,i.default)((function*(){
yield f.AppStore.getIsLogin(),f.AppStore.isLogin&&s._queryUserInfo()
}
)),s._queryUserInfo=function(){
// 变量
var e: any = f.CommonUtils.getPortal();
f.HttpService.getUserInfo(e).then((function(e){
var t=(null==e?void 0:e.userInfo)||{

}
,i=t.uid,o=t.isVpro,n=t.consumeYear;
'web'===c.Platform.OS&&i&&p.groupDialogManager.getPrivacy(i),s.setState({
isVpro:o,userInfo:null==e?void 0:e.userInfo,consumeYear:n
}
,(function(){
f.PlatformUtils.isApp()&&s.getNotifyInfo()
}
))
}
)).catch((function(){
'web'===c.Platform.OS&&p.groupDialogManager.getPrivacy()
}
))
}
,s.clearMsg=function(){
s.modalClose();
// 变量
var e: any = s.state;
e.logisticsMsgCount+e.ntfMsgCount+e.activityMsgCount>0&&s._readAllMsg(),(0,y.clearUserHisSessionNotice)().then((function(e){
var t;
'0'===(null==e?void 0:e.code)&&(s._getUserHisSessionNoticeNum(),null==(t=s.refMessage)||t._getUserHisSessionChatList(),s.emitMessageNumberChange())
}
)).catch((function(e){
var t,i;
'0'===(null==(t=e.data)?void 0:t.code)?(s._getUserHisSessionNoticeNum(),null==(i=s.refMessage)||i._getUserHisSessionChatList(),s.emitMessageNumberChange()):s.handleMsg(null==e?void 0:e.data)
}
))
}
,s.msgNeedRead=function(e,t,i){
return e===t&&i>0
}
,s.changePage=function(e){
// 变量
var t: any = s.state,i=t.activityMsgCount,o=t.ntfMsgCount,n=t.logisticsMsgCount;
s.clickReport(e),(s.msgNeedRead(e,y.MSG_TYPES.activityMsg,i)||s.msgNeedRead(e,y.MSG_TYPES.ntfMsg,o)||s.msgNeedRead(e,y.MSG_TYPES.logisticsMsg,n))&&s._updateMsgRead(e)
}
,s.clickReport=function(e){
y.reportMap[e]&&(0,y.eventReport)({
actionCode:y.reportMap[e].actionCode,actionName:y.reportMap[e].actionName,eventType:'click',comId:'messagecenter_header',pageId:'message'
}
)
}
,s.handleMsg=function(e){
e&&s.props.handleError(e)
}
,s.modalClick=function(e){
var t=s.state,i=t.currentTopType,o=t.currentDialogData,n={
cancel:y.cancelTopUserHisSessionChat,setTop:y.setTopUserHisSessionChat,delete:y.delUserHisSessionChat
}
,a=null;
1===e?a=i>0?'cancel':'setTop':2===e&&(a='delete'),n[a]&&(n[a](o).then((function(e){
var t;
'0'===(null==e?void 0:e.code)?(null==(t=s.refMessage)||t._getUserHisSessionChatList(),s._getUserHisSessionNoticeNum()):s.handleMsg(e)
}
)).catch((function(e){
var t,i;
'0'===(null==(t=e.data)?void 0:t.code)?(s._getUserHisSessionNoticeNum(),null==(i=s.refMessage)||i._getUserHisSessionChatList()):s.handleMsg(null==e?void 0:e.data)
}
)),s.setState({
showModal:!1
}
))
}
,s.modalClose=function(){
s.setState({
showModal:!1
}
)
}
,s.getMsgCount=function(e){
return e>0&&e<=99?'('+e+')':e>99?'(99+)':''
}
,s.menuOperate=function(e,t){
var i=e.setTopMsgType>0?[{
type:1,text:(0,f.t)('unpinTop')
}
,{
type:2,text:(0,f.t)('delete')
}
]:[{
type:1,text:(0,f.t)('sticky')
}
,{
type:2,text:(0,f.t)('delete')
}
],o=t.nativeEvent.pageY,n=t.nativeEvent.pageX,a=c.Dimensions.get('window').width;
n=n+96>=a?a-96-10:n-10,o=o+96>=c.Dimensions.get('window').height?o-96:o,s.setState({
currentDialogData:Object.assign({

}
,s.state.currentDialogData,{
seCode:null==e?void 0:e.seCode
}
),currentTopType:e.setTopMsgType,Modal:{
top:o,left:n
}
,showModal:!0,modalData:i
}
)
}
,s._readAllMsg=function(){
(0,y.readAllMsg)().then((function(e){
'0'===(null==e?void 0:e.code)&&(s._queryUnreadMsgNum(),s.emitMessageNumberChange())
}
)).catch((function(e){
s.handleMsg(null==e?void 0:e.data)
}
))
}
,s._updateMsgRead=function(e){
(0,y.updateMsgRead)(e).then((function(e){
'0'===(null==e?void 0:e.code)&&s._queryUnreadMsgNum()
}
)).catch((function(e){
s.handleMsg(null==e?void 0:e.data)
}
))
}
,s.setVProService=function(){
s._queryUserInfo()
}
,s._queryUnreadMsgNum=function(){
// 变量
var e: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0];
(0,y.queryUnreadMsgNum)().then((function(t){
// 变量
var i: any = s.state.tabType;
if('0'===t.code){
// 变量
var o: any = t.activityMsgNum,n=t.logisticsMsgNum,a=t.ntfMsgNum;
s.setState({
logisticsMsgCount:n||0,ntfMsgCount:a||0,activityMsgCount:o||0
}
,(function(){
e&&s.tabChange(i)
}
))
}
else{
var r,l;
0!==i&&(null==(r=s.refMsgList)||r.clickTab()),i===y.MSG_TYPES.activityMsg&&(null==(l=s.refActivity)||l.clickTab())
}

}
)).catch((function(e){
s.handleMsg(null==e?void 0:e.data)
}
))
}
,s._getUserHisSessionNoticeNum=function(){
(0,y.getUserHisSessionNoticeNum)().then((function(e){
'0'===(null==e?void 0:e.code)&&s.setState({
noticeNum:e.noticeNum||0
}
)
}
)).catch((function(e){
var t,i;
'0'===(null==(t=e.data)?void 0:t.code)&&s.setState({
noticeNum:(null==(i=e.data)?void 0:i.noticeNum)||0
}
)
}
))
}
,s.wait=function(e){
return new Promise((function(t){
setTimeout(t,e)
}
))
}
,s.onWebScroll=function(){
// 变量
var e: any = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,t="rgba(0,0,0,"+Math.min(e/56,1)+")";
s.setState({
headerBg:t,showModal:!1
}
)
}
,s.handleScroll=function(e){
c.DeviceEventEmitter.emit('scroll',e)
}
,s.tabChange=function(e){
'web'===c.Platform.OS&&f.Cookies.set('message-tabType',e,{

}
),s.setState({
tabType:e,showModal:!1
}
,(function(){
var t,i;
0!==e&&(null==(t=s.refMsgList)||t.clickTab()),e===y.MSG_TYPES.activityMsg&&(null==(i=s.refActivity)||i.clickTab())
}
)),s.changePage(e)
}
,s.isPadHorizontal=function(){
return f.ScreenUtils.isPadHorizontal(s.originWidth,s.originHeight)
}
,s.isSmall=function(){
return f.ScreenUtils.isSmall(s.originWidth)
}
,s.isShowNotifyDialogFunc=(0,i.default)((function*(){
var e,t,i=yield f.HttpService.querySystemConfig("['RN_MESSAGE_NOTIFY_DONOT_DISTURB_DAYS','message_center_notify_buoy_switch']");
i.systemConfigInfos&&(s.doNotDisturbDays=Number(null==(e=i.systemConfigInfos.RN_MESSAGE_NOTIFY_DONOT_DISTURB_DAYS)?void 0:e.systemConfigValue)||30,s.sysNoticeShow='1'===(null==(t=i.systemConfigInfos.message_center_notify_buoy_switch)?void 0:t.systemConfigValue));
// 变量
var o: any = (yield f.StorageUtil.getSpValueAll('notifyCloseTime','String'))||0,n=((new Date).getTime()-Number(o))/864e5>=s.doNotDisturbDays,a=f.AppStore.isLogin,r=!y.CONSUME_YEAR_TYPE.includes(s.state.consumeYear);
return a&&s.sysNoticeShow&&r&&n
}
)),s.getNotifyInfo=function(){
f.RnBridge.invokeVmallNative('common','getNotificationSwitch').then((function(){
var e=(0,i.default)((function*(e){
if(e)if(s.getNotificationSwitchStatus(e)){
// 变量
var t: any = yield s.isShowNotifyDialogFunc(),i=e.system,o=e.logistics,n=e.service,a=e.activity,r=e.shortMessage;
s.setState({
system:i,logistics:o,service:n,activity:a,shortMessage:r,isShowNotifyDialog:t,isShowNotifyBuoy:!0
}
)
}
else s.setState({
isShowNotifyDialog:!1,isShowNotifyBuoy:!1
}
)
}
));
return function(t){
return e.apply(this,arguments)
}

}
)())
}
,s.getNotificationSwitchStatus=function(e){
// 变量
var t: any = e.system,i=e.logistics,o=e.service,s=e.activity,n=e.shortMessage;
return'0'===t||'0'===i||'0'===o||'0'===s||'0'===n
}
,s.clickOpenNotificationSettings=function(){
s.setState({
isShowNotifyBuoy:!1
}
);
var e=s.state,t={
switchState:{
system:e.system,logistics:e.logistics,service:e.service,activity:e.activity,shortMessage:e.shortMessage
}
,scene:'0',pageURL:'/sc/message/',type:'1'
}
;
f.RnBridge.invokeVmallNative('common','openNotificationSettings',{
data:JSON.stringify(t)
}
)
}
,s.clickClose=function(){
// 变量
var e: any = (new Date).getTime();
f.StorageUtil.setSpValueAll('notifyCloseTime',e.toString(),'String'),s.setState({
isShowNotifyBuoy:!1
}
)
}
,s.renderNotifyComponent=function(){
// 变量
var e: any = f.CommonUtils.getWindowSize(),t=e.screenWidth,i=e.screenHeight,o=s.state,n=o.isShowNotifyBuoy,a=o.isShowNotifyDialog,r=s.props.mSafeAreaLayoutGuideBottom||0;
if(n&&a)return(0,w.jsx)(p.NotifyCompnent,{
screenWidth:t,screenHeight:i,clickOpen:s.clickOpenNotificationSettings,clickClose:s.clickClose,sysNoticeBtnTxt:(0,f.t)('sysNoticeBtnTxt'),sysNoticeTxt:(0,f.t)('sysNoticeTxt'),isNeedOffset:!0,offsetHeight:r,pageType:f.PAGE_TYPE.message,pageId:f.PAGE_TYPE.message
}
)
}
,s.state={
topMsg:y.tabData,logisticsMsgCount:0,ntfMsgCount:0,noticeNum:0,activityMsgCount:0,dialogMsg:[],refreshing:!1,showModal:!1,Modal:{
top:'50%',left:0
}
,modalData:[{
text:(0,f.t)('unpinTop'),type:1
}
,{
text:(0,f.t)('delete'),type:2
}
],currentTopType:0,currentDialogData:{
seCode:'',channelType:3
}
,tabType:y.MSG_TYPES.activityMsg,isVpro:'0',userInfo:null,system:'',logistics:'',service:'',activity:'',shortMessage:'',isShowNotifyBuoy:!0,isShowNotifyDialog:!1,consumeYear:'1'
}
,f.CommonUtils.storeE2eId(f.PAGE_TYPE_E2EID.message,!0),s.e2eId=f.E2EIdStore.pageTypeE2EIdSpanId[f.E2EIdStore.curPageType].e2eId,s
}
return(0,r.default)(t,e),(0,s.default)(t,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.login();
// 变量
var t: any = this.props.messageType,i=f.PlatformUtils.isApp()?t&&String(t):f.Cookies.get('message-tabType');
'number'==typeof i&&(i=String(i)),![y.MSG_TYPES.ntfMsg,y.MSG_TYPES.logisticsMsg,y.MSG_TYPES.activityMsg,y.MSG_TYPES.customerMsg].includes(i)&&(i=y.MSG_TYPES.activityMsg),this.setState({
tabType:i
}
),this._queryUnreadMsgNum(!0),this._getUserHisSessionNoticeNum(),f.PlatformUtils.isApp()?(f.PlatformUtils.isIOS()&&(this.iosAppStateListener=c.AppState.addEventListener('change',this.handleIosStateChange)),this.eventListener=c.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
e.handleAppPageChange(t),e.handleNotifiactionStatus(t)
}
))):this.appStateListener=c.AppState.addEventListener('change',this.handleAppStateChange),(0,y.eventReport)({
actionCode:'',actionName:(0,f.t)('page_loading'),eventType:'load',load:'1'
}
)
}

}
,{
key:"dealSystemMsgCount",value:function(e){
return this.state[e]
}

}
,{
key:"componentWillUnmount",value:function(){
var e;
'web'===c.Platform.OS&&document.removeEventListener('scroll',this.onWebScroll),this.appStateListener&&this.appStateListener.remove(),this.eventListener&&this.eventListener.remove(),null==(e=this.iosAppStateListener)||e.remove(),this.emitTimer&&clearTimeout(this.emitTimer)
}

}
,{
key:"handleNotifiactionStatus",value:function(e){
this.state.isShowNotifyBuoy&&'notification'===(null==e?void 0:e.service)&&'notificationStatus'===e.action&&this.setState({
isShowNotifyBuoy:!1
}
)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,i=t.logisticsMsgCount,o=t.ntfMsgCount,s=t.activityMsgCount,n=t.noticeNum,a=t.tabType,r=t.topMsg,l=t.isVpro,u=t.userInfo,P=this.props,E=P.mSafeAreaLayoutGuideBottom,I=P.msgStatusBarHeight,b=i+o+n+s;
b=this.getMsgCount(b);
// 变量
var D: any = f.DarkStore.darkBool,O=(null!=E?E:0)+16,U=(0,T.getCurOrderType)(p.dialogOrderStore.curDialogOrder),x=p.dialogOrderStore.curDialogOrder!==p.dialogOrderManager.Order.ORDER_NONE&&U&&(0,T.getDialogViewByOrder)(p.dialogOrderStore.curDialogOrder,'message');
return(0,w.jsxs)(w.Fragment,{
children:[x&&(0,w.jsx)(p.Privacy,{
info:U.info,pageId:'message',userInfo:u,setSaleInfoCfgOff:f.HttpService.setSaleInfoCfgOff,setSaleInfoCfgOn:f.HttpService.setSaleInfoCfgOn,signingResults:f.HttpService.signingResults
}
),(0,w.jsx)(f.WithTheme,{
themeStyles:N.default,children:function(t,i,o){
e.originWidth=o;
// 变量
var s: any = (0,_.getGridInfo)(o).pageMargin,n=o-2*s;
return(0,w.jsxs)(c.View,{
style:[t.commonStyle,{
paddingHorizontal:s,paddingTop:I
}
],onLayout:function(e){
(0,f.layout)(e,'message')
}
,nativeID:"message",children:[(0,w.jsx)(c.TouchableOpacity,{
activeOpacity:1,onPressIn:e.modalClose,children:(0,w.jsx)(S.default,Object.assign({

}
,e.props,{
normalCol:D?'#fff':'#000',title:(0,f.t)('messageCenter'),msgCount:b,clearMessage:!0,clearMsg:e.clearMsg
}
))
}
),(0,w.jsx)(c.View,{
style:t.tabContent,children:(0,w.jsxs)(c.View,{
style:{
width:n,flex:1
}
,children:[(0,w.jsx)(c.TouchableOpacity,{
activeOpacity:1,onPressIn:e.modalClose,children:(0,w.jsx)(c.View,{
style:t.systemInfo,children:r.map((function(o){
return(0,w.jsxs)(c.TouchableOpacity,{
style:t.systemInfoItem,onPress:function(){
return e.tabChange(o.type)
}
,children:[(0,w.jsxs)(c.View,{
style:t.boxPosition,children:[(0,w.jsx)(p.SvgIcon,{
iconName:a===o.type?o.icon+'-select':o.icon,width:"40",height:"40",backCol:i.C18.color+i.opacityMap[i.C18.opacity],isDefault:!0,order:1
}
),(0,w.jsx)(c.View,{
style:t.msgPosition,children:(0,w.jsx)(h.default,{
msgCount:e.dealSystemMsgCount(o.countName)
}
)
}
)]
}
),(0,w.jsx)(c.Text,{
style:[t.systemInfoText,a===o.type&&{
opacity:i.C11.opacity,fontWeight:i.T4.fontWeight
}
],children:(0,f.t)(o.text)
}
)]
}
,o.key)
}
))
}
)
}
),a===y.MSG_TYPES.customerMsg&&(0,w.jsx)(v.default,{
ref:function(t){
return e.refMessage=t
}
,isVpro:l,modalClose:e.modalClose,menuOperate:e.menuOperate,handleMsg:e.handleMsg,lastMarginBottom:O,getUserHisSessionNoticeNum:e._getUserHisSessionNoticeNum
}
),[y.MSG_TYPES.ntfMsg,y.MSG_TYPES.logisticsMsg].includes(a)&&(0,w.jsx)(M.default,{
ref:function(t){
return e.refMsgList=t
}
,lastMarginBottom:O,handleMsg:e.handleMsg,tabType:a
}
),a===y.MSG_TYPES.activityMsg&&(0,w.jsx)(C.default,{
ref:function(t){
return e.refActivity=t
}
,lastMarginBottom:O,tabType:a
}
)]
}
)
}
),e.renderNotifyComponent(),e.state.showModal&&(0,w.jsx)(c.View,{
ref:function(t){
return e.refModal=t
}
,style:[t.Modalstyle,e.state.Modal],children:e.state.modalData.map((function(i,o){
// 变量
var s: any = o!==e.state.modalData.length-1;
return(0,w.jsx)(c.Text,{
onPress:e.modalClick.bind(e,i.type),style:[t.ModalText,s&&t.ModelBorder],children:i.text
}
,i.type)
}
))
}
)]
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
)(l.Component))||t;
_e.default=I
}
),"6cf6cde1ad3056c51131464f60a10e760add564bbda68b8ce65cc72bcfab2e3e",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","62544bec19f5e5f70b48677c70f40cc2d472f7afdb389a1162d4bb847b6bed6e","1dc2978e34ddd3bee3d3d3e183f159b671890d64c4d956dfe3a4177379c362d5","e9f1b5aeeace3957dd8aa6d196f5b16285ce76a2e3eaf33e94451827b42f2098","699e9e0c6df3bfbe23886b3f825be13afad0abcdb89ed50b8aee22c5e9b4d8b8","512e4811bed9669183293a5cd5f7607e6f010a2d8fab01ff00325600fa027107","2af413e87e977062e71973e0cea16dcc2d2305a9a50287b864c222d846f8958d","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","28da3930bd0cd346d0b0dd104d6a8a5822b31c33cec4eaffbc2226bccd3b111e","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
// 变量
var t: any = r(d[0]);
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.TAB_HEIGHT=e.MSG_TYPES=e.HEADER_HEIGHT=e.CONSUME_YEAR_TYPE=void 0,e.cancelTopUserHisSessionChat=function(t){
return y('post',p.Service.openApiDomain+"mc/ichat/cancelTopUserHisSessionChat",t||{

}
)
}
,e.clearUserHisSessionNotice=function(){
return y('post',p.Service.openApiDomain+"mc/ichat/clearUserHisSessionNotice",{
channelType:3,pageNum:1,pageSize:20
}
)
}
,e.delMsgById=function(t,n){
return y('post',p.Service.openApiDomain+"mcp/message/delMsgById",{
portal:v,lang:p.MCP_LANG.CN,country:p.MCP_COUNTRY.CN,id:String(t),type:n
}
)
}
,e.delUserHisSessionChat=function(t){
return y('post',p.Service.openApiDomain+"mc/ichat/delUserHisSessionChat",t||{

}
)
}
,e.envWidgets=void 0,e.eventReport=function(t){
// 变量
var s: any = t.actionCode,c=t.actionName,u=t.eventType,v=t.pageId,C=(0,o.default)(t,l);
if(s.indexOf('/')>0){
// 变量
var N: any = s.split('/');
s=p.PlatformUtils.isApp()?N[0]:N[1]
}
var y={
actionName:c,actionCode:s,pageId:v,eventType:S[u],content:Object.assign((0,n.default)({

}
,u,'1'),C)
}
;
p.Report.eventTracingReport(y)
}
,e.formatTime=function(t){
// 变量
var n: any = new Date(M(t)).getTime(),o=(new Date).setHours(0,0,0,0),s=o-864e5,c=new Date(n).getFullYear(),u=new Date(n).getMonth()+1,l=new Date(n).getDate();
if(n>o)return _(n);
if(n<o&&n>s)return""+(0,p.t)('common_yesterday')+_(n);
if(c<new Date(o).getFullYear())return""+E(c)+(0,p.t)('year')+E(u)+(0,p.t)('month')+E(l)+(0,p.t)('date')+" "+_(n);
return""+E(u)+(0,p.t)('month')+E(l)+(0,p.t)('date')+" "+_(n)
}
,e.getUserHisSessionChatList=function(){
return y('post',p.Service.openApiDomain+"mc/ichat/getUserHisSessionChatList",{
channelType:3,pageNum:1,pageSize:20
}
)
}
,e.getUserHisSessionNoticeNum=function(){
return y('post',p.Service.openApiDomain+"mc/ichat/getUserHisSessionNoticeNum",{
channelType:3,pageNum:1,pageSize:20
}
)
}
,e.handleMessageHeight=function(t,n){
return n-N-C
}
,e.handleTargetTime=M,e.isSmall=void 0,e.queryConsumerServiceInfo=function(){
return y('get',p.Service.openApiDomain+"csc/queryConsumerServiceInfo",{
portal:v,serviceExtendType:2
}
)
}
,e.queryMsgByType=function(t){
// 变量
var n: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;
return y('get',p.Service.openApiDomain+"mcp/message/queryMsgByType?",{
portal:v,lang:p.MCP_LANG.CN,country:p.MCP_COUNTRY.CN,pageNo:t||1,pageSize:8,version:n
}
)
}
,e.querySystemConfig=function(){
return y('get',p.Service.openApiDomain+"mcp/querySystemConfig?version=1",{
portal:v,lang:p.MCP_LANG.CN,country:p.MCP_COUNTRY.CN,systemConfigKeys:'ipcc_url_4wap'
}
)
}
,e.queryUnreadMsgNum=function(){
// 变量
var t: any = arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;
return y('get',p.Service.openApiDomain+"mcp/message/unreadMsgNum",{
portal:v,lang:p.MCP_LANG.CN,country:p.MCP_COUNTRY.CN,version:t
}
)
}
,e.queryUserCarrierAgentType=function(){
return y('post',p.Service.openApiDomain+"csw/queryUserCarrierAgentType")
}
,e.readAllMsg=function(){
return y('post',p.Service.openApiDomain+"mcp/message/readAllMsg",{
country:p.MCP_COUNTRY.CN,lang:p.MCP_LANG.CN,portal:v,t:(new Date).getTime()
}
)
}
,e.request=e.reportMap=void 0,e.setTopUserHisSessionChat=function(t){
return y('post',p.Service.openApiDomain+"mc/ichat/setTopUserHisSessionChat",t||{

}
)
}
,e.tabData=e.sideMargine=void 0,e.updateMsgRead=function(t){
var n={
country:p.MCP_COUNTRY.CN,lang:p.MCP_LANG.CN,portal:v,t:(new Date).getTime(),type:t
}
;
return y('post',p.Service.openApiDomain+"mcp/message/updateMsgRead",n||{

}
)
}
;
var n=t(r(d[1])),o=t(r(d[2])),s=t(r(d[3])),c=r(d[4]),p=r(d[5]),u=r(d[6]),l=["actionCode","actionName","eventType","pageId"],v=p.CommonUtils.getPortal(),C=e.HEADER_HEIGHT=56,N=e.TAB_HEIGHT=84,y=(e.CONSUME_YEAR_TYPE=['1','2'],e.request=(function(){
var t=(0,s.default)((function*(t,n,o){
return yield p.Http[t](n,o).then((function(t){
return t
}
)).catch((function(t){
var n,o=t.data||(null==(n=t.response)?void 0:n.data),s=null==o?void 0:o.resultCode;
return 200===s?Promise.resolve(o):'200917'!==s?Promise.reject(t):void(0,u.goLogin)()
}
))
}
));
return function(n,o,s){
return t.apply(this,arguments)
}

}
)()),f=(e.envWidgets={
isH5:(0,u.isH5)(),isApp:p.PlatformUtils.isApp(),isWap:p.PlatformUtils.isWap(c.Dimensions.get('window').width),isAndroid:'android'===c.Platform.OS,isIos:'ios'===c.Platform.OS
}
,e.isSmall=function(){
// 变量
var t: any = c.Dimensions.get('window').width;
return'small'===(0,p.ScreenSize)(t)
}
);
e.sideMargine=f()?16:24;
var S={
load:p.EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,click:p.EVENT_TYPE.EVENT_TYPE_CLICK,exposure:p.EVENT_TYPE.EVENT_TYPE_EXPOSURE
}
;
var T=e.MSG_TYPES={
activityMsg:'1',customerMsg:'0',logisticsMsg:'4',ntfMsg:'3'
}
;
e.tabData=[{
key:1,type:T.activityMsg,text:'theLatestNews',icon:'new-activity',countName:'activityMsgCount'
}
,{
key:2,type:T.customerMsg,text:'customerServiceMessage',icon:'customer-message',countName:'noticeNum'
}
,{
key:3,type:T.ntfMsg,text:'serviceNotification',icon:'service-notification',countName:'ntfMsgCount'
}
,{
key:4,type:T.logisticsMsg,text:'transactionLogistics',icon:'transaction-logistics',countName:'logisticsMsgCount'
}
],e.reportMap={
1:{
actionName:(0,p.t)('click_campaign_message'),actionCode:'910000073'
}
,3:{
actionName:(0,p.t)('click_notification_message'),actionCode:'910000070'
}
,4:{
actionName:(0,p.t)('click_transaction_message'),actionCode:'910000069'
}

}
;
// 函数
function M(t: any): any {
var n;
p.PlatformUtils.isHarmony()||(t=null==(n=t)?void 0:n.replace(/-/g,'/'));
return t
}
// 函数
function _(t: any): any {
// 变量
var n: any = new Date(t).getHours(),o=new Date(t).getMinutes();
return[E(n),E(o)].join(':')
}
// 函数
function E(t: any): any {
return String(t).padStart(2,'0')
}

}
),"a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","598dd5411f5356eab137e972eb6cee59f0eaeb909657cad20b7b3811ffae9612","9a46dd7eba1ef94d625ba748404e4e5a055539131c11189441e75277cd25a48a","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),r=e(_r(d[2])),n=e(_r(d[3])),o=e(_r(d[4])),l=e(_r(d[5])),u=_r(d[6]),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = y(t);
if(r&&r.has(e))return r.get(e);
var n={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var l in e)if("default"!==l&&{

}
.hasOwnProperty.call(e,l)){
// 变量
var u: any = o?Object.getOwnPropertyDescriptor(e,l):null;
u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]
}
return n.default=e,r&&r.set(e,n),n
}
)(_r(d[7])),a=_r(d[8]),i=e(_r(d[9])),f=e(_r(d[10])),c=_r(d[11]);
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
var v=(function(e){
// 函数
function s(e: any): any {
var r,l,u,a;
return(0,t.default)(this,s),l=this,u=s,a=[e],u=(0,o.default)(u),(r=(0,n.default)(l,p()?Reflect.construct(u,a||[],(0,o.default)(l).constructor):u.apply(l,a))).state={
msgCount:0,messageClose:!1
}
,r
}
return(0,l.default)(s,e),(0,r.default)(s,[{
key:"getMsgCount",value:function(e){
return e>=0&&e<=99?e:e>99?'99+':void 0
}

}
,{
key:"getStyle",value:function(e,t){
// 变量
var r: any = e.redDotDefault;
return t>9&&t<=99?r=e.redDotSmall:t>99&&(r=e.redDotBig),r
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,r=t.msgCount,n=t.messageClose;
return r=r||this.state.msgCount,n=n||this.state.messageClose,(0,c.jsx)(u.WithTheme,{
themeStyles:i.default,children:function(t,o){
// 变量
var l: any = e.getStyle(t,r),u=e.getMsgCount(r);
return n?(0,c.jsxs)(a.View,{
style:t.messageCloseBox,children:[(0,c.jsx)(a.Image,{
source:f.default.messageClose,style:t.messageClose
}
),r>0?(0,c.jsx)(a.View,{
style:t.redDotCloeseBox,children:(0,c.jsx)(a.View,{
style:t.redDotCloese
}
)
}
):null]
}
):(0,c.jsx)(a.View,{
children:r>0?(0,c.jsx)(a.View,{
style:[t.commonStyle,l],children:(0,c.jsx)(a.Text,{
style:t.msgCount,children:u
}
)
}
):(0,c.jsx)(a.Text,{

}
)
}
)
}

}
)
}

}
])
}
)(s.Component);
_e.default=v
}
),"62544bec19f5e5f70b48677c70f40cc2d472f7afdb389a1162d4bb847b6bed6e",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","9431655e64514ff93d71a6f1a44f771bd1bbcc53c3b418bdaaecb5e68b67a9b8","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
commonStyle:{
height:16,borderRadius:16,fontSize:10,backgroundColor:o.C35.color
}
,redDotDefault:{
width:16
}
,redDotSmall:{
width:24
}
,redDotBig:{
width:30
}
,messageCloseBox:{
display:'flex',flexDirection:'row',justifyContent:'space-between'
}
,messageClose:{
width:16,height:16
}
,redDotCloeseBox:{
width:16,height:16,display:'flex',justifyContent:'center',alignItems:'center'
}
,redDotCloese:{
width:8,height:8,borderRadius:8,backgroundColor:o.C35.color
}
,msgCount:Object.assign({
textAlign:'center',color:o.C17.color
}
,o.T1,{
lineHeight:16
}
)
}
)
}

}
),"9431655e64514ff93d71a6f1a44f771bd1bbcc53c3b418bdaaecb5e68b67a9b8",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t,o=e(r(d[1])),n=e(r(d[2])),l=e(r(d[3])),c=e(r(d[4])),s=e(r(d[5])),u=e(r(d[6])),f=r(d[7]),h=r(d[8]),p=r(d[9]),v=r(d[10]),b=r(d[11]),y=e(r(d[12])),k=r(d[13]);
// 函数
function B(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(B=function(){
return!!e
}
)()
}
var C=(0,f.observer)(t=(function(e){
// 函数
function t(e: any): any {
var n,s,u,f;
return(0,o.default)(this,t),s=this,u=t,f=[e],u=(0,c.default)(u),(n=(0,l.default)(s,B()?Reflect.construct(u,f||[],(0,c.default)(s).constructor):u.apply(s,f))).clearMessage=function(){
n.props.clearMessage&&n.props.clearMsg()
}
,n.goBack=n.goBack.bind(n),n
}
return(0,s.default)(t,e),(0,n.default)(t,[{
key:"goBack",value:function(){
// 变量
var e: any = this.props.navigation,t=e.canGoBack,o=e.goBack;
t&&t()?o():'web'===h.Platform.OS?(0,b.returnWebLastPage)(!0):p.DeviceUtils.goBack()
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props.normalCol||'#000000';
return(0,k.jsx)(p.WithTheme,{
themeStyles:y.default,children:function(o,n){
return(0,b.isH5)()?null:(0,k.jsxs)(h.View,{
style:[o.titleBar,(0,b.isH5)()&&o.h5TitleBar,e.props.bgColor&&{
backgroundColor:e.props.bgColor
}
],children:[(0,k.jsx)(h.TouchableOpacity,{
style:o.btnShadows,onPress:e.goBack,children:(0,k.jsx)(v.SvgIcon,{
iconName:"ic24-back",normalCol:n.C11.color,width:24,height:24
}
)
}
),(0,k.jsx)(h.Text,{
style:[o.title,{
color:t
}
],children:e.props.title
}
),e.props.clearMessage&&(0,k.jsx)(h.TouchableOpacity,{
style:o.btnShadows,onPress:e.clearMessage,children:(0,k.jsx)(v.SvgIcon,{
iconName:"clean",normalCol:t,width:24,height:24
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

}
])
}
)(u.default.Component))||t;
_e.default=(0,p.Componentautoscaling)(C)
}
),"1dc2978e34ddd3bee3d3d3e183f159b671890d64c4d956dfe3a4177379c362d5",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","9320a51fe857ac0fcc065536f0990ca1f37487e70c24bc8024f63e8d6153365c","f8395597cbb220f5e7376d5b8f128ef3d3c8dc727b1c43a7f1482669854165ce","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n){
return t.StyleSheet.create({
titleBar:{
height:56,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',zIndex:10
}
,h5TitleBar:{
paddingLeft:0,paddingRight:0
}
,btnShadows:{
width:40,height:40,backgroundColor:n.C39.color+n.opacityMap[n.C39.opacity],borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'
}
,title:Object.assign({
marginHorizontal:8,flex:1
}
,n.T12,n.C12,{
fontWeight:'700'
}
),msgCount:{
marginLeft:4
}
,clearIcon:{
width:18,height:24
}

}
)
}

}
),"f8395597cbb220f5e7376d5b8f128ef3d3c8dc727b1c43a7f1482669854165ce",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),s=e(_r(d[2])),n=e(_r(d[3])),i=e(_r(d[4])),r=e(_r(d[5])),o=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var s: any = v(t);
if(s&&s.has(e))return s.get(e);
var n={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var o: any = i?Object.getOwnPropertyDescriptor(e,r):null;
o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]
}
return n.default=e,s&&s.set(e,n),n
}
)(_r(d[6])),a=_r(d[7]),l=_r(d[8]),c=_r(d[9]),u=e(_r(d[10])),p=e(_r(d[11])),h=_r(d[12]),f=e(_r(d[13])),y=_r(d[14]);
// 函数
function v(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,s=new WeakMap;
return(v=function(e){
return e?s:t
}
)(e)
}
// 函数
function M(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(M=function(){
return!!e
}
)()
}
var S=(function(e){
// 函数
function o(e: any): any {
var s,r,a,c;
return(0,t.default)(this,o),r=this,a=o,c=[e],a=(0,i.default)(a),(s=(0,n.default)(r,M()?Reflect.construct(a,c||[],(0,i.default)(r).constructor):a.apply(r,c))).updateMessage=function(){
s.timer?clearInterval(s.timer):s.timer=setInterval((function(){
var e;
s._queryUserCarrierAgentType(),s._getUserHisSessionChatList(),null==(e=s.props)||e.getUserHisSessionNoticeNum()
}
),3e3)
}
,s._queryConsumerServiceInfo=function(e){
(0,h.queryConsumerServiceInfo)().then((function(t){
if(t.success){
var n=(t.consumerConfigInfo||{

}
).serviceUrl;
s.setState({
customerService:Object.assign({

}
,s.state.customerService,{
icon:'vProService',carrierName:(0,l.t)('privateCustomerService'),lastMsgShowContent:(0,l.t)('exclusiveDailyService'),jumpSessionUrl:n
}
),isVpro:'1'===e
}
)
}

}
)).catch((function(e){
s.props.handleMsg(null==e?void 0:e.data)
}
))
}
,s._queryUserCarrierAgentType=function(){
(0,h.queryUserCarrierAgentType)().then((function(e){
'0'===e.code&&s.setState({
userAgentType:e.userAgentType,mctMessageLink:e.receptionUrl||'',unreadMsgNum:e.unreadMsgNum||0
}
)
}
)).catch((function(e){
var t;
'200916'!==(null==(t=e.data)?void 0:t.resultCode)&&s.props.handleMsg(null==e?void 0:e.data)
}
))
}
,s._querySystemConfig=function(){
(0,h.querySystemConfig)().then((function(e){
if('0'===(null==e?void 0:e.code)){
var t,n=(null==(t=e.systemConfigInfos)?void 0:t.ipcc_url_4wap).systemConfigValue;
s.setState({
customerService:Object.assign({

}
,s.state.customerService,{
jumpSessionUrl:n?n+"&from=07":''
}
)
}
)
}

}
)).catch((function(e){
s.props.handleMsg(null==e?void 0:e.data)
}
))
}
,s._getUserHisSessionChatList=function(){
(0,h.getUserHisSessionChatList)().then((function(e){
'0'===(null==e?void 0:e.code)&&s.setState({
dialogMsg:e.userHisSessionChatList||[]
}
)
}
)).catch((function(e){
var t;
'200916'!==(null==(t=e.data)?void 0:t.resultCode)&&s.props.handleMsg(e.data)
}
))
}
,s.goMerchantMessage=function(e){
// 变量
var t: any = l.PlatformUtils.isApp()?encodeURI(e):e;
l.RouterUtils.gotoPage(t)
}
,s.expandMessage=function(){
s.setState({
isCollapse:!1
}
)
}
,s.dealCollapMessege=function(e){
// 变量
var t: any = (new Date).getTime();
return e.filter((function(e){
// 变量
var s: any = (t-(null==e?void 0:e.lastMessageDate))/864e5;
return'1'===(null==e?void 0:e.setTopMsgType)||s<14
}
))
}
,s.state={
merchantMessage:{
type:'1',title:(0,l.t)('merchantMessageWorkbench'),content:(0,l.t)('Blessings'),icon:'merchantMessage',time:'',msgCount:0,messageClose:!1
}
,customerService:{
setTopMsgType:0,carrierName:(0,l.t)('vmallCustomerService'),lastMessageDate:'',lastMsgShowContent:(0,l.t)('dailyService'),icon:'customerService',jumpSessionUrl:'',unreadMsgNum:0,disturbStatus:0
}
,dialogMsg:[],userAgentType:0,mctMessageLink:'',unreadMsgNum:0,isVpro:!1,isCollapse:!0
}
,s
}
return(0,r.default)(o,e),(0,s.default)(o,[{
key:"componentDidMount",value:function(){
this._getUserHisSessionChatList(),this._queryUserCarrierAgentType();
// 变量
var e: any = this.props.isVpro;
l.PlatformUtils.isApp()&&'1'===e?this._queryConsumerServiceInfo(e):this._querySystemConfig(),this.updateMessage()
}

}
,{
key:"componentWillUnmount",value:function(){
this.timer&&clearInterval(this.timer)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,s=t.menuOperate,n=t.modalClose,i=t.delayEmit,r=this.state,o=r.merchantMessage,v=r.customerService,M=r.dialogMsg,S=r.mctMessageLink,C=r.userAgentType,x=r.unreadMsgNum,j=r.isVpro,T=r.isCollapse,_=M.length!==this.dealCollapMessege(M).length&&T,w=T?this.dealCollapMessege(M):M;
return(0,y.jsx)(l.WithTheme,{
themeStyles:f.default,children:function(t){
// 变量
var r: any = l.CommonUtils.getWindowSize().screenHeight,f=r-256-(1===C?92:0)-72*(w.length||0)-(_?80:0);
return(0,y.jsxs)(a.ScrollView,{
showsVerticalScrollIndicator:!1,overScrollMode:'auto',style:l.PlatformUtils.isApp()?t.messageContentHeight:{
height:r-h.HEADER_HEIGHT-h.TAB_HEIGHT
}
,children:[1===C?(0,y.jsx)(a.TouchableOpacity,{
onPressIn:n,onPress:e.goMerchantMessage.bind(e,S),children:(0,y.jsxs)(a.View,{
style:t.activityInfo,children:[(0,y.jsx)(a.Image,{
source:u.default.merchantMessage,style:t.activityIcon
}
),(0,y.jsxs)(a.View,{
style:t.activityHint,children:[(0,y.jsx)(a.View,{
style:t.activityMsg,children:(0,y.jsx)(a.Text,{
style:t.activityTitle,children:o.title
}
)
}
),(0,y.jsxs)(a.View,{
style:t.activityTextOrDot,children:[(0,y.jsx)(a.Text,{
style:t.activityText,ellipsizeMode:'tail',numberOfLines:1,children:o.content
}
),x>0?(0,y.jsx)(a.View,{
style:t.redDotCloeseBox,children:(0,y.jsx)(a.View,{
style:t.redDotCloese
}
)
}
):null]
}
)]
}
)]
}
)
}
):null,(0,y.jsx)(a.View,{
style:t.multiSession,children:(0,y.jsx)(p.default,{
msgData:v,lastItem:!0,isSelf:!0,isVpro:j,menuOperate:s,modalClose:n,emitMessageNumberChange:i
}
)
}
),M.length>0&&(0,y.jsxs)(a.View,{
style:t.multiSession,children:[w.map((function(e,t){
return(0,y.jsx)(p.default,{
msgData:e,lastItem:!_&&t===M.length-1,menuOperate:s,modalClose:n,emitMessageNumberChange:i
}
,e.seCode)
}
)),_&&(0,y.jsxs)(a.TouchableOpacity,{
style:t.collapseBox,onPress:e.expandMessage,children:[(0,y.jsx)(a.Text,{
style:t.collapText,children:(0,l.t)('twoWeeksAgo')
}
),(0,y.jsx)(c.SvgIcon,{
iconName:"ic_public_arrow_down",opacity:.2,width:24,height:25
}
)]
}
)]
}
),(0,y.jsx)(a.TouchableWithoutFeedback,{
onPress:n,children:(0,y.jsx)(a.View,{
style:[t.blanksHeight,{
height:Math.max(f,e.props.lastMarginBottom)
}
]
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

}
])
}
)(o.Component);
_e.default=S
}
),"e9f1b5aeeace3957dd8aa6d196f5b16285ce76a2e3eaf33e94451827b42f2098",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","b3a5d2b9de6657f1acc85f1f12d5ebc4abb37309387e45c28b9caf68839fa041","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","a9b77f6a3363ee6bd9f73d9bad193663a1b85eff3a7fa11209fc89c5a9def745","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),r=e(_r(d[2])),a=e(_r(d[3])),n=e(_r(d[4])),s=e(_r(d[5])),o=_r(d[6]),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = v(t);
if(r&&r.has(e))return r.get(e);
var a={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var s in e)if("default"!==s&&{

}
.hasOwnProperty.call(e,s)){
// 变量
var o: any = n?Object.getOwnPropertyDescriptor(e,s):null;
o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]
}
return a.default=e,r&&r.set(e,a),a
}
)(_r(d[7])),l=_r(d[8]),u=e(_r(d[9])),c=e(_r(d[10])),p=e(_r(d[11])),f=_r(d[12]),y=_r(d[13]);
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
var j=(function(e){
// 函数
function i(e: any): any {
var r,s,l,u;
return(0,t.default)(this,i),s=this,l=i,u=[e],l=(0,n.default)(l),(r=(0,a.default)(s,h()?Reflect.construct(l,u||[],(0,n.default)(s).constructor):l.apply(s,u))).goPage=function(){
var e,t,a;
(null==(e=r.props.msgData)?void 0:e.carrierName)===(0,o.t)('huawei_vmall_service')?(0,f.eventReport)({
actionCode:'910000074',actionName:(0,o.t)('click_huawei_self_service'),eventType:'click',comId:'messagecenter_Self'
}
):(0,f.eventReport)({
actionCode:'910000075',actionName:(0,o.t)('click_third_party_service'),eventType:'click',comId:'messagecenter_Merchant',ShopName:'this.props.msgData.carrierName'
}
);
// 变量
var n: any = o.PlatformUtils.isApp()?encodeURI(null==(t=r.props.msgData)?void 0:t.jumpSessionUrl):null==(a=r.props.msgData)?void 0:a.jumpSessionUrl;
n&&(null==r.props.emitMessageNumberChange||r.props.emitMessageNumberChange(),o.RouterUtils.gotoPage(n))
}
,r.onLongPress=function(e,t){
var a;
null!=(a=r.props)&&a.isSelf||(0,r.props.menuOperate)(e,t)
}
,r.getTime=function(){
// 变量
var e: any = r.props.msgData.lastMessageDate;
if(!e)return'';
// 变量
var t: any = (new Date).getTime(),a=new Date(t).setHours(0,0,0,0),n=a-864e5,s=a-6048e5;
return e>a?(function(e){
// 变量
var t: any = new Date(e).getHours(),r=new Date(e).getMinutes();
return(t>9?t:'0'+t)+':'+(r>9?r:'0'+r)
}
)(e):e<a&&e>n?(0,o.t)('common_yesterday'):e<n&&e>s?(function(e){
// 变量
var t: any = new Date(e).getDay(),r='';
switch(t){
case 1:r=(0,o.t)('monday');
break;
case 2:r=(0,o.t)('tuesdays');
break;
case 3:r=(0,o.t)('wednesdays');
break;
case 4:r=(0,o.t)('thursday');
break;
case 5:r=(0,o.t)('fridays');
break;
case 6:r=(0,o.t)('saturdays');
break;
case 0:r=(0,o.t)('sunday')
}
return r
}
)(e):(function(e){
// 变量
var t: any = new Date(e).getFullYear(),r=new Date(e).getMonth()+1,a=new Date(e).getDate();
return t+'/'+r+'/'+a
}
)(e)
}
,r.escape2Html=function(e){
var t={
'&lt':'<','&gt':'>','&nbsp':' ','&amp':'&','&quot':'"','\n':'','\r':''
}
;
return null==e?void 0:e.replace(/(&lt|&gt|&nbsp|&amp|&quot|\r|\n)/g,(function(e){
return t[e]
}
))
}
,r.state={
isSelf:!1
}
,r
}
return(0,s.default)(i,e),(0,r.default)(i,[{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,r=t.msgData,a=t.lastItem,n=t.isSelf,s=t.modalClose,i=t.isVpro,f=n||this.state.isSelf;
return(0,y.jsx)(o.WithTheme,{
themeStyles:u.default,children:function(t,n){
return(0,y.jsx)(l.TouchableOpacity,{
onPress:e.goPage,onPressIn:s,onLongPress:e.onLongPress.bind(e,r),children:(0,y.jsxs)(l.View,{
style:t.dialogInfo,children:[(0,y.jsx)(l.View,{
style:t.dialogIcon,children:f?(0,y.jsx)(l.Image,{
source:c.default[r.icon],style:t.avatar
}
):(0,y.jsx)(l.Image,{
source:{
uri:r.carrierHeadUrl
}
,style:t.avatar
}
)
}
),(0,y.jsx)(l.View,{
style:t.dialogHint,children:(0,y.jsxs)(l.View,{
style:[t.dialogBox,!a&&t.dialogBorder],children:[(0,y.jsxs)(l.View,{
style:t.dialogMsg,children:[(0,y.jsx)(l.Text,{
style:[t.dialogTitle,{
color:i?'#925816':'#000000'
}
],ellipsizeMode:'tail',numberOfLines:1,children:r.carrierName
}
),(0,y.jsxs)(l.View,{
style:t.dialogTime,children:[r.setTopMsgType>0?(0,y.jsx)(l.Image,{
source:c.default.isTop,style:t.isTopIcon
}
):(0,y.jsx)(l.Text,{

}
),(0,y.jsx)(l.Text,{
style:{
fontSize:12
}
,children:e.getTime()
}
)]
}
)]
}
),(0,y.jsxs)(l.View,{
style:t.dialogTextOrDot,children:[(0,y.jsx)(l.Text,{
style:[t.dialogText,{
color:i?'#925816':'#000000'
}
],ellipsizeMode:'tail',numberOfLines:1,children:e.escape2Html(r.lastMsgShowContent)
}
),(0,y.jsx)(l.View,{
style:t.redDot,children:(0,y.jsx)(p.default,{
msgCount:r.unreadMsgNum,messageClose:r.disturbStatus
}
)
}
)]
}
)]
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
])
}
)(i.Component);
_e.default=j
}
),"b3a5d2b9de6657f1acc85f1f12d5ebc4abb37309387e45c28b9caf68839fa041",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","a5b08f7e453271626a2c144b88ba5063cae6a9b0ac2071443b1b78d3d4c2207e","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","62544bec19f5e5f70b48677c70f40cc2d472f7afdb389a1162d4bb847b6bed6e","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(l){
return t.StyleSheet.create({
dialogInfo:{
height:72,borderRadius:16,display:'flex',flexDirection:'row',alignItems:'center',position:'relative',color:l.C11.color
}
,dialogIcon:{
width:40,height:40,marginLeft:12,marginRight:12,borderRadius:20,overflow:'hidden'
}
,avatar:{
width:'100%',height:'100%'
}
,dialogHint:{
flex:1,paddingRight:12,height:72
}
,dialogBox:{
height:72,display:'flex',flexDirection:'column',justifyContent:'center'
}
,dialogBorder:{
borderBottomColor:'rgba(0,0,0,0.05)',borderBottomWidth:1
}
,dialogMsg:{
display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'
}
,dialogTitle:Object.assign({
width:'100%',flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'
}
,l.T10,{
fontWeight:o.PlatformUtils.isApp()?'600':'500'
}
),dialogTime:Object.assign({
width:70,fontSize:12,display:'flex',flexDirection:'row',justifyContent:'flex-end'
}
,l.T10,l.C23),dialogTextOrDot:{
marginTop:4,height:16,display:'flex',flexDirection:'row',alignItems:'center'
}
,dialogText:Object.assign({
whiteSpace:o.PlatformUtils.isApp()?'nowrap':'pre',overflow:'hidden',textOverflow:'ellipsis',flex:1
}
,l.T3,l.C13),redDot:{
width:40,display:'flex',flexDirection:'row',justifyContent:'flex-end'
}
,isTopIcon:{
width:16,height:16
}

}
)
}

}
),"a5b08f7e453271626a2c144b88ba5063cae6a9b0ac2071443b1b78d3d4c2207e",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
activityInfo:{
marginTop:12,height:80,backgroundColor:n.C17.color,borderRadius:16,display:'flex',flexDirection:'row',alignItems:'center'
}
,activityIcon:{
width:40,height:40,marginLeft:12,marginRight:12
}
,activityHint:{
flex:1,paddingRight:12
}
,activityMsg:{
display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,activityTitle:Object.assign({
flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'
}
,n.T10,n.C11,{
fontWeight:o.PlatformUtils.isApp()?'600':'500'
}
),activityTextOrDot:{
marginTop:4,height:16,display:'flex',flexDirection:'row',alignItems:'center'
}
,activityText:{
fontSize:12,color:n.C13.color,opacity:n.C13.opacity,flex:1,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'
}
,redDotCloeseBox:{
marginRight:10,width:16,height:16,display:'flex',justifyContent:'center',alignItems:'center'
}
,redDotCloese:{
width:8,height:8,borderRadius:8,backgroundColor:n.C35.color
}
,multiSession:{
backgroundColor:n.C17.color,borderRadius:16,width:'100%',marginTop:12,paddingVertical:4
}
,collapseBox:{
height:72,flexDirection:'row',justifyContent:'center',alignItems:'center'
}
,collapText:Object.assign({

}
,n.T7,{
opacity:n.C13.opacity,marginRight:8
}
),blanksHeight:{
width:'100%'
}
,messageContentHeight:{
flex:1
}

}
)
}

}
),"a9b77f6a3363ee6bd9f73d9bad193663a1b85eff3a7fa11209fc89c5a9def745",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,_e,d){
// 变量
var e: any = r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = e(r(d[1])),n=e(r(d[2])),o=e(r(d[3])),s=e(r(d[4])),l=e(r(d[5])),u=e(r(d[6])),c=r(d[7]),f=r(d[8]),h=r(d[9]),p=r(d[10]),y=e(r(d[11])),S=e(r(d[12])),M=e(r(d[13])),v=e(r(d[14])),T=e(r(d[15])),L=r(d[16]);
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
var b=(function(e){
// 函数
function u(e: any): any {
var n,l,b,j;
return(0,t.default)(this,u),l=this,b=u,j=[e],b=(0,s.default)(b),(n=(0,o.default)(l,x()?Reflect.construct(b,j||[],(0,s.default)(l).constructor):b.apply(l,j))).pageSize=8,n.isLoading=!1,n._onEndReached=function(){
// 变量
var e: any = n.state,t=e.pageNum;
3!==e.loadState&&n._queryMsgByType(t)
}
,n.clickTab=v.default.debounce((function(){
n.setState({
MessageList:[],loadState:1,pageNum:1
}
),n._queryMsgByType(1)
}
),100,{
leading:!0,trailing:!1
}
),n._queryMsgByType=function(e){
n.isLoading||(n.isLoading=!0,(0,p.queryMsgByType)(e).then((function(t){
if('0'===(null==t?void 0:t.code)){
// 变量
var o: any = t.logisticsMsg,s=t.ntfMsg,l=n.state.MessageList,u='3'===n.props.tabType?null==s?void 0:s.sysMessageList:null==o?void 0:o.sysMessageList;
n.setState({
MessageList:l.concat(u||[]),pageNum:e+1
}
),u.length<n.pageSize&&n.setState({
loadState:3
}
)
}
else n.setState({
loadState:2
}
);
n.isLoading=!1
}
)).catch((function(){
n.setState({
loadState:2
}
),n.isLoading=!1
}
)))
}
,n.renderItem=function(e,t){
// 变量
var o: any = n.props,s=o.tabType,l=o.handleMsg;
switch(e.msgStyle){
case'2':case'3':return(0,L.jsx)(y.default,{
msgInfo:e,type:s,handleDelete:l,clickTab:n.clickTab,index:t
}
,e.id);
default:return(0,L.jsx)(S.default,{
clickTab:n.clickTab,handleDelete:l,msgInfo:e,type:s,index:t
}
,e.id)
}

}
,n.renderFooter=function(){
return(0,L.jsx)(f.WithTheme,{
themeStyles:T.default,children:function(e){
return(0,L.jsxs)(L.Fragment,{
children:[(0,L.jsx)(h.LoadingView,{
showLoading:!0,position:'bottom',loadState:n.state.loadState,iconSize:24,titleStyle:e.loadingTitle,errorCallback:n._onEndReached
}
),(0,L.jsx)(c.View,{
style:[{
height:n.props.lastMarginBottom
}
]
}
)]
}
)
}

}
)
}
,n.NoMessage=function(){
return 1===n.state.loadState?n.renderFooter():(0,L.jsx)(M.default,{
tabType:n.props.tabType
}
)
}
,n.state={
loadState:1,pageNum:1,MessageList:[]
}
,n
}
return(0,l.default)(u,e),(0,n.default)(u,[{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state.MessageList;
return(0,L.jsx)(f.WithTheme,{
themeStyles:T.default,children:function(n,o,s,l){
// 变量
var u: any = (0,p.handleMessageHeight)(s,l);
return(0,L.jsx)(c.View,{
style:f.PlatformUtils.isApp()?n.msgListBox:{
height:u
}
,children:t.length>0?(0,L.jsx)(c.FlatList,{
style:n.contentBox,data:t,horizontal:!1,showsVerticalScrollIndicator:!1,renderItem:function(t){
// 变量
var n: any = t.item,o=t.index;
return e.renderItem(n,o)
}
,onEndReached:e._onEndReached,onEndReachedThreshold:.3,initialNumToRender:8,ListFooterComponent:e.renderFooter,keyExtractor:function(e,t){
return t.toString()
}

}
):e.NoMessage()
}
)
}

}
)
}

}
])
}
)(u.default.Component);
_e.default=b
}
),"699e9e0c6df3bfbe23886b3f825be13afad0abcdb89ed50b8aee22c5e9b4d8b8",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","fbe0b2d61f1110afcf9e9d71d2b102c2acd78487fae4c1aa87734cdab03d1215","62a3719a07b3f24379347506d0b88dee95c7ce754bd0502e5bf924aaa11e8669","9e53409a68b706a12918b5ad4829c0b1f24557601fa18e822b980348f3bb09fd","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","c2a39a5e5cc7218533ad5aba260fc63cb5f0ce471a08b17d43cdfa6b37daaead","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),l=e(_r(d[3])),o=e(_r(d[4])),i=e(_r(d[5])),r=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = v(t);
if(n&&n.has(e))return n.get(e);
var l={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var r: any = o?Object.getOwnPropertyDescriptor(e,i):null;
r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]
}
return l.default=e,n&&n.set(e,l),l
}
)(_r(d[6])),s=_r(d[7]),a=_r(d[8]),c=_r(d[9]),u=_r(d[10]),f=e(_r(d[11])),h=e(_r(d[12])),p=e(_r(d[13])),x=e(_r(d[14])),y=_r(d[15]);
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
// 函数
function j(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(j=function(){
return!!e
}
)()
}
var T=(function(e){
// 函数
function r(e: any): any {
var n,i,c,f;
return(0,t.default)(this,r),i=this,c=r,f=[e],c=(0,o.default)(c),(n=(0,l.default)(i,j()?Reflect.construct(c,f||[],(0,o.default)(i).constructor):c.apply(i,f))).modalId="modal-"+a.CommonUtils.randomString(6),n.listener=null,n.changeMoreStatus=function(){
// 变量
var e: any = n.state.isExpand;
n.setState({
isExpand:!e
}
)
}
,n.contentOnLayout=function(e){
var t,l=null==(t=e.nativeEvent.layout)?void 0:t.height;
n.setState({
numberOfLine:parseInt(String(l),10)/18
}
)
}
,n.richTextOnLayout=function(e){
var t,l=(null==(t=e.nativeEvent)?void 0:t.layout).height,o=void 0===l?0:l;
n.setState({
hasMore:o>54
}
)
}
,n.handerGopage=function(e,t){
var l,o=e;
a.PlatformUtils.isApp()&&(null!=t&&t.includes('/order/shoppingCart')?o='vmall://com.vmall.client/home/main?tabIndex=3':a.PlatformUtils.isAndroid()&&null!=t&&t.includes('teamBuy/detail')?o="vmall://com.vmall.client/product/teambuy?url="+o:null!=t&&t.includes('vmall//:')?o=t:3===(null==(l=n.props.msgInfo)?void 0:l.serviceType)&&(o=e+"?isFromSysMsg=1"));
a.RouterUtils.gotoPage(o)
}
,n.deleteMsg=function(e){
// 变量
var t: any = n.props,l=t.type,o=t.clickTab,i=t.handleDelete;
(0,u.delMsgById)(e,l).then((function(e){
n.closeModal(),e.success?o():i({
info:(0,a.t)('deleteFailured')
}
)
}
)).catch((function(){
n.closeModal(),i({
info:(0,a.t)('deleteFailured')
}
)
}
))
}
,n.closeModal=function(){
if('web'===s.Platform.OS){
// 变量
var e: any = document.getElementById(n.modalId);
h.default.isEmpty(e)||document.body.removeChild(e)
}
n.setState({
modalVisible:!1
}
)
}
,n.openModel=function(){
n.setState({
modalVisible:!0
}
)
}
,n.showMore=function(){
// 变量
var e: any = n.state,t=e.isExpand,l=e.hasMore,o=e.numberOfLine;
return'2'===n.props.msgInfo.msgStyle?l&&!t:o>4&&!t
}
,n.renderRichText=function(e,t){
if(e){
// 变量
var n: any = e.split('</br>');
return(0,y.jsx)(y.Fragment,{
children:n.map((function(e){
// 变量
var n: any = ''===e?' ':null==e?void 0:e.replace(/<[^>]*>/g,'');
return''!==n&&(0,y.jsx)(s.Text,{
style:t.conText,children:n
}
)
}
))
}
)
}

}
,n.state={
isExpand:!1,modalVisible:!1,numberOfLine:0,hasMore:!1
}
,n
}
return(0,i.default)(r,e),(0,n.default)(r,[{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,n=t.isExpand,l=t.modalVisible,o=t.hasMore,i=this.props.msgInfo,r=i.gotoLink,h=i.message,v=i.title,j=i.id,T=i.sendTime,M=i.msgStyle,b=i.picUrl,O=i.jumpLink,w=""+a.Service.cmsCndProdPath+b,S='2'===M?null==v?void 0:v.replace(/<[^>]*>/g,''):v;
return(0,y.jsx)(a.WithTheme,{
themeStyles:p.default,children:function(t){
return(0,y.jsxs)(s.View,{
style:[t.msgTmpBox,e.props.index>0&&{
marginTop:16
}
],children:[(0,y.jsx)(s.View,{
style:t.timeBox,children:(0,y.jsx)(s.Text,{
style:t.sendTime,children:(0,u.formatTime)(T)
}
)
}
),(0,y.jsxs)(s.View,{
style:t.msgBox,children:['2'===M&&(0,y.jsxs)(s.TouchableOpacity,{
onPress:function(){
return e.handerGopage(r,O)
}
,onLongPress:e.openModel,children:[(0,y.jsx)(s.Text,{
numberOfLines:1,ellipsizeMode:'tail',style:[t.title,t.titleText],children:S
}
),(0,y.jsxs)(s.View,{
style:[t.content,x.default.richTextContent,o&&!n&&x.default.richText],children:[(0,y.jsx)(s.View,{
style:t.contentBox,children:e.renderRichText(h,t)
}
),(0,y.jsx)(s.View,{
style:[t.contentBox,t.placeholder],onLayout:e.richTextOnLayout,children:e.renderRichText(h,t)
}
)]
}
)]
}
),'3'===M&&(0,y.jsxs)(y.Fragment,{
children:[(0,y.jsxs)(s.View,{
pointerEvents:"none",style:[t.content,t.placeholder],children:[(0,y.jsx)(s.View,{
style:x.default.conImg
}
),(0,y.jsx)(s.View,{
style:t.contentBox,onLayout:e.contentOnLayout,children:(0,y.jsx)(s.Text,{
style:t.conText,children:h
}
)
}
)]
}
),(0,y.jsxs)(s.TouchableOpacity,{
onPress:function(){
return e.handerGopage(r,O)
}
,onLongPress:e.openModel,children:[(0,y.jsx)(s.Text,{
style:[t.title,t.titleText],numberOfLines:1,ellipsizeMode:'tail',children:v
}
),(0,y.jsxs)(s.View,{
style:t.content,children:[b?(0,y.jsx)(s.Image,{
source:{
uri:w
}
,defaultSource:f.default.defaultImage,style:x.default.conImg
}
):(0,y.jsx)(s.Image,{
source:f.default.defaultImage,style:x.default.conImg
}
),(0,y.jsx)(s.View,{
style:t.contentBox,children:(0,y.jsx)(s.Text,{
style:t.conText,ellipsizeMode:'clip',numberOfLines:n?void 0:4,children:h
}
)
}
)]
}
)]
}
)]
}
),e.showMore()&&(0,y.jsx)(s.TouchableOpacity,{
style:t.loadMoreBox,onPress:e.changeMoreStatus,children:(0,y.jsxs)(s.View,{
style:t.loadMore,children:['3'===M?(0,y.jsx)(s.Text,{
style:t.ellipsis,children:"..."
}
):(0,y.jsx)(s.Text,{
style:t.ellipsis
}
),(0,y.jsx)(s.View,{
style:t.down,children:(0,y.jsx)(c.SvgIcon,{
iconName:'down',width:20,height:20,opacity:.2
}
)
}
)]
}
)
}
)]
}
),(0,y.jsx)(c.Modal,{
title:(0,a.t)('confirmDeleteMessage'),modalVisible:l,modalInnerStyle:t.modelBox,modalId:e.modalId,modalTitleStyle:t.modalTitleStyle,modalOutterStyle:t.modalOutterStyle,buttonLine:!0,statusBarTranslucent:!0,buttonList:[{
style:t.operationText,text:(0,a.t)('cancel'),onPress:function(){
return e.closeModal()
}

}
,{
style:t.operationText,text:(0,a.t)('delete'),onPress:function(){
return e.deleteMsg(j)
}

}
]
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
)(r.default.Component);
_e.default=(0,r.memo)(T)
}
),"fbe0b2d61f1110afcf9e9d71d2b102c2acd78487fae4c1aa87734cdab03d1215",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","92f55d477fc1f069ffa802508e26ef51060284ab07bc3fe1d86c789b4e58cb33","251870e82b703709b49cc84bd133c7905c19f2b0e2cd218c24252ca1b5e4db1e","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),o=r(d[1]);
e.default=function(n){
return t.StyleSheet.create({
msgTmpBox:{
alignItems:'center'
}
,msgBox:{
width:'100%',backgroundColor:n.C33.color,borderRadius:16,paddingHorizontal:12,paddingVertical:16,overflow:'hidden'
}
,timeBox:{
minWidth:105,marginVertical:8,backgroundColor:n.C39.color+n.opacityMap[n.C39.opacity],borderRadius:20,justifyContent:'center',height:28,paddingHorizontal:8
}
,sendTime:Object.assign({

}
,n.T3,n.C13,{
textAlign:'center'
}
),title:{
height:21,marginBottom:16
}
,titleText:Object.assign({

}
,n.T10,n.C12),content:{
flexDirection:'row',justifyContent:'space-around'
}
,contentBox:{
flex:1
}
,conText:Object.assign({

}
,n.T5,n.C13),operationText:Object.assign({
textAlign:'center'
}
,n.T10,{
color:'#CE0E2D'
}
),transparency:{
width:30,height:13
}
,loadMore:{
width:32,height:20,flexDirection:'row',backgroundColor:n.C33.color+n.opacityMap[n.C33.opacity]
}
,down:{
paddingRight:4,flex:1,transform:[{
translateY:-2
}
]
}
,ellipsis:{
width:12,transform:[{
translateX:3
}
,{
translateY:-3
}
],opacity:.2
}
,loadMoreBox:{
position:'absolute',right:12,height:13,flexDirection:'row',justifyContent:'flex-end',bottom:20
}
,modelBox:{
borderRadius:32,justifyContent:'center',alignItems:'center',maxWidth:400
}
,modalOutterStyle:{
justifyContent:'center',alignItems:'center',backgroundColor:n.C16.color+n.opacityMap[n.C16.opacity]
}
,modalTitleStyle:Object.assign({

}
,n.T10,n.C12),placeholder:{
opacity:0,position:'absolute',top:52,width:o.PlatformUtils.isApp()?'100%':'calc(100% - 24px)'
}

}
)
}

}
),"92f55d477fc1f069ffa802508e26ef51060284ab07bc3fe1d86c789b4e58cb33",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=r(d[0]).StyleSheet.create({
conImg:{
width:72,height:72,marginRight:12
}
,richText:{
height:54
}
,richTextContent:{
height:'auto',overflow:'hidden'
}

}
);
e.default=t
}
),"251870e82b703709b49cc84bd133c7905c19f2b0e2cd218c24252ca1b5e4db1e",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),o=e(_r(d[3])),l=e(_r(d[4])),i=e(_r(d[5])),r=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = h(t);
if(n&&n.has(e))return n.get(e);
var o={
__proto__:null
}
,l=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var r: any = l?Object.getOwnPropertyDescriptor(e,i):null;
r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i]
}
return o.default=e,n&&n.set(e,o),o
}
)(_r(d[6])),a=_r(d[7]),s=_r(d[8]),c=_r(d[9]),u=_r(d[10]),f=e(_r(d[11])),p=e(_r(d[12])),y=_r(d[13]);
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
var v=(function(e){
// 函数
function r(e: any): any {
var n,i,c,p;
return(0,t.default)(this,r),i=this,c=r,p=[e],c=(0,l.default)(c),(n=(0,o.default)(i,x()?Reflect.construct(c,p||[],(0,l.default)(i).constructor):c.apply(i,p))).modalId="modal-"+s.CommonUtils.randomString(6),n.changeMoreStatus=function(){
// 变量
var e: any = n.state.isExpand;
n.setState({
isExpand:!e
}
)
}
,n.contentOnLayout=function(e){
var t,o=null==(t=e.nativeEvent.layout)?void 0:t.height;
n.setState({
numberOfLine:parseInt(String(o),10)/18
}
)
}
,n.openModel=function(){
'1'!==n.props.type&&n.setState({
modalVisible:!0
}
)
}
,n.closeModal=function(){
if('web'===a.Platform.OS){
// 变量
var e: any = document.getElementById(n.modalId);
f.default.isEmpty(e)||document.body.removeChild(e)
}
n.setState({
modalVisible:!1
}
)
}
,n.deleteMsg=function(e){
// 变量
var t: any = n.props,o=t.type,l=t.clickTab,i=t.handleDelete;
(0,u.delMsgById)(e,o).then((function(e){
e.success?l():i({
info:(0,s.t)('deleteFailured')
}
),n.closeModal()
}
)).catch((function(e){
var t;
null!=(t=e.data)&&t.info&&(n.closeModal(),i({
info:(0,s.t)('deleteFailured')
}
))
}
))
}
,n.state={
isExpand:!1,contentMaxWidth:null,numberOfLine:0,modalVisible:!1
}
,n
}
return(0,i.default)(r,e),(0,n.default)(r,[{
key:"render",value:function(){
// 变量
var e: any = this,t=this.state,n=t.isExpand,o=t.numberOfLine,l=t.modalVisible,i=this.props.msgInfo,r=i.message,f=i.title,h=i.sendTime,x=i.id;
return(0,y.jsx)(s.WithTheme,{
themeStyles:p.default,children:function(t){
return(0,y.jsxs)(a.View,{
style:[t.msgTmpBox,e.props.index>0&&{
marginTop:16
}
],children:[(0,y.jsx)(a.View,{
style:t.timeBox,children:(0,y.jsx)(a.Text,{
style:t.sendTime,children:(0,u.formatTime)(h)
}
)
}
),(0,y.jsx)(a.TouchableWithoutFeedback,{
onLongPress:e.openModel,children:(0,y.jsxs)(a.View,{
style:t.msgBox,children:[(0,y.jsx)(a.Text,{
numberOfLines:1,style:[t.title,t.titleText],children:f
}
),(0,y.jsx)(a.Text,{
style:[t.conText,t.placeholder],onLayout:e.contentOnLayout,children:r
}
),(0,y.jsx)(a.Text,{
style:t.conText,ellipsizeMode:'clip',numberOfLines:n?void 0:3,children:r
}
)]
}
)
}
),o>3&&!n&&(0,y.jsx)(a.TouchableOpacity,{
style:t.loadMoreBox,onPress:e.changeMoreStatus,children:(0,y.jsxs)(a.View,{
style:t.loadMore,children:[(0,y.jsx)(a.Text,{
style:t.ellipsis,children:"..."
}
),(0,y.jsx)(a.View,{
style:t.down,children:(0,y.jsx)(c.SvgIcon,{
iconName:'down',opacity:.2,width:20,height:20
}
)
}
)]
}
)
}
),(0,y.jsx)(c.Modal,{
title:(0,s.t)('confirmDeleteMessage'),modalVisible:l,modalId:e.modalId,modalInnerStyle:t.modelBox,modalTitleStyle:t.modalTitleStyle,modalOutterStyle:t.modalOutterStyle,setDocOverflowY:!0,onCancel:e.closeModal,buttonList:[{
style:t.operationText,text:(0,s.t)('cancel'),onPress:e.closeModal
}
,{
style:t.operationText,text:(0,s.t)('delete'),onPress:function(){
return e.deleteMsg(x)
}

}
]
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
)(r.default.Component);
_e.default=(0,r.memo)(v)
}
),"62a3719a07b3f24379347506d0b88dee95c7ce754bd0502e5bf924aaa11e8669",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","92f55d477fc1f069ffa802508e26ef51060284ab07bc3fe1d86c789b4e58cb33","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = i(t);
if(r&&r.has(e))return r.get(e);
var n={
__proto__:null
}
,u=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var l: any = u?Object.getOwnPropertyDescriptor(e,a):null;
l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]
}
return n.default=e,r&&r.set(e,n),n
}
)(_r(d[1])),r=_r(d[2]),n=_r(d[3]),u=e(_r(d[4])),a=e(_r(d[5])),l=_r(d[6]),o=_r(d[7]);
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
_e.default=(0,t.memo)((function(e){
var t,i=e.tabType,f=null==(t=l.tabData.find((function(e){
return e.type===i
}
)))?void 0:t.text;
return(0,o.jsx)(r.WithTheme,{
themeStyles:u.default,children:function(e,t,u,l){
// 变量
var i: any = u<600||l<600?120:160;
return(0,o.jsxs)(n.View,{
style:[e.cardBg,e.nullBox],children:[(0,o.jsx)(n.View,{
style:e.noSearchResult,children:(0,o.jsx)(n.Image,{
style:{
width:i,height:i
}
,source:a.default.noMessage
}
)
}
),(0,o.jsx)(n.Text,{
style:e.nullText,children:(0,r.t)('noMessage',{
tabName:(0,r.t)(f)
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
))
}
),"9e53409a68b706a12918b5ad4829c0b1f24557601fa18e822b980348f3bb09fd",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","92f40b8a4794e879311fb0a67e5192c753493e331c15197472679f552e5811d7","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n){
return t.StyleSheet.create({
cardBg:{
width:'100%'
}
,nullBox:{
alignItems:'center',justifyContent:'center',flex:1
}
,noSearchResult:{
justifyContent:'center',alignItems:'center'
}
,nullText:Object.assign({
marginTop:10
}
,n.T7,{
color:n.C23.color+n.opacityMap[n.C23.opacity]
}
)
}
)
}

}
),"92f40b8a4794e879311fb0a67e5192c753493e331c15197472679f552e5811d7",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]);
e.default=function(t){
return o.StyleSheet.create({
msgTmpBox:{
backgroundColor:t.C33.color,borderRadius:16,paddingHorizontal:12,paddingTop:16
}
,loadingTitle:Object.assign({

}
,t.T7,t.C13),msgListBox:{
flex:1
}

}
)
}

}
),"c2a39a5e5cc7218533ad5aba260fc63cb5f0ce471a08b17d43cdfa6b37daaead",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]);
e.default=function(t){
return o.StyleSheet.create({
commonStyle:{
color:t.C11.color,backgroundColor:t.C32.color,height:'100%'
}
,tabContent:{
alignItems:'center',flex:1
}
,systemInfo:{
display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',paddingTop:8,height:84
}
,systemInfoItem:{
display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:68
}
,systemInfoText:Object.assign({
width:82
}
,t.T3,{
marginTop:2,textAlign:'center',color:t.C11.color,opacity:t.C14.opacity
}
),systemIcon:{
width:44,height:44
}
,multiSession:{
backgroundColor:t.C17.color,borderRadius:16,width:'100%',marginTop:10
}
,boxPosition:{
position:'relative',width:40,height:40,display:'flex',justifyContent:'center',alignItems:'center'
}
,msgPosition:{
position:'absolute',top:0,right:0
}
,Modalstyle:{
position:'absolute',backgroundColor:t.C17.color,borderRadius:16,zIndex:99,shadowColor:t.C24.color,shadowOpacity:t.C24.opacity,shadowOffse:{
width:0,height:0
}
,shadowRadius:20,elevation:10
}
,ModalText:{
width:96,height:48,lineHeight:48,textAlign:'center',fontSize:16
}
,ModelBorder:{
borderBottomWidth:.5,borderBottomColor:t.C39.color+t.opacityMap[t.C39.opacity]
}
,messageContent:{
flex:1
}

}
)
}

}
),"512e4811bed9669183293a5cd5f7607e6f010a2d8fab01ff00325600fa027107",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,_r,_i,_a,m,_e,d){
// 变量
var e: any = _r(d[0]);
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var t=e(_r(d[1])),n=e(_r(d[2])),i=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = p(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var o: any = r?Object.getOwnPropertyDescriptor(e,a):null;
o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[3])),r=_r(d[4]),a=_r(d[5]),o=_r(d[6]),l=e(_r(d[7])),s=_r(d[8]),u=e(_r(d[9])),c=e(_r(d[10])),f=e(_r(d[11])),h=_r(d[12]);
// 函数
function p(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(p=function(e){
return e?n:t
}
)(e)
}
var y=(0,i.forwardRef)((function(e,p){
// 变量
var y: Record<string, any> = (0,i.useState)([]),v=(0,n.default)(y,2),x=v[0],j=v[1],T=(0,i.useState)(1),w=(0,n.default)(T,2),b=w[0],M=w[1],P=(0,i.useState)(1),S=(0,n.default)(P,2),O=S[0],_=S[1],L=(0,i.useState)(0),U=(0,n.default)(L,2),k=U[0],V=U[1];
(0,i.useImperativeHandle)(p,(function(){
return{
clickTab:I
}

}
));
var z=function(e){
(0,s.queryMsgByType)(e).then((function(n){
if('0'===(null==n?void 0:n.code)){
var i=(null==n?void 0:n.activityMsg)||{

}
,r=i.activityMessageList,a=void 0===r?[]:r,o=i.totalRow,l=1===e?a:[].concat((0,t.default)(x),(0,t.default)(a));
j(l),_(e+1),l.length>=o&&M(3)
}
else M(2)
}
)).catch((function(){
M(2)
}
))
}
,I=f.default.debounce((function(){
_(1),M(1),j([]),z(1)
}
),200,{
leading:!0,trailing:!1
}
),R=function(){
3!==b&&z(O)
}
,C=function(){
return(0,h.jsx)(a.WithTheme,{
themeStyles:l.default,children:function(t){
return(0,h.jsxs)(h.Fragment,{
children:[(0,h.jsx)(o.LoadingView,{
showLoading:!0,position:'bottom',loadState:b,iconSize:24,titleStyle:t.loadingTitle,errorCallback:R
}
),(0,h.jsx)(r.View,{
style:[{
height:e.lastMarginBottom
}
]
}
)]
}
)
}

}
)
}
,F=function(t,n,i){
// 变量
var o: any = t.appGotoUrl,l=t.appPhotoUrl,u=t.wapGotoUrl,f=t.wapPhotoUrl,p=t.msgStyle,y=t.createTime,v=t.content,x=t.title;
t.sendTime=y,t.message=v;
var j=a.PlatformUtils.isApp()?o:u,T=a.PlatformUtils.isApp()?l:f,w='1'===p&&T;
return(0,h.jsx)(h.Fragment,{
children:j?(0,h.jsxs)(h.Fragment,{
children:[(0,h.jsx)(r.View,{
style:[n.timeContainer,i>0&&{
marginTop:16
}
],children:(0,h.jsx)(r.View,{
style:[n.timeBlock],children:(0,h.jsx)(r.Text,{
style:[n.timeText],children:(0,s.formatTime)(y)
}
)
}
)
}
),(0,h.jsxs)(r.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return e=j,void a.RouterUtils.gotoPage(e);
var e
}
,style:n.activityContent,children:[w&&(0,h.jsx)(r.Image,{
style:[n.photo,{
height:k/328*110
}
],source:{
uri:T
}
,resizeMode:'stretch'
}
),(0,h.jsxs)(r.View,{
style:[n.activityHint,{
paddingTop:w?10:16
}
],children:[(0,h.jsx)(r.Text,{
style:n.activityTitle,ellipsizeMode:'tail',numberOfLines:1,children:x
}
),(0,h.jsx)(r.Text,{
style:n.activityText,ellipsizeMode:'tail',numberOfLines:2,children:v
}
)]
}
)]
}
)]
}
):(0,h.jsx)(c.default,{
msgInfo:t,type:e.tabType,index:i
}
)
}
)
}
,W=function(e){
var t,n,i,r=null!=(t=null==(n=e.nativeEvent)||null==(i=n.layout)?void 0:i.width)?t:0;
V(r)
}
;
return(0,h.jsx)(a.WithTheme,{
themeStyles:l.default,children:function(t,n,i,o){
// 变量
var l: any = (0,s.handleMessageHeight)(i,o);
return(0,h.jsx)(r.View,{
style:a.PlatformUtils.isApp()?t.flexContent:{
height:l
}
,onLayout:W,children:x.length?(0,h.jsx)(r.FlatList,{
style:t.cardBg,data:x,renderItem:function(e){
// 变量
var n: any = e.item,i=e.index;
return F(n,t,i)
}
,horizontal:!1,initialNumToRender:8,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,onEndReachedThreshold:.3,onEndReached:R,ListFooterComponent:C(),extraData:!0,keyExtractor:function(e,t){
return t.toString()
}

}
):1===b?C():(0,h.jsx)(u.default,{
tabType:e.tabType
}
)
}
)
}

}
)
}
));
_e.default=(0,i.memo)(y)
}
),"2af413e87e977062e71973e0cea16dcc2d2305a9a50287b864c222d846f8958d",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","cc5f2b4289ed1f6f448a954d4a0509baa530c4619abf8715f5f45da12e35da83","6d439569148855cb1c68c19c5c27c335efdc5ce4e28e0c3f8d566c16670b152e","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","47baebc4da2b23c3eee7d5854e598f2928fc0ee2f3eeab75052a4431fb9f7fff","a364a4c6f0445b36e71e16f3a993633e14f23b544a02b81121951823f338f11f","9e53409a68b706a12918b5ad4829c0b1f24557601fa18e822b980348f3bb09fd","62a3719a07b3f24379347506d0b88dee95c7ce754bd0502e5bf924aaa11e8669","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(o){
return t.StyleSheet.create({
cardBg:{
width:'100%',flexGrow:1
}
,activityContent:{
backgroundColor:o.C17.color,borderRadius:16,overflow:'hidden'
}
,timeContainer:{
justifyContent:'center',alignItems:'center',borderRadius:20
}
,timeBlock:{
borderRadius:20,backgroundColor:o.C39.color+o.opacityMap[o.C39.opacity],marginVertical:8
}
,timeText:{
paddingHorizontal:10,paddingVertical:6,color:o.C13.color+o.opacityMap[o.C13.opacity],fontSize:12
}
,activityHint:{
paddingHorizontal:12,paddingVertical:16
}
,photo:{
width:'100%'
}
,activityTitle:Object.assign({
height:21
}
,o.T10,o.C12),activityText:Object.assign({
marginTop:8
}
,o.T5,o.C13),flexContent:{
flex:1
}
,loadingTitle:Object.assign({

}
,o.T7,o.C13)
}
)
}

}
),"47baebc4da2b23c3eee7d5854e598f2928fc0ee2f3eeab75052a4431fb9f7fff",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

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

__r("a8865d635c188d8286e98fb2cc9fafbc721b1378ad269cbadc04556feb6e7248");

//# sourceMappingURL=message.android.bundle.map