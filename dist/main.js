
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
   'use strict';

   var n,l$1,u$1,t$1,o$2,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _$2(n,l){if(null==l)return n.__?_$2(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_$2(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$1.__r++||o$2!==l$1.debounceRendering)&&((o$2=l$1.debounceRendering)||setTimeout)(g$1);}function g$1(){for(var n;g$1.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_$2(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));});}function w$1(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$1(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_$2(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A(u,i,i,t,i.__e,l));return l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d$1(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$1.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p$1&&null==a.key?a.props.children:a,w$1(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$1(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_$2(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$1(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$1(i,u=(!o&&t||i).__k=h(p$1,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}n=e$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d$1.prototype.render=p$1,t$1=[],g$1.__r=0;

   var t,r,u,i,o$1=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o$1||u),o$1=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function p(n){return o$1=1,y(B,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){r.u=!0;var f=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !f||f.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!f||f.call(this,n,t,r))};}return o.__N||o.__}function _$1(n){return o$1=5,F(function(){return {current:n}},[])}function F(n,r){var u=d(t++,7);return z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){"function"!=typeof n.type||n.__m||null===n.__?n.__m||(n.__m=n.__&&n.__.__m?n.__.__m:""):n.__m=(n.__&&n.__.__m?n.__.__m:"")+(n.__&&n.__.__k?n.__.__k.indexOf(n):0),r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

   const useInput = initialValue => {
     const [value, setValue] = p(initialValue || '');
     const handleChange = e => setValue(e.target.value);
     return [value, setValue, handleChange];
   };

   function useDialog(init, onOpen, onClose) {
     const [dialogOpen, setDialogOpen] = p(init);
     const openDialog = () => {
       setDialogOpen(true);
       onOpen && onOpen();
     };
     const closeDialog = () => {
       setDialogOpen(false);
       onClose && onClose();
     };
     return {
       dialogOpen,
       openDialog,
       closeDialog
     };
   }

   var _=0;function o(o,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:o,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_,__source:f,__self:t};if("function"==typeof o&&(l=o.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

   function ListItem({
     content,
     remove
   }) {
     return o("li", {
       className: "ListItem",
       children: [o("p", {
         className: "ListItem-content",
         children: content
       }), o("button", {
         className: "ListItem-remove danger-btn",
         title: "Delete",
         onClick: remove,
         children: "X"
       })]
     });
   }
   function List({
     items,
     removeItem
   }) {
     return o("ul", {
       className: "List",
       children: items.map((item, index) => o(ListItem, {
         content: item,
         remove: () => removeItem(index)
       }, index))
     });
   }

   function Dialog({
     dialogOpen,
     close,
     children
   }) {
     if (!dialogOpen) return o(p$1, {});
     return o("div", {
       className: "Dialog",
       children: [o("div", {
         className: "Dialog-overlay",
         onClick: close
       }), o("div", {
         className: "Dialog-content",
         children: [o("button", {
           className: "Dialog-close-btn danger-btn",
           title: "Close",
           onClick: close,
           children: "X"
         }), o("div", {
           className: "Dialog-outside-content",
           children: children
         })]
       })]
     });
   }

   var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3e%3c/svg%3e";

   function Toggle({
     toggleState,
     setToggleState,
     option1,
     option2
   }) {
     const firstOptionActice = toggleState === option1;
     const otherOption = firstOptionActice ? option2 : option1;
     const handleClick = () => {
       setToggleState(otherOption);
     };
     return o("div", {
       className: "Toggle",
       children: [o("button", {
         className: `Toggle-btn ${firstOptionActice ? "Toggle-btn-active" : ""}`,
         type: "button",
         onClick: handleClick,
         disabled: firstOptionActice,
         children: option1
       }), o("button", {
         className: `Toggle-btn ${!firstOptionActice ? "Toggle-btn-active" : ""}`,
         type: "button",
         onClick: handleClick,
         disabled: !firstOptionActice,
         children: option2
       })]
     });
   }

   const dataShapes = {
     Simple: {
       example: '[\n\t"Farm STS",\n\t"Acquire a hat",\n\t...etc\n]',
       process: jsonString => {
         let squares;
         try {
           squares = JSON.parse(jsonString);
         } catch {
           throw "Invalid JSON";
         }
         if (!Array.isArray(squares)) throw "Unexpected Value. Expected an array";
         if (!squares.every(item => typeof item === "string")) throw "Unexpected Value. Every item must be a string";
         return squares;
       }
     },
     Complex: {
       example: '[\n\t{"name":"Farm STS"},\n\t{"name":"Wear a hat"},\n\t...\n]',
       process: jsonString => {
         let squares;
         try {
           squares = JSON.parse(jsonString);
         } catch {
           throw "Invalid JSON";
         }
         if (!Array.isArray(squares)) throw "Unexpected Value. Expected an array";
         if (!squares.every(item => item.name)) throw "Unexpected Value. Every item must have a valid name property";
         return squares.map(item => item.name);
       }
     }
   };
   function ImportForm({
     input,
     handleInput,
     error,
     setError,
     setSquares,
     onSubmitSuccess
   }) {
     const [importMode, setImportMode] = p("Replace"); // "add" || "replace"
     const [dataShape, setDataShape] = p("Complex"); // "complex" || "simple"

     const handleImportSubmit = e => {
       e.preventDefault();
       let squares;
       try {
         squares = dataShapes[dataShape].process(input);
       } catch (error) {
         setError(error);
         return;
       }
       switch (importMode) {
         case "Add":
           setSquares(oldSquares => [...oldSquares, ...squares]);
           break;
         case "Replace":
           setSquares(squares);
           break;
       }
       onSubmitSuccess();
     };
     return o("form", {
       className: "ImportForm",
       onSubmit: handleImportSubmit,
       children: [o("h2", {
         children: "Import bingo squares from JSON"
       }), o("div", {
         className: "ImportForm-toggle-container",
         children: [o("p", {
           children: "Import Mode:"
         }), o(Toggle, {
           toggleState: importMode,
           setToggleState: setImportMode,
           option1: "Add",
           option2: "Replace"
         })]
       }), o("div", {
         className: "ImportForm-toggle-container",
         children: [o("p", {
           children: "Data Shape:"
         }), o(Toggle, {
           toggleState: dataShape,
           setToggleState: setDataShape,
           option1: "Complex",
           option2: "Simple"
         })]
       }), o("textarea", {
         value: input,
         onInput: handleInput,
         placeholder: dataShapes[dataShape].example
       }), error ? o("p", {
         children: ["Import Error: ", error]
       }) : null, o("button", {
         type: "submit",
         children: "Import"
       })]
     });
   }

   function App() {
     // const [bingoSquares, setBingoSquares] = useState([
     //   "farm STS",
     //   "acquire FUCKING HAT",
     //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit porro maxime voluptatibus ipsa quod vel deleniti, qui odio incidunt error ratione sapiente. Dignissimos quidem vero, voluptatem aperiam laboriosam corrupti!",
     // ]);
     const [bingoSquares, setBingoSquares] = p([]);
     const [itemInput, setItemInput, handleItemInputChange] = useInput("");
     const itemInputRef = _$1();
     const [importInput, setImportInput, handleImportInputChange] = useInput("");
     const [importError, setImportError] = p("");
     const {
       dialogOpen,
       openDialog,
       closeDialog
     } = useDialog(false, () => {
       setImportInput("");
       setImportError("");
     });
     const handleAddSubmit = e => {
       e.preventDefault();
       if (itemInput.trim() === "") return;
       // Add item
       setBingoSquares([...bingoSquares, itemInput]);
       setItemInput("");
       itemInputRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start"
       });
     };
     const removeItem = index => {
       const newSquares = [...bingoSquares];
       newSquares.splice(index, 1);
       setBingoSquares(newSquares);
     };
     const exportSquares = () => {
       navigator.clipboard.writeText(JSON.stringify(bingoSquares.map(v => ({
         name: v
       }))));
     };
     return o("div", {
       className: "App",
       children: [o("h1", {
         className: "App-title",
         children: "Custom Bingosync Board Maker"
       }), o("p", {
         className: "App-description",
         children: ["This is a small app for", " ", o("a", {
           href: "https://bingosync.com",
           children: "bingosync.com"
         }), " to make custom bingo boards for you instead of writing the JSON by hand"]
       }), o("div", {
         className: "App-list-container",
         children: [o(List, {
           items: bingoSquares,
           removeItem: removeItem
         }), o("form", {
           className: "App-list-controls",
           onSubmit: handleAddSubmit,
           children: [o("label", {
             htmlFor: "AddSquare",
             children: "Add a bingo square:"
           }), o("input", {
             id: "AddSquare",
             type: "text",
             autoComplete: "off",
             placeholder: "e.g. Farm STS",
             value: itemInput,
             ref: itemInputRef,
             onInput: handleItemInputChange
           }), o("button", {
             type: "submit",
             children: "Add"
           })]
         })]
       }), o("div", {
         className: "App-controls",
         children: [o("button", {
           onClick: openDialog,
           children: "Import Squares"
         }), o("button", {
           onClick: exportSquares,
           children: "Export squares to clipboard"
         })]
       }), o("p", {
         children: ["Square count: ", bingoSquares.length]
       }), o("a", {
         className: "App-repo-link",
         href: "https://github.com/Mana24/Custom-Bingo-Board-Maker",
         children: [o("img", {
           className: "App-github-icon",
           src: img
         }), o("p", {
           children: "Github"
         })]
       }), o(Dialog, {
         dialogOpen: dialogOpen,
         close: closeDialog,
         children: o(ImportForm, {
           input: importInput,
           handleInput: handleImportInputChange,
           error: importError,
           setError: setImportError,
           setSquares: setBingoSquares,
           onSubmitSuccess: closeDialog
         })
       })]
     });
   }

   // import "preact/debug"
   P(h(App, null), document.getElementById('app'));

})();
//# sourceMappingURL=main.js.map
