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
),t.AppRegistry.registerComponent(r(d[4]).PERSONAL.name,(function(){
return n.default
}
))
}
),"c27a1bfd6570c909310f7c3dc1abfe220add9c3816c3cb4a3bd2ec2e7e4577c2",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c33a61edb034ab71e5bf266210192f46d52b4215f251e7c915eabe68259a88ae","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e,t=r(d[0])(r(d[1])),s=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),p=r(d[0])(r(d[5])),l=r(d[0])(r(d[6])),u=r(d[7]),h=r(d[0])(r(d[8]));
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
(0,r(d[9]).enableScreens)(!1),(0,r(d[10]).setCustomText)();
var f=(0,r(d[11]).observer)(e=(function(e){
// 函数
function l(e: any): any {
var s,p,h,f;
(0,t.default)(this,l),p=this,h=l,f=[e],h=(0,n.default)(h),(s=(0,o.default)(p,v()?Reflect.construct(h,f||[],(0,n.default)(p).constructor):h.apply(p,f))).isAuto=!1,s.getAutoSetColorConfig=function(){
r(d[10]).Bridge.CommonService.getConfigData(r(d[10]).BBD_KEY.RN_IMMERSIVESWIPERIMAGE_AUTOSETCOLOR).then((function(e){
// 变量
var t: any = 'false'!==(null==e?void 0:e.value);
r(d[10]).configStore.setSutoSetColorEnable(t)
}
)).catch((function(){
r(d[10]).configStore.setSutoSetColorEnable(!0)
}
))
}
,s.getWidthAndHeight=function(e,t){
Math.abs(s.state.width-e)<1||s.setState({
width:e,height:t
}
)
}
;
var c={
e2eId:s.props.e2eId,spanId:s.props.parentSpanId
}
;
r(d[10]).CommonUtils.storeE2eId(r(d[10]).PAGE_TYPE_E2EID.personal,!r(d[10]).PlatformUtils.isAndroid(),c);
var S=r(d[10]).E2EIdStore.pageTypeE2EIdSpanId[r(d[10]).E2EIdStore.curPageType],k={
e2eId:S.e2eId,spanId:S.parentSpanId
}
;
return r(d[10]).E2EIdStore.setResidentPageE2EId(r(d[10]).PAGE_TYPE_E2EID.personal,r(d[10]).PlatformUtils.isAndroid()?c:k),r(d[10]).appIdStore.setIsPreload(e.isPreInstalledPackage),r(d[10]).DeviceUtils.deviceStore(e),r(d[10]).AppStore.setIsLogin(e.isLogin),s.pageId=s.props.pageId,s.state={
updateEnv:!1,isJump:!1,pageId:'',isWeb:!0,defaultStyle:'default',DarkStyle:!1,width:u.Dimensions.get('window').width,statusBarHeight:void 0!==e.statusBarHeight?e.statusBarHeight:u.StatusBar.currentHeight||0
}
,s.sizeChangeListener=r(d[10]).DeviceUtils.getWidthHeightChange(s.getWidthAndHeight,r(d[10]).PAGE_TYPE.homePage),s._onLayout=s._onLayout.bind(s),(0,r(d[10]).captureException)('Personal'),s.getAutoSetColorConfig(),s
}
return(0,p.default)(l,e),(0,s.default)(l,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
if(r(d[10]).PlatformUtils.isApp()){
var t,s,o;
this.registerListeners(),(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())&&(r(d[10]).appIdStore.deviceType||r(d[10]).appIdStore.getDeviceType(),r(d[10]).fontStore.setFontMutiple(this.props.fontSize),r(d[10]).fontStore.setDensityScale(this.props.densityScale)),(0,r(d[10]).getRnProductComponentSizeEnable)(),r(d[10]).DarkStore.setpageId(this.props.pageId),r(d[10]).fontStore.setVersion(null==(t=JSON.parse(this.props.networkFields))?void 0:t.version),this.setState({
isWeb:!1
}
),o=this.props.apiEnv&&JSON.parse(this.props.apiEnv);
// 变量
var n: any = this.getUserAbTest();
o.strategies=n||'';
// 变量
var p: any = null==(s=this.props.pageId)?void 0:s.toString();
this.getDarkDate(),this.darkMode=this.props.darkMode,this.darkMode&&JSON.parse(this.darkMode)&&this.darkDate.darkMode&&'Y'===this.darkDate.darkMode&&(this.setState({
defaultStyle:'huawei_dark',DarkStyle:!0
}
),r(d[10]).DarkStore.setDarkBool(this.darkMode)),o.pageId=p,r(d[10]).appIdStore.setApkPackageName(this.props.appPackageName),r(d[10]).appIdStore.setTid(this.props.tid),r(d[10]).PlatformUtils.isHarmony()&&(o.platform='harmony'),(0,r(d[10]).envService)(o),(0,r(d[12]).ImgArrayUpdata)(),this.setState({
updateEnv:!0,pageId:p
}
),this.listenerNative=u.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var s,o=t.service,n=t.action,p=t.tabname,l=t.tabindex,u='page'===o&&'setDarkMode'===n,h=null==(s=t.param)?void 0:s.isDarkMode;
u&&(e.darkMode=!!h,r(d[10]).DarkStore.setDarkBool(e.darkMode),e.setState({
defaultStyle:e.darkMode?'huawei_dark':'default',DarkStyle:e.darkMode
}
)),p&&l&&r(d[10]).TabsTopStore.setTabNameIndex(p||'',isNaN(Number(l))?0:Number(l))
}
))
}

}

}
,{
key:"registerListeners",value:function(){
// 变量
var e: any = this;
this.statusBarListener=r(d[10]).PlatformUtils.isHarmony()&&r(d[10]).DeviceUtils.getBarHeight((function(t){
void 0!==t&&t!==e.state.statusBarHeight&&e.setState({
statusBarHeight:t
}
)
}
))
}

}
,{
key:"getDarkDate",value:function(){
this.darkDate=this.props.darkConfigInfo&&(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony()?JSON.parse(JSON.parse(this.props.darkConfigInfo)):JSON.parse(this.props.darkConfigInfo))
}

}
,{
key:"getUserAbTest",value:function(){
var e,t,s=this.props.userAbTest&&JSON.parse(this.props.userAbTest)||[];
return s=null==(e=s)||null==(t=e.map((function(e){
return e.strategyId||''
}
)))?void 0:t.join(',')
}

}
,{
key:"_onLayout",value:function(e){
// 变量
var t: any = e.nativeEvent.layout.width,s=e.nativeEvent.layout.height;
this.getWidthAndHeight(t,s)
}

}
,{
key:"componentWillUnmount",value:function(){
this.listenerNative&&this.listenerNative.remove(),this.eventListener&&this.eventListener.remove(),this.sizeChangeListener&&this.sizeChangeListener.remove(),this.statusBarListener&&this.statusBarListener.remove(),delete r(d[10]).E2EIdStore.setResidentPageE2EId[r(d[10]).PAGE_TYPE_E2EID.personal]
}

}
,{
key:"render",value:function(){
var e,t=this.props.RnPromptMsg,s=(0,r(d[10]).getLanguage)(this.props),o=(0,r(d[13]).handleI18nextNative)(t,s),n=!r(d[10]).DarkStore.QMbool&&(r(d[10]).PlatformUtils.isIOS()?this.state.DarkStyle:this.darkMode&&'Y'===(null==(e=this.darkDate)?void 0:e.darkMode));
return r(d[10]).DarkStore.setDarkBool(n),r(d[10]).RecordUtils.logger('personal','enableAdvancedFeature='+this.props.enableAdvancedFeature),this.state.updateEnv&&o?(0,r(d[14]).jsxs)(r(d[10]).Provider,{
theme:n?'huawei_dark':'default',width:this.state.width,height:this.state.height,children:[(0,r(d[14]).jsx)(u.View,{
onLayout:this._onLayout,style:{
position:'absolute',width:'100%',height:'100%'
}

}
),(0,r(d[14]).jsx)(r(d[11]).Provider,{
store:r(d[10]).AppStore,children:(0,r(d[14]).jsx)(r(d[15]).I18nextProvider,{
i18n:o,children:(0,r(d[14]).jsx)(h.default,Object.assign({

}
,this.props,this.state,r(d[10]).PlatformUtils.isHarmony()&&{
isLogin:r(d[10]).AppStore.isLogin
}
,{
pageId:this.props.pageId,pageAlias:this.props.pn,DarkStyle:n
}
))
}
)
}
)]
}
):(0,r(d[14]).jsx)(u.View,{
onLayout:this._onLayout
}
)
}

}
])
}
)(l.default.Component))||e;
_e.default=f
}
),"c33a61edb034ab71e5bf266210192f46d52b4215f251e7c915eabe68259a88ae",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","e5d76334369b5afc2ae74b097230cafc05e57ccf9b2874fbd5c13ba294d72f0e","6310a04b881ed905f1bdf4c0f9d054035622e97f0fd28f13c5b95f073129ad55","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","26abed5e0338f4e7f6ab2c7c877c4313b45f687e86fa36e42d6072f91e82bfed","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),o=_r(d[0])(_r(d[5])),a=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = l(t);
if(n&&n.has(e))return n.get(e);
var r={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var i: any = o?Object.getOwnPropertyDescriptor(e,a):null;
i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[6])),i=_r(d[7]),u=_r(d[0])(_r(d[8]));
// 函数
function l(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(l=function(e){
return e?n:t
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
var f='PersonalDeault',c={

}
,p=0,v=function(){
return _r(d[9]).PlatformUtils.isWeb()
}
;
if(v()){
var w=_r(d[9]).UrlUtils.getQueryStr('PersonalParams')||'{

}
';
c=JSON.parse(w),f=!_r(d[9]).CommonUtils.isEmpty(c)&&c.targetRoute?c.targetRoute:'PersonalDeault',p=window.screen.width
}
var y=(function(a){
// 函数
function l(t: any): any {
var o,a,i,u;
if((0,e.default)(this,l),a=this,i=l,u=[t],i=(0,r.default)(i),o=(0,n.default)(a,s()?Reflect.construct(i,u||[],(0,r.default)(a).constructor):i.apply(a,u)),_r(d[9]).PlatformUtils.isApp()){
var p,v=(null==t?void 0:t.categoryParams)||'{

}
';
if(c=JSON.parse(v),!_r(d[9]).CommonUtils.isEmpty(c)&&c.targetRoute)f=null==(p=c)?void 0:p.targetRoute;
else f='PersonalDeault'
}
return o
}
return(0,o.default)(l,a),(0,t.default)(l,[{
key:"componentDidMount",value:function(){
v()&&_r(d[9]).PlatformUtils.isWap(i.Dimensions.get('window').width)&&(this.resizeListener=window.addEventListener('resize',(function(){
Math.abs(window.screen.width-p)>200&&window.location.reload()
}
)))
}

}
,{
key:"componentWillUnmount",value:function(){
f='PersonalDeault',v()&&this.resizeListener&&window.removeEventListener('resize',(function(){

}
))
}

}
,{
key:"render",value:function(){
return(0,_r(d[10]).jsx)(u.default,Object.assign({
defaultRoute:f,personalParams:c
}
,this.props))
}

}
])
}
)(a.Component);
_e.default=y
}
),"e5d76334369b5afc2ae74b097230cafc05e57ccf9b2874fbd5c13ba294d72f0e",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","117a40e6f43f46934776fbdef4408da39f89d1d43d7c9a52ca23f9f46e22b736","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),n=(r(d[0])(r(d[2])),r(d[3])),o=r(d[0])(r(d[4])),l=r(d[0])(r(d[5])),u=["defaultRoute"];
e.default=function(s){
var c=s.defaultRoute,f=(0,t.default)(s,u),j=(0,r(d[6]).createStackNavigator)(),h=Object.assign({

}
,r(d[7]).DefaultTheme,{
colors:Object.assign({

}
,r(d[7]).DefaultTheme.colors,{
background:'transparent'
}
)
}
);
return(0,r(d[8]).jsx)(r(d[7]).NavigationContainer,{
theme:h,children:(0,r(d[8]).jsx)(j.Navigator,{
initialRouteName:c,children:(0,r(d[8]).jsx)(j.Screen,{
name:"PersonalDeault",options:{
headerShown:!1,title:(0,r(d[9]).t)('personal')
}
,children:function(t){
return'web'===n.Platform.OS?(0,r(d[8]).jsx)(o.default,Object.assign({

}
,f)):(0,r(d[8]).jsx)(l.default,Object.assign({

}
,f))
}

}
)
}
)
}
)
}

}
),"117a40e6f43f46934776fbdef4408da39f89d1d43d7c9a52ca23f9f46e22b736",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","9a46dd7eba1ef94d625ba748404e4e5a055539131c11189441e75277cd25a48a","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","66a6da45b129f65acb574f13e8c52fc4c8c000fa0497372d4d4de32ba350f08e","66a6da45b129f65acb574f13e8c52fc4c8c000fa0497372d4d4de32ba350f08e","b59f5741143d747a6b7458314d550fc2033674c2475d4bcae93d5c5db8ca365c","58acbb2a11d12e39fd248a1b96db102c400867b55536474cd5eb8b47fc1caf0e","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i2,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e,t=_r(d[0])(_r(d[1])),n=_r(d[0])(_r(d[2])),o=_r(d[0])(_r(d[3])),a=_r(d[0])(_r(d[4])),i=_r(d[0])(_r(d[5])),r=_r(d[0])(_r(d[6])),s=_r(d[0])(_r(d[7])),l=(function(e,t){
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
,a=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var i in e)if("default"!==i&&{

}
.hasOwnProperty.call(e,i)){
// 变量
var r: any = a?Object.getOwnPropertyDescriptor(e,i):null;
r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i]
}
return o.default=e,n&&n.set(e,o),o
}
)(_r(d[8])),u=_r(d[9]),c=_r(d[0])(_r(d[10])),p=_r(d[0])(_r(d[11])),f=_r(d[0])(_r(d[12])),h=_r(d[0])(_r(d[13])),v=_r(d[0])(_r(d[14]));
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
var I='Personal',P=0,T=['1','2'];
_r(d[15]).PlatformUtils.isIOS()&&_r(d[15]).DeviceUtils.getBottomBarHeight().then((function(e){
P=e
}
)).catch((function(e){

}
));
var N=null,E=function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;
null!==N&&clearTimeout(N),N=setTimeout((function(){
N=null,e&&e()
}
),t)
}
,C=(0,_r(d[16]).observer)(e=(function(e){
// 函数
function y(e: any): any {
var o,r,p,h,v,N,E,C;
if((0,n.default)(this,y),N=this,E=y,C=[e],E=(0,i.default)(E),(v=(0,a.default)(N,S()?Reflect.construct(E,C||[],(0,i.default)(N).constructor):E.apply(N,C))).headStyle={

}
,v.groupStyleChanges={

}
,v.personalStyleChange={

}
,v.strategyIdList='',v.scrollViewStartOffsetY=0,v.pageType=4,v.showBox=1,v.otherParams={

}
,v.scrollViewKey=1,v.upgradeGiftInterval=0,v.lastGiftPopupTime=null,v.lastCalendarPopupTime=null,v.giftPoint=0,v.enableAdvancedFeature=Number(v.props.enableAdvancedFeature),v.calendarAuthLinstener=null,v.isPersonal=!0,v.pageCatCode='',v.pageCatName='',v.isFocus=!1,v.dialogEventLisenter=null,v.isGroupFlag=!1,v.isDisplayScenePurchaseNavBottom=!1,v.scenePurchaseNavBottomData={

}
,v.pageListener=new(_r(d[15]).Listener)('Personal'),v.isCaculated=!1,v.consumeYear='1',v.remainDays=30,v.recyclerListOneByTwo=!0,v.rnBundleLoadEnd=(0,t.default)((function*(){
if(_r(d[15]).PlatformUtils.isAndroid()){
// 变量
var e: any = v.props,t=e.e2eId,n=e.parentSpanId,o=e.mineData;
_r(d[15]).DeviceUtils.hmiLog({
e2eId:t,parentSpanId:n,stage:'end',name:'rnBundleLoad'
}
),null!=o&&o.pageInfos||(v.hmiSpanIdFirstScreen=yield _r(d[15]).DeviceUtils.hmiLog({
e2eId:t,parentSpanId:n,stage:'begin',name:'firstScreen'
}
))
}

}
)),v.handleAppStateChange=function(e){
'active'===e&&v.getNotifyInfo()
}
,v.setStatusBarStyle=function(){
var e,t,n,o,a=(null==(e=v.state)||null==(t=e.cmsData)||null==(n=t.pageInfos)?void 0:n.length)&&JSON.parse(JSON.stringify(v.state.cmsData.pageInfos[0])).cards[0],i=a.configInfo&&(null==(o=JSON.parse(a.configInfo))?void 0:o.display);
v.getIsMember(i)?_r(d[15]).DeviceUtils.setBarStyle('light-content'):_r(d[15]).DeviceUtils.setBarStyle('dark-content')
}
,v.getRecommendFlag=function(e){
e?_r(d[15]).CommonUtils.getRecommendConfigRes().then((function(e){
v.setRecommendFlag(e)
}
)):v.setRecommendFlag(!1)
}
,v.setRecommendFlag=function(e){
v.state.recommendFlag!==e&&v.setState({
recommendFlag:e
}
)
}
,v.eventTracingReportByLoad=function(e){
var t;
v.isLeave=!0,_r(d[15]).EventTracking.eventTracingReport({
actionCode:'110000000',actionName:'\u52a0\u8f7d\u4e2a\u4eba\u4e2d\u5fc3\u7ec4\u4ef6\u5316\u9875\u9762',eventType:_r(d[15]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:null==(t=v.state.reportPageId)?void 0:t.toString(),content:{
load:e?'2':'1'
}
,pageCatCode:v.pageCatCode,pageCatName:v.pageCatName,resSiteCode:'',resSiteName:''
}
)
}
,v.getDeviceTid=function(){
_r(d[15]).DeviceUtils.getDeviceInfo(_r(d[15]).APP_INFOS.DEVICE_INFO).then((function(e){
v.setState({
tid:null==e?void 0:e.tid
}
)
}
))
}
,v.onBackTop=function(){
_r(d[15]).PlatformUtils.isIOS()?setTimeout((function(){
v.scroller&&v.scroller.scrollToTop&&v.scroller.scrollToTop(!0),v.scroller&&v.scroller.scrollTo&&v.scroller.scrollTo({
y:0,animated:!0
}
)
}
),0):(v.scroller&&v.scroller.scrollToTop&&v.scroller.scrollToTop(!0),v.scroller&&v.scroller.scrollTo&&v.scroller.scrollTo({
y:0,animated:!0
}
))
}
,v.refSon=function(e){
v.sonRef=e
}
,v.isAndroid=function(){
return _r(d[15]).PlatformUtils.isAndroid()
}
,v._queryUserInfo=function(e,t,n){
_r(d[15]).HttpService.getUserInfo(_r(d[15]).MCP_PORTAL.APP,_r(d[15]).MCP_LANG.CN,_r(d[15]).MCP_COUNTRY.CN,!1).then((function(o){
var a,i,r,s=null==o||null==(a=o.userInfo)?void 0:a.uid,l=null==o||null==(i=o.userInfo)?void 0:i.consumeYear;
if(_r(d[15]).AppStore.setUserInfo(null==o?void 0:o.userInfo),s&&!v.userId&&(v.userId=s),l&&(v.consumeYear=l),v.getNotifyInfo(),!_r(d[15]).CommonUtils.isEmpty(null==o?void 0:o.userInfo)){
v.handleUserInfo(o,e,t,n);
// 变量
var u: any = null==o||null==(r=o.userInfo)?void 0:r.isVpro;
if(v.state.isVpro===u||!u)return!1;
v.setState({
isVpro:u
}
,(function(){
v.setStatusBarStyle()
}
))
}

}
)).catch((function(){
v.otherParams.userInfo=null
}
))
}
,v.handleData=function(e){
var t,n;
if(_r(d[15]).DataHandleUtils.initCardsList(e,'app'),_r(d[15]).DataHandleUtils.oneTimeCallPageDataSource(null==e?void 0:e.pageInfos),null!=e&&null!=(t=e.pageInfos)&&t.length){
var o,a,i=(null==e?void 0:e.pageInfos[0])||{

}
,r=i.pageCatCode,s=i.pageCatName,l=i.pageType,u=i.groupStyleChanges,c=i.styleChange,p=i.headerStyle,f=i.pageParam;
v.pageCatCode=r,v.pageCatName=s,v.groupStyleChanges=u?JSON.parse(u):'',v.personalStyleChange=c?JSON.parse(c):{

}
,v.headStyle=p?JSON.parse(p):{

}
,v.pageType=l,v.otherParams.hasTitle=!(null==(o=v.headStyle)||!o.headStyle);
// 变量
var h: any = f&&JSON.parse(f);
v.showBox=null==h?void 0:h.showBox;
// 变量
var y: any = v.headStyle,S=y.sysNoticeShow,I=y.sysNoticeBtnTxt,P=y.sysNoticeTxt;
v.setState({
sysNoticeBtnTxt:I,sysNoticeTxt:P,sysNoticeShow:S,cmsData:e,configInfo:JSON.stringify(null==(a=v.headStyle)?void 0:a.attribute),withNoLoginUser:null==h?void 0:h.withNoLoginUser
}
)
}
// 变量
var T: any = (null==e||null==(n=e.pageInfos)?void 0:n.length)&&e.pageInfos[0].channel;
_r(d[15]).appIdStore.getAppId(T)
}
,v._getAndroidPageInfo=function(e){
if(!v.state.pageId&&0!==v.enableAdvancedFeature)return _r(d[15]).PlatformUtils.isHarmony()?Promise.reject(new Error('Network Error')):Promise.reject();
// 变量
var t: any = v.state.pageId,n='';
0===v.enableAdvancedFeature&&(t='',n='rnBasicPersonalPage'),_r(d[15]).RecordUtils.logger(I,'pageId='+t+'---this.props.pageId='+v.props.pageId);
var o=new Promise((function(e){
return e(_r(d[15]).HttpService.getPageInfoListAsyncForApk(t,v.strategyIdList,'3',n))
}
));
return _r(d[15]).CommonUtils.racePromise(o,1e4).then((function(n){
var o,a;
return null!=(o=n)&&null!=(a=o.message)&&a.includes('Network Error')&&_r(d[15]).RecordUtils.logger(I,'overtime1 pageId:'+t),n=_r(d[15]).DataHandleUtils.initCardsList(n,'app'),v.handleData(n),v.updateReportPageId(n,e),Promise.resolve()
}
)).catch((function(t){
v.getAndroidPageInfoCatch(e,t)
}
)).finally((function(){
!e&&v.handleStrategy()
}
))
}
,v._onMomentumScrollEnd=function(e){
_r(d[15]).PlatformUtils.isHarmony()||u.DeviceEventEmitter.emit('onScrollEvent',e,'personal')
}
,v._onScrollBeginDrag=function(e){
u.DeviceEventEmitter.emit('onScrollBeginDragEvent',e,_r(d[15]).PAGE_TYPE.personal),v.scrollViewStartOffsetY=e.nativeEvent.contentOffset.y
}
,v._onScrollEndDrag=function(e){
_r(d[15]).PlatformUtils.isHarmony()&&(v.timer&&clearTimeout(v.timer),v.timer=setTimeout((function(){
var e={
nativeEvent:{
contentOffset:{
x:0,y:v.eventOffsetY
}

}

}
;
u.DeviceEventEmitter.emit('onScrollEvent',e,_r(d[15]).PAGE_TYPE.personal)
}
),1e3))
}
,v._onLayout=function(e){
(0,_r(d[15]).onLayout)(e),(0,_r(d[15]).layout)(e,_r(d[15]).PAGE_TYPE.personal)
}
,v.dialogTimer=null,v.flag=!0,v.getSysConfig=(0,t.default)((function*(){
// 变量
var e: any = v.props.enableAdvancedFeature;
if(0===e||'0'===e)return null;
yield v.getGiftConfig(),(null==v.lastGiftPopupTime||(new Date).getTime()-v.lastGiftPopupTime>v.upgradeGiftInterval)&&v.getUpgradePrivileges()
}
)),v.getGiftConfig=function(){
return new Promise((function(e){
_r(d[15]).HttpService.querySystemConfig("['GIFT_NOTICE_POPUP_INTERVAL', 'GIFT_CALENDAR_POPUP_INTERVAL']").then((function(t){
var n;
t.systemConfigInfos&&(v.upgradeGiftInterval=24*(null==(n=t.systemConfigInfos.GIFT_NOTICE_POPUP_INTERVAL)?void 0:n.systemConfigValue)*3600*1e3||0,e({

}
))
}
))
}
))
}
,v.getUpgradePrivileges=function(){
// 变量
var e: any = _r(d[15]).Service.openApiDomain+"mcp/user/upgradeGift?portal="+_r(d[15]).CommonUtils.getPortal()+"&country=CN&lang=zh_CN&version=1";
_r(d[15]).Http.get(e).then((function(e){
'50020'===String(e.code)||('0'!==String(e.code)?v.getBirthdayPrivileges():e.count>0?v.handleUpgradeData(null==e?void 0:e.lstgiftRights):v.getBirthdayPrivileges())
}
))
}
,v.getBirthdayPrivileges=function(){
// 变量
var e: any = _r(d[15]).Service.openApiDomain+"mcp/user/birthdayPrivileges?portal="+_r(d[15]).CommonUtils.getPortal()+"&country=CN&lang=zh_CN&version=1";
_r(d[15]).Http.get(e).then((function(){
var e=(0,t.default)((function*(e){
if('50020'===String(e.code));
else if(e.success){
// 变量
var t: any = null==e?void 0:e.currentMonthRemind;
v.giftPoint=null==e?void 0:e.giftPoint,t&&(v.getBirthTemplate('app_popup_birthday_privilege'),v.setLastBirthPopupTime((new Date).getTime()))
}

}
));
return function(t){
return e.apply(this,arguments)
}

}
)())
}
,v.caculteDate=function(){
// 变量
var e: any = new Date,t=e.getFullYear(),n=e.getMonth();
11===n?(t+=1,n=0):n+=1;
// 变量
var o: any = new Date(t,n,1,10),a=new Date(t,n,1,24);
return{
begin:o.getTime(),end:a.getTime()
}

}
,v.setLastBirthPopupTime=function(e){
_r(d[15]).StorageUtil.setSpValueAll('last_popup_time',e.toString(),'String')
}
,v.birthTemplate=null,v.getBirthTemplate=function(e){
clearTimeout(v.birthTemplate),v.birthTemplate=setTimeout((function(){
if(v.isPersonal){
// 变量
var t: any = _r(d[15]).CommonUtils.getPortal(),n=_r(d[15]).Service.openApiDomain+"mcp/queryTemplate?portal="+t+"&country=CN&lang=zh_CN&version=1&placeholder=['"+e+"']";
_r(d[15]).Http.get(n,{

}
).then((function(t){
v.setState({
dialogType:e,templateContent:(null==t?void 0:t.templateMapping)&&(null==t?void 0:t.templateMapping[e].content)
}
)
}
))
}

}
),300)
}
,v.getVproLogo=function(){
_r(d[15]).HttpService.getTemplate('vmall_vpro_logo').then((function(e){
if(null!=e&&e.success){
var t,n,o=e.templateMapping,a=null==o||null==(t=o.vmall_vpro_logo)||null==(n=t.content)?void 0:n.replace(/<.*?>/gi,'');
v.otherParams.vproLogoTagHolder=a
}

}
)).finally((function(){
v.setState({
getVproLogoFinish:!0
}
)
}
))
}
,v.changeDialog=function(){
v.setState({
dialogType:'',templateContent:''
}
)
}
,v.renderPage=function(e,t){
return _r(d[15]).PlatformUtils.isApp()?(0,_r(d[17]).jsx)(_r(d[18]).GestureHandlerRootView,{
children:v._loadPage(e,t)
}
):v._loadPage(e,t)
}
,v.errorRefresh=function(){
v.setState({
error:!1
}
),v._getPageInfo()
}
,v._isLogin=function(){
v.eventListenerLogin=u.DeviceEventEmitter.addListener('NativeCallAction',(function(){
var e=(0,t.default)((function*(e){
// 变量
var t: any = null==e?void 0:e.param;
v.handleLogin(e,t),v.tabFragment(e,t)
}
));
return function(t){
return e.apply(this,arguments)
}

}
)())
}
,v._tabChange=s.default.throttle((function(){
v.flag&&(v.flag=!1,clearTimeout(v.dialogTimer),v.dialogTimer=setTimeout((function(){
v.isPersonal=!0,v.getSysConfig()
}
),100))
}
),2e3,{
trailing:!1
}
),v._refreshControl=function(e){
return _r(d[15]).PlatformUtils.isIOS()?(0,_r(d[17]).jsx)(u.RefreshControl,{
refreshing:v.state.isRefreshing,tintColor:e.C31.color,onRefresh:v._onRefresh
}
):(0,_r(d[17]).jsx)(_r(d[19]).LottieRefreshControl,{
ref:function(e){
return v.refreshControl=e
}
,onRefresh:v._onRefresh,primaryColor:e.C32.color,darkStyle:v.props.DarkStyle,headerHeight:96,lottieViewHeight:v.props.statusBarHeight<=0?57:96,fromWhere:_r(d[15]).PAGE_TYPE.personal
}
)
}
,v._productTitleAndMore=function(e){
v.state.productTitleAndMore||v.state.productTitleAndMore===e||v.setState({
productTitleAndMore:e
}
)
}
,v.isPaddTop=function(){
return _r(d[15]).PlatformUtils.isApp()&&v.state.userAccount&&v.state.isJsLogin
}
,v._onScroll=function(e){
// 变量
var t: any = e.nativeEvent.contentOffset.y;
v.eventOffsetY=t,v.state.scrollY.setValue(t),u.DeviceEventEmitter.emit('onOutScrollViewScroll',e.nativeEvent.contentOffset.y,_r(d[15]).PAGE_TYPE.personal),(_r(d[15]).PlatformUtils.isIOS()||_r(d[15]).PlatformUtils.isHarmony())&&(v.timer&&clearTimeout(v.timer),v.timer=setTimeout((function(){
if(_r(d[15]).PlatformUtils.isHarmony()){
var t={
nativeEvent:{
contentOffset:{
x:0,y:v.eventOffsetY
}

}

}
;
u.DeviceEventEmitter.emit('onScrollEvent',t,_r(d[15]).PAGE_TYPE.personal)
}
else u.DeviceEventEmitter.emit('iosForOnScrollEvent',e,_r(d[15]).PAGE_TYPE.personal)
}
),1e3))
}
,v._renderApp=function(e,t,n,o){
var a,i,r=(null==(a=v.state.cmsData)||null==(i=a.pageInfos)?void 0:i.length)&&JSON.parse(JSON.stringify(v.state.cmsData.pageInfos[0]));
if(r.cards.length<=2)return null;
// 变量
var s: Function = [];
if(r.cards&&r.cards.length)for(var l=0;
l<r.cards.length;
l++)'prod'!==r.cards[l].cardType&&'hybrid'!==r.cards[l].cardType||l!==r.cards.length-1||(s.push(r.cards[l]),r.cards=s);
if(r.cards.length>0){
for(var u,p,f=(0,_r(d[19]).jsonConvert)(r,_r(d[15]).PAGE_TYPE.personal).children,h=0;
h<f.length;
h++)'prod'!==f[h].type&&'hybrid'!==f[h].type||(p=f[h]);
// 变量
var y: any = v._renderAppTop(n,o),S=p.props;
return S.topComponent=y,S.scrollViewRef=function(e){
v.scroller=e
}
,S.refreshControl=v._refreshControl(t),S.uniqueKey=_r(d[15]).PAGE_TYPE.personal,S.heightForRefreshControl=96,S.pageStyle=e.commonStyle,S.onScroll=v._onScroll,S.onScrollBeginDrag=v._onScrollBeginDrag,S.onScrollEndDrag=v._onScrollEndDrag,S.onMomentumScrollEnd=v._onMomentumScrollEnd,S.isNewWaterfall=!0,S.productTitleAndMore=function(e){
return v._productTitleAndMore(e)
}
,S.vproLogoTagHolder=(null==(u=v.otherParams)?void 0:u.vproLogoTagHolder)||'',S.getVproLogoFinish=v.state.getVproLogoFinish,S.recommendFlag=v.state.recommendFlag,S.oaid=v.props.oaid||'',S.recyclerListOneByTwo=v.recyclerListOneByTwo,'hybrid'===r.cards[0].cardType?(0,_r(d[17]).jsx)(c.default,Object.assign({

}
,S)):(0,_r(d[17]).jsx)(_r(d[19]).Product,Object.assign({

}
,S))
}

}
,v._renderAppTop=function(e,t){
var n,o,a,i,r,s=(null==(n=v.state.cmsData)||null==(o=n.pageInfos)?void 0:o.length)&&JSON.parse(JSON.stringify(v.state.cmsData.pageInfos[0])),c=(null==(a=v.state.cmsData)||null==(i=a.pageInfos)?void 0:i.length)&&JSON.parse(JSON.stringify(v.state.cmsData.pageInfos[0])).cards[0],p=[];
if(s.cards&&s.cards.length)for(var h=0;
h<s.cards.length;
h++)h!==s.cards.length-1&&p.push(s.cards[h]);
s.cards=p;
// 变量
var y: any = (null==c?void 0:c.configInfo)&&JSON.parse(c.configInfo).display,S=v.getIsMember(y);
return(0,_r(d[17]).jsxs)(u.View,{
onLayout:function(e){
_r(d[19]).pageHeaderStore.setHeaderHeight(_r(d[15]).PAGE_TYPE.personal,e.nativeEvent.layout.height)
}
,children:[(0,_r(d[17]).jsx)(f.default,{
configInfo:v.state.configInfo,isLogin:v.state.isJsLogin,enableAdvancedFeature:v.enableAdvancedFeature,titleOpacity:v.state.titleOpacity,cartNum:v.state.cartNum,messageNum:v.state.messageNum,avaImg:v.state.avaImg,userName:v.state.userName,userAccount:v.state.userAccount,userLevel:v.state.userLevel,headStyle:t,groupStyleChanges:e,pageId:v.state.reportPageId,lang:v.props.lang,ref:v.refSon,vproList:c,isVpro:v.state.isVpro,personalStyleChange:v.personalStyleChange,userId:v.userId,appPackageName:_r(d[15]).appIdStore.apkPackageName,pageCatName:v.pageCatName,statusBarHeight:v.props.statusBarHeight
}
),v.showMarginTop(S),(0,l.createElement)(_r(d[15]).DynamicComponent,Object.assign({

}
,(0,_r(d[19]).jsonConvert)(s,_r(d[15]).PAGE_TYPE.personal,void 0,!1,v.otherParams),{
mapComponents:_r(d[20]).MapComponents,stickyScrollY:v.state.scrollY,key:v.scrollViewKey,pageType:_r(d[15]).PAGE_TYPE.personal
}
)),v.isDisplayScenePurchaseNavBottom&&(0,_r(d[17]).jsx)(u.View,{
style:{
height:24+(null==(r=v.scenePurchaseNavBottomData)?void 0:r.bottomNavHeight)
}

}
),'function'==typeof v.state.productTitleAndMore?v.state.productTitleAndMore('',v.state.recommendFlag):v.state.productTitleAndMore]
}
)
}
,v.clickOpen=function(){
v.setState({
isShow:!1
}
);
var e={
switchState:{
system:v.state.system,logistics:v.state.logistics,service:v.state.service,activity:v.state.activity,shortMessage:v.state.shortMessage
}
,scene:'0',pageURL:'/portal/personal/',type:'2'
}
;
_r(d[15]).RnBridge.invokeVmallNative('common','openNotificationSettings',{
data:JSON.stringify(e)
}
).then((function(){

}
)).catch((function(){

}
))
}
,v.clickClose=function(){
// 变量
var e: any = (new Date).getTime();
_r(d[15]).StorageUtil.setSpValueAll('notifyCloseTime',e.toString(),'String'),v.setState({
isShow:!1
}
)
}
,v.calculateCostOnRef=function(e){
!v.isCaculated&&e&&(v.isCaculated=!0,v.reportHmiEnd())
}
,v.renderLoginComponent=function(e){
var t,n,o,a,i,r=_r(d[15]).CommonUtils.getWindowSize(),s=r.screenWidth,l=r.screenHeight;
if(_r(d[15]).RecordUtils.logger(I,"AppStore.isLogin:"+_r(d[15]).AppStore.isLogin),!_r(d[15]).AppStore.isLogin&&null!=e&&null!=(t=e.loginInfo)&&t.isSoupportLoginComp)return(0,_r(d[17]).jsx)(_r(d[19]).LoginCompnent,{
screenWidth:s,screenHeight:l,loginTip:null==e||null==(n=e.loginInfo)?void 0:n.loginBtnTxt,pageType:_r(d[15]).PAGE_TYPE.personal,pageId:null==e||null==(o=e.loginInfo)?void 0:o.pageId,cardId:null==e||null==(a=e.loginInfo)?void 0:a.cardId,isNeedOffset:v.isDisplayScenePurchaseNavBottom,offsetHeight:null==(i=v.scenePurchaseNavBottomData)?void 0:i.bottomNavHeight
}
)
}
,v.getBackTopOffsetHeight=function(e){
var t,n,o,a=0;
v.isDisplayScenePurchaseNavBottom&&(a=(null==(o=v.scenePurchaseNavBottomData)?void 0:o.bottomNavHeight)-56);
return v.isDisplayScenePurchaseNavBottom&&!_r(d[15]).AppStore.isLogin&&null!=e&&null!=(t=e.loginInfo)&&t.isSoupportLoginComp&&(a=a+26+_r(d[15]).CommonUtils.getScaleSize(18,_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_SIX)),a+(!_r(d[15]).AppStore.isLogin&&null!=e&&null!=(n=e.loginInfo)&&n.isSoupportLoginComp?_r(d[15]).CommonUtils.getScaleSize(12,_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_SIX):0)
}
,v.getBackTopOffsetHeightHarmony=function(e){
var t,n=0,o=v.getIsShowLogin(e);
v.isDisplayScenePurchaseNavBottom?(n=null==(t=v.scenePurchaseNavBottomData)?void 0:t.bottomNavHeight,o&&(n=n+28+_r(d[15]).CommonUtils.getScaleSize(18,_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_SIX)+8)):o&&(n=28+_r(d[15]).CommonUtils.getScaleSize(18,_r(d[15]).FONT_MUTIPLE.FONT_LEVEL_SIX)+20);
return n
}
,v.hasCacheControl=function(e){
return!(e<v.remainDays)
}
,v.isShowNotifyDialogFunc=(0,t.default)((function*(){
// 变量
var e: any = arguments.length>0&&void 0!==arguments[0]&&arguments[0];
yield _r(d[15]).HttpService.querySystemConfig("['RN_MESSAGE_NOTIFY_DONOT_DISTURB_DAYS']").then((function(e){
var t;
e.systemConfigInfos&&(v.remainDays=Number(null==(t=e.systemConfigInfos.RN_MESSAGE_NOTIFY_DONOT_DISTURB_DAYS)?void 0:t.systemConfigValue)||30)
}
));
// 变量
var t: any = (yield _r(d[15]).StorageUtil.getSpValueAll('notifyCloseTime','String'))||0,n=(new Date).getTime(),o=(Number(n)-Number(t))/864e5,a=_r(d[15]).AppStore.isLogin,i=v.hasCacheControl(o),r=T.includes(v.consumeYear);
return i&&a&&!r&&e
}
)),v.getNotifyInfo=function(){
_r(d[15]).RnBridge.invokeVmallNative('common','getNotificationSwitch').then((function(){
var e=(0,t.default)((function*(e){
if(e)if(v.getNotificationSwitchStatus(e)){
// 变量
var t: any = yield v.isShowNotifyDialogFunc(!0,e);
v.setState({
system:e.system,logistics:e.logistics,service:e.service,activity:e.activity,shortMessage:e.shortMessage,isShowNotifyDialog:t,isShow:!0
}
)
}
else v.setState({
isShowNotifyDialog:!1,isShow:!1
}
);
else v.setState({
isShowNotifyDialog:!1,isShow:!1
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
,v.getNotificationSwitchStatus=function(e){
return'0'===e.system||'0'===e.logistics||'0'===e.service||'0'===e.activity||'0'===e.shortMessage
}
,v.renderNotifyComponent=function(){
var e,t=_r(d[15]).CommonUtils.getWindowSize(),n=t.screenWidth,o=t.screenHeight,a=v.state,i=a.isShow,r=a.isShowNotifyDialog,s=a.sysNoticeShow;
if(i&&r&&'1'===String(s))return(0,_r(d[17]).jsx)(_r(d[19]).NotifyCompnent,{
screenWidth:n,screenHeight:o,clickOpen:v.clickOpen,clickClose:v.clickClose,sysNoticeBtnTxt:v.state.sysNoticeBtnTxt,sysNoticeTxt:v.state.sysNoticeTxt,isNeedOffset:v.isDisplayScenePurchaseNavBottom,offsetHeight:null==(e=v.scenePurchaseNavBottomData)?void 0:e.bottomNavHeight,pageType:_r(d[15]).PAGE_TYPE.personal,pageId:v.state.reportPageId
}
)
}
,v._loadPage=function(e,t){
var n,o,a,i,r=v.props,s=r.pageType,l=r.width,c=r.lang,p=r.statusBarHeight,h=v.state,y=h.cmsData,S=h.isJsLogin,I=h.recommendFlag,T=h.isVpro,N=h.titleOpacity,E=h.cartNum,C=h.messageNum,L=h.configInfo,_=h.avaImg,A=h.userName,D=h.userAccount,R=h.userLevel,O=h.reportPageId,U=(null==y||null==(n=y.pageInfos)?void 0:n.length)&&JSON.parse(JSON.stringify(y.pageInfos[0])).cards,w=v.headStyle,B=v.groupStyleChanges,k=v.personalStyleChange,b=(0,_r(d[15]).screenSize)(l),F=(null==y||null==(o=y.pageInfos)?void 0:o.length)&&JSON.parse(JSON.stringify(y.pageInfos[0])).cards[0],V=(null==F?void 0:F.configInfo)&&(null==(a=JSON.parse(null==F?void 0:F.configInfo))?void 0:a.display),x=v.getIsMember(V);
v.otherParams.isLogin=S,v.otherParams.isGroupFlag=v.isGroupFlag,v.otherParams.recommendFlag=I,v.otherParams.isVpro=T;
// 变量
var H: any = (null==y||null==(i=y.pageInfos)?void 0:i.length)&&y.pageInfos[0],Y=(0,_r(d[19]).jsonConvert)(H,_r(d[15]).PAGE_TYPE.personal,void 0,!1,v.otherParams);
return v.handleScenePurchaseNavBottom(Y),(0,_r(d[17]).jsxs)(u.View,{
onLayout:v._onLayout,style:{
marginBottom:_r(d[15]).PlatformUtils.isIOS()?P:0
}
,children:[(0,_r(d[17]).jsxs)(u.View,{
style:e.personalBody,ref:v.calculateCostOnRef,children:[v.renderPersonalTitle(x,w,k,b,s,F),v.handleRenderApp(U)?v._renderApp(e,t,B,w):(0,_r(d[17]).jsxs)(u.Animated.ScrollView,{
ref:function(e){
v.scroller=e
}
,refreshControl:v._refreshControl(t),style:e.commonStyle,onScroll:v.onScroll(),scrollEventThrottle:1,showsVerticalScrollIndicator:!1,showsHorizontalScrollIndicator:!1,overScrollMode:_r(d[15]).PlatformUtils.isHarmony()?'always':'never',onScrollBeginDrag:v._onScrollBeginDrag,onScrollEndDrag:v._onScrollEndDrag,onMomentumScrollEnd:v._onMomentumScrollEnd,removeClippedSubviews:!0,children:[(0,_r(d[17]).jsx)(f.default,{
isLogin:S,enableAdvancedFeature:v.enableAdvancedFeature,titleOpacity:N,cartNum:E,messageNum:C,configInfo:L,avaImg:_,userName:A,userAccount:D,userLevel:R,groupStyleChanges:B,headStyle:w,pageId:O,lang:c,ref:v.refSon,vproList:F,isVpro:T,personalStyleChange:k,userId:v.userId,statusBarHeight:p
}
),v.showMarginTop(x),v.showDynamicComponent(H),v.handleDisplayScenePurchaseNavBottom()]
}
),v.showFixedButton(e,H),(0,_r(d[17]).jsx)(_r(d[19]).FixedButton,Object.assign({

}
,(0,_r(d[19]).jsonConvert)(H,_r(d[15]).PAGE_TYPE.personal),{
fixedButton:!0,onBackTop:v.onBackTop,pageType:_r(d[15]).PAGE_TYPE.personal,pageId:O,pageCatCode:v.pageCatCode,pageCatName:v.pageCatName,needInnerStyle:!0,bottomNavHeight:_r(d[15]).PlatformUtils.isHarmony()?v.getBackTopOffsetHeightHarmony(Y):v.getBackTopOffsetHeight(Y)
}
)),(0,_r(d[17]).jsx)(_r(d[19]).Toast,{
pageType:_r(d[15]).PAGE_TYPE.personal
}
)]
}
),v.renderBirthDayGift(),v.showScenePurchaseNavBottom(),v.renderLoginComponent(Y),v.renderNotifyComponent()]
}
)
}
,v.state={
scrollY:new u.Animated.Value(0),pageId:v.props.pageId,reportPageId:null!=(o=v.props.mineData)&&null!=(r=o.pageInfos)&&r.length?null==(p=v.props.mineData)||null==(h=p.pageInfos[0])?void 0:h.pageId:v.props.pageId,cmsData:{
pageInfos:[]
}
,loading:!0,isRefreshing:!1,error:!1,configInfo:'',cartNum:v.props.firstCart||0,messageNum:v.props.firstMessage||0,titleOpacity:new u.Animated.Value(0),errorType:_r(d[15]).ERROR_TYPE.OTHER_ERROR,isJsLogin:v.props.isLogin,avaImg:v.props.avaImg||'',userName:v.props.userName||'',userLevel:v.props.userLevel||0,userAccount:v.props.userAccount,templateContent:'',dialogType:'',productTitleAndMore:null,isVpro:!0===v.props.isVpro||'true'===v.props.isVpro?'1':'0',isShowMember:!1,getVproLogoFinish:!1,withNoLoginUser:0,tid:'',recommendFlag:!1,isShow:!0,isShowNotifyDialog:!1,sysNoticeShow:0,sysNoticeBtnTxt:'',sysNoticeTxt:'',system:'',logistics:'',service:'',activity:'',shortMessage:''
}
,v.rnBundleLoadEnd(),v.getSwitchConfig(),v.lastGiftPopupTime=v.props.lastPopupTime||null,v.lastCalendarPopupTime=v.props.lastCalendarPopupTime||null,v.otherParams.isLogin=e.isLogin,v.otherParams.uniqueId=e.uniqueId,v.otherParams.pageListener=v.pageListener,v.otherParams.oaid=v.props.oaid||'',v.props.abTest){
// 变量
var L: any = JSON.parse(v.props.abTest);
L instanceof Array&&v.setAbData(L)
}
return v._onRefresh=v._onRefresh.bind(v),_r(d[15]).RecordUtils.logger(I,"constructor\n       enableAdvancedFeature="+v.props.enableAdvancedFeature+"\n       typeof="+typeof v.props.enableAdvancedFeature),v.getDeviceTid(),v
}
return(0,r.default)(y,e),(0,o.default)(y,[{
key:"getSwitchConfig",value:function(){
void 0===_r(d[15]).configStore.couponUseConfig&&_r(d[15]).CommonUtils.getConfigByKey('is_open_rn_coupon_use',!0).then((function(e){
'boolean'==typeof e&&_r(d[15]).configStore.setCouponUseEnable(e)
}
))
}

}
,{
key:"componentDidUpdate",value:function(e){
this.props.isLogin!==e.isLogin&&this.setState({
isJsLogin:this.props.isLogin
}
)
}

}
,{
key:"handleStrategy",value:function(){
// 变量
var e: any = 0===this.showBox?0:this.showBox||1;
(_r(d[15]).PlatformUtils.isAndroid()||_r(d[15]).PlatformUtils.isHarmony())&&1===e&&(_r(d[15]).RnBridge.invokeVmallNative('common','setCurrentPrdId',{
pageId:this.state.pageId,from:'personalpage'
}
),this.listerDialog=this.handleListerDialog())
}

}
,{
key:"handleListerDialog",value:function(){
// 变量
var e: any = this;
return u.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var n,o=(null==t||null==(n=t.param)?void 0:n.popStrategies)&&JSON.parse(t.param.popStrategies),a=null==o?void 0:o.activityCode,i=null==o?void 0:o.strategyContent,r=null==i?void 0:i.strategies;
'popStrategies'===(null==t?void 0:t.action)&&a&&!i&&e.popStrategyDialog(a),e.handlePopStrategies(t,a,i,r)
}
))
}

}
,{
key:"handlePopStrategies",value:function(e,t,n,o){
// 变量
var a: any = this;
if('popStrategies'===(null==e?void 0:e.action)&&t&&n&&null!=o&&o.length){
// 变量
var i: any = o[0].timeSeconds;
this.strategyTimer=setTimeout((function(){
a.popStrategyDialog(t)
}
),1e3*i)
}

}

}
,{
key:"popStrategyDialog",value:function(e){
_r(d[15]).RnBridge.invokeVmallNative('common','popStrategyDialog',{
popParams:{
activityCode:e,pageId:this.state.pageId,from:'personalpage'
}

}
)
}

}
,{
key:"componentDidMount",value:(C=(0,t.default)((function*(){
// 变量
var e: any = this;
_r(d[15]).DeviceUtils.setBarStyle('dark-content'),this.closeLoading(),this.getVproLogo(),this.getAppLoginAndGroupInfo();
// 变量
var t: any = this.props,n=t.mineData,o=t.isLogin,a=t.avaImg,i=t.userName,r=t.pageId,s=t.userAccount;
this.handlePreLoadData(),this.eventTracingReportByLoad(),this.handlePageInfo(),yield this.getLoginData(o,a,i,s),this._isLogin(),this.handleQmMode(),_r(d[15]).TimeUtils.updateSystemTime(),_r(d[15]).PlatformUtils.isApp()&&(_r(d[15]).RnBridge.invokeVmallNative('common','getCartAndMessageNmb',{

}
).then((function(t){
// 变量
var n: any = t.firstMessage&&JSON.parse(t.firstMessage);
e.setState({
messageNum:n||0
}
)
}
)),this.appStateListener=_r(d[15]).PlatformUtils.isIOS()&&u.AppState.addEventListener('change',this.handleAppStateChange),this.eventListener=u.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
e.handleCarNum(t),e.handleMessageNum(t),e.handleNotifiactionStatus(t),e.handleReport(n,r,t),e.personNetworkRefresh(t,o,a,i,s),e.personPageLeave(t)
}
))),this.setStatusBarStyle(),this.dialogEventLisenter=u.DeviceEventEmitter.addListener('getBenefitSucc',(function(){
var t;
null==(t=e.sonRef)||t.getAssterInfo()
}
)),this.getNotifyInfo()
}
)),function(){
return C.apply(this,arguments)
}
)
}
,{
key:"handleMessageNum",value:function(e){
var t,n;
'message'===(null==e?void 0:e.service)&&'messageNum'===(null==e?void 0:e.action)&&(null!=e&&null!=(t=e.param)&&t.num&&this.setState({
messageNum:(null==e||null==(n=e.param)?void 0:n.num)||0
}
))
}

}
,{
key:"handleCarNum",value:function(e){
var t,n;
'car'===(null==e?void 0:e.service)&&'carNum'===(null==e?void 0:e.action)&&(null!=e&&null!=(t=e.param)&&t.num&&this.setState({
cartNum:(null==e||null==(n=e.param)?void 0:n.num)||0
}
))
}

}
,{
key:"handlePreLoadData",value:function(){
var e;
null!=(e=this.props.mineData)&&e.pageInfos&&(_r(d[15]).RecordUtils.logger(I,'componentDidMount \u9884\u52a0\u8f7d'),this.handleData(this.props.mineData))
}

}
,{
key:"getAppLoginAndGroupInfo",value:function(){
_r(d[15]).LoginUtils.getAppLoginAndGroupInfo().then((function(e){
e&&_r(d[15]).groupTagsStore.setgroupTags(JSON.parse(JSON.stringify(e)))
}
))
}

}
,{
key:"handleQmMode",value:function(){
_r(d[15]).DarkStore.QMbool&&_r(d[15]).DeviceUtils.setTombStyle().then((function(){

}
)).catch()
}

}
,{
key:"getLoginData",value:(N=(0,t.default)((function*(e,t,n,o){
// 变量
var a: any = this;
e&&(this.getRecommendFlag(e),yield _r(d[15]).DeviceUtils.getDeviceInfo(_r(d[15]).APP_INFOS.DEVICE_INFO).then((function(e){
a.userId=null==e?void 0:e.uid
}
)).finally((function(){

}
)),this._queryUserInfo(t,n,o),this.getSysConfig())
}
)),function(e,t,n,o){
return N.apply(this,arguments)
}
)
}
,{
key:"handlePageInfo",value:function(){
var e;
null!=(e=this.props.mineData)&&e.pageInfos?this.handleStrategy():this._getPageInfo()
}

}
,{
key:"handleReport",value:function(e,t,n){
var o,a,i,r,s=this,l=null!=e&&null!=(o=e.pageInfos)&&o.length?null==e||null==(a=e.pageInfos[0])?void 0:a.pageId:t;
4===Number(null==n||null==(i=n.param)?void 0:i.currentIndex)&&n.param.isCurrentIndex?(this.isLeave=!0,_r(d[15]).RecordUtils.logger(I,'isPageShow personal come in'),this.pageListener.triggerEvent('pageShow',{
isPageShow:!0
}
),this.getNotifyInfo(),E((function(){
s.reportLoadPersonPage(l)
}
),1e3)):4!==Number(null==n||null==(r=n.param)?void 0:r.currentIndex)||!1!==n.param.isCurrentIndex&&'false'!==n.param.isCurrentIndex||!this.isLeave||(this.pageListener.triggerEvent('pageShow',{
isPageShow:!1
}
),_r(d[15]).RecordUtils.logger(I,'isPageShow personal come out'),this.isLeave=!1,this.reportLeavePersonPage(l))
}

}
,{
key:"reportLeavePersonPage",value:function(e){
_r(d[15]).EventTracking.eventTracingReport({
actionCode:'110000011',actionName:'\u79bb\u5f00\u4e2a\u4eba\u4e2d\u5fc3\u9875\u9762\u4e0a\u62a5',eventType:_r(d[15]).EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:String(e),content:{

}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
)
}

}
,{
key:"reportLoadPersonPage",value:function(e){
_r(d[15]).EventTracking.eventTracingReport({
actionCode:'110000000',actionName:'\u52a0\u8f7d\u4e2a\u4eba\u4e2d\u5fc3\u7ec4\u4ef6\u5316\u9875\u9762',eventType:_r(d[15]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:String(e),content:{
load:'1'
}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
)
}

}
,{
key:"personNetworkRefresh",value:function(e,t,n,o,a){
'netWork'===(null==e?void 0:e.service)&&'refresh'===(null==e?void 0:e.action)&&this.state.error&&(t?this._queryUserInfo(n,o,a):_r(d[15]).RnBridge.invokeVmallNative('common','invokingAutoLogin',{

}
),this.handleAbInfo(e),this.errorRefresh())
}

}
,{
key:"handleAbInfo",value:function(e){
var t,n=this;
if(null!==(null==e||null==(t=e.param)?void 0:t.abInfo)){
for(var o=JSON.parse(e.param.abInfo),a=o.tabInfos,i=0;
i<(null==a?void 0:a.length);
i++)'personal_center'===a[i].tabType&&this.setState({
pageId:a[i].relatedPage,pageAlias:''
}
,(function(){
return n.errorRefresh()
}
));
o.strategyInfoList instanceof Array&&this.setAbData(o.strategyInfoList),this.enableAdvancedFeature=1
}

}

}
,{
key:"personPageLeave",value:function(e){
var t;
'page'===(null==e?void 0:e.service)&&'pageLeave'===(null==e?void 0:e.action)&&this.props.uniqueId===(null==e||null==(t=e.param)?void 0:t.uniqueId)&&(_r(d[15]).PlatformUtils.isAndroid()||_r(d[15]).PlatformUtils.isHarmony())&&(e.param.isLeave?(this.getNotifyInfo(),_r(d[15]).PlatformUtils.isAndroid()&&this.setStatusBarStyle(),this.handleStrategy(),_r(d[15]).CommonUtils.storeE2eId(_r(d[15]).PAGE_TYPE_E2EID.personal,!1,_r(d[15]).E2EIdStore.residentPageE2EId[_r(d[15]).PAGE_TYPE_E2EID.personal])):(_r(d[15]).CommonUtils.storeE2eId(_r(d[15]).PAGE_TYPE_E2EID.personal,!1),this.strategyTimer&&clearTimeout(this.strategyTimer),this.listerDialog&&this.listerDialog.remove()))
}

}
,{
key:"handleNotifiactionStatus",value:function(e){
if('notification'===(null==e?void 0:e.service)&&'notificationStatus'===e.action){
if(_r(d[15]).PlatformUtils.isHarmony())return void this.getNotifyInfo();
this.state.isShow&&this.setState({
isShow:!1
}
)
}

}

}
,{
key:"UNSAFE_componentWillMount",value:function(){
this.animatedEvent=u.Animated.event([{
nativeEvent:{
contentOffset:{
y:this.state.scrollY
}

}

}
]);
this.state.scrollY
}

}
,{
key:"componentWillUnmount",value:function(){
var e,t;
this.eventListener&&this.eventListener.remove(),this.timer1&&clearTimeout(this.timer1),this.eventListenerLogin&&this.eventListenerLogin.remove(),this.appStateListener&&this.appStateListener.remove(),null==(e=this.calendarAuthLinstener)||e.remove(),this.state.scrollY&&this.state.scrollY.removeAllListeners(),_r(d[15]).PlatformUtils.isIOS()&&this.refreshTimer&&clearTimeout(this.refreshTimer),this.timer&&clearTimeout(this.timer),(_r(d[15]).PlatformUtils.isAndroid()||_r(d[15]).PlatformUtils.isHarmony())&&(this.strategyTimer&&clearTimeout(this.strategyTimer),this.listerDialog&&this.listerDialog.remove()),null==(t=this.dialogEventLisenter)||t.remove(),this.getRecommendFlagTimer&&clearTimeout(this.getRecommendFlagTimer)
}

}
,{
key:"_onRefresh",value:function(){
// 变量
var e: any = this,t=this.state,n=t.avaImg,o=t.userName,a=t.userAccount;
if(_r(d[15]).PlatformUtils.isIOS()&&_r(d[15]).LoginUtils.getLoginStatus().then((function(t){
e.setState({
isJsLogin:t
}
),t&&(e.sonRef&&(e.sonRef.getAssterInfo(),e.sonRef.getAssterInfoOrder(),e.sonRef.getScheduleInfoOrder()),e._queryUserInfo(n,o,a))
}
)),!_r(d[15]).PlatformUtils.isIOS()&&this.state.isJsLogin&&(this.sonRef&&(this.sonRef.getAssterInfo(),this.sonRef.getAssterInfoOrder(),this.sonRef.getScheduleInfoOrder()),this._queryUserInfo()),this.getRecommendFlag(this.state.isJsLogin),this.state.isRefreshing)return Promise.resolve();
_r(d[15]).PlatformUtils.isIOS()?(this.setState({
isRefreshing:!0
}
),u.DeviceEventEmitter.emit('onRefresh',_r(d[15]).PAGE_TYPE.personal),this.refreshTimer&&clearTimeout(this.refreshTimer),this.refreshTimer=setTimeout((function(){
e.setState({
isRefreshing:!1
}
)
}
),1e3)):this.scrollViewKey=this.scrollViewKey+1,u.DeviceEventEmitter.emit('homeRefresh',_r(d[15]).PAGE_TYPE.personal),_r(d[15]).TimeUtils.updateSystemTime(),this._getAndroidPageInfo(!0),this.getNotifyInfo()
}

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
key:"updateReportPageId",value:function(e,t){
var n,o,a=this;
this.setState({
reportPageId:(null==e||null==(n=e.pageInfos)?void 0:n.length)&&(null==(o=e.pageInfos[0])?void 0:o.pageId)
}
,(function(){
a.eventTracingReportByLoad(t)
}
))
}

}
,{
key:"getAndroidPageInfoCatch",value:function(e,t){
var n;
!e&&null!=t&&null!=(n=t.message)&&n.includes('Network Error')?(_r(d[15]).RecordUtils.logger(I,'_getAndroidPageInfo ERROR_TYPE.NETWORK_ERROR'),this.setState({
errorType:_r(d[15]).ERROR_TYPE.NETWORK_ERROR,error:!0
}
)):(_r(d[15]).RecordUtils.logger(I,'_getAndroidPageInfo fail '+(null==t?void 0:t.stack)),this.reportHmiException(null==t?void 0:t.message))
}

}
,{
key:"handleUserInfo",value:function(e,t,n,o){
var a,i,r,s,l;
(this.otherParams.userInfo=null==e?void 0:e.userInfo,null!=e&&null!=(a=e.userInfo)&&a.groupId)?(_r(d[15]).StorageUtil.setSpValueAll('isGroupUser','true','String'),_r(d[15]).StorageUtil.setSpValueAll('groupflag','true','String'),_r(d[15]).StorageUtil.setSpValueAll('user_group_id',null==e||null==(i=e.userInfo)||null==(r=i.groupId)?void 0:r.toString(),'String'),_r(d[15]).StorageUtil.setSpValueAll('user_group_name',null==e||null==(s=e.userInfo)||null==(l=s.groupName)?void 0:l.toString(),'String'),this.isGroupFlag=!0):(_r(d[15]).StorageUtil.setSpValueAll('isGroupUser','false','String'),_r(d[15]).StorageUtil.setSpValueAll('groupflag','','String'),(_r(d[15]).PlatformUtils.isAndroid()||_r(d[15]).PlatformUtils.isHarmony())&&_r(d[15]).StorageUtil.setSpValueAll('user_group_id','','String'),this.isGroupFlag=!1);
this.updateUserInfo(e,t,n,o)
}

}
,{
key:"updateUserInfo",value:function(e,t,n,o){
var a,i,r,s;
this.isRefresh(e)&&this.setState({
userLevel:null==e||null==(a=e.userInfo)?void 0:a.custGrad,avaImg:null!=t?t:null==e||null==(i=e.userInfo)?void 0:i.custHeaderImg,userName:null!=n?n:null==e||null==(r=e.userInfo)?void 0:r.nickName,userAccount:null!=o?o:null==e||null==(s=e.userInfo)?void 0:s.userAccount
}
)
}

}
,{
key:"isRefresh",value:function(e){
var t,n,o,a;
return this.state.avaImg!==(null==e||null==(t=e.userInfo)?void 0:t.custHeaderImg)||this.state.userName!==(null==e||null==(n=e.userInfo)?void 0:n.nickName)||this.state.userLevel!==(null==e||null==(o=e.userInfo)?void 0:o.custGrad)||this.state.userAccount!==(null==e||null==(a=e.userInfo)?void 0:a.userAccount)
}

}
,{
key:"reportHmiException",value:function(e){
_r(d[15]).CommonUtils.isEmpty(e)||_r(d[15]).DeviceUtils.hmiLogForEventSpan({
eventType:'page_error_load_data_fail',extraInfo:{
error:e,info:JSON.stringify('\u4e2a\u4eba\u4e2d\u5fc3\u52a0\u8f7d\u5f02\u5e38\uff0c\u6570\u636e\u52a0\u8f7d\u5931\u8d25, \u9875\u9762id: '+this.state.pageId)
}

}
)
}

}
,{
key:"reportHmiEnd",value:function(){
if(_r(d[15]).PlatformUtils.isAndroid()){
var e,t,n=this.props,o=n.e2eId,a=n.parentSpanId,i=n.mineData,r=this.state.cmsData,s=(null==r||null==(e=r.pageInfos)?void 0:e.length)&&(null==(t=r.pageInfos[0])?void 0:t.pageName);
null!=i&&i.pageInfos||_r(d[15]).DeviceUtils.hmiLog({
e2eId:o,parentSpanId:a,stage:'end',name:'finalScreen',spanId:this.hmiSpanIdFinalScreen
}
),_r(d[15]).DeviceUtils.hmiLog({
e2eId:o,parentSpanId:a,stage:'end',name:'entry',reportNow:'true',spanId:a,content:{
category:'RN\u6211\u7684\u9875',instanceId:this.state.pageId,instanceName:s
}

}
)
}

}

}
,{
key:"_getPageInfo",value:function(e){
// 变量
var n: any = this;
return this._getAndroidPageInfo().catch((function(e){
var t;
null!=e&&null!=(t=e.message)&&t.includes('Network Error')?(_r(d[15]).RecordUtils.logger(I,'_getPageInfo ERROR_TYPE.NETWORK_ERROR'),n.setState({
errorType:_r(d[15]).ERROR_TYPE.NETWORK_ERROR
}
)):(_r(d[15]).RecordUtils.logger(I,'_getPageInfo ERROR_TYPE.OTHER_ERROR '+(null==e?void 0:e.stack)),n.setState({
errorType:_r(d[15]).ERROR_TYPE.OTHER_ERROR
}
),n.reportHmiException(null==e?void 0:e.message)),n.isPersonal=!1,n.setState({
error:!0
}
)
}
)).finally((0,t.default)((function*(){
if(_r(d[15]).PlatformUtils.isAndroid()){
// 变量
var e: any = n.props,t=e.parentSpanId,o=e.e2eId;
_r(d[15]).DeviceUtils.hmiLog({
e2eId:o,parentSpanId:t,stage:'end',name:'firstScreen',spanId:n.hmiSpanIdFirstScreen
}
),n.hmiSpanIdFinalScreen=yield _r(d[15]).DeviceUtils.hmiLog({
e2eId:o,parentSpanId:t,stage:'begin',name:'finalScreen'
}
)
}
return n.setState({
loading:!1,isRefreshing:!1
}
),Promise.resolve()
}
)))
}

}
,{
key:"closeLoading",value:function(){
_r(d[15]).RnBridge.invokeVmallNative('page','loaded',{

}
)
}

}
,{
key:"handleUpgradeData",value:function(e){
var t,n=JSON.parse(JSON.stringify(e));
n=n.sort((t='level',function(e,n){
// 变量
var o: any = e[t];
return n[t]-o
}
));
for(var o=0,a=0;
a<n.length;
a++){
// 变量
var i: any = n[a];
if(1===Number(null==i?void 0:i.validate)&&0===Number(null==i?void 0:i.received)){
o++,this.giftPoint=(null==i?void 0:i.giftPoint)||0,this.getBirthTemplate('app_popup_upgrade_gift'),this.setLastBirthPopupTime((new Date).getTime());
break
}

}
0===o&&this.getBirthdayPrivileges()
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this;
return(0,_r(d[17]).jsx)(_r(d[15]).WithTheme,{
themeStyles:v.default,children:function(t,n){
var o,a,i,r=!e.state.isRefreshing&&e.state.loading?(0,_r(d[17]).jsx)(_r(d[19]).PlaceHolder,{
Fade:!0
}
):(e.state.pageId||0===e.enableAdvancedFeature)&&e.state.cmsData&&(null==(o=e.state.cmsData.pageInfos)?void 0:o.length)&&!e.state.error&&e.renderPage(t,n)||(0,_r(d[17]).jsx)(_r(d[19]).CommonErrorPage,{
errorType:e.state.errorType,source:"home",homePageUrl:"vmall://com.vmall.client/home/main?tabIndex=0&from=rn",pageType:"refreshPage",errorRefresh:e.errorRefresh
}
);
return e.props.mineData&&null!=(a=e.state.cmsData)&&null!=(i=a.pageInfos)&&i.length?e.renderPage(t,n):r
}

}
)
}

}
,{
key:"getIsShowLogin",value:function(e){
var t=((null==e?void 0:e.loginInfo)||{

}
).isSoupportLoginComp;
return!_r(d[15]).AppStore.isLogin&&t
}

}
,{
key:"tabFragment",value:function(e,t){
'tabCurrent'===(null==e?void 0:e.action)&&'tabFragment'===(null==e?void 0:e.service)&&this.handleTabFragment(t,e)
}

}
,{
key:"handleTabFragment",value:function(e,t){
null!=e&&e.userVisibleHint&&this.state.isJsLogin?this._tabChange():this.state.isJsLogin?this.isJsLogin(t):4===Number(null==e?void 0:e.currentIndex)&&!e.isCurrentIndex&&this.isPersonal&&(this.flag=!0,this.isPersonal=!1,clearTimeout(this.dialogTimer))
}

}
,{
key:"isJsLogin",value:function(e){
var t;
4!==Number(null==e||null==(t=e.param)?void 0:t.currentIndex)||!0!==e.param.isCurrentIndex&&'true'!==e.param.isCurrentIndex||(this.sonRef&&(this.sonRef.getAssterInfo(),this.sonRef.getAssterInfoOrder(),this.sonRef.getScheduleInfoOrder()),this._queryUserInfo())
}

}
,{
key:"handleLogin",value:function(e,t){
// 变量
var n: any = this;
if('login'===(null==e?void 0:e.service)&&'loginOut'===(null==e?void 0:e.action)){
// 变量
var o: any = !(null==t||!t.isLogin);
if(_r(d[15]).AppStore.isLogin!==o&&_r(d[15]).AppStore.setIsLogin(o),_r(d[15]).RecordUtils.logger(I,"isJsLogin:"+o),this.state.isJsLogin===o)return;
this.setState({
isJsLogin:o
}
),t.isLogin?(this.getRecommendFlagTimer&&clearTimeout(this.getRecommendFlagTimer),this.getRecommendFlagTimer=setTimeout((function(){
n.getRecommendFlag(t.isLogin)
}
),500),this.setState({
avaImg:e.param.headPictureURL,userName:e.param.nickName
}
,(function(){
n._queryUserInfo(e.param.headPictureURL,e.param.nickName),n.sonRef&&(n.sonRef.getAssterInfo(),n.sonRef.getAssterInfoOrder(),n.sonRef.getScheduleInfoOrder())
}
)),this.isPersonal=!0,4===Number(null==t?void 0:t.tabindex)&&this.getSysConfig()):(this.setState({
avaImg:'',userName:'',isVpro:'',userLevel:'',userAccount:''
}
),this.isPersonal=!1,this.otherParams.userInfo=null,_r(d[15]).LoginStore.setIsLogin(!1),_r(d[15]).LoginStore.setUserName(''),_r(d[15]).LoginStore.setUserLevel(''),_r(d[15]).LoginStore.setExperience(0),_r(d[15]).LoginStore.setNextExperience(0),_r(d[15]).LoginStore.setAvaImg(''),this.setStatusBarStyle(),this.consumeYear='1')
}

}

}
,{
key:"renderBirthDayGift",value:function(){
return this.state.dialogType&&this.state.isJsLogin?(0,_r(d[17]).jsx)(p.default,{
type:this.state.dialogType,content:this.state.templateContent,point:this.giftPoint,env:_r(d[15]).Service,caculteDate:this.caculteDate.bind(this),changeDialog:this.changeDialog.bind(this)
}
):null
}

}
,{
key:"handleRenderApp",value:function(e){
var t,n,o;
if(this.props.transparentExtraInfo&&'string'==typeof this.props.transparentExtraInfo){
var a,i=JSON.parse(this.props.transparentExtraInfo);
this.recyclerListOneByTwo=_r(d[15]).PlatformUtils.isAndroid()&&!('0'===(null==i?void 0:i.is_open_recyclerlist))&&'TwoColumnLayout'===(null==(a=e[e.length-1])?void 0:a.layout.layoutType)
}
return e&&e.length>0&&'hybrid'===(null==(t=e[e.length-1])?void 0:t.cardType)||e&&e.length>0&&'prod'===(null==(n=e[e.length-1])?void 0:n.cardType)&&('StaggeredLayout'===(null==(o=e[e.length-1])?void 0:o.layout.layoutType)||this.recyclerListOneByTwo)
}

}
,{
key:"onScroll",value:function(){
// 变量
var e: any = this;
return u.Animated.event([{
nativeEvent:{
contentOffset:{
y:this.state.scrollY
}

}

}
],{
useNativeDriver:!1,listener:function(t){
e.eventOffsetY=t.nativeEvent.contentOffset.y,u.DeviceEventEmitter.emit('onOutScrollViewScroll',t.nativeEvent.contentOffset.y,_r(d[15]).PAGE_TYPE.personal),(_r(d[15]).PlatformUtils.isIOS()||_r(d[15]).PlatformUtils.isHarmony())&&(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){
if(_r(d[15]).PlatformUtils.isHarmony()){
var n={
nativeEvent:{
contentOffset:{
x:0,y:e.eventOffsetY
}

}

}
;
u.DeviceEventEmitter.emit('onScrollEvent',n,_r(d[15]).PAGE_TYPE.personal)
}
else u.DeviceEventEmitter.emit('iosForOnScrollEvent',t,_r(d[15]).PAGE_TYPE.personal)
}
),1e3))
}

}
)
}

}
,{
key:"handleDisplayScenePurchaseNavBottom",value:function(){
var e;
return this.isDisplayScenePurchaseNavBottom&&(0,_r(d[17]).jsx)(u.View,{
style:{
height:24+(null==(e=this.scenePurchaseNavBottomData)?void 0:e.bottomNavHeight)
}

}
)
}

}
,{
key:"handleScenePurchaseNavBottom",value:function(e){
var t,n;
null!=e&&null!=(t=e.scenePurchaseNavBottom)&&t.isDisplay&&(this.isDisplayScenePurchaseNavBottom=!0,this.scenePurchaseNavBottomData=null==e||null==(n=e.scenePurchaseNavBottom)?void 0:n.scenePurchaseNavBottomData)
}

}
,{
key:"getIsMember",value:function(e){
return'0'!==String(this.props.enableAdvancedFeature)&&this.state.isJsLogin&&'1'===this.state.isVpro&&'1'===String(e)
}

}
,{
key:"showScenePurchaseNavBottom",value:function(){
return this.isDisplayScenePurchaseNavBottom&&(0,_r(d[17]).jsx)(_r(d[19]).ScenePurchaseBottomNavLayout,{
scenePurchaseBottomNavData:this.scenePurchaseNavBottomData
}
)
}

}
,{
key:"showDynamicComponent",value:function(e){
return(0,l.createElement)(_r(d[15]).DynamicComponent,Object.assign({

}
,(0,_r(d[19]).jsonConvert)(e,_r(d[15]).PAGE_TYPE.personal,void 0,!1,this.otherParams),{
mapComponents:_r(d[20]).MapComponents,stickyScrollY:this.state.scrollY,key:this.scrollViewKey
}
))
}

}
,{
key:"showMarginTop",value:function(e){
return(0,_r(d[17]).jsx)(u.View,{
style:{
marginTop:e?12:0,alignItems:'center'
}

}
)
}

}
,{
key:"showFixedButton",value:function(e,t){
return(0,_r(d[17]).jsx)(u.View,{
pointerEvents:"box-none",style:e.boxNone,children:(0,_r(d[17]).jsx)(_r(d[19]).FixedButton,Object.assign({

}
,(0,_r(d[19]).jsonConvert)(t,_r(d[15]).PAGE_TYPE.personal),{
fixedButton:!1,pageType:_r(d[15]).PAGE_TYPE.personal,pageId:this.state.reportPageId,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName
}
))
}
)
}

}
,{
key:"renderPersonalTitle",value:function(e,t,n,o,a,i){
// 变量
var r: any = this.props,s=r.width,l=r.statusBarHeight;
return(0,_r(d[17]).jsx)(u.View,{
style:{
position:'absolute',top:-2,left:0,elevation:2,zIndex:1,width:s,opacity:this.navOpacityAnimated,height:_r(d[15]).PlatformUtils.isIOS()?56:56+l
}
,pointerEvents:0===Number(this.navOpacityAnimated)?'none':'auto',children:(0,_r(d[17]).jsx)(h.default,{
width:s,isMember:e,configInfo:this.state.configInfo,isLogin:this.state.isJsLogin,enableAdvancedFeature:this.enableAdvancedFeature,isShow:!0,avaImg:this.state.avaImg,userName:this.state.userName,userAccount:this.state.userAccount,userLevel:this.state.userLevel,cartNum:this.state.cartNum,messageNum:this.state.messageNum,headStyle:t,pageId:this.state.reportPageId,mergeStyle:_r(d[15]).CommonUtils.isEmpty(n)?null:_r(d[15]).CommonUtils.getChangeStyle(n,o,a),vproList:i,appPackageName:_r(d[15]).appIdStore.apkPackageName,statusBarHeight:l
}
)
}
)
}

}
]);
var N,C
}
)(l.default.Component))||e;
_e.default=C
}
),"66a6da45b129f65acb574f13e8c52fc4c8c000fa0497372d4d4de32ba350f08e",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","41eac7d29c93a7a813bcc9f085deea51c949d42d7248a58c176b3fe737d3ca90","f620398cef82fee8796c86669c0413fe597f6da25010228ab0ca509c23b81bbc","231132b596ffd93cfd7098964e3ea562110fe223fb8f2816a334bbf2125d1c42","921cf59c6d2eca8628ae06624a3ac72537b01b2d7dc1b1bccce185794d5e6533","6e6c315b5642d6fb75dffd98b0eca5177cf5f44bf49fd7eecc23af1f4bb19382","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","eb1eec51ea9b0b6fc1c065fa646cc7a3d9846eeeca9feb03f6ec21346b7958d7","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","9c9a9dacf4e38e28f532beb58b1a9bc65c14b22314b9b816c6be7377bf5aa042"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),i=_r(d[0])(_r(d[4])),o=_r(d[0])(_r(d[5])),a=_r(d[0])(_r(d[6])),r=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = s(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var r: any = o?Object.getOwnPropertyDescriptor(e,a):null;
r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[7])),l=_r(d[8]);
// 函数
function s(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,n=new WeakMap;
return(s=function(e){
return e?n:t
}
)(e)
}
// 函数
function u(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(u=function(){
return!!e
}
)()
}
var c=(function(r){
// 函数
function s(n: any): any {
var a,r,c,f;
return(0,t.default)(this,s),r=this,c=s,f=[n],c=(0,o.default)(c),(a=(0,i.default)(r,u()?Reflect.construct(c,f||[],(0,o.default)(r).constructor):c.apply(r,f))).originWidth=l.Dimensions.get('window').width,a.originHeight=l.Dimensions.get('window').height,a.gotoPageTimer=null,a.webviewRef=null,a.injectTimer=null,a.isPadHorizontal=function(){
// 变量
var e: any = _r(d[9]).ScreenMode.width;
return _r(d[9]).ScreenUtils.isPadHorizontal(e,a.originWidth)
}
,a.onMessage=(function(){
var t=(0,e.default)((function*(e){
// 变量
var t: any = a.props,n=t.type,i=t.env,o=JSON.parse(e.nativeEvent.data);
if('closeDialog'===o.type)a.setState({
modalVisible:!1
}
,(function(){
a.props.changeDialog()
}
));
else if(o.type='sureBtn')if('app_popup_birthday_privilege'===n){
// 变量
var r: any = i.wapDomain+"member/birthday/privileges";
a.setState({
modalVisible:!1
}
,(function(){
a.props.changeDialog()
}
)),a._gotoPage(r)
}
else{
// 变量
var l: any = i.wapDomain+"upgradeGift";
a.setState({
modalVisible:!1
}
,(function(){
a.props.changeDialog()
}
)),a._gotoPage(l)
}

}
));
return function(e){
return t.apply(this,arguments)
}

}
)(),a._gotoPage=function(e){
_r(d[9]).PlatformUtils.isIOS()?(a.gotoPageTimer&&clearTimeout(a.gotoPageTimer),a.gotoPageTimer=setTimeout((function(){
_r(d[9]).RouterUtils.gotoPage(e)
}
),800)):_r(d[9]).RouterUtils.gotoPage(e)
}
,a.handleLoad=function(){
clearTimeout(a.injectTimer),a.injectTimer=setTimeout((function(){
var e;
null==(e=a.webviewRef)||e.injectJavaScript("\n    var birthClose = document.getElementsByClassName('birth-close')[0];
\n    var pickupBtn = document.getElementsByClassName('birth-btn')[0];
\n    birthClose.addEventListener('click', function() {
\n      window.ReactNativeWebView.postMessage(JSON.stringify({
\n        type: 'closeDialog'\n      
}
))\n    
}
)\n    pickupBtn.addEventListener('click', function() {
\n      window.ReactNativeWebView.postMessage(JSON.stringify({
\n        type: 'sureBtn'\n      
}
))\n    
}
)\n    ")
}
),500)
}
,a.isPad=function(){
return'medium'===(0,_r(d[9]).screenSize)(_r(d[9]).ScreenMode.width)
}
,a.state={
modalVisible:!0
}
,a
}
return(0,a.default)(s,r),(0,n.default)(s,[{
key:"componentDidMount",value:function(){

}

}
,{
key:"componentWillUnmount",value:function(){
clearTimeout(this.injectTimer)
}

}
,{
key:"render",value:function(){
var e,t,n=this,i=this.props.content,o=null==i?void 0:i.replace(/%%/g,'%').replace(/%s/,this.props.point);
this.isPad()&&(o=this.isPadHorizontal()?null==(e=o)?void 0:e.replace(/100vw/g,'30vw'):null==(t=o)?void 0:t.replace(/100vw/g,'50vw'));
if(10!==_r(d[9]).CommonUtils.getScaleSize(10,2)){
var a,r=_r(d[9]).CommonUtils.getScaleSize(20,1.2)/20,s=_r(d[9]).CommonUtils.getScaleSize(14,1.1428571428571428)/14;
o=null==(a=o)?void 0:a.replace(/"birth-title"/g,"\"birth-title\" style=\"font-size: calc(20*"+r+" / 360 * var(--vw-base))\"").replace(/"birth-go"/g,"\"birth-go\" style=\"font-size: calc(14*"+s+" / 360 * var(--vw-base))\"")
}
return this.state.modalVisible&&o?(0,_r(d[10]).jsx)(l.Modal,{
transparent:!0,visible:this.state.modalVisible,presentationStyle:"overFullScreen",statusBarTranslucent:!0,children:(0,_r(d[10]).jsx)(_r(d[11]).WebView,{
style:{
backgroundColor:'transparent'
}
,ref:function(e){
n.webviewRef=e
}
,javaScriptEnabled:!0,decelerationRate:"normal",scalesPageToFit:!1,originWhitelist:['*'],source:{
html:o,baseUrl:''
}
,bounces:!1,scrollEnabled:!1,textZoom:100,contentInset:{
top:0,left:0
}
,onMessage:function(e){
return n.onMessage(e)
}
,onLoadEnd:function(){
return n.handleLoad()
}

}
)
}
):null
}

}
])
}
)(r.Component);
_e.default=c
}
),"f620398cef82fee8796c86669c0413fe597f6da25010228ab0ca509c23b81bbc",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","b0aaaebf88d367163e4d3e2493924198f70665bfcbd948f5e088a308b47765cb"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),r=_r(d[0])(_r(d[4])),i=_r(d[0])(_r(d[5])),o=_r(d[0])(_r(d[6])),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = v(t);
if(n&&n.has(e))return n.get(e);
var r={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var s: Function = i?Object.getOwnPropertyDescriptor(e,o):null;
s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]
}
return r.default=e,n&&n.set(e,r),r
}
)(_r(d[7])),a=_r(d[8]),u=_r(d[0])(_r(d[9])),l=_r(d[0])(_r(d[10])),p=_r(d[0])(_r(d[11])),c=_r(d[0])(_r(d[12])),h=_r(d[0])(_r(d[13])),f=_r(d[0])(_r(d[14]));
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
_r(d[15]).PlatformUtils.isIOS()&&_r(d[15]).DeviceUtils.getStatusBarHeight().then((function(e){
e
}
)).catch((function(){

}
));
_e.default=(function(s){
// 函数
function v(e: any): any {
var n,o,s,l;
return(0,t.default)(this,v),o=this,s=v,l=[e],s=(0,i.default)(s),(n=(0,r.default)(o,C()?Reflect.construct(s,l||[],(0,i.default)(o).constructor):s.apply(o,l))).getSize=function(){
// 变量
var e: any = _r(d[15]).CommonUtils.getWindowSize('personal').screenWidth;
return(0,_r(d[15]).screenSize)(n.pageWidth||e)
}
,n.getHeight=function(){
// 变量
var e: any = _r(d[15]).CommonUtils.getWindowSize('personal').screenHeight;
return(0,_r(d[15]).screenSize)(n.pageHeight||e)
}
,n.isPc=function(){
// 变量
var e: any = _r(d[15]).CommonUtils.getWindowSize('personal').screenWidth;
return _r(d[15]).PlatformUtils.isPc(e)
}
,n.isPad=function(){
return'medium'===n.getSize()
}
,n.isApp=function(){
return _r(d[15]).PlatformUtils.isApp()
}
,n.isAndroid=function(){
return _r(d[15]).PlatformUtils.isAndroid()
}
,n.isWeb=function(){
return _r(d[15]).PlatformUtils.isWeb()
}
,n.handleAssterResult=function(e){
// 变量
var t: any = e[0],r='0';
(null==t?void 0:t.pointBlance)>=0&&(r=t.pointBlance>99999?'99999+':t.pointBlance);
// 变量
var i: any = e[1],o='0';
(null==i?void 0:i.count)>=0&&(o=i.count>9999?'9999+':i.count);
// 变量
var s: Function = e[2],a='0.00';
(null==s?void 0:s.bankBalanceAmount)>=0&&s.recyclerBalanceAmount>=0&&(a=n.fixedNum(s.bankBalanceAmount+s.recyclerBalanceAmount));
// 变量
var u: any = n.state.dataPersonal;
n.setState({
dataPersonal:Object.assign({

}
,u,{
integralt:r,coupon:o,voucher:a
}
)
}
)
}
,n.getAssterInfo=function(){
// 变量
var e: any = _r(d[15]).HttpService.getUserIntegralt(_r(d[15]).CommonUtils.getPortal()),t=(0,_r(d[16]).getUserCoupon)(),r=(0,_r(d[16]).getUserVoucher)();
Promise.all([e,t,r]).then((function(e){
n.handleAssterResult(e)
}
))
}
,n.queryUserOrderCnt=function(){
// 变量
var e: any = _r(d[15]).HttpService.getCommomParam(),t=_r(d[15]).Service.openApiDomain+"mcp/queryUserOrderCnt?"+e+"&type=0&version=1";
return _r(d[15]).Http.get(t)
}
,n.queryLatestOrderLogList=function(){
var e=_r(d[15]).Service.openApiDomain+"mcp/order/queryLatestOrderLogList",t=_r(d[15]).CommonUtils.getPortal(),n={
portal:String(t),lang:_r(d[15]).MCP_LANG.CN,country:_r(d[15]).MCP_COUNTRY.CN
}
;
return _r(d[15]).Http.post(e,n)
}
,n.getNoCommentPrdCount=function(){
// 变量
var e: any = _r(d[15]).Service.openApiDomain+"rms/comment/getNoCommentPrdCount.json";
return _r(d[15]).Http.get(e)
}
,n.getUnCommentPrdCount=function(){
// 变量
var e: any = _r(d[15]).Service.openApiDomain+"rms/v1/comment/getUnCommentPrdCount";
return _r(d[15]).Http.post(e)
}
,n.handleGetNoCommentPrdCount=function(){
n.getNoCommentPrdCount().then((function(e){
n.setState({
count:e.data.count
}
)
}
)).catch((function(){

}
))
}
,n.handleGetUnCommentPrdCount=function(){
n.getUnCommentPrdCount().then((function(e){
n.setState({
count:e.data.count
}
)
}
)).catch((function(){

}
))
}
,n.getScheduleInfoOrder=function(){
n.queryLatestOrderLogList().then((function(e){
var t;
if(null!=(t=e.latestLogList)&&t.length){
// 变量
var r: any = e.latestLogList.length>10?e.latestLogList.slice(0,10):e.latestLogList;
n.setState({
latestOrderLogList:r
}
)
}
else n.setState({
latestOrderLogList:[]
}
)
}
)).catch((function(){
n.setState({
latestOrderLogList:[]
}
)
}
))
}
,n.getAssterInfoOrder=function(){
// 变量
var e: any = _r(d[15]).PlatformUtils.isWeb()&&'0'===sessionStorage.getItem('rn_new_comment_enable');
n.queryUserOrderCnt().then((function(e){
void 0===e.unpaidOrderCount?n.setState({
unpaidOrderCount:0
}
):n.setState({
unpaidOrderCount:e.unpaidOrderCount
}
),void 0===e.unreceiptOrderCount?n.setState({
unreceiptOrderCount:0
}
):n.setState({
unreceiptOrderCount:e.unreceiptOrderCount
}
),void 0===e.rmaAppCount?n.setState({
rmaAppCount:0
}
):n.setState({
rmaAppCount:e.rmaAppCount
}
)
}
)).catch((function(){

}
)),_r(d[15]).PlatformUtils.isAndroid()||_r(d[15]).PlatformUtils.isHarmony()?_r(d[15]).HttpService.querySystemConfig("['rn_new_comment_enable']").then((function(e){
var t;
e.systemConfigInfos&&'0'===(null==(t=e.systemConfigInfos.rn_new_comment_enable)?void 0:t.systemConfigValue)?n.handleGetNoCommentPrdCount():n.handleGetUnCommentPrdCount()
}
)):e?n.handleGetNoCommentPrdCount():n.handleGetUnCommentPrdCount()
}
,n.setmergeStyle=function(){
// 变量
var e: any = n.props,t=e.personalStyleChange,r=e.pageType,i=t,o=(0,_r(d[15]).screenSize)(n.pageWidth||n.state.width);
return _r(d[15]).CommonUtils.isEmpty(i)?'':_r(d[15]).CommonUtils.getChangeStyle(i,o,r)
}
,n.getScreen=function(){
return{
width:_r(d[15]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[15]).CommonUtils.getWindowSize('personal').screenHeight
}

}
,n.sourceResult=function(e,t){
if(n.isPc())return u.default.headeBgpc
}
,n.getMyOrder=function(e,t,r){
var i,o,s=n.state,u=s.unpaidOrderCount,l=s.unreceiptOrderCount,p=s.rmaAppCount,c=s.count,f=s.latestOrderLogList,v=e?r?20:12:0;
return(0,_r(d[17]).jsxs)(a.View,{
style:[n.isPc()?{
position:'relative',top:12,left:-24
}
:{
position:'relative',top:v,left:0,paddingLeft:'medium'===(0,_r(d[15]).screenSize)(t)?24:16,paddingRight:'medium'===(0,_r(d[15]).screenSize)(t)?24:16,alignItems:'center',marginTop:-2
}
,n.isApp()&&{
alignItems:'center',marginTop:'ios'===a.Platform.OS?8:0
}
,{
zIndex:0,width:'100%'
}
],children:[(0,_r(d[17]).jsx)(h.default,{
isLogin:n.props.isLogin,mpUid:null==(i=n.props)?void 0:i.mpUid,unpaidOrderCount:u,unreceiptOrderCount:l,rmaAppCount:p,count:c,pageId:null==(o=n.props)?void 0:o.pageId,width:t,pageCatName:n.props.pageCatName,latestOrderLogList:f
}
),(0,_r(d[17]).jsx)(a.View,{
style:{
marginTop:_r(d[15]).PlatformUtils.isWap(t)?0:v,alignItems:'center'
}

}
)]
}
)
}
,n.state={
width:_r(d[15]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[15]).CommonUtils.getWindowSize('personal').screenHeight,mergeStyle:null,dataPersonal:{
integralt:'',coupon:'',voucher:'',symbol:n.isPc()?'\u2014':'--'
}
,unpaidOrderCount:'',unreceiptOrderCount:'',rmaAppCount:'',count:'',isVpro:n.props.isVpro,latestOrderLogList:[]
}
,n
}
return(0,o.default)(v,s),(0,n.default)(v,[{
key:"componentDidMount",value:(y=(0,e.default)((function*(){
this.props.isLogin&&(this.getAssterInfo(),this.getAssterInfoOrder(),this.getScheduleInfoOrder())
}
)),function(){
return y.apply(this,arguments)
}
)
}
,{
key:"componentDidUpdate",value:function(e){
this.state.width!==_r(d[15]).CommonUtils.getWindowSize('personal').screenWidth&&this.setState({
width:_r(d[15]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[15]).CommonUtils.getWindowSize('personal').screenHeight
}
),e.isLogin===this.props.isLogin||this.props.isLogin||this.setState({
dataPersonal:{
integralt:'',coupon:'',voucher:'',symbol:this.isPc()?'\u2014':'--'
}
,unpaidOrderCount:'',unreceiptOrderCount:'',rmaAppCount:'',count:'',latestOrderLogList:[]
}
),e.isLogin!==this.props.isLogin&&this.props.isLogin&&(this.getAssterInfo(),this.getAssterInfoOrder(),this.getScheduleInfoOrder())
}

}
,{
key:"fixedNum",value:function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;
return 0===e?Number(e).toFixed(t):e>9999?'9999+':parseFloat(e).toFixed(t)
}

}
,{
key:"render",value:function(){
var e,t=this,n=this.props,r=n.lang,i=n.isVpro,o=n.vproList,s=this.state.dataPersonal,u=(null==o?void 0:o.configInfo)&&(null==(e=JSON.parse(o.configInfo))?void 0:e.display),c=this.setmergeStyle(),h=this.isApp()?u:null==o?void 0:o.display,v='1'===String(h)&&'0'!==String(this.props.enableAdvancedFeature)&&!this.isPc(),C=v&&'1'===String(i)&&this.props.isLogin;
return(0,_r(d[17]).jsx)(_r(d[15]).WithTheme,{
children:function(e,n,i,u){
var h;
t.pageWidth=i,t.pageHeight=u;
var y=null!=c&&null!=(h=c.imgStyle)&&h.backgroundColor?c.imgStyle:{

}
;
y=t.isPc()||C?null:y;
// 变量
var S: any = t.isPad()?24:16;
S=t.isPc()?100:S;
var P=_r(d[15]).ScreenUtils.isPadHorizontal(i,u),L=(i-32-16-16)/2,O=_r(d[15]).PlatformUtils.isWap(i);
return(0,_r(d[17]).jsxs)(_r(d[17]).Fragment,{
children:[(0,_r(d[17]).jsxs)(_r(d[18]).ImageBackground,{
resizeMode:"stretch",style:[{
position:'relative',zIndex:1
}
],imgUri:C?'':null==c?void 0:c.bgImg,imgViewStyle:[y],localSource:t.sourceResult(c,C),isFromPersonal:!0,children:[(0,_r(d[17]).jsxs)(a.View,{
style:[{
paddingHorizontal:S,zIndex:11
}
,t.isPc()&&{
height:200,paddingLeft:100,paddingRight:60,justifyContent:'center'
}
],children:[!(O||_r(d[15]).PlatformUtils.isHarmony())&&t.renderPersonalTitle(c,C,i),(0,_r(d[17]).jsxs)(a.View,{
style:[P&&{
disPlay:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,O&&{
marginTop:68
}
],children:[(0,_r(d[17]).jsx)(l.default,{
enableAdvancedFeature:t.props.enableAdvancedFeature,isLogin:t.props.isLogin,isMember:C,isDisplayVPro:v,avaImg:t.props.avaImg,userName:t.props.userName,userLevel:t.props.userLevel,userAccount:t.props.userAccount,mergeStyle:c,dataPersonal:s,pageId:t.props.pageId,headStyle:t.props.headStyle,width:i,boxWidth:L,isPadH:P,vproList:o
}
),!t.isPc()&&(0,_r(d[17]).jsx)(_r(d[17]).Fragment,{
children:(0,_r(d[17]).jsx)(a.View,{
style:{
marginTop:P?0:12
}
,children:(0,_r(d[17]).jsx)(p.default,{
pageId:t.props.pageId,lang:r,isLogin:t.props.isLogin,personalData:s,isMember:C,width:i,boxWidth:L,isPadH:P,mergeStyle:c,pageCatName:t.props.pageCatName
}
)
}
)
}
)]
}
)]
}
),v?(0,_r(d[17]).jsx)(a.View,{
style:{
position:'relative',top:P?16:12,paddingHorizontal:t.isPad()?24:16,borderRadius:16,overflow:'hidden'
}
,children:(0,_r(d[17]).jsx)(f.default,{
pageId:t.props.pageId,vproList:o,isMember:C
}
)
}
):(0,_r(d[17]).jsx)(_r(d[17]).Fragment,{
children:!t.isPc()&&t.getMyOrder(v,i,P)
}
)]
}
),(t.isPc()||v)&&t.getMyOrder(v,i,P)]
}
)
}

}
)
}

}
,{
key:"renderPersonalTitle",value:function(e,t,n){
// 变量
var r: any = this.props.vproList,i=this.state,o=i.dataPersonal,s=i.unpaidOrderCount,a=i.unreceiptOrderCount,u=i.rmaAppCount,l=i.count;
return this.isPc()?null:_r(d[15]).PlatformUtils.isWeb()?(0,_r(d[17]).jsx)(c.default,{
configInfo:this.props.configInfo,avaImg:this.props.avaImg,userName:this.props.userName,isLogin:this.props.isLogin,isShow:!1,pageId:this.props.pageId,titleOpacity:this.props.titleOpacity,cartNum:this.props.cartNum,messageNum:this.props.messageNum,headStyle:this.props.headStyle,mergeStyle:e,dataPersonal:o,unpaidOrderCount:s,unreceiptOrderCount:a,rmaAppCount:u,count:l,isMember:t,width:n,vproList:r
}
):(0,_r(d[17]).jsx)(c.default,{
configInfo:this.props.configInfo,enableAdvancedFeature:this.props.enableAdvancedFeature,isShow:!1,cartNum:this.props.cartNum,avaImg:this.props.avaImg,userName:this.props.userName,pageId:this.props.pageId,messageNum:this.props.messageNum,headStyle:this.props.headStyle,mergeStyle:e,isLogin:this.props.isLogin,isMember:t,width:n,vproList:r,statusBarHeight:this.props.statusBarHeight
}
)
}

}
]);
var y
}
)(s.Component)
}
),"231132b596ffd93cfd7098964e3ea562110fe223fb8f2816a334bbf2125d1c42",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","7bdebce51ebf6dfe6b554df2d22f75e33d563748c6aa39f0a4271d10e45cae95","ca6a1ce11f26ce5622d7e57bad362234b007b293fd52d98f75dc3cbd2a503174","921cf59c6d2eca8628ae06624a3ac72537b01b2d7dc1b1bccce185794d5e6533","c5620bceee068fccdedc246d918d6450decf9fca895cd8db9bc7f98b17e9c827","e5633068e8c590f1d5ff150881b978a635bf8d582715ede0237aae5c440fd1a6","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","cce5fdca77dd969e222fb33c21dc6a4e2c7572f870b521e674807c930998cf59","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),i=_r(d[0])(_r(d[3])),o=_r(d[0])(_r(d[4])),n=_r(d[0])(_r(d[5])),r=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = p(t);
if(i&&i.has(e))return i.get(e);
var o={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var s: Function = n?Object.getOwnPropertyDescriptor(e,r):null;
s&&(s.get||s.set)?Object.defineProperty(o,r,s):o[r]=e[r]
}
return o.default=e,i&&i.set(e,o),o
}
)(_r(d[6])),s=_r(d[7]),l=_r(d[0])(_r(d[8])),a=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11]));
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
var f='personal-user-info',v=(function(r){
// 函数
function c(t: any): any {
var n,r,a,u,p;
return(0,e.default)(this,c),a=this,u=c,p=[t],u=(0,o.default)(u),(r=(0,i.default)(a,h()?Reflect.construct(u,p||[],(0,o.default)(a).constructor):u.apply(a,p))).isApp=function(){
return('small'===r.getSize()||'medium'===r.getSize())&&!_r(d[12]).PlatformUtils.isWeb()
}
,r.getSize=function(){
return(0,_r(d[12]).screenSize)(r.props.width)
}
,r.isPc=function(){
// 变量
var e: any = _r(d[12]).CommonUtils.getWindowSize('personal').screenWidth;
return _r(d[12]).PlatformUtils.isPc(e)
}
,r.isPadPc=function(){
return'medium'===r.getSize()&&r.isPadHorizonta()&&r.props.width>=1024
}
,r.isPad=function(){
return'medium'===r.getSize()
}
,r.isPadHorizonta=function(){
return _r(d[12]).ScreenUtils.isPadHorizontal(_r(d[12]).CommonUtils.getWindowSize('personal').screenWidth,_r(d[12]).CommonUtils.getWindowSize('personal').screenHeight)
}
,r.isApkOrIos=function(){
return _r(d[12]).PlatformUtils.isApp()
}
,r.isApkOrHap=function(){
return _r(d[12]).PlatformUtils.isAndroid()||_r(d[12]).PlatformUtils.isHarmony()
}
,r.isIos=function(){
_r(d[12]).PlatformUtils.isIOS()
}
,r.userInfoClick=function(e){
var t,i=r.isApkOrHap()?'APP':'IOS',o=r.isApkOrIos()?110000101:210000101;
if(t=r.isApkOrIos()?"vmall://com.vmall.client/home/activity?pn=MemberPrivilege"+i+"&isShowLayout=false":r.isPc()?""+_r(d[12]).Service.upUserUrl:_r(d[12]).Service.wapDomain+"portal/activity/index.html?pn=MemberPrivilegeWAP&isShowLayout=false\n        ",r.props.isLogin){
if(r.props.clickItem(r.isPc()?310000101:o,t,null!=e&&e.includes('\u6635\u79f0')?2:1),_r(d[12]).EventTracking.execReportData('',!0),0===r.props.enableAdvancedFeature&&!_r(d[12]).PlatformUtils.isWeb())return;
_r(d[12]).RouterUtils.gotoPage(t)
}
else _r(d[12]).PlatformUtils.isWeb()?r.loginWeb(e):(t='vmall://com.vmall.client/home/login',r.props.clickItem(r.isPc()?310000101:o,t,null!=e&&e.includes('\u6635\u79f0')?2:1),_r(d[12]).EventTracking.execReportData('',!0),_r(d[12]).RouterUtils.gotoPage(t))
}
,r.myPrivilegeClick=function(){
var e,t=r.isApkOrHap()?'APP':'IOS';
e=r.isApkOrIos()?"vmall://com.vmall.client/home/activity?pn=MemberPrivilege"+t+"&isShowLayout=false":r.isPc()?_r(d[12]).Service.webDomain+"portal/activity/index.html?isShowLayout=false&pn=huiyuanPC":_r(d[12]).Service.wapDomain+"portal/activity/index.html?pn=MemberPrivilegeWAP&isShowLayout=false";
// 变量
var i: any = r.isApkOrIos()?110000101:210000101;
r.props.clickItem(r.isPc()?310000101:i,e,4),_r(d[12]).EventTracking.execReportData('',!0),r.props.isLogin?_r(d[12]).RouterUtils.gotoPage(e):_r(d[12]).PlatformUtils.isWeb()&&r.loginWeb(e)
}
,r.getAddressUrlPc=function(){
return 1===Number(sessionStorage.getItem(r.state.addressConfigKey))?_r(d[12]).Service.webDomain+"sc/address/index.html":_r(d[12]).Service.webDomain+"member/myAddress"
}
,r.myAddressClick=function(){
var e;
e=r.isApkOrIos()?'vmall://com.vmall.client/address/index':r.isPc()?r.getAddressUrlPc():_r(d[12]).Service.wapDomain+"address/manager";
// 变量
var t: any = r.isApkOrIos()?110000101:210000101;
r.props.clickItem(r.isPc()?310000101:t,e,5),_r(d[12]).EventTracking.execReportData('',!0),r.props.isLogin?_r(d[12]).RouterUtils.gotoPage(e):_r(d[12]).PlatformUtils.isWeb()&&r.loginWeb(e)
}
,r.signClick=function(){
var e,t=null==(e=r.props.headStyle)?void 0:e.topRightCornerLink,i=_r(d[12]).PlatformUtils.isApp()?'110000101':'210000101';
r.props.clickItem(r.isPc()?'310000101':i,t,6),_r(d[12]).EventTracking.execReportData('',!0),_r(d[12]).RouterUtils.gotoPage(t)
}
,r.onClose=function(){
r.setState({
showLoginWindow:!1
}
)
}
,r.renderMyMember=function(e,t,i){
var o,n,a=r.props,c=a.mergeStyle,u=a.width;
return(0,_r(d[13]).jsx)(_r(d[13]).Fragment,{
children:i?(0,_r(d[13]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,style:[e.tagText,r.getBgColorForUseLevel(c)],onPress:r.myPrivilegeClick,children:[(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
localSource:l.default.medal,imgStyle:{
width:14,height:17
}

}
),(0,_r(d[13]).jsx)(s.View,{
style:e.txtBg,children:(0,_r(d[13]).jsxs)(s.Text,{
style:[e.tagTxt,r.getMergeStyle(c)],children:["V",null==(o=r.props)?void 0:o.userLevel,(0,_r(d[12]).t)('grade')]
}
)
}
)]
}
):(0,_r(d[13]).jsx)(s.TouchableOpacity,{
activeOpacity:1,style:[r.isPc()?e.tagTextPc:e.tagText,r.getBgColorForUseLevel(c)],onPress:r.myPrivilegeClick,children:(0,_r(d[13]).jsxs)(s.Text,{
style:e.scaleWeb,children:[(0,_r(d[13]).jsxs)(s.Text,{
style:[{
marginRight:2
}
,r.getMergeStyle(c)],children:["V",null==(n=r.props)?void 0:n.userLevel,(0,_r(d[12]).t)('grade')]
}
),_r(d[12]).PlatformUtils.isWap(u)?null:(0,_r(d[13]).jsx)(_r(d[14]).SvgIcon,{
viewBox:'-400 0 1024 1024',normalCol:r.getNormalCol(t,c),opacity:.6,iconName:'ic24-more',width:8,height:16
}
)]
}
)
}
)
}
)
}
,r.notLogin=function(e,t){
var i,o=null!=t&&null!=(i=t.textStyle)&&i.color&&!r.props.isMember?null==t?void 0:t.textStyle:null,n=_r(d[12]).PlatformUtils.isHarmony()?(0,_r(d[12]).t)('harmonyLogin'):(0,_r(d[12]).t)('login')+"/"+(0,_r(d[12]).t)('register');
return(0,_r(d[13]).jsxs)(_r(d[13]).Fragment,{
children:[(0,_r(d[13]).jsx)(s.TouchableOpacity,{
style:e.noLogin,activeOpacity:1,onPress:function(){
r.userInfoClick((0,_r(d[12]).t)('click_nickname_to_grade_page'))
}
,children:(0,_r(d[13]).jsx)(s.Text,{
style:[e.userName,r.isPc()?null:o],children:n
}
)
}
),r.state.showTopRightCorner&&r.isPc()&&r.renderSignIn(e)]
}
)
}
,r.accountName=function(e,t,i){
var o,n=r.isPc();
return(0,_r(d[13]).jsx)(s.View,{
style:n?e.accountContentPc:e.accountContent,children:(0,_r(d[13]).jsx)(s.Text,{
numberOfLines:1,ellipsizeMode:'tail',textBreakStrategy:'simple',style:[n?e.userAccountPc:e.userAccount,null!=i&&null!=(o=i.textStyle)&&o.color&&!r.props.isMember?null==i?void 0:i.textStyle:null],children:""+(0,_r(d[12]).t)('AccountName')+t
}
)
}
)
}
,r.userHeadImg=function(e,t,i,o,n){
var a,c=i?-2:0,u=_r(d[12]).PlatformUtils.isHarmony()?l.default.harmonyloginAvatar:l.default.icAvatar,p=_r(d[12]).PlatformUtils.isHarmony()?l.default.harmonyUnloginAvatar:l.default.icAvatar,h=r.props.isLogin?u:p;
return(0,_r(d[13]).jsx)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
r.userInfoClick((0,_r(d[12]).t)('click_head_to_grade_page'))
}
,style:e.userImg,children:r.props.isMember&&!r.isPc()?(0,_r(d[13]).jsxs)(s.View,{
style:e.cricle,children:[(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
localSource:l.default.vAvater,imgStyle:e.showRadius
}
),(0,_r(d[13]).jsxs)(s.View,{
style:e.showAvatar,children:[t?(0,_r(d[13]).jsx)(s.Text,{
style:e.showText,children:_.truncate(null==o?void 0:o.avatar,{
length:2,omission:''
}
)
}
):null,i?(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
imgUri:n,imgStyle:e.showIcon,isUser:!1
}
):null,(0,_r(d[13]).jsx)(s.Text,{
style:[e.showText,!r.isApkOrIos()&&{
marginLeft:t?-5:c
}
],children:(0,_r(d[12]).t)('members')
}
)]
}
),(0,_r(d[13]).jsx)(s.View,{
style:{
width:48,height:48
}
,children:(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
imgUri:r.props.avaImg,localSource:null!=(a=r.props)&&a.avaImg?null:h,imgStyle:e.avaImg,isUser:!0,onError:function(){
r.onLoadResult(!1)
}
,onLoadSuccess:function(){
r.onLoadResult(!0)
}

}
)
}
)]
}
):(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
imgUri:r.props.avaImg,localSource:r.props.isLogin&&r.props.avaImg?null:p,imgStyle:e.userAva,isUser:!0,onError:function(){
r.onLoadResult(!1)
}
,onLoadSuccess:function(){
r.onLoadResult(!0)
}

}
)
}
)
}
,r.onLoadResult=function(e){
// 变量
var t: any = "\u7528\u6237\u5934\u50cf\u52a0\u8f7d\u6210\u529f: "+e+"\u3002\u767b\u5f55\u72b6\u6001: "+r.props.isLogin+", \u5934\u50cf\u5730\u5740\u4e3a\u7a7a: "+_r(d[12]).CommonUtils.isEmpty(r.props.avaImg);
_r(d[12]).RecordUtils.logger(f,t)
}
,r.userContent=function(e,t,i,o,n,l){
// 变量
var a: any = r.isPc();
return(0,_r(d[13]).jsx)(s.View,{
style:[e.userInfoWrap],children:r.props.isLogin?(0,_r(d[13]).jsxs)(_r(d[13]).Fragment,{
children:[(0,_r(d[13]).jsx)(s.TouchableOpacity,{
style:e.userInfo,activeOpacity:1,onPress:function(){
r.userInfoClick((0,_r(d[12]).t)('click_nickname_to_grade_page'))
}
,children:(0,_r(d[13]).jsx)(s.Text,{
numberOfLines:1,style:[e.userName,r.getMergeStyle(t),{
maxWidth:a?'82%':'100%'
}
],children:r.props.userName
}
)
}
),(l||a)&&i?r.accountName(e,i,t):null,(0,_r(d[13]).jsx)(s.View,{
style:a?e.tagListContainerPc:e.tagListContainer,children:(0,_r(d[13]).jsxs)(s.View,{
style:e.tagList,children:[r.props.isMember?null:r.renderMyMember(e,n,l),!l&&r.renderAddress(e,o,t,n)]
}
)
}
),r.state.showTopRightCorner&&a&&r.renderSignIn(e)]
}
):r.notLogin(e,t)
}
)
}
,r.renderSignIn=function(e){
var t;
return(0,_r(d[13]).jsx)(s.TouchableOpacity,{
activeOpacity:1,onPress:r.signClick,children:(0,_r(d[13]).jsx)(_r(d[14]).FastImageView,{
imgUri:""+_r(d[12]).Service.cmsCdnPath+(null==(t=r.props.headStyle)?void 0:t.topRightCornerIcon),imgStyle:e.signIcon,onError:function(){
return r.setState({
showTopRightCorner:!1
}
)
}

}
)
}
)
}
,r.state={
showLoginWindow:!1,showTopRightCorner:'1'===(null==(n=r.props.headStyle)?void 0:n.topRightCornerShow),addressConfigKey:'rn_web_ftl_address_rn'
}
,r
}
return(0,n.default)(c,r),(0,t.default)(c,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this.state.addressConfigKey;
this.isPc()&&!sessionStorage.getItem(e)&&_r(d[12]).HttpService.querySystemConfig(e).then((function(t){
var i,o=((null==(i=t.systemConfigInfos)?void 0:i[e])||0).systemConfigValue;
sessionStorage.setItem(e,o)
}
))
}

}
,{
key:"componentDidUpdate",value:function(){

}

}
,{
key:"componentWillUnmount",value:function(){

}

}
,{
key:"loginWeb",value:function(e){
// 变量
var t: any = encodeURIComponent(window.location.href),i=this.isPc()?_r(d[12]).Service.webDomain+"account/login?url="+t:_r(d[12]).Service.wapDomain+"account/applogin?url="+t;
this.props.clickItem(this.isPc()?310000101:210000101,i,null!=e&&e.includes('\u6635\u79f0')?2:1),_r(d[12]).EventTracking.execReportData('',!0),_r(d[12]).RouterUtils.gotoPage(i,!1)
}

}
,{
key:"renderAddress",value:function(e,t,i,o){
return(0,_r(d[13]).jsx)(s.TouchableOpacity,{
activeOpacity:1,style:[this.isPc()?e.tagTextPc:e.tagText,this.getBgColorForUseLevel(i)],onPress:this.myAddressClick,children:(0,_r(d[13]).jsxs)(s.Text,{
style:e.scaleWeb,children:[(0,_r(d[13]).jsx)(s.Text,{
style:[{
marginRight:2
}
,this.getMergeStyle(i)],children:(0,_r(d[12]).t)('address')
}
),_r(d[12]).PlatformUtils.isWap(s.Dimensions.get('window').width)?null:(0,_r(d[13]).jsx)(_r(d[14]).SvgIcon,{
viewBox:'-400 0 1024 1024',normalCol:this.getNormalCol(o,i),opacity:.6,iconName:'ic24-more',width:8,height:16
}
)]
}
)
}
)
}

}
,{
key:"getNormalCol",value:function(e,t){
var i,o=null!=t&&null!=(i=t.textStyle)&&i.color&&!this.props.isMember?t.textStyle.color:e.C17.color;
return this.isPc()?e.C13.color:o
}

}
,{
key:"getMergeStyle",value:function(e){
var t,i=null!=e&&null!=(t=e.textStyle)&&t.color&&!this.props.isMember?e.textStyle:null;
return this.isPc()?null:i
}

}
,{
key:"getNormalColForUseLevel",value:function(e,t){
var i,o=null!=t&&null!=(i=t.textStyle)&&i.color&&!this.props.isMember?t.textStyle.color:e.C17.color;
return this.isPc()?e.C33.color:o
}

}
,{
key:"getBgColorForUseLevel",value:function(e){
var t,i=null!=e&&null!=(t=e.textStyle)&&t.color&&!this.props.isMember?{
backgroundColor:'rgba(255,255,255,.2)'
}
:null;
return this.isPc()?null:i
}

}
,{
key:"render",value:function(){
var e=this,t={
height:120,paddingTop:36,paddingBottom:36,paddingLeft:32,paddingRight:32,alignItems:'center'
}
,i=this.props,o=i.mergeStyle,n=i.dataPersonal,r=i.isMember,l=i.vproList,c=i.userAccount,p=i.isLogin,h=i.isPadH,v=i.boxWidth,y=i.width,P=this.isApkOrIos()?(null==l?void 0:l.configInfo)&&JSON.parse(null==l?void 0:l.configInfo):l,x='1'===String(null==P?void 0:P.showAvatarSetting)&&''!==P.avatar,S='2'===String(null==P?void 0:P.showAvatarSetting)&&''!==P.avatarIcon,w=_r(d[12]).DarkStore.darkBool?null==P?void 0:P.avatarDarkIcon:null==P?void 0:P.avatarIcon;
_r(d[12]).RecordUtils.logger(f,'personal='+this.props.enableAdvancedFeature);
var I=_r(d[12]).PlatformUtils.isApp()||_r(d[12]).PlatformUtils.isWap(y);
return(0,_r(d[13]).jsx)(_r(d[12]).WithTheme,{
themeStyles:function(t){
return(0,u.default)(t,e.isPad(),e.isPc(),e.isApp(),r,p,h,_r(d[12]).PlatformUtils.isWap(y))
}
,children:function(i,l){
var u,f=h?i.padHView:{

}
;
return(0,_r(d[13]).jsx)(s.View,{
style:[f,h&&{
width:v
}
],children:(0,_r(d[13]).jsxs)(s.View,{
style:[i.View,e.isPc()&&{
flex:1
}
,!p&&{
alignItems:'center'
}
],children:[e.userHeadImg(i,x,S,P,w),e.userContent(i,o,c,r,l,I),e.isPc()&&(0,_r(d[13]).jsx)(s.View,{
style:[i.zcInfo],children:(0,_r(d[13]).jsx)(a.default,{
styleNew:t,personaPc:!0,imgHeight:48,isLogin:null==(u=e.props)?void 0:u.isLogin,personalData:n,width:e.props.width
}
)
}
),e.state.showLoginWindow&&e.isPc()?(0,_r(d[13]).jsx)(_r(d[14]).LoginWindow,{
targetLink:window.location.href,onClose:function(){
return e.onClose()
}

}
):null]
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
)(r.Component);
_e.default=(0,_r(d[12]).componentautoscaling)((0,_r(d[12]).monitor)(c.default)((0,_r(d[12]).itemExposeHoc)(v)))
}
),"7bdebce51ebf6dfe6b554df2d22f75e33d563748c6aa39f0a4271d10e45cae95",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","a5f81c3d8339df1fd2052227934ede52c11004ed0f6231c5d81851b0d5db2903","241f7604c49962a552810760e0a8aef46c2e8dbe0c8a65baf443ecb178303bc3","714d6920db09078e06db48e6da46a207359edf04adef6e79f42679b440812986","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=t.View
}
),"a5f81c3d8339df1fd2052227934ede52c11004ed0f6231c5d81851b0d5db2903",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,l,n){
var o,u=null==(o=this.props)?void 0:o.pageId;
return(0,r(d[0]).contentAll)(t,u,l,n)
}

}

}
),"241f7604c49962a552810760e0a8aef46c2e8dbe0c8a65baf443ecb178303bc3",["cce5fdca77dd969e222fb33c21dc6a4e2c7572f870b521e674807c930998cf59"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR;
e.default=function(o,s,l,c,f,h,u,b){
var p={
opacity:.86
}
,C=f?Object.assign({

}
,o.C17,p):o.C13,x=l?Object.assign({

}
,o.C11,p):C,j=Math.min(r(d[1]).CommonUtils.getScaleSize(9,n),12),w=Math.min(r(d[1]).CommonUtils.getScaleSize(16,n),20),I=r(d[1]).PlatformUtils.isIOS()?10:10.5,S=r(d[1]).fontStore.fontMutiple>r(d[1]).FONT_MUTIPLE.FONT_LEVEL_ONE,T=h&&!l&&{
position:'absolute',top:S?17:12,left:12
}
,y=l?20:h?64:16,z=S?122:104,O=h?14:12,R=l?44:24,U=l?24:r(d[1]).CommonUtils.getScaleSize(18,n),H=l?32:r(d[1]).CommonUtils.getScaleSize(24,n),L=l?11:3,P=l?14:0,D=S?5:0,W=r(d[1]).PlatformUtils.isWeb()&&!l?[{
scale:.75
}
]:[],v=l?20:w,_=l?20:w,E=l?12:j,F=r(d[1]).PlatformUtils.isWeb()&&!l?[{
scale:.75
}
]:[],A=l?20:16,M=l?20:16,N=l?12:9,V=l?93:70,k=l?32:24,B=l?16:0,q=r(d[1]).PlatformUtils.isWeb()&&!l?[{
scale:.6666666666666666
}
]:[],G=r(d[1]).PlatformUtils.isWeb()&&!l?12:I,J=(f?o.C42:o.C12,c?4:8),K=!l&&{
backgroundColor:'rgba(255,255,255,1)',paddingHorizontal:12
}
;
return t.StyleSheet.create({
padHView:{
height:z,justifyContent:'center',backgroundColor:'rgba(255,255,255,1)',borderRadius:16
}
,View:Object.assign({
marginTop:0,flexDirection:'row',borderRadius:16,paddingVertical:O,position:'relative'
}
,u&&S&&{
height:'100%'
}
,K),cricle:{
width:48,height:48,position:'relative',alignContent:'center',alignItems:'center',justifyContent:'center'
}
,userAva:{
width:l?88:48,height:l?88:48,borderRadius:R
}
,userName:Object.assign({

}
,o.T10,o.C17,{
color:'rgba(0,0,0,0.9)',marginRight:L,fontSize:U,lineHeight:H,fontWeight:'500'
}
),userImg:Object.assign({
alignContent:'center',alignItems:'center',justifyContent:'center'
}
,T),userInfo:{
flexDirection:'row',marginBottom:2,alignItems:'center'
}
,noLogin:{
flexDirection:'row'
}
,userInfoWrap:{
paddingVertical:P,marginLeft:y,justifyContent:'flex-start',flex:1,marginTop:D
}
,userAccount:Object.assign({

}
,o.T1,o.C42,{
maxWidth:'100%',fontSize:r(d[1]).CommonUtils.getScaleSize(14,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(19,n),color:'rgba(0,0,0,0.6)',fontWeight:'400'
}
),userAccountPc:Object.assign({

}
,o.T7,{
fontSize:o.T7.fontSize,lineHeight:o.T7.lineHeight
}
),accountContent:{
marginBottom:4
}
,accountContentPc:{
marginTop:2
}
,tagList:{
flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
}
,tagText:{
display:'flex',flexDirection:'row',alignItems:'center'
}
,tagTextPc:Object.assign({
height:l?20:w,lineHeight:l?20:w,textAlign:'center',borderRadius:l?10:8
}
,o.S13,{
paddingHorizontal:r(d[1]).PlatformUtils.isWeb()&&!l?0:J,marginRight:l?8:4
}
),txtBg:Object.assign({
height:13,backgroundColor:'rgba(249,188,100,0.2)',paddingRight:3,paddingLeft:7,borderTopRightRadius:7.5,borderBottomRightRadius:7.5,marginLeft:-6,alignItems:'center',justifyContent:'center'
}
,b||r(d[1]).PlatformUtils.isHarmony()?{
paddingTop:1
}
:{

}
),tagTxt:Object.assign({
fontSize:9,color:'#825B44',letterSpacing:.3
}
,b?{
lineHeight:14
}
:{

}
),scale:Object.assign({

}
,o.T0,{
transform:W,height:v,lineHeight:_,fontSize:E
}
,o.C38,{
opacity:.86,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'
}
),scaleWeb:Object.assign({

}
,o.T0,{
transform:F,height:A,lineHeight:M,fontSize:N
}
,x,{
display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row'
}
),appText:Object.assign({

}
,C,{
paddingHorizontal:2,fontSize:j
}
),signWrap:{
position:'absolute',right:32,top:-16
}
,signIcon:{
width:V,height:k,marginTop:B
}
,zcInfo:{
height:120,width:656,position:'relative'
}
,showText:Object.assign({

}
,o.T0,{
fontSize:8,fontWeight:'400',maxWidth:18,height:10,transform:q,color:'black',justifyContent:'center',alignItems:'center',lineHeight:G
}
),showIcon:{
width:10,height:10,zIndex:1,left:1
}
,showAvatar:{
height:12,backgroundColor:'#FFDDA9',borderRadius:6,bottom:-40,zIndex:100,justifyContent:'center',alignItems:'center',flexDirection:'row',paddingLeft:4,paddingRight:4,position:'relative'
}
,showRadius:{
position:'absolute',bottom:4,width:48,height:50,zIndex:99
}
,avaImg:{
width:48,height:48,borderRadius:24,zIndex:1,top:-8,overflow:'hidden'
}
,medals:{
width:48,height:20,display:'flex',alignItems:'flex-start',justifyContent:'flex-end'
}
,SignInContainer:{
flexDirection:'row',justifyContent:'flex-end'
}
,tagListContainer:Object.assign({
flexDirection:'row',justifyContent:'space-between',alignItems:'center'
}
,!f&&{
height:16
}
),tagListContainerPc:{
flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:16,marginTop:4
}

}
)
}

}
),"714d6920db09078e06db48e6da46a207359edf04adef6e79f42679b440812986",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),n=_r(d[0])(_r(d[3])),i=_r(d[0])(_r(d[4])),o=_r(d[0])(_r(d[5])),r=_r(d[0])(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var n: any = f(t);
if(n&&n.has(e))return n.get(e);
var i={
__proto__:null
}
,o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var r in e)if("default"!==r&&{

}
.hasOwnProperty.call(e,r)){
// 变量
var l: any = o?Object.getOwnPropertyDescriptor(e,r):null;
l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]
}
return i.default=e,n&&n.set(e,i),i
}
)(_r(d[7])),u=_r(d[8]),a=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),s=_r(d[0])(_r(d[11])),p=_r(d[0])(_r(d[12]));
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
var h=(function(l){
// 函数
function c(n: any): any {
var r,l,a,p;
return(0,t.default)(this,c),l=this,a=c,p=[n],a=(0,o.default)(a),(r=(0,i.default)(l,v()?Reflect.construct(a,p||[],(0,o.default)(l).constructor):a.apply(l,p)))._isWap=function(e){
return _r(d[13]).PlatformUtils.isWap(e)
}
,r.isPc=function(){
// 变量
var e: any = _r(d[13]).CommonUtils.getWindowSize('personal').screenWidth;
return _r(d[13]).PlatformUtils.isPc(e)
}
,r.isPcPad=function(){
// 变量
var e: any = _r(d[13]).CommonUtils.getWindowSize('personal').screenWidth;
return _r(d[13]).PlatformUtils.isPc(e)||'medium'===r.getSize()
}
,r.isApk=function(){
return _r(d[13]).PlatformUtils.isApp()
}
,r.getSize=function(){
// 变量
var e: any = _r(d[13]).CommonUtils.getWindowSize('personal').screenWidth;
return(0,_r(d[13]).screenSize)(e)
}
,r.switchClick=function(e){
// 变量
var t: any = _r(d[13]).PlatformUtils.isIOS()?'pointmallios':'pointmall';
switch(e){
case'integralt':return r.isApk()?"vmall://com.vmall.client/home/activity?isShowLayout=false&pn="+t:r.isPc()?_r(d[13]).Service.webDomain+'member/newpoint':_r(d[13]).Service.webDomain+"portal/activity/index.html?isShowLayout=false&pn=pointmall";
case'voucher':return r.isApk()?"vmall://com.vmall.client/mine/voucher":r.isPc()?_r(d[13]).Service.webDomain+'member/balance':_r(d[13]).Service.wapDomain+'voucher/detail';
case'coupon':return r.isApk()?'vmall://com.vmall.client/product/couponlist':r.isPc()?_r(d[13]).Service.webDomain+'member/coupon':_r(d[13]).Service.wapDomain+'member/coupon'
}

}
,r.onPressClick=(function(){
var t=(0,e.default)((function*(e){
var t,n,i,o;
if(r.gotourl=r.switchClick(e),r.apkGotourl=r.switchClick(e),r.props.isLogin){
'integralt'===e?(i=7,o='\u79ef\u5206',t='\u70b9\u51fb\u79ef\u5206\u56fe\u6807'):'coupon'===e?(t='\u70b9\u51fb\u4f18\u60e0\u5238\u56fe\u6807',i=8,o='\u4f18\u60e0\u5238'):(t='\u70b9\u51fb\u4ee3\u91d1\u5238\u56fe\u6807',o='\u4ee3\u91d1\u5238',i=9),r.hmiSpanId=yield s.default.hmiClickAsster(r.props,'begin',o);
// 变量
var l: any = r.props.clickItem;
n=r.isPc()?'310000101':'210000101',l(t,n=r.isApk()?'110000101':n,r.gotourl,i,o),_r(d[13]).RouterUtils.gotoPage(r.gotourl),s.default.hmiClickAsster(r.props,'end',o,r.hmiSpanId)
}
else if('integralt'===e?(t='\u70b9\u51fb\u79ef\u5206\u56fe\u6807',i=7,o='\u79ef\u5206'):'coupon'===e?(t='\u70b9\u51fb\u4f18\u60e0\u5238\u56fe\u6807',i=8,o='\u4f18\u60e0\u5238'):(t='\u70b9\u51fb\u4ee3\u91d1\u5238\u56fe\u6807',i=9,o='\u4ee3\u91d1\u5238'),n=r.isPc()?'310000101':'210000101',n=r.isApk()?'110000101':n,r.isApk()){
r.hmiSpanId=yield s.default.hmiClickAsster(r.props,'begin',o),r.eventListener=_r(d[13]).LoginUtils.listenLoginStatus((function(e){
!0===e&&!0===r.linkFinished&&r.setState({
isLoginState:e
}
,(function(){
r.linkFinished=!1,_r(d[13]).RouterUtils.gotoPage(r.apkGotourl)
}
))
}
));
// 变量
var u: any = 'vmall://com.vmall.client/home/login';
(0,r.props.clickItem)(t,n,u,i,o),_r(d[13]).RouterUtils.gotoPage(u),s.default.hmiClickAsster(r.props,'end',o,r.hmiSpanId)
}
else{
// 变量
var a: any = r.isPc()?_r(d[13]).Service.webDomain+"account/login?url="+encodeURIComponent(r.gotourl):_r(d[13]).Service.wapDomain+"account/applogin?url="+encodeURIComponent(r.gotourl);
(0,r.props.clickItem)(t,n,a,i,o),_r(d[13]).RouterUtils.gotoPage(a)
}

}
));
return function(e){
return t.apply(this,arguments)
}

}
)(),r.renderTitle=function(e,t,n,i,o){
var l,a;
return!e&&r.isApk()?(0,_r(d[14]).jsx)(u.Text,{
numberOfLines:2,ellipsizeMode:'tail',style:[t.wordsTextTwo,n&&{
color:null==i||null==(l=i.textStyle)?void 0:l.color
}
],children:(0,_r(d[13]).t)(o.title)
}
):(0,_r(d[14]).jsx)(u.Text,{
style:[t.wordsText,n&&{
color:null==i||null==(a=i.textStyle)?void 0:a.color
}
],children:(0,_r(d[13]).t)(o.title)
}
)
}
,r.getItemCount=function(e,t){
return e||0===Number(e)?e:t
}
,r.renderItemCount=function(e,t){
// 变量
var n: any = t.integralt,i=t.coupon,o=t.voucher,l=t.symbol;
return'integralt'===e.key?r.getItemCount(n,l):'coupon'===e.key?r.getItemCount(i,l):r.getItemCount(o,l)
}
,r.renderItem=function(e,t,n,i,o,l,a,c,s){
var p,f,v=s?0:8;
return(0,_r(d[14]).jsxs)(u.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return r.onPressClick(e.key)
}
,style:[t.itemdefaul,_r(d[13]).PlatformUtils.isApp()?{
marginRight:v
}
:{
width:n
}
],children:[(0,_r(d[14]).jsx)(_r(d[15]).FastImageView,{
localSource:e.img,imgStyle:t.assterIcon
}
),r.renderTitle(c,t,o,l,e),i?(0,_r(d[14]).jsx)(u.Text,{
style:[t.numText,o&&{
color:null==l||null==(p=l.textStyle)?void 0:p.color
}
],children:r.renderItemCount(e,a)
}
):(0,_r(d[14]).jsx)(u.Text,{
style:[t.numTextNo,o&&{
color:null==l||null==(f=l.textStyle)?void 0:f.color
}
],children:a.symbol
}
)]
}
)
}
,r.state={
isLoginState:!1,apkGotourl:''
}
,r.linkFinished=!0,r
}
return(0,r.default)(c,l),(0,n.default)(c,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.eventListener=_r(d[13]).LoginUtils.listenLoginStatus((function(t){
!1===t&&!1===e.linkFinished&&e.setState({
isLoginState:t
}
,(function(){
e.apkGotourl='',e.linkFinished=!0
}
))
}
))
}

}
,{
key:"componentWillUnmount",value:function(){
var e;
null==(e=this.eventListener)||e.remove()
}

}
,{
key:"fixedNum",value:function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;
return 0===e?Number(e).toFixed(t):e>9999?'9999+':e
}

}
,{
key:"render",value:function(){
var e,t=this,n=this.props,i=n.personalData,o=n.isLogin,r=n.mergeStyle,l=n.isMember,c=n.isPadH,s=n.boxWidth,f=n.lang,v='zh-CN'===String(f),h=(_r(d[13]).CommonUtils.getWindowSize('personal').screenWidth-72)/3,y=null==r||null==(e=r.textStyle)?void 0:e.color,k=[{
key:'integralt',img:a.default.pointCount,title:'integral'
}
,{
key:'coupon',img:a.default.couponCount,title:'coupons'
}
,{
key:'voucher',img:a.default.voucherCount,title:'vouchers'
}
],S=_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE;
return(0,_r(d[14]).jsx)(_r(d[13]).WithTheme,{
themeStyles:function(e){
return(0,p.default)(e,l)
}
,children:function(e){
return(0,_r(d[14]).jsx)(u.View,{
style:[_r(d[13]).PlatformUtils.isApp()&&t.isPcPad()?e.cardbgbPad:e.cardbgb,c&&{
width:s,height:104
}
,S&&e.bigPadHView],children:k.map((function(n,l){
return t.renderItem(n,e,h,o,y,r,i,v,l===k.length-1)
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
)(l.Component);
_e.default=(0,_r(d[13]).monitor)(c.default)((0,_r(d[13]).itemExposeHoc)(h))
}
),"ca6a1ce11f26ce5622d7e57bad362234b007b293fd52d98f75dc3cbd2a503174",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","1f105504291c6e94c531a2405d13c7645da792554091f1aa825af3f0b3a26649","daf116efd613abfe883ca1037db036f00bd5697ac2af56378c7479b9f010cf65","c3139c4ad2da47acf5c31c2d5d191a182373fd209ecf446ddfebe2396c660749","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,n,o,l,s){
var p,u;
return{
data:{
actionCode:null==n?void 0:n.toString(),actionName:'\u70b9\u51fb\u4e2a\u4eba\u8d44\u4ea7\u4e0a\u62a5',pageId:null==(p=this.props)||null==(u=p.pageId)?void 0:u.toString(),eventType:'2',content:{
comId:'personalInfo_asset',gotoURL:o,index:l.toString(),indexName:s
}
,pageCatCode:'p_personalCenter',pageCatName:'\u4e2a\u4eba\u4e2d\u5fc3',resSiteCode:'s_personalCenter_asset',resSiteName:'\u7528\u6237\u8d44\u4ea7'
}

}

}

}

}
),"1f105504291c6e94c531a2405d13c7645da792554091f1aa825af3f0b3a26649",[]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
hmiClickAsster:function(t,n,l,o){
if(r(d[0]).PlatformUtils.isAndroid()){
// 变量
var u: any = t.pageId,c=t.pageCatName,s=r(d[0]).HmiData.hmiBasicData(r(d[0]).E2EIdStore.curPageType),p=s.e2eId,I=s.parentSpanId,f=null==s?void 0:s.category,v=null==s?void 0:s.tagData;
return null==v||v.push('\u4e2a\u4eba\u4fe1\u606f'),l&&(null==v||v.push(l)),r(d[0]).DeviceUtils.hmiLog({
e2eId:p,parentSpanId:I,stage:n,name:'click',reportNow:'true',spanId:o,content:{
category:f,instanceId:u,instanceName:c,tag:v
}

}
)
}

}

}

}
),"daf116efd613abfe883ca1037db036f00bd5697ac2af56378c7479b9f010cf65",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR;
e.default=function(o,l){
return t.StyleSheet.create({
cardbgdefa:{
height:60,borderRadius:16,flexDirection:'row',justifyContent:'center',paddingBottom:12,paddingTop:12
}
,cardbgb:{
flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',minWidth:'33.3%',backgroundColor:'rgba(255,255,255,0.96)',borderRadius:16,paddingVertical:12
}
,harmonyCard:{
flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',paddingHorizontal:8,paddingVertical:12,backgroundColor:'rgba(255, 255, 255, 0.96)',borderRadius:16
}
,bigPadHView:{
height:122
}
,cardbgbPad:{
flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',minWidth:'33.3%',backgroundColor:'rgba(255,255,255,0.96)',borderRadius:16,paddingVertical:12
}
,itemdefaul:{
flex:1,flexDirection:'column',alignItems:'center',textAlign:'center',justifyContent:'center'
}
,assterIcon:{
width:40,height:40,marginBottom:4
}
,assterTitle:{
color:'rgba(24,36,49,1)',fontSize:12,fontWeight:'400'
}
,itemPadDefaul:{
flexGrow:1,flexDirection:'row',textAlign:'center',justifyContent:'center'
}
,itemChildwap:{
flexDirection:'column',alignItems:'center',justifyContent:'center'
}
,itemChild:{
maxWidth:r(d[1]).PlatformUtils.isPc(t.Dimensions.get('window').width)?'100%':'50%',flexGrow:1,flexDirection:'column',justifyContent:'center'
}
,wordsText:Object.assign({

}
,o.T3,{
fontSize:r(d[1]).CommonUtils.getScaleSize(12,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(16,n),color:'rgba(0,0,0,.9)',fontWeight:'400'
}
),wordsTextTwo:Object.assign({

}
,o.T3,{
fontSize:r(d[1]).CommonUtils.getScaleSize(12,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(16,n),color:'rgba(0,0,0,.9)',fontWeight:'400'
}
),wordsTextPc:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyBase,marginLeft:8
}
,o.T10,o.C15),wordsTextPcTwo:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,o.T2,o.C15),numText:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,o.T8,o.C17,{
fontSize:r(d[1]).CommonUtils.getScaleSize(10,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(14,n),opacity:.4,color:'#000000',fontWeight:'400',marginTop:2,marginBottom:4
}
),numTextNo:Object.assign({

}
,o.T8,o.C17,{
fontSize:r(d[1]).CommonUtils.getScaleSize(10,n),lineHeight:r(d[1]).CommonUtils.getScaleSize(14,n),opacity:.4,color:'#000000',fontWeight:'400',marginTop:2,marginBottom:4
}
),numSymbolPc:Object.assign({
textAlign:'center',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,o.T13,o.C11),numTextPc:Object.assign({
textAlign:'center',fontFamily:r(d[1]).PublicFont.fontFamilyBase
}
,o.T13,o.C11),splitline:{
width:1,transform:[{
scaleX:.5
}
],backgroundColor:l?o.C51.color:o.C13.color,opacity:l?.2:.1,marginTop:6
}
,bonusContainer:{
flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:9
}

}
)
}

}
),"c3139c4ad2da47acf5c31c2d5d191a182373fd209ecf446ddfebe2396c660749",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),r=_r(d[0])(_r(d[3])),n=_r(d[0])(_r(d[4])),i=_r(d[0])(_r(d[5])),a=_r(d[0])(_r(d[6])),o=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = f(t);
if(r&&r.has(e))return r.get(e);
var n={
__proto__:null
}
,i=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var a in e)if("default"!==a&&{

}
.hasOwnProperty.call(e,a)){
// 变量
var o: any = i?Object.getOwnPropertyDescriptor(e,a):null;
o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]
}
return n.default=e,r&&r.set(e,n),n
}
)(_r(d[7])),s=_r(d[8]),l=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11])),h=_r(d[0])(_r(d[12])),p=_r(d[0])(_r(d[13]));
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
var v=0;
_r(d[14]).PlatformUtils.isIOS()&&_r(d[14]).DeviceUtils.getStatusBarHeight().then((function(e){
v=e
}
)).catch((function(){

}
));
var P=(function(o){
// 函数
function u(r: any): any {
var a,o,l,h;
return(0,t.default)(this,u),o=this,l=u,h=[r],l=(0,i.default)(l),(a=(0,n.default)(o,S()?Reflect.construct(l,h||[],(0,i.default)(o).constructor):l.apply(o,h))).shareInfo=null,a.titleAnimatedValue=new s.Animated.Value(1),a.userInfoAnimatedValue=new s.Animated.Value(0),a.isShowTitle=!0,a.getShareInfo=function(e,t){
var r,n=t;
_r(d[14]).HttpService.getShareLinkInfo(null==(r=a.props)?void 0:r.pageId,'').then((function(t){
var r,i=(null==t||null==(r=t.shareIcons)?void 0:r.length)&&(null==t?void 0:t.shareIcons[0]);
if(a.shareInfo=i,i&&'{

}
'!==JSON.stringify(i)){
n.push('share');
var o=e.filter((function(e){
return n.includes(e.listName)
}
));
o.map((function(e){
'shareShow'===(null==e?void 0:e.iconUrl)&&(e.iconUrl='0'===(null==i?void 0:i.shareType)?'share':'ic_earnByShare')
}
)),a.setState({
iconList:o.length>10?o.slice(0,10):o
}
)
}

}
))
}
,a.openShareDialog=(0,e.default)((function*(){
var e=a.shareInfo,t=e.shareTitle,r=e.weixinShareIcon,n=e.sharePoster,i=e.shareEarnTitle,o=e.shareContent,s=e.shareType,l=e.shareWapLink,c=e.shareAppLink,u={
shareType:'0'===s?'1':'2',sharePosition:'FromTitle',shareTips:i,linkShareTo:_r(d[14]).PlatformUtils.isAndroid()||_r(d[14]).PlatformUtils.isHarmony()?_r(d[14]).SHARE_CHANNEL.LINK_APK_CHANNELS:_r(d[14]).SHARE_CHANNEL.LINK_IOS_CHANNELS,posterShareTo:n?_r(d[14]).SHARE_CHANNEL.POST_APK_CHANNELS:'',otherShareTo:'301',shortTitle:t,shortContent:o,longContent:o,picUrl:""+_r(d[14]).Service.cmsCdnPath+r,wechatMpPicUrl:'',wechatMpPicData:{

}
,shareWapUrl:l,shareMpUrl:'',clientPosterMethodType:'',clientPosterParam:{

}

}
;
if('1'===s){
// 变量
var h: any = yield a.getCpsUserInfo(),p=h.cid,f=void 0===p?'':p,S=h.wi,v=void 0===S?'':S,P=h.mid,y=void 0===P?'':P,w='';
''!==y?w="cid="+f+"&wi=mid:"+y+",fid:9_"+c+",cid:"+f+",wi:9":''!==v&&v.includes('mid')&&(w="cid="+f+"&wi="+v),l.includes('?')?u.shareWapUrl+=w&&"&"+w:u.shareWapUrl+=w&&"?"+w
}
n&&(u.clientPosterParam={
activityPicUrl:""+_r(d[14]).Service.cmsCdnPath+n,scanCodeType:'1',wapUrl:u.shareWapUrl
}
,u.clientPosterMethodType='1');
var I={
pageId:c,type:'0'===s?'1':'2'
}
,A={
pageId:c,gotoURL:'',type:'0'===s?'1':'2'
}
,N={
loadReportKey:'100000811',loadReportData:JSON.stringify(I),clickReportKey:'100000810',clickReportData:JSON.stringify(A)
}
,U=Object.assign({

}
,u,N);
_r(d[14]).CommonUtils.pullShareDialog(JSON.stringify(U))
}
)),a.getCpsUserInfo=function(){
return new Promise((function(e,t){
_r(d[14]).HttpService.getCpsUserInfo().then((function(t){
var r=t||{

}
,n=r.code,i=r.cpsUserInfo;
'0'===String(n)&&e(i)
}
)).catch((function(){
t({

}
)
}
))
}
))
}
,a.getIsLogin=function(){
return new Promise((function(e,t){
_r(d[14]).LoginUtils.getLoginStatus().then((function(t){
e(t)
}
)).catch((function(){
t(!1)
}
))
}
))
}
,a.getSize=function(){
return(0,_r(d[14]).screenSize)(a.props.width)
}
,a.isApp=function(){
return'small'===a.getSize()
}
,a.isPadPc=function(){
return'medium'===a.getSize()&&a.isPadHorizonta()&&a.props.width>=1024
}
,a.isPad=function(){
return'medium'===a.getSize()
}
,a.isPadHorizonta=function(){
return(_r(d[14]).PlatformUtils.isWeb()?s.Dimensions.get('window').width:_r(d[14]).CommonUtils.getWindowSize('personal').screenWidth)>=(_r(d[14]).PlatformUtils.isWeb()?s.Dimensions.get('window').height:_r(d[14]).CommonUtils.getWindowSize('personal').screenHeight)
}
,a.goLogin=function(e){
// 变量
var t: any = 'vmall://com.vmall.client/home/login';
a.props.clickItem(110000101,t,null!=e&&e.includes('\u6635\u79f0')?2:1),_r(d[14]).EventTracking.execReportData('',!0),_r(d[14]).RouterUtils.gotoPage(t)
}
,a.userInfoClick=function(e){
var t,r=_r(d[14]).PlatformUtils.isAndroid()||_r(d[14]).PlatformUtils.isHarmony()?'APP':'IOS';
_r(d[14]).PlatformUtils.isApp()&&(t="vmall://com.vmall.client/home/activity?pn=MemberPrivilege"+r+"&isShowLayout=false"),a.props.clickItem(110000101,t,null!=e&&e.includes('\u6635\u79f0')?2:1),_r(d[14]).EventTracking.execReportData('',!0),(0!==a.props.enableAdvancedFeature||_r(d[14]).PlatformUtils.isWeb())&&_r(d[14]).RouterUtils.gotoPage(t)
}
,a.getWidth=function(){
return{
width:_r(d[14]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[14]).CommonUtils.getWindowSize('personal').screenHeight
}

}
,a.getChangeStyle=function(){
var e,t=a.getBackgrounStyle(),r=a.props.mergeStyle;
null!=r&&null!=(e=r.imgStyle)&&e.backgroundColor?(t=null,a.setState({
backGroundStyle:t
}
)):null!=r&&r.bgImg&&(t=r.bgImg,a.setState({
backGroundStyle:t
}
))
}
,a.getIconList=function(){
// 变量
var e: any = [],t=a.state.iconList;
return(null==t?void 0:t.length)>0&&(t.map((function(t){
// 变量
var r: any = Number(t.clickType);
28!==r&&9!==r&&10!==r||e.push(t)
}
)),e.sort((function(e,t){
return Number(e.iconNo)-Number(t.iconNo)
}
))),e
}
,a.renderNoShowHeader=function(e,t,r){
return(0,_r(d[15]).jsx)(s.View,{
style:[e.View,{
height:t,paddingTop:r
}
]
}
)
}
,a.renderShowHeader=function(e,t,r,n,i,o,l,u,h,f,S,P,y,w,I,A,N){
var U,L=a.props,C=L.userName,T=L.userLevel,_=L.isMember;
return(0,_r(d[15]).jsxs)(_r(d[16]).ImageBackground,{
imgUri:e,imgViewStyle:[t],style:[r.View,t,null==n?void 0:n.imgStyle,{
height:i,paddingTop:o
}
],isFromPersonal:!0,children:[(0,_r(d[15]).jsx)(s.View,{
style:[r.avartWrap],children:(0,_r(d[15]).jsx)(p.default,{
_styles:r,mergeStyle:I,unLoginText:A,newMergeStyle:A,isLogin:l,showText:u,item:h,showIcon:f,avatarIcon:S,marginLeft:P,userInfoAnimatedValue:a.userInfoAnimatedValue,titleAnimatedValue:a.titleAnimatedValue,userInfoClick:a.userInfoClick,canClick:a.state.canClick,loginDefaultAvatar:y,unLoginDefaultAvatar:w,goLogin:a.goLogin,userName:C,userLevel:T,isMember:_,avaImg:a.props.avaImg
}
)
}
),(0,_r(d[15]).jsx)(s.View,{
style:r.iconList,children:N.length>0&&(0,_r(d[15]).jsx)(c.default,{
size:a.getSize(),cartNum:a.props.cartNum,messageNum:a.props.messageNum,style:r,iconList:N,mergeStyle:I,newMergeStyle:n,IosStatusBarHeight:v,pageCatCode:'p_personalCenter',pageCatName:(0,_r(d[14]).t)('personal'),resSiteCode:'s_personalCenter_head',resSiteName:(0,_r(d[14]).t)('top_card'),pageId:a.props.pageId,openShare:a.openShareDialog,getIsLogin:a.getIsLogin,shareType:null==(U=a.shareInfo)?void 0:U.shareType
}
)
}
)]
}
)
}
,a.state={
pageType:a.props.pageType||'personal',iconList:[],backGroundStyle:null,canClick:!0
}
,a
}
return(0,a.default)(u,o),(0,r.default)(u,[{
key:"componentDidMount",value:function(){
// 变量
var e: any = this;
this.getChangeStyle();
// 变量
var t: any = this.props.headStyle;
t&&t.iconTexts&&0!==t.iconTexts.length&&this.handleIconList(t.iconTexts),this.scrollEmitter=s.DeviceEventEmitter.addListener('onOutScrollViewScroll',(function(t,r){
r===_r(d[14]).PAGE_TYPE.personal&&(t<=40&&!e.isShowTitle&&(e.isShowTitle=!0,s.Animated.timing(e.userInfoAnimatedValue,{
toValue:0,duration:340,useNativeDriver:!0
}
).start((function(){
s.Animated.timing(e.titleAnimatedValue,{
toValue:e.isShowTitle?1:0,duration:80,useNativeDriver:!0
}
).start()
}
)),e.setState({
canClick:e.isShowTitle
}
)),t>40&&e.isShowTitle&&(e.isShowTitle=!1,s.Animated.timing(e.titleAnimatedValue,{
toValue:0,duration:80,useNativeDriver:!0
}
).start((function(){
s.Animated.timing(e.userInfoAnimatedValue,{
toValue:e.isShowTitle?0:1,duration:340,useNativeDriver:!0
}
).start()
}
)),e.setState({
canClick:e.isShowTitle
}
)))
}
))
}

}
,{
key:"componentWillUnmount",value:function(){
this.scrollEmitter&&this.scrollEmitter.remove(),this.addlist&&this.addlist.remove()
}

}
,{
key:"handleIconList",value:function(e){
var t=this,r=_r(d[14]).PlatformUtils.isIOS()?['scan','personalCenter','message','homePage','search','setting','custom']:['scan','cart','personalCenter','message','homePage','search','setting','userContentCenter','custom'],n=e.map((function(e,r){
return{
iconUrl:'custom'===e.iconAttribute?_r(d[14]).Service.cmsCndProdPath+e.imgUrl:e.iconAttribute+'Show',iconText:t.handleIconText(e.iconAttribute,e.title),actionUrl:t.handleIconUrl(e.iconAttribute,e),iconNo:r+1,gotoPageId:r+1,clickType:t.handleListType(e.iconAttribute),isCart:'cart'===e.iconAttribute,isMessage:'message'===e.iconAttribute,listName:e.iconAttribute
}

}
)),i=n.filter((function(e){
return r.includes(e.listName)
}
));
this.setState({
iconList:i.length>10?i.slice(0,10):i
}
),e.some((function(e){
return'share'===e.iconAttribute
}
))&&this.getShareInfo(n,r)
}

}
,{
key:"handleIconText",value:function(e,t){
switch(e){
case'cart':return t||(0,_r(d[14]).t)('shortcut_cart');
case'personalCenter':return t||(0,_r(d[14]).t)('service');
case'homePage':return t||(0,_r(d[14]).t)('tab_index');
case'message':return t||(0,_r(d[14]).t)('message_center');
case'setting':return t||(0,_r(d[14]).t)('setting');
case'scan':return t||(0,_r(d[14]).t)('scan');
case'search':return t||(0,_r(d[14]).t)('search');
case'userContentCenter':return t||(0,_r(d[14]).t)('userContentCenter');
case'share':return t||(0,_r(d[14]).t)('share');
case'custom':return t
}

}

}
,{
key:"handleIconUrl",value:function(e,t){
// 变量
var r: any = t.actionUrl,n=t.actionUrlWap;
return _r(d[14]).PlatformUtils.isApp()?this.handleApkUrl(e,r):this.handleWapUrl(e,n)
}

}
,{
key:"handleApkUrl",value:function(e,t){
var r={
searchHotListShow:'true',searchHistoryShow:'true',searchResultPageProdShow:'true',searchResultPageActivityShow:'true',searchResultPageContentShow:'true',searchFindShow:'true',relativeWordShow:'true',prodSearchScope:'all',searchScence:''
}
;
this.props.configInfo&&(r=JSON.parse(this.props.configInfo)||{

}
);
// 变量
var n: any = "vmall://com.vmall.client/home/rnSearch?targetRoute=SearchDefault&searchHistoryShow="+r.searchHistoryShow+"&searchHotListShow="+r.searchHotListShow+"&searchResultPageProdShow="+r.searchResultPageProdShow+"&searchResultPageActivityShow="+r.searchResultPageActivityShow+"&searchResultPageContentShow="+r.searchResultPageContentShow;
switch(r.searchFindShow&&(n=n+"&searchFindShow="+r.searchFindShow+"&relativeWordShow="+r.relativeWordShow+"&prodSearchScope="+r.prodSearchScope+"&searchScence="+r.searchScence),e){
case'scan':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_SCAN_URL;
case'cart':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_CART_URL;
case'personalCenter':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_PERSONCENTER_URL;
case'message':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_MESSAGEURL;
case'homePage':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_HOMEPAGEURL;
case'search':return t||n;
case'setting':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_SETTINGURL;
case'userContentCenter':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_USERCONTENTCENTER_URL;
case'custom':return t;
case'share':return''
}

}

}
,{
key:"handleWapUrl",value:function(e,t){
var r={
targetRoute:'SearchDefault',routeParams:{
configInfo:encodeURIComponent(this.props.configInfo)
}

}
,n=encodeURIComponent(JSON.stringify(r));
switch(e){
case'scan':return t||_r(d[14]).INTERNAL_JUMP_LINK.APP_SCAN_URL;
case'cart':return t||_r(d[14]).Service.wapDomain+"cart";
case'personalCenter':var i=_r(d[14]).Service.wapDomain+_r(d[14]).URL_CONSTANTS.PERSONAL_URL_WAP;
return i=_r(d[14]).Cookies.get('rnpersonalurlwap')?_r(d[14]).Cookies.get('rnpersonalurlwap'):_r(d[14]).Service.wapDomain+_r(d[14]).URL_CONSTANTS.PERSONAL_URL_WAP,t||i;
case'message':return t||_r(d[14]).Service.wapDomain+"message/index";
case'search':return t||_r(d[14]).Service.wapDomain+"portal/search/index.html?searchParams="+n;
case'homePage':return t||""+_r(d[14]).Service.wapDomain;
case'setting':return t||_r(d[14]).Service.wapDomain+"setting/index";
case'userContentCenter':return t||_r(d[14]).Service.wapDomain+"content/index";
case'custom':return t
}

}

}
,{
key:"handleListType",value:function(e){
switch(e){
case'scan':return'28';
case'personalCenter':return'23';
case'cart':return'21';
case'homePage':return'22';
case'message':return'10';
case'search':return'20';
case'setting':return'9';
case'custom':return'25';
case'userContentCenter':return'24'
}

}

}
,{
key:"componentDidUpdate",value:function(e){
if(this.props.configInfo!==e.configInfo){
// 变量
var t: any = this.props.headStyle;
t&&t.iconTexts&&0!==t.iconTexts.length&&this.handleIconList(t.iconTexts)
}

}

}
,{
key:"getBackgrounStyle",value:function(){
return this.props.isMember?this.getMemberBg():_r(d[14]).ScreenUtils.isMedium(this.getWidth().width)?_r(d[14]).ScreenUtils.isPadHorizontal(this.getWidth().width,this.getWidth().height)?l.default.oNBgPadT:l.default.oNBgPadS:l.default.oNBg
}

}
,{
key:"getMemberBg",value:function(){
return _r(d[14]).ScreenUtils.isMedium(this.getWidth().width)?_r(d[14]).ScreenUtils.isPadHorizontal(this.getWidth().width,this.getWidth().height)?l.default.upBgPad:l.default.upBgPadS:l.default.upBg
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props,r=t.mergeStyle,n=t.isLogin,i=t.vproList,a=t.isMember,o=r,s=this.initVariable(i,o),c=s.showText,u=s.item,p=s.showIcon,f=s.avatarIcon,S=s.height,v=s.top,P=s.imgBgUri,y=s.memberStyle,w=_r(d[14]).PlatformUtils.isHarmony()?(0,_r(d[14]).t)('harmonyLogin'):(0,_r(d[14]).t)('login')+"/"+(0,_r(d[14]).t)('register'),I=_r(d[14]).PlatformUtils.isHarmony()?l.default.harmonyloginAvatar:l.default.icAvatar,A=_r(d[14]).PlatformUtils.isHarmony()?l.default.harmonyUnloginAvatar:l.default.icAvatar,N=0;
return N=this.getMarginLeft(c,N,p),(0,_r(d[15]).jsx)(_r(d[14]).WithTheme,{
themeStyles:function(t){
return(0,h.default)(t,e.isPad(),e.props.isShow,o,a)
}
,children:function(t,r){
var i,s=e.props.changeColor,l=e.handleMergeStyle(o,a,r);
null!=s&&null!=(i=s.textStyle)&&i.color&&!a&&(l=s.textStyle.color);
// 变量
var h: any = e.getIconList();
return e.props.isShow?(0,_r(d[15]).jsx)(_r(d[15]).Fragment,{
children:e.renderShowHeader(P,y,t,o,S,v,n,c,u,p,f,N,I,A,l,w,h)
}
):(0,_r(d[15]).jsx)(_r(d[15]).Fragment,{
children:e.renderNoShowHeader(t,S,h)
}
)
}

}
)
}

}
,{
key:"getMarginLeft",value:function(e,t,r){
return e?t=-5:r&&(t=-3),t
}

}
,{
key:"initVariable",value:function(e,t){
var r,n,i,a,o=(null==e?void 0:e.configInfo)&&JSON.parse(e.configInfo);
o&&(n='1'===(null==o?void 0:o.showAvatarSetting)&&''!==o.avatar,i='2'===(null==o?void 0:o.showAvatarSetting)&&''!==o.avatarIcon,a=null==o?void 0:o.avatarIcon);
var s=_r(d[14]).PlatformUtils.isIOS()?56+v:56+this.props.statusBarHeight,l=_r(d[14]).PlatformUtils.isIOS()?v:this.props.statusBarHeight,c=this.props.isMember?null:null==t?void 0:t.bgImg,u=null!=t&&null!=(r=t.imgStyle)&&r.backgroundColor?t.imgStyle:{

}
;
return{
showText:n,item:o,showIcon:i,avatarIcon:a,height:s,top:l,imgBgUri:c,memberStyle:u=this.props.isMember?{

}
:u
}

}

}
,{
key:"handleMergeStyle",value:function(e,t,r){
var n,i,a=r.C11.color;
return{
textStyle:{
color:a=null!=e&&null!=(n=e.textStyle)&&n.color?null==(i=e.textStyle)?void 0:i.color:a
}

}

}

}
])
}
)(o.Component);
_e.default=(0,_r(d[14]).componentautoscaling)((0,_r(d[14]).monitor)(u.default)((0,_r(d[14]).itemExposeHoc)(P)))
}
),"921cf59c6d2eca8628ae06624a3ac72537b01b2d7dc1b1bccce185794d5e6533",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","8bc6754c390e9a8c98941753c6065b30df97d0c1a75f29983c47b24e169c288a","7ff1c080c684182afafa55f92fe0c1d0723dd7b7869c6be1aaacfc1b56b6abe3","d8ed5fe41d3dfac326393c727ac0af6fb25c4885bde028d49a852b4935747430","53185fd856513b89b7c4b36692ad11149ae9257eb80a5264f733840e764ff13c","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,l,n){
var o,u=null==(o=this.props)?void 0:o.pageId;
return(0,r(d[0]).contentAll)(t,u,l,n)
}

}

}
),"7ff1c080c684182afafa55f92fe0c1d0723dd7b7869c6be1aaacfc1b56b6abe3",["cce5fdca77dd969e222fb33c21dc6a4e2c7572f870b521e674807c930998cf59"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n,o,s,l,h){
l&&(n=r(d[1]).SuitStyle);
// 变量
var c: any = o?24:16,f=h?n.C17:n.C11,p=o?24:16;
return t.StyleSheet.create({
View:{
display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:8,backgroundColor:'#F1F3F5'
}
,myTitle:{
fontSize:26,lineHeight:32,color:'rgba(0,0,0,0.90)',fontWeight:'700',paddingTop:1.5
}
,topBoxHeader:{
paddingHorizontal:s?c:0
}
,cricle:{
marginRight:7,position:'relative',alignContent:'center',alignItems:'center',justifyContent:'center',width:32,height:32
}
,view:{
height:56,flexDirection:'row',display:'flex',position:'relative',alignItems:'center',justifyContent:'space-between'
}
,topIcon:{
position:'absolute',top:-4,right:-4,width:16,height:16,borderRadius:8,backgroundColor:n.C35.color
}
,avartWrap:{
height:32,flex:1,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginLeft:s?p:0,marginRight:24
}
,userAva:{
width:32,height:32,borderRadius:16,marginRight:16
}
,userName:Object.assign({

}
,n.T10,f,{
marginRight:3,fontSize:16,color:'rgba(0,0,0,0.90)',fontWeight:'500'
}
),userNameBox:{
position:'absolute',left:20
}
,userNameBoxView:{
display:'flex',flexDirection:'column',justifyContent:'flex-start',flex:1
}
,appMemberLoginHeader:{
justifyContent:'center'
}
,iconList:{
display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginRight:s?p:0
}
,image:{
width:40,height:40,alignItems:'center',justifyContent:'center'
}
,imageLast:{
marginRight:0
}
,text:Object.assign({

}
,n.T13,n.C11),rightWrap:{
height:'100%',justifyContent:'flex-end',maxWidth:120
}
,rightText:Object.assign({

}
,n.T7),topText:Object.assign({

}
,n.T1,n.C17,{
textAlign:'center',lineHeight:16
}
),hidden:{
display:'none',position:'relative'
}
,topIconMore:{
width:24
}
,bgImageView:{
overflow:'hidden',width:'100%'
}
,showText:Object.assign({

}
,n.T0,{
fontSize:8,fontWeight:'400',maxWidth:16,height:10,transform:[{
scale:.6666666666666666
}
],bottom:.5,color:'black',justifyContent:'center',alignItems:'center',lineHeight:'ios'===t.Platform.OS?12:11.5
}
),showIcon:{
width:7,height:7,zIndex:1
}
,showAvatar:{
height:9,backgroundColor:'#FFDDA9',borderRadius:6,bottom:-30,zIndex:100,justifyContent:'center',alignItems:'center',flexDirection:'row',paddingLeft:1,paddingRight:1,position:'relative'
}
,showRadius:{
position:'absolute',width:32,height:34,zIndex:99
}
,avaImg:{
width:32,height:32,borderRadius:24,zIndex:1,top:-5,left:0,overflow:'hidden'
}
,tagText:{
display:'flex',flexDirection:'row',alignItems:'center'
}
,medal:{
width:11.200000000000001,height:13.600000000000001
}
,txtBg:{
height:10.4,backgroundColor:'rgba(249,188,100,0.2)',paddingRight:2.4000000000000004,paddingLeft:5.6000000000000005,borderTopRightRadius:6,borderBottomRightRadius:6,marginLeft:-4.800000000000001,paddingTop:o&&r(d[1]).PlatformUtils.isHarmony()?.8:0
}
,tagTxt:Object.assign({
fontSize:7.2,color:'#825B44',letterSpacing:.3
}
,r(d[1]).PlatformUtils.isHarmony()?{
lineHeight:10.4
}
:{

}
),unLoginHeader:{
position:'relative',justifyContent:'center',width:'100%'
}
,headerImg:{
position:'absolute',top:1.3000000000000007
}
,headerMemberImg:{
position:'absolute',top:-1.6999999999999993
}
,loginHeader:{
position:'relative',justifyContent:'center',height:34.6
}

}
)
}

}
),"d8ed5fe41d3dfac326393c727ac0af6fb25c4885bde028d49a852b4935747430",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),r=_r(d[0])(_r(d[3])),n=_r(d[0])(_r(d[4])),a=_r(d[0])(_r(d[5])),i=_r(d[6]),o=(function(e,t){
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
)(_r(d[7])),l=_r(d[0])(_r(d[8])),s=_r(d[0])(_r(d[9]));
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
// 函数
function u(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(u=function(){
return!!e
}
)()
}
_e.default=(function(o){
// 函数
function c(): any {
var t,a,o,p;
(0,e.default)(this,c);
for(var f=arguments.length,y=new Array(f),h=0;
h<f;
h++)y[h]=arguments[h];
return a=this,o=c,p=[].concat(y),o=(0,n.default)(o),(t=(0,r.default)(a,u()?Reflect.construct(o,p||[],(0,n.default)(a).constructor):o.apply(a,p))).renderHeaderTitle=function(e,t){
return(0,_r(d[10]).jsx)(i.Animated.Text,{
style:[e.myTitle,{
opacity:t
}
],children:(0,_r(d[11]).t)('service')
}
)
}
,t.renderUserName=function(e,r){
var n;
return(0,_r(d[10]).jsx)(i.Text,{
numberOfLines:1,style:[e.userName,null!=r&&null!=(n=r.textStyle)&&n.color&&!t.props.isMember?r.textStyle:null,{
width:_r(d[11]).PlatformUtils.isApp()?'100%':'80%'
}
],children:t.props.userName
}
)
}
,t.renderMyMember=function(e,r){
// 变量
var n: any = t.props,a=n.userInfoClick,o=n.userLevel;
return(0,_r(d[10]).jsxs)(i.TouchableOpacity,{
activeOpacity:1,style:[e.tagText],onPress:function(){
a((0,_r(d[11]).t)('click_head_to_grade_page'))
}
,children:[(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
localSource:s.default.medal,imgStyle:e.medal
}
),(0,_r(d[10]).jsx)(i.View,{
style:[e.txtBg,r&&_r(d[11]).PlatformUtils.isHarmony()&&{
paddingTop:.8
}
],children:(0,_r(d[10]).jsxs)(i.Text,{
style:[e.tagTxt],children:["V",o,(0,_r(d[11]).t)('grade')]
}
)
}
)]
}
)
}
,t.renderText=function(e,t,r){
return e?(0,_r(d[10]).jsx)(i.Text,{
style:[t.showText],children:l.default.truncate(null==r?void 0:r.avatar,{
length:2,omission:''
}
)
}
):null
}
,t.renderIcon=function(e,t,r,n){
return e?(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
imgUri:t,imgStyle:[r.showIcon,{
marginLeft:''!==(null==n?void 0:n.avatarIcon)?2:0
}
]
}
):null
}
,t.renderMember=function(e,r,n,a,o,l,c,u,p){
// 变量
var f: any = t.props,y=f.titleAnimatedValue,h=f.userInfoAnimatedValue,x=f.userInfoClick,v=f.canClick;
return(0,_r(d[10]).jsxs)(i.View,{
style:_r(d[11]).PlatformUtils.isApp()?e.appMemberLoginHeader:e.memberLoginHeader,pointerEvents:v?'none':'box-none',children:[t.renderHeaderTitle(e,y),(0,_r(d[10]).jsx)(i.Animated.View,{
style:[e.cricle,e.headerMemberImg,{
transform:[{
scale:h
}
],opacity:h
}
],children:(0,_r(d[10]).jsxs)(i.TouchableOpacity,{
activeOpacity:1,onPress:function(){
x((0,_r(d[11]).t)('click_head_to_grade_page'))
}
,style:{
width:'100%'
}
,children:[(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
localSource:s.default.vAvater,imgStyle:e.showRadius,isUser:!1
}
),(0,_r(d[10]).jsxs)(i.View,{
style:[e.showAvatar],children:[t.renderText(r,e,n),t.renderIcon(a,o,e,n),(0,_r(d[10]).jsx)(i.Text,{
style:[e.showText,{
marginLeft:l
}
],children:(0,_r(d[11]).t)('members')
}
)]
}
),(0,_r(d[10]).jsx)(i.View,{
style:{
width:32,height:32
}
,children:(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
imgUri:t.props.avaImg,localSource:t.props.avaImg?null:c,imgStyle:e.avaImg,isUser:!0,onLoadSuccess:function(){
t.onLoadResult(!0)
}
,onError:function(){
t.onLoadResult(!1)
}

}
)
}
)]
}
)
}
),(0,_r(d[10]).jsx)(i.TouchableOpacity,{
activeOpacity:1,style:e.userNameBox,onPress:function(){
x((0,_r(d[11]).t)('click_nickname_to_grade_page'))
}
,children:(0,_r(d[10]).jsx)(i.Animated.View,{
style:p,children:t.renderUserName(e,u)
}
)
}
)]
}
)
}
,t.renderLoginHeader=function(e,r,n,a,o,l,s,c,u,p,f){
var y=t.props,h=y.titleAnimatedValue,x=y.userInfoAnimatedValue,v=y.userInfoClick,j=y.canClick,_=y.isMember,w=[e.userNameBoxView,{
transform:[{
translateX:x.interpolate({
inputRange:[0,1],outputRange:[0,28]
}
)
}
],opacity:x
}
];
return(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{
children:_?(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{
children:t.renderMember(e,r,n,a,o,l,u,s,w)
}
):(0,_r(d[10]).jsxs)(i.View,{
style:e.loginHeader,pointerEvents:j?'none':'box-none',children:[t.renderHeaderTitle(e,h),(0,_r(d[10]).jsx)(i.Animated.View,{
style:[{
transform:[{
scale:x
}
],opacity:x
}
,e.headerImg],children:(0,_r(d[10]).jsx)(i.TouchableOpacity,{
activeOpacity:1,onPress:function(){
v((0,_r(d[11]).t)('click_head_to_grade_page'))
}
,style:{
width:'100%'
}
,children:(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
imgUri:t.props.avaImg,imgStyle:e.userAva,localSource:t.props.avaImg?null:p,isUser:!0,onError:function(){
t.onLoadResult(!1)
}
,onLoadSuccess:function(){
t.onLoadResult(!0)
}

}
)
}
)
}
),(0,_r(d[10]).jsx)(i.View,{
style:e.userNameBox,children:(0,_r(d[10]).jsxs)(i.Animated.View,{
style:w,children:[(0,_r(d[10]).jsx)(i.TouchableOpacity,{
activeOpacity:1,onPress:function(){
v((0,_r(d[11]).t)('click_nickname_to_grade_page'))
}
,children:t.renderUserName(e,s)
}
),t.renderMyMember(e,f)]
}
)
}
)]
}
)
}
)
}
,t.onLoadResult=function(e){
// 变量
var r: any = "\u7528\u6237\u5934\u50cf\u52a0\u8f7d\u6210\u529f: "+e+"\u3002\u767b\u5f55\u72b6\u6001: "+t.props.isLogin+", \u5934\u50cf\u5730\u5740\u4e3a\u7a7a: "+_r(d[11]).CommonUtils.isEmpty(t.props.avaImg);
_r(d[11]).RecordUtils.logger("PersonalHead-Title",r)
}
,t.renderUnloginHeader=function(e,r,n,a,o){
var l,s=t.props,c=s.goLogin,u=s.userInfoAnimatedValue,p=s.canClick;
return(0,_r(d[10]).jsxs)(i.View,{
style:e.unLoginHeader,pointerEvents:p?'none':'box-none',children:[t.renderHeaderTitle(e,t.props.titleAnimatedValue),(0,_r(d[10]).jsx)(i.TouchableOpacity,{
activeOpacity:1,onPress:function(){
c((0,_r(d[11]).t)('click_head_to_grade_page'))
}
,style:e.headerImg,children:(0,_r(d[10]).jsx)(i.Animated.View,{
style:{
transform:[{
scale:u
}
],opacity:u
}
,children:(0,_r(d[10]).jsx)(_r(d[12]).FastImageView,{
localSource:o,isUser:!0,imgStyle:e.userAva
}
)
}
)
}
),(0,_r(d[10]).jsx)(i.TouchableOpacity,{
activeOpacity:1,onPress:function(){
c((0,_r(d[11]).t)('click_nickname_to_grade_page'))
}
,style:e.userNameBox,children:(0,_r(d[10]).jsx)(i.Animated.Text,{
style:[e.userName,null!=r&&null!=(l=r.textStyle)&&l.color&&!t.props.isMember?r.textStyle:null,{
transform:[{
translateX:u.interpolate({
inputRange:[0,1],outputRange:[0,28]
}
)
}
],opacity:u
}
],children:n
}
)
}
)]
}
)
}
,t
}
return(0,a.default)(c,o),(0,t.default)(c,[{
key:"render",value:function(){
// 变量
var e: any = this.props,t=e._styles,r=e.mergeStyle,n=e.unLoginText,a=e.newMergeStyle,i=e.isLogin,o=e.showText,l=e.item,s=e.showIcon,c=e.avatarIcon,u=e.marginLeft,p=e.defaultAvatar,f=e.loginDefaultAvatar,y=e.unLoginDefaultAvatar,h=e.isPadH;
return(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{
children:i?(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{
children:this.renderLoginHeader(t,o,l,s,c,u,a,p,f,y,h)
}
):(0,_r(d[10]).jsx)(_r(d[10]).Fragment,{
children:this.renderUnloginHeader(t,r,n,p,y)
}
)
}
)
}

}
])
}
)(o.Component)
}
),"53185fd856513b89b7c4b36692ad11149ae9257eb80a5264f733840e764ff13c",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),i=_r(d[0])(_r(d[3])),n=_r(d[0])(_r(d[4])),r=_r(d[0])(_r(d[5])),o=_r(d[0])(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = f(t);
if(i&&i.has(e))return i.get(e);
var n={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var l: any = r?Object.getOwnPropertyDescriptor(e,o):null;
l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]
}
return n.default=e,i&&i.set(e,n),n
}
)(_r(d[7])),s=_r(d[8]),a=_r(d[0])(_r(d[9])),c=_r(d[0])(_r(d[10])),u=_r(d[0])(_r(d[11])),h=_r(d[0])(_r(d[12]));
// 函数
function f(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(f=function(e){
return e?i:t
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
var y=(function(e){
return e.h5ConfigRma="H5_CONFIG_RMA",e.bpClientWechatOrderSwitch="bp_client_wechat_order_switch",e.exchangeUrlSwitch="switch_to_rn_url",e
}
)(y||{

}
),x=(function(l){
// 函数
function c(i: any): any {
var o,l,a,h;
return(0,t.default)(this,c),l=this,a=c,h=[i],a=(0,r.default)(a),(o=(0,n.default)(l,p()?Reflect.construct(a,h||[],(0,r.default)(l).constructor):a.apply(l,h))).itemlist=[],o.isApp=function(){
return _r(d[13]).PlatformUtils.isApp()
}
,o.isWeb=function(){
// 变量
var e: any = _r(d[13]).CommonUtils.getWindowSize('personal').screenWidth;
return _r(d[13]).PlatformUtils.isPc(e)
}
,o.isPad=function(){
return'medium'===(0,_r(d[13]).screenSize)(o.state.width)
}
,o.isWap=function(){
return'small'===(0,_r(d[13]).screenSize)(o.state.width)
}
,o.isPadH=function(){
return('web'===s.Platform.OS?s.Dimensions.get('window').width:o.state.width)>=('web'===s.Platform.OS?s.Dimensions.get('window').height:o.state.height)
}
,o.receiveRef=function(e){
e&&o.itemlist.push(e)
}
,o.onClose=function(){
o.setState({
isShow:!o.state.isShow
}
)
}
,o._onclick=(function(){
var t=(0,e.default)((function*(e){
o.hmiSpanId=yield u.default.hmiClickOrder(o.props,'begin',e);
// 变量
var t: any = o.props,i=t.clickItem,n=t.isLogin;
if(o.setState({
gotourl:o.switchClick(e)
}
),o.apkGotourlMy=o.switchClick(e),n){
// 变量
var r: any = o.switchClick(e);
if('ic_'===e){
if(o.props.mpUid){
_r(d[13]).CommonUtils.delayGotoPage((function(){
_r(d[13]).RouterUtils.gotoPage(r)
}
))
}
else o.setState({
isShow:!o.state.isShow
}
);
i(e,r)
}
else{
_r(d[13]).CommonUtils.delayGotoPage((function(){
_r(d[13]).RouterUtils.gotoPage(r)
}
)),i(e,r)
}

}
else{
if(o.isApp())o.eventListener=_r(d[13]).LoginUtils.listenLoginStatus((function(e){
!0===e&&!0===o.linkFinished&&(o.linkFinished=!1,_r(d[13]).RouterUtils.gotoPage(o.apkGotourlMy))
}
)),_r(d[13]).RouterUtils.gotoPage('vmall://com.vmall.client/home/login'),i(e);
else{
// 变量
var l: any = document.location.href;
if('ic_'===e){
// 变量
var s: Function = _r(d[13]).Service.webDomain+"account/login?url="+encodeURIComponent(l);
_r(d[13]).CommonUtils.delayGotoPage((function(){
_r(d[13]).RouterUtils.gotoPage(s,!1)
}
))
}
else{
// 变量
var a: any = encodeURIComponent(o.switchClick(e)),c=o.isWeb()?_r(d[13]).Service.webDomain+"account/login?url="+a:_r(d[13]).Service.wapDomain+"account/applogin?url="+a;
i(e),_r(d[13]).RouterUtils.gotoPage(c)
}

}

}
u.default.hmiClickOrder(o.props,'end',e,o.hmiSpanId)
}
));
return function(e){
return t.apply(this,arguments)
}

}
)(),o.switchClick=function(e){
switch(e){
case'ic5':return o.getUrl(_r(d[13]).Service.wapDomain+"member/order?tagId=unpaid",_r(d[13]).Service.webDomain+"member/order?type=unpaid",_r(d[13]).Service.wapDomain+"order/unpaid");
case'ic3':return o.getUrl(_r(d[13]).Service.wapDomain+"member/order?tagId=unreceivce",_r(d[13]).Service.webDomain+"member/order?type=send",_r(d[13]).Service.wapDomain+"member/unreceiptOrder");
case'ic4':return o.getUrl(_r(d[13]).Service.wapDomain+"member/evaluateOrder",_r(d[13]).Service.webDomain+"member/order?type=nocomment",_r(d[13]).Service.wapDomain+"member/evaluateOrder");
case'ic1':return o.state.exchangeRnUrl?o.getUrl(""+_r(d[13]).Service.wapDomain+o.state.exchangeRnUrl,""+_r(d[13]).Service.webDomain+o.state.exchangeRnUrl,""+_r(d[13]).Service.wapDomain+o.state.exchangeRnUrl):o.getUrl(o.state.exchangeUrl,_r(d[13]).Service.webDomain+"member/exchange",_r(d[13]).Service.wapDomain+"member/rma/index?activeIndex=1");
case'ic_':return _r(d[13]).Service.webDomain+"member/orderWeChat";
case'ic2':return o.isWeb()?_r(d[13]).Service.webDomain+"member/recycle/index":_r(d[13]).Service.wapDomain+"member/recycleall/index";
case'all':return o.getUrl(_r(d[13]).Service.wapDomain+"member/order?tagId=all",_r(d[13]).Service.webDomain+"member/order?tagId=all",_r(d[13]).Service.wapDomain+"member/order")
}

}
,o.getExchangeUrl=function(){
return new Promise((function(e){
_r(d[13]).HttpService.querySystemConfig("['"+y.h5ConfigRma+"','"+y.bpClientWechatOrderSwitch+"','"+_r(d[13]).BBD_KEY.COMMENT_FEATURE_SHOW_POINTS+"','"+y.exchangeUrlSwitch+"']").then((function(t){
if(t.systemConfigInfos){
var i,n,r,l='1'===(null==(i=t.systemConfigInfos[""+y.h5ConfigRma])?void 0:i.systemConfigValue)?_r(d[13]).Service.wapDomain+"member/rma/index?activeIndex=1":_r(d[13]).Service.wapDomain+"member/rma/index",s='1'===(null==(n=t.systemConfigInfos[""+y.exchangeUrlSwitch])?void 0:n.systemConfigValue)?'sc/exchange/index.html':'';
o.setState({
isCommentNewStyle:'1'===(null==(r=t.systemConfigInfos[""+_r(d[13]).BBD_KEY.COMMENT_FEATURE_SHOW_POINTS])?void 0:r.systemConfigValue),exchangeUrl:t.systemConfigInfos[""+y.h5ConfigRma]?l:_r(d[13]).Service.wapDomain+"member/rma/index",showApplet:t.systemConfigInfos[""+y.bpClientWechatOrderSwitch]?t.systemConfigInfos[""+y.bpClientWechatOrderSwitch].systemConfigValue:'0',exchangeRnUrl:s
}
),e({

}
)
}

}
)).finally((function(){
o.setState({
isFinish:!0
}
)
}
))
}
))
}
,o.initWidth=function(e){
o.state.width!==e&&o.setState({
width:e
}
)
}
,o.state={
width:_r(d[13]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[13]).CommonUtils.getWindowSize('personal').screenHeight,normalColor:_r(d[13]).SuitStyle.C17.color,normalCol:_r(d[13]).SuitStyle.C11.color,unpaidOrderCount:'',unreceiptOrderCount:'',rmaAppCount:'',count:'',isShow:!1,gotourl:'',exchangeUrl:_r(d[13]).Service.wapDomain+"member/rma/index",exchangeRnUrl:'',showApplet:'0',isCommentNewStyle:!1,isFinish:!1
}
,o.linkFinished=!0,o
}
return(0,o.default)(c,l),(0,i.default)(c,[{
key:"componentDidMount",value:(x=(0,e.default)((function*(){
// 变量
var e: any = this;
this.state.width!==_r(d[13]).CommonUtils.getWindowSize('personal').screenWidth&&this.setState({
width:_r(d[13]).CommonUtils.getWindowSize('personal').screenWidth,height:_r(d[13]).CommonUtils.getWindowSize('personal').screenHeight
}
),this.eventListener=_r(d[13]).LoginUtils.listenLoginStatus((function(t){
!1===t&&!1===e.linkFinished&&(e.linkFinished=!0,e.apkGotourlMy='')
}
)),this.cancelLoginListener=s.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
var i;
!t||'login'!==t.service||'loginOut'!==t.action||null!=(i=t.param)&&i.isLogin||(e.linkFinished=!0,e.apkGotourlMy='')
}
)),this.getExchangeUrl()
}
)),function(){
return x.apply(this,arguments)
}
)
}
,{
key:"componentDidUpdate",value:(f=(0,e.default)((function*(){

}
)),function(){
return f.apply(this,arguments)
}
)
}
,{
key:"componentWillUnmount",value:function(){
var e,t;
null==(e=this.eventListener)||e.remove(),null==(t=this.cancelLoginListener)||t.remove()
}

}
,{
key:"renderMpUidInfo",value:function(e){
return(0,_r(d[14]).jsxs)(s.View,{
style:[e.popUpWindow],children:[(0,_r(d[14]).jsx)(s.TouchableOpacity,{
activeOpacity:1,style:[e.popUpWindowIcon],onPress:this.onClose,children:(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:"cancel1",width:"20",height:"20"
}
)
}
),(0,_r(d[14]).jsx)(_r(d[15]).FastImageView,{
imgStyle:[e.popUpWindowImage],imgUri:_r(d[16]).urlData.popUpWindowImage
}
),(0,_r(d[14]).jsxs)(s.View,{
style:[e.popUpWindowText],children:[(0,_r(d[14]).jsx)(s.Text,{
style:[e.popUpWindowHeight],children:(0,_r(d[13]).t)('bind')
}
),(0,_r(d[14]).jsxs)(s.Text,{
style:[e.popUpWindowHeight],children:[(0,_r(d[13]).t)('after_binding'),(0,_r(d[14]).jsx)(s.Text,{
style:{
color:'#ca141d'
}
,children:(0,_r(d[13]).t)('re_login')
}
),(0,_r(d[13]).t)('view_mp_orders')]
}
)]
}
),(0,_r(d[14]).jsx)(s.TouchableOpacity,{
activeOpacity:1,style:[e.popUpWindowButton],onPress:this.onClose,children:(0,_r(d[14]).jsx)(s.Text,{
style:[e.popUpWindowButtonText],children:(0,_r(d[13]).t)('i_know')
}
)
}
)]
}
)
}

}
,{
key:"getUrl",value:function(e,t,i){
return this.isApp()?e:this.isWeb()?t:i
}

}
,{
key:"fixedNum",value:function(e){
// 变量
var t: any = arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;
return 0===e?Number(e).toFixed(t):e>99?'99+':e
}

}
,{
key:"render",value:function(){
var e=this,t=this.props,i=t.unpaidOrderCount,n=t.unreceiptOrderCount,r=t.rmaAppCount,o=t.count,l=t.isLogin,c=t.latestOrderLogList,u=this.state,f=u.normalColor,p=u.normalCol,y=u.isCommentNewStyle,x=u.width,v=u.isFinish,w=_r(d[13]).DarkStore.darkBool,S=(_r(d[13]).PlatformUtils.isApp()||_r(d[13]).PlatformUtils.isWap(x))&&y,C=S?(0,_r(d[13]).t)('evaluteGift'):this.fixedNum(o),b=_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE?103:55,T=this.isWeb()?48:40,O={
width:this.isWeb()?192:b
}
,k={
alignItems:'center',justifyContent:'center'
}
,j=(this.state.width-16-32)/5,_={
bigFontBoxStyle:{
alignItems:'center',justifyContent:'center',width:b
}
,isLogin:l,unpaidOrderCount:i,bigFontMarkStyle:{
borderRadius:16,backgroundColor:'#CE0E2D',height:16,paddingTop:1,position:'absolute',top:-3,left:55
}
,markStyle:{
paddingLeft:6,paddingRight:6
}
,iconWidth:T,isDarkTheme:w,normalColor:f,normalCol:p,count:o,isFinish:v,evaluteText:C,isNewStyle:S,rmaAppCount:r,iconCenter:k,itemStyle:O,unreceiptOrderCount:n,itemBoxWidth:j
}
;
return(0,_r(d[14]).jsx)(_r(d[13]).WithTheme,{
themeStyles:h.default,children:function(t,i,n){
e.initWidth(n);
// 变量
var r: any = e.getStyleContent(t),o=n-2*('small'===(0,_r(d[13]).screenSize)(n)?16:24)-24;
return(0,_r(d[14]).jsxs)(s.View,{
style:[{
width:'100%'
}
,t.containerPad],children:[(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
style:t.title,activeOpacity:1,onPress:function(){
e._onclick('all')
}
,children:[(0,_r(d[14]).jsx)(s.Text,{
style:[e.isWeb()?t.titleLeftWeb:t.titleLeft],children:(0,_r(d[13]).t)('my_orders')
}
),e.renderAllOrder(t,w)]
}
),_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE?(0,_r(d[14]).jsx)(_r(d[14]).Fragment,{
children:(0,_r(d[14]).jsxs)(s.View,{
style:[t.svgStyle],children:[e.renderPedingPaymentForBigTxt(_,t,r),e.renderToBeReceivedForBigTxt(_,t,r),e.renderToBeEvaluatedForBigTxt(_,t,r),e.renderReturnRefundForBigTxt(_,t,r),e.renderRecyclingOrderForBigTxt(_,t,r)]
}
)
}
):(0,_r(d[14]).jsxs)(s.View,{
style:[t.svgStyle],children:[e.renderPedingPayment(_,t,r),e.renderToBeReceived(_,t,r),e.renderToBeEvaluated(_,t,r),e.renderReturnRefundFor(_,t,r),e.isWeb()?(0,_r(d[14]).jsx)(_r(d[14]).Fragment,{
children:'1'===e.state.showApplet?(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return e._onclick('ic_')
}
,ref:e.receiveRef,style:k,children:[(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_',width:T,height:T,normalCol:w?f:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:O,children:(0,_r(d[14]).jsx)(s.Text,{
style:r,numberOfLines:2,children:(0,_r(d[13]).t)('applet')
}
)
}
)]
}
):null
}
):null,(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return e._onclick('ic2')
}
,ref:e.receiveRef,style:k,children:[(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_2',width:T,height:T,normalCol:w?f:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:O,children:(0,_r(d[14]).jsx)(s.Text,{
style:r,numberOfLines:2,children:(0,_r(d[13]).t)('recycling_order')
}
)
}
)]
}
)]
}
),!e.isWeb()&&null!=c&&c.length?(0,_r(d[14]).jsx)(a.default,{
swiperWidth:o,latestOrderLogList:c
}
):null,e.isWeb()?(0,_r(d[14]).jsx)(s.View,{
style:[e.state.isShow?t.page:t.hide,{
alignItems:'center',width:'100%',top:-200
}
],children:e.renderMpUidInfo(t)
}
):null]
}
)
}

}
)
}

}
,{
key:"renderReturnRefundFor",value:function(e,t,i){
// 变量
var n: any = this,r=e.iconWidth,o=e.isDarkTheme,l=e.normalColor,a=e.rmaAppCount,c=e.isLogin,u=e.markStyle,h=e.iconCenter,f=e.itemStyle,p=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic1')
}
,ref:this.receiveRef,style:h,children:[c&&a>0?(0,_r(d[14]).jsx)(s.View,{
style:[t.mark,a>9?u:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(a)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
height:r,width:r,iconName:'ic_1',normalCol:o?l:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:f,children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('return_refund')
}
)
}
)]
}
)
}

}
,{
key:"renderToBeEvaluated",value:function(e,t,i){
var n=this,r=e.iconWidth,o=e.isDarkTheme,l=e.normalColor,a=e.isFinish,c=e.count,u=e.isNewStyle,h=e.evaluteText,f=e.isLogin,p=e.markStyle,y=e.iconCenter,x=e.itemStyle,v=e.normalCol,w=u?{
paddingHorizontal:2
}
:p;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic4')
}
,ref:this.receiveRef,style:y,children:[f&&c>0&&a?(0,_r(d[14]).jsx)(s.View,{
style:[c>9?w:{
width:16
}
,u?t.evaluteGift:t.mark],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:h
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
width:r,iconName:'ic_4',height:r,normalCol:o?l:v
}
),(0,_r(d[14]).jsx)(s.View,{
style:x,children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('to_be_evaluated')
}
)
}
)]
}
)
}

}
,{
key:"renderToBeReceived",value:function(e,t,i){
// 变量
var n: any = this,r=e.iconWidth,o=e.isDarkTheme,l=e.normalColor,a=e.unreceiptOrderCount,c=e.isLogin,u=e.markStyle,h=e.iconCenter,f=e.itemStyle,p=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic3')
}
,ref:this.receiveRef,style:h,children:[c&&a>0?(0,_r(d[14]).jsx)(s.View,{
style:[t.mark,a>9?u:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(a)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_3',width:r,height:r,normalCol:o?l:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:f,children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('to_be_received')
}
)
}
)]
}
)
}

}
,{
key:"renderPedingPayment",value:function(e,t,i){
// 变量
var n: any = this,r=e.iconWidth,o=e.isDarkTheme,l=e.normalColor,a=e.unpaidOrderCount,c=e.isLogin,u=e.markStyle,h=e.iconCenter,f=e.itemStyle,p=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic5')
}
,ref:this.receiveRef,style:h,children:[c&&a>0?(0,_r(d[14]).jsx)(s.View,{
style:[t.mark,a>9?u:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(a)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_5',width:r,height:r,normalCol:o?l:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:f,children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('peding_payment')
}
)
}
)]
}
)
}

}
,{
key:"renderRecyclingOrderForBigTxt",value:function(e,t,i){
// 变量
var n: any = this,r=e.bigFontBoxStyle,o=e.iconWidth,l=e.isDarkTheme,a=e.normalColor,c=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic2')
}
,ref:this.receiveRef,style:r,children:[(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_2',width:o,height:o,normalCol:l?a:c
}
),(0,_r(d[14]).jsx)(s.View,{
children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('recycling_order')
}
)
}
)]
}
)
}

}
,{
key:"renderReturnRefundForBigTxt",value:function(e,t,i){
// 变量
var n: any = this,r=e.bigFontBoxStyle,o=e.isLogin,l=e.bigFontMarkStyle,a=e.markStyle,c=e.rmaAppCount,u=e.iconWidth,h=e.isDarkTheme,f=e.normalColor,p=e.normalCol,y=e.itemBoxWidth;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic1')
}
,ref:this.receiveRef,style:r,children:[o&&c>0?(0,_r(d[14]).jsx)(s.View,{
style:[l,c>9?a:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(c)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_1',width:u,height:u,normalCol:h?f:p
}
),(0,_r(d[14]).jsx)(s.View,{
style:{
width:y
}
,children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('return_refund')
}
)
}
)]
}
)
}

}
,{
key:"renderToBeEvaluatedForBigTxt",value:function(e,t,i){
// 变量
var n: any = this,r=e.bigFontBoxStyle,o=e.isLogin,l=e.count,a=e.isFinish,c=e.isNewStyle,u=e.evaluteText,h=e.bigFontMarkStyle,f=e.markStyle,p=e.iconWidth,y=e.isDarkTheme,x=e.normalColor,v=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic4')
}
,ref:this.receiveRef,style:r,children:[o&&l>0&&a?(0,_r(d[14]).jsx)(s.View,{
style:[l>9?f:{
width:16
}
,c?t.evaluteGift:h],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:u
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:'ic_4',width:p,height:p,normalCol:y?x:v
}
),(0,_r(d[14]).jsx)(s.View,{
children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('to_be_evaluated')
}
)
}
)]
}
)
}

}
,{
key:"renderToBeReceivedForBigTxt",value:function(e,t,i){
// 变量
var n: any = this,r=e.bigFontBoxStyle,o=e.isLogin,l=e.unreceiptOrderCount,a=e.bigFontMarkStyle,c=e.markStyle,u=e.iconWidth,h=e.isDarkTheme,f=e.normalColor,p=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic3')
}
,ref:this.receiveRef,style:r,children:[o&&l>0?(0,_r(d[14]).jsx)(s.View,{
style:[a,l>9?c:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(l)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
width:u,height:u,iconName:'ic_3',normalCol:h?f:p
}
),(0,_r(d[14]).jsx)(s.View,{
children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('to_be_received')
}
)
}
)]
}
)
}

}
,{
key:"renderPedingPaymentForBigTxt",value:function(e,t,i){
// 变量
var n: any = this,r=e.bigFontBoxStyle,o=e.isLogin,l=e.unpaidOrderCount,a=e.bigFontMarkStyle,c=e.markStyle,u=e.iconWidth,h=e.isDarkTheme,f=e.normalColor,p=e.normalCol;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
return n._onclick('ic5')
}
,ref:this.receiveRef,style:r,children:[o&&l>0?(0,_r(d[14]).jsx)(s.View,{
style:[a,l>9?c:{
width:16
}
],children:(0,_r(d[14]).jsx)(s.Text,{
style:[t.markText],children:this.fixedNum(l)
}
)
}
):null,(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
height:u,iconName:'ic_5',width:u,normalCol:h?f:p
}
),(0,_r(d[14]).jsx)(s.View,{
children:(0,_r(d[14]).jsx)(s.Text,{
style:i,numberOfLines:2,children:(0,_r(d[13]).t)('peding_payment')
}
)
}
)]
}
)
}

}
,{
key:"renderAllOrder",value:function(e,t){
// 变量
var i: any = this;
return(0,_r(d[14]).jsxs)(s.TouchableOpacity,{
activeOpacity:1,onPress:function(){
i._onclick('all')
}
,style:[_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE?e.titleRightScale:e.titleRight,_r(d[13]).PlatformUtils.isHarmony()&&{
alignItems:'center',paddingRight:12
}
],children:[(0,_r(d[14]).jsx)(s.Text,{
style:[_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE?e.allScale:e.all],children:(0,_r(d[13]).t)('all_orders')
}
),(0,_r(d[14]).jsx)(s.View,{
style:{
marginTop:_r(d[13]).fontStore.fontMutiple>_r(d[13]).FONT_MUTIPLE.FONT_LEVEL_ONE||_r(d[13]).PlatformUtils.isHarmony()?0:2,marginRight:_r(d[13]).PlatformUtils.isHarmony()?-12:0,flexShrink:0
}
,children:(0,_r(d[14]).jsx)(_r(d[15]).SvgIcon,{
iconName:"Webarrow",width:"12",height:"24",normalCol:this.isWeb()?'rgba(0,0,0,0.90)':'rgba(0,0,0,0.20)',viewBox:'0 0 512 1024'
}
)
}
)]
}
)
}

}
,{
key:"getStyleContent",value:function(e){
return this.isWeb()?e.contentWeb:e.content
}

}
]);
var f,x
}
)(l.PureComponent);
_e.default=(0,_r(d[13]).componentautoscaling)((0,_r(d[13]).monitor)(c.default)((0,_r(d[13]).itemExposeHoc)(x)))
}
),"c5620bceee068fccdedc246d918d6450decf9fca895cd8db9bc7f98b17e9c827",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","761510228f57ab575fbf2c585b90457d4b99c7f7d389bf524969d81576a3adff","15bb4e6ecedeb3dcfc818257008a258e85c4192499d1ce300b203def4c784757","c274e8b920e3421ee6cdf72bd8b22c213b324ec370354ecc7b5e09a8c87ea80c","d49ba6a2a3aa59c5136f312d0a924610c293106462250d2564f2f0d2f883d80a","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","efcb32aeed3661ad9e832f5e58fed73627403a07152933e884623eba27326a42"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
var e=_r(d[0])(_r(d[1])),t=_r(d[0])(_r(d[2])),r=_r(d[0])(_r(d[3])),i=_r(d[0])(_r(d[4])),n=_r(d[0])(_r(d[5])),o=_r(d[0])(_r(d[6])),s=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var r: any = c(t);
if(r&&r.has(e))return r.get(e);
var i={
__proto__:null
}
,n=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var o in e)if("default"!==o&&{

}
.hasOwnProperty.call(e,o)){
// 变量
var s: Function = n?Object.getOwnPropertyDescriptor(e,o):null;
s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=e[o]
}
return i.default=e,r&&r.set(e,i),i
}
)(_r(d[7])),l=_r(d[8]),a=_r(d[0])(_r(d[9]));
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
// 函数
function u(): any {
try{
var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){

}
)))
}
catch(e){

}
return(u=function(){
return!!e
}
)()
}
var h=l.Dimensions.get('window'),p=(function(s){
// 函数
function c(r: any): any {
var o,s,p,f;
return(0,t.default)(this,c),s=this,p=c,f=[r],p=(0,n.default)(p),(o=(0,i.default)(s,u()?Reflect.construct(p,f||[],(0,n.default)(s).constructor):p.apply(s,f))).isDragging=!1,o.gestureListener=new(_r(d[10]).Listener)('orderSchedule'),o.imgListWap=[],o.activeImgColorList=[],o.isWeb=function(){
// 变量
var e: any = _r(d[10]).CommonUtils.getWindowSize(_r(d[10]).PAGE_TYPE.personal).screenWidth;
return _r(d[10]).PlatformUtils.isPc(e)
}
,o.refScrollView=function(e){
o.scrollView=e
}
,o.scrollBeginDrag=(function(){
var t=(0,e.default)((function*(e){
o.isDragging=!0,o.gestureListener.triggerEvent('onBegin',{
value:e
}
),o.stopTimer()
}
));
return function(e){
return t.apply(this,arguments)
}

}
)(),o.scrollEndDrag=function(e){
o.gestureListener.triggerEvent('onRelease',{
value:e
}
),o.startTimer()
}
,o.onAnimatinonEnd=function(e){
o.isDragging=!1;
var t=e.nativeEvent.contentOffset.x,r=Math.round(t/o.props.swiperWidth),i={
currentPage:r
}
;
i.currentPage=o.fixFirstAndLastPos(r),o.setState(i)
}
,o.fixFirstAndLastPos=function(e){
if(null!==o.scrollView){
var t,r=e;
if(0===e)r=o.imgListWap.length-2,null==(t=o.scrollView)||t.scrollTo({
x:r*o.props.swiperWidth,y:0,animated:!1
}
);
return e===o.imgListWap.length-1&&(r=1,o.scrollTimer=setTimeout((function(){
var e;
null==(e=o.scrollView)||e.scrollTo({
x:r*o.props.swiperWidth,y:0,animated:!1
}
)
}
),100)),r
}

}
,o.renderSwiperDot=function(e,t){
return(0,_r(d[11]).jsx)(_r(d[12]).SwiperDots,{
activeImgColorList:o.activeImgColorList,currentPage:o.state.currentPage,imgList:e,width:t,isHarmonyStyle:!0,activeDotColor:'red',gestureEvent:o.gestureListener,defaultDotColor:_r(d[10]).CommonUtils.colorRgba('#000000',.1)
}
)
}
,o.clickToInfoPage=function(e){
// 变量
var t: any = _r(d[10]).Service.wapDomain+"bpreact/order/trace?orderCode="+e;
_r(d[10]).RouterUtils.gotoPage(t)
}
,o.renderOneItem=function(e,t){
return(0,_r(d[11]).jsx)(l.View,{
style:e.scheduleContent,children:(0,_r(d[11]).jsx)(l.View,{
style:e.scheduleBody,children:t
}
)
}
)
}
,o.renderScheduleList=function(e,t,r){
// 变量
var i: any = o.props,n=i.latestOrderLogList,s=i.swiperWidth;
return _r(d[10]).PlatformUtils.isWap(h.width)?(0,_r(d[11]).jsx)(l.View,{
style:e.scheduleContent,children:(0,_r(d[11]).jsx)(l.View,{
style:e.scheduleSwiper,children:(0,_r(d[11]).jsx)(a.default,{
from:1,loop:!0,timeout:7,auto:!0,controlsProps:{
prevPos:!1,nextPos:!1,dotsTouchable:!0,dotProps:{
badgeStyle:e.dot,containerStyle:e.dotBox
}
,dotActiveStyle:e.activeDot
}
,imgListViwApp:t,springConfig:{
bounciness:1
}
,children:t
}
)
}
)
}
):(0,_r(d[11]).jsx)(l.View,{
style:e.scheduleViewContent,children:(0,_r(d[11]).jsxs)(l.View,{
style:[{
width:s
}
,e.scheduleViewBody],children:[(0,_r(d[11]).jsx)(l.ScrollView,{
ref:o.refScrollView,style:[{
width:s
}
,e.scheduleSwiperBody],scrollEventThrottle:16,horizontal:!0,contentOffset:{
x:s,y:0
}
,showsHorizontalScrollIndicator:!1,pagingEnabled:!0,onScrollBeginDrag:o.scrollBeginDrag,onScrollEndDrag:o.scrollEndDrag,onMomentumScrollEnd:o.onAnimatinonEnd,onScroll:function(e){
o.gestureListener.triggerEvent('onMove',{
value:e
}
),o.onScroll(e)
}
,removeClippedSubviews:o.getRemoveClippedSubviews(r),children:t
}
,null==n?void 0:n.length),o.renderSwiperDot(n,s)]
}
)
}
)
}
,o.state={
currentPage:1
}
,o
}
return(0,o.default)(c,s),(0,r.default)(c,[{
key:"componentWillMount",value:function(){
this.startTimer(),this._gestureHandlers=l.PanResponder.create({
onStartShouldSetPanResponder:function(){
return!0
}
,onMoveShouldSetPanResponderCapture:function(){
return!0
}

}
)
}

}
,{
key:"componentDidUpdate",value:function(){
this.startTimer()
}

}
,{
key:"componentWillUnmount",value:function(){
this.scrollTimer&&clearTimeout(this.scrollTimer),this.timerNavigateTo&&clearTimeout(this.timerNavigateTo),this.timerSchedule&&clearTimeout(this.timerSchedule)
}

}
,{
key:"stopTimer",value:function(){
this.timerSchedule&&clearTimeout(this.timerSchedule)
}

}
,{
key:"startTimer",value:function(){
// 变量
var e: any = this,t=this.props,r=t.latestOrderLogList,i=t.swiperWidth;
return!_r(d[10]).PlatformUtils.isWap(h.width)&&null!=r&&r.length&&(this.stopTimer(),this.timerSchedule=setTimeout((function(){
var t,r,n,o=(t=e.state.currentPage+1)*i;
t===e.imgListWap.length-1?null==(r=e.scrollView)||r.scrollTo({
x:e.imgListWap.length*i,y:0,animated:!0
}
):null==(n=e.scrollView)||n.scrollTo({
x:o,y:0,animated:!0
}
)
}
),7e3)),!0
}

}
,{
key:"onScroll",value:function(e){
if(!this.isDragging){
var t=e.nativeEvent.contentOffset.x,r=Math.round(t/this.props.swiperWidth),i={
currentPage:r
}
;
i.currentPage=this.fixFirstAndLastPos(r),this.setState(i)
}

}

}
,{
key:"getRemoveClippedSubviews",value:function(e){
return!!_r(d[10]).PlatformUtils.isAndroid()&&e
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=(0,_r(d[13]).WebScheduleStyle)(_r(d[10]).DarkStore.theme),r=0,i=this.props,n=i.latestOrderLogList,o=i.swiperWidth;
if(n.length<=1)this.imgListWap=n;
else{
// 变量
var s: Function = [n[0]],a=[n[n.length-1]];
this.imgListWap=a.concat(n,s),r=1
}
var c,u=this.imgListWap.length,p=new Set;
1===r&&(p.add(1),p.add(u-2)),c=!p.has(this.state.currentPage);
var f=this.imgListWap.map((function(r,i){
var n={
customImg:r.customImg,photoPath:r.photoPath,photoName:r.photoName
}
,s=r.updateDate?_r(d[10]).TimeUtils.formatDate(new Date(r.updateDate.replace(/-/g,'/'))):'',a=(0,_r(d[10]).handleImgUrl)(n);
return e.activeImgColorList[i]=_r(d[10]).DarkStore.theme.C17.color,(0,_r(d[11]).jsx)(l.TouchableOpacity,Object.assign({
style:t.scheduleItem,activeOpacity:1,onPress:function(){
return e.clickToInfoPage(r.orderCode)
}

}
,e._gestureHandlers.panHandlers,{
children:(0,_r(d[11]).jsxs)(l.View,{
style:[{
width:o
}
,t.scheduleArea],children:[(0,_r(d[11]).jsx)(_r(d[12]).FastImageView,{
imgUri:a,imgStyle:t.prdImg
}
),(0,_r(d[11]).jsxs)(l.View,{
style:t.scheduleStatus,children:[(0,_r(d[11]).jsxs)(l.View,{
style:t.scheduleDate,children:[(0,_r(d[11]).jsx)(l.Text,{
style:[_r(d[10]).PlatformUtils.isWap(h.width)?t.displayStatusDescWap:t.displayStatusDesc],children:r.displayStatusDesc
}
),(0,_r(d[11]).jsx)(l.Text,{
style:t.updateDate,children:s
}
)]
}
),(0,_r(d[11]).jsx)(l.View,{
style:t.scheduleDesc,children:(0,_r(d[11]).jsx)(l.Text,{
style:t.progressDesc,numberOfLines:_r(d[10]).fontStore.fontMutiple>_r(d[10]).FONT_MUTIPLE.FONT_LEVEL_ONE?2:1,ellipsizeMode:'tail',children:r.progressDesc
}
)
}
)]
}
)]
}
)
}
))
}
));
return 1===u?this.renderOneItem(t,f):this.renderScheduleList(t,f,c)
}

}
])
}
)(s.PureComponent);
_e.default=p
}
),"761510228f57ab575fbf2c585b90457d4b99c7f7d389bf524969d81576a3adff",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","c895ba994259e792b73a497855d6ccf89bfa5e4282b1a89381209382059ee75e","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","ee8446177b368580e16fc3906307f049ee7d3bcaab95c41f83de20933e424df0","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a","39c9807baa0db375a09f9649702b4954adb1994383b2438d9e5a7711526d2d6d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.WebScheduleStyle=void 0;
// 变量
var o: any = r(d[0]);
e.WebScheduleStyle=function(t){
return o.StyleSheet.create({
scheduleContent:{
width:'100%',paddingBottom:12,paddingLeft:12,paddingRight:12,borderRadius:8
}
,scheduleViewContent:{
width:'100%',paddingBottom:3,paddingLeft:12,paddingRight:12,borderRadius:8,overflow:'hidden'
}
,scheduleViewBody:{
paddingBottom:9,overflow:'hidden'
}
,scheduleSwiper:{
height:56,width:'100%',borderRadius:8,backgroundColor:t.C32.color,opacity:t.C83.opacity
}
,scheduleSwiperBody:{
borderRadius:8,backgroundColor:t.C32.color,opacity:t.C83.opacity
}
,scheduleBody:{
width:'100%',borderRadius:8,backgroundColor:t.C32.color,opacity:t.C83.opacity
}
,scheduleStatus:{
marginLeft:8,marginRight:12,marginTop:12,marginBottom:12,justifyContent:'center',flex:1
}
,scheduleDesc:{
flex:1
}
,dotBox:{
bottom:7,margin:0
}
,dot:{
backgroundColor:r(d[1]).CommonUtils.colorRgba(t.C76.color,.1),minWidth:4,width:4,height:4,borderRadius:4,marginLeft:4,marginRight:4
}
,activeDot:{
backgroundColor:t.C42.color,width:8,height:4,borderRadius:4,marginLeft:4,marginRight:4
}
,prdImg:{
width:48,height:48,marginTop:'auto',marginBottom:'auto'
}
,scheduleArea:{
flexDirection:'row'
}
,scheduleItem:{
marginTop:'auto',marginBottom:'auto'
}
,scheduleDate:{
alignItems:'center',flexDirection:'row',marginBottom:2
}
,displayStatusDesc:{
color:t.C11.color,fontSize:r(d[1]).CommonUtils.getScaleSize(t.T4.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE),fontWeight:'500'
}
,displayStatusDescWap:{
color:t.C11.color,fontSize:r(d[1]).CommonUtils.getScaleSize(t.T4.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE),fontWeight:'500',lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T4.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE)
}
,updateDate:{
color:t.C11.color,fontSize:r(d[1]).CommonUtils.getScaleSize(t.T2.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE),fontWeight:'400',opacity:t.C13.opacity,marginLeft:8,lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T4.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE)
}
,progressDesc:{
color:t.C11.color,fontSize:r(d[1]).CommonUtils.getScaleSize(t.T2.fontSize,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE),fontWeight:'400',opacity:t.C13.opacity,lineHeight:r(d[1]).CommonUtils.getScaleSize(t.T2.lineHeight,r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FIVE)
}

}
)
}

}
),"39c9807baa0db375a09f9649702b4954adb1994383b2438d9e5a7711526d2d6d",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var n: any = r(d[0]);
e.default={
clickItem:function(n,x){
var c=t(),l={
index:null,indexName:null
}
;
return'ic5'===n?(l.indexName='\u5f85\u4ed8\u6b3e',l.index='2'):'ic3'===n?(l.indexName='\u5f85\u6536\u8d27',l.index='3'):'ic4'===n?(l.indexName='\u5f85\u8bc4\u4ef7',l.index='4'):l=o(l,n),{
data:{
actionCode:c,actionName:'\u70b9\u51fb\u6211\u7684\u8ba2\u5355\u4e0a\u62a5',eventType:r(d[1]).EVENT_TYPE.EVENT_TYPE_CLICK,pageId:String(this.props.pageId),content:{
comId:'personalInfo_myOrder',gotoURL:x||'',index:l.index,indexName:l.indexName
}
,pageCatCode:'p_personalCenter',pageCatName:'\u4e2a\u4eba\u4e2d\u5fc3',resSiteCode:'s_personalCenter_myorder',resSiteName:'\u6211\u7684\u8ba2\u5355'
}

}

}

}
;
// 函数
function t(): any {
return r(d[1]).PlatformUtils.isApp()?'110000101':r(d[1]).PlatformUtils.isPc(n.Dimensions.get('window').width)?'310000101':'210000101'
}
// 函数
function o(n: any, t: any): any {
return'ic1'===t?(n.indexName='\u9000\u6362/\u9000\u6b3e',n.index='5'):'ic2'===t?(n.indexName='\u56de\u6536\u5355',n.index='6'):'all'===t?(n.indexName='\u5168\u90e8\u8ba2\u5355',n.index='1'):'ic_'===t&&(n.indexName='\u5c0f\u7a0b\u5e8f',n.index='7'),n
}

}
),"15bb4e6ecedeb3dcfc818257008a258e85c4192499d1ce300b203def4c784757",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
var t=function(t){
return{
ic1:'\u9000\u6362/\u9000\u6b3e',ic2:'\u56de\u6536\u5355',ic3:'\u5f85\u6536\u8d27',ic4:'\u5f85\u8bc4\u4ef7',ic5:'\u5f85\u4ed8\u6b3e',all:'\u5168\u90e8\u8ba2\u5355',ic_:'\u5c0f\u7a0b\u5e8f'
}
[t]
}
;
e.default={
hmiClickOrder:function(n,l,c,o){
if(r(d[0]).PlatformUtils.isAndroid()){
// 变量
var u: any = n.pageId,p=n.pageCatName,s=r(d[0]).HmiData.hmiBasicData(r(d[0]).E2EIdStore.curPageType),v=null==s?void 0:s.e2eId,f=null==s?void 0:s.parentSpanId,I=null==s?void 0:s.category,h=null==s?void 0:s.tagData;
null==h||h.push('\u6211\u7684\u8ba2\u5355');
var _=t(c);
return _&&(null==h||h.push(_)),r(d[0]).DeviceUtils.hmiLog({
e2eId:v,parentSpanId:f,stage:l,name:'click',reportNow:'true',spanId:o,content:{
category:I,instanceId:u,instanceName:p,tag:h
}

}
)
}

}

}

}
),"c274e8b920e3421ee6cdf72bd8b22c213b324ec370354ecc7b5e09a8c87ea80c",["11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]),n=t.Dimensions.get('window').width,o=(0,r(d[1]).screenSize)(n),l=r(d[1]).FONT_MUTIPLE.FONT_LEVEL_FOUR;
e.default=function(n){
return t.StyleSheet.create({
containerPad:{
backgroundColor:n.S31.backgroundColor,marginLeft:'small'===o?16:24,marginRight:'small'===o?16:24,borderRadius:'large'===o?null:16,marginTop:12
}
,title:Object.assign({

}
,'large'===o&&{
height:64
}
,{
display:'flex',justifyContent:'space-between',flexDirection:'row',backgroundColor:n.S31.backgroundColor,marginLeft:'large'===o?24:12,marginRight:'large'===o?24:12,marginTop:'large'===o?12:0,paddingBottom:'large'===o?0:8,paddingTop:'large'===o?0:24
}
),titleLeft:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,n.C11,n.T10,{
fontWeight:'700',fontSize:r(d[1]).CommonUtils.getScaleSize(18,l),lineHeight:r(d[1]).CommonUtils.getScaleSize(24,l),color:'rgba(0,0,0,0.9)'
}
),titleLeftWeb:Object.assign({
marginTop:15,fontFamily:r(d[1]).PlatformUtils.isIOS()?null:'HYQiHei-FES'
}
,n.C11,n.T13,{
fontWeight:'500'
}
),titleRightScale:{
marginTop:0,textAlign:'right',flexDirection:'row',alignItems:'center'
}
,titleRight:{
marginTop:'large'===o?20:0,textAlign:'right',flexDirection:'row'
}
,allScale:Object.assign({
marginRight:4,fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,n.C13,n.T7,{
fontSize:r(d[1]).CommonUtils.getScaleSize(n.T8.fontSize,l),lineHeight:r(d[1]).CommonUtils.getScaleSize(19,l)
}
),all:Object.assign({
marginTop:2,marginRight:4,fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,n.C13,n.T7,{
lineHeight:24
}
),svgStyle:{
flexDirection:'row',justifyContent:'space-around',display:'flex',alignItems:'flex-start',marginBottom:'large'===o?24:16,paddingLeft:8,paddingRight:8,paddingTop:'large'===o?12:null
}
,svgWidth:{
width:'medium'===o?48:36
}
,content:Object.assign({
marginTop:4,textAlign:'center'
}
,n.C11,n.T3,{
fontWeight:'400',fontSize:r(d[1]).CommonUtils.getScaleSize(n.T4.fontSize,l),lineHeight:r(d[1]).CommonUtils.getScaleSize(n.T4.lineHeight,l)
}
),contentWeb:Object.assign({
marginTop:10,fontFamily:r(d[1]).PublicFont.fontFamilyMedium,textAlign:'center'
}
,n.C11,n.T8,{
marginBottom:8
}
),mark:{
borderRadius:16,backgroundColor:n.C35.color,height:16,paddingTop:1,position:'absolute',top:-3,left:'large'===o?100:32,zIndex:2
}
,evaluteGift:{
borderRadius:16,backgroundColor:n.C35.color,height:16,paddingTop:1,position:'absolute',top:-3,left:r(d[1]).fontStore.fontMutiple>r(d[1]).FONT_MUTIPLE.FONT_LEVEL_ONE?45:20,paddingHorizontal:2,width:52,zIndex:1
}
,markText:Object.assign({
textAlign:'center'
}
,n.T1,n.C17,{
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
),popUpWindow:{
width:458,height:374,alignItems:'center',position:'absolute',zIndex:333,backgroundColor:'#ffffff'
}
,popUpWindowIcon:{
paddingLeft:430,height:30,justifyContent:'flex-end',paddingRight:10
}
,popUpWindowImage:{
width:136,height:136,alignItems:'center',marginTop:10,marginBottom:20
}
,popUpWindowText:{
alignItems:'center',marginBottom:30
}
,popUpWindowHeight:{
lineHeight:21
}
,popUpWindowButton:{
width:170,height:44,borderWidth:1,alignItems:'center',color:'#3a3a3a'
}
,popUpWindowButtonText:{
lineHeight:44,fontSize:18,margin:'auto'
}
,hide:{
display:'none'
}
,page:{
zIndex:3
}

}
)
}

}
),"d49ba6a2a3aa59c5136f312d0a924610c293106462250d2564f2f0d2f883d80a",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

__d((function(g,_r,_i,_a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0,Object.defineProperty(_e,"getCardHeight",{
enumerable:!0,get:function(){
return _r(d[0]).getCardHeight
}

}
);
var e=_r(d[1])(_r(d[2])),t=_r(d[1])(_r(d[3])),i=_r(d[1])(_r(d[4])),o=_r(d[1])(_r(d[5])),r=_r(d[1])(_r(d[6])),l=(function(e,t){
if(!t&&e&&e.__esModule)return e;
if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e
}
;
// 变量
var i: any = f(t);
if(i&&i.has(e))return i.get(e);
var o={
__proto__:null
}
,r=Object.defineProperty&&Object.getOwnPropertyDescriptor;
for(var l in e)if("default"!==l&&{

}
.hasOwnProperty.call(e,l)){
// 变量
var n: any = r?Object.getOwnPropertyDescriptor(e,l):null;
n&&(n.get||n.set)?Object.defineProperty(o,l,n):o[l]=e[l]
}
return o.default=e,i&&i.set(e,o),o
}
)(_r(d[7])),n=_r(d[1])(_r(d[8])),s=_r(d[1])(_r(d[9])),c=_r(d[1])(_r(d[10])),a=_r(d[11]),u=_r(d[1])(_r(d[12])),p=_r(d[1])(_r(d[13]));
// 函数
function f(e: any): any {
if("function"!=typeof WeakMap)return null;
// 变量
var t: any = new WeakMap,i=new WeakMap;
return(f=function(e){
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
var v=(function(l){
// 函数
function n(t: any): any {
var r,l,s,c;
return(0,e.default)(this,n),l=this,s=n,c=[t],s=(0,o.default)(s),(r=(0,i.default)(l,h()?Reflect.construct(s,c||[],(0,o.default)(l).constructor):s.apply(l,c))).getSize=function(){
return _r(d[14]).CommonUtils.getWindowSize('personal').screenWidth
}
,r.dapReportClickData=function(e,t,i,o){
// 变量
var l: any = r.props.clickItem,n=_r(d[14]).ScreenUtils.isLarge(r.getSize())?'310000101':'210000101';
l(n=_r(d[14]).PlatformUtils.isApp()?'110000101':n,t,e,i,o)
}
,r.handlePress=function(e){
_r(d[14]).RouterUtils.gotoPage(e)
}
,r.onVProGuideClick=function(){
// 变量
var e: any = r.props.vproList,t=_r(d[14]).PlatformUtils.isApp()?(null==e?void 0:e.configInfo)&&JSON.parse(null==e?void 0:e.configInfo):e,i=_r(d[14]).PlatformUtils.isApp()?t.openBtnAppLink:t.openBtnwapLink;
r.dapReportClickData('10',i,'10','0'),_r(d[14]).RouterUtils.gotoPage(i)
}
,r.renderVMember=function(e,t,i){
var o=r.props.vproList,l=r.getItem(o),n=r.getCashBack(),s=r.getCashUrl(l),c=r.getMemberUrl(l),p=_r(d[14]).SuitStyle,f=r.getMemberIcon(i,l),h=r.getOrderIcon(i,l),v='2'===(null==l?void 0:l.showNOrderCashbackSetting)&&h,S='2'===(null==l?void 0:l.showMemberStoreSetting)&&f,y='1'===(null==l?void 0:l.showNOrderCashbackSetting)&&l.nOrderCashback,b={
showMemberIcon:S,memberUrl:c,showMemberText:'1'===(null==l?void 0:l.showMemberStoreSetting)&&l.memberStore,themeSuit:p,item:l,memberIcon:f
}
;
return(0,_r(d[15]).jsxs)(_r(d[15]).Fragment,{
children:[(0,_r(d[15]).jsxs)(a.TouchableOpacity,{
style:[_r(d[14]).ScreenUtils.isMedium(r.getSize())?e.padBlock:e.logBlock,_r(d[14]).ScreenUtils.isMedium(r.getSize())&&_r(d[14]).PlatformUtils.isApp()?{

}
:{
width:r.getBlockWidth()/2
}
,{
paddingTop:v?6:10
}
],onPress:function(){
r.dapReportClickData('11',s,'11','1'),r.handlePress(s)
}
,children:[(0,_r(d[15]).jsxs)(a.View,{
style:e.leftBlock,children:[y?(0,_r(d[15]).jsx)(a.Text,{
style:[e.textTitle,{
color:p.C71.color
}
],children:u.default.truncate(l.nOrderCashback,{
length:2,omission:''
}
)
}
):null,v?(0,_r(d[15]).jsx)(_r(d[16]).FastImageView,{
imgUri:h,imgStyle:e.logoImg,resizeMode:'cover'
}
):null,(0,_r(d[15]).jsx)(a.Text,{
style:[e.logoTitle,{
color:p.C71.color,marginLeft:v?2:0
}
],children:u.default.truncate(null==l?void 0:l.nOrderCashbackTitle,{
length:5,omission:''
}
)
}
),(0,_r(d[15]).jsx)(a.View,{
style:{
paddingTop:_r(d[14]).PlatformUtils.isAndroid()||_r(d[14]).PlatformUtils.isHarmony()?1:0
}
,children:(0,_r(d[15]).jsx)(_r(d[16]).SvgIcon,{
iconName:'ic24-more',width:"12",height:"10",opacity:p.C23.opacity,normalCol:p.C23.color
}
)
}
)]
}
),(0,_r(d[15]).jsx)(a.Text,{
style:[e.description,{
color:p.C13.color
}
,_r(d[14]).ScreenUtils.isMedium(r.getSize())?{
textAlign:'center'
}
:{

}
],ellipsizeMode:'tail',numberOfLines:1,children:n
}
)]
}
),(0,_r(d[15]).jsx)(a.View,{
style:[e.splitline,{
backgroundColor:p.C39.color,opacity:p.C39.opacity,marginTop:16
}
]
}
),r.showMoreMemberInfo(e,b)]
}
)
}
,r.renderGuideVMember=function(e,t,i){
// 变量
var o: any = r.props.vproList,l=_r(d[14]).PlatformUtils.isApp()?(null==o?void 0:o.configInfo)&&JSON.parse(null==o?void 0:o.configInfo):o,n=l.guideTitle||(0,_r(d[14]).t)('members'),s=i?null==l?void 0:l.guideDarkIcon:null==l?void 0:l.guideIcon,c=(null==l?void 0:l.openBtnText)||'\u7acb\u5373\u5f00\u901a',f=!1;
c.length>=6&&(c=c.substr(0,6),f=!0);
// 变量
var h: any = _r(d[14]).SuitStyle,v='2'===(null==l?void 0:l.showGuideSetting)&&s,S='1'===(null==l?void 0:l.showGuideSetting)&&(null==l?void 0:l.guide);
return(0,_r(d[15]).jsxs)(a.TouchableOpacity,{
activeOpacity:1,style:e.guideBg,onPress:r.onVProGuideClick,children:[(0,_r(d[15]).jsxs)(a.View,{
style:[e.guideLeftBlock,{
paddingTop:v?6:10
}
],children:[(0,_r(d[15]).jsxs)(a.View,{
style:e.leftBlock,children:[S?(0,_r(d[15]).jsx)(a.Text,{
style:[e.textTitle,{
color:h.C71.color
}
],children:u.default.truncate(l.guide,{
length:2,omission:''
}
)
}
):null,v?(0,_r(d[15]).jsx)(_r(d[16]).FastImageView,{
imgUri:s,imgStyle:e.logoImg,resizeMode:'cover'
}
):null,(0,_r(d[15]).jsx)(a.Text,{
ellipsizeMode:'clip',numberOfLines:1,style:[e.guideLogoText,{
color:h.C71.color,marginLeft:v?4:0
}
],children:n
}
)]
}
),(0,_r(d[15]).jsx)(a.Text,{
style:[e.guideDescription,{
color:h.C13.color
}
],ellipsizeMode:'tail',numberOfLines:1,children:null==l?void 0:l.guideWords
}
)]
}
),(0,_r(d[15]).jsx)(p.default,{
style:[e.guideRightBlock,{
marginTop:v?14:13.5
}
],colors:['#605144','#1C0A07'],children:(0,_r(d[15]).jsx)(a.Text,{
style:f?e.guideButtonOverlong:e.guideButtonText,children:c
}
)
}
)]
}
)
}
,r
}
return(0,r.default)(n,l),(0,t.default)(n,[{
key:"getBlockWidth",value:function(){
return _r(d[14]).CommonUtils.getWindowSize('personal').screenWidth-(_r(d[14]).ScreenUtils.isMedium(this.getSize())?48:32)
}

}
,{
key:"getCashBack",value:function(){
// 变量
var e: any = this.props.vproList,t=_r(d[14]).PlatformUtils.isApp()?(null==e?void 0:e.configInfo)&&JSON.parse(null==e?void 0:e.configInfo):e;
return(null==t?void 0:t.benefitDescSubTitle)||''
}

}
,{
key:"showMoreMemberInfo",value:function(e,t){
// 变量
var i: any = this,o=t.showMemberIcon,r=t.memberUrl,l=t.showMemberText,n=t.themeSuit,s=t.item,c=t.memberIcon;
return(0,_r(d[15]).jsxs)(a.TouchableOpacity,{
style:[_r(d[14]).ScreenUtils.isMedium(this.getSize())?e.padBlock:e.shopBlock,_r(d[14]).ScreenUtils.isMedium(this.getSize())&&_r(d[14]).PlatformUtils.isApp()?{

}
:{
width:this.getBlockWidth()/2
}
,{
paddingTop:o?6:10
}
],onPress:function(){
i.dapReportClickData('12',r,'12','1'),i.handlePress(r)
}
,children:[(0,_r(d[15]).jsxs)(a.View,{
style:e.leftBlock,children:[l?(0,_r(d[15]).jsx)(a.Text,{
style:[e.textTitle,{
color:n.C71.color
}
],children:u.default.truncate(null==s?void 0:s.memberStore,{
length:2,omission:''
}
)
}
):null,o?(0,_r(d[15]).jsx)(_r(d[16]).FastImageView,{
imgUri:c,imgStyle:e.logoImg,resizeMode:'cover',isUser:!1
}
):null,(0,_r(d[15]).jsx)(a.Text,{
style:[e.logoTitle,{
color:n.C71.color,marginLeft:'2'===(null==s?void 0:s.showMemberStoreSetting)&&c?2:0
}
],children:u.default.truncate(null==s?void 0:s.memberStoreTitle,{
length:5,omission:''
}
)
}
),(0,_r(d[15]).jsx)(a.View,{
style:{
paddingTop:_r(d[14]).PlatformUtils.isAndroid()||_r(d[14]).PlatformUtils.isHarmony()?1:0
}
,children:(0,_r(d[15]).jsx)(_r(d[16]).SvgIcon,{
iconName:'ic24-more',width:"12",height:"10",opacity:n.C23.opacity,normalCol:n.C23.color
}
)
}
)]
}
),(0,_r(d[15]).jsx)(a.Text,{
style:[e.shopDescription,{
color:n.C13.color
}
,_r(d[14]).ScreenUtils.isMedium(this.getSize())?{
textAlign:'center'
}
:{

}
],ellipsizeMode:'tail',numberOfLines:1,children:null==s?void 0:s.memberStoreSubTitle
}
)]
}
)
}

}
,{
key:"getOrderIcon",value:function(e,t){
return e?t.nOrderCashbackDarkIcon:t.nOrderCashbackIcon
}

}
,{
key:"getMemberIcon",value:function(e,t){
return e?t.memberStoreDarkIcon:t.memberStoreIcon
}

}
,{
key:"getMemberUrl",value:function(e){
return _r(d[14]).PlatformUtils.isApp()?e.memberStoreAppLink:e.memberStoreWapLink
}

}
,{
key:"getCashUrl",value:function(e){
return _r(d[14]).PlatformUtils.isApp()?e.nOrderCashbackAppLink:e.nOrderCashbackWapLink
}

}
,{
key:"getItem",value:function(e){
return _r(d[14]).PlatformUtils.isApp()?(null==e?void 0:e.configInfo)&&JSON.parse(e.configInfo):e
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this,t=this.props.isMember,i=_r(d[14]).DarkStore.darkBool;
return(0,_r(d[15]).jsx)(_r(d[14]).WithTheme,{
themeStyles:s.default,children:function(o,r){
return(0,_r(d[15]).jsx)(_r(d[16]).ImageBackground,{
resizeMode:"stretch",style:[_r(d[14]).ScreenUtils.isMedium(e.getSize())&&_r(d[14]).PlatformUtils.isApp()&&t?o.vBgPad:o.vBg],imgUri:_r(d[14]).ScreenUtils.isMedium(e.getSize())?c.default.vgPad:c.default.vBg,localSource:_r(d[14]).ScreenUtils.isMedium(e.getSize())?c.default.vgPad:c.default.vBg,isFromPersonal:!0,children:t?e.renderVMember(o,r,i):e.renderGuideVMember(o,r,i)
}
)
}

}
)
}

}
])
}
)(l.Component);
_e.default=(0,_r(d[14]).monitor)(n.default)((0,_r(d[14]).itemExposeHoc)(v))
}
),"e5633068e8c590f1d5ff150881b978a635bf8d582715ede0237aae5c440fd1a6",["cce5fdca77dd969e222fb33c21dc6a4e2c7572f870b521e674807c930998cf59","d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","d07b98d2160fa5a9b11fa2cc7a95504dfbed4e14c12ff3bd70bf667d2d33c018","1f4ecb63d6003508eaf7ccca5b56aa43a3073e520ad58bcd111df0926e559ab4","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","308db9fda5947677caf7385dee19fd8b9a6ddca11aa9991a5a7e49e1c9081028","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","1efb186a7a2d3fed1d2a150ffdebb74e209f0fa2cfeaed6e591fe0dd1f9ed75a"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
e.default={
clickItem:function(t,n,o,l,p){
var s,u;
return{
data:{
actionCode:null==t?void 0:t.toString(),actionName:'\u70b9\u51fb\u4e2a\u4eba\u4fe1\u606f\u4e0a\u62a5',pageId:null==(s=this.props)||null==(u=s.pageId)?void 0:u.toString(),eventType:'2',content:{
comId:'personalInfo',gotoURL:n||'',index:o.toString(),indexName:(0,r(d[0]).handleIndexName)(Number(o)),isVIP:p
}
,pageCatCode:'p_personalCenter',pageCatName:'\u4e2a\u4eba\u4e2d\u5fc3',resSiteCode:'s_personalCenter_asset',resSiteName:'\u7528\u6237\u8d44\u4ea7'
}

}

}

}

}
),"d07b98d2160fa5a9b11fa2cc7a95504dfbed4e14c12ff3bd70bf667d2d33c018",["cce5fdca77dd969e222fb33c21dc6a4e2c7572f870b521e674807c930998cf59"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var t: any = r(d[0]);
e.default=function(n){
return t.StyleSheet.create({
vBg:{
height:'web'===t.Platform.OS?null:56,borderRadius:16,flexDirection:'row',justifyContent:'space-between',overflow:'hidden',paddingBottom:10
}
,vBgPad:{
height:56,borderRadius:16,flexDirection:'row',justifyContent:'space-evenly',paddingBottom:10,overflow:'hidden'
}
,logBlock:{
alignContent:'center',paddingLeft:15
}
,padBlock:{
paddingLeft:0,alignItems:'center'
}
,shopBlock:{
paddingLeft:35,alignContent:'center'
}
,logoImg:{
width:24,height:24
}
,leftBlock:{
flexDirection:'row',justifyContent:'flex-start',alignItems:'center'
}
,logoTitle:Object.assign({
marginRight:6,alignContent:'center',alignItems:'center',justifyContent:'center'
}
,n.T8,n.C71),textTitle:Object.assign({
alignContent:'center',alignItems:'center',justifyContent:'center'
}
,n.T8,n.C71),more:Object.assign({
width:12,height:12
}
,n.C24),description:Object.assign({
width:140
}
,n.T3,n.C13),shopDescription:Object.assign({
width:112
}
,n.T3,n.C13),splitline:{
width:.5,transform:[{
scaleX:.5
}
],backgroundColor:n.C39.color,opacity:n.C39.opacity,height:24
}
,guideBg:{
alignContent:'center',paddingLeft:12,paddingRight:12,width:'100%',flexDirection:'row',justifyContent:'space-between'
}
,guideLogoText:Object.assign({
height:19
}
,n.T8,n.C71),guideDescription:Object.assign({

}
,n.T3,n.C13),guideLeftBlock:{
maxWidth:'50%'
}
,guideRightBlock:{
height:28,borderRadius:14,backgroundColor:'#312A2A'
}
,guideButtonText:Object.assign({
textAlign:'center',marginTop:6,marginLeft:12,marginRight:12,color:'#FFDBA8'
}
,n.T4),guideButtonOverlong:Object.assign({
textAlign:'center',marginTop:6,marginLeft:6,marginRight:6,color:'#FFDBA8'
}
,n.T4)
}
)
}

}
),"1f4ecb63d6003508eaf7ccca5b56aa43a3073e520ad58bcd111df0926e559ab4",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d"]);

__d((function(g,r,i,a,m,e,d){
Object.defineProperty(e,"__esModule",{
value:!0
}
),e.default=void 0;
// 变量
var o: any = r(d[0]);
e.default=function(t){
return o.StyleSheet.create({
viewStyle:{
backgroundColor:t.C32.color
}
,lodingTitle:{
fontSize:t.T7.fontSize,color:t.C13.color,opacity:t.C13.opacity
}
,commonStyle:{
backgroundColor:t.S32.backgroundColor
}
,titleWrapper:{
width:1200,paddingVertical:24,flexDirection:'row',margin:'auto',marginTop:0,marginBottom:0
}
,tabHome:Object.assign({
fontFamily:'HarmonyHeiTi'
}
,t.T3,t.C12,{
fontWeight:'400'
}
),dayu:Object.assign({

}
,t.T3,t.C12,{
marginHorizontal:2
}
),myshop:Object.assign({
fontFamily:r(d[1]).PublicFont.fontFamilyMedium
}
,t.T4,t.C11,{
fontWeight:'500'
}
),onBack:{
position:'absolute',bottom:48,right:16,width:50,height:50
}
,boxNone:{
position:'absolute',top:0,left:0
}
,personalBody:{
height:'100%',position:'relative'
}

}
)
}

}
),"6e6c315b5642d6fb75dffd98b0eca5177cf5f44bf49fd7eecc23af1f4bb19382",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3"]);

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

__r("c27a1bfd6570c909310f7c3dc1abfe220add9c3816c3cb4a3bd2ec2e7e4577c2");

//# sourceMappingURL=personal.android.bundle.map