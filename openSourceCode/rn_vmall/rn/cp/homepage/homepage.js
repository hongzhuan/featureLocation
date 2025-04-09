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
var t: any = r(d[0]),n=r(d[1])(r(d[2])),l=r(d[1])(r(d[3]));
(0,r(d[4]).configure)({
useProxies:'never'
}
);
var o=Object.assign({

}
,t.Platform.select({
android:{
fontFamily:''
}

}
)),s=t.Text.render;
t.Text.render=function(){
for(var t=arguments.length,l=new Array(t),u=0;
u<t;
u++)l[u]=arguments[u];
// 变量
var f: any = s.call.apply(s,[this].concat(l));
return n.default.cloneElement(f,{
style:[o,f.props.style]
}
)
}
,t.Text.defaultProps=Object.assign({

}
,t.Text.defaultProps,{
allowFontScaling:!1
}
),t.TextInput.defaultProps=Object.assign({

}
,t.TextInput.defaultProps,{
defaultProps:!1
}
),t.AppRegistry.registerComponent(r(d[5]).HOME_PAGE.name,(function(){
return l.default
}
))
}
),"df0c35cb53c59e9a462735d57d3a0ffb198ba6c67eb6d85d604ab6d7f2f128d5",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","b322f53caea0bf9f090f7e3b71f19e7c895c08a1085bd97a8937c01a90f880d1","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var e: any = r(d[0])(r(d[1])),t=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),n=r(d[0])(r(d[4])),s=r(d[0])(r(d[5])),p=r(d[0])(r(d[6])),l=r(d[7]),h=r(d[0])(r(d[8]));
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
(0,r(d[9]).enableScreens)(!1),(0,r(d[10]).setCustomText)();
var v='HomePageApp',c=(function(c){
// 函数
function E(t: any): any {
var s,c,P,f;
(0,e.default)(this,E),c=this,P=E,f=[t],P=(0,n.default)(P),(s=(0,o.default)(c,u()?Reflect.construct(P,f||[],(0,n.default)(c).constructor):P.apply(c,f))).isAuto=!1,s.pageCatCode='',s.pageCatName='',s.defaultStyle='default',s.darkStyle=!1,s.startTime=(new Date).getTime(),s.pageContext=new(r(d[10]).DefaultPageContext),s.setDarkStore=function(){
s.darkMode=s.props.darkMode;
// 变量
var e: any = s.props.darkConfigInfo&&(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony()?JSON.parse(JSON.parse(s.props.darkConfigInfo)):JSON.parse(s.props.darkConfigInfo));
e&&e.qingmingMode&&'Y'===e.qingmingMode&&r(d[10]).DarkStore.setQMBool('Y'===e.qingmingMode),s.setDarkBool(e)
}
,s.setDarkBool=function(e){
s.darkMode&&JSON.parse(s.props.darkMode)&&e&&e.darkMode&&'Y'===e.darkMode&&!r(d[10]).DarkStore.QMbool?(s.darkStyle=!0,s.defaultStyle='huawei_dark',r(d[10]).DarkStore.setDarkBool(!0)):(s.darkStyle=!1,s.defaultStyle='default',r(d[10]).DarkStore.setDarkBool(!1))
}
,s.initApp=function(){
var e,t,o,n=s.props.apiEnv&&JSON.parse(s.props.apiEnv),p=!r(d[10]).CommonUtils.isEmpty(s.props.userAbTest)&&JSON.parse(s.props.userAbTest)||[];
p=null==(e=p)||null==(t=e.map((function(e){
return e.strategyId||''
}
)))?void 0:t.join(','),n.strategies=p||'';
// 变量
var h: any = null==(o=s.props.pageId)?void 0:o.toString();
if(n.pageId=h,r(d[10]).PlatformUtils.isHarmony()&&(n.platform='harmony'),r(d[10]).appIdStore.setdeviceType(s.props.deviceType),r(d[10]).appIdStore.setRnPageHeight(s.props.rnPageHeight),s.props.mSafeAreaLayoutGuideBottom&&r(d[10]).appIdStore.setMSafeAreaLayoutGuideBottom(s.props.mSafeAreaLayoutGuideBottom),r(d[10]).appIdStore.setTid(s.props.tid),(0,r(d[10]).envService)(n),(0,r(d[11]).ImgArrayUpdata)(),s.sizeChangeListener=r(d[10]).DeviceUtils.getWidthHeightChange(s.getWidthAndHeight,r(d[10]).PAGE_TYPE.homePage),r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())s.initWidth();
else{
// 变量
var u: any = l.Dimensions.get('window').width,v=l.Dimensions.get('window').height;
s.setOnLayout(u,v)
}

}
,s.getWidthAndHeight=function(e,t){
Math.abs(s.homePageCurrentWidth-e)<1||(s.homePageCurrentWidth=e,s.setOnLayout(e,t),s.pageContext.onWithChange(e,t),s.setState({
width:e,height:t
}
))
}
,s.setListenerNative=function(){
// 变量
var e: any = [r(d[10]).PAGE_TYPE.homePage,r(d[10]).PAGE_TYPE.category,r(d[10]).PAGE_TYPE.discovery,'\u8d2d\u7269\u8f66',r(d[10]).PAGE_TYPE.personal];
s.listenerNative=l.DeviceEventEmitter.addListener('NativeCallAction',(function(t){
s.isAuto=!0;
// 变量
var o: any = null==t?void 0:t.action,n=null==t?void 0:t.service,p=null==t?void 0:t.param;
s.updateCurPageType(o,n,p,e),s.handleBackHomeReport(o,n,p),s.handlePageLeaveReport(o,n,p);
// 变量
var l: any = null==p?void 0:p.tabName,h=null==p?void 0:p.tabIndex;
if('tabSwitch'===o&&'subTab'===n&&l&&h){
// 变量
var u: any = Number(h);
r(d[10]).TabsTopStore.setTabNameIndex(l||'',isNaN(u)?0:u)
}

}
))
}
,s.homePageMemo=p.default.memo((function(e){
return(0,r(d[12]).jsx)(r(d[13]).Provider,{
store:r(d[10]).AppStore,children:(0,r(d[12]).jsx)(r(d[10]).PageContext.Provider,{
value:s.pageContext,children:(0,r(d[12]).jsx)(r(d[14]).I18nextProvider,{
i18n:e.i18next,children:(0,r(d[12]).jsx)(h.default,Object.assign({

}
,s.props,{
startTime:s.startTime,isMultyTab:r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony(),DarkStyle:s.darkStyle,pageId:s.props.pageId,pageAlias:s.props.pageAlias,abTest:s.props.abTest,changePageId:s.changePageId.bind(s),useNativeSkeleton:!0
}
))
}
)
}
)
}
)
}
));
var S={
e2eId:s.props.e2eId,spanId:s.props.parentSpanId
}
;
r(d[10]).CommonUtils.storeE2eId(r(d[10]).PAGE_TYPE_E2EID.home,!r(d[10]).PlatformUtils.isAndroid(),S);
var I=r(d[10]).E2EIdStore.pageTypeE2EIdSpanId[r(d[10]).E2EIdStore.curPageType],y={
e2eId:I.e2eId,spanId:I.parentSpanId
}
;
return r(d[10]).E2EIdStore.setResidentPageE2EId(r(d[10]).PAGE_TYPE_E2EID.home,r(d[10]).PlatformUtils.isAndroid()?S:y),r(d[10]).appIdStore.setIsPreload(t.isPreInstalledPackage),r(d[10]).DeviceUtils.deviceStore(t),r(d[10]).AppStore.setIsLogin(t.isLogin),s.pageId=s.props.pageId,s.setDarkStore(),s.state={
pageId:s.props.pageId,height:l.Dimensions.get('window').height,width:l.Dimensions.get('window').width,i18next:null
}
,s._onLayout=s._onLayout.bind(s),(0,r(d[10]).captureException)('homepage'),s.initApp(),r(d[10]).RecordUtils.logger(v,'homepage start-abc'),s
}
return(0,s.default)(E,c),(0,t.default)(E,[{
key:"initWidth",value:function(){
// 变量
var e: any = this;
r(d[10]).DeviceUtils.getWidthHeightActive(r(d[10]).PAGE_TYPE.homePage).then((function(t){
// 变量
var o: any = null==t?void 0:t.windowWidth;
Math.floor(e.state.width)!==Math.floor(o)&&(0,r(d[15]).isNumber)(o)&&(e.setOnLayout(o,null==t?void 0:t.windowHeight),e.pageContext.onWithChange(o))
}
)).catch((function(e){
r(d[10]).RecordUtils.logger(v,"RN\u9996\u9875getWidthHeightActive\u83b7\u53d6\u521d\u59cb\u5bbd\u5ea6\u5931\u8d25: "+e)
}
))
}

}
,{
key:"setOnLayout",value:function(e,t){
var o={
nativeEvent:{
layout:{
width:e,height:t
}

}

}
;
(0,r(d[10]).onLayout)(o),(0,r(d[10]).layout)(o,r(d[10]).PAGE_TYPE.homePage)
}

}
,{
key:"componentDidMount",value:function(){
var e,t=this.props,o=t.fontSize,n=t.densityScale,s=t.isCarouselBarDisable;
((r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())&&(o&&r(d[10]).fontStore.setFontMutiple(o),n&&r(d[10]).fontStore.setDensityScale(n),s&&r(d[10]).configStore.setCarouselBarDisable(s)),r(d[10]).PlatformUtils.isApp()&&(r(d[10]).appIdStore.deviceType||r(d[10]).appIdStore.getDeviceType(),(0,r(d[10]).getRnProductComponentSizeEnable)()),r(d[10]).PlatformUtils.isApp())&&(r(d[10]).DarkStore.setpageId(this.props.pageId),this.props.networkFields&&r(d[10]).fontStore.setVersion(null==(e=JSON.parse(this.props.networkFields))?void 0:e.version));
this.setListenerNative()
}

}
,{
key:"updateCurPageType",value:function(e,t,o,n){
r(d[10]).PlatformUtils.isAndroid()&&('pageLeave'===e&&'page'===t&&(null==o?void 0:o.isHome)&&r(d[10]).E2EIdStore.setCurPageType(n[0]),'tabCurrent'===e&&'tabFragment'===t&&(null==o?void 0:o.isCurrentIndex)&&r(d[10]).E2EIdStore.setCurPageType(n[o.currentIndex]),'page'===t&&'pageSelectedIndex'===e&&r(d[10]).E2EIdStore.setCurPageType(n[o.currentPosition]))
}

}
,{
key:"handlePageLeaveReport",value:function(e,t,o){
var n,s,p;
'pageLeave'===e&&'page'===t&&!r(d[10]).PlatformUtils.isIOS()&&null!=o&&o.isHome&&(o.isLeave?(n='110000000',s='HomePage\u9875\u9762\u52a0\u8f7d\u5b8c\u6210',p=r(d[10]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,r(d[10]).EventTracking.eventTracingReportRightNow({
actionCode:n,actionName:s,eventType:p,pageId:this.state.pageId,content:{
load:'1'
}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
)):(n='110000011',s='HomePage\u9875\u9762\u79bb\u5f00',p=r(d[10]).EVENT_TYPE.EVENT_TYPE_LEAVE,r(d[10]).EventTracking.eventTracingReportRightNow({
actionCode:n,actionName:s,eventType:p,pageId:this.state.pageId||r(d[10]).FooterNavigationStore.pageId,content:{

}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
)),this.pageId&&r(d[10]).Service.pageId!==this.pageId&&(r(d[10]).Service.pageId=this.pageId,(0,r(d[10]).envService)(r(d[10]).Service)))
}

}
,{
key:"handleBackHomeReport",value:function(e,t,o){
'backHome'===e&&'page'===t&&(null!=o&&o.isBack?(r(d[10]).PlatformUtils.isIOS()&&r(d[10]).EventTracking.eventTracingReportRightNow({
actionCode:'110000000',actionName:'HomePage\u9875\u9762\u52a0\u8f7d\u5b8c\u6210',eventType:r(d[10]).EVENT_TYPE.EVENT_TYPE_LOADING_PAGE,pageId:this.state.pageId,content:{
load:'1'
}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
),r(d[10]).TabsTopStore.getIsLeave(!0)):!1===(null==o?void 0:o.isBack)&&(r(d[10]).PlatformUtils.isIOS()&&this.isAuto&&(r(d[10]).EventTracking.eventTracingReportRightNow({
actionCode:'110000011',actionName:'HomePage\u9875\u9762\u79bb\u5f00',eventType:r(d[10]).EVENT_TYPE.EVENT_TYPE_LEAVE,pageId:this.state.pageId||r(d[10]).FooterNavigationStore.pageId,content:{

}
,pageCatCode:this.pageCatCode,pageCatName:this.pageCatName,resSiteCode:'',resSiteName:''
}
),this.isAuto=!1),r(d[10]).TabsTopStore.getIsLeave(!1)))
}

}
,{
key:"componentWillUnmount",value:function(){
this.pageContext.clear(),this.listenerNative&&this.listenerNative.remove(),this.listenerNative2&&this.listenerNative2.remove(),this.eventListener&&this.eventListener.remove(),this.sizeChangeListener&&this.sizeChangeListener.remove(),delete r(d[10]).E2EIdStore.residentPageE2EId[r(d[10]).PAGE_TYPE_E2EID.home]
}

}
,{
key:"changePageId",value:function(e,t,o){
this.pageCatCode=t,this.pageCatName=o,this.setState({
pageId:e
}
)
}

}
,{
key:"_onLayout",value:function(e){
Math.floor(this.state.width)!==Math.floor(e.nativeEvent.layout.width)&&this.getWidthAndHeight(e.nativeEvent.layout.width,e.nativeEvent.layout.height)
}

}
,{
key:"render",value:function(){
// 变量
var e: any = this.homePageMemo,t=this.props.RnPromptMsg,o=(0,r(d[10]).getLanguage)(this.props),n=(0,r(d[16]).handleI18nextNative)(t,o);
return n?(0,r(d[12]).jsxs)(r(d[10]).Provider,{
theme:this.defaultStyle,width:this.state.width,height:this.state.height,children:[(0,r(d[12]).jsx)(l.View,{
onLayout:this._onLayout,style:{
position:'absolute',width:'100%',height:'100%'
}

}
),(0,r(d[12]).jsx)(e,{
i18next:n
}
)]
}
):null
}

}
])
}
)(p.default.PureComponent);
_e.default=c
}
),"b322f53caea0bf9f090f7e3b71f19e7c895c08a1085bd97a8937c01a90f880d1",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","4af4dfef3afc9b982b76913cba707628b39235c5c49912fd0867111d0f1def16","6310a04b881ed905f1bdf4c0f9d054035622e97f0fd28f13c5b95f073129ad55","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","26abed5e0338f4e7f6ab2c7c877c4313b45f687e86fa36e42d6072f91e82bfed"]);

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

__r("df0c35cb53c59e9a462735d57d3a0ffb198ba6c67eb6d85d604ab6d7f2f128d5");

//# sourceMappingURL=homepage.android.bundle.map