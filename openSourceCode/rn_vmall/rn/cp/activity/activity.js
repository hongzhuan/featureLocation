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
),t.AppRegistry.registerComponent(r(d[4]).ACTIVITY.name,(function(){
return n.default
}
))
}
),"18a6489abb3ec0c0eb6907ed46de809080ca62c8f01f440c94f32ec9ef3dd041",["ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","fcbfa307a4e0337ad6c307d1970441a5110513b4ebcdb20c7b4ad3d8e1093db2","51fb24881167a96e71a9ac10e672d1c34da243ff1643ebc0346379844aa0dc14","96677aa35debfefd031d9d34d9c70369754ee3acb2d9a9d4090e98612efee6f5"]);

__d((function(g,r,i,a,m,_e,d){
Object.defineProperty(_e,"__esModule",{
value:!0
}
),_e.default=void 0;
// 变量
var t: any = r(d[0])(r(d[1])),e=r(d[0])(r(d[2])),o=r(d[0])(r(d[3])),s=r(d[0])(r(d[4])),n=r(d[0])(r(d[5])),l=r(d[0])(r(d[6])),h=r(d[7]),u=r(d[0])(r(d[8]));
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
(0,r(d[9]).enableScreens)(!1),(0,r(d[10]).setCustomText)();
var c=(function(c){
// 函数
function f(e: any): any {
var n,c,v,y;
return(0,t.default)(this,f),c=this,v=f,y=[e],v=(0,s.default)(v),(n=(0,o.default)(c,p()?Reflect.construct(v,y||[],(0,s.default)(c).constructor):v.apply(c,y))).startTime=(new Date).getTime(),n.defaultStyle='default',n.darkStyle=!1,n.pageContext=new(r(d[10]).DefaultPageContext),n.getAutoSetColorConfig=function(){
r(d[10]).Bridge.CommonService.getConfigData(r(d[10]).BBD_KEY.RN_IMMERSIVESWIPERIMAGE_AUTOSETCOLOR).then((function(t){
r(d[10]).configStore.setSutoSetColorEnable('false'!==(null==t?void 0:t.value))
}
)).catch((function(){
r(d[10]).configStore.setSutoSetColorEnable(!0)
}
))
}
,n.getWidthAndHeight=function(t,e){
Math.abs(n.currentWidth-t)<1||(n.currentWidth=t,n.setOnLayout(t,e),n.pageContext.onWithChange(t,e),n.setState({
width:t,height:e
}
))
}
,n.activityMemo=l.default.memo((function(t){
return(0,r(d[11]).jsx)(r(d[12]).Provider,{
store:r(d[10]).AppStore,children:(0,r(d[11]).jsx)(r(d[10]).PageContext.Provider,{
value:n.pageContext,children:(0,r(d[11]).jsx)(r(d[13]).I18nextProvider,{
i18n:t.i18next,children:(0,r(d[11]).jsx)(u.default,Object.assign({

}
,n.props,{
startTime:n.startTime,statusBarHeight:t.statusBarHeight,mSafeAreaLayoutGuideBottom:t.bottomBarHeight,activityParams:n.props.activityParams,pageId:n.props.pageId,pageAlias:n.props.pn||n.props.pageAlias,DarkStyle:t.darkStyle
}
))
}
)
}
)
}
)
}
)),n.doInit(),n.state={
pageId:String(n.props.pageId),defaultStyle:n.defaultStyle,darkStyle:n.darkStyle,width:h.Dimensions.get('window').width,height:h.Dimensions.get('window').height,statusBarHeight:void 0!==e.statusBarHeight?e.statusBarHeight:h.StatusBar.currentHeight||0,bottomBarHeight:e.mSafeAreaLayoutGuideBottom
}
,n
}
return(0,n.default)(f,c),(0,e.default)(f,[{
key:"doInit",value:function(){
var t,e,o,s;
r(d[10]).PlatformUtils.isApp()&&(r(d[10]).DeviceUtils.deviceStore(this.props),this.props.networkFields&&r(d[10]).fontStore.setVersion(null==(s=JSON.parse(this.props.networkFields))?void 0:s.version),r(d[10]).PlatformUtils.isHarmony()||'boolean'!=typeof this.props.isLogin?r(d[10]).AppStore.getIsLogin():r(d[10]).AppStore.setIsLogin(this.props.isLogin),r(d[10]).LoginUtils.getAppLoginAndGroupInfo().then((function(t){
t&&r(d[10]).groupTagsStore.setgroupTags(JSON.parse(JSON.stringify(t)))
}
)));
// 变量
var n: any = this.props,l=n.apiEnv,u=n.darkConfigInfo,p=n.darkMode,c=n.fontSize,f=n.densityScale;
(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())&&(c&&r(d[10]).fontStore.setFontMutiple(c),f&&r(d[10]).fontStore.setDensityScale(f));
// 变量
var v: any = this.props.tabindex,y=this.props.tabname;
v=Number(v),isNaN(v)&&(v=0),r(d[10]).TabsTopStore.setTabNameIndex(y||'',v);
var S=l&&JSON.parse(l)||{

}
,k=!r(d[10]).CommonUtils.isEmpty(this.props.userAbTest)&&JSON.parse(this.props.userAbTest)||[];
k=null==(t=k)||null==(e=t.map((function(t){
return t.strategyId||''
}
)))?void 0:e.join(','),S.strategies=k||'';
// 变量
var P: any = String(this.props.pageId);
if(this.darkDate=u&&(r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony()?JSON.parse(JSON.parse(u)):JSON.parse(u))||{

}
,(0,r(d[10]).getRnProductComponentSizeEnable)(),p&&JSON.parse(p)&&this.darkDate.darkMode&&'Y'===this.darkDate.darkMode?(this.darkStyle=!0,this.defaultStyle='huawei_dark',r(d[10]).DarkStore.setDarkBool(p)):(this.darkStyle=!1,this.defaultStyle='default',r(d[10]).DarkStore.setDarkBool(!1)),S.pageId=P,r(d[10]).PlatformUtils.isHarmony()&&(S.platform='harmony'),r(d[10]).appIdStore.deviceType||r(d[10]).appIdStore.getDeviceType(),r(d[10]).appIdStore.setApkPackageName(null==(o=this.props)?void 0:o.appPackageName),r(d[10]).appIdStore.setTid(this.props.tid),r(d[10]).appIdStore.setIsPreload(this.props.isPreInstalledPackage),(0,r(d[10]).envService)(S),(0,r(d[14]).ImgArrayUpdata)(),this.sizeChangeListener=(!r(d[10]).PlatformUtils.isHarmony()||this.props.pageType!==r(d[10]).PAGE_TYPE.discovery)&&r(d[10]).DeviceUtils.getWidthHeightChange(this.getWidthAndHeight,r(d[10]).PAGE_TYPE.activity),(0,r(d[10]).captureException)('activity'),this._onLayout=this._onLayout.bind(this),r(d[10]).PlatformUtils.isAndroid()||r(d[10]).PlatformUtils.isHarmony())this.initWidth();
else{
// 变量
var w: any = h.Dimensions.get('window').width,A=h.Dimensions.get('window').height;
this.setOnLayout(w,A)
}

}

}
,{
key:"componentDidMount",value:function(){
// 变量
var t: any = this;
this.statusBarListener=r(d[10]).PlatformUtils.isHarmony()&&r(d[10]).DeviceUtils.getBarHeight((function(e,o){
void 0!==e&&e!==t.state.statusBarHeight&&t.setState({
statusBarHeight:e
}
),void 0!==o&&o!==t.state.bottomBarHeight&&(r(d[10]).appIdStore.setMSafeAreaLayoutGuideBottom(o),t.setState({
bottomBarHeight:o
}
))
}
))
}

}
,{
key:"initWidth",value:function(){
// 变量
var t: any = this;
r(d[10]).DeviceUtils.getWidthHeightActive('SeckillAndSmartLife').then((function(e){
// 变量
var o: any = null==e?void 0:e.windowWidth;
Math.floor(t.state.width)!==Math.floor(o)&&(0,r(d[15]).isNumber)(o)&&(t.setOnLayout(o,null==e?void 0:e.windowHeight),t.pageContext.onWithChange(o))
}
)).catch((function(t){
r(d[10]).RecordUtils.logger('RN_Activity',"RN\u6d3b\u52a8\u9875getWidthHeightActive\u83b7\u53d6\u521d\u59cb\u5bbd\u5ea6\u5931\u8d25: "+t)
}
))
}

}
,{
key:"setOnLayout",value:function(t,e){
var o={
nativeEvent:{
layout:{
width:t,height:e
}

}

}
;
(0,r(d[10]).onLayout)(o),(0,r(d[10]).layout)(o,this.props.pageType||r(d[10]).PAGE_TYPE.activity)
}

}
,{
key:"componentWillUnmount",value:function(){
this.pageContext.clear(),this.sizeChangeListener&&this.sizeChangeListener.remove(),this.listenerNative&&this.listenerNative.remove(),this.statusBarListener&&this.statusBarListener.remove()
}

}
,{
key:"_onLayout",value:function(t){
Math.floor(this.state.width)!==Math.floor(t.nativeEvent.layout.width)&&this.getWidthAndHeight(t.nativeEvent.layout.width,t.nativeEvent.layout.height)
}

}
,{
key:"render",value:function(){
var t,e=this.props.RnPromptMsg,o=(0,r(d[10]).getLanguage)(this.props),s=(0,r(d[16]).handleI18nextNative)(e,o),n=r(d[10]).PlatformUtils.isIOS()?!r(d[10]).DarkStore.QMbool&&this.state.darkStyle:this.props.darkMode&&'Y'===(null==(t=this.darkDate)?void 0:t.darkMode);
r(d[10]).DarkStore.setDarkBool(n);
// 变量
var l: any = this.activityMemo;
return s?(0,r(d[11]).jsxs)(r(d[10]).Provider,{
theme:n?'huawei_dark':'default',width:this.state.width,height:this.state.height,children:[(0,r(d[11]).jsx)(h.View,{
onLayout:this._onLayout,style:{
position:'absolute',width:'100%',height:'100%'
}

}
),(0,r(d[11]).jsx)(l,{
i18next:s,darkStyle:n,statusBarHeight:this.state.statusBarHeight,bottomBarHeight:this.state.bottomBarHeight
}
)]
}
):null
}

}
])
}
)(l.default.PureComponent);
_e.default=c
}
),"fcbfa307a4e0337ad6c307d1970441a5110513b4ebcdb20c7b4ad3d8e1093db2",["d4431c841577fba508d7189ce2a6fc0e702b989b9c6f67ffcf40a9563d66f4aa","121b4308bd31a7fe6c653c75d387cbbfd58dacbdad3a1e1e01a602c507b81def","7b6acba68ea81fb612adb5c14ef8c139cadcdfc8839b5d475c75ee01d41a71eb","8307bd420c739e387aa0043aaea348bbf013c78c6f87cc8dab5920b349e60ca8","a280d238a7e6ea87cccebe1908e91f2dcc7b0eba610818eea9a0afd1e003b999","95a5857a9d1471573d067e5fa5bc0b106c1d69ff444d8172cb41cf23969570d2","6ed0e34da2b23bd3554fa421f70f61c43745b8dd45c3506df768307c911a529d","ff64fa2ac78b8a43ea6243e79ea9d49a3553343773ae450356109d67572f6b7d","4026f76156cb55a44e6991f54d25b5ed4ae1863ac1e0724f6de2d7bad319ef1f","6310a04b881ed905f1bdf4c0f9d054035622e97f0fd28f13c5b95f073129ad55","11c0bbc27675efba39c1306b6d6bc3120f365ffa3c8afa9395599e9a1b0f17b3","048fed5a64a04bdb7fed24b0d6ab1d2d8294f08888fbbe2288244e34e3dde0f3","934c53a1261cd9f9ac8cc36aa4b62a6bba52c89b5b6d24805fc042cc09254bec","98f25e0b50b1867c355670ddd3bc92dbd7bf6135f5ef4aa267fbac2495557d41","6a54b4907ac2cac215d302d70b8589d0dd5c475791477ee52d7a45f2da6ca77b","0bf98d056bbfde9201817585e2f4b2fee9f6a53ead1b7fd3e87b950a92594a91","26abed5e0338f4e7f6ab2c7c877c4313b45f687e86fa36e42d6072f91e82bfed"]);

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

__r("18a6489abb3ec0c0eb6907ed46de809080ca62c8f01f440c94f32ec9ef3dd041");

//# sourceMappingURL=activity.android.bundle.map