import{u as te,c as re,d as nr}from"./ThemeProvider-48707fb0.js";import{r as v,E as or,j as T,R as _}from"./index-a34ac5e4.js";import{u as Q,a as ar,c as tt,o as ir,l as Ce,S as Ie,b as sr,d as yt,m as rt,e as cr,f as ur,g as lr,q as nt,h as fr,A as pr,i as dr,j as bt,k as vr,n as mr,p as gr}from"./Navbar-295070b0.js";import{B as hr}from"./Button-952ae1d0.js";import{B as wr}from"./Button-9fc4f2d9.js";function yr(){return v.useState(null)}function br(e,t,r,n=!1){const o=Q(r);v.useEffect(()=>{const a=typeof e=="function"?e():e;return a.addEventListener(t,o,n),()=>a.removeEventListener(t,o,n)},[e])}function xr(e,t,r){const n=v.useRef(e!==void 0),[o,a]=v.useState(t),l=e!==void 0,s=n.current;return n.current=l,!l&&s&&o!==t&&a(t),[l?e:o,v.useCallback((...i)=>{const[u,...c]=i;let f=r==null?void 0:r(u,...c);return a(u),f},[r])]}const Or=v.createContext(null),Se=Or;var ot=Object.prototype.hasOwnProperty;function at(e,t,r){for(r of e.keys())if(de(r,t))return r}function de(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&de(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=at(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=at(t,o),!o)||!de(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(ot.call(e,r)&&++n&&!ot.call(t,r)||!(r in t)||!de(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function $r(e){const t=ar();return[e[0],v.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var I="top",H="bottom",F="right",W="left",Ne="auto",we=[I,H,F,W],ae="start",ge="end",Cr="clippingParents",xt="viewport",pe="popper",Dr="reference",it=we.reduce(function(e,t){return e.concat([t+"-"+ae,t+"-"+ge])},[]),Ot=[].concat(we,[Ne]).reduce(function(e,t){return e.concat([t,t+"-"+ae,t+"-"+ge])},[]),Er="beforeRead",Ar="read",Pr="afterRead",Sr="beforeMain",jr="main",Mr="afterMain",kr="beforeWrite",Rr="write",Tr="afterWrite",Br=[Er,Ar,Pr,Sr,jr,Mr,kr,Rr,Tr];function q(e){return e.split("-")[0]}function N(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ee(e){var t=N(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=N(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function He(e){if(typeof ShadowRoot>"u")return!1;var t=N(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Z=Math.max,Ae=Math.min,ie=Math.round;function We(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function $t(){return!/^((?!chrome|android).)*safari/i.test(We())}function se(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&z(e)&&(o=e.offsetWidth>0&&ie(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ie(n.height)/e.offsetHeight||1);var l=ee(e)?N(e):window,s=l.visualViewport,i=!$t()&&r,u=(n.left+(i&&s?s.offsetLeft:0))/o,c=(n.top+(i&&s?s.offsetTop:0))/a,f=n.width/o,g=n.height/a;return{width:f,height:g,top:c,right:u+f,bottom:c+g,left:u,x:u,y:c}}function Fe(e){var t=se(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Ct(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&He(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function K(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){return N(e).getComputedStyle(e)}function Ir(e){return["table","td","th"].indexOf(K(e))>=0}function Y(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function je(e){return K(e)==="html"?e:e.assignedSlot||e.parentNode||(He(e)?e.host:null)||Y(e)}function st(e){return!z(e)||U(e).position==="fixed"?null:e.offsetParent}function Wr(e){var t=/firefox/i.test(We()),r=/Trident/i.test(We());if(r&&z(e)){var n=U(e);if(n.position==="fixed")return null}var o=je(e);for(He(o)&&(o=o.host);z(o)&&["html","body"].indexOf(K(o))<0;){var a=U(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function ye(e){for(var t=N(e),r=st(e);r&&Ir(r)&&U(r).position==="static";)r=st(r);return r&&(K(r)==="html"||K(r)==="body"&&U(r).position==="static")?t:r||Wr(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e,t,r){return Z(e,Ae(t,r))}function Lr(e,t,r){var n=ve(e,t,r);return n>r?r:n}function Dt(){return{top:0,right:0,bottom:0,left:0}}function Et(e){return Object.assign({},Dt(),e)}function At(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Nr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Et(typeof t!="number"?t:At(t,we))};function Hr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,s=q(r.placement),i=Ve(s),u=[W,F].indexOf(s)>=0,c=u?"height":"width";if(!(!a||!l)){var f=Nr(o.padding,r),g=Fe(a),p=i==="y"?I:W,m=i==="y"?H:F,h=r.rects.reference[c]+r.rects.reference[i]-l[i]-r.rects.popper[c],d=l[i]-r.rects.reference[i],O=ye(a),b=O?i==="y"?O.clientHeight||0:O.clientWidth||0:0,x=h/2-d/2,w=f[p],y=b-g[c]-f[m],C=b/2-g[c]/2+x,D=ve(w,C,y),E=i;r.modifiersData[n]=(t={},t[E]=D,t.centerOffset=D-C,t)}}function Fr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Ct(t.elements.popper,o)&&(t.elements.arrow=o))}const Vr={name:"arrow",enabled:!0,phase:"main",fn:Hr,effect:Fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ce(e){return e.split("-")[1]}var qr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ie(r*o)/o||0,y:ie(n*o)/o||0}}function ct(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,l=e.offsets,s=e.position,i=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,f=e.isFixed,g=l.x,p=g===void 0?0:g,m=l.y,h=m===void 0?0:m,d=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=d.x,h=d.y;var O=l.hasOwnProperty("x"),b=l.hasOwnProperty("y"),x=W,w=I,y=window;if(u){var C=ye(r),D="clientHeight",E="clientWidth";if(C===N(r)&&(C=Y(r),U(C).position!=="static"&&s==="absolute"&&(D="scrollHeight",E="scrollWidth")),C=C,o===I||(o===W||o===F)&&a===ge){w=H;var S=f&&C===y&&y.visualViewport?y.visualViewport.height:C[D];h-=S-n.height,h*=i?1:-1}if(o===W||(o===I||o===H)&&a===ge){x=F;var j=f&&C===y&&y.visualViewport?y.visualViewport.width:C[E];p-=j-n.width,p*=i?1:-1}}var $=Object.assign({position:s},u&&qr),A=c===!0?zr({x:p,y:h},N(r)):{x:p,y:h};if(p=A.x,h=A.y,i){var P;return Object.assign({},$,(P={},P[w]=b?"0":"",P[x]=O?"0":"",P.transform=(y.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",P))}return Object.assign({},$,(t={},t[w]=b?h+"px":"",t[x]=O?p+"px":"",t.transform="",t))}function Ur(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,l=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,u={placement:q(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ct(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ct(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Xr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ur,data:{}};var De={passive:!0};function Kr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,l=n.resize,s=l===void 0?!0:l,i=N(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(c){c.addEventListener("scroll",r.update,De)}),s&&i.addEventListener("resize",r.update,De),function(){a&&u.forEach(function(c){c.removeEventListener("scroll",r.update,De)}),s&&i.removeEventListener("resize",r.update,De)}}const Yr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Kr,data:{}};var Gr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ee(e){return e.replace(/left|right|bottom|top/g,function(t){return Gr[t]})}var Jr={start:"end",end:"start"};function ut(e){return e.replace(/start|end/g,function(t){return Jr[t]})}function qe(e){var t=N(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ze(e){return se(Y(e)).left+qe(e).scrollLeft}function Qr(e,t){var r=N(e),n=Y(e),o=r.visualViewport,a=n.clientWidth,l=n.clientHeight,s=0,i=0;if(o){a=o.width,l=o.height;var u=$t();(u||!u&&t==="fixed")&&(s=o.offsetLeft,i=o.offsetTop)}return{width:a,height:l,x:s+ze(e),y:i}}function Zr(e){var t,r=Y(e),n=qe(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=Z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=Z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+ze(e),i=-n.scrollTop;return U(o||r).direction==="rtl"&&(s+=Z(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:l,x:s,y:i}}function Ue(e){var t=U(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Pt(e){return["html","body","#document"].indexOf(K(e))>=0?e.ownerDocument.body:z(e)&&Ue(e)?e:Pt(je(e))}function me(e,t){var r;t===void 0&&(t=[]);var n=Pt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=N(n),l=o?[a].concat(a.visualViewport||[],Ue(n)?n:[]):n,s=t.concat(l);return o?s:s.concat(me(je(l)))}function Le(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _r(e,t){var r=se(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function lt(e,t,r){return t===xt?Le(Qr(e,r)):ee(t)?_r(t,r):Le(Zr(Y(e)))}function en(e){var t=me(je(e)),r=["absolute","fixed"].indexOf(U(e).position)>=0,n=r&&z(e)?ye(e):e;return ee(n)?t.filter(function(o){return ee(o)&&Ct(o,n)&&K(o)!=="body"}):[]}function tn(e,t,r,n){var o=t==="clippingParents"?en(e):[].concat(t),a=[].concat(o,[r]),l=a[0],s=a.reduce(function(i,u){var c=lt(e,u,n);return i.top=Z(c.top,i.top),i.right=Ae(c.right,i.right),i.bottom=Ae(c.bottom,i.bottom),i.left=Z(c.left,i.left),i},lt(e,l,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function St(e){var t=e.reference,r=e.element,n=e.placement,o=n?q(n):null,a=n?ce(n):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(o){case I:i={x:l,y:t.y-r.height};break;case H:i={x:l,y:t.y+t.height};break;case F:i={x:t.x+t.width,y:s};break;case W:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var u=o?Ve(o):null;if(u!=null){var c=u==="y"?"height":"width";switch(a){case ae:i[u]=i[u]-(t[c]/2-r[c]/2);break;case ge:i[u]=i[u]+(t[c]/2-r[c]/2);break}}return i}function he(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,l=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Cr:s,u=r.rootBoundary,c=u===void 0?xt:u,f=r.elementContext,g=f===void 0?pe:f,p=r.altBoundary,m=p===void 0?!1:p,h=r.padding,d=h===void 0?0:h,O=Et(typeof d!="number"?d:At(d,we)),b=g===pe?Dr:pe,x=e.rects.popper,w=e.elements[m?b:g],y=tn(ee(w)?w:w.contextElement||Y(e.elements.popper),i,c,l),C=se(e.elements.reference),D=St({reference:C,element:x,strategy:"absolute",placement:o}),E=Le(Object.assign({},x,D)),S=g===pe?E:C,j={top:y.top-S.top+O.top,bottom:S.bottom-y.bottom+O.bottom,left:y.left-S.left+O.left,right:S.right-y.right+O.right},$=e.modifiersData.offset;if(g===pe&&$){var A=$[o];Object.keys(j).forEach(function(P){var M=[F,H].indexOf(P)>=0?1:-1,B=[I,H].indexOf(P)>=0?"y":"x";j[P]+=A[B]*M})}return j}function rn(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,l=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,u=i===void 0?Ot:i,c=ce(n),f=c?s?it:it.filter(function(m){return ce(m)===c}):we,g=f.filter(function(m){return u.indexOf(m)>=0});g.length===0&&(g=f);var p=g.reduce(function(m,h){return m[h]=he(e,{placement:h,boundary:o,rootBoundary:a,padding:l})[q(h)],m},{});return Object.keys(p).sort(function(m,h){return p[m]-p[h]})}function nn(e){if(q(e)===Ne)return[];var t=Ee(e);return[ut(e),t,ut(t)]}function on(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,l=r.altAxis,s=l===void 0?!0:l,i=r.fallbackPlacements,u=r.padding,c=r.boundary,f=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,m=p===void 0?!0:p,h=r.allowedAutoPlacements,d=t.options.placement,O=q(d),b=O===d,x=i||(b||!m?[Ee(d)]:nn(d)),w=[d].concat(x).reduce(function(oe,X){return oe.concat(q(X)===Ne?rn(t,{placement:X,boundary:c,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:h}):X)},[]),y=t.rects.reference,C=t.rects.popper,D=new Map,E=!0,S=w[0],j=0;j<w.length;j++){var $=w[j],A=q($),P=ce($)===ae,M=[I,H].indexOf(A)>=0,B=M?"width":"height",k=he(t,{placement:$,boundary:c,rootBoundary:f,altBoundary:g,padding:u}),L=M?P?F:W:P?H:I;y[B]>C[B]&&(L=Ee(L));var ue=Ee(L),V=[];if(a&&V.push(k[A]<=0),s&&V.push(k[L]<=0,k[ue]<=0),V.every(function(oe){return oe})){S=$,E=!1;break}D.set($,V)}if(E)for(var R=m?3:1,ne=function(X){var fe=w.find(function(Oe){var G=D.get(Oe);if(G)return G.slice(0,X).every(function(Me){return Me})});if(fe)return S=fe,"break"},le=R;le>0;le--){var xe=ne(le);if(xe==="break")break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}const an={name:"flip",enabled:!0,phase:"main",fn:on,requiresIfExists:["offset"],data:{_skip:!1}};function ft(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function pt(e){return[I,F,H,W].some(function(t){return e[t]>=0})}function sn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,l=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),i=ft(l,n),u=ft(s,o,a),c=pt(i),f=pt(u);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}const cn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sn};function un(e,t,r){var n=q(e),o=[W,I].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=a[0],s=a[1];return l=l||0,s=(s||0)*o,[W,F].indexOf(n)>=0?{x:s,y:l}:{x:l,y:s}}function ln(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,l=Ot.reduce(function(c,f){return c[f]=un(f,t.rects,a),c},{}),s=l[t.placement],i=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=l}const fn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ln};function pn(e){var t=e.state,r=e.name;t.modifiersData[r]=St({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const dn={name:"popperOffsets",enabled:!0,phase:"read",fn:pn,data:{}};function vn(e){return e==="x"?"y":"x"}function mn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,l=r.altAxis,s=l===void 0?!1:l,i=r.boundary,u=r.rootBoundary,c=r.altBoundary,f=r.padding,g=r.tether,p=g===void 0?!0:g,m=r.tetherOffset,h=m===void 0?0:m,d=he(t,{boundary:i,rootBoundary:u,padding:f,altBoundary:c}),O=q(t.placement),b=ce(t.placement),x=!b,w=Ve(O),y=vn(w),C=t.modifiersData.popperOffsets,D=t.rects.reference,E=t.rects.popper,S=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,j=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(C){if(a){var P,M=w==="y"?I:W,B=w==="y"?H:F,k=w==="y"?"height":"width",L=C[w],ue=L+d[M],V=L-d[B],R=p?-E[k]/2:0,ne=b===ae?D[k]:E[k],le=b===ae?-E[k]:-D[k],xe=t.elements.arrow,oe=p&&xe?Fe(xe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Dt(),fe=X[M],Oe=X[B],G=ve(0,D[k],oe[k]),Me=x?D[k]/2-R-G-fe-j.mainAxis:ne-G-fe-j.mainAxis,Qt=x?-D[k]/2+R+G+Oe+j.mainAxis:le+G+Oe+j.mainAxis,ke=t.elements.arrow&&ye(t.elements.arrow),Zt=ke?w==="y"?ke.clientTop||0:ke.clientLeft||0:0,Xe=(P=$==null?void 0:$[w])!=null?P:0,_t=L+Me-Xe-Zt,er=L+Qt-Xe,Ke=ve(p?Ae(ue,_t):ue,L,p?Z(V,er):V);C[w]=Ke,A[w]=Ke-L}if(s){var Ye,tr=w==="x"?I:W,rr=w==="x"?H:F,J=C[y],$e=y==="y"?"height":"width",Ge=J+d[tr],Je=J-d[rr],Re=[I,W].indexOf(O)!==-1,Qe=(Ye=$==null?void 0:$[y])!=null?Ye:0,Ze=Re?Ge:J-D[$e]-E[$e]-Qe+j.altAxis,_e=Re?J+D[$e]+E[$e]-Qe-j.altAxis:Je,et=p&&Re?Lr(Ze,J,_e):ve(p?Ze:Ge,J,p?_e:Je);C[y]=et,A[y]=et-J}t.modifiersData[n]=A}}const gn={name:"preventOverflow",enabled:!0,phase:"main",fn:mn,requiresIfExists:["offset"]};function hn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function wn(e){return e===N(e)||!z(e)?qe(e):hn(e)}function yn(e){var t=e.getBoundingClientRect(),r=ie(t.width)/e.offsetWidth||1,n=ie(t.height)/e.offsetHeight||1;return r!==1||n!==1}function bn(e,t,r){r===void 0&&(r=!1);var n=z(t),o=z(t)&&yn(t),a=Y(t),l=se(e,o,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((K(t)!=="body"||Ue(a))&&(s=wn(t)),z(t)?(i=se(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=ze(a))),{x:l.left+s.scrollLeft-i.x,y:l.top+s.scrollTop-i.y,width:l.width,height:l.height}}function xn(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&o(i)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function On(e){var t=xn(e);return Br.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function $n(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Cn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var dt={placement:"bottom",modifiers:[],strategy:"absolute"};function vt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Dn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?dt:o;return function(s,i,u){u===void 0&&(u=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},dt,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},f=[],g=!1,p={state:c,setOptions:function(O){var b=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},a,c.options,b),c.scrollParents={reference:ee(s)?me(s):s.contextElement?me(s.contextElement):[],popper:me(i)};var x=On(Cn([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(w){return w.enabled}),m(),p.update()},forceUpdate:function(){if(!g){var O=c.elements,b=O.reference,x=O.popper;if(vt(b,x)){c.rects={reference:bn(b,ye(x),c.options.strategy==="fixed"),popper:Fe(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var y=c.orderedModifiers[w],C=y.fn,D=y.options,E=D===void 0?{}:D,S=y.name;typeof C=="function"&&(c=C({state:c,options:E,name:S,instance:p})||c)}}}},update:$n(function(){return new Promise(function(d){p.forceUpdate(),d(c)})}),destroy:function(){h(),g=!0}};if(!vt(s,i))return p;p.setOptions(u).then(function(d){!g&&u.onFirstUpdate&&u.onFirstUpdate(d)});function m(){c.orderedModifiers.forEach(function(d){var O=d.name,b=d.options,x=b===void 0?{}:b,w=d.effect;if(typeof w=="function"){var y=w({state:c,name:O,instance:p,options:x}),C=function(){};f.push(y||C)}})}function h(){f.forEach(function(d){return d()}),f=[]}return p}}const En=Dn({defaultModifiers:[cn,dn,Xr,Yr,fn,an,gn,Vr]}),An=["enabled","placement","strategy","modifiers"];function Pn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}const Sn={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},jn={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const a=n.getAttribute("aria-describedby");if(a&&a.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",a?`${a},${r.id}`:r.id)}}},Mn=[];function kn(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:a="absolute",modifiers:l=Mn}=r,s=Pn(r,An);const i=v.useRef(l),u=v.useRef(),c=v.useCallback(()=>{var d;(d=u.current)==null||d.update()},[]),f=v.useCallback(()=>{var d;(d=u.current)==null||d.forceUpdate()},[]),[g,p]=$r(v.useState({placement:o,update:c,forceUpdate:f,attributes:{},styles:{popper:{},arrow:{}}})),m=v.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:d})=>{const O={},b={};Object.keys(d.elements).forEach(x=>{O[x]=d.styles[x],b[x]=d.attributes[x]}),p({state:d,styles:O,attributes:b,update:c,forceUpdate:f,placement:d.placement})}}),[c,f,p]),h=v.useMemo(()=>(de(i.current,l)||(i.current=l),i.current),[l]);return v.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:a,modifiers:[...h,m,Sn]})},[a,o,m,n,h]),v.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=En(e,t,Object.assign({},s,{placement:o,strategy:a,modifiers:[...h,jn,m]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(d=>Object.assign({},d,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),g}var Rn=function(){},Tn=Rn;const Bn=or(Tn),mt=()=>{};function In(e){return e.button===0}function Wn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const Te=e=>e&&("current"in e?e.current:e),gt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Ln(e,t=mt,{disabled:r,clickTrigger:n="click"}={}){const o=v.useRef(!1),a=v.useRef(!1),l=v.useCallback(u=>{const c=Te(e);Bn(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),o.current=!c||Wn(u)||!In(u)||!!tt(c,u.target)||a.current,a.current=!1},[e]),s=Q(u=>{const c=Te(e);c&&tt(c,u.target)?a.current=!0:a.current=!1}),i=Q(u=>{o.current||t(u)});v.useEffect(()=>{var u,c;if(r||e==null)return;const f=ir(Te(e)),g=f.defaultView||window;let p=(u=g.event)!=null?u:(c=g.parent)==null?void 0:c.event,m=null;gt[n]&&(m=Ce(f,gt[n],s,!0));const h=Ce(f,n,l,!0),d=Ce(f,n,b=>{if(b===p){p=void 0;return}i(b)});let O=[];return"ontouchstart"in f.documentElement&&(O=[].slice.call(f.body.children).map(b=>Ce(b,"mousemove",mt))),()=>{m==null||m(),h(),d(),O.forEach(b=>b())}},[e,r,n,l,s,i])}function Nn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function Hn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Fn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:a,containerPadding:l,arrowElement:s,popperConfig:i={}}){var u,c,f,g,p;const m=Nn(i.modifiers);return Object.assign({},i,{placement:r,enabled:e,strategy:a?"fixed":i.strategy,modifiers:Hn(Object.assign({},m,{eventListeners:{enabled:t,options:(u=m.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},m.preventOverflow,{options:l?Object.assign({padding:l},(c=m.preventOverflow)==null?void 0:c.options):(f=m.preventOverflow)==null?void 0:f.options}),offset:{options:Object.assign({offset:o},(g=m.offset)==null?void 0:g.options)},arrow:Object.assign({},m.arrow,{enabled:!!s,options:Object.assign({},(p=m.arrow)==null?void 0:p.options,{element:s})}),flip:Object.assign({enabled:!!n},m.flip)}))})}const Vn=["children","usePopper"];function qn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}const zn=()=>{};function jt(e={}){const t=v.useContext(Se),[r,n]=yr(),o=v.useRef(!1),{flip:a,offset:l,rootCloseEvent:s,fixed:i=!1,placement:u,popperConfig:c={},enableEventListeners:f=!0,usePopper:g=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!o.current&&(o.current=!0);const m=C=>{t==null||t.toggle(!1,C)},{placement:h,setMenu:d,menuElement:O,toggleElement:b}=t||{},x=kn(b,O,Fn({placement:u||h||"bottom-start",enabled:g,enableEvents:f??p,offset:l,flip:a,fixed:i,arrowElement:r,popperConfig:c})),w=Object.assign({ref:d||zn,"aria-labelledby":b==null?void 0:b.id},x.attributes.popper,{style:x.styles.popper}),y={show:p,placement:h,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:g?x:null,arrowProps:g?Object.assign({ref:n},x.attributes.arrow,{style:x.styles.arrow}):{}};return Ln(O,m,{clickTrigger:s,disabled:!p}),[w,y]}function Mt(e){let{children:t,usePopper:r=!0}=e,n=qn(e,Vn);const[o,a]=jt(Object.assign({},n,{usePopper:r}));return T.jsx(T.Fragment,{children:t(o,a)})}Mt.displayName="DropdownMenu";const Pe={prefix:String(Math.round(Math.random()*1e10)),current:0},kt=_.createContext(Pe),Un=_.createContext(!1);let Xn=!!(typeof window<"u"&&window.document&&window.document.createElement),Be=new WeakMap;function Kn(e=!1){let t=v.useContext(kt),r=v.useRef(null);if(r.current===null&&!e){var n,o;let a=(o=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(n=o.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(a){let l=Be.get(a);l==null?Be.set(a,{id:t.current,state:a.memoizedState}):a.memoizedState!==l.state&&(t.current=l.id,Be.delete(a))}r.current=++t.current}return r.current}function Yn(e){let t=v.useContext(kt);t===Pe&&!Xn&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=Kn(!!e),n=`react-aria${t.prefix}`;return e||`${n}-${r}`}function Gn(e){let t=_.useId(),[r]=v.useState(eo()),n=r?"react-aria":`react-aria${Pe.prefix}`;return e||`${n}-${t}`}const Jn=typeof _.useId=="function"?Gn:Yn;function Qn(){return!1}function Zn(){return!0}function _n(e){return()=>{}}function eo(){return typeof _.useSyncExternalStore=="function"?_.useSyncExternalStore(_n,Qn,Zn):v.useContext(Un)}const Rt=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},ht=()=>{};function Tt(){const e=Jn(),{show:t=!1,toggle:r=ht,setToggle:n,menuElement:o}=v.useContext(Se)||{},a=v.useCallback(s=>{r(!t,s)},[t,r]),l={id:e,ref:n||ht,onClick:a,"aria-expanded":!!t};return o&&Rt(o)&&(l["aria-haspopup"]=!0),[l,{show:t,toggle:r}]}function Bt({children:e}){const[t,r]=Tt();return T.jsx(T.Fragment,{children:e(t,r)})}Bt.displayName="DropdownToggle";const to=["eventKey","disabled","onClick","active","as"];function ro(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function It({key:e,href:t,active:r,disabled:n,onClick:o}){const a=v.useContext(Ie),l=v.useContext(sr),{activeKey:s}=l||{},i=rt(e,t),u=r==null&&e!=null?rt(s)===i:r;return[{onClick:Q(f=>{n||(o==null||o(f),a&&!f.isPropagationStopped()&&a(i,f))}),"aria-disabled":n||void 0,"aria-selected":u,[yt("dropdown-item")]:""},{isActive:u}]}const Wt=v.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:a,as:l=hr}=e,s=ro(e,to);const[i]=It({key:r,href:s.href,disabled:n,onClick:o,active:a});return T.jsx(l,Object.assign({},s,{ref:t},i))});Wt.displayName="DropdownItem";function wt(){const e=lr(),t=v.useRef(null),r=v.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function be({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${yt("dropdown-item")}]`,focusFirstItemOnShow:a,placement:l="bottom-start",children:s}){const i=cr(),[u,c]=xr(t,e,n),[f,g]=wt(),p=f.current,[m,h]=wt(),d=m.current,O=ur(u),b=v.useRef(null),x=v.useRef(!1),w=v.useContext(Ie),y=v.useCallback(($,A,P=A==null?void 0:A.type)=>{c($,{originalEvent:A,source:P})},[c]),C=Q(($,A)=>{r==null||r($,A),y(!1,A,"select"),A.isPropagationStopped()||w==null||w($,A)}),D=v.useMemo(()=>({toggle:y,placement:l,show:u,menuElement:p,toggleElement:d,setMenu:g,setToggle:h}),[y,l,u,p,d,g,h]);p&&O&&!u&&(x.current=p.contains(p.ownerDocument.activeElement));const E=Q(()=>{d&&d.focus&&d.focus()}),S=Q(()=>{const $=b.current;let A=a;if(A==null&&(A=f.current&&Rt(f.current)?"keyboard":!1),A===!1||A==="keyboard"&&!/^key.+$/.test($))return;const P=nt(f.current,o)[0];P&&P.focus&&P.focus()});v.useEffect(()=>{u?S():x.current&&(x.current=!1,E())},[u,x,E,S]),v.useEffect(()=>{b.current=null});const j=($,A)=>{if(!f.current)return null;const P=nt(f.current,o);let M=P.indexOf($)+A;return M=Math.max(0,Math.min(M,P.length)),P[M]};return br(v.useCallback(()=>i.document,[i]),"keydown",$=>{var A,P;const{key:M}=$,B=$.target,k=(A=f.current)==null?void 0:A.contains(B),L=(P=m.current)==null?void 0:P.contains(B);if(/input|textarea/i.test(B.tagName)&&(M===" "||M!=="Escape"&&k||M==="Escape"&&B.type==="search")||!k&&!L||M==="Tab"&&(!f.current||!u))return;b.current=$.type;const V={originalEvent:$,source:$.type};switch(M){case"ArrowUp":{const R=j(B,-1);R&&R.focus&&R.focus(),$.preventDefault();return}case"ArrowDown":if($.preventDefault(),!u)c(!0,V);else{const R=j(B,1);R&&R.focus&&R.focus()}return;case"Tab":fr(B.ownerDocument,"keyup",R=>{var ne;(R.key==="Tab"&&!R.target||!((ne=f.current)!=null&&ne.contains(R.target)))&&c(!1,V)},{once:!0});break;case"Escape":M==="Escape"&&($.preventDefault(),$.stopPropagation()),c(!1,V);break}}),T.jsx(Ie.Provider,{value:C,children:T.jsx(Se.Provider,{value:D,children:s})})}be.displayName="Dropdown";be.Menu=Mt;be.Toggle=Bt;be.Item=Wt;const Lt=v.createContext({});Lt.displayName="DropdownContext";const Nt=Lt,Ht=v.forwardRef(({className:e,bsPrefix:t,as:r="hr",role:n="separator",...o},a)=>(t=te(t,"dropdown-divider"),T.jsx(r,{ref:a,className:re(e,t),role:n,...o})));Ht.displayName="DropdownDivider";const no=Ht,Ft=v.forwardRef(({className:e,bsPrefix:t,as:r="div",role:n="heading",...o},a)=>(t=te(t,"dropdown-header"),T.jsx(r,{ref:a,className:re(e,t),role:n,...o})));Ft.displayName="DropdownHeader";const oo=Ft,Vt=v.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:a,as:l=pr,...s},i)=>{const u=te(e,"dropdown-item"),[c,f]=It({key:r,href:s.href,disabled:n,onClick:o,active:a});return T.jsx(l,{...s,...c,ref:i,className:re(t,u,f.isActive&&"active",n&&"disabled")})});Vt.displayName="DropdownItem";const ao=Vt,qt=v.forwardRef(({className:e,bsPrefix:t,as:r="span",...n},o)=>(t=te(t,"dropdown-item-text"),T.jsx(r,{ref:o,className:re(e,t),...n})));qt.displayName="DropdownItemText";const io=qt,zt=v.createContext(null);zt.displayName="InputGroupContext";const Ut=zt;function Xt(e,t){return e}function Kt(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",a=r?"bottom-end":"bottom-start",l=r?"bottom-start":"bottom-end",s=r?"right-start":"left-start",i=r?"right-end":"left-end",u=r?"left-start":"right-start",c=r?"left-end":"right-end";let f=e?l:a;return t==="up"?f=e?o:n:t==="end"?f=e?c:u:t==="start"?f=e?i:s:t==="down-centered"?f="bottom":t==="up-centered"&&(f="top"),f}const Yt=v.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o=!0,show:a,renderOnMount:l,as:s="div",popperConfig:i,variant:u,...c},f)=>{let g=!1;const p=v.useContext(dr),m=te(e,"dropdown-menu"),{align:h,drop:d,isRTL:O}=v.useContext(Nt);r=r||h;const b=v.useContext(Ut),x=[];if(r)if(typeof r=="object"){const $=Object.keys(r);if($.length){const A=$[0],P=r[A];g=P==="start",x.push(`${m}-${A}-${P}`)}}else r==="end"&&(g=!0);const w=Kt(g,d,O),[y,{hasShown:C,popper:D,show:E,toggle:S}]=jt({flip:o,rootCloseEvent:n,show:a,usePopper:!p&&x.length===0,offset:[0,2],popperConfig:i,placement:w});if(y.ref=bt(Xt(f),y.ref),vr(()=>{E&&(D==null||D.update())},[E]),!C&&!l&&!b)return null;typeof s!="string"&&(y.show=E,y.close=()=>S==null?void 0:S(!1),y.align=r);let j=c.style;return D!=null&&D.placement&&(j={...c.style,...y.style},c["x-placement"]=D.placement),T.jsx(s,{...c,...y,style:j,...(x.length||p)&&{"data-bs-popper":"static"},className:re(t,m,E&&"show",g&&`${m}-end`,u&&`${m}-${u}`,...x)})});Yt.displayName="DropdownMenu";const so=Yt,Gt=v.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=wr,...a},l)=>{const s=te(e,"dropdown-toggle"),i=v.useContext(Se);n!==void 0&&(a.bsPrefix=n);const[u]=Tt();return u.ref=bt(u.ref,Xt(l)),T.jsx(o,{className:re(r,s,t&&`${s}-split`,(i==null?void 0:i.show)&&"show"),...u,...a})});Gt.displayName="DropdownToggle";const co=Gt,Jt=v.forwardRef((e,t)=>{const{bsPrefix:r,drop:n="down",show:o,className:a,align:l="start",onSelect:s,onToggle:i,focusFirstItemOnShow:u,as:c="div",navbar:f,autoClose:g=!0,...p}=mr(e,{show:"onToggle"}),m=v.useContext(Ut),h=te(r,"dropdown"),d=nr(),O=D=>g===!1?D==="click":g==="inside"?D!=="rootClose":g==="outside"?D!=="select":!0,b=gr((D,E)=>{var S;!((S=E.originalEvent)==null||(S=S.target)==null)&&S.classList.contains("dropdown-toggle")&&E.source==="mousedown"||(E.originalEvent.currentTarget===document&&(E.source!=="keydown"||E.originalEvent.key==="Escape")&&(E.source="rootClose"),O(E.source)&&(i==null||i(D,E)))}),w=Kt(l==="end",n,d),y=v.useMemo(()=>({align:l,drop:n,isRTL:d}),[l,n,d]),C={down:h,"down-centered":`${h}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return T.jsx(Nt.Provider,{value:y,children:T.jsx(be,{placement:w,show:o,onSelect:s,onToggle:b,focusFirstItemOnShow:u,itemSelector:`.${h}-item:not(.disabled):not(:disabled)`,children:m?p.children:T.jsx(c,{...p,ref:t,className:re(a,o&&"show",C[n])})})})});Jt.displayName="Dropdown";const mo=Object.assign(Jt,{Toggle:co,Menu:so,Item:ao,ItemText:io,Divider:no,Header:oo});export{mo as D};
