import{E as _,o as d,c as u,f as a,g as e,a as o,j as i,u as t,v as f,m}from"./app.e1064abd.js";import{_ as g}from"./Button.458257d7.js";import{_ as h}from"./FormSection.b52daece.js";import{_ as v}from"./Input.a37f3c26.js";import{_ as $}from"./InputError.6b5e8373.js";import{_ as n}from"./Label.b2d2eccf.js";import"./SectionTitle.8c979708.js";import"./plugin-vue_export-helper.21dcd24c.js";const T=m(" Team Details "),b=m(" Create a new team to collaborate with others on projects. "),w={class:"col-span-6"},V={class:"flex items-center mt-2"},C=["src","alt"],x={class:"ml-4 leading-tight"},y={class:"text-sm text-gray-700"},B={class:"col-span-6 sm:col-span-4"},N=m(" Create "),q={__name:"CreateTeamForm",setup(j){const s=_({name:""}),c=()=>{s.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(r,l)=>(d(),u(h,{onSubmitted:c},{title:a(()=>[T]),description:a(()=>[b]),form:a(()=>[e("div",w,[o(n,{value:"Team Owner"}),e("div",V,[e("img",{class:"object-cover w-12 h-12 rounded-full",src:r.$page.props.user.profile_photo_url,alt:r.$page.props.user.name},null,8,C),e("div",x,[e("div",null,i(r.$page.props.user.name),1),e("div",y,i(r.$page.props.user.email),1)])])]),e("div",B,[o(n,{for:"name",value:"Team Name"}),o(v,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=p=>t(s).name=p),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o($,{message:t(s).errors.name,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(g,{class:f({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[N]),_:1},8,["class","disabled"])]),_:1}))}};export{q as default};