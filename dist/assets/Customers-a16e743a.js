import{A as h,r as c,C as u,B as m,j as s}from"./index-a34ac5e4.js";import{C as x}from"./Container-16b23771.js";import{B as l}from"./Button-9fc4f2d9.js";import"./ThemeProvider-48707fb0.js";import"./Button-952ae1d0.js";const f=()=>{const[r,{isSuccess:a}]=h(),[t,n]=c.useState({skip:0,limit:2}),[d,{data:i}]=u();return c.useEffect(()=>{d(t)},[t]),c.useEffect(()=>{a&&m.success("customer blocked success")},[a]),s.jsxs(x,{children:[s.jsxs("select",{onChange:e=>n({skip:0,limit:e.target.value}),class:"form-select",children:[s.jsx("option",{value:"2",children:"2"}),s.jsx("option",{value:"5",children:"5"}),s.jsx("option",{value:"10",children:"10"})]}),i&&s.jsxs("table",{class:"table table-dark table-striped table-hover",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Name"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Mobile"}),s.jsx("th",{children:"Action"})]})}),s.jsx("tbody",{children:i.result.map(e=>s.jsxs("tr",{className:`
                    ${!e.isActive&&"table-danger"}
                    `,children:[s.jsx("td",{children:e.name}),s.jsx("td",{children:e.email}),s.jsx("td",{children:e.mobile}),s.jsx("td",{children:e.isActive?s.jsx(l,{onClick:o=>r({...e,isActive:!1}),variant:"danger",children:"Block"}):s.jsx(l,{onClick:o=>r({...e,isActive:!0}),variant:"success",children:"Unblock"})})]}))})]}),i&&[...Array(Math.ceil(i.total/t.limit)).keys()].map(e=>s.jsx(l,{className:"me-1",onClick:o=>n({...t,skip:e*t.limit}),children:e+1}))]})};export{f as default};
