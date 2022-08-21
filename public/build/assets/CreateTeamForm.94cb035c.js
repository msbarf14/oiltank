import{E as _,b as d,c as u,e as a,f as e,m as o,l as i,u as t,q as f,k as m}from"./app.753034a2.js";import{_ as g}from"./Button.8f97a9ee.js";import{_ as h}from"./FormSection.eb0b96e7.js";import{_ as v}from"./Input.facd3d4b.js";import{_ as $}from"./InputError.f8e0b9a5.js";import{_ as n}from"./Label.c04ef1b0.js";import"./SectionTitle.c4bdf557.js";import"./plugin-vue_export-helper.21dcd24c.js";const b=m(" Team Details "),T=m(" Create a new team to collaborate with others on projects. "),w={class:"col-span-6"},V={class:"flex items-center mt-2"},C=["src","alt"],k={class:"ml-4 leading-tight"},x={class:"text-sm text-gray-700"},y={class:"col-span-6 sm:col-span-4"},B=m(" Create "),U={__name:"CreateTeamForm",setup(N){const s=_({name:""}),c=()=>{s.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(r,l)=>(d(),u(h,{onSubmitted:c},{title:a(()=>[b]),description:a(()=>[T]),form:a(()=>[e("div",w,[o(n,{value:"Team Owner"}),e("div",V,[e("img",{class:"object-cover w-12 h-12 rounded-full",src:r.$page.props.user.profile_photo_url,alt:r.$page.props.user.name},null,8,C),e("div",k,[e("div",null,i(r.$page.props.user.name),1),e("div",x,i(r.$page.props.user.email),1)])])]),e("div",y,[o(n,{for:"name",value:"Team Name"}),o(v,{id:"name",modelValue:t(s).name,"onUpdate:modelValue":l[0]||(l[0]=p=>t(s).name=p),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o($,{message:t(s).errors.name,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(g,{class:f({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:a(()=>[B]),_:1},8,["class","disabled"])]),_:1}))}};export{U as default};
