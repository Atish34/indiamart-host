import{r as n,j as s,u as y,a as h,b,c as N,L as g}from"./index-a34ac5e4.js";import{G as w,a as P,b as k}from"./index-b89b8293.js";import{F as G,a as S}from"./index-565a2359.js";import{u as B,c as C}from"./ThemeProvider-48707fb0.js";import{C as F}from"./Container-16b23771.js";import{R as x}from"./Row-055a1def.js";import{C as f}from"./Col-685b5cc5.js";import{C as m}from"./Card-32d7de1d.js";import"./iconBase-3f08b881.js";import"./CardHeaderContext-c8dce645.js";import"./divWithClassName-324694fd.js";const j=n.forwardRef(({bsPrefix:e,bg:r="primary",pill:d=!1,text:c,className:p,as:t="span",...a},u)=>{const i=B(e,"badge");return s.jsx(t,{ref:u,...a,className:C(p,i,d&&"rounded-pill",c&&`text-${c}`,r&&`bg-${r}`)})});j.displayName="Badge";const l=j,L=({selectedCategory:e,onCategoryChange:r})=>s.jsxs("div",{className:" shadow-sm rounded mb-4 gap-5 d-flex  ",children:[s.jsxs(l,{bg:e==="ladies wear"?"primary":"secondary",className:"p-2 fs-6",style:{cursor:"pointer"},onClick:()=>r("ladies wear"),children:[s.jsx(w,{className:"me-1"})," Ladies wear"]}),s.jsxs(l,{bg:e==="men wear"?"primary":"secondary",className:"p-2 fs-6",style:{cursor:"pointer"},onClick:()=>r("men wear"),children:[s.jsx(G,{className:"me-1"})," Men Wear"]}),s.jsxs(l,{bg:e==="foot wear"?"primary":"secondary",className:"p-2 fs-6",style:{cursor:"pointer"},onClick:()=>r("foot wear"),children:[s.jsx(P,{className:"me-1"})," Foot Wear"]}),s.jsxs(l,{bg:e==="mobile accessories"?"primary":"secondary",className:"p-2 fs-6",style:{cursor:"pointer"},onClick:()=>r("mobile accessories"),children:[s.jsx(S,{className:"me-1"})," Mobile Accessories"]}),s.jsxs(l,{bg:e==="beauty product"?"primary":"secondary",className:"p-2 fs-6",style:{cursor:"pointer"},onClick:()=>r("beauty product"),children:[s.jsx(k,{className:"me-1"})," Beauty Products"]})]}),M=()=>{const{searchTerm:e}=y(o=>o.search),{data:r}=h(),[d,{data:c}]=b(),[p,{data:t}]=N(),[a,u]=n.useState("");n.useEffect(()=>{e&&d({term:e})},[e]),n.useEffect(()=>{a&&p({category:a})},[a]);const i=e?c==null?void 0:c.result:a?t==null?void 0:t.result:r==null?void 0:r.result;return s.jsx(F,{className:"my-5",children:s.jsxs(x,{children:[s.jsx(f,{md:3,children:s.jsx(L,{selectedCategory:a,onCategoryChange:u})}),s.jsx(x,{children:i==null?void 0:i.map(o=>s.jsx(f,{sm:4,children:s.jsx(g,{to:`/details/${o._id}`,className:"text-decoration-none",children:s.jsxs(m,{className:"my-3",children:[s.jsx(m.Img,{src:o.hero[0],variant:"top"}),s.jsxs(m.Body,{children:[s.jsx(m.Title,{children:o.name}),s.jsxs(m.Text,{children:["Starting From ",o.price]})]})]})})},o._id))})]})})},q=()=>s.jsx(s.Fragment,{children:s.jsx(M,{})});export{q as default};
