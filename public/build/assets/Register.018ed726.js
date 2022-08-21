import{E as _,b as u,g as c,m as e,u as o,H as p,e as l,F as w,f as a,v as h,L as g,q as v,x as y,k as n}from"./app.753034a2.js";import{J as V}from"./AuthenticationCard.598aa467.js";import{_ as k}from"./AuthenticationCardLogo.f75c3b76.js";import{_ as b}from"./Button.8f97a9ee.js";import{_ as d}from"./Input.facd3d4b.js";import{_ as x}from"./Checkbox.d3064f24.js";import{_ as i}from"./Label.c04ef1b0.js";import{_ as $}from"./ValidationErrors.443f4213.js";import"./plugin-vue_export-helper.21dcd24c.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},F={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},A={class:"ml-2"},B=n(" I agree to the "),E=["href"],R=n(" and "),S=["href"],T={class:"flex items-center justify-end mt-4"},j=n(" Already registered? "),H=n(" Register "),W={__name:"Register",setup(J){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),f=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(m,t)=>(u(),c(w,null,[e(o(p),{title:"Register"}),e(V,null,{logo:l(()=>[e(k)]),default:l(()=>[e($,{class:"mb-4"}),a("form",{onSubmit:y(f,["prevent"])},[a("div",null,[e(i,{for:"name",value:"Name"}),e(d,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":t[0]||(t[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),a("div",q,[e(i,{for:"email",value:"Email"}),e(d,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":t[1]||(t[1]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),a("div",C,[e(i,{for:"password",value:"Password"}),e(d,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":t[2]||(t[2]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",F,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":t[3]||(t[3]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),m.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(u(),c("div",N,[e(i,{for:"terms"},{default:l(()=>[a("div",U,[e(x,{id:"terms",checked:o(s).terms,"onUpdate:checked":t[4]||(t[4]=r=>o(s).terms=r),name:"terms"},null,8,["checked"]),a("div",A,[B,a("a",{target:"_blank",href:m.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,E),R,a("a",{target:"_blank",href:m.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,S)])])]),_:1})])):h("",!0),a("div",T,[e(o(g),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[j]),_:1},8,["href"]),e(b,{class:v(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:l(()=>[H]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{W as default};
