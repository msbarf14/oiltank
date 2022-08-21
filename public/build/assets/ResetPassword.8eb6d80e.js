import{E as u,b as c,g as f,m as s,u as e,H as _,e as l,F as w,f as r,q as V,x as b,k}from"./app.753034a2.js";import{J as v}from"./AuthenticationCard.598aa467.js";import{_ as g}from"./AuthenticationCardLogo.f75c3b76.js";import{_ as x}from"./Button.8f97a9ee.js";import{_ as i}from"./Input.facd3d4b.js";import{_ as m}from"./Label.c04ef1b0.js";import{_ as y}from"./ValidationErrors.443f4213.js";import"./plugin-vue_export-helper.21dcd24c.js";const P=["onSubmit"],$={class:"mt-4"},h={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},C=k(" Reset Password "),j={__name:"ResetPassword",props:{email:String,token:String},setup(n){const d=n,o=u({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{o.post(route("password.update"),{onFinish:()=>o.reset("password","password_confirmation")})};return(F,a)=>(c(),f(w,null,[s(e(_),{title:"Reset Password"}),s(v,null,{logo:l(()=>[s(g)]),default:l(()=>[s(y,{class:"mb-4"}),r("form",{onSubmit:b(p,["prevent"])},[r("div",null,[s(m,{for:"email",value:"Email"}),s(i,{id:"email",modelValue:e(o).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(o).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),r("div",$,[s(m,{for:"password",value:"Password"}),s(i,{id:"password",modelValue:e(o).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(o).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",h,[s(m,{for:"password_confirmation",value:"Confirm Password"}),s(i,{id:"password_confirmation",modelValue:e(o).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(o).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",q,[s(x,{class:V({"opacity-25":e(o).processing}),disabled:e(o).processing},{default:l(()=>[C]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{j as default};
