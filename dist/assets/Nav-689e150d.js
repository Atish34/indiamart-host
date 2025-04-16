import{u as w,c as K}from"./ThemeProvider-48707fb0.js";import{r as s,j as N}from"./index-a34ac5e4.js";import{S as j,b as S,d as O,u as H,m as R,g as W,r as F,s as M,q as V,A as Y,n as z,i as G}from"./Navbar-295070b0.js";import{B as J}from"./Button-952ae1d0.js";import{C as Q}from"./CardHeaderContext-c8dce645.js";const X=s.createContext(null),L=X,Z=["as","active","eventKey"];function ee(e,a){if(e==null)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)>=0)continue;n[t]=e[t]}return n}function B({key:e,onClick:a,active:n,id:t,role:l,disabled:o}){const i=s.useContext(j),c=s.useContext(S),x=s.useContext(L);let u=n;const r={role:l};if(c){!l&&c.role==="tablist"&&(r.role="tab");const d=c.getControllerId(e??null),m=c.getControlledId(e??null);r[O("event-key")]=e,r.id=d||t,u=n==null&&e!=null?c.activeKey===e:n,(u||!(x!=null&&x.unmountOnExit)&&!(x!=null&&x.mountOnEnter))&&(r["aria-controls"]=m)}return r.role==="tab"&&(r["aria-selected"]=u,u||(r.tabIndex=-1),o&&(r.tabIndex=-1,r["aria-disabled"]=!0)),r.onClick=H(d=>{o||(a==null||a(d),e!=null&&i&&!d.isPropagationStopped()&&i(e,d))}),[r,{isActive:u}]}const D=s.forwardRef((e,a)=>{let{as:n=J,active:t,eventKey:l}=e,o=ee(e,Z);const[i,c]=B(Object.assign({key:R(l,o.href),active:t},o));return i[O("active")]=c.isActive,N.jsx(n,Object.assign({},o,i,{ref:a}))});D.displayName="NavItem";const te=D,ne=["as","onSelect","activeKey","role","onKeyDown"];function ae(e,a){if(e==null)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(a.indexOf(t)>=0)continue;n[t]=e[t]}return n}const E=()=>{},P=O("event-key"),T=s.forwardRef((e,a)=>{let{as:n="div",onSelect:t,activeKey:l,role:o,onKeyDown:i}=e,c=ae(e,ne);const x=W(),u=s.useRef(!1),r=s.useContext(j),d=s.useContext(L);let m,b;d&&(o=o||"tablist",l=d.activeKey,m=d.getControlledId,b=d.getControllerId);const p=s.useRef(null),C=f=>{const v=p.current;if(!v)return null;const $=V(v,`[${P}]:not([aria-disabled=true])`),h=v.querySelector("[aria-selected=true]");if(!h||h!==document.activeElement)return null;const A=$.indexOf(h);if(A===-1)return null;let g=A+f;return g>=$.length&&(g=0),g<0&&(g=$.length-1),$[g]},I=(f,v)=>{f!=null&&(t==null||t(f,v),r==null||r(f,v))},y=f=>{if(i==null||i(f),!d)return;let v;switch(f.key){case"ArrowLeft":case"ArrowUp":v=C(-1);break;case"ArrowRight":case"ArrowDown":v=C(1);break;default:return}v&&(f.preventDefault(),I(v.dataset[M("EventKey")]||null,f),u.current=!0,x())};s.useEffect(()=>{if(p.current&&u.current){const f=p.current.querySelector(`[${P}][aria-selected=true]`);f==null||f.focus()}u.current=!1});const _=F(a,p);return N.jsx(j.Provider,{value:I,children:N.jsx(S.Provider,{value:{role:o,activeKey:R(l),getControlledId:m||E,getControllerId:b||E},children:N.jsx(n,Object.assign({},c,{onKeyDown:y,ref:_,role:o}))})})});T.displayName="Nav";const oe=Object.assign(T,{Item:te}),k=s.forwardRef(({className:e,bsPrefix:a,as:n="div",...t},l)=>(a=w(a,"nav-item"),N.jsx(n,{ref:l,className:K(e,a),...t})));k.displayName="NavItem";const re=k,q=s.forwardRef(({bsPrefix:e,className:a,as:n=Y,active:t,eventKey:l,disabled:o=!1,...i},c)=>{e=w(e,"nav-link");const[x,u]=B({key:R(l,i.href),active:t,disabled:o,...i});return N.jsx(n,{...i,...x,ref:c,disabled:o,className:K(a,e,o&&"disabled",u.isActive&&"active")})});q.displayName="NavLink";const se=q,U=s.forwardRef((e,a)=>{const{as:n="div",bsPrefix:t,variant:l,fill:o=!1,justify:i=!1,navbar:c,navbarScroll:x,className:u,activeKey:r,...d}=z(e,{activeKey:"onSelect"}),m=w(t,"nav");let b,p,C=!1;const I=s.useContext(G),y=s.useContext(Q);return I?(b=I.bsPrefix,C=c??!0):y&&({cardHeaderBsPrefix:p}=y),N.jsx(oe,{as:n,ref:a,activeKey:r,className:K(u,{[m]:!C,[`${b}-nav`]:C,[`${b}-nav-scroll`]:C&&x,[`${p}-${l}`]:!!p,[`${m}-${l}`]:!!l,[`${m}-fill`]:o,[`${m}-justified`]:i}),...d})});U.displayName="Nav";const fe=Object.assign(U,{Item:re,Link:se});export{se as N,fe as a};
