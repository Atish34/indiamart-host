import{r as i,n as v,o as g,h as j,B as t,j as e,L as N,m as E}from"./index-a34ac5e4.js";import{u as S,c as L,a as f}from"./index.esm-df8c1c2c.js";const O=()=>{const[a,c]=i.useState(!1),[h,{isError:k,isLoading:p,isSuccess:l,error:n}]=v(),[x,{isError:d,isLoading:b,isSuccess:m,error:w}]=g(),o=j(),s=S({enableReinitialize:!0,initialValues:{mobile:"",otp:""},validationSchema:L({mobile:f().required("Enter mobile"),otp:f()}),onSubmit:(r,{resetForm:y})=>{a?x(r):h(r)}}),u=r=>E({"form-control my-2":!0,"is-invalid":s.touched[r]&&s.errors[r],"is-valid":s.touched[r]&&!s.errors[r]});return i.useEffect(()=>{l&&(s.setFieldValue("otp",""),c(!0),t.success("please verify otp"))},[l]),i.useEffect(()=>{m&&(t.success("Custemor login success"),o("/"))},[m]),i.useEffect(()=>{d&&(c(!1),t.error(n.data?n.data.message:"something went wrong"))},[d]),i.useEffect(()=>{localStorage.getItem("customer")&&o("/")},[o]),b||p?e.jsx("p",{children:"Please Wait ...."}):e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-3",children:e.jsxs("div",{className:"card my-2",children:[e.jsx("div",{className:"card-header text-center",children:"Login"}),e.jsxs("div",{className:"card-body",children:[a?e.jsxs("div",{children:[e.jsx("label",{for:"otp",className:"form-label",children:"Enter Otp"}),e.jsx("input",{type:"text",...s.getFieldProps("otp"),className:u(s),id:"otp",placeholder:"Enter Your otp"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.otp})]}):e.jsxs("div",{children:[e.jsx("label",{for:"mobile",className:"form-label",children:"Enter Mobile Number"}),e.jsx("input",{type:"text",...s.getFieldProps("mobile"),className:u(s),id:"mobile",placeholder:"Enter Your Mobile Number"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.mobile})]}),e.jsx("button",{className:"btn btn-primary w-100 mt-3",type:"submit",children:"Login"}),e.jsx(N,{className:"nav-link",to:"/register",children:"Dont have Account ? signup"})]})]})})})})})})};export{O as default};
